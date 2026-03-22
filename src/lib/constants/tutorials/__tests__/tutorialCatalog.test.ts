import { tutorialCatalog, TutorialCategory } from '../tutorialCatalog';
import { businessBlogPosts, professionalBlogPosts } from '../../blog/blogData';
import { guideEntries } from '../../guides/guideData';

const allBlogSlugs = new Set([
  ...businessBlogPosts.map((p) => p.attributes.slug),
  ...professionalBlogPosts.map((p) => p.attributes.slug),
]);

const allGuideSlugs = new Set(guideEntries.map((g) => g.slug));

describe('tutorialCatalog structure', () => {
  it('has a non-empty business array', () => {
    expect(tutorialCatalog.business.length).toBeGreaterThan(0);
  });

  it('has a non-empty professional array', () => {
    expect(tutorialCatalog.professional.length).toBeGreaterThan(0);
  });
});

describe('tutorialCatalog business categories', () => {
  tutorialCatalog.business.forEach((category: TutorialCategory) => {
    describe(`business category "${category.slug}"`, () => {
      it('has at least one articleSlug', () => {
        // Some categories intentionally have 0 articleSlugs (they rely on guideSlugs only),
        // but for business specifically document which ones do have articles
        const totalSlugs = category.articleSlugs.length + category.guideSlugs.length;
        expect(totalSlugs).toBeGreaterThan(0);
      });

      category.articleSlugs.forEach((slug) => {
        it(`articleSlug "${slug}" exists in businessBlogPosts or professionalBlogPosts`, () => {
          expect(allBlogSlugs.has(slug)).toBe(true);
        });
      });

      category.guideSlugs.forEach((slug) => {
        it(`guideSlug "${slug}" exists in guideEntries`, () => {
          expect(allGuideSlugs.has(slug)).toBe(true);
        });
      });
    });
  });
});

describe('tutorialCatalog professional categories', () => {
  tutorialCatalog.professional.forEach((category: TutorialCategory) => {
    describe(`professional category "${category.slug}"`, () => {
      it('has at least one articleSlug or guideSlug', () => {
        const totalSlugs = category.articleSlugs.length + category.guideSlugs.length;
        expect(totalSlugs).toBeGreaterThan(0);
      });

      category.articleSlugs.forEach((slug) => {
        it(`articleSlug "${slug}" exists in businessBlogPosts or professionalBlogPosts`, () => {
          expect(allBlogSlugs.has(slug)).toBe(true);
        });
      });

      category.guideSlugs.forEach((slug) => {
        it(`guideSlug "${slug}" exists in guideEntries`, () => {
          expect(allGuideSlugs.has(slug)).toBe(true);
        });
      });
    });
  });
});

describe('tutorialCatalog business — categories with articleSlugs have non-empty arrays', () => {
  const categoriesWithArticles = tutorialCatalog.business.filter(
    (cat) => cat.articleSlugs.length > 0,
  );

  it('has at least one business category with articles', () => {
    expect(categoriesWithArticles.length).toBeGreaterThan(0);
  });

  categoriesWithArticles.forEach((category) => {
    it(`business category "${category.slug}" articleSlugs array is non-empty`, () => {
      expect(category.articleSlugs.length).toBeGreaterThan(0);
    });
  });
});

describe('tutorialCatalog professional — categories with articleSlugs have non-empty arrays', () => {
  const categoriesWithArticles = tutorialCatalog.professional.filter(
    (cat) => cat.articleSlugs.length > 0,
  );

  it('has at least one professional category with articles', () => {
    expect(categoriesWithArticles.length).toBeGreaterThan(0);
  });

  categoriesWithArticles.forEach((category) => {
    it(`professional category "${category.slug}" articleSlugs array is non-empty`, () => {
      expect(category.articleSlugs.length).toBeGreaterThan(0);
    });
  });
});
