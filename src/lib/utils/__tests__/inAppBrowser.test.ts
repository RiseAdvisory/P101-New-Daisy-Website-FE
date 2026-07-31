import {
  detectInAppBrowser,
  isIOSDevice,
  isAndroidDevice,
  needsAppStoreEscape,
  buildSafariEscapeUrl,
  buildChromeIntentUrl,
  hasEscapeMarker,
  ESCAPE_PARAM,
} from '../inAppBrowser';

// Real-world user agents. Keeping the full strings matters: Instagram's iOS
// UA also carries Mobile/15E148 like Safari, and Facebook's carries FBAN
// inside a bracketed block, so truncated samples would not exercise the
// ordering the detector relies on.
const UA = {
  instagramIOS:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 302.0.0.23.109 (iPhone14,3; iOS 17_0; en_US; en-US; scale=3.00; 1284x2778; 511802498)',
  instagramAndroid:
    'Mozilla/5.0 (Linux; Android 13; SM-S908B Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 Instagram 302.0.0.23.109 Android',
  facebookIOS:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone13,2;FBMD/iPhone;FBSN/iOS;FBSV/16.6]',
  tiktokIOS:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 BytedanceWebview/d8a21c6',
  safariIOS:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  chromeAndroid:
    'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
  chromeDesktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
};

describe('detectInAppBrowser', () => {
  it('identifies Instagram on iOS and Android', () => {
    expect(detectInAppBrowser(UA.instagramIOS)).toBe('instagram');
    expect(detectInAppBrowser(UA.instagramAndroid)).toBe('instagram');
  });

  it('identifies other webviews that share the restriction', () => {
    expect(detectInAppBrowser(UA.facebookIOS)).toBe('facebook');
    expect(detectInAppBrowser(UA.tiktokIOS)).toBe('tiktok');
  });

  it('returns null for ordinary browsers', () => {
    expect(detectInAppBrowser(UA.safariIOS)).toBeNull();
    expect(detectInAppBrowser(UA.chromeAndroid)).toBeNull();
    expect(detectInAppBrowser(UA.chromeDesktop)).toBeNull();
    expect(detectInAppBrowser('')).toBeNull();
  });
});

describe('device detection', () => {
  it('detects iOS, including inside in-app browsers', () => {
    expect(isIOSDevice(UA.safariIOS)).toBe(true);
    expect(isIOSDevice(UA.instagramIOS)).toBe(true);
    expect(isIOSDevice(UA.chromeAndroid)).toBe(false);
  });

  it('does not treat IE mobile as iOS', () => {
    expect(isIOSDevice(UA.safariIOS, true)).toBe(false);
  });

  it('detects Android', () => {
    expect(isAndroidDevice(UA.chromeAndroid)).toBe(true);
    expect(isAndroidDevice(UA.instagramAndroid)).toBe(true);
    expect(isAndroidDevice(UA.safariIOS)).toBe(false);
  });
});

describe('needsAppStoreEscape', () => {
  it('is true for in-app browsers on iOS, where App Store links dead-end', () => {
    expect(needsAppStoreEscape(UA.instagramIOS)).toBe(true);
    expect(needsAppStoreEscape(UA.facebookIOS)).toBe(true);
    expect(needsAppStoreEscape(UA.tiktokIOS)).toBe(true);
  });

  it('is false on Android, where Play Store links open normally', () => {
    // Intercepting Android would add friction with nothing to fix.
    expect(needsAppStoreEscape(UA.instagramAndroid)).toBe(false);
  });

  it('is false in ordinary browsers', () => {
    expect(needsAppStoreEscape(UA.safariIOS)).toBe(false);
    expect(needsAppStoreEscape(UA.chromeDesktop)).toBe(false);
  });
});

describe('buildSafariEscapeUrl', () => {
  it('swaps the scheme and marks the URL as escaped', () => {
    expect(buildSafariEscapeUrl('https://www.jointhedaisy.com/en/get-the-app')).toBe(
      `x-safari-https://www.jointhedaisy.com/en/get-the-app?${ESCAPE_PARAM}=1`,
    );
  });

  it('keeps existing query parameters', () => {
    expect(buildSafariEscapeUrl('https://example.com/p?a=1')).toBe(
      `x-safari-https://example.com/p?a=1&${ESCAPE_PARAM}=1`,
    );
  });

  it('does not add the marker twice', () => {
    const once = buildSafariEscapeUrl('https://example.com/p')!;
    const twice = buildSafariEscapeUrl(once.replace('x-safari-https://', 'https://'))!;
    expect(twice.match(new RegExp(`${ESCAPE_PARAM}=1`, 'g'))).toHaveLength(1);
  });

  it('handles http too, so the hand-off still works on local builds', () => {
    expect(buildSafariEscapeUrl('http://localhost:3000/en/get-the-app')).toBe(
      `x-safari-http://localhost:3000/en/get-the-app?${ESCAPE_PARAM}=1`,
    );
  });

  it('refuses anything that is not http(s) rather than building a broken URL', () => {
    expect(buildSafariEscapeUrl('/en/get-the-app')).toBeNull();
    expect(buildSafariEscapeUrl('mailto:hi@example.com')).toBeNull();
    expect(buildSafariEscapeUrl('')).toBeNull();
  });
});

describe('buildChromeIntentUrl', () => {
  it('builds an intent URL targeting Chrome', () => {
    expect(buildChromeIntentUrl('https://example.com/p')).toBe(
      `intent://example.com/p?${ESCAPE_PARAM}=1#Intent;scheme=https;package=com.android.chrome;end`,
    );
  });

  it('refuses non-https input', () => {
    expect(buildChromeIntentUrl('http://example.com')).toBeNull();
  });
});

describe('hasEscapeMarker', () => {
  it('recognises a URL that already came through the escape flow', () => {
    expect(hasEscapeMarker(`?${ESCAPE_PARAM}=1`)).toBe(true);
    expect(hasEscapeMarker(`?a=1&${ESCAPE_PARAM}=1`)).toBe(true);
  });

  it('is false otherwise', () => {
    expect(hasEscapeMarker('')).toBe(false);
    expect(hasEscapeMarker('?a=1')).toBe(false);
    expect(hasEscapeMarker(`?${ESCAPE_PARAM}=0`)).toBe(false);
  });
});
