/**
 * Search and AI crawlers, recognised by user agent.
 *
 * Googlebot's smartphone crawler sends an Android user agent and renders at a
 * phone-sized viewport, so any "send phones to the app store" logic catches it
 * too. From 2026-05-20 to 2026-10-08 that sent Google from /get-the-app to the
 * Play Store, and Search Console recorded the page as a redirect, not a page.
 * Store redirects must check this first.
 *
 * `bot\b` covers Googlebot, AdsBot-Google, Storebot-Google, bingbot, Applebot,
 * GPTBot, OAI-SearchBot, ClaudeBot and PerplexityBot. The named tools below do
 * not say "bot": Search Console's live test (Google-InspectionTool), Google's
 * other crawlers (GoogleOther) and PageSpeed Insights (Chrome-Lighthouse).
 */
export const CRAWLER_UA_RE =
  /bot\b|crawler|spider|slurp|Google-InspectionTool|GoogleOther|Lighthouse|facebookexternalhit/i;

export function isCrawler(ua: string): boolean {
  return CRAWLER_UA_RE.test(ua);
}
