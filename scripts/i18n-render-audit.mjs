#!/usr/bin/env node
/**
 * Rendered-page Arabic audit.
 *
 * scripts/i18n-audit.mjs checks the DATA layer: that each content dataset has
 * an Arabic version and that it is wired. It cannot see interface text typed
 * straight into a component, so it reported Arabic as complete while 123 of
 * 276 Arabic pages rendered English (2026-10-01). This script checks what the
 * pages actually render: every /ar/ URL in the sitemap, every text node and
 * the <title>.
 *
 * It uses the same rule and allowlist as
 * src/lib/i18n/__tests__/arabicPagesRenderArabic.test.tsx, which enforces the
 * client-rendered templates in CI. This script covers the whole site,
 * including server-rendered pages the test cannot mount.
 *
 * Usage (against a production build):
 *   npm run build && npm run start          # in one terminal
 *   npm run i18n:render-audit               # in another
 *   BASE_URL=https://www.jointhedaisy.com npm run i18n:render-audit
 *   npm run i18n:render-audit -- --ci       # exit non-zero when English found
 */

import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const BASE_URL = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const CI = process.argv.includes('--ci');
const CONCURRENCY = 6;

const allow = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'src/lib/i18n/latinAllowlist.json'), 'utf8'),
);
const ALLOWED_WORDS = new Set(allow.words);
const WHOLE_NODES = new Set([...allow.wholeNodes, ...(allow.planNames || [])]);
const PHRASES = allow.phrases || [];

/** Same rule as the Jest test: a node whose letters are mostly English words. */
function isEnglish(raw) {
  if (!raw || WHOLE_NODES.has(raw)) return false;
  if (/^[\w.+-]+@[\w.-]+$/.test(raw)) return false; // an email address
  // Proper names inside Arabic text ("استطلاع Salon Today") and multipliers
  // ("3x") are not English copy.
  const text = PHRASES.reduce((t, p) => t.split(p).join(' '), raw).replace(/\b\d+(\.\d+)?x\b/g, ' ');
  const words = text.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
  const english = words.filter((w) => !ALLOWED_WORDS.has(w.toLowerCase()));
  const arabicChars = (text.match(/[؀-ۿ]/g) || []).length;
  const latinChars = english.join('').length;
  return english.length >= 1 && latinChars > arabicChars;
}

function englishOn(html) {
  const { document, NodeFilter } = new JSDOM(html).window;
  const found = new Set();
  const title = document.querySelector('title')?.textContent?.trim();
  if (title && isEnglish(title)) found.add(`<title> ${title}`);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script,style,noscript,svg,template')) continue;
    const text = (node.textContent || '').replace(/\s+/g, ' ').trim();
    if (isEnglish(text)) found.add(text.slice(0, 120));
  }
  return [...found];
}

async function main() {
  const sitemap = await (await fetch(`${BASE_URL}/sitemap.xml`)).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p) => p === '/ar' || p.startsWith('/ar/'));

  const results = [];
  let next = 0;
  async function worker() {
    while (next < paths.length) {
      const p = paths[next++];
      try {
        const res = await fetch(`${BASE_URL}${p}`, { headers: { 'User-Agent': 'i18n-render-audit' } });
        results.push({ path: p, english: englishOn(await res.text()) });
      } catch (e) {
        results.push({ path: p, english: [`fetch failed: ${e.message}`] });
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const bad = results.filter((r) => r.english.length > 0).sort((a, b) => a.path.localeCompare(b.path));
  console.log(`Arabic pages: ${results.length} | fully Arabic: ${results.length - bad.length} | with English: ${bad.length}`);
  for (const r of bad) {
    console.log(`\n${r.path}`);
    for (const e of r.english) console.log(`  - ${e}`);
  }
  if (CI && bad.length > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
