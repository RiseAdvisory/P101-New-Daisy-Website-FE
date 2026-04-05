import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/api/blog';
import { getAllCompareSlugs, getAllAlternativeSlugs } from '@/lib/constants/competitors/comparisonPages';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';
import { getAllGlossarySlugs } from '@/lib/constants/glossary/glossaryData';
import { getAllGuideSlugs } from '@/lib/constants/guides/guideData';
import { getAllFeatureDeepDiveSlugs } from '@/lib/constants/features/featureDeepDive';
import { getAllPillarSlugs } from '@/lib/constants/pillars';
import { getAllAngleParams } from '@/lib/constants/solutions/angles';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use fixed dates for static content so crawlers know what actually changed
  const STATIC_CONTENT_DATE = '2026-03-17T00:00:00.000Z';
  const SEO_CONTENT_DATE = '2026-03-17T00:00:00.000Z';
  const LEGAL_DATE = '2026-01-01T00:00:00.000Z';

  // Main pages (root / redirects to /{locale}/business, so not included separately)
  const mainPages = [
    ...localizedEntries('/business', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 1 }),
    ...localizedEntries('/professional', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntries('/start-free-trial/business', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 }),
    ...localizedEntries('/start-free-trial/professional', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 }),
  ];

  // Feature pages
  const featurePages = [
    ...localizedEntries('/features/business', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/features/professional', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.8 }),
  ];

  // Information pages
  const infoPages = [
    ...localizedEntries('/about', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/pricing/business', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntries('/pricing/professional', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.9 }),
    ...localizedEntries('/contact', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/faq', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.6 }),
    ...localizedEntries('/careers', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.5 }),
    ...localizedEntries('/get-the-app', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.6 }),
  ];

  // Resource pages
  const resourcePages = [
    ...localizedEntries('/resources/blog-post', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'daily', priority: 0.7 }),
    ...localizedEntries('/resources/tutorials', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.6 }),
    ...localizedEntries('/resources/testimonials', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.5 }),
    ...localizedEntries('/resources/updates', { lastModified: STATIC_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.6 }),
  ];

  // Legal pages
  const legalPages = [
    ...localizedEntries('/privacy-policy', { lastModified: LEGAL_DATE, changeFrequency: 'yearly', priority: 0.3 }),
    ...localizedEntries('/terms-conditions', { lastModified: LEGAL_DATE, changeFrequency: 'yearly', priority: 0.3 }),
    ...localizedEntries('/resources/legal', { lastModified: LEGAL_DATE, changeFrequency: 'yearly', priority: 0.3 }),
  ];

  // Dynamically fetch blog posts
  const blogSlugs = await getAllBlogSlugs();
  const blogPages = blogSlugs.flatMap((item) =>
    localizedEntries(`/resources/blog/${item.userType}/${item.slug}`, {
      lastModified: item.publishedAt || SEO_CONTENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  );

  // SEO pages: comparison, alternative, solution (index pages)
  const compareIndexPages = [
    ...localizedEntries('/compare', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/alternative', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.8 }),
    ...localizedEntries('/solutions', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly', priority: 0.8 }),
  ];

  const comparePages = getAllCompareSlugs().flatMap((slug) =>
    localizedEntries(`/compare/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 })
  );

  const alternativePagesList = getAllAlternativeSlugs().flatMap((slug) =>
    localizedEntries(`/alternative/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 })
  );

  const solutionPages = getAllSolutionSlugs().flatMap((slug) =>
    localizedEntries(`/solutions/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 })
  );

  // GEO content pages: glossary, guides, insights
  const geoIndexPages = [
    ...localizedEntries('/glossary', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/guides', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 }),
    ...localizedEntries('/insights', { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 }),
  ];

  const glossaryPages = getAllGlossarySlugs().flatMap((slug) =>
    localizedEntries(`/glossary/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 })
  );

  const guidePages = getAllGuideSlugs().flatMap((slug) =>
    localizedEntries(`/guides/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 })
  );

  // Feature deep-dive pages (WS3)
  const featureDeepDiveBusinessPages = getAllFeatureDeepDiveSlugs('business').flatMap((slug) =>
    localizedEntries(`/features/business/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 })
  );

  const featureDeepDiveProfessionalPages = getAllFeatureDeepDiveSlugs('professional').flatMap((slug) =>
    localizedEntries(`/features/professional/${slug}`, { lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 })
  );

  // Solution angle landing pages (7 angles x 2 personas = 14 pages)
  const solutionAnglePages = getAllAngleParams().flatMap(({ slug, persona }) =>
    localizedEntries(`/solutions/${slug}/${persona}`, {
      lastModified: SEO_CONTENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  // Pillar pages, top-level authority pages (highest SEO priority after homepage)
  const pillarPages = getAllPillarSlugs().flatMap((slug) =>
    localizedEntries(`/${slug}`, {
      lastModified: SEO_CONTENT_DATE,
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
