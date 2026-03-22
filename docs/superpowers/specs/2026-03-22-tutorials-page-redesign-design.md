# Tutorials & Guides Page Redesign

**Date:** 2026-03-22
**Status:** Draft
**Owner:** Solo Founder + AI Assistance

---

## Purpose

Replace the current `/resources/tutorials` page (thin placeholder content in tabbed HTML format) with a curated index page that surfaces existing how-to and guide blog articles alongside the 5 existing standalone guides. The page serves as an industry how-to hub — not product tutorials — linking visitors to actionable content already published on the site.

## Goals

1. Surface existing how-to/guide content that is currently only discoverable through the blog
2. Create a dedicated "Tutorials & Guides" entry point under Resources
3. Maintain persona-switching via the header Business/Professional toggle
4. Visual consistency with blog listing via a new lightweight `TutorialCard` component
5. Zero new content creation — purely a curation/indexing layer

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Content source | Curated slug list | Full editorial control, no changes to existing blog data files |
| Card component | New `TutorialCard` component | `CardPosts` is a full-page layout component (hero band, translate-y overlap, onClick nav) that can't be embedded per-category. New card uses same Tailwind styling but is a simple `<Link>`-wrapped card — SEO-friendly, server-renderable |
| Page route | Replace `/resources/tutorials` | Same URL, updated content and architecture |
| Persona switching | Header toggle (Business/Professional) | Matches existing site-wide pattern |
| Customer fallback | Show business content | Customer persona is deprioritized site-wide; tutorials page falls back to business catalog when in customer mode |
| Content filtering | Only How-to and Guide types | Per user requirement, excludes Listicles/Comparisons |

---

## Data Layer

### New file: `src/lib/constants/tutorials/tutorialCatalog.ts`

Defines the curated catalog of articles to display, organized by category and persona.

```typescript
export interface TutorialCategory {
  slug: string;
  label: string;
  articleSlugs: string[];   // blog article slugs (from LocalBlogPost data)
  guideSlugs: string[];     // guide slugs (from guideData.ts)
}

export interface TutorialCatalog {
  business: TutorialCategory[];
  professional: TutorialCategory[];
}

export const tutorialCatalog: TutorialCatalog = { ... };
```

### Helper function: `src/lib/constants/tutorials/getTutorialArticles.ts`

Resolves slugs from the catalog into renderable objects by looking them up in the existing blog data arrays and guide data. Returns a unified shape that includes routing information.

```typescript
export interface TutorialArticle {
  title: string;
  slug: string;
  description: string;
  image?: string;
  author?: string;
  date?: string;
  readTime?: string;
  linkPath: string;        // full path e.g. '/resources/blog/businesses/slug' or '/guides/slug'
  source: 'blog' | 'guide'; // discriminator for routing
}

export function getTutorialArticles(
  persona: 'business' | 'professional'
): { category: TutorialCategory; articles: TutorialArticle[] }[]
```

**Slug resolution:** The helper searches ALL blog post arrays globally (both `businessBlogPosts` and `professionalBlogPosts`), not just the persona-specific one. Some professional-persona articles in the catalog are stored in business article arrays (e.g., articles from `business-growth.ts` that target professionals).

**linkPath construction:** `linkPath` is locale-agnostic (e.g., `/resources/blog/businesses/slug`). The `TutorialCard` component prepends `/${locale}` at render time using the `localePath()` utility. This avoids recomputing the catalog on locale change.

**Blog userType segment:** The catalog's persona determines the URL segment: `business` → `businesses`, `professional` → `professionals`. However, since some articles exist in the wrong persona array, the helper should determine the correct userType by checking which array contains the matched article.

**Blog articles** map directly from `LocalBlogPost` fields. **Guides** from `guideData.ts` map as follows:
- `title` ← `GuideData.title`
- `description` ← `GuideData.answer` (first 200 chars)
- `image` ← fallback placeholder image (`/images/blog/placeholder.webp`)
- `author` ← `'The Daisy Team'`
- `date` ← omitted (guides have no publish date)
- `readTime` ← `'5 min.'` (default)
- `linkPath` ← `/guides/${slug}`

### New component: `src/components/tutorials/TutorialCard.tsx`

A lightweight, server-renderable card component that wraps a `<Link>` (not `onClick`). Uses the same visual styling as blog cards (white card, rounded corners, image, title, description, metadata row) but is a standalone component suitable for embedding in category sections.

```typescript
interface TutorialCardProps {
  article: TutorialArticle;
  locale: string;
}
```

Approximately 40-50 lines. Uses `next/link` and `next/image`. No `'use client'` needed.

---

## Article Inventory

> **IMPLEMENTATION NOTE:** The slugs listed below are approximate titles derived from code comments. During implementation, every slug MUST be verified against the actual `slug:` field in the corresponding article data file in `src/lib/constants/blog/articles/`. The `getTutorialArticles` helper does exact string matching — any mismatch results in a missing card.

### Business How-to/Guide Articles (by category)

