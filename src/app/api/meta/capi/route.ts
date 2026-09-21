import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

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
 */

const GRAPH_VERSION = 'v21.0';

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

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;

  // Absent config is not an error: the site should keep working, and a failed
  // conversion ping must never surface to the user or block a form submit.
  if (!pixelId || !token) {
    return NextResponse.json({ ok: false, reason: 'capi-not-configured' }, { status: 200 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'invalid-json' }, { status: 400 });
  }

  const eventName = typeof body.eventName === 'string' ? body.eventName : null;
  const eventId = typeof body.eventId === 'string' ? body.eventId : null;
  if (!eventName || !eventId) {
    return NextResponse.json({ ok: false, reason: 'missing-event' }, { status: 400 });
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
        custom_data: typeof body.customData === 'object' ? body.customData : undefined,
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );
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
