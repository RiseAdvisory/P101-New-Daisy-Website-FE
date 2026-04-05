import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogSlugs } from '@/lib/api/blog';
import { getAllCompareSlugs, getAllAlternativeSlugs } from '@/lib/constants/competitors/comparisonPages';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';
import { getAllGlossarySlugs } from '@/lib/constants/glossary/glossaryData';
import { getAllGuideSlugs } from '@/lib/constants/guides/guideData';
import { getAllFeatureDeepDiveSlugs } from '@/lib/constants/features/featureDeepDive';
import { getAllPillarSlugs } from '@/lib/constants/pillars';
import { getAllAngleParams } from '@/lib/constants/solutions/angles';

const INDEXNOW_KEY = '7373a4dbaf3346aa8debb273d62d4187';
const BASE_URL = 'https://www.jointhedaisy.com';
const LOCALES = ['en', 'ar'];

/**
 * Collect all site URLs for IndexNow submission.
 * Mirrors the sitemap.ts logic to ensure parity.
 */
async function getAllUrls(): Promise<string[]> {
  const urls: string[] = [];

  const addLocalized = (path: string) => {
    for (const locale of LOCALES) {
      urls.push(`${BASE_URL}/${locale}${path}`);
    }
  };

  // Main pages
  addLocalized('/business');
  addLocalized('/professional');
  addLocalized('/start-free-trial/business');
  addLocalized('/start-free-trial/professional');

  // Feature pages
  addLocalized('/features/business');
  addLocalized('/features/professional');

  // Info pages
  for (const path of ['/about', '/pricing', '/contact', '/faq', '/careers', '/get-the-app']) {
    addLocalized(path);
  }

  // Resource pages
  for (const path of ['/resources/blog-post', '/resources/tutorials', '/resources/testimonials']) {
    addLocalized(path);
  }

  // Legal pages
  addLocalized('/privacy-policy');
  addLocalized('/terms-conditions');

  // Blog posts
  const blogSlugs = await getAllBlogSlugs();
  for (const item of blogSlugs) {
    addLocalized(`/resources/blog/${item.userType}/${item.slug}`);
  }

  // SEO index pages
  for (const path of ['/compare', '/alternative', '/solutions', '/glossary', '/guides', '/insights']) {
    addLocalized(path);
  }

  // Comparison pages
  for (const slug of getAllCompareSlugs()) {
    addLocalized(`/compare/${slug}`);
  }

  // Alternative pages
  for (const slug of getAllAlternativeSlugs()) {
    addLocalized(`/alternative/${slug}`);
  }

  // Solution pages
  for (const slug of getAllSolutionSlugs()) {
    addLocalized(`/solutions/${slug}`);
  }

  // Glossary pages
  for (const slug of getAllGlossarySlugs()) {
    addLocalized(`/glossary/${slug}`);
  }

  // Guide pages
  for (const slug of getAllGuideSlugs()) {
    addLocalized(`/guides/${slug}`);
  }

  // Feature deep-dives
  for (const slug of getAllFeatureDeepDiveSlugs('business')) {
    addLocalized(`/features/business/${slug}`);
  }
  for (const slug of getAllFeatureDeepDiveSlugs('professional')) {
    addLocalized(`/features/professional/${slug}`);
  }

  // Solution angle pages
  for (const { slug, persona } of getAllAngleParams()) {
    addLocalized(`/solutions/${slug}/${persona}`);
  }

  // Pillar pages
  for (const slug of getAllPillarSlugs()) {
    addLocalized(`/${slug}`);
  }

  return urls;
}

/**
 * Submit URLs to IndexNow in batches of 10,000 (API limit).
 */
async function submitToIndexNow(urls: string[]): Promise<{ status: number; submitted: number }> {
  const batchSize = 10000;
  let lastStatus = 200;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'www.jointhedaisy.com',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      }),
    });

    lastStatus = response.status;

    if (response.status !== 200 && response.status !== 202) {
      const errorText = await response.text().catch(() => '');
      console.error(`IndexNow batch ${i / batchSize + 1} failed:`, response.status, errorText);
      break;
    }
  }

  return { status: lastStatus, submitted: urls.length };
}

/**
 * POST /api/indexnow — Submit all site URLs to IndexNow.
 * Accepts optional JSON body with { urls: string[] } to submit specific URLs.
 * If no body provided, submits all site URLs.
 *
 * Protected by a simple secret key in the Authorization header.
 */
export async function POST(request: NextRequest) {
  // Simple auth check — use INDEXNOW_SECRET env var or the API key itself
  const authHeader = request.headers.get('authorization');
  const expectedSecret = process.env.INDEXNOW_SECRET || INDEXNOW_KEY;

  if (authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let urls: string[];

    // Check if specific URLs were provided
    const body = await request.json().catch(() => null);
    if (body?.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      urls = body.urls;
    } else {
      urls = await getAllUrls();
    }

    const result = await submitToIndexNow(urls);

    return NextResponse.json({
      success: result.status === 200 || result.status === 202,
      status: result.status,
      submitted: result.submitted,
      message: `Submitted ${result.submitted} URLs to IndexNow`,
    });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow — Health check / info endpoint.
 */
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    endpoint: 'POST /api/indexnow with Authorization: Bearer <secret>',
  });
}
