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
import { ComparePageClient } from '@/app/[locale]/(routes)/compare/[slug]/ComparePageClient';
import { AlternativePageClient } from '@/app/[locale]/(routes)/alternative/[slug]/AlternativePageClient';
import {
  getAllCompareSlugs,
  getAllAlternativeSlugs,
} from '@/lib/constants/competitors/comparisonPages';
import { competitors } from '@/lib/constants/competitors/competitorData';

/**
 * Competitors' own plan names (Premier, Booksy Biz, Ultimate...) are product
 * names and stay in Latin script. Allowed only as a whole text node, so the
 * same words inside an English sentence are still caught.
 */
const PLAN_NAMES = new Set(
  Object.values(competitors).flatMap((c) => c.pricing.tiers.map((t) => t.name)),
);

const ALLOWED_LATIN = new Set(
  `daisy fresha booksy vagaro glossgenius mindbody square appointments boulevard mangomint zenoti phorest
   acuity scheduling setmore timely simplybook me ai concierge whatsapp instagram facebook aed sar qar omr bhd kwd
   usd pos crm rtl vat trn independent team smart website insights apple pay google play app sms api meta tech
   provider white label white-label tiktok linkedin youtube ios android faq gcc uae ksa seo vs pro plus premium duo
   vera capterra g2 tabby tamara mada stc knet benefit sumup stripe dingg glamera planity repeatmd zylu belliata
   treatwell pabau squire meevo bookb sparkalz salonist messenger studio connect elite business growth basic
   starter professional squarespace beauty bank`
    .split(/\s+/)
    .filter(Boolean),
);

/** Text nodes whose letters are mostly English words that are not names. */
export function englishTextNodes(root: HTMLElement): string[] {
  const found = new Set<string>();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest('script,style,noscript,svg')) continue;
    const text = (node.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text || PLAN_NAMES.has(text)) continue;
    const words = text.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
    const english = words.filter((w) => !ALLOWED_LATIN.has(w.toLowerCase()));
    const arabicChars = (text.match(/[؀-ۿ]/g) || []).length;
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
