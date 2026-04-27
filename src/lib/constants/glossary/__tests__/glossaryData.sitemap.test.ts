import {
  getGlossarySitemapData,
  getAllGlossarySlugs,
  glossaryEntries,
} from '../glossaryData';

describe('getGlossarySitemapData', () => {
  it('returns one record per glossary entry', () => {
    const data = getGlossarySitemapData();
    expect(data).toHaveLength(getAllGlossarySlugs().length);
    expect(data.length).toBeGreaterThan(0);
  });

  it('exposes slug and lastUpdated for every entry', () => {
    for (const record of getGlossarySitemapData()) {
      expect(typeof record.slug).toBe('string');
      expect(record.slug.length).toBeGreaterThan(0);
      expect(['string', 'undefined']).toContain(typeof record.lastUpdated);
    }
  });

  it('reflects each entry verbatim — slug parity with source data', () => {
    const sourceSlugs = glossaryEntries.map((e) => e.slug).sort();
    const sitemapSlugs = getGlossarySitemapData().map((e) => e.slug).sort();
    expect(sitemapSlugs).toEqual(sourceSlugs);
  });

  it('returns the same lastUpdated value as the underlying entry', () => {
    const data = getGlossarySitemapData();
    for (const entry of glossaryEntries) {
      const record = data.find((r) => r.slug === entry.slug);
      expect(record).toBeDefined();
      expect(record?.lastUpdated).toBe(entry.lastUpdated);
    }
  });

  it('reports a fresh lastUpdated for the salon-management-software cluster touched on 2026-04-11', () => {
    const data = getGlossarySitemapData();
    const refreshed = [
      'salon-management-software',
      'ai-receptionist-for-salons',
      'cashback-beauty-booking',
      'salon-management-system',
      'salon-employee-management-software',
      'salon-customer-management',
    ];
    for (const slug of refreshed) {
      const record = data.find((r) => r.slug === slug);
      expect(record).toBeDefined();
      expect(record?.lastUpdated).toBe('2026-04-27T00:00:00.000Z');
    }
  });
});