**Booking & Scheduling**
- `online-booking-for-salons-setup-guide` (How-to)
- `reduce-salon-no-shows` (Guide)
- `salon-waitlist-management` (How-to)
- `group-booking-packages-salon` (How-to)
- `mobile-booking-beauty-salon` (Guide)
- `recurring-appointment-scheduling-salon` (Guide)

**Salon Management & Software**
- `how-to-choose-salon-management-software` (How-to)
- `switching-salon-software-migration-guide` (Guide)
- `small-salon-software-options` (Guide)
- `multi-location-salon-software` (Guide)
- `salon-software-roi-calculator` (Guide)

**Staff & Team Management**
- `salon-staff-scheduling-best-practices` (How-to)
- `salon-commission-structures` (Guide)
- `hiring-salon-staff-interview-questions` (Guide)
- `salon-employee-retention` (Guide)
- `staff-scheduling-salon-owners-guide` (How-to)
- `commission-structures-keep-top-talent` (Guide)
- `managing-permissions-salon` (How-to)

**Marketing & Promotions**
- `complete-guide-salon-loyalty-programs` (Guide)
- `salon-referral-programs-that-work` (How-to)
- `email-marketing-salons-templates` (Guide)
- `daisy-cashback-drives-customer-loyalty` (How-to)
- `salon-marketing-ideas-2026` (Guide)
- `salon-social-media-marketing` (Guide)
- `salon-email-marketing-automation` (Guide)
- `salon-loyalty-program-retains-clients` (Guide)
- `salon-referral-program-ambassadors` (Guide)
- `google-my-business-salon-optimization` (Guide)
- `salon-seo-local-search` (Guide)

**Client Retention**
- `salon-client-retention-rate` (Guide)
- `salon-rebooking-strategies` (Guide)
- `salon-client-experience-first-visit` (Guide)
- `salon-personalization-client-preferences` (Guide)
- `win-back-campaigns-lost-salon-clients` (Guide)
- `customer-feedback-salons-collection` (Guide)

**Payments & POS**
- `salon-pos-systems-buyers-guide` (Guide)
- `salon-tipping-etiquette-policies` (Guide)
- `contactless-payments-salons-setup` (How-to)
- `salon-invoicing-professional-billing` (How-to)
- `salon-pos-systems-2026` (Guide)
- `tipping-best-practices-beauty-businesses` (Guide)

**Communication & Client Outreach**
- `automated-reminders-reduce-no-shows` (How-to)
- `client-communication-templates-beauty` (Guide)
- `sms-marketing-fill-salon-chairs` (How-to)
- `review-request-automation-5-star` (How-to)
- `managing-instagram-dms-beauty-business` (Guide)

**AI & Technology**
- `ai-scheduling-saves-salon-owners-time` (How-to)
- `predictive-analytics-salons-beginners-guide` (Guide)
- `ai-receptionists-transforming-salon-service` (Guide)
- `multilingual-beauty-business-tools` (Guide)
- `ai-beauty-industry-practical-applications` (Guide)

**Analytics & Reporting**
- `client-retention-reporting-know-numbers` (Guide)
- `revenue-forecasting-beauty-businesses` (Guide)
- `data-driven-salons-outperform-competition` (Guide)
- `salon-revenue-reporting-measure` (Guide)

**Business Growth**
- `scaling-beauty-business-one-to-many` (Guide)
- `multi-channel-acquisition-beauty-growth` (Guide)
- `daisy-marketing-suite-new-clients` (How-to)
- `how-to-start-beauty-business` (Guide)
- `salon-pricing-strategy` (Guide)
- `increasing-salon-revenue-strategies` (Guide)
- `expanding-salon-add-locations` (Guide)
- `salon-membership-subscription-models` (Guide)
- `salon-business-plan-template` (Guide)

**Decision Stage**
- `first-month-new-salon-platform` (Guide)
- `calculate-roi-switching-salon-software` (Guide)

**Standalone Guides (from guideData.ts)**
- `reduce-salon-no-shows` (Guide)
- `get-more-salon-clients` (Guide)
- `choose-best-salon-software` (Guide)
- `switch-from-fresha` (Guide)
- `set-up-online-booking-salon` (Guide)

### Professional How-to/Guide Articles (by category)

**Freelance Business**
- `freelance-stylist-scheduling-guide` (Guide)
- `going-freelance-beauty-professional` (Guide)
- `freelance-hairstylist-business-setup` (Guide)
- `setting-prices-independent-beauty-professional` (Guide)
- `building-personal-brand-beauty-industry` (Guide)
- `finding-clients-freelance-beauty-professional` (Guide)
- `freelance-beauty-professional-insurance-guide` (Guide)
- `tax-guide-freelance-beauty-professionals` (Guide)
- `scaling-up-freelancer-to-business-owner` (Guide)

**Marketing & Brand Building**
- `social-media-marketing-independent-beauty` (Guide)
- `marketing-yourself-independent-beauty-professional` (Guide)
- `building-personal-brand-beauty-professional` (Guide)

