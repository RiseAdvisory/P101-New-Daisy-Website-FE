#!/usr/bin/env node
/**
 * Normalize common English proper nouns inside Arabic blog `aboutPosts` HTML.
 *
 * This is not a translator. It's a deterministic cleanup pass that removes
 * embarrassing English leaks like "Harvard Business Review" or "WhatsApp Business API"
 * and standardizes brand naming (ديزي).
 *
 * Usage:
 *   node scripts/fix-ar-blog-aboutposts.mjs
 *   node scripts/fix-ar-blog-aboutposts.mjs --dry-run
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, 'src/lib/constants/blog/articles');
const DRY_RUN = process.argv.includes('--dry-run');

function listFiles(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listFiles(p));
    else if (ent.isFile() && ent.name.endsWith('.ts')) out.push(p);
  }
  return out;
}

function extractLocalBlogPostBlockMatches(tsText) {
  const out = [];
  const re = /const\s+[A-Za-z0-9_]+\s*:\s*LocalBlogPost\s*=\s*\{[\s\S]*?\n\};/g;
  for (const m of tsText.matchAll(re)) {
    out.push({ index: m.index ?? 0, text: m[0], length: m[0].length });
  }
  return out;
}

function normalizeArabicHtml(html) {
  let s = html;

  // Multi-word phrases first.
  const pairs = [
    ['WhatsApp Business API', 'واجهة برمجة تطبيقات واتساب للأعمال'],
    ['WhatsApp Business', 'واتساب للأعمال'],
    ['Instagram DMs', 'رسائل إنستغرام'],
    ['Google Business Profile', 'ملف النشاط التجاري على جوجل'],
    ['Google Business', 'النشاط التجاري على جوجل'],
    ['Harvard Business Review', 'هارفارد بزنس ريفيو'],
    ['Net Promoter Score', 'مؤشر صافي الترويج'],
    ["The Daisy's", 'ديزي'],
    ["Daisy's", 'ديزي'],
    ['The Daisy', 'ديزي'],
  ];
  for (const [from, to] of pairs) {
    s = s.split(from).join(to);
  }

  // Single tokens.
  const tokenPairs = [
    ['Instagram', 'إنستغرام'],
    ['WhatsApp', 'واتساب'],
    ['Google', 'جوجل'],
    ['Marketplace', 'السوق'],
    ['Visa', 'فيزا'],
    ['Daisy', 'ديزي'],
  ];
  for (const [from, to] of tokenPairs) {
    // Whole-word-ish replacement; keep it simple to avoid complex regex edge cases.
    s = s.replaceAll(new RegExp(`\\b${from}\\b`, 'g'), to);
  }

  // A couple of common English fragments that sneak into AR anchor text.
  s = s.replaceAll(/\bemail\b/gi, 'البريد الإلكتروني');

  return s;
}

function replaceArabicAboutPostsInBlock(blockText) {
  // Only touch AR blocks.
  if (!/locale:\s*'ar'/.test(blockText)) return blockText;

  const m = blockText.match(/aboutPosts:\s*`([\s\S]*?)`\s*,/);
  if (!m) return blockText;

  const original = m[1];
  const normalized = normalizeArabicHtml(original);
  if (normalized === original) return blockText;

  return blockText.replace(original, normalized);
}

function processFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const matches = extractLocalBlogPostBlockMatches(src);
  if (matches.length === 0) return { changed: false };

  let out = '';
  let last = 0;
  let changed = false;

  for (const m of matches) {
    const before = src.slice(last, m.index);
    const updatedBlock = replaceArabicAboutPostsInBlock(m.text);
    if (updatedBlock !== m.text) changed = true;
    out += before + updatedBlock;
    last = m.index + m.length;
  }
  out += src.slice(last);

  if (changed && !DRY_RUN) fs.writeFileSync(file, out, 'utf8');
  return { changed };
}

function main() {
  const files = listFiles(ARTICLES_DIR);
  const touched = [];
  for (const f of files) {
    const res = processFile(f);
    if (res.changed) touched.push(path.relative(ROOT, f));
  }

  if (DRY_RUN) {
    process.stdout.write(
      touched.length
        ? `Would update ${touched.length} file(s):\n- ${touched.join('\n- ')}\n`
        : 'No changes needed.\n',
    );
  } else {
    process.stdout.write(
      touched.length
        ? `Updated ${touched.length} file(s):\n- ${touched.join('\n- ')}\n`
        : 'No changes needed.\n',
    );
  }
}

main();
