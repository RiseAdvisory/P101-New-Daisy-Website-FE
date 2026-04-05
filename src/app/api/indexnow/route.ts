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

const MAX_CUSTOM_URLS = 10000;
const ALLOWED_HOST = 'www.jointhedaisy.com';

/**
 * Validate that a URL belongs to our domain and uses HTTPS.
 */
function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === ALLOWED_HOST;
  } catch {
    return false;
  }
}

/**
 * POST /api/indexnow — Submit all site URLs to IndexNow.
 * Accepts optional JSON body with { urls: string[] } to submit specific URLs.
 * If no body provided, submits all site URLs.
 *
 * Requires INDEXNOW_SECRET env var for authentication.
 */
export async function POST(request: NextRequest) {
  const expectedSecret = process.env.INDEXNOW_SECRET;
  if (!expectedSecret) {
    return NextResponse.json(
      { error: 'INDEXNOW_SECRET not configured' },
      { status: 503 }
    );
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let urls: string[];

    const body = await request.json().catch(() => null);
    if (body?.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      if (body.urls.length > MAX_CUSTOM_URLS) {
        return NextResponse.json(
          { error: `Maximum ${MAX_CUSTOM_URLS} URLs per request` },
          { status: 400 }
        );
      }
      const validUrls = body.urls.filter(
        (u: unknown): u is string => typeof u === 'string' && isValidUrl(u)
      );
      if (validUrls.length === 0) {
        return NextResponse.json(
          { error: 'No valid URLs provided. URLs must be HTTPS and belong to www.jointhedaisy.com' },
          { status: 400 }
        );
      }
      urls = validUrls;
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
 * GET /api/indexnow — Health check endpoint.
 */
export async function GET() {
  return NextResponse.json({ service: 'IndexNow', status: 'ready' });
}
