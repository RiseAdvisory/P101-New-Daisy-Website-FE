import { getCookie } from '@/lib/consent';
import { MetaEventName, newEventId, trackEvent } from './pixel';

/**
 * Fires a conversion through the browser pixel and the Conversions API with a
 * single shared event ID, so Meta deduplicates them into one conversion.
 *
 * The CAPI call is fire-and-forget: it must never delay or fail a form submit.
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
