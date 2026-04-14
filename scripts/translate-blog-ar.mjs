#!/usr/bin/env node
/**
 * Translate local blog posts EN -> AR (EN is source of truth).
 *
 * What it does:
 * - Finds Arabic `LocalBlogPost` consts (locale: 'ar') in `src/lib/constants/blog/articles/*.ts`
 * - Finds the matching English const (same slug, locale: 'en') in the same file
 * - If the Arabic body is a placeholder or significantly shorter than English:
 *   - Translates EN `aboutPosts` into Arabic while preserving HTML tags
 *   - Translates EN `description` into Arabic
 *   - Translates EN `title` into Arabic only if the current AR title contains Latin letters
 * - Writes changes back to the TS files in-place
 *
 * Notes:
 * - Uses an unofficial Google Translate endpoint (no API key) and a local cache to limit requests.
 *
 * Usage:
 *   node scripts/translate-blog-ar.mjs
 *   node scripts/translate-blog-ar.mjs --dry-run
 *   node scripts/translate-blog-ar.mjs --file src/lib/constants/blog/articles/salon-payments.ts
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, 'src/lib/constants/blog/articles');
const CACHE_DIR = path.join(ROOT, '.claude/cache');
const CACHE_PATH = path.join(CACHE_DIR, 'translate-en-ar.json');

const args = process.argv.slice(2);
const argv = new Set(args);
const DRY_RUN = argv.has('--dry-run');

function getArgValue(flag) {
  const idx = args.indexOf(flag);
  if (idx === -1) return null;
  return args[idx + 1] || null;
}

const ONLY_FILE = getArgValue('--file');

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// Global throttle to reduce the chance of 429 rate limits.
const MIN_REQUEST_INTERVAL_MS = 2500;
let lastRequestAt = 0;

async function throttle() {
  const now = Date.now();
  const wait = lastRequestAt + MIN_REQUEST_INTERVAL_MS - now;
  if (wait > 0) await sleep(wait);
  lastRequestAt = Date.now();
}

async function translateViaGoogle(text, { sl = 'en', tl = 'ar' } = {}) {
  // Alternate host seems to tolerate higher volumes than translate.googleapis.com.
  const url = `https://translate.google.com/translate_a/single?client=gtx&dt=t&sl=${encodeURIComponent(
    sl,
  )}&tl=${encodeURIComponent(tl)}`;

  const body = new URLSearchParams();
  body.set('q', text);

  await throttle();
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      // Keep the UA stable to reduce captcha-like responses.
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      accept: 'application/json,text/javascript,*/*;q=0.1',
    },
    body,
  });

  if (!res.ok) {
    const t = await res.text().catch(() => '');
    const err = new Error(`translate failed ${res.status}: ${t.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();
  const segments = Array.isArray(data?.[0]) ? data[0] : [];
  return segments.map((s) => (Array.isArray(s) ? s[0] : '')).join('');
}

function placeholderizeHtml(html) {
  const tags = [];
  const text = html.replace(/<[^>]+>/g, (m) => {
    const idx = tags.length;
    tags.push(m);
    return `__TAG_${String(idx).padStart(5, '0')}__`;
  });
  return { text, tags };
}

function restorePlaceholders(translated, tags) {
  let out = translated;
  for (let i = 0; i < tags.length; i++) {
    const token = `__TAG_${String(i).padStart(5, '0')}__`;
    out = out.split(token).join(tags[i]);
  }
  return out;
}

async function translateHtmlPreserveTags(html, cache) {
  const { text, tags } = placeholderizeHtml(html);
  const key = `html:${sha1(text)}`;
  if (cache[key]) return cache[key];

  let attempt = 0;
  while (true) {
    attempt++;
    try {
      const translated = await translateViaGoogle(text, { sl: 'en', tl: 'ar' });
      for (let i = 0; i < tags.length; i++) {
        const token = `__TAG_${String(i).padStart(5, '0')}__`;
        if (!translated.includes(token)) throw new Error(`placeholder missing: ${token}`);
      }
      const restored = restorePlaceholders(translated, tags);
      cache[key] = restored;
      return restored;
    } catch (err) {
      if (attempt >= 12) throw err;
      // Exponential backoff, with a bigger bump for sustained rate limiting.
      if (err?.status === 429) {
        await sleep(Math.min(10 * 60_000, 60_000 * attempt)); // up to 10 min
      } else {
        await sleep(Math.min(60_000, 1500 * attempt * attempt));
      }
    }
  }
}

async function translatePlain(text, cache) {
  const key = `plain:${sha1(text)}`;
  if (cache[key]) return cache[key];

  let attempt = 0;
  while (true) {
    attempt++;
    try {
      const translated = await translateViaGoogle(text, { sl: 'en', tl: 'ar' });
      cache[key] = translated;
      return translated;
    } catch (err) {
      if (attempt >= 12) throw err;
      if (err?.status === 429) {
        await sleep(Math.min(10 * 60_000, 60_000 * attempt));
      } else {
        await sleep(Math.min(60_000, 1500 * attempt * attempt));
      }
    }
  }
}

function extractConstBlocks(src) {
  const blocks = [];
  const re = /const\s+([A-Za-z0-9_]+)\s*:\s*LocalBlogPost\s*=\s*\{/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1];
    const start = m.index;
    const end = src.indexOf('\n};', start);
    if (end === -1) continue;
    blocks.push({ name, start, end: end + 3 }); // include trailing \n};
  }
  return blocks;
}

function parseSlugLocale(blockText) {
  const slugM = blockText.match(/slug:\s*'([^']+)'/);
  const localeM = blockText.match(/locale:\s*'([^']+)'/);
  return { slug: slugM?.[1] ?? null, locale: localeM?.[1] ?? null };
}

function extractTemplateLiteral(blockText, keyName) {
  const keyIdx = blockText.indexOf(`${keyName}:`);
  if (keyIdx === -1) return null;
  const after = blockText.slice(keyIdx);
  const t1 = after.indexOf('`');
  if (t1 === -1) return null;
  const rest = after.slice(t1 + 1);
  const t2 = rest.indexOf('`');
  if (t2 === -1) return null;
  return rest.slice(0, t2);
}

function replaceTemplateLiteral(blockText, keyName, newValue) {
  const keyIdx = blockText.indexOf(`${keyName}:`);
  if (keyIdx === -1) return blockText;
  const before = blockText.slice(0, keyIdx);
  const after = blockText.slice(keyIdx);
  const t1 = after.indexOf('`');
  if (t1 === -1) return blockText;
  const rest = after.slice(t1 + 1);
  const t2 = rest.indexOf('`');
  if (t2 === -1) return blockText;
  return before + after.slice(0, t1 + 1) + newValue + rest.slice(t2);
}

function extractSingleQuoted(blockText, keyName) {
  const re = new RegExp(`${keyName}:\\s*(?:\\n\\s*)?'([^']*)'`);
  const m = blockText.match(re);
  return m ? m[1] : null;
}

function replaceSingleQuoted(blockText, keyName, newValue) {
  const escaped = newValue.replace(/'/g, "\\\\'");
  const re = new RegExp(`(${keyName}:\\s*(?:\\n\\s*)?)'([^']*)'`);
  return blockText.replace(re, `$1'${escaped}'`);
}

function hasLatinLetters(s) {
  return /[A-Za-z]/.test(s);
}

async function translateFile(filePath, cache) {
  const fullPath = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  const original = fs.readFileSync(fullPath, 'utf8');
  const blocks = extractConstBlocks(original);

  const enBySlug = new Map();
  for (const b of blocks) {
    const text = original.slice(b.start, b.end);
    const { slug, locale } = parseSlugLocale(text);
    if (slug && locale === 'en') enBySlug.set(slug, text);
  }

  const edits = [];
  let translatedCount = 0;

  for (const b of blocks) {
    const arBlock = original.slice(b.start, b.end);
    const { slug, locale } = parseSlugLocale(arBlock);
    if (!slug || locale !== 'ar') continue;
    const enBlock = enBySlug.get(slug);
    if (!enBlock) continue;

    const enAbout = extractTemplateLiteral(enBlock, 'aboutPosts');
    const arAbout = extractTemplateLiteral(arBlock, 'aboutPosts');
    if (!enAbout || !arAbout) continue;

    const placeholder = /يقدم هذا المقال تحليلاً شاملاً/.test(arAbout);
    const tooShort = arAbout.length / Math.max(1, enAbout.length) < 0.8;
    if (!placeholder && !tooShort) continue;

    const enTitle = extractSingleQuoted(enBlock, 'title');
    const arTitle = extractSingleQuoted(arBlock, 'title');
    const enDesc = extractSingleQuoted(enBlock, 'description');

    // Convert locale in hrefs before translating so AR ends up with /ar/ links.
    const enAboutForAr = enAbout.replaceAll('href=\"/en/', 'href=\"/ar/').replaceAll('href=\"/en', 'href=\"/ar');
    const newAbout = await translateHtmlPreserveTags(enAboutForAr, cache);

    let updatedBlock = arBlock;
    updatedBlock = replaceTemplateLiteral(updatedBlock, 'aboutPosts', newAbout);

    if (enDesc) {
      const newDesc = await translatePlain(enDesc, cache);
      updatedBlock = replaceSingleQuoted(updatedBlock, 'description', newDesc);
    }

    if (enTitle && arTitle && hasLatinLetters(arTitle)) {
      const newTitle = await translatePlain(enTitle, cache);
      updatedBlock = replaceSingleQuoted(updatedBlock, 'title', newTitle);
    }

    edits.push({ start: b.start, end: b.end, replacement: updatedBlock });
    translatedCount++;
  }

  if (edits.length === 0) return { changed: false, translatedCount: 0 };

  edits.sort((a, b) => b.start - a.start);
  let updated = original;
  for (const e of edits) {
    updated = updated.slice(0, e.start) + e.replacement + updated.slice(e.end);
  }

  if (!DRY_RUN) fs.writeFileSync(fullPath, updated);
  return { changed: true, translatedCount };
}

async function main() {
  const cache = loadCache();

  const candidates = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.ts'))
    .sort()
    .map((f) => path.join(ARTICLES_DIR, f));

  const files = ONLY_FILE
    ? [path.isAbsolute(ONLY_FILE) ? ONLY_FILE : path.join(ROOT, ONLY_FILE)]
    : candidates;

  let changedFiles = 0;
  let translatedPosts = 0;

  for (const f of files) {
    const rel = path.relative(ROOT, f);
    process.stdout.write(`[translate] ${rel} ... `);
    const res = await translateFile(f, cache);
    if (res.changed) {
      changedFiles++;
      translatedPosts += res.translatedCount;
      console.log(`updated (${res.translatedCount} posts)`);
    } else {
      console.log('no-op');
    }
  }

  saveCache(cache);

  console.log('');
  console.log(`Done. Changed files: ${changedFiles}. Posts translated/updated: ${translatedPosts}.`);
  if (DRY_RUN) console.log('Dry run enabled: no files were written.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
