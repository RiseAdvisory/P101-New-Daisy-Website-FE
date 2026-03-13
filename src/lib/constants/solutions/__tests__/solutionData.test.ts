import {
  solutions,
  getSolution,
  getAllSolutionSlugs,
  getRelatedSolutions,
} from '../solutionData';

describe('solutionData helpers', () => {
  // ---------------------------------------------------------------------------
  // getAllSolutionSlugs
  // ---------------------------------------------------------------------------
  describe('getAllSolutionSlugs', () => {
    it('returns all solution slugs', () => {
      const slugs = getAllSolutionSlugs();
      expect(slugs.length).toBe(solutions.length);
      expect(slugs.length).toBeGreaterThanOrEqual(11);
    });

    it('returns an array of strings', () => {
      const slugs = getAllSolutionSlugs();
      slugs.forEach((s) => expect(typeof s).toBe('string'));
    });

    it('has no duplicate slugs', () => {
      const slugs = getAllSolutionSlugs();
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  // ---------------------------------------------------------------------------
  // getSolution
  // ---------------------------------------------------------------------------
  describe('getSolution', () => {
    it('returns correct data for a valid slug', () => {
      const data = getSolution('salon-management-software');
      expect(data).toBeDefined();
      expect(data!.slug).toBe('salon-management-software');
      expect(data!.metaTitle).toBeTruthy();
    });

    it('returns undefined for an invalid slug', () => {
      expect(getSolution('nonexistent-solution')).toBeUndefined();
    });

    it('every solution has required fields', () => {
      solutions.forEach((sol) => {
        expect(sol.slug).toBeTruthy();
        expect(sol.metaTitle).toBeTruthy();
        expect(sol.metaDescription).toBeTruthy();
        expect(sol.keywords.length).toBeGreaterThan(0);
        expect(sol.heroTitle).toBeTruthy();
        expect(sol.heroSubtitle).toBeTruthy();
        expect(sol.intro).toBeTruthy();
        expect(sol.challenges.length).toBeGreaterThan(0);
        expect(sol.features.length).toBeGreaterThan(0);
        expect(sol.faqs.length).toBeGreaterThan(0);
        expect(Array.isArray(sol.relatedSolutions)).toBe(true);
        expect(Array.isArray(sol.relatedComparisons)).toBe(true);
      });
    });

    it('each challenge has title and description', () => {
      solutions.forEach((sol) => {
        sol.challenges.forEach((c) => {
          expect(c.title).toBeTruthy();
          expect(c.description).toBeTruthy();
        });
      });
    });

    it('each feature has title and description', () => {
      solutions.forEach((sol) => {
        sol.features.forEach((f) => {
          expect(f.title).toBeTruthy();
          expect(f.description).toBeTruthy();
        });
      });
    });

    it('each FAQ has question and answer', () => {
      solutions.forEach((sol) => {
        sol.faqs.forEach((faq) => {
          expect(faq.question).toBeTruthy();
          expect(faq.answer).toBeTruthy();
        });
      });
    });
  });

  // ---------------------------------------------------------------------------
  // getRelatedSolutions
  // ---------------------------------------------------------------------------
  describe('getRelatedSolutions', () => {
    it('returns related solutions excluding self', () => {
      const related = getRelatedSolutions('salon-management-software');
      expect(related.length).toBeGreaterThan(0);
      expect(related.every((s) => s.slug !== 'salon-management-software')).toBe(true);
    });

    it('returns SolutionData objects', () => {
      const related = getRelatedSolutions('salon-management-software');
      related.forEach((s) => {
        expect(s.slug).toBeTruthy();
        expect(s.metaTitle).toBeTruthy();
        expect(s.features.length).toBeGreaterThan(0);
      });
    });

    it('returns empty array for invalid slug', () => {
      expect(getRelatedSolutions('nonexistent')).toEqual([]);
    });

    it('related solutions are valid slugs', () => {
      const allSlugs = getAllSolutionSlugs();
      const related = getRelatedSolutions('salon-management-software');
      related.forEach((s) => {
        expect(allSlugs).toContain(s.slug);
      });
    });
  });
});
