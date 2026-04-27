import { getGuideSitemapData, getAllGuideSlugs } from '../guideData';

describe('getGuideSitemapData', () => {
  it('returns one record per guide entry', () => {
    expect(getGuideSitemapData()).toHaveLength(getAllGuideSlugs().length);
  });

  it('exposes slug and optional lastUpdated for every entry', () => {
    for (const record of getGuideSitemapData()) {
      expect(typeof record.slug).toBe('string');
      expect(record.slug.length).toBeGreaterThan(0);
      expect(['string', 'undefined']).toContain(typeof record.lastUpdated);
    }
  });

  it('returns slugs that match the slug helper exactly', () => {
    const sitemapSlugs = getGuideSitemapData().map((r) => r.slug).sort();
    const helperSlugs = getAllGuideSlugs().slice().sort();
    expect(sitemapSlugs).toEqual(helperSlugs);
  });
});
