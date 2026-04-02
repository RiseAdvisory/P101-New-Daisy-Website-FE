const INITIAL_CARDS_PER_CATEGORY = 3;

describe('Tutorials card expansion logic', () => {
  it('shows only first 3 articles when category is collapsed', () => {
    const articles = Array.from({ length: 8 }, (_, i) => ({ slug: `article-${i}` }));
    const expandedCategories = new Set<string>();
    const isExpanded = expandedCategories.has('booking');
    const visibleArticles = isExpanded ? articles : articles.slice(0, INITIAL_CARDS_PER_CATEGORY);
    expect(visibleArticles).toHaveLength(3);
  });

  it('shows all articles when category is expanded', () => {
    const articles = Array.from({ length: 8 }, (_, i) => ({ slug: `article-${i}` }));
    const expandedCategories = new Set<string>(['booking']);
    const isExpanded = expandedCategories.has('booking');
    const visibleArticles = isExpanded ? articles : articles.slice(0, INITIAL_CARDS_PER_CATEGORY);
    expect(visibleArticles).toHaveLength(8);
  });

  it('shows all articles when category has exactly 3', () => {
    const articles = Array.from({ length: 3 }, (_, i) => ({ slug: `article-${i}` }));
    const expandedCategories = new Set<string>();
    const isExpanded = expandedCategories.has('booking');
    const visibleArticles = isExpanded ? articles : articles.slice(0, INITIAL_CARDS_PER_CATEGORY);
    const hasMore = articles.length > INITIAL_CARDS_PER_CATEGORY && !isExpanded;
    expect(visibleArticles).toHaveLength(3);
    expect(hasMore).toBe(false);
  });

  it('shows hasMore button when category has more than 3 articles', () => {
    const articles = Array.from({ length: 5 }, (_, i) => ({ slug: `article-${i}` }));
    const expandedCategories = new Set<string>();
    const isExpanded = expandedCategories.has('booking');
    const hasMore = articles.length > INITIAL_CARDS_PER_CATEGORY && !isExpanded;
    expect(hasMore).toBe(true);
  });

  it('hides hasMore button after expansion', () => {
    const articles = Array.from({ length: 5 }, (_, i) => ({ slug: `article-${i}` }));
    const expandedCategories = new Set<string>(['booking']);
    const isExpanded = expandedCategories.has('booking');
    const hasMore = articles.length > INITIAL_CARDS_PER_CATEGORY && !isExpanded;
    expect(hasMore).toBe(false);
  });

  it('handles empty articles array', () => {
    const articles: any[] = [];
    const expandedCategories = new Set<string>();
    const isExpanded = expandedCategories.has('booking');
    const visibleArticles = isExpanded ? articles : articles.slice(0, INITIAL_CARDS_PER_CATEGORY);
    const hasMore = articles.length > INITIAL_CARDS_PER_CATEGORY && !isExpanded;
    expect(visibleArticles).toHaveLength(0);
    expect(hasMore).toBe(false);
  });

  it('expanding one category does not affect others', () => {
    const expandedCategories = new Set<string>(['booking']);
    expect(expandedCategories.has('booking')).toBe(true);
    expect(expandedCategories.has('marketing')).toBe(false);
  });

  it('resets expansions when creating a new set', () => {
    let expandedCategories = new Set<string>(['booking', 'marketing']);
    expandedCategories = new Set<string>();
    expect(expandedCategories.size).toBe(0);
  });
});
