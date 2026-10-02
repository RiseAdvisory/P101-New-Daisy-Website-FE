import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { CONSENT_COOKIE, CONSENT_REQUIRED_COUNTRIES } from '@/lib/consent';

/**
 * Meta Conversions API relay.
 *
 * The browser pixel loses events to ad blockers, ITP and Safari's cookie
 * lifetime. Sending the same conversion server-side recovers those. Meta
 * deduplicates against the browser event when event_name and event_id match,
 * so a conversion is counted once even when both arrive.
 *
 * Only the fields Meta needs for matching leave this server, and every
 * identifier is SHA-256 hashed first, as the API requires.
 *
 * This is a public endpoint that writes conversions into our pixel - the data
 * Meta optimises ad spend on - so it only relays the events the site sends,
 * only from our own pages, and only where advertising consent allows. A
 * determined client can still forge a request; those limits stop the cheap
 * abuse, and the funnel report, not Meta, is the source of truth.
 */

// v21.0 is retired on 2027-01-21. Because failures return 200 by design, an
// expired version would stop every event silently.
const GRAPH_VERSION = 'v26.0';

/** The events src/lib/meta/pixel.ts can send. Anything else is rejected. */
const ALLOWED_EVENTS = new Set(['Lead', 'ViewContent', 'ClickedAppStore', 'GetStartedClick']);

const MAX_BODY_BYTES = 8 * 1024;

/** Our own pages: production, Vercel previews, local development. */
function isOwnOrigin(request: NextRequest): boolean {
  const source = request.headers.get('origin') || request.headers.get('referer');
  if (!source) return false;
  try {
    const host = new URL(source).hostname;
    return (
      host === 'jointhedaisy.com' ||
      host === 'www.jointhedaisy.com' ||
      host.endsWith('.vercel.app') ||
      host === 'localhost'
    );
  } catch {
    return false;
  }
}

/**
 * Defence in depth for the client-side gate in trackConversion(): drop the
 * event when the visitor declined, or is in a territory where advertising
 * consent is required (the site cannot collect it yet; see advertisingAllowed).
 */
function consentBlocks(request: NextRequest): boolean {
  if (request.cookies.get(CONSENT_COOKIE)?.value === 'declined') return true;
  const country = (
    request.headers.get('x-vercel-ip-country') ||
    request.cookies.get('geo-country')?.value ||
    ''
  ).toUpperCase();
  return CONSENT_REQUIRED_COUNTRIES.has(country);
}

/** Meta requires lowercase, trimmed, then SHA-256 hex. */
function hash(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

/** Digits only, with the country code, before hashing. */
function hashPhone(value: string): string | null {
  const digits = value.replace(/\D/g, '');
  return digits ? crypto.createHash('sha256').update(digits).digest('hex') : null;
}

function clientIp(request: NextRequest): string | undefined {
  const fwd = request.headers.get('x-forwarded-for');
  return fwd ? fwd.split(',')[0].trim() : undefined;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;

  // Absent config is not an error: the site should keep working, and a failed
  // conversion ping must never surface to the user or block a form submit.
  if (!pixelId || !token) {
    return NextResponse.json({ ok: false, reason: 'capi-not-configured' }, { status: 200 });
  }

  if (!isOwnOrigin(request)) {
    return NextResponse.json({ ok: false, reason: 'origin' }, { status: 403 });
  }

  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, reason: 'too-large' }, { status: 413 });
  }

  if (consentBlocks(request)) {
    return NextResponse.json({ ok: false, reason: 'consent' }, { status: 200 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'invalid-json' }, { status: 400 });
  }

  const eventName = typeof body.eventName === 'string' ? body.eventName : null;
  const eventId =
    typeof body.eventId === 'string' && body.eventId.length <= 64 ? body.eventId : null;
  if (!eventName || !eventId) {
    return NextResponse.json({ ok: false, reason: 'missing-event' }, { status: 400 });
  }
  if (!ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json({ ok: false, reason: 'event-not-allowed' }, { status: 400 });
  }

  const userData: Record<string, unknown> = {};
  if (typeof body.email === 'string' && body.email.includes('@')) {
    userData.em = [hash(body.email)];
  }
  if (typeof body.phone === 'string') {
    const ph = hashPhone(body.phone);
    if (ph) userData.ph = [ph];
  }
  if (typeof body.country === 'string' && body.country) {
    userData.country = [hash(body.country)];
  }
  // fbp/fbc are first-party cookies Meta sets; they raise match quality a lot.
  if (typeof body.fbp === 'string' && body.fbp) userData.fbp = body.fbp;
  if (typeof body.fbc === 'string' && body.fbc) userData.fbc = body.fbc;

  const ip = clientIp(request);
  if (ip) userData.client_ip_address = ip;
  const ua = request.headers.get('user-agent');
  if (ua) userData.client_user_agent = ua;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: typeof body.sourceUrl === 'string' ? body.sourceUrl : undefined,
        user_data: userData,
        custom_data: isPlainObject(body.customData) ? body.customData : undefined,
      },
    ],
    // In the body rather than the query string, so it cannot end up in a
    // logged URL.
    access_token: token,
  };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error('[meta-capi] rejected', res.status, detail.slice(0, 300));
      return NextResponse.json({ ok: false, reason: 'meta-rejected' }, { status: 200 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[meta-capi] request failed', error);
    return NextResponse.json({ ok: false, reason: 'request-failed' }, { status: 200 });
  }
}
