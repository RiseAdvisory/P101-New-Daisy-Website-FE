# Arabic Translation — Continuation Plan

**Date:** 2026-04-13
**Status:** Phases 1-2 complete, Phases 2b-4 remaining

---

## What's Done

### Phase 1: Core SEO Content (COMPLETE)

| File | Status |
|------|--------|
| `src/lib/constants/glossary/glossaryData.ts` | 8 terms translated, I18nContent wrapped, reviewed |
| `src/lib/constants/guides/guideData.ts` | 5 guides translated, I18nContent wrapped, reviewed |
| `src/lib/constants/insights/insightData.ts` | 7 stat categories translated, I18nContent wrapped, reviewed |

### Phase 2: Competitors, Solutions, Blog Articles (MOSTLY COMPLETE)

**Competitors — COMPLETE:**

| File | Status |
|------|--------|
| `src/lib/constants/competitors/competitorData.ts` | Daisy data translated |
| `src/lib/constants/competitors/aiTools.ts` | 3 AI tools translated |
| `src/lib/constants/competitors/tier1Data.ts` + `tier1Data.ar.ts` | 5 competitors translated |
| `src/lib/constants/competitors/tier2Data.ts` + `tier2Data.ar.ts` | 7 competitors translated |
| `src/lib/constants/competitors/tier3Data.ts` + `tier3Data.ar.ts` | 15 competitors translated |
| `src/lib/constants/competitors/comparisonPages.ts` + `comparisonPages.ar.ts` | 3 Daisy-vs pages fully translated, rest are stubs |
| `src/lib/constants/competitors/index.ts` | Exports updated |

**Solutions — COMPLETE:**

| File | Status |
|------|--------|
| `src/lib/constants/solutions/solutionData.ts` | 12 solutions translated, I18nContent wrapped |
| `src/lib/constants/solutions/index.ts` | Exports updated |

**Blog Articles — 19 of 21 files fully done:**

| File | EN | AR | Body Status |
|------|----|----|-------------|
| ai-intelligence.ts | 5 | 5 | FULL |
| analytics-reports.ts | 5 | 5 | FULL |
| beauty-business-growth.ts | 7 | 7 | FULL |
| booking-management.ts | 6 | 6 | FULL |
| bottom-of-funnel.ts | 3 | 3 | FULL |
| communication-tools.ts | 5 | 5 | FULL |
| daisy-advantage.ts | 8 | 8 | FULL |
| freelance-beauty.ts | 9 | 9 | FULL |
| industry-trends.ts | 6 | 6 | FULL |
| marketing-promotions.ts | 5 | 5 | FULL |
| multi-channel.ts | 3 | 3 | FULL |
| payment-processing.ts | 4 | 4 | FULL |
| salon-analytics.ts | 4 | 4 | FULL |
| salon-management.ts | 8 | 8 | FULL |
| salon-marketing.ts | 8 | 8 | FULL |
| salon-payments.ts | 6 | 6 | FULL |
| staff-management.ts | 6 | 6 | FULL |
| team-management.ts | 4 | 4 | FULL |
| thought-leadership.ts | 4 | 4 | FULL |
| **business-growth.ts** | **5** | **5** | **4 articles have English bodies** |
| **client-retention.ts** | **7** | **7** | **6 articles have English bodies** |

---

## What Remains

### Phase 2b: Finish Remaining Blog Article Bodies (HIGH PRIORITY)

**10 articles with English `aboutPosts` bodies in their Arabic versions:**

