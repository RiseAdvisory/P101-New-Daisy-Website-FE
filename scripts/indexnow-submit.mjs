#!/usr/bin/env node

/**
 * IndexNow Post-Deploy Script
 *
 * Submits all site URLs to IndexNow after a Vercel deployment.
 * Fetches the live sitemap.xml to get URLs dynamically.
 *
 * Usage:
 *   INDEXNOW_KEY=your-key node scripts/indexnow-submit.mjs
 *
 * Environment:
 *   INDEXNOW_KEY — Required. IndexNow API key.
 *   SITE_URL    — Deployed site URL (defaults to https://www.jointhedaisy.com)
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE_URL = process.env.SITE_URL || 'https://www.jointhedaisy.com';

if (!INDEXNOW_KEY) {
  console.error('[IndexNow] INDEXNOW_KEY environment variable is required.');
  process.exit(1);
}

async function main() {
  console.log('[IndexNow] Fetching sitemap...');

  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const res = await fetch(sitemapUrl);

  if (!res.ok) {
    console.error(`[IndexNow] Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();

  // Extract all <loc> URLs from the sitemap XML
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.log('[IndexNow] No URLs found in sitemap.');
    process.exit(0);
  }

  console.log(`[IndexNow] Found ${urls.length} URLs. Submitting...`);

  // Submit in batches of 10,000 (IndexNow API limit)
  const batchSize = 10000;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;

    const host = new URL(SITE_URL).hostname;
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      }),
    });

    if (response.ok || response.status === 202) {
      console.log(
        `[IndexNow] Batch ${batchNum}: ${batch.length} URLs submitted (${response.status})`,
      );
    } else {
      const errorText = await response.text().catch(() => '');
      console.error(
        `[IndexNow] Batch ${batchNum} failed: ${response.status} ${errorText}`,
      );
    }
  }

  console.log('[IndexNow] Done.');
}

main().catch((err) => {
  console.error('[IndexNow] Error:', err);
  process.exit(1);
});
