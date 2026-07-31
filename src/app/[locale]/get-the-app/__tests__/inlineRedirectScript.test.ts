import fs from 'fs';
import path from 'path';
import { detectInAppBrowser } from '@/lib/utils/inAppBrowser';

/**
 * The pre-paint script in page.tsx cannot import the shared detector, so it
 * carries its own copy of the in-app-browser regex. These tests keep the two
 * from drifting: a new webview added to detectInAppBrowser() but not to the
 * inline script would silently reintroduce the dead-end redirect.
 */

const PAGE_SOURCE = fs.readFileSync(
  path.join(__dirname, '..', 'page.tsx'),
  'utf8',
);

function extractInlineRegex(): RegExp {
  const match = PAGE_SOURCE.match(/const IN_APP_UA_RE =\s*([\s\S]*?);\n/);
  if (!match) throw new Error('IN_APP_UA_RE not found in page.tsx');
  const literal = match[1].trim();
  const parts = literal.match(/^\/(.*)\/([a-z]*)$/s);
  if (!parts) throw new Error(`IN_APP_UA_RE is not a regex literal: ${literal}`);
  return new RegExp(parts[1], parts[2]);
}

const IN_APP_UAS = [
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram 302.0.0.23.109',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone13,2]',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 BytedanceWebview/d8a21c6',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Snapchat/12.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 LinkedInApp',
];

const ORDINARY_UAS = [
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Chrome/116.0.0.0 Mobile Safari/537.36',
];

describe('inline pre-paint redirect script', () => {
  it('agrees with the shared detector on in-app browsers', () => {
    const inlineRe = extractInlineRegex();
    for (const ua of IN_APP_UAS) {
      expect(detectInAppBrowser(ua)).not.toBeNull();
      expect(inlineRe.test(ua)).toBe(true);
    }
  });

  it('agrees with the shared detector on ordinary browsers', () => {
    const inlineRe = extractInlineRegex();
    for (const ua of ORDINARY_UAS) {
      expect(detectInAppBrowser(ua)).toBeNull();
      expect(inlineRe.test(ua)).toBe(false);
    }
  });

  it('bails out before redirecting when iOS and in-app both match', () => {
    // The guard clause is what stops the dead-end App Store navigation.
    expect(PAGE_SOURCE).toContain('if(iOS&&inApp){return;}');
  });

  it('still redirects ordinary mobile visitors to the stores', () => {
    expect(PAGE_SOURCE).toContain('window.location.replace(');
    expect(PAGE_SOURCE).toContain('max-width: 767px');
  });
});