**Payments & Income**
- `getting-paid-faster-freelance-invoicing` (How-to)
- `freelance-stylist-payment-methods` (Guide)
- `tracking-freelance-beauty-income` (How-to)

**Schedule & Time Management**
- `managing-freelance-beauty-schedule` (How-to)
- `time-management-independent-beauty` (Guide)

**Client Relationships**
- `building-client-relationships-communication-beauty` (Guide)
- `building-client-loyalty-independent-beauty` (Guide)

**AI & Technology**
- `ai-tools-independent-beauty-professional` (Guide)

---

## Page Architecture

### Files Modified

| File | Change |
|------|--------|
| `src/app/[locale]/resources/tutorials/page.tsx` | Updated metadata (title, description, keywords) |
| `src/app/[locale]/resources/tutorials/TutorialsClient.tsx` | Rewritten — replaces tabbed HTML with category card grid using `CardPosts` |
| `src/lib/constants/resources/resourcesData.ts` | Update `tutorialsHeroData` copy to reflect "Tutorials & Guides" framing |

### Files Created

| File | Purpose |
|------|---------|
| `src/lib/constants/tutorials/tutorialCatalog.ts` | Curated slug list organized by persona and category |
| `src/lib/constants/tutorials/getTutorialArticles.ts` | Resolves slugs into `TutorialArticle` objects for rendering |
| `src/components/tutorials/TutorialCard.tsx` | Lightweight `<Link>`-wrapped card component (server-renderable) |

### Files NOT Modified

- All blog article data files (no changes)
- `CardPosts.tsx` (not used — it's a full-page layout component, not an embeddable card)
- `guideData.ts` (read-only, data mapped by helper function)
- Existing tutorial components (`TutorialSection.tsx`, `TabsTutorials`, `SelectTutorials`) — left in place, no longer imported. Candidates for cleanup in a follow-up.

---

## Page Layout

```
┌──────────────────────────────────────────────────┐
│  Header (with Business/Professional toggle)       │
├──────────────────────────────────────────────────┤
│  Hero Section                                     │
│  "Tutorials & Guides"                             │
│  "Step-by-step guides to grow your beauty         │
│   business" (or professional variant)             │
├──────────────────────────────────────────────────┤
│                                                   │
│  ── Booking & Scheduling ──                       │
│  ┌─────┐  ┌─────┐  ┌─────┐                       │
│  │Card │  │Card │  │Card │                        │
│  └─────┘  └─────┘  └─────┘                       │
│                                                   │
│  ── Staff & Team Management ──                    │
│  ┌─────┐  ┌─────┐  ┌─────┐                       │
│  │Card │  │Card │  │Card │                        │
│  └─────┘  └─────┘  └─────┘                       │
│                                                   │
│  ── Marketing & Promotions ──                     │
│  ┌─────┐  ┌─────┐  ┌─────┐                       │
│  │Card │  │Card │  │Card │                        │
│  └─────┘  └─────┘  └─────┘                       │
│                                                   │
│  ... more categories ...                          │
│                                                   │
├──────────────────────────────────────────────────┤
│  Footer                                          │
└──────────────────────────────────────────────────┘
```

- Cards use the new `TutorialCard` component (server-rendered `<Link>` cards)
- Grid: 1 column mobile, 3 columns desktop (matches blog listing)
- Each category section has a heading (h2) and renders its cards
- Background: `#F8F5F3` (cream, matches existing pages)
- When toggle switches persona, the entire card grid swaps to show that persona's catalog

---

## SEO

### Updated Metadata

```typescript
title: 'Beauty Industry Tutorials & Guides | The Daisy'
description: 'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.'
```

### Internal Linking

- Each card links to an existing indexed blog article or guide page — no orphan pages
- The tutorials page itself becomes a hub page linking to 60+ how-to/guide articles, strengthening internal link structure

---

## Internationalization

- Hero copy needs Arabic translations in `tutorialsHeroData` (updated in `resourcesData.ts`)
- Category labels need Arabic equivalents in `tutorialCatalog.ts` (use `I18nContent` pattern)
- Article content is English-only for now (matches blog — Arabic translations are a separate workstream per content strategy)
- The page supports RTL layout via existing middleware and Tailwind RTL utilities

---

## Edge Cases

- **Duplicate slugs**: The guide `reduce-salon-no-shows` exists in both `guideData.ts` and as a blog article. The catalog should reference the blog article only (richer content, has image/author data). Do not include both.
- **Empty categories**: If a persona has no articles for a category, that category section is not rendered.
- **Customer persona**: The customer persona is deprioritized site-wide. When the toggle is set to customer (or no persona is set), the tutorials page falls back to showing the business catalog.
- **Guide cards without images**: Guides from `guideData.ts` lack images, tags, and author data. The `TutorialCard` component handles this gracefully with a fallback placeholder image and omitting missing metadata fields.
- **Small categories**: Some categories may have only 1-2 articles. This is acceptable — they still render as standalone sections. No minimum threshold.
