/**
 * Meta Pixel event helpers.
 *
 * Every call is a no-op when the pixel has not loaded (no consent, no pixel ID,
 * ad blocker), so callers never need to guard. Events carry an eventID so the
 * browser event and its Conversions API twin deduplicate in Meta rather than
 * double-counting.
 *
 * Keep the event set small. iOS Aggregated Event Measurement allows 8 events per
 * domain, and a sprawling taxonomy dilutes optimisation.
 */

type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
  }
}

export type MetaEventName =
  /** Trial form submitted on /start-free-trial. The primary web conversion. */
  | 'Lead'
  /**
   * A persona landing page (/business, /professional) viewed. The live ad set
   * optimises for CONTENT_VIEW, so this is the event it learns from.
   */
  | 'ViewContent'
  /** Outbound click to the App Store or Play Store. Install intent proxy. */
  | 'ClickedAppStore'
  /**
   * Click-through on a "Get started" CTA to web signup. Deliberately not Lead:
   * optimising on a click labelled Lead would teach Meta to find people who
   * click, not people who sign up. Lead is reserved for a completed signup.
   */
  | 'GetStartedClick';

const STANDARD_EVENTS = new Set<MetaEventName>(['Lead', 'ViewContent']);

/** Unique per event occurrence; shared with the CAPI payload for dedup. */
export function newEventId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function fbq(): FbqFn | undefined {
  return typeof window !== 'undefined' ? window.fbq : undefined;
}

export function isPixelLoaded(): boolean {
  return typeof fbq() === 'function';
}

/**
 * Fire a pixel event. Returns the eventID so the caller can pass the same value
 * to the Conversions API; returns null when the pixel is not available.
 */
export function trackEvent(
  name: MetaEventName,
  params: Record<string, unknown> = {},
  eventId: string = newEventId(),
): string | null {
  const f = fbq();
  if (!f) return null;
  const verb = STANDARD_EVENTS.has(name) ? 'track' : 'trackCustom';
  f(verb, name, params, { eventID: eventId });
  return eventId;
}

/** Trial form submitted. `persona` distinguishes business from professional. */
export function trackLead(
  persona: 'business' | 'professional',
  eventId?: string,
): string | null {
  return trackEvent(
    'Lead',
    { content_category: persona, content_name: `start-free-trial:${persona}` },
    eventId ?? newEventId(),
  );
}

/** Outbound click to a store listing. */
export function trackAppStoreClick(platform: 'ios' | 'android'): string | null {
  return trackEvent('ClickedAppStore', { platform });
}

export function trackViewContent(
  contentName: string,
  persona?: 'business' | 'professional',
): string | null {
  return trackEvent('ViewContent', {
    content_name: contentName,
    ...(persona ? { content_category: persona } : {}),
  });
}
