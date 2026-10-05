import { getAllAlternativeSlugs, getAllCompareSlugs } from '../comparisonPages';
import {
  COMPARISON_LAST_UPDATED,
  comparisonLastUpdated,
  formatComparisonDate,
} from '../comparisonLastUpdated';

/**
 * Every comparison and alternatives page shows a "Last updated" date and
 * sends it as dateModified in its structured data. A page without a date
 * would silently drop both, so coverage is enforced here.
 */
describe('comparison last-updated dates', () => {
  const pages = [
    ...getAllCompareSlugs().map((s) => `compare/${s}`),
    ...getAllAlternativeSlugs().map((s) => `alternative/${s}`),
  ];

  it('covers every comparison and alternatives page', () => {
    const missing = pages.filter((k) => !COMPARISON_LAST_UPDATED[k]);
    expect(missing).toEqual([]);
  });

  it('has no dates for pages that no longer exist', () => {
    const stale = Object.keys(COMPARISON_LAST_UPDATED).filter((k) => !pages.includes(k));
    expect(stale).toEqual([]);
  });

  it('uses valid ISO dates that are not in the future', () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const [key, date] of Object.entries(COMPARISON_LAST_UPDATED)) {
      expect({ key, ok: /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date)) }).toEqual({ key, ok: true });
      expect({ key, future: date > today }).toEqual({ key, future: false });
    }
  });

  it('looks a page up by route section and slug', () => {
    const [first] = getAllCompareSlugs();
    expect(comparisonLastUpdated('compare', first)).toBe(COMPARISON_LAST_UPDATED[`compare/${first}`]);
    expect(comparisonLastUpdated('compare', 'not-a-page')).toBeUndefined();
  });

  it('formats the same way on every runtime', () => {
    expect(formatComparisonDate('2026-10-04', 'en')).toBe('4 October 2026');
    expect(formatComparisonDate('2026-10-04', 'ar')).toBe('4 أكتوبر 2026');
  });
});
