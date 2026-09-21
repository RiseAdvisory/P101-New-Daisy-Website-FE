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

/** True when a tracker is allowed to load right now. */
export function trackingAllowed(): boolean {
  const state = getConsentState();
  return state === 'granted' || state === 'not-required';
}
