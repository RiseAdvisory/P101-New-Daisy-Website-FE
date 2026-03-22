import { getTutorialArticles, TutorialArticle } from '../getTutorialArticles';

describe('getTutorialArticles("business")', () => {
  const result = getTutorialArticles('business');

  it('returns a non-empty array', () => {
    expect(result.length).toBeGreaterThan(0);
  });

  it('every item has a category and articles property', () => {
    result.forEach(({ category, articles }) => {
      expect(category).toBeDefined();
      expect(articles).toBeDefined();
    });
  });

  it('no category has zero articles (empty categories are filtered out)', () => {
    result.forEach(({ articles }) => {
      expect(articles.length).toBeGreaterThan(0);
    });
  });

  it('every article has all required TutorialArticle fields', () => {
    result.forEach(({ articles }) => {
      articles.forEach((article: TutorialArticle) => {
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('description');
        expect(article).toHaveProperty('image');
        expect(article).toHaveProperty('author');
        expect(article).toHaveProperty('date');
        expect(article).toHaveProperty('readTime');
        expect(article).toHaveProperty('linkPath');
        expect(article).toHaveProperty('source');
      });
    });
  });

  it('blog articles have linkPath starting with /resources/blog/', () => {
    result.forEach(({ articles }) => {
      articles
        .filter((a) => a.source === 'blog')
        .forEach((article) => {
          expect(article.linkPath).toMatch(/^\/resources\/blog\//);
        });
    });
  });

  it('guide articles have linkPath starting with /guides/', () => {
    result.forEach(({ articles }) => {
      articles
        .filter((a) => a.source === 'guide')
        .forEach((article) => {
          expect(article.linkPath).toMatch(/^\/guides\//);
        });
    });
  });

  it('every article source is "blog" or "guide"', () => {
    result.forEach(({ articles }) => {
      articles.forEach((article: TutorialArticle) => {
        expect(['blog', 'guide']).toContain(article.source);
      });
    });
  });
});

describe('getTutorialArticles("professional")', () => {
  const result = getTutorialArticles('professional');

  it('returns a non-empty array', () => {
    expect(result.length).toBeGreaterThan(0);
  });

  it('every item has a category and articles property', () => {
    result.forEach(({ category, articles }) => {
      expect(category).toBeDefined();
      expect(articles).toBeDefined();
    });
  });

  it('no category has zero articles (empty categories are filtered out)', () => {
    result.forEach(({ articles }) => {
      expect(articles.length).toBeGreaterThan(0);
    });
  });

  it('every article has all required TutorialArticle fields', () => {
    result.forEach(({ articles }) => {
      articles.forEach((article: TutorialArticle) => {
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('slug');
        expect(article).toHaveProperty('description');
        expect(article).toHaveProperty('image');
        expect(article).toHaveProperty('author');
        expect(article).toHaveProperty('date');
        expect(article).toHaveProperty('readTime');
        expect(article).toHaveProperty('linkPath');
        expect(article).toHaveProperty('source');
      });
    });
  });

  it('blog articles have linkPath starting with /resources/blog/', () => {
    result.forEach(({ articles }) => {
      articles
        .filter((a) => a.source === 'blog')
        .forEach((article) => {
          expect(article.linkPath).toMatch(/^\/resources\/blog\//);
        });
    });
  });

  it('guide articles have linkPath starting with /guides/', () => {
    result.forEach(({ articles }) => {
      articles
        .filter((a) => a.source === 'guide')
        .forEach((article) => {
          expect(article.linkPath).toMatch(/^\/guides\//);
        });
    });
  });

  it('every article source is "blog" or "guide"', () => {
    result.forEach(({ articles }) => {
      articles.forEach((article: TutorialArticle) => {
        expect(['blog', 'guide']).toContain(article.source);
      });
    });
  });
});
