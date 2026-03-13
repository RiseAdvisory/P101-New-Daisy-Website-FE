import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/api/blog';
import { getAllCompareSlugs, getAllAlternativeSlugs } from '@/lib/constants/competitors/comparisonPages';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';

const BASE_URL = 'https://www.jointhedaisy.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Main pages (root / redirects to /business, so not included separately)
  const mainPages = [
    {
      url: `${BASE_URL}/business`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/professional`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Feature pages
  const featurePages = [
    {
      url: `${BASE_URL}/features/business`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features/professional`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Information pages
  const infoPages = [
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/get-the-app`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Resource pages
  const resourcePages = [
    {
      url: `${BASE_URL}/resources/blog-post`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/tutorials`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/resources/updates`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Legal pages
  const legalPages = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/resources/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamically fetch blog posts
  const blogSlugs = await getAllBlogSlugs();
  const blogPages = blogSlugs.map((item) => ({
    url: `${BASE_URL}/resources/blog/${item.userType}/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // WS2: Comparison pages
  const compareIndexPages = [
    { url: `${BASE_URL}/compare`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/alternative`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/solutions`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const comparePages = getAllCompareSlugs().map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const alternativePagesList = getAllAlternativeSlugs().map((slug) => ({
    url: `${BASE_URL}/alternative/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const solutionPages = getAllSolutionSlugs().map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
  ];
}
