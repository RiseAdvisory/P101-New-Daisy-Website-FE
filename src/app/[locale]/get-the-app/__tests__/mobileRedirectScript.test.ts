import { MOBILE_REDIRECT_SCRIPT } from '../mobileRedirectScript';
import { buttonAppData } from '@/lib/constants/shared/buttonAppData';

/**
 * Runs the real pre-paint script against a stub window. Googlebot's smartphone
 * crawler sends an Android user agent at a phone viewport, so before the
 * crawler guard it was redirected to the Play Store and Search Console
 * recorded /get-the-app as a redirect.
 */
function run(ua: string, { phone = true } = {}): string | null {
  let target: string | null = null;
  const window = {
    matchMedia: () => ({ matches: phone }),
    location: { replace: (url: string) => { target = url; } },
  };
  // eslint-disable-next-line no-new-func
  new Function('window', 'navigator', MOBILE_REDIRECT_SCRIPT)(window, { userAgent: ua });
  return target;
}

const GOOGLEBOT_SMARTPHONE =
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.69 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const INSPECTION_TOOL =
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.69 Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0;)';
const ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const IPHONE_INSTAGRAM = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram 302.0.0.23.109';

describe('/get-the-app pre-paint redirect', () => {
  it('leaves Googlebot smartphone on the page', () => {
    expect(run(GOOGLEBOT_SMARTPHONE)).toBeNull();
  });

  it('leaves the Search Console live test on the page', () => {
    expect(run(INSPECTION_TOOL)).toBeNull();
  });

  it('still sends Android phones to the Play Store', () => {
    expect(run(ANDROID)).toBe(buttonAppData.en.googlePlay.link);
  });

  it('still sends iPhones to the App Store', () => {
    expect(run(IPHONE)).toBe(buttonAppData.en.appStore.link);
  });

  it('keeps iPhone in-app browsers on the page', () => {
    expect(run(IPHONE_INSTAGRAM)).toBeNull();
  });

  it('keeps desktop-width visitors on the page', () => {
    expect(run(ANDROID, { phone: false })).toBeNull();
  });
});