**`src/lib/constants/blog/articles/business-growth.ts`** — 4 articles:
- `scaling-beauty-business-multiple-locations` (From One Location to Many)
- `multi-channel-acquisition-beauty-business-growth` (How Multi-Channel Acquisition Drives Growth)
- `daisy-marketing-suite-attracts-new-clients` (How Daisy's Marketing Suite Attracts New Clients)
- `building-personal-brand-beauty-professional-guide` (Building Your Personal Brand)

Note: The 5th article (`salon-revenue-growth-strategies-2026`) was translated in batch C.

**`src/lib/constants/blog/articles/client-retention.ts`** — 6 articles:
- `salon-rebooking-strategies` (Salon Rebooking Strategies)
- `salon-client-experience-guide` (Salon Client Experience: First Visit to Loyal Regular)
- `salon-client-personalization-tips` (Salon Personalization: Remembering Preferences)
- `salon-win-back-campaigns` (Win-Back Campaigns)
- `salon-customer-feedback-guide` (Customer Feedback: Collection & Action Guide)
- `independent-beauty-pro-client-loyalty` (Building Client Loyalty as Independent)

Note: The 1st article (`salon-client-retention-rate-guide`) was translated in batch C.

**Instructions:** For each article, read the English `aboutPosts` HTML body and write a complete Arabic translation. Keep all HTML tags intact, update `/en/` links to `/ar/`, use professional Arabic (MSA).

### Phase 2c: Complete Competitor Comparison Page Translations (MEDIUM PRIORITY)

**`src/lib/constants/competitors/comparisonPages.ar.ts`:**

Only 3 Daisy-vs pages (fresha, booksy, vagaro) are fully translated. The rest need full translations:

- Remaining Daisy-vs pages (mindbody, zenoti, glamera, dingg, glossgenius, etc.) — currently only `metaTitle` and `heroTitle` are translated via regex substitution. Need full translation of: `metaDescription`, `tldr`, `verdict`, `whoShouldChooseDaisy`, `whoShouldChooseCompetitor`, `featureCommentary`
- All alternative pages — currently only title substitution. Need full translation of: `metaDescription`, `heroSubtitle`, `painPoints`, `switchingReasons`, `intro`, `bestFor`, `daisyEdge`
- All best-alternatives pages — same as alternative pages
- All competitor-vs pages — currently NO translation at all (English passed through). Need full translation

### Phase 3: Features, Pillars, and Tutorials

**Feature Deep-Dive Data (0% Arabic):**

| File | Lines | Content |
|------|-------|---------|
| `src/lib/constants/features/featureDeepDiveData.ts` | ~164K | Feature definitions for all categories |
| `src/lib/constants/features/professionalDeepDiveEntries1.ts` | ~85K | Professional feature entries part 1 |
| `src/lib/constants/features/professionalDeepDiveEntries2.ts` | ~84K | Professional feature entries part 2 |

These are the largest files in the project. Approach: wrap in I18nContent, add Arabic translations for all user-facing text (titles, descriptions, features, FAQs).

**Pillar Pages (8 missing Arabic, 4 have Arabic):**

Files needing Arabic:
- `src/lib/constants/pillars/beauty-booking-system.ts`
- `src/lib/constants/pillars/beauty-business-growth-guide.ts`
- `src/lib/constants/pillars/beauty-industry-trends.ts`
- `src/lib/constants/pillars/freelance-beauty-professional-guide.ts`
- `src/lib/constants/pillars/salon-client-retention.ts`
- `src/lib/constants/pillars/salon-management-software.ts`
- `src/lib/constants/pillars/salon-marketing-strategies.ts`

Files already with Arabic (verify alignment):
- `src/lib/constants/pillars/ai-salon-software.ts`
- `src/lib/constants/pillars/salon-analytics-reporting.ts`
- `src/lib/constants/pillars/salon-payment-solutions.ts`
- `src/lib/constants/pillars/salon-staff-management.ts`

**Tutorials (3 missing Arabic):**

| File | Status |
|------|--------|
| `src/lib/constants/tutorials/getTutorialArticles.ts` | Needs Arabic |
| `src/lib/constants/tutorials/tutorialsListTop.ts` | Needs Arabic |
| `src/lib/constants/tutorials/tutorialsPages.ts` | Needs Arabic |
| `src/lib/constants/tutorials/tutorialCatalog.ts` | Has Arabic (verify) |

### Phase 4: Audit & Alignment + Page Component Wiring

**4a: Wire up page components to use locale-aware data**

ALL translated data files now have I18nContent wrappers, but the page components still import the English-only backward-compatible exports. Each page needs to be updated to use `t(data, locale)` instead.

Pages to update:
- `src/app/[locale]/(routes)/glossary/page.tsx` — use `t(glossaryData, locale)` instead of `glossaryEntries`
- `src/app/[locale]/(routes)/glossary/[slug]/page.tsx` — same
- `src/app/[locale]/(routes)/guides/page.tsx` — use `t(guideData, locale)`
- `src/app/[locale]/(routes)/guides/[slug]/page.tsx` — same
- `src/app/[locale]/(routes)/insights/page.tsx` — use `t(insightsData, locale)`
- `src/app/[locale]/(routes)/insights/InsightsPageClient.tsx` — accept locale-resolved data as prop
- Solution pages — use `getSolution(slug, locale)` instead of `getSolution(slug)`
- Competitor/comparison pages — use locale-aware getter functions
- Blog listing/rendering — filter articles by `locale` matching the current page locale
- Pillar pages — use locale-resolved data
- Tutorial pages — use locale-resolved data

**4b: Verify existing Arabic translations match current English**

Files that already had Arabic before this project — verify no drift:
- `src/lib/constants/pages/businessPage.ts`
- `src/lib/constants/pages/professionalPage.ts`
- `src/lib/constants/pages/customerPage.ts`
- `src/lib/constants/pages/aboutPageData.ts`
- `src/lib/constants/pages/getTheAppPageData.ts`
- `src/lib/constants/pages/startFreeTrialData.ts`
- `src/lib/constants/shared/` (all shared component data)
- `src/lib/constants/pricing/` (all pricing data)
- `src/lib/constants/features/featuresBusinessData.ts`
- `src/lib/constants/features/featuresCustomerList.ts`
- `src/lib/constants/features/featuresProfessionalList.ts`
- `src/lib/constants/pillars/` (4 files with existing Arabic)

**4c: Standardize Arabic brand terminology across ALL files**

Ensure consistent usage:
- "ديزي" for Daisy (not "ذا ديزي" or "The Daisy")
- "موظف الاستقبال الذكي" for AI receptionist
- "الحجز" for booking
- "كاشباك" for cashback
- "عدم الحضور" for no-show

**4d: Arabic metadata for SEO**

Each page that now has Arabic content also needs:
- Arabic `<title>` and `<meta description>`
- Arabic Open Graph tags
- Arabic Twitter card metadata
- Hreflang alternates (likely already in place via `localeAlternates()`)

---

## Execution Notes

- English is always the source of truth
- Blog articles use `locale: 'en'` / `locale: 'ar'` fields (not I18nContent wrapper)
- All other content uses `I18nContent<T>` wrapper with `en`/`ar` keys
- Backward-compatible exports (e.g., `glossaryEntries = glossaryData.en`) must be preserved for existing code
- Page component wiring (Phase 4a) is required for Arabic translations to actually render on `/ar/` routes
