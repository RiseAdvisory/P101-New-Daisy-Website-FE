import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/api/blog';
import { getAllCompareSlugs, getAllAlternativeSlugs } from '@/lib/constants/competitors/comparisonPages';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';
import { getGlossarySitemapData } from '@/lib/constants/glossary/glossaryData';
import { getGuideSitemapData } from '@/lib/constants/guides/guideData';
import { getAllFeatureDeepDiveSlugs } from '@/lib/constants/features/featureDeepDive';
import { getPillarSitemapData } from '@/lib/constants/pillars';
import { getAllAngleParams } from '@/lib/constants/solutions/angles';
import { comparisonLastUpdated } from '@/lib/constants/competitors/comparisonLastUpdated';
import { RELEASE_NOTES } from '@/lib/constants/updates/releaseNotes';

const BASE_URL = 'https://www.jointhedaisy.com';
const LOCALES = ['en', 'ar'];

/**
 * Helper: for a given path (without locale), generate sitemap entries for all locales.
 * Includes hreflang cross-references so Google understands locale relationships.
 */
function localizedEntries(
  path: string,
  opts: {
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`]),
      ),
    },
  }));
}

/**
 * Per-route lastUpdated overrides for routes that do NOT have a per-entry
 * `lastUpdated` field in a content data file (those use their own dates —
 * see getGlossarySitemapData / getGuideSitemapData / getPillarSitemapData
 * and blog `publishedAt`).
 *
 * Add or bump entries here when you ship meaningful content changes to a
 * page so Google sees an accurate <lastmod> in the sitemap and recrawls
 * promptly. The `bump-page-lastupdated` skill in `.claude/skills/` will
 * do this for you — it scans the working tree for modified content
 * files and writes today's ISO date next to the corresponding route key.
 *
 * Routes not listed here fall back to one of the bucket constants below.
 */
const ROUTE_LAST_UPDATED: Record<string, string> = {
  // Both pages now end with the FAQ; the partner form is gone (PR #341)
  '/business': '2026-10-02T00:00:00.000Z',
  // Daisy's own claims corrected: no phone calls yet, team members per plan,
  // optional marketplace, domain redirect only (2026-10-10)
  '/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-management-software': '2026-10-10T00:00:00.000Z',
  '/solutions/spa-booking-system': '2026-10-10T00:00:00.000Z',
  '/solutions/beauty-salon-software': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-appointment-scheduling': '2026-10-10T00:00:00.000Z',
  '/solutions/barbershop-software': '2026-10-10T00:00:00.000Z',
  '/solutions/nail-salon-software': '2026-10-10T00:00:00.000Z',
  '/solutions/med-spa-software': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-pos-system': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-crm-software': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-marketing-software': '2026-10-10T00:00:00.000Z',
  '/solutions/salon-booking-app': '2026-10-10T00:00:00.000Z',
  '/solutions/beauty-business-management': '2026-10-10T00:00:00.000Z',
  '/solutions/ai-receptionist/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/unified-inbox/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/brand-control/business': '2026-10-10T00:00:00.000Z',
  '/solutions/brand-control/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/smart-scheduling/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/service-portfolio/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/ai-marketing/professional': '2026-10-10T00:00:00.000Z',
  '/solutions/all-in-one/professional': '2026-10-10T00:00:00.000Z',
  '/features/business': '2026-10-10T00:00:00.000Z',
  '/features/business/ai-salon-management': '2026-10-10T00:00:00.000Z',
  '/features/business/booking-management': '2026-10-10T00:00:00.000Z',
  '/features/business/marketing-promotions': '2026-10-10T00:00:00.000Z',
  '/features/business/business-growth': '2026-10-10T00:00:00.000Z',
  '/features/professional/ai-salon-management': '2026-10-10T00:00:00.000Z',
  '/features/professional/booking-management': '2026-10-10T00:00:00.000Z',
  '/features/professional/marketing-promotions': '2026-10-10T00:00:00.000Z',
  '/features/professional/business-growth': '2026-10-10T00:00:00.000Z',
  '/faq': '2026-10-10T00:00:00.000Z',
  '/insights': '2026-10-10T00:00:00.000Z',
  // Crawlers are no longer sent on to the Play Store (see src/lib/utils/crawler.ts)
  '/get-the-app': '2026-10-08T00:00:00.000Z',
};

function lastModFor(routeKey: string, fallback: string): string {
  return ROUTE_LAST_UPDATED[routeKey] ?? fallback;
}

/** A yyyy-mm-dd date as the ISO timestamp the rest of the sitemap uses. */
function isoDay(date: string | undefined): string | undefined {
  return date ? `${date.slice(0, 10)}T00:00:00.000Z` : undefined;
}

/** The latest of several ISO dates, ignoring missing ones. */
function latest(...dates: Array<string | undefined>): string | undefined {
  return dates.filter((d): d is string => Boolean(d)).sort().pop();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Bucket-level fallbacks. Used by any route not listed in
  // ROUTE_LAST_UPDATED above.
  const STATIC_CONTENT_DATE = '2026-03-17T00:00:00.000Z';
  const SEO_CONTENT_DATE = '2026-03-17T00:00:00.000Z';
  const LEGAL_DATE = '2026-01-01T00:00:00.000Z';

  // Main pages (root / redirects to /{locale}/business, so not included separately)
  const mainPages = [
    ...localizedEntries('/business', { lastModified: lastModFor('/business', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 1 }),
    ...localizedEntries('/professional', { lastModified: lastModFor('/professional', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.9 }),
  ];

  // Feature pages
  const featurePages = [
    ...localizedEntries('/features/business', { lastModified: lastModFor('/features/business', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/features/professional', { lastModified: lastModFor('/features/professional', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.8 }),
  ];

  // Information pages
  const infoPages = [
    ...localizedEntries('/about', { lastModified: lastModFor('/about', STATIC_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/pricing/business', { lastModified: lastModFor('/pricing/business', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntries('/pricing/professional', { lastModified: lastModFor('/pricing/professional', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntries('/contact', { lastModified: lastModFor('/contact', STATIC_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/faq', { lastModified: lastModFor('/faq', STATIC_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.6 }),
    ...localizedEntries('/careers', { lastModified: lastModFor('/careers', STATIC_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.5 }),
    ...localizedEntries('/get-the-app', { lastModified: lastModFor('/get-the-app', STATIC_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.9 }),
  ];

  // Blog posts. A post's date is when it was published or, if later, when it
  // was last revised (updatedAt). New posts appear here on the next deploy
  // with no other step.
  const blogSlugs = await getAllBlogSlugs();
  const postDate = (item: (typeof blogSlugs)[number]) =>
    latest(item.publishedAt, item.updatedAt) ?? SEO_CONTENT_DATE;
  const blogPages = blogSlugs.flatMap((item) =>
    localizedEntries(`/resources/blog/${item.userType}/${item.slug}`, {
      lastModified: postDate(item),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  );

  // A blog listing changes whenever a post is added to it, so it carries the
  // date of its newest post. The bare hub lists every persona.
  const newestPost = (userType?: string) =>
    latest(...blogSlugs.filter((i) => !userType || i.userType === userType).map(postDate)) ??
    SEO_CONTENT_DATE;

  // The updates page lists release notes, so it changes when one is added.
  // Maintenance-only entries are hidden from the page and do not count.
  const newestReleaseNote =
    isoDay(latest(...RELEASE_NOTES.filter((n) => !n.maintenanceOnly).map((n) => n.date))) ??
    STATIC_CONTENT_DATE;

  // Resource pages — bare hub URLs serve all personas; per-persona variants
  // are individually indexable so the locale + persona combination is the
  // canonical SEO target the persona toggle navigates to.
  const resourcePages = [
    ...localizedEntries('/resources/blog-post', { lastModified: lastModFor('/resources/blog-post', newestPost()), changeFrequency: 'daily', priority: 0.7 }),
    ...localizedEntries('/resources/blog-post/business', { lastModified: lastModFor('/resources/blog-post/business', newestPost('business')), changeFrequency: 'daily', priority: 0.7 }),
    ...localizedEntries('/resources/blog-post/professional', { lastModified: lastModFor('/resources/blog-post/professional', newestPost('professional')), changeFrequency: 'daily', priority: 0.7 }),
    ...localizedEntries('/resources/blog-post/customer', { lastModified: lastModFor('/resources/blog-post/customer', newestPost('customer')), changeFrequency: 'daily', priority: 0.7 }),
    ...localizedEntries('/resources/tutorials', { lastModified: lastModFor('/resources/tutorials', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.6 }),
    ...localizedEntries('/resources/tutorials/business', { lastModified: lastModFor('/resources/tutorials/business', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.6 }),
    ...localizedEntries('/resources/tutorials/professional', { lastModified: lastModFor('/resources/tutorials/professional', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.6 }),
    ...localizedEntries('/resources/testimonials', { lastModified: lastModFor('/resources/testimonials', STATIC_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.5 }),
    ...localizedEntries('/resources/updates', { lastModified: lastModFor('/resources/updates', newestReleaseNote), changeFrequency: 'weekly', priority: 0.6 }),
  ];

  // Legal pages
  const legalPages = [
    ...localizedEntries('/privacy-policy', { lastModified: lastModFor('/privacy-policy', LEGAL_DATE), changeFrequency: 'yearly', priority: 0.3 }),
    ...localizedEntries('/terms-conditions', { lastModified: lastModFor('/terms-conditions', LEGAL_DATE), changeFrequency: 'yearly', priority: 0.3 }),
    // /resources/legal excluded — redirects (307) and wastes crawl budget
  ];

  // SEO pages: comparison, alternative, solution (index pages)
  const compareIndexPages = [
    ...localizedEntries('/compare', { lastModified: lastModFor('/compare', SEO_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/alternative', { lastModified: lastModFor('/alternative', SEO_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/solutions', { lastModified: lastModFor('/solutions', SEO_CONTENT_DATE), changeFrequency: 'weekly', priority: 0.8 }),
  ];

  // Comparison and alternatives pages use the same date the page shows under
  // its title ("Last updated"), from comparisonLastUpdated.ts.
  const comparePages = getAllCompareSlugs().flatMap((slug) =>
    localizedEntries(`/compare/${slug}`, {
      lastModified: lastModFor(`/compare/${slug}`, isoDay(comparisonLastUpdated('compare', slug)) ?? SEO_CONTENT_DATE),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  const alternativePagesList = getAllAlternativeSlugs().flatMap((slug) =>
    localizedEntries(`/alternative/${slug}`, {
      lastModified: lastModFor(`/alternative/${slug}`, isoDay(comparisonLastUpdated('alternative', slug)) ?? SEO_CONTENT_DATE),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  const solutionPages = getAllSolutionSlugs().flatMap((slug) =>
    localizedEntries(`/solutions/${slug}`, { lastModified: lastModFor(`/solutions/${slug}`, SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.8 })
  );

  // GEO content pages: glossary, guides, insights
  const geoIndexPages = [
    ...localizedEntries('/glossary', { lastModified: lastModFor('/glossary', SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/guides', { lastModified: lastModFor('/guides', SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/insights', { lastModified: lastModFor('/insights', SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.7 }),
  ];

  const glossaryPages = getGlossarySitemapData().flatMap(({ slug, lastUpdated }) =>
    localizedEntries(`/glossary/${slug}`, {
      lastModified: lastUpdated || SEO_CONTENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  const guidePages = getGuideSitemapData().flatMap(({ slug, lastUpdated }) =>
    localizedEntries(`/guides/${slug}`, {
      lastModified: lastUpdated || SEO_CONTENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  // Feature deep-dive pages (WS3)
  const featureDeepDiveBusinessPages = getAllFeatureDeepDiveSlugs('business').flatMap((slug) =>
    localizedEntries(`/features/business/${slug}`, { lastModified: lastModFor(`/features/business/${slug}`, SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.8 })
  );

  const featureDeepDiveProfessionalPages = getAllFeatureDeepDiveSlugs('professional').flatMap((slug) =>
    localizedEntries(`/features/professional/${slug}`, { lastModified: lastModFor(`/features/professional/${slug}`, SEO_CONTENT_DATE), changeFrequency: 'monthly', priority: 0.8 })
  );

  // Solution angle landing pages (7 angles x 2 personas = 14 pages)
  const solutionAnglePages = getAllAngleParams().flatMap(({ slug, persona }) =>
    localizedEntries(`/solutions/${slug}/${persona}`, {
      lastModified: lastModFor(`/solutions/${slug}/${persona}`, SEO_CONTENT_DATE),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  // Pillar pages, top-level authority pages (highest SEO priority after homepage)
  const pillarPages = getPillarSitemapData().flatMap(({ slug, lastUpdated }) =>
    localizedEntries(`/${slug}`, {
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  );

  return [
    ...mainPages,
    ...featurePages,
    ...infoPages,
    ...resourcePages,
    ...legalPages,
    ...blogPages,
    ...compareIndexPages,
    ...comparePages,
    ...alternativePagesList,
    ...solutionPages,
    ...geoIndexPages,
    ...glossaryPages,
    ...guidePages,
    ...featureDeepDiveBusinessPages,
    ...featureDeepDiveProfessionalPages,
    ...solutionAnglePages,
    ...pillarPages,
  ];
}
