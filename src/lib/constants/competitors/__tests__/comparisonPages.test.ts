import {
  getAllCompareSlugs,
  getAllAlternativeSlugs,
  getComparePageData,
  getAlternativePageData,
  getRelatedComparePages,
  getRelatedAlternativePages,
} from '../comparisonPages';

describe('comparisonPages helpers', () => {
  // ---------------------------------------------------------------------------
  // getAllCompareSlugs
  // ---------------------------------------------------------------------------
  describe('getAllCompareSlugs', () => {
    it('returns an array of strings', () => {
      const slugs = getAllCompareSlugs();
      expect(Array.isArray(slugs)).toBe(true);
      expect(slugs.length).toBeGreaterThan(0);
      slugs.forEach((s) => expect(typeof s).toBe('string'));
    });

    it('includes daisy-vs slugs', () => {
      const slugs = getAllCompareSlugs();
      expect(slugs.some((s) => s.startsWith('daisy-vs-'))).toBe(true);
    });

    it('includes competitor-vs slugs', () => {
      const slugs = getAllCompareSlugs();
      // competitor-vs slugs don't start with "daisy-vs-"
      expect(slugs.some((s) => !s.startsWith('daisy-vs-'))).toBe(true);
    });

    it('has no duplicate slugs', () => {
      const slugs = getAllCompareSlugs();
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  // ---------------------------------------------------------------------------
  // getAllAlternativeSlugs
  // ---------------------------------------------------------------------------
  describe('getAllAlternativeSlugs', () => {
    it('returns an array of strings', () => {
      const slugs = getAllAlternativeSlugs();
      expect(Array.isArray(slugs)).toBe(true);
      expect(slugs.length).toBeGreaterThan(0);
      slugs.forEach((s) => expect(typeof s).toBe('string'));
    });

    it('includes alternative slugs (single competitor names)', () => {
      const slugs = getAllAlternativeSlugs();
      expect(slugs.some((s) => !s.startsWith('best-'))).toBe(true);
    });

    it('includes best-alternatives slugs', () => {
      const slugs = getAllAlternativeSlugs();
      expect(slugs.some((s) => s.startsWith('best-'))).toBe(true);
    });

    it('has no duplicate slugs', () => {
      const slugs = getAllAlternativeSlugs();
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  // ---------------------------------------------------------------------------
  // getComparePageData
  // ---------------------------------------------------------------------------
  describe('getComparePageData', () => {
    it('resolves daisy-vs slugs correctly', () => {
      const result = getComparePageData('daisy-vs-fresha');
      expect(result).toBeDefined();
      expect(result!.type).toBe('daisy-vs');
      expect(result!.data.metaTitle).toBeTruthy();
      expect(result!.data.metaDescription).toBeTruthy();
    });

    it('resolves competitor-vs slugs correctly', () => {
      const result = getComparePageData('fresha-vs-booksy');
      expect(result).toBeDefined();
      expect(result!.type).toBe('competitor-vs');
      expect(result!.data.metaTitle).toBeTruthy();
    });

    it('returns undefined for unknown slug', () => {
      expect(getComparePageData('nonexistent-page')).toBeUndefined();
    });

    it('daisy-vs data has required fields', () => {
      const result = getComparePageData('daisy-vs-fresha');
      expect(result).toBeDefined();
      if (result?.type === 'daisy-vs') {
        expect(result.data.slug).toBe('daisy-vs-fresha');
        expect(result.data.competitorSlug).toBeTruthy();
        expect(result.data.heroTitle).toBeTruthy();
        expect(result.data.heroSubtitle).toBeTruthy();
        expect(result.data.tldr).toBeTruthy();
        expect(result.data.verdict).toBeTruthy();
        expect(result.data.keywords.length).toBeGreaterThan(0);
        expect(result.data.whoShouldChooseDaisy.length).toBeGreaterThan(0);
        expect(result.data.whoShouldChooseCompetitor.length).toBeGreaterThan(0);
      }
    });

    it('competitor-vs data has required fields', () => {
      const result = getComparePageData('fresha-vs-booksy');
      expect(result).toBeDefined();
      if (result?.type === 'competitor-vs') {
        expect(result.data.slugA).toBeTruthy();
        expect(result.data.slugB).toBeTruthy();
        expect(result.data.combinedSlug).toBe('fresha-vs-booksy');
        expect(result.data.verdict).toBeTruthy();
        expect(result.data.daisyPitch).toBeTruthy();
        expect(result.data.whoShouldChooseA.length).toBeGreaterThan(0);
        expect(result.data.whoShouldChooseB.length).toBeGreaterThan(0);
      }
    });
  });

  // ---------------------------------------------------------------------------
  // getAlternativePageData
  // ---------------------------------------------------------------------------
  describe('getAlternativePageData', () => {
    it('resolves alternative pages correctly', () => {
      const result = getAlternativePageData('fresha');
      expect(result).toBeDefined();
      expect(result!.type).toBe('alternative');
      expect(result!.data.metaTitle).toBeTruthy();
    });

    it('resolves best-alternatives pages correctly', () => {
      const result = getAlternativePageData('best-fresha-alternatives');
      expect(result).toBeDefined();
      expect(result!.type).toBe('best-alternatives');
      expect(result!.data.metaTitle).toBeTruthy();
    });

    it('returns undefined for unknown slug', () => {
      expect(getAlternativePageData('nonexistent')).toBeUndefined();
    });

    it('alternative data has required fields', () => {
      const result = getAlternativePageData('fresha');
      expect(result).toBeDefined();
      if (result?.type === 'alternative') {
        expect(result.data.competitorSlug).toBeTruthy();
        expect(result.data.painPoints.length).toBeGreaterThan(0);
        expect(result.data.switchingReasons.length).toBeGreaterThan(0);
        expect(Array.isArray(result.data.topAlternatives)).toBe(true);
      }
    });

    it('best-alternatives data has required fields', () => {
      const result = getAlternativePageData('best-fresha-alternatives');
      expect(result).toBeDefined();
      if (result?.type === 'best-alternatives') {
        expect(result.data.competitorSlug).toBeTruthy();
        expect(result.data.intro).toBeTruthy();
        expect(Object.keys(result.data.bestFor).length).toBeGreaterThan(0);
        expect(result.data.daisyEdge).toBeTruthy();
        expect(result.data.alternatives.length).toBeGreaterThan(0);
      }
    });
  });

  // ---------------------------------------------------------------------------
  // getRelatedComparePages
  // ---------------------------------------------------------------------------
  describe('getRelatedComparePages', () => {
    it('returns related links for a valid slug', () => {
      const related = getRelatedComparePages('daisy-vs-fresha');
      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThan(0);
    });

    it('each link has title, url, and description', () => {
      const related = getRelatedComparePages('daisy-vs-fresha');
      related.forEach((link) => {
        expect(link.title).toBeTruthy();
        expect(link.url).toMatch(/^\/compare\//);
        expect(link.description).toBeTruthy();
      });
    });

    it('excludes the current slug', () => {
      const related = getRelatedComparePages('daisy-vs-fresha');
      expect(related.every((link) => link.url !== '/compare/daisy-vs-fresha')).toBe(true);
    });

    it('respects the limit parameter', () => {
      const related = getRelatedComparePages('daisy-vs-fresha', 2);
      expect(related.length).toBeLessThanOrEqual(2);
    });
  });

  // ---------------------------------------------------------------------------
  // getRelatedAlternativePages
  // ---------------------------------------------------------------------------
  describe('getRelatedAlternativePages', () => {
    it('returns related links for a valid slug', () => {
      const related = getRelatedAlternativePages('fresha');
      expect(Array.isArray(related)).toBe(true);
      expect(related.length).toBeGreaterThan(0);
    });

    it('each link has title, url, and description', () => {
      const related = getRelatedAlternativePages('fresha');
      related.forEach((link) => {
        expect(link.title).toBeTruthy();
        expect(link.url).toMatch(/^\/alternative\//);
        expect(link.description).toBeTruthy();
      });
    });

    it('excludes the current slug', () => {
      const related = getRelatedAlternativePages('fresha');
      expect(related.every((link) => link.url !== '/alternative/fresha')).toBe(true);
    });

    it('respects the limit parameter', () => {
      const related = getRelatedAlternativePages('fresha', 2);
      expect(related.length).toBeLessThanOrEqual(2);
    });
  });
});
