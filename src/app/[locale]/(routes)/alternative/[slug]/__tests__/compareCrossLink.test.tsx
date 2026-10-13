import { render } from '@testing-library/react';
import { AlternativePageClient } from '../AlternativePageClient';
import { getAllCompareSlugs } from '@/lib/constants/competitors/comparisonPages';

/**
 * Alternative pages link to the matching Daisy-vs page. Timely, Zenoti,
 * Setmore and SimplyBook.me have no Daisy-vs page, and the link sent them to
 * a 404 (/en/compare/daisy-vs-zenoti was flagged in the 13 Oct 2026 audit).
 */
describe('alternative page compare cross-link', () => {
  const compareSlugs = new Set(getAllCompareSlugs());

  it.each(['zenoti', 'timely', 'setmore', 'simplybook-me', 'fresha', 'booksy'])(
    '/en/alternative/%s links only to compare pages that exist',
    (slug) => {
      const { container } = render(<AlternativePageClient slug={slug} locale="en" />);
      const compareLinks = Array.from(container.querySelectorAll('a[href*="/compare/"]')).map(
        (a) => (a.getAttribute('href') || '').split('/compare/')[1],
      );
      for (const target of compareLinks) {
        expect({ slug, target, exists: compareSlugs.has(target) }).toEqual({ slug, target, exists: true });
      }
    },
  );

  it('still links Fresha to its Daisy-vs page', () => {
    const { container } = render(<AlternativePageClient slug="fresha" locale="en" />);
    expect(container.querySelector('a[href="/en/compare/daisy-vs-fresha"]')).toBeTruthy();
  });
});
