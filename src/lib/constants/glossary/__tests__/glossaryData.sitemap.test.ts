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

  it('keeps 2026-04-27 for the salon-customer-management entry from the 2026-04-11 cluster', () => {
    const record = getGlossarySitemapData().find((r) => r.slug === 'salon-customer-management');
    expect(record).toBeDefined();
    expect(record?.lastUpdated).toBe('2026-04-27T00:00:00.000Z');
  });

  it('reports 2026-10-09 for the entry whose competitor claims were corrected that day', () => {
    const record = getGlossarySitemapData().find((r) => r.slug === 'cashback-beauty-booking');
    expect(record).toBeDefined();
    expect(record?.lastUpdated).toBe('2026-10-09T00:00:00.000Z');
  });

  it('reports 2026-10-10 for the entries whose Daisy claims were corrected that day', () => {
    const data = getGlossarySitemapData();
    const refreshed = [
      'salon-management-software',
      'ai-receptionist-for-salons',
      'salon-management-system',
      'salon-employee-management-software',
    ];
    for (const slug of refreshed) {
      const record = data.find((r) => r.slug === slug);
      expect(record).toBeDefined();
      expect(record?.lastUpdated).toBe('2026-10-10T00:00:00.000Z');
    }
  });
});
