/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import MobileAppRedirector, {
  resolveStoreUrl,
  GET_THE_APP_PATH_RE,
  IOS_URL,
  ANDROID_URL,
} from '../MobileAppRedirector';

const IPHONE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15';
const ANDROID_UA =
  'Mozilla/5.0 (Linux; Android 14; SM-G990B) AppleWebKit/537.36';
const DESKTOP_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';
const KAIOS_UA =
  'Mozilla/5.0 (Mobile; KAIOS/2.5) Gecko/20100101 Firefox/48.0';
const LEGACY_IE_UA =
  'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; iPhone)';

function mockMatchMedia(matches: boolean) {
  (window as unknown as { matchMedia: unknown }).matchMedia = jest
    .fn()
    .mockImplementation(() => ({ matches }));
}

function mockUserAgent(ua: string) {
  Object.defineProperty(navigator, 'userAgent', {
    configurable: true,
    get: () => ua,
  });
}

function clickLink(pathname: string, init: MouseEventInit = {}) {
  const a = document.createElement('a');
  a.href = `https://example.com${pathname}`;
  document.body.appendChild(a);
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
    ...init,
  });
  a.dispatchEvent(event);
  return event;
}

describe('resolveStoreUrl', () => {
  it('returns the App Store URL for iPhone', () => {
    expect(resolveStoreUrl(IPHONE_UA)).toBe(IOS_URL);
  });

  it('returns the App Store URL for iPad', () => {
    expect(
      resolveStoreUrl(
        'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
      ),
    ).toBe(IOS_URL);
  });

  it('returns the Play Store URL for Android', () => {
    expect(resolveStoreUrl(ANDROID_UA)).toBe(ANDROID_URL);
  });

  it('returns null for desktop UA so the on-site page is shown', () => {
    expect(resolveStoreUrl(DESKTOP_UA)).toBeNull();
  });

  it('returns null for unknown mobile UA (KaiOS)', () => {
    expect(resolveStoreUrl(KAIOS_UA)).toBeNull();
  });

  it('does NOT mis-route legacy Windows Phone that spoofs iPhone in its UA', () => {
    // hasMSStream guards against ancient IE Mobile that included "iPhone" in
    // its UA string. With the guard, we correctly skip it.
    expect(resolveStoreUrl(LEGACY_IE_UA, /* hasMSStream */ true)).toBeNull();
  });
});

describe('GET_THE_APP_PATH_RE', () => {
  it.each(['/en/get-the-app', '/ar/get-the-app', '/en/get-the-app/'])(
    'matches %s',
    (path) => {
      expect(GET_THE_APP_PATH_RE.test(path)).toBe(true);
    },
  );

  it.each([
    '/get-the-app',
    '/en/pricing/business',
    '/en/get-the-app/extra',
    '/fr/get-the-app',
  ])('does not match %s', (path) => {
    expect(GET_THE_APP_PATH_RE.test(path)).toBe(false);
  });
});

describe('MobileAppRedirector click interception', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('preventDefaults iPhone clicks on /en/get-the-app', () => {
    mockMatchMedia(true);
    mockUserAgent(IPHONE_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/en/get-the-app');

    expect(event.defaultPrevented).toBe(true);
  });

  it('preventDefaults Android clicks on /ar/get-the-app', () => {
    mockMatchMedia(true);
    mockUserAgent(ANDROID_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/ar/get-the-app');

    expect(event.defaultPrevented).toBe(true);
  });

  it('does NOT intercept on desktop viewport', () => {
    mockMatchMedia(false);
    mockUserAgent(DESKTOP_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/en/get-the-app');

    expect(event.defaultPrevented).toBe(false);
  });

  it('does NOT intercept non-get-the-app links', () => {
    mockMatchMedia(true);
    mockUserAgent(IPHONE_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/en/pricing/business');

    expect(event.defaultPrevented).toBe(false);
  });

  it('does NOT intercept Cmd-clicks (open in new tab)', () => {
    mockMatchMedia(true);
    mockUserAgent(IPHONE_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/en/get-the-app', { metaKey: true });

    expect(event.defaultPrevented).toBe(false);
  });

  it('does NOT intercept on mobile viewport with unknown UA (KaiOS)', () => {
    // Unknown mobile UA falls through so the user sees the on-site page with
    // both store buttons rather than being misrouted.
    mockMatchMedia(true);
    mockUserAgent(KAIOS_UA);
    render(<MobileAppRedirector />);

    const event = clickLink('/en/get-the-app');

    expect(event.defaultPrevented).toBe(false);
  });
});
