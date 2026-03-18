# WS4 Pillar Pages — Architecture Design Spec

**Date:** 2026-03-18
**Status:** Approved
**Scope:** 11 SEO pillar pages for jointhedaisy.com

---

## Overview

Build 11 comprehensive authority pages (4,000-5,000 words each) targeting high-volume industry keywords. Each pillar page is a definitive guide on a topic, with Daisy positioned as the recommended solution. Pillar pages anchor the topic cluster strategy — linking to WS3 feature pages, WS5 blog cluster articles, and WS2 comparison pages.

### Pages

| # | Title | URL | Primary Keyword |
|---|-------|-----|-----------------|
| 1 | The Complete Guide to Salon Management Software | `/salon-management-software` | "salon management software" |
| 2 | Beauty Booking System: Everything You Need to Know | `/beauty-booking-system` | "beauty booking system" |
| 3 | Salon Marketing Strategies That Drive Growth | `/salon-marketing-strategies` | "salon marketing strategies" |
| 4 | Beauty Business Growth Guide: From Startup to Scale | `/beauty-business-growth-guide` | "beauty business growth" |
| 5 | Salon Payment Solutions: The Complete Guide | `/salon-payment-solutions` | "salon payment solutions" |
| 6 | Salon Staff Management: Build & Retain a Great Team | `/salon-staff-management` | "salon staff management" |
| 7 | Salon Client Retention: Strategies That Work | `/salon-client-retention` | "salon client retention" |
| 8 | The Freelance Beauty Professional Guide | `/freelance-beauty-professional-guide` | "freelance beauty professional" |
| 9 | Beauty Industry Trends 2026: What's Next | `/beauty-industry-trends` | "beauty industry trends 2026" |
| 10 | Salon Analytics & Reporting: Data-Driven Growth | `/salon-analytics-reporting` | "salon analytics" |
| 11 | AI for Beauty & Salon Businesses | `/ai-salon-software` | "AI salon software" |

---

## Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | Individual top-level routes (one folder per pillar) | Maximum SEO authority from short URLs; 11 folders is manageable |
| Data storage | One TypeScript file per pillar + shared index | 4,000-5,000 words per page makes a single file unworkable; individual files enable independent authoring and PR review |
| Content format | HTML strings per section | Matches existing blog article pattern; section-level structure powers TOC, scroll-spy, and GEO answer blocks; best for LLM authoring |
| Page template | Shared `PillarPageTemplate` component | All 11 pages follow the same layout; customization lives in data, not components |
| Table of Contents | Sticky sidebar on desktop + collapsible on mobile | Standard for 4,000+ word authority pages; improves engagement, reduces bounce, enables Google sitelinks |
| TOC rendering | Client component island (IntersectionObserver) | TOC HTML is server-rendered; JS only adds scroll-spy highlight. All content remains in initial HTML response for crawlers |
| Elements included | All except social share buttons | Key takeaways, callout boxes, reading time, cluster article grid, related pillars — all high-value for SEO/GEO at low incremental effort |

---

## Data Architecture

### Directory Structure

```
src/lib/constants/pillars/
├── index.ts                              # Interface + helpers + registry
├── salon-management-software.ts
├── beauty-booking-system.ts
├── salon-marketing-strategies.ts
├── beauty-business-growth-guide.ts
├── salon-payment-solutions.ts
├── salon-staff-management.ts
├── salon-client-retention.ts
├── freelance-beauty-professional-guide.ts
├── beauty-industry-trends.ts
├── salon-analytics-reporting.ts
└── ai-salon-software.ts
```

### Core Interface

```typescript
// src/lib/constants/pillars/index.ts

export interface PillarPageSection {
  id: string;                    // Anchor ID, e.g. 'key-features'
  title: string;                 // TOC label + rendered <h2>
  content: string;               // HTML string (sanitized at render)
  callout?: {
    type: 'tip' | 'warning' | 'info';
    text: string;
  };
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

export interface PillarPageData {
  // Identity
  slug: string;
  title: string;
  excerpt: string;               // One sentence, ≤120 chars (for RelatedPillars cards)

  // SEO
  metaTitle: string;             // Under 60 characters, includes "| Daisy"
  metaDescription: string;       // 150-160 characters
  keywords: string[];
  heroImage?: string;            // OG image path (falls back to /images/og-default.jpg)

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  readingTime: string;           // e.g. '18 min read'
  lastUpdated: string;           // ISO date, format: YYYY-MM-DDTHH:mm:ss.sssZ

  // GEO — answer block for AI citation
  keyTakeaways: string[];        // 4-6 bullet points

  // Content
  introduction: string;          // HTML string
  sections: PillarPageSection[];

  // FAQ (separate array for FAQPage schema generation)
  faqs: { question: string; answer: string }[];

  // Internal linking
  clusterArticles: { slug: string; userType: 'business' | 'professional' }[];  // For ClusterArticleGrid — needs userType for blog lookup
  relatedPillarSlugs: string[];   // Other pillar page slugs
  relatedFeaturePages: string[];  // e.g. '/en/features/business/booking-management'
  relatedComparePages: string[];  // e.g. '/en/compare/daisy-vs-fresha'
}
```

