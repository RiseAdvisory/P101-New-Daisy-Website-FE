/**
 * Attribution capture and propagation for jointhedaisy.com.
 *
 * On first visit we record UTM params, ad-platform click IDs, document.referrer,
 * and the landing page in localStorage so they survive multi-page sessions and
 * are available when a form is submitted or when an outbound link to the
 * app stores / a registration URL is constructed.
 *
 * - First-touch fields are written once and never overwritten.
 * - Last-touch fields are refreshed on every visit that arrives with new
 *   attribution data (e.g. a returning visitor clicks a different ad).
 *
 * The module is SSR-safe: every browser-API call is guarded.
 */

const STORAGE_KEY = 'daisy_attribution';
const STORAGE_VERSION = 1;
/** Refresh the stored record every read so attribution survives 90 days of inactivity. */
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

/** UTM parameters we read from the URL. */
export const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

/** Ad-platform click IDs we capture for closed-loop conversion attribution. */
export const CLICK_ID_PARAMS = [
  'gclid', // Google Ads
  'gbraid', // Google Ads (iOS 14+ enhanced)
  'wbraid', // Google Ads (iOS 14+ web-to-app)
  'fbclid', // Meta (Facebook + Instagram)
  'msclkid', // Microsoft / Bing Ads
  'ttclid', // TikTok Ads
  'twclid', // X / Twitter Ads
  'li_fat_id', // LinkedIn Ads
  'epik', // Pinterest
  'sccid', // Snapchat
] as const;

export interface AttributionTouch {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  ttclid?: string;
  twclid?: string;
  liFatId?: string;
  epik?: string;
  sccid?: string;
  /** document.referrer (the URL the visitor came from). */
  referrer?: string;
  /** First page on the site this touch landed on. */
  landingPage?: string;
  /** ISO timestamp the touch was recorded. */
  timestamp: string;
}

export interface AttributionRecord {
  version: number;
  firstTouch: AttributionTouch;
  lastTouch: AttributionTouch;
  /** Number of distinct sessions (visits) we have observed. */
  sessionCount: number;
  /** ISO timestamp the record was last updated. */
  updatedAt: string;
}

