/**
 * @jest-environment jsdom
 */
import {
  buildSignupUrl,
  campaignSlugFromPath,
  captureAttribution,
  clearAttribution,
  SIGNUP_URL,
} from '../index';

/**
 * Covers PD-6306. The two acceptance criteria are asserted literally, plus
 * the multi-page case that a current-URL check would get wrong.
 */

function visitWith(search: string, pathname = '/en/business') {
  // captureAttribution reads window.location. jsdom marks location
  // non-configurable, so navigate with replaceState, which it does support.
  window.history.replaceState({}, '', pathname + search);
  captureAttribution();
}

beforeEach(() => {
  clearAttribution();
});

describe('campaignSlugFromPath', () => {
  it('drops the locale so a page is one campaign in both languages', () => {
    expect(campaignSlugFromPath('/en/business')).toBe('business');
    expect(campaignSlugFromPath('/ar/business')).toBe('business');
  });

  it('flattens nested paths into a readable slug', () => {
    expect(campaignSlugFromPath('/en/features/business/booking-management')).toBe(
      'features-business-booking-management',
    );
    expect(campaignSlugFromPath('/ar/pricing/professional')).toBe('pricing-professional');
  });

  it('handles trailing slashes and the root', () => {
    expect(campaignSlugFromPath('/en/business/')).toBe('business');
    expect(campaignSlugFromPath('/en')).toBe('home');
    expect(campaignSlugFromPath('/')).toBe('home');
  });

  it('does not mistake a path segment that merely starts with the locale', () => {
    expect(campaignSlugFromPath('/enterprise')).toBe('enterprise');
  });
});

describe('buildSignupUrl — STAMP (organic arrival)', () => {
  it('stamps source, medium and the page slug', () => {
    // AC 1: organic visit to a business page.
    visitWith('', '/en/business');
    const url = new URL(buildSignupUrl('business'));

    expect(url.origin + url.pathname).toBe(`${SIGNUP_URL}/`);
    expect(url.searchParams.get('utm_source')).toBe('website');
    expect(url.searchParams.get('utm_medium')).toBe('cta');
    expect(url.searchParams.get('utm_campaign')).toBe('business');
  });

  it('stamps the slug it is given, per page', () => {
    visitWith('', '/en/pricing/professional');
    const url = new URL(buildSignupUrl('pricing-professional'));
    expect(url.searchParams.get('utm_campaign')).toBe('pricing-professional');
  });

  it('stamps when there is no stored attribution at all', () => {
    // Server render, or a brand-new visitor: stamping is the right default.
    clearAttribution();
    const url = new URL(buildSignupUrl('business'));
    expect(url.searchParams.get('utm_source')).toBe('website');
    expect(url.searchParams.get('utm_medium')).toBe('cta');
  });
});

describe('buildSignupUrl — FORWARD (arrived from an ad)', () => {
  it('forwards the ad params verbatim and does not re-stamp', () => {
    // AC 2, using the exact params from the ticket.
    visitWith(
      '?utm_source=meta_ads&utm_medium=paid_social&utm_campaign=kw-vendor-v1',
      '/en/business',
    );
    const url = new URL(buildSignupUrl('business'));

    expect(url.searchParams.get('utm_source')).toBe('meta_ads');
    expect(url.searchParams.get('utm_medium')).toBe('paid_social');
    expect(url.searchParams.get('utm_campaign')).toBe('kw-vendor-v1');
    // The stamp must not have overwritten anything.
    expect(url.searchParams.get('utm_source')).not.toBe('website');
    expect(url.searchParams.get('utm_medium')).not.toBe('cta');
  });

  it('forwards ad click ids, which are what close the loop on a conversion', () => {
    visitWith('?utm_source=meta_ads&fbclid=abc123', '/en/business');
    const url = new URL(buildSignupUrl('business'));
    expect(url.searchParams.get('fbclid')).toBe('abc123');
  });

  it('forwards a click id even when the ad sent no utm_ params', () => {
    // Meta often drops fbclid with no utms. That is still paid traffic.
    visitWith('?gclid=xyz789', '/en/business');
    const url = new URL(buildSignupUrl('business'));
    expect(url.searchParams.get('gclid')).toBe('xyz789');
    expect(url.searchParams.get('utm_source')).not.toBe('website');
  });
});

describe('buildSignupUrl — first touch wins across a multi-page session', () => {
  it('does not relabel paid traffic as organic after the visitor browses on', () => {
    // The case the ticket's stated mechanism would get wrong: the CTA is
    // clicked on a page whose URL carries no utm_ params.
    visitWith(
      '?utm_source=meta_ads&utm_medium=paid_social&utm_campaign=kw-vendor-v1',
      '/en/business',
    );
    // Second page, clean URL.
    visitWith('', '/en/pricing/business');

    const url = new URL(buildSignupUrl('pricing-business'));
    expect(url.searchParams.get('utm_source')).toBe('meta_ads');
    expect(url.searchParams.get('utm_campaign')).toBe('kw-vendor-v1');
    expect(url.searchParams.get('utm_campaign')).not.toBe('pricing-business');
  });

  it('keeps the first ad when a second ad is clicked later', () => {
    visitWith('?utm_source=meta_ads&utm_campaign=first', '/en/business');
    visitWith('?utm_source=google_ads&utm_campaign=second', '/en/business');

    const url = new URL(buildSignupUrl('business'));
    expect(url.searchParams.get('utm_source')).toBe('meta_ads');
    expect(url.searchParams.get('utm_campaign')).toBe('first');
  });

  it('forwards the ad for a visitor who first found the site organically', () => {
    // Caught in a real browser, not by the tests above: they all start from
    // cleared storage, so none of them had a returning visitor. Someone who
    // browsed organically weeks ago has a clean first touch, so a plain
    // first-touch read finds no attribution and stamps utm_source=website
    // over a genuine paid click.
    visitWith('', '/en/business'); // organic discovery, recorded as first touch
    visitWith(
      '?utm_source=meta_ads&utm_medium=paid_social&utm_campaign=kw-vendor-v1',
      '/en/business',
    );

    const url = new URL(buildSignupUrl('business'));
    expect(url.searchParams.get('utm_source')).toBe('meta_ads');
    expect(url.searchParams.get('utm_medium')).toBe('paid_social');
    expect(url.searchParams.get('utm_campaign')).toBe('kw-vendor-v1');
    // The whole point: paid traffic must never be recorded as organic.
    expect(url.searchParams.get('utm_source')).not.toBe('website');
  });
});
