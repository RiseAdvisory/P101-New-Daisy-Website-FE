import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/api/blog';
import { getAllCompareSlugs, getAllAlternativeSlugs } from '@/lib/constants/competitors/comparisonPages';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';
import { getAllGlossarySlugs } from '@/lib/constants/glossary/glossaryData';
import { getAllGuideSlugs } from '@/lib/constants/guides/guideData';
import { getAllFeatureDeepDiveSlugs } from '@/lib/constants/features/featureDeepDive';

const BASE_URL = 'https://www.jointhedaisy.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use fixed dates for static content so crawlers know what actually changed
  const STATIC_CONTENT_DATE = '2026-03-14T00:00:00.000Z';
  const SEO_CONTENT_DATE = '2026-03-14T00:00:00.000Z';
  const LEGAL_DATE = '2026-01-01T00:00:00.000Z';

  // Main pages (root / redirects to /business, so not included separately)
  const mainPages = [
    {
      url: `${BASE_URL}/business`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/professional`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Feature pages
  const featurePages = [
    {
      url: `${BASE_URL}/features/business`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/professional`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Information pages
  const infoPages = [
    {
      url: `${BASE_URL}/about`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/get-the-app`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Resource pages
  const resourcePages = [
    {
      url: `${BASE_URL}/resources/blog-post`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/tutorials`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/testimonials`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/resources/updates`,
      lastModified: STATIC_CONTENT_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Legal pages
  const legalPages = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: LEGAL_DATE,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: LEGAL_DATE,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/resources/legal`,
      lastModified: LEGAL_DATE,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamically fetch blog posts
  const blogSlugs = await getAllBlogSlugs();
  const blogPages = blogSlugs.map((item) => ({
    url: `${BASE_URL}/resources/blog/${item.userType}/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // SEO pages: comparison, alternative, solution
  const compareIndexPages = [
    { url: `${BASE_URL}/compare`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/alternative`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/solutions`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const comparePages = getAllCompareSlugs().map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const alternativePagesList = getAllAlternativeSlugs().map((slug) => ({
    url: `${BASE_URL}/alternative/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const solutionPages = getAllSolutionSlugs().map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // GEO content pages: glossary, guides, insights
  const geoIndexPages = [
    { url: `${BASE_URL}/glossary`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/guides`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/insights`, lastModified: SEO_CONTENT_DATE, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const glossaryPages = getAllGlossarySlugs().map((slug) => ({
    url: `${BASE_URL}/glossary/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Feature deep-dive pages (WS3)
  const featureDeepDiveBusinessPages = getAllFeatureDeepDiveSlugs('business').map((slug) => ({
    url: `${BASE_URL}/features/business/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const featureDeepDiveProfessionalPages = getAllFeatureDeepDiveSlugs('professional').map((slug) => ({
    url: `${BASE_URL}/features/professional/${slug}`,
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

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
  ];
}
