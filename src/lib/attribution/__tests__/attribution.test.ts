/**
 * @jest-environment jsdom
 */
import {
  captureAttribution,
  getAttribution,
  buildFormAttributionPayload,
  appendAttributionToUrl,
  appendAttributionToAppStoreUrl,
  clearAttribution,
} from '../index';

function setUrl(url: string) {
  const parsed = new URL(url);
  // jsdom URL has navigated to about:blank by default; jump to the host first.
  if (window.location.host !== parsed.host) {
    // jsdom doesn't support hostname mutation via pushState; use jsdomReconfigure-style hack.
    // A simpler approach: change pathname/search via pushState (which jsdom supports);
    // origin / host are baked into the test environment from package config.
  }
  window.history.replaceState({}, '', parsed.pathname + parsed.search + parsed.hash);
}

function setReferrer(value: string) {
  Object.defineProperty(document, 'referrer', {
    configurable: true,
    get: () => value,
  });
}

describe('attribution capture', () => {
  beforeEach(() => {
    clearAttribution();
    setReferrer('');
  });

  it('captures UTM params on first visit', () => {
    setUrl('http://localhost/en/customer?utm_source=google&utm_medium=cpc&utm_campaign=salon_aug');
    captureAttribution();
    const record = getAttribution();
    expect(record).not.toBeNull();
    expect(record?.firstTouch.utmSource).toBe('google');
    expect(record?.firstTouch.utmMedium).toBe('cpc');
    expect(record?.firstTouch.utmCampaign).toBe('salon_aug');
    expect(record?.sessionCount).toBe(1);
    expect(record?.firstTouch.landingPage).toContain('/en/customer');
  });

  it('captures all five UTM dimensions plus click IDs', () => {
    setUrl(
      'http://localhost/en/business?utm_source=meta&utm_medium=paid&utm_campaign=spring&utm_term=salon%20software&utm_content=video_a&fbclid=abc123&gclid=xyz789',
    );
    captureAttribution();
    const ft = getAttribution()?.firstTouch;
    expect(ft?.utmTerm).toBe('salon software');
    expect(ft?.utmContent).toBe('video_a');
    expect(ft?.fbclid).toBe('abc123');
    expect(ft?.gclid).toBe('xyz789');
  });

  it('captures document.referrer when external', () => {
    setReferrer('https://www.google.com/search?q=salon+management');
    setUrl('http://localhost/en/glossary/salon-management-software');
    captureAttribution();
    const ft = getAttribution()?.firstTouch;
    expect(ft?.referrer).toBe('https://www.google.com/search?q=salon+management');
  });

  it('does not record an internal referrer', () => {
    setReferrer('http://localhost/en/business');
    setUrl('http://localhost/en/contact');
    captureAttribution();
    expect(getAttribution()?.firstTouch.referrer).toBeUndefined();
  });

  it('preserves first-touch when a returning visitor arrives with new attribution', () => {
    setUrl('http://localhost/en/customer?utm_source=google&utm_campaign=first');
    captureAttribution();

    setUrl('http://localhost/en/customer?utm_source=meta&utm_campaign=second');
    captureAttribution();

    const record = getAttribution();
    expect(record?.firstTouch.utmCampaign).toBe('first');
    expect(record?.lastTouch.utmCampaign).toBe('second');
    expect(record?.sessionCount).toBe(2);
  });

  it('does not bump session count for plain navigations within a single visit', () => {
    setUrl('http://localhost/en/customer?utm_source=google');
    captureAttribution();
    setUrl('http://localhost/en/contact');
    captureAttribution();
    setUrl('http://localhost/en/pricing/business');
    captureAttribution();
    expect(getAttribution()?.sessionCount).toBe(1);
  });
});

describe('buildFormAttributionPayload', () => {
  beforeEach(() => clearAttribution());

  it('returns empty UTM scaffolding when nothing has been captured', () => {
    expect(buildFormAttributionPayload()).toEqual({
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
    });
  });

  it('returns first-touch UTMs at the top level + the full attribution object', () => {
    setUrl('http://localhost/en/business?utm_source=google&utm_medium=cpc&utm_campaign=spring&gclid=abc');
    captureAttribution();
    const payload = buildFormAttributionPayload();
    expect(payload.utmSource).toBe('google');
    expect(payload.utmMedium).toBe('cpc');
    expect(payload.utmCampaign).toBe('spring');
    expect(payload).toHaveProperty('attribution');
    const attribution = (payload as { attribution: { firstTouch: { gclid?: string } } }).attribution;
    expect(attribution.firstTouch.gclid).toBe('abc');
  });
});

describe('appendAttributionToUrl', () => {
  beforeEach(() => clearAttribution());

  it('returns the url unchanged when no attribution has been captured', () => {
    expect(appendAttributionToUrl('https://example.com/signup')).toBe('https://example.com/signup');
  });

  it('appends first-touch UTMs and click IDs as query params', () => {
    setUrl('http://localhost/en/customer?utm_source=google&utm_medium=cpc&gclid=abc');
    captureAttribution();
    const out = new URL(appendAttributionToUrl('https://signup.daisy.com/start'));
    expect(out.searchParams.get('utm_source')).toBe('google');
    expect(out.searchParams.get('utm_medium')).toBe('cpc');
    expect(out.searchParams.get('gclid')).toBe('abc');
  });

  it('does not overwrite params already on the destination url', () => {
    setUrl('http://localhost/en/customer?utm_source=google');
    captureAttribution();
    const out = new URL(appendAttributionToUrl('https://signup.daisy.com/start?utm_source=internal'));
    expect(out.searchParams.get('utm_source')).toBe('internal');
  });
});

describe('appendAttributionToAppStoreUrl', () => {
  beforeEach(() => clearAttribution());

  it('packs Google Play URLs with a single Install Referrer param', () => {
    setUrl('http://localhost/en/business?utm_source=google&utm_medium=cpc&utm_campaign=spring&gclid=abc');
    captureAttribution();
    const out = new URL(
      appendAttributionToAppStoreUrl(
        'https://play.google.com/store/apps/details?id=com.trythedaisy.app',
        'google-play',
      ),
    );
    const referrer = out.searchParams.get('referrer');
    expect(referrer).toBeTruthy();
    expect(referrer).toContain('utm_source=google');
    expect(referrer).toContain('utm_medium=cpc');
    expect(referrer).toContain('utm_campaign=spring');
    expect(referrer).toContain('gclid=abc');
  });

  it('passes UTMs through as individual params on Apple App Store URLs', () => {
    setUrl('http://localhost/en/business?utm_source=meta&utm_campaign=spring&fbclid=xyz');
    captureAttribution();
    const out = new URL(
      appendAttributionToAppStoreUrl(
        'https://apps.apple.com/kw/app/the-daisy/id1667105749',
        'apple-app-store',
      ),
    );
    expect(out.searchParams.get('utm_source')).toBe('meta');
    expect(out.searchParams.get('utm_campaign')).toBe('spring');
    expect(out.searchParams.get('fbclid')).toBe('xyz');
    // Apple URL should NOT use the consolidated `referrer` packing.
    expect(out.searchParams.get('referrer')).toBeNull();
  });

  it('returns the url unchanged when no attribution has been captured', () => {
    const url = 'https://play.google.com/store/apps/details?id=com.trythedaisy.app';
    expect(appendAttributionToAppStoreUrl(url, 'google-play')).toBe(url);
  });
});