### Helper Functions

```typescript
// src/lib/constants/pillars/index.ts

import { salonManagementSoftware } from './salon-management-software';
// ... all 11 imports

const allPillarPages: PillarPageData[] = [
  salonManagementSoftware,
  // ... all 11
];

export function getPillarPage(slug: string): PillarPageData | undefined {
  return allPillarPages.find((p) => p.slug === slug);
}

export function getAllPillarSlugs(): string[] {
  return allPillarPages.map((p) => p.slug);
}
```

---

## Routing

### 11 Individual Top-Level Routes

Each page is a thin server component (~30 lines):

```
src/app/[locale]/(routes)/
├── salon-management-software/page.tsx
├── beauty-booking-system/page.tsx
├── salon-marketing-strategies/page.tsx
├── beauty-business-growth-guide/page.tsx
├── salon-payment-solutions/page.tsx
├── salon-staff-management/page.tsx
├── salon-client-retention/page.tsx
├── freelance-beauty-professional-guide/page.tsx
├── beauty-industry-trends/page.tsx
├── salon-analytics-reporting/page.tsx
└── ai-salon-software/page.tsx
```

### Page.tsx Pattern

**Note:** Unlike `SolutionsPageClient` and `GuidesPageClient` which are client components, `PillarPageTemplate` is a **server component**. The `page.tsx` renders it directly with `data` as a prop. Only `TableOfContents.tsx` is a client island. This ensures all 4,000+ words of content are in the initial server HTML response for crawlers and AI systems.

```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPillarPage } from '@/lib/constants/pillars';
import { PillarPageTemplate } from '@/components/pillarPage/PillarPageTemplate';
import { localeAlternates } from '@/lib/utils/metadata';

type PageProps = { params: { locale: string } };

const SLUG = 'salon-management-software';

export const dynamicParams = false;

export function generateStaticParams() {
  return ['en', 'ar'].map((locale) => ({ locale }));
}

export function generateMetadata({ params: { locale } }: PageProps): Metadata {
  const data = getPillarPage(SLUG);
  if (!data) return { title: 'Not Found' };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/${locale}/${SLUG}`,
      type: 'article',
      images: [{ url: data.heroImage || '/images/og-default.jpg', width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.heroImage || '/images/og-default.jpg'],
    },
    alternates: localeAlternates(`/${SLUG}`, locale),
  };
}

export default function Page({ params: { locale } }: PageProps) {
  const data = getPillarPage(SLUG);
  if (!data) notFound();
  return <PillarPageTemplate data={data} locale={locale} />;
}
```

The only variable per file is the `SLUG` constant.

### Sitemap Integration

```typescript
// In src/app/sitemap.ts
const pillarPages = getAllPillarSlugs().flatMap((slug) =>
  localizedEntries(`/${slug}`, {
    lastModified: SEO_CONTENT_DATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  })
);
```

---

## Component Architecture

### File Inventory

```
src/components/pillarPage/
├── PillarPageTemplate.tsx        # Server — orchestrates all sub-components
├── PillarHero.tsx                # Server — title, subtitle, reading time, last updated
├── KeyTakeaways.tsx              # Server — GEO answer block (bulleted summary)
├── PillarSection.tsx             # Server — renders one section with callout + related links
├── CalloutBox.tsx                # Server — tip/warning/info styled box
├── TableOfContents.tsx           # CLIENT — sticky sidebar + scroll-spy + mobile collapsible
├── ClusterArticleGrid.tsx        # Server — grid of related blog post cards
├── RelatedPillars.tsx            # Server — links to other pillar pages
└── PillarCTA.tsx                 # Server — bottom CTA section

