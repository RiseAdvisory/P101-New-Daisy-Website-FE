/**
 * In-app browser detection and escape helpers.
 *
 * THE PROBLEM
 *
 * Instagram's iOS in-app browser blocks navigation to App Store links. A
 * visitor who taps a download CTA from an Instagram bio or story gets a dead
 * end: the page appears to do nothing. Google Play links are unaffected, and
 * so is Instagram's Android webview, so this is specifically iOS.
 *
 * THE FIX, AND ITS LIMIT
 *
 * iOS offers no documented way to hand a session from an in-app browser to
 * Safari. `x-safari-https://` is the widely used trick and works in many
 * in-app webviews, but it is undocumented and can be blocked. So the escape
 * is BEST EFFORT and must always be paired with visible instructions
 * ("tap the ••• menu, then Open in browser"). Never rely on it alone: a
 * silent failure would leave the visitor exactly where they started.
 *
 * Rather than escaping straight to the App Store, callers escape to our own
 * /get-the-app page. Once that page loads in Safari the ordinary redirect
 * logic runs there and works, which keeps store-routing in one place.
 */

/** In-app browsers that share the iOS App Store restriction. */
export type InAppBrowser =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'snapchat'
  | 'linkedin';

/**
 * Identify the in-app browser from a user-agent string, or null for ordinary
 * browsers. Meta's apps (Instagram, Facebook, Messenger) share a webview and
 * therefore share the restriction; the others are included because they
 * behave the same way and cost nothing to cover.
 */
export function detectInAppBrowser(ua: string): InAppBrowser | null {
  if (!ua) return null;
  // Instagram is checked first: its UA also carries Facebook tokens, and the
  // more specific attribution is the useful one for debugging.
  if (/Instagram/i.test(ua)) return 'instagram';
  if (/FBAN|FBAV|FB_IAB|FBIOS/i.test(ua)) return 'facebook';
  if (/BytedanceWebview|musical_ly|TikTok/i.test(ua)) return 'tiktok';
  if (/Snapchat/i.test(ua)) return 'snapchat';
  if (/LinkedInApp/i.test(ua)) return 'linkedin';
  return null;
}

/** True for iPhone/iPad/iPod, excluding IE mobile's iOS-lookalike UA. */
export function isIOSDevice(ua: string, hasMSStream = false): boolean {
  return /iPad|iPhone|iPod/.test(ua) && !hasMSStream;
}

export function isAndroidDevice(ua: string): boolean {
  return /android/i.test(ua);
}

/**
 * True when a direct App Store navigation would dead-end, so the caller must
 * route to /get-the-app and let the escape flow handle it instead.
 *
 * Scoped to iOS on purpose: Android in-app browsers open Play Store links
 * without complaint, so intercepting them would add friction for no gain.
 */
export function needsAppStoreEscape(ua: string, hasMSStream = false): boolean {
  return isIOSDevice(ua, hasMSStream) && detectInAppBrowser(ua) !== null;
}

/**
 * Marker appended to the escaped URL so the page that opens in Safari can
 * tell it already came through the escape flow. Guards against a loop if a
 * future in-app browser somehow preserves its own user agent.
 */
export const ESCAPE_PARAM = 'ext';

/**
 * Best-effort Safari hand-off URL. iOS routes `x-safari-` + the original
 * scheme to Safari, so https becomes `x-safari-https://`.
 *
 * http is accepted as well as https: the prefix is scheme-agnostic, and
 * refusing it would silently disable the hand-off on local development
 * builds, which are served over http.
 *
 * Returns null for anything else (relative paths, other schemes) rather than
 * producing a malformed URL.
 */
export function buildSafariEscapeUrl(url: string): string | null {
  const match = url.match(/^(https?):\/\//i);
  if (!match) return null;
  const scheme = match[1].toLowerCase();
  const withMarker = appendEscapeMarker(url);
  return withMarker.replace(/^https?:\/\//i, `x-safari-${scheme}://`);
}

/**
 * Android equivalent, kept for completeness. Android in-app browsers do not
 * currently need this, so nothing calls it yet; it exists so the fix is a
 * one-line change if Instagram extends the restriction.
 */
export function buildChromeIntentUrl(httpsUrl: string): string | null {
  if (!/^https:\/\//i.test(httpsUrl)) return null;
  const withMarker = appendEscapeMarker(httpsUrl);
  const withoutScheme = withMarker.replace(/^https:\/\//i, '');
  return `intent://${withoutScheme}#Intent;scheme=https;package=com.android.chrome;end`;
}

function appendEscapeMarker(url: string): string {
  if (new RegExp(`[?&]${ESCAPE_PARAM}=1(&|$)`).test(url)) return url;
  return url + (url.includes('?') ? '&' : '?') + `${ESCAPE_PARAM}=1`;
}

/** True when the current URL already came through the escape flow. */
export function hasEscapeMarker(search: string): boolean {
  return new URLSearchParams(search).get(ESCAPE_PARAM) === '1';
}
