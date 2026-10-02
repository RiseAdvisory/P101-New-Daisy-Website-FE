import { advertisingAllowed, getCookie } from '@/lib/consent';
import { MetaEventName, newEventId, trackEvent } from './pixel';

/**
 * Fires a conversion through the browser pixel and the Conversions API with a
 * single shared event ID, so Meta deduplicates them into one conversion.
 *
 * The CAPI call is fire-and-forget: it must never delay or fail a form submit.
 *
 * Both halves are consent-gated. The browser pixel is no-op without consent
 * because it never loads, but the CAPI call used to go out regardless - sending
 * a declined or undecided visitor's hashed email and phone to Meta through our
 * own server. Hashed identifiers are still personal data under GDPR.
 */
export async function trackConversion(
  eventName: MetaEventName,
  options: {
    email?: string;
    phone?: string;
    country?: string;
    customData?: Record<string, unknown>;
  } = {},
): Promise<void> {
  if (!advertisingAllowed()) return;
  const eventId = newEventId();

  // Browser side. No-ops when the pixel has not loaded.
  trackEvent(eventName, options.customData ?? {}, eventId);

  try {
    await fetch('/api/meta/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        eventName,
        eventId,
        email: options.email,
        phone: options.phone,
        country: options.country,
        customData: options.customData,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        fbp: getCookie('_fbp') ?? undefined,
        fbc: getCookie('_fbc') ?? undefined,
      }),
    });
  } catch {
    // Swallow: analytics must not affect the user's journey.
  }
}