src/components/seo/
└── PillarArticleSchema.tsx       # Server — Article JSON-LD schema
```

Only `TableOfContents.tsx` uses `'use client'`. Everything else is server-rendered.

**Reused existing components:**
- `FaqSchema` from `src/components/seo/FaqSchema.tsx` — FAQPage JSON-LD generation
- `PageBreadcrumbSchema` from `src/components/seo/PageBreadcrumbSchema.tsx` — BreadcrumbList JSON-LD generation
- No new breadcrumb or FAQ schema components are needed.

### Page Layout

```
┌─────────────────────────────────────────────┐
│  Breadcrumbs: Home > {title}                │
├─────────────────────────────────────────────┤
│  PillarHero                                 │
│    heroTitle (h1)                           │
│    heroSubtitle                             │
│    readingTime · lastUpdated                │
├─────────────────────────────────────────────┤
│  KeyTakeaways (GEO answer block)            │
│    "Key Takeaways"                          │
│    • Bullet 1                               │
│    • Bullet 2 ...                           │
├─────────────────────────────────────────────┤
│  Mobile TOC (collapsible, hidden on desktop)│
├──────────────────────────┬──────────────────┤
│  Main Content (~70%)     │ Sticky TOC (~30%)│
│                          │ (desktop only)   │
│  Introduction            │                  │
│                          │ • Introduction   │
│  Section 1 (h2 + html)  │ • Section 1  <── │
│    [callout box]         │ • Section 2      │
│    [related links]       │ • ...            │
│                          │ • FAQ            │
│  Section 2 ...           │                  │
│                          │ ┌──────────────┐ │
│  FAQ Accordion           │ │ Start Free   │ │
│                          │ │ Trial CTA    │ │
│                          │ └──────────────┘ │
├──────────────────────────┴──────────────────┤
│  ClusterArticleGrid (related blog posts)    │
├─────────────────────────────────────────────┤
│  RelatedPillars (links to other pillars)    │
├─────────────────────────────────────────────┤
│  PillarCTA (full-width bottom CTA)          │
├─────────────────────────────────────────────┤
│  Schema: Article + BreadcrumbList + FAQPage │
└─────────────────────────────────────────────┘
```

### TableOfContents Component

- Receives `sections: { id: string; title: string }[]` as props (server-rendered data)
- **Desktop:** `position: sticky; top: 2rem` in the right column. Uses `IntersectionObserver` on each `<section id="...">` to highlight the current section in the TOC.
- **Mobile:** Native `<details>` element at top of content area, collapsed by default. Lists all section anchor links. No JS needed for collapse/expand.
- Includes a small CTA button at the bottom of the sidebar.
- Approximately 80 lines of client code.

---

## SEO & GEO Strategy

### Three Schema Types Per Page

**1. Article schema** (new `PillarArticleSchema.tsx`):
- `@type: Article`
- `headline`, `description`, `url`, `datePublished`, `dateModified`, `wordCount`
- `articleSection` array generated from section titles
- `author` and `publisher` as Organization (Daisy)

**2. BreadcrumbList schema** (existing pattern):
- Home > {pillar title}

**3. FAQPage schema** (reuse existing `FaqSchema`):
- Generated from the `faqs` array in pillar data

### GEO Content Patterns

| Pattern | Data Field | Purpose |
|---------|-----------|---------|
| Key takeaways block | `keyTakeaways: string[]` | First thing AI systems read after title; concise, citable summary |
| Direct-answer openings | Each section's HTML starts with 1-2 sentence answer | LLMs extract first paragraph as canonical answer |
| Entity authority | Daisy referenced naturally with feature page links | Builds brand-topic association |
| Structured FAQ | `faqs` array as accordions + FAQPage schema | Google rich results + AI Q&A citation |
| Section anchor links | `id` on each section | AI citations can deep-link to `#specific-section` |

### Internal Linking Rules

Per pillar page:
- 6-8 links to cluster articles (blog posts) via inline content + ClusterArticleGrid
- 2-3 links to related feature pages via inline content + section relatedLinks
- 2-3 links to related pillar pages via RelatedPillars component
- 1-2 links to comparison pages via inline content
- 1 link to pricing page
- First internal link within 200 words of introduction

### Meta SEO Requirements

