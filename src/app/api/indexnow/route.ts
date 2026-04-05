import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jointhedaisy.com';
const MAX_CUSTOM_URLS = 10000;
const ALLOWED_HOST = 'www.jointhedaisy.com';

/**
 * Fetch all URLs dynamically from the live sitemap.xml.
 * This ensures parity with sitemap.ts without code duplication.
 */
async function getUrlsFromSitemap(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/sitemap.xml`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status}`);
  }

  const xml = await res.text();
  const urls: string[] = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Submit URLs to IndexNow in batches of 10,000 (API limit).
 */
async function submitToIndexNow(
  urls: string[],
  key: string,
): Promise<{ status: number; submitted: number }> {
  const batchSize = 10000;
  let lastStatus = 200;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: ALLOWED_HOST,
        key,
        keyLocation: `${BASE_URL}/${key}.txt`,
        urlList: batch,
      }),
    });

    lastStatus = response.status;

    if (response.status !== 200 && response.status !== 202) {
      const errorText = await response.text().catch(() => '');
      console.error(
        `IndexNow batch ${i / batchSize + 1} failed:`,
        response.status,
        errorText,
      );
      break;
    }
  }

  return { status: lastStatus, submitted: urls.length };
}

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
 * POST /api/indexnow — Submit site URLs to IndexNow.
 * Accepts optional JSON body with { urls: string[] } to submit specific URLs.
 * If no body provided, fetches all URLs from the live sitemap.xml.
 *
 * Requires INDEXNOW_SECRET env var for authentication.
 * Requires INDEXNOW_KEY env var for the IndexNow API key.
 */
export async function POST(request: NextRequest) {
  const expectedSecret = process.env.INDEXNOW_SECRET;
  if (!expectedSecret) {
    return NextResponse.json(
      { error: 'INDEXNOW_SECRET not configured' },
      { status: 503 },
    );
  }

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not configured' },
      { status: 503 },
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
          { status: 400 },
        );
      }
      const validUrls = body.urls.filter(
        (u: unknown): u is string => typeof u === 'string' && isValidUrl(u),
      );
      if (validUrls.length === 0) {
        return NextResponse.json(
          {
            error:
              'No valid URLs provided. URLs must be HTTPS and belong to www.jointhedaisy.com',
          },
          { status: 400 },
        );
      }
      urls = validUrls;
    } else {
      urls = await getUrlsFromSitemap();
    }

    const result = await submitToIndexNow(urls, indexNowKey);

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
      { status: 500 },
    );
  }
}

/**
 * GET /api/indexnow — Health check endpoint.
 */
export async function GET() {
  return NextResponse.json({ service: 'IndexNow', status: 'ready' });
}
