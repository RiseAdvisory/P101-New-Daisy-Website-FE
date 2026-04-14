#!/usr/bin/env node
/**
 * I18n coverage audit (best-effort, repo-specific heuristics).
 *
 * Goal: prevent "we thought AR was complete" failures by enumerating known
 * content datasets and checking whether Arabic exists AND is actually wired.
 *
 * Usage:
 *   node scripts/i18n-audit.mjs
 *   node scripts/i18n-audit.mjs --ci   (exit non-zero when gaps found)
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function listFiles(dir, { exts = ['.ts', '.tsx'] } = {}) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listFiles(p, { exts }));
    else if (exts.includes(path.extname(ent.name))) out.push(p);
  }
  return out;
}

function hasArabicVariantObject(text) {
  return /\bar\s*:\s*[{[]/.test(text);
}

function extractTopLevelSlugsByUserType(text) {
  // Heuristic: matches the FeatureDeepDive object header shape.
  // Avoids counting nested `slug:` fields in integration points.
  const out = [];
  const re =
    /{\s*\n\s*slug:\s*'([^']+)'\s*,\s*\n\s*categoryName:\s*'[^']+'\s*,\s*\n\s*userType:\s*'([^']+)'/g;
  for (const m of text.matchAll(re)) out.push({ slug: m[1], userType: m[2] });
  return out;
}

function extractPillarSlugs(text) {
  const m = text.match(/\bslug:\s*'([^']+)'/);
  return m ? [m[1]] : [];
}

function mdEscape(s) {
  return s.replaceAll('|', '\\|');
}

function rel(p) {
  return path.relative(ROOT, p);
}

const gaps = [];

// ---------------------------------------------------------------------------
// Pillars: EN files per page, AR bundle in src/lib/constants/pillars/pillars.ar.ts
// ---------------------------------------------------------------------------
{
  const dir = path.join(ROOT, 'src/lib/constants/pillars');
  if (exists(dir)) {
    const enFiles = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.ts') && !['index.ts', 'pillars.ar.ts'].includes(f))
      .map((f) => path.join(dir, f));

    const expected = new Set();
    for (const f of enFiles) {
      const txt = read(f);
      for (const slug of extractPillarSlugs(txt)) expected.add(slug);
    }

    const arFile = path.join(dir, 'pillars.ar.ts');
    if (!exists(arFile)) {
      gaps.push({
        area: 'pillars',
        kind: 'missing_ar',
        target: rel(arFile),
        note: 'Missing Arabic pillar bundle (expected src/lib/constants/pillars/pillars.ar.ts).',
      });
    } else {
      const arTxt = read(arFile);
      const found = new Set([...arTxt.matchAll(/\bslug:\s*'([^']+)'/g)].map((m) => m[1]));
      for (const slug of expected) {
        if (!found.has(slug)) {
          gaps.push({
            area: 'pillars',
            kind: 'missing_ar',
            target: rel(arFile),
            note: `Arabic pillar bundle missing slug: ${slug}`,
          });
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Feature deep-dives: EN in featureDeepDiveData.ts (+ professional entries),
// AR in featureDeepDiveData.ar.ts, wired via getFeatureDeepDive(..., locale).
// ---------------------------------------------------------------------------
{
  const enFiles = [
    'src/lib/constants/features/featureDeepDiveData.ts',
    'src/lib/constants/features/professionalDeepDiveEntries1.ts',
    'src/lib/constants/features/professionalDeepDiveEntries2.ts',
  ].map((p) => path.join(ROOT, p));

  const expected = new Set();
  for (const f of enFiles) {
    if (!exists(f)) continue;
    const txt = read(f);
    for (const it of extractTopLevelSlugsByUserType(txt)) expected.add(`${it.userType}:${it.slug}`);
  }

  const arFile = path.join(ROOT, 'src/lib/constants/features/featureDeepDiveData.ar.ts');
  if (!exists(arFile)) {
    gaps.push({
      area: 'feature_deep_dive',
      kind: 'missing_ar',
      target: rel(arFile),
      note: 'Missing Arabic deep-dive bundle (expected src/lib/constants/features/featureDeepDiveData.ar.ts).',
    });
  } else {
    const arTxt = read(arFile);
    const found = new Set(
      extractTopLevelSlugsByUserType(arTxt).map((it) => `${it.userType}:${it.slug}`),
    );
    for (const key of expected) {
      if (!found.has(key)) {
        gaps.push({
          area: 'feature_deep_dive',
          kind: 'missing_ar',
          target: rel(arFile),
          note: `Arabic deep-dive bundle missing entry: ${key}`,
        });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Tutorial cards: ensure Arabic locale uses Arabic blog posts.
// ---------------------------------------------------------------------------
{
  const f = path.join(ROOT, 'src/lib/constants/tutorials/getTutorialArticles.ts');
  if (exists(f)) {
    const txt = read(f);
    if (!/function getTutorialArticles\([^)]*locale[^)]*\)/.test(txt)) {
      gaps.push({
        area: 'tutorials',
        kind: 'wiring',
        target: rel(f),
        note: 'getTutorialArticles() does not accept a locale; /ar tutorials likely select English blog posts by slug.',
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Comparison pages: AR file exists but largely merges EN base (partial).
// ---------------------------------------------------------------------------
{
  const f = path.join(ROOT, 'src/lib/constants/competitors/comparisonPages.ar.ts');
  if (exists(f)) {
    const txt = read(f);
    const usesEnglishBaseMerge =
      /import\s*\{[\s\S]*daisyVsPages as enDaisyVs[\s\S]*\}\s*from '.\/comparisonPages'/.test(txt) &&
      /return\s*\{\s*\.\.\.base,\s*\.\.\.overrides\s*\}/.test(txt);
    const bulkMaps =
      /enAlternative\.map\(/.test(txt) ||
      /enBestAlternatives\.map\(/.test(txt) ||
      /enCompetitorVs\.map\(/.test(txt) ||
      /enDaisyVs\.filter\(/.test(txt);

    if (usesEnglishBaseMerge && bulkMaps) {
      gaps.push({
        area: 'comparison_pages',
        kind: 'partial_ar',
        target: rel(f),
        note: 'Arabic comparison pages appear partially translated (many pages reuse English base with minimal overrides).',
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Route-level red flags: deep-dive feature pages ignore locale in data layer.
// ---------------------------------------------------------------------------
{
  const files = [
    'src/app/[locale]/features/business/[category]/page.tsx',
    'src/app/[locale]/features/professional/[category]/page.tsx',
  ].map((p) => path.join(ROOT, p));

  for (const f of files) {
    if (!exists(f)) continue;
    const txt = read(f);
    if (/getFeatureDeepDive\([^,]+,\s*params\.category\)/.test(txt) && !/params\.locale/.test(txt)) {
      gaps.push({
        area: 'routes',
        kind: 'wiring',
        target: rel(f),
        note: 'Route reads deep-dive data without locale awareness; Arabic route will render English deep-dive content.',
      });
    }
  }
}

function renderMarkdownReport(items) {
  const lines = [];
  lines.push(`# I18n Audit Report`);
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  if (items.length === 0) {
    lines.push('No gaps detected by heuristics.');
    lines.push('');
    return lines.join('\n');
  }

  lines.push(`Gaps found: **${items.length}**`);
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

const report = renderMarkdownReport(gaps);
process.stdout.write(report);

// Also write a copy under .claude/reports when available.
const reportsDir = path.join(ROOT, '.claude/reports');
if (exists(reportsDir)) {
  const stamp = new Date().toISOString().slice(0, 10);
  const outFile = path.join(reportsDir, `i18n-audit-${stamp}.md`);
  fs.writeFileSync(outFile, report, 'utf8');
}

if (process.argv.includes('--ci') && gaps.length > 0) {
  process.exitCode = 1;
}
