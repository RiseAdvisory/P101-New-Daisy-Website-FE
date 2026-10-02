import {
  CONSENT_COOKIE,
  advertisingAllowed,
  consentRequired,
  getConsentState,
  trackingAllowed,
} from '../index';

function setCookies(value: string) {
  Object.defineProperty(document, 'cookie', {
    writable: true,
    configurable: true,
    value,
  });
}

afterEach(() => setCookies(''));

describe('consentRequired', () => {
  it('requires consent in the UK', () => {
    // The UK is a named target market and UK GDPR/PECR match the EU regime,
    // so this must stay true even though the UK is not in the EU.
    expect(consentRequired('GB')).toBe(true);
  });

  it('requires consent across the EEA', () => {
    ['DE', 'FR', 'IE', 'NO', 'IS', 'LI'].forEach((c) =>
      expect(consentRequired(c)).toBe(true),
    );
  });

  it('does not require prior consent in other target markets', () => {
    ['US', 'CA', 'AU', 'NZ', 'AE', 'SA', 'KW', 'BH', 'OM', 'QA'].forEach((c) =>
      expect(consentRequired(c)).toBe(false),
    );
  });
});

describe('getConsentState', () => {
  it('is pending for an undecided UK visitor', () => {
    setCookies('geo-country=GB');
    expect(getConsentState()).toBe('pending');
    expect(trackingAllowed()).toBe(false);
  });

  it('is not-required for a Kuwait visitor', () => {
    setCookies('geo-country=KW');
    expect(getConsentState()).toBe('not-required');
    expect(trackingAllowed()).toBe(true);
  });

  it('honours an explicit decline even where consent is not required', () => {
    setCookies(`geo-country=US; ${CONSENT_COOKIE}=declined`);
    expect(getConsentState()).toBe('denied');
    expect(trackingAllowed()).toBe(false);
  });

  it('honours acceptance in a consent-required country', () => {
    setCookies(`geo-country=GB; ${CONSENT_COOKIE}=accepted`);
    expect(getConsentState()).toBe('granted');
    expect(trackingAllowed()).toBe(true);
  });

  it('treats a missing geo cookie as not requiring consent', () => {
    setCookies('');
    expect(getConsentState()).toBe('not-required');
  });
});

describe('advertisingAllowed', () => {
  // The banner asks about analytics only, so accepting it must not switch on
  // an advertising tracker in a consent-required country.
  it('stays off in the UK even after the analytics banner is accepted', () => {
    setCookies(`geo-country=GB; ${CONSENT_COOKIE}=accepted`);
    expect(trackingAllowed()).toBe(true);
    expect(advertisingAllowed()).toBe(false);
  });

  it('stays off across the EEA before any answer', () => {
    setCookies('geo-country=DE');
    expect(advertisingAllowed()).toBe(false);
  });

  it('runs in Kuwait with no banner interaction', () => {
    setCookies('geo-country=KW');
    expect(advertisingAllowed()).toBe(true);
  });

  it('honours an explicit decline even outside consent-required territories', () => {
    setCookies(`geo-country=KW; ${CONSENT_COOKIE}=declined`);
    expect(advertisingAllowed()).toBe(false);
  });
});
