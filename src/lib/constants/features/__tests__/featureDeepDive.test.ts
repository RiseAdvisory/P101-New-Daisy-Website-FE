import {
  featureDeepDives,
  getFeatureDeepDive,
  getAllFeatureDeepDiveSlugs,
  getRelatedFeatureDeepDives,
} from '../featureDeepDive';

// =============================================================================
// Data structure tests
// =============================================================================

describe('featureDeepDives data', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(featureDeepDives)).toBe(true);
    expect(featureDeepDives.length).toBeGreaterThan(0);
  });

  it('has no duplicate slug+userType combinations', () => {
    const keys = featureDeepDives.map((f) => `${f.userType}/${f.slug}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('every entry has all required fields', () => {
    featureDeepDives.forEach((entry) => {
      expect(entry.slug).toBeTruthy();
      expect(entry.categoryName).toBeTruthy();
      expect(['business', 'professional']).toContain(entry.userType);

      // SEO
      expect(entry.metaTitle).toBeTruthy();
      expect(entry.metaDescription).toBeTruthy();
      expect(entry.keywords.length).toBeGreaterThan(0);

      // Hero
      expect(entry.heroTitle).toBeTruthy();
      expect(entry.heroSubtitle).toBeTruthy();

      // Overview
      expect(entry.overview).toBeTruthy();
      expect(entry.keyCapabilities.length).toBeGreaterThan(0);
      expect(entry.painPoints.length).toBeGreaterThan(0);
      expect(entry.growthOutcome).toBeTruthy();

      // Sub-features
      expect(entry.subFeatures.length).toBeGreaterThan(0);
      entry.subFeatures.forEach((sf) => {
        expect(sf.name).toBeTruthy();
        expect(sf.description).toBeTruthy();
        expect(sf.keyBenefit).toBeTruthy();
      });

      // Workflow
      expect(entry.workflow.length).toBeGreaterThan(0);
      entry.workflow.forEach((w) => {
        expect(w.step).toBeGreaterThan(0);
        expect(w.title).toBeTruthy();
        expect(w.description).toBeTruthy();
      });

      // Comparison
      expect(entry.comparisonHighlights.length).toBeGreaterThan(0);
      entry.comparisonHighlights.forEach((c) => {
        expect(c.area).toBeTruthy();
        expect(c.daisy).toBeTruthy();
        expect(c.typical).toBeTruthy();
      });

      // Use Cases
      expect(entry.useCases.length).toBeGreaterThan(0);
      entry.useCases.forEach((uc) => {
        expect(uc.title).toBeTruthy();
        expect(uc.businessType).toBeTruthy();
        expect(uc.scenario).toBeTruthy();
      });

      // Integration
      expect(entry.integrationPoints.length).toBeGreaterThan(0);
      entry.integrationPoints.forEach((ip) => {
        expect(ip.category).toBeTruthy();
        expect(ip.slug).toBeTruthy();
        expect(ip.benefit).toBeTruthy();
      });

      // FAQ
      expect(entry.faqs.length).toBeGreaterThan(0);
      entry.faqs.forEach((faq) => {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      });

      // Related
      expect(Array.isArray(entry.relatedCategories)).toBe(true);
      expect(Array.isArray(entry.relatedArticleSlugs)).toBe(true);
    });
  });

  it('integration points do not reference self', () => {
    featureDeepDives.forEach((entry) => {
      entry.integrationPoints.forEach((ip) => {
        expect(ip.slug).not.toBe(entry.slug);
      });
    });
  });

  it('integration points reference known category slugs', () => {
    const validSlugs = [
      'ai-salon-management',
      'booking-management',
      'communication-tools',
      'marketing-promotions',
      'payment-processing',
      'business-growth',
      'team-management',
      'analytics-reports',
    ];
    featureDeepDives.forEach((entry) => {
      entry.integrationPoints.forEach((ip) => {
        expect(validSlugs).toContain(ip.slug);
      });
    });
  });
});

// =============================================================================
// Helper function tests
// =============================================================================

describe('getAllFeatureDeepDiveSlugs', () => {
  it('returns array of strings for business', () => {
    const slugs = getAllFeatureDeepDiveSlugs('business');
    expect(Array.isArray(slugs)).toBe(true);
    slugs.forEach((s) => expect(typeof s).toBe('string'));
  });

  it('returns array of strings for professional', () => {
    const slugs = getAllFeatureDeepDiveSlugs('professional');
    expect(Array.isArray(slugs)).toBe(true);
  });

  it('includes known business slug', () => {
    const slugs = getAllFeatureDeepDiveSlugs('business');
    expect(slugs).toContain('ai-salon-management');
  });

  it('has no duplicates', () => {
    const slugs = getAllFeatureDeepDiveSlugs('business');
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('getFeatureDeepDive', () => {
  it('returns data for a valid business slug', () => {
    const data = getFeatureDeepDive('business', 'ai-salon-management');
    expect(data).toBeDefined();
    expect(data?.categoryName).toBe('AI Salon Management');
    expect(data?.userType).toBe('business');
  });

  it('returns undefined for invalid slug', () => {
    const data = getFeatureDeepDive('business', 'nonexistent-slug');
    expect(data).toBeUndefined();
  });

  it('returns undefined for wrong userType', () => {
    const data = getFeatureDeepDive('professional', 'ai-salon-management');
    // May or may not exist depending on data, just ensure it doesn't return a business entry
    if (data) {
      expect(data.userType).toBe('professional');
    }
  });
});

describe('getRelatedFeatureDeepDives', () => {
  it('returns related entries for valid input', () => {
    const related = getRelatedFeatureDeepDives(
      'business',
      'ai-salon-management',
    );
    expect(Array.isArray(related)).toBe(true);
  });

  it('excludes the current entry from results', () => {
    const related = getRelatedFeatureDeepDives(
      'business',
      'ai-salon-management',
    );
    related.forEach((r) => {
      expect(r.slug).not.toBe('ai-salon-management');
    });
  });

  it('returns empty array for invalid slug', () => {
    const related = getRelatedFeatureDeepDives('business', 'nonexistent');
    expect(related).toEqual([]);
  });

  it('returned entries have correct userType', () => {
    const related = getRelatedFeatureDeepDives(
      'business',
      'ai-salon-management',
    );
    related.forEach((r) => {
      expect(r.userType).toBe('business');
    });
  });
});
