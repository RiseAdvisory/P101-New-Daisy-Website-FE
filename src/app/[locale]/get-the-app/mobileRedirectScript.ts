import { buttonAppData } from '@/lib/constants/shared/buttonAppData';
import { CRAWLER_UA_RE } from '@/lib/utils/crawler';

// Mobile visitors are routed straight to the App Store or Play Store based on
// their device OS. Desktop and tablet visitors see the full page. Runs before
// paint so there's no flash of /get-the-app content on phones. This covers
// hard navigations (direct URL, refresh, external links); CTA clicks from
// inside the app are intercepted by MobileAppRedirector in the layout.
//
// Crawlers are left on the page. Googlebot's smartphone crawler looks like an
// Android phone, and redirecting it made Google record /get-the-app as a
// redirect to the Play Store instead of indexing it.
//
// Kept outside page.tsx because a Next.js page file may only export the
// page, its metadata and route config, and tests need to run this script.
const IOS_URL = buttonAppData.en.appStore.link;
const ANDROID_URL = buttonAppData.en.googlePlay.link;
// The in-app-browser test is duplicated here rather than imported because
// this runs as an inline pre-paint script. Keep it in step with
// detectInAppBrowser() in src/lib/utils/inAppBrowser.ts; a shared test
// asserts the two stay aligned.
const IN_APP_UA_RE =
  /Instagram|FBAN|FBAV|FB_IAB|FBIOS|BytedanceWebview|musical_ly|TikTok|Snapchat|LinkedInApp/i;
export const MOBILE_REDIRECT_SCRIPT = `(function(){try{var ua=navigator.userAgent||'';if(${CRAWLER_UA_RE.toString()}.test(ua)){return;}var iOS=/iPad|iPhone|iPod/.test(ua)&&!window.MSStream;var inApp=${IN_APP_UA_RE.toString()}.test(ua);if(iOS&&inApp){return;}if(window.matchMedia&&window.matchMedia('(max-width: 767px)').matches){if(iOS){window.location.replace(${JSON.stringify(IOS_URL)});}else if(/android/i.test(ua)){window.location.replace(${JSON.stringify(ANDROID_URL)});}}}catch(e){}})();`;