- `metaTitle`: Under 60 characters, includes `| Daisy` or `| The Daisy`
- `metaDescription`: 150-160 characters
- `keywords`: 4-8 relevant keywords
- OpenGraph: type `article`, full URL, 1200x630 image
- Twitter: `summary_large_image` card
- `alternates`: hreflang via `localeAlternates()`

---

## Build Sequence

### Batch 1 — Foundation (data layer + components + proof-of-concept)

1. Create `src/lib/constants/pillars/index.ts` with interface, helpers, and registry
2. Build all 9 components in `src/components/pillarPage/`
3. Build `src/components/seo/PillarArticleSchema.tsx`
4. Create first pillar data file: `salon-management-software.ts`
5. Create first route: `salon-management-software/page.tsx`
6. Update `src/app/sitemap.ts` with pillar entries (uses `getAllPillarSlugs()`, scales automatically as pillars are added)
7. Verify: renders correctly, schema validates, TOC works, mobile layout correct

### Batch 2 — Priority pillars: Booking, Marketing, AI

8. Data files: `beauty-booking-system.ts`, `salon-marketing-strategies.ts`, `ai-salon-software.ts`
9. Routes: 3 `page.tsx` files
10. These complete the "must-have" pillars from the minimum viable content strategy

### Batch 3 — Pillars: Growth, Payments, Staff, Retention

11. Data files: `beauty-business-growth-guide.ts`, `salon-payment-solutions.ts`, `salon-staff-management.ts`, `salon-client-retention.ts`
12. Routes: 4 `page.tsx` files

### Batch 4 — Pillars: Freelance, Trends, Analytics + LLM files

13. Data files: `freelance-beauty-professional-guide.ts`, `beauty-industry-trends.ts`, `salon-analytics-reporting.ts`
14. Routes: 3 `page.tsx` files
15. Update `public/llms.txt` and `public/llms-full.txt`

Each batch is independently deployable.

---

## File Inventory

### New Files (33)

**Data layer (12):**
- `src/lib/constants/pillars/index.ts`
- `src/lib/constants/pillars/salon-management-software.ts`
- `src/lib/constants/pillars/beauty-booking-system.ts`
- `src/lib/constants/pillars/salon-marketing-strategies.ts`
- `src/lib/constants/pillars/beauty-business-growth-guide.ts`
- `src/lib/constants/pillars/salon-payment-solutions.ts`
- `src/lib/constants/pillars/salon-staff-management.ts`
- `src/lib/constants/pillars/salon-client-retention.ts`
- `src/lib/constants/pillars/freelance-beauty-professional-guide.ts`
- `src/lib/constants/pillars/beauty-industry-trends.ts`
- `src/lib/constants/pillars/salon-analytics-reporting.ts`
- `src/lib/constants/pillars/ai-salon-software.ts`

**Routes (11):**
- `src/app/[locale]/(routes)/salon-management-software/page.tsx`
- `src/app/[locale]/(routes)/beauty-booking-system/page.tsx`
- `src/app/[locale]/(routes)/salon-marketing-strategies/page.tsx`
- `src/app/[locale]/(routes)/beauty-business-growth-guide/page.tsx`
- `src/app/[locale]/(routes)/salon-payment-solutions/page.tsx`
- `src/app/[locale]/(routes)/salon-staff-management/page.tsx`
- `src/app/[locale]/(routes)/salon-client-retention/page.tsx`
- `src/app/[locale]/(routes)/freelance-beauty-professional-guide/page.tsx`
- `src/app/[locale]/(routes)/beauty-industry-trends/page.tsx`
- `src/app/[locale]/(routes)/salon-analytics-reporting/page.tsx`
- `src/app/[locale]/(routes)/ai-salon-software/page.tsx`

**Components (9):**
- `src/components/pillarPage/PillarPageTemplate.tsx`
- `src/components/pillarPage/PillarHero.tsx`
- `src/components/pillarPage/KeyTakeaways.tsx`
- `src/components/pillarPage/PillarSection.tsx`
- `src/components/pillarPage/CalloutBox.tsx`
- `src/components/pillarPage/TableOfContents.tsx`
- `src/components/pillarPage/ClusterArticleGrid.tsx`
- `src/components/pillarPage/RelatedPillars.tsx`
- `src/components/pillarPage/PillarCTA.tsx`

**Schema (1):**
- `src/components/seo/PillarArticleSchema.tsx`

### Modified Files (3)

- `src/app/sitemap.ts` — add pillar page entries
- `public/llms.txt` — add pillar page references
- `public/llms-full.txt` — add pillar page references
