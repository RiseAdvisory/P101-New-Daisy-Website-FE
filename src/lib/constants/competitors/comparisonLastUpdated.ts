/**
 * When each comparison and alternatives page last changed. One date per page,
 * shared by its English and Arabic versions, shown under the page title and
 * as dateModified in the page's structured data.
 *
 * "Last updated" means the page's content last changed, not that every fact
 * about another company was re-verified on that date. The note at the bottom
 * of each page says so and points readers to each company's own website.
 *
 * Seeded on 2026-10-05 from git: the most recent commit touching the page's
 * entry (comparisonPages.ts / .ar.ts) or the competitor record(s) it is built
 * from (tier1-3Data.ts / .ar.ts).
 *
 * When you change a page's content, update its date here. Keys are the route
 * section plus the slug: 'compare/<slug>' or 'alternative/<slug>'.
 */
export const COMPARISON_LAST_UPDATED: Record<string, string> = {
  'alternative/acuity-scheduling': '2026-10-10',
  'alternative/best-acuity-alternatives': '2026-10-10',
  'alternative/best-booksy-alternatives': '2026-10-10',
  'alternative/best-boulevard-alternatives': '2026-10-10',
  'alternative/best-fresha-alternatives': '2026-10-10',
  'alternative/best-glossgenius-alternatives': '2026-10-10',
  'alternative/best-mangomint-alternatives': '2026-10-10',
  'alternative/best-mindbody-alternatives': '2026-10-10',
  'alternative/best-phorest-alternatives': '2026-10-10',
  'alternative/best-setmore-alternatives': '2026-10-10',
  'alternative/best-simplybookme-alternatives': '2026-10-10',
  'alternative/best-square-appointments-alternatives': '2026-10-10',
  'alternative/best-timely-alternatives': '2026-10-10',
  'alternative/best-vagaro-alternatives': '2026-10-10',
  'alternative/best-zenoti-alternatives': '2026-10-10',
  'alternative/booksy': '2026-10-10',
  'alternative/boulevard': '2026-10-10',
  'alternative/fresha': '2026-10-10',
  'alternative/glossgenius': '2026-10-10',
  'alternative/mangomint': '2026-10-10',
  'alternative/mindbody': '2026-10-10',
  'alternative/phorest': '2026-10-10',
  'alternative/setmore': '2026-10-10',
  'alternative/simplybook-me': '2026-10-10',
  'alternative/square-appointments': '2026-10-10',
  'alternative/timely': '2026-10-10',
  'alternative/vagaro': '2026-10-10',
  'alternative/zenoti': '2026-10-10',
  'compare/acuity-vs-setmore': '2026-10-10',
  'compare/booksy-vs-boulevard': '2026-10-10',
  'compare/booksy-vs-glossgenius': '2026-10-10',
  'compare/booksy-vs-mindbody': '2026-10-10',
  'compare/booksy-vs-square-appointments': '2026-10-10',
  'compare/booksy-vs-vagaro': '2026-10-10',
  'compare/daisy-vs-acuity-scheduling': '2026-10-10',
  'compare/daisy-vs-booksy': '2026-10-10',
  'compare/daisy-vs-boulevard': '2026-10-10',
  'compare/daisy-vs-dingg': '2026-10-10',
  'compare/daisy-vs-fresha': '2026-10-10',
  'compare/daisy-vs-glamera': '2026-10-10',
  'compare/daisy-vs-glossgenius': '2026-10-10',
  'compare/daisy-vs-mangomint': '2026-10-10',
  'compare/daisy-vs-mindbody': '2026-10-10',
  'compare/daisy-vs-phorest': '2026-10-10',
  'compare/daisy-vs-planity': '2026-10-10',
  'compare/daisy-vs-repeatmd': '2026-10-10',
  'compare/daisy-vs-square-appointments': '2026-10-10',
  'compare/daisy-vs-toast': '2026-09-05',
  'compare/daisy-vs-vagaro': '2026-10-10',
  'compare/fresha-vs-booksy': '2026-10-10',
  'compare/fresha-vs-glossgenius': '2026-10-10',
  'compare/fresha-vs-mindbody': '2026-10-10',
  'compare/fresha-vs-square-appointments': '2026-10-10',
  'compare/fresha-vs-vagaro': '2026-10-10',
  'compare/glossgenius-vs-boulevard': '2026-10-10',
  'compare/glossgenius-vs-square-appointments': '2026-10-10',
  'compare/mindbody-vs-boulevard': '2026-10-10',
  'compare/mindbody-vs-zenoti': '2026-10-10',
  'compare/vagaro-vs-boulevard': '2026-10-10',
  'compare/vagaro-vs-glossgenius': '2026-10-10',
  'compare/vagaro-vs-mindbody': '2026-10-10',
  'compare/vagaro-vs-square-appointments': '2026-10-10',
  'compare/zenoti-vs-boulevard': '2026-10-10',
};

export function comparisonLastUpdated(
  section: 'compare' | 'alternative',
  slug: string,
): string | undefined {
  return COMPARISON_LAST_UPDATED[`${section}/${slug}`];
}

/**
 * "4 October 2026" / "4 أكتوبر 2026". Calendar and digits are pinned so the
 * server and a visitor's browser render the same string whatever their ICU
 * defaults (plain "ar" changed digit style in ICU 78).
 */
export function formatComparisonDate(iso: string, locale: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(
    locale === 'ar' ? 'ar-u-ca-gregory-nu-latn' : 'en-GB-u-ca-gregory',
    { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' },
  );
}
