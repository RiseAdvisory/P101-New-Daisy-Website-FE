jest.mock('@/lib/api/blog', () => ({
  getAllBlogSlugs: jest.fn(async () => []),
}));

import sitemap from '../sitemap';

describe('sitemap()', () => {
  it('emits the refreshed lastModified for the salon-management-software glossary entries (en + ar)', async () => {
    const entries = await sitemap();
    const matches = entries.filter((e) =>
      e.url.endsWith('/glossary/salon-management-software'),
    );
    expect(matches).toHaveLength(2); // en + ar
    for (const entry of matches) {
      expect(entry.lastModified).toBe('2026-04-27T00:00:00.000Z');
    }
  });

  it('emits the refreshed lastModified for the salon-management-software pillar (en + ar)', async () => {
    const entries = await sitemap();
    const matches = entries.filter(
      (e) =>
        e.url.endsWith('/en/salon-management-software') ||
        e.url.endsWith('/ar/salon-management-software'),
    );
    expect(matches).toHaveLength(2);
    for (const entry of matches) {
      expect(entry.lastModified).toBe('2026-04-27T00:00:00.000Z');
    }
  });

  it('falls back to the default content date for glossary entries without a per-entry lastUpdated', async () => {
    const entries = await sitemap();
    // ai-booking-software is a known entry that was not part of the 2026-04-11 cluster work
    const fallback = entries.find((e) =>
      e.url.endsWith('/en/glossary/ai-booking-software'),
    );
    if (fallback) {
      // If this entry exists in the dataset, it should still be on the constant
      expect(fallback.lastModified).toBe('2026-03-17T00:00:00.000Z');
    }
    // Otherwise, just confirm at least one glossary URL still uses the fallback constant.
    const anyOnFallback = entries.some(
      (e) =>
        e.url.includes('/glossary/') &&
        e.lastModified === '2026-03-17T00:00:00.000Z',
    );
    expect(anyOnFallback).toBe(true);
  });

  it('still includes hreflang alternates for the refreshed URLs', async () => {
    const entries = await sitemap();
    const en = entries.find(
      (e) => e.url === 'https://www.jointhedaisy.com/en/glossary/salon-management-software',
    );
    expect(en).toBeDefined();
    expect(en?.alternates?.languages).toEqual({
      en: 'https://www.jointhedaisy.com/en/glossary/salon-management-software',
      ar: 'https://www.jointhedaisy.com/ar/glossary/salon-management-software',
    });
  });
});

describe('sitemap() — ROUTE_LAST_UPDATED per-route overrides', () => {
  it.each([
    '/business',
    '/professional',
    '/start-free-trial/business',
    '/start-free-trial/professional',
  ])(
    '%s emits the per-route override date instead of the bucket fallback',
    async (route) => {
      const entries = await sitemap();
      const matches = entries.filter(
        (e) =>
          e.url === `https://www.jointhedaisy.com/en${route}` ||
          e.url === `https://www.jointhedaisy.com/ar${route}`,
      );
      expect(matches).toHaveLength(2); // en + ar
      for (const entry of matches) {
        // Must NOT be the legacy hardcoded constant.
        expect(entry.lastModified).not.toBe('2026-03-17T00:00:00.000Z');
        // Must be a valid ISO 8601 date string.
        expect(typeof entry.lastModified).toBe('string');
        expect(entry.lastModified).toMatch(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        );
        // Must parse to a real Date.
        expect(Number.isNaN(new Date(entry.lastModified as string).valueOf())).toBe(
          false,
        );
      }
    },
  );

  it('routes NOT listed in ROUTE_LAST_UPDATED still emit the legacy bucket fallback', async () => {
    const entries = await sitemap();
    // /about has no override and uses STATIC_CONTENT_DATE.
    const about = entries.find(
      (e) => e.url === 'https://www.jointhedaisy.com/en/about',
    );
    expect(about).toBeDefined();
    expect(about?.lastModified).toBe('2026-03-17T00:00:00.000Z');
  });

  it('legal pages still use the LEGAL_DATE fallback', async () => {
    const entries = await sitemap();
    const privacy = entries.find(
      (e) => e.url === 'https://www.jointhedaisy.com/en/privacy-policy',
    );
    expect(privacy).toBeDefined();
    expect(privacy?.lastModified).toBe('2026-01-01T00:00:00.000Z');
  });

  it('routes with per-entry data (glossary/pillars) keep their data-layer dates and are NOT touched by the route map', async () => {
    const entries = await sitemap();
    // Salon-management-software glossary entry was bumped to 2026-04-27 in PR #269.
    const glossary = entries.find(
      (e) =>
        e.url === 'https://www.jointhedaisy.com/en/glossary/salon-management-software',
    );
    expect(glossary?.lastModified).toBe('2026-04-27T00:00:00.000Z');
    // Pillar version of same slug also uses its own per-pillar date.
    const pillar = entries.find(
      (e) => e.url === 'https://www.jointhedaisy.com/en/salon-management-software',
    );
    expect(pillar?.lastModified).toBe('2026-04-27T00:00:00.000Z');
  });
});
