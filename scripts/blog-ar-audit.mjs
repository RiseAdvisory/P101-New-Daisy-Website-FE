#!/usr/bin/env node
/**
 * Blog parity + Arabic quality audit (heuristic).
 *
 * Why: we need a deterministic way to catch "AR exists but is still EN" and
 * broken internal links like `/resources/blog/businesses/...` (should be
 * `/resources/blog/business/...`).
 *
 * Usage:
 *   node scripts/blog-ar-audit.mjs
 *   node scripts/blog-ar-audit.mjs --ci   (exit non-zero when issues found)
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, 'src/lib/constants/blog/articles');

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function rel(p) {
  return path.relative(ROOT, p);
}

function listFiles(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listFiles(p));
    else if (ent.isFile() && ent.name.endsWith('.ts')) out.push(p);
  }
  return out;
}

function mdEscape(s) {
  return String(s ?? '').replaceAll('|', '\\|');
}

function extractLocalBlogPostBlocks(tsText) {
  // Best-effort block extraction: each post is declared as
  // `const x: LocalBlogPost = { ... };`
  // Non-greedy to stop at the first closing brace+semicolon.
  const blocks = [];
  const re = /const\s+[A-Za-z0-9_]+\s*:\s*LocalBlogPost\s*=\s*\{[\s\S]*?\n\};/g;
  for (const m of tsText.matchAll(re)) blocks.push(m[0]);
  return blocks;
}

function extractField(block, re) {
  const m = block.match(re);
  return m ? m[1] : null;
}

function getAttributesBlock(block) {
  // Extract inside `attributes: { ... }` to reduce false matches.
  const m = block.match(/attributes:\s*\{([\s\S]*?)\n\s*\}\s*,?\s*\n\s*\};?$/);
  return m ? m[1] : null;
}

function countLatinLetters(s) {
  const m = String(s ?? '').match(/[A-Za-z]/g);
  return m ? m.length : 0;
}

function extractAboutPosts(attributesText) {
  // Most posts use a template string: aboutPosts: `...`
  const m = attributesText.match(/aboutPosts:\s*`([\s\S]*?)`\s*,/);
  return m ? m[1] : null;
}

function hasBadUserTypeLinks(s) {
  return /\/resources\/blog\/businesses\//.test(s) || /\/resources\/blog\/professionals\//.test(s);
}

function hasEnLinksInsideAr(s) {
  return /href="\/en\//.test(s) || /href='\/en\//.test(s);
}

function likelyEnglishLeakInArabic(aboutPosts) {
  // Heuristic: Arabic bodies should not contain lots of latin *prose*.
  // NOTE: Arabic posts legitimately contain latin in URLs/slugs. Strip those.
  const raw = String(aboutPosts ?? '');
  if (!raw) return false;

  // Remove HTML tags and attribute values that often contain URLs/slugs.
  let txt = raw.replaceAll(/<[^>]*>/g, ' ');
  txt = txt.replaceAll(/https?:\/\/\S+/g, ' ');
  txt = txt.replaceAll(/\/[A-Za-z0-9][A-Za-z0-9/_-]*/g, ' '); // path-ish tokens
  txt = txt.replaceAll(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, ' ');
  txt = txt.replaceAll(/\s+/g, ' ').trim();

  // Strong signal: a full english sentence fragment.
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(txt)) return true;

  const latin = countLatinLetters(txt);
  const len = txt.length;
  if (len === 0) return false;
  return latin / len > 0.02; // allow small amount for acronyms/brands
}

const issues = [];

if (!exists(ARTICLES_DIR)) {
  issues.push({
    area: 'setup',
    kind: 'missing_dir',
    target: rel(ARTICLES_DIR),
    note: 'Blog articles directory not found.',
  });
} else {
  const files = listFiles(ARTICLES_DIR);

  // slug -> { en: {file,title}, ar: {file,title}, ... }
  const bySlug = new Map();

  for (const file of files) {
    const txt = fs.readFileSync(file, 'utf8');
    const blocks = extractLocalBlogPostBlocks(txt);
    if (blocks.length === 0) continue;

    for (const block of blocks) {
      const attrs = getAttributesBlock(block);
      if (!attrs) continue;

      const slug = extractField(attrs, /\bslug:\s*'([^']+)'/);
      const locale = extractField(attrs, /\blocale:\s*'([^']+)'/);
      const title = extractField(attrs, /\btitle:\s*'([^']+)'/);
      if (!slug || !locale) continue;

      const aboutPosts = extractAboutPosts(attrs) ?? '';

      if (!bySlug.has(slug)) bySlug.set(slug, new Map());
      const perLocale = bySlug.get(slug);

      if (perLocale.has(locale)) {
        issues.push({
          area: 'blog',
          kind: 'duplicate',
          target: rel(file),
          note: `Duplicate slug+locale detected: ${slug} (${locale}).`,
        });
      } else {
        perLocale.set(locale, { file, title, aboutPosts });
      }

      // Per-post checks.
      if (locale === 'ar') {
        if (hasBadUserTypeLinks(aboutPosts)) {
          issues.push({
            area: 'blog',
            kind: 'bad_links',
            target: rel(file),
            note: `Arabic aboutPosts contains /resources/blog/businesses or /professionals: ${slug}.`,
          });
        }
        if (hasEnLinksInsideAr(aboutPosts)) {
          issues.push({
            area: 'blog',
            kind: 'en_links_in_ar',
            target: rel(file),
            note: `Arabic aboutPosts contains href to /en/...: ${slug}.`,
          });
        }
        if (likelyEnglishLeakInArabic(aboutPosts)) {
          issues.push({
            area: 'blog',
            kind: 'english_leak',
            target: rel(file),
            note: `Arabic aboutPosts likely contains too much English text: ${slug}.`,
          });
        }
      }
    }
  }

  // Parity check: for each EN slug, require AR sibling.
  for (const [slug, perLocale] of bySlug.entries()) {
    if (perLocale.has('en') && !perLocale.has('ar')) {
      const en = perLocale.get('en');
      issues.push({
        area: 'blog',
        kind: 'missing_ar',
        target: rel(en.file),
        note: `Missing Arabic counterpart for slug: ${slug}.`,
      });
    }
  }
}

function renderMarkdownReport(items) {
  const lines = [];
  lines.push('# Blog Arabic Audit Report');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  if (items.length === 0) {
    lines.push('No issues detected by heuristics.');
    lines.push('');
    return lines.join('\n');
  }

  lines.push(`Issues found: **${items.length}**`);
  lines.push('');
  lines.push('| Area | Kind | Target | Note |');
  lines.push('| --- | --- | --- | --- |');
  for (const it of items) {
    lines.push(
      `| ${mdEscape(it.area)} | ${mdEscape(it.kind)} | ${mdEscape(it.target)} | ${mdEscape(it.note)} |`,
    );
  }
  lines.push('');
  return lines.join('\n');
}

process.stdout.write(renderMarkdownReport(issues));

if (process.argv.includes('--ci') && issues.length > 0) {
  process.exitCode = 1;
}