/** Map from URL param → AttributionTouch field name. */
const URL_TO_FIELD: Record<string, keyof AttributionTouch> = {
  utm_source: 'utmSource',
  utm_medium: 'utmMedium',
  utm_campaign: 'utmCampaign',
  utm_term: 'utmTerm',
  utm_content: 'utmContent',
  gclid: 'gclid',
  gbraid: 'gbraid',
  wbraid: 'wbraid',
  fbclid: 'fbclid',
  msclkid: 'msclkid',
  ttclid: 'ttclid',
  twclid: 'twclid',
  li_fat_id: 'liFatId',
  epik: 'epik',
  sccid: 'sccid',
};

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function safeGetStorage(): Storage | null {
  if (!isBrowser()) return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readRecord(): AttributionRecord | null {
  const storage = safeGetStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AttributionRecord;
    if (parsed.version !== STORAGE_VERSION) return null;
    if (Date.now() - new Date(parsed.updatedAt).getTime() > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeRecord(record: AttributionRecord): void {
  const storage = safeGetStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Quota / privacy mode — fall through silently.
  }
}

/** Read attribution params off the current URL (client-side only). */
function touchFromCurrentUrl(): AttributionTouch | null {
  if (!isBrowser()) return null;
  const params = new URLSearchParams(window.location.search);
  const touch: AttributionTouch = { timestamp: new Date().toISOString() };
  let hasAttribution = false;
  for (const [paramName, fieldName] of Object.entries(URL_TO_FIELD)) {
    const value = params.get(paramName);
    if (value) {
      touch[fieldName] = value as never;
      hasAttribution = true;
    }
  }
  // Always record landing page + referrer on first visit, even without UTMs,
  // so we can distinguish organic from direct.
  if (typeof document !== 'undefined' && document.referrer) {
    const isInternalReferrer = document.referrer.includes(window.location.host);
    if (!isInternalReferrer) {
      touch.referrer = document.referrer;
      hasAttribution = true;
    }
  }
  if (window.location.pathname) {
    touch.landingPage = window.location.pathname + window.location.search;
  }
  return hasAttribution || !readRecord() ? touch : null;
}

/**
 * Capture attribution from the current URL into localStorage.
 * Safe to call on every page mount; preserves first-touch semantics.
 */
export function captureAttribution(): void {
  if (!isBrowser()) return;
  const touch = touchFromCurrentUrl();
  const existing = readRecord();
  const now = new Date().toISOString();

  if (!existing) {
    if (!touch) return;
    const initial: AttributionRecord = {
      version: STORAGE_VERSION,
      firstTouch: touch,
      lastTouch: touch,
      sessionCount: 1,
      updatedAt: now,
    };
    writeRecord(initial);
    return;
  }

  // Returning visitor. Update last-touch only if there's new attribution data.
  const next: AttributionRecord = { ...existing, updatedAt: now };
  if (touch && hasAttributionData(touch)) {
    next.lastTouch = touch;
    next.sessionCount = existing.sessionCount + 1;
  }
  writeRecord(next);
}

function hasAttributionData(touch: AttributionTouch): boolean {
  return Object.entries(touch).some(
    ([k, v]) => k !== 'timestamp' && k !== 'landingPage' && Boolean(v),
  );
}

/** Read the stored attribution record, or null if none has been captured. */
export function getAttribution(): AttributionRecord | null {
  return readRecord();
}

/**
 * Build the flat payload that is merged into a form submission.
 * Keeps the original `utmSource`/`utmMedium`/`utmCampaign` keys at the top
 * level (using first-touch values) so the existing backend continues to work,
 * while adding a richer `attribution` object for full closed-loop reporting.
 */
export function buildFormAttributionPayload(): Record<string, unknown> {
  const record = readRecord();
  if (!record) {
    return {
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
    };
  }
  const ft = record.firstTouch;
  return {
    utmSource: ft.utmSource || '',
    utmMedium: ft.utmMedium || '',
    utmCampaign: ft.utmCampaign || '',
    attribution: {
      firstTouch: ft,
      lastTouch: record.lastTouch,
      sessionCount: record.sessionCount,
    },
  };
}

/**
 * Append captured attribution to an outbound URL as query parameters.
 * Used for registration / signup URLs so the destination can ingest the
 * attribution server-side.
 */
export function appendAttributionToUrl(url: string): string {
  const record = readRecord();
  if (!record) return url;
  const ft = record.firstTouch;
  const out = new URL(url, isBrowser() ? window.location.origin : 'https://www.jointhedaisy.com');
  for (const [paramName, fieldName] of Object.entries(URL_TO_FIELD)) {
    const value = ft[fieldName];
    if (value && !out.searchParams.has(paramName)) {
      out.searchParams.set(paramName, String(value));
    }
  }
  if (ft.landingPage && !out.searchParams.has('landing_page')) {
    out.searchParams.set('landing_page', ft.landingPage);
  }
  if (ft.referrer && !out.searchParams.has('referrer')) {
    out.searchParams.set('referrer', ft.referrer);
  }
  // Strip the implicit origin if the original URL was relative.
  return /^https?:/i.test(url) ? out.toString() : out.pathname + out.search + out.hash;
}

/**
 * Append attribution to a Google Play Store URL using the Install Referrer
 * convention: a single URL-encoded `referrer` param that the native app reads
 * via the Play Install Referrer API.
 *
 * For iOS App Store URLs there is no native equivalent; this helper still
 * appends the params for visibility/click-tracking, but install attribution
 * on iOS requires a third-party SDK (Branch / Adjust / AppsFlyer) or Apple
 * Search Ads' attribution API.
 */
export function appendAttributionToAppStoreUrl(
  url: string,
  store: 'google-play' | 'apple-app-store',
): string {
  const record = readRecord();
  if (!record) return url;
  const ft = record.firstTouch;
  const out = new URL(url);

  if (store === 'google-play') {
    const referrerParts: string[] = [];
    for (const [paramName, fieldName] of Object.entries(URL_TO_FIELD)) {
      const value = ft[fieldName];
      if (value) referrerParts.push(`${paramName}=${encodeURIComponent(String(value))}`);
    }
    if (ft.landingPage) {
      referrerParts.push(`landing_page=${encodeURIComponent(ft.landingPage)}`);
    }
    if (referrerParts.length > 0) {
      out.searchParams.set('referrer', referrerParts.join('&'));
    }
    return out.toString();
  }

  // Apple App Store: pass the data anyway for click-tracking and to keep
  // parity in analytics tools; the native app cannot read these on install.
  for (const [paramName, fieldName] of Object.entries(URL_TO_FIELD)) {
    const value = ft[fieldName];
    if (value && !out.searchParams.has(paramName)) {
      out.searchParams.set(paramName, String(value));
    }
  }
  return out.toString();
}

/** Test-only — clear stored attribution. */
export function clearAttribution(): void {
  const storage = safeGetStorage();
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
