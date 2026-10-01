/**
 * Arabic pages must render Arabic.
 *
 * The site localises in two places: content lives in parallel *.ar.ts data
 * files, and interface text lives in each component's `uiStrings` table. A
 * translation pass over the data files never reaches text typed straight into
 * a component, and nothing checked for it - so components written English-only
 * shipped English onto /ar/ pages silently, and it was found by reading pages.
 * On 2026-10-01 a scan of the live site found English on 123 of 276 Arabic
 * pages, 76 strings on /ar/compare/daisy-vs-fresha alone.
 *
 * These tests render the real component tree (no child mocks) with locale
 * 'ar' and fail on any text node that is mostly English. Brand, product and
 * currency names that legitimately stay Latin are allowed.
 */
import { render } from '@testing-library/react';
import latinAllowlist from '@/lib/i18n/latinAllowlist.json';
import { ComparePageClient } from '@/app/[locale]/(routes)/compare/[slug]/ComparePageClient';
import { AlternativePageClient } from '@/app/[locale]/(routes)/alternative/[slug]/AlternativePageClient';
import {
  getAllCompareSlugs,
  getAllAlternativeSlugs,
} from '@/lib/constants/competitors/comparisonPages';
import { competitors } from '@/lib/constants/competitors/competitorData';
import { GuidesPageClient } from '@/app/[locale]/(routes)/guides/[slug]/GuidesPageClient';
import { SolutionsPageClient } from '@/app/[locale]/(routes)/solutions/[slug]/SolutionsPageClient';
import { guideData } from '@/lib/constants/guides/guideData';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';

/**
 * Competitors' own plan names (Premier, Booksy Biz, Ultimate...) are product
 * names and stay in Latin script. Allowed only as a whole text node, so the
 * same words inside an English sentence are still caught.
 */
const PLAN_NAMES = new Set(
  Object.values(competitors).flatMap((c) => c.pricing.tiers.map((t) => t.name)),
);

const ALLOWED_LATIN = new Set<string>(latinAllowlist.words);
const WHOLE_NODES = new Set<string>(latinAllowlist.wholeNodes);
const PHRASES: string[] = latinAllowlist.phrases;

/** Text nodes whose letters are mostly English words that are not names. */
export function englishTextNodes(root: HTMLElement): string[] {
  const found = new Set<string>();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest('script,style,noscript,svg')) continue;
    const text = (node.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text || PLAN_NAMES.has(text) || WHOLE_NODES.has(text)) continue;
    // Same as scripts/i18n-render-audit.mjs: proper names inside Arabic text and
    // multipliers ("3x") are not English copy.
    const checked = PHRASES.reduce((t, ph) => t.split(ph).join(' '), text).replace(/\b\d+(\.\d+)?x\b/g, ' ');
    const words = checked.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
    const english = words.filter((w) => !ALLOWED_LATIN.has(w.toLowerCase()));
    const arabicChars = (checked.match(/[؀-ۿ]/g) || []).length;
    const latinChars = english.join('').length;
    // One English word is enough: single labels like "Operations" or
    // "Category" slipped past a two-word threshold.
    if (english.length >= 1 && latinChars > arabicChars) found.add(text.slice(0, 120));
  }
  return Array.from(found);
}

describe('Arabic compare pages render Arabic', () => {
  it.each(getAllCompareSlugs())('/ar/compare/%s', (slug) => {
    const { container } = render(<ComparePageClient slug={slug} locale="ar" />);
    expect(englishTextNodes(container)).toEqual([]);
  });
});

describe('Arabic alternative pages render Arabic', () => {
  it.each(getAllAlternativeSlugs())('/ar/alternative/%s', (slug) => {
    const { container } = render(<AlternativePageClient slug={slug} locale="ar" />);
    expect(englishTextNodes(container)).toEqual([]);
  });
});

describe('Arabic guide pages render Arabic', () => {
  it.each(guideData.ar.map((g) => g.slug))('/ar/guides/%s', (slug) => {
    const guide = guideData.ar.find((g) => g.slug === slug)!;
    const { container } = render(<GuidesPageClient guide={guide} locale="ar" />);
    expect(englishTextNodes(container)).toEqual([]);
  });
});

describe('Arabic solution pages render Arabic', () => {
  it.each(getAllSolutionSlugs())('/ar/solutions/%s', (slug) => {
    const { container } = render(<SolutionsPageClient slug={slug} locale="ar" />);
    expect(englishTextNodes(container)).toEqual([]);
  });
});
