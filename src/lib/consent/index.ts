/**
 * Shared tracking-consent logic.
 *
 * Previously the country list lived inside ClarityProvider. It is shared here so
 * every tracker gates on the same rule rather than drifting apart.
 *
 * Consent is required in the UK and EEA (UK GDPR + PECR are equivalent to the
 * EU regime for non-essential trackers), and in US states with an opt-out right
 * over "sale/sharing" of personal information, which is how CPRA and its
 * successors treat advertising pixels.
 */

/** UK + EEA: prior opt-in consent required before any non-essential tracker loads. */
export const CONSENT_REQUIRED_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA + UK
  'GB', 'NO', 'IS', 'LI',
]);

/**
 * Opt-out regimes: trackers may load by default, but the user must be able to
 * withdraw. Listed explicitly so the banner can offer opt-out without blocking.
 */
export const OPT_OUT_COUNTRIES = new Set(['US', 'CA']);

export const CONSENT_COOKIE = 'clarity-consent';

export type ConsentState =
  | 'granted'
  | 'denied'
  /** In a consent-required country and the user has not answered yet. */
  | 'pending'
  /** No prior consent needed in this territory. */
  | 'not-required';

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

/** Two-letter country from the geo-country cookie set by middleware.ts. */
export function getCountry(): string {
  return (getCookie('geo-country') || '').toUpperCase();
}

export function consentRequired(country = getCountry()): boolean {
  return CONSENT_REQUIRED_COUNTRIES.has(country);
}

export function getConsentState(): ConsentState {
  const stored = getCookie(CONSENT_COOKIE);
  if (stored === 'accepted') return 'granted';
  if (stored === 'declined') return 'denied';
  return consentRequired() ? 'pending' : 'not-required';
}

/** True when an analytics tracker is allowed to load right now. */
export function trackingAllowed(): boolean {
  const state = getConsentState();
  return state === 'granted' || state === 'not-required';
}

/**
 * True when an ADVERTISING tracker (the Meta pixel and its Conversions API
 * twin) may run. Stricter than trackingAllowed().
 *
 * The only banner today asks about analytics cookies ("You can accept or
 * decline analytics cookies"), so accepting it is not informed consent to
 * advertising tracking. Until a banner offers that choice (PD-6332),
 * advertising runs only where no prior consent is required. An explicit
 * decline is honoured everywhere, including for a visitor who declined in a
 * consent-required country and is now browsing from elsewhere.
 */
export function advertisingAllowed(country = getCountry()): boolean {
  if (getCookie(CONSENT_COOKIE) === 'declined') return false;
  return !consentRequired(country);
}
