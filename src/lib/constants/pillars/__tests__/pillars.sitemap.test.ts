import { getPillarSitemapData, getAllPillarSlugs } from '../index';

describe('getPillarSitemapData', () => {
  it('returns one record per pillar', () => {
    expect(getPillarSitemapData()).toHaveLength(getAllPillarSlugs().length);
  });

  it('always provides a non-empty ISO lastUpdated (pillars are required to set it)', () => {
    for (const record of getPillarSitemapData()) {
      expect(typeof record.lastUpdated).toBe('string');
      // Loose ISO 8601 sanity check
      expect(record.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    }
  });

  it('reports a fresh lastUpdated for the salon-management-software pillar', () => {
    const record = getPillarSitemapData().find(
      (r) => r.slug === 'salon-management-software',
    );
    expect(record).toBeDefined();
    expect(record?.lastUpdated).toBe('2026-04-27T00:00:00.000Z');
  });
});
