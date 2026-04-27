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
