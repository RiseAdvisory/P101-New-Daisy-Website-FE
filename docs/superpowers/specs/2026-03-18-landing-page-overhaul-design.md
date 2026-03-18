# Landing Page Overhaul — Business & Professional

**Date:** 2026-03-18
**Status:** Approved
**Scope:** Full overhaul of `/business` and `/professional` landing pages — bug fixes, shared infrastructure, new content sections, SEO/GEO hardening.

## Context

Three review agents audited both landing pages and the shared infrastructure. They found ~20 issues spanning broken functionality, missing content, wrong content placement, and SEO/GEO gaps. The server-rendering issue (`'use client'` on both pages) has already been fixed in a prior commit on this branch.

### Goal

Convert visitors into paid signups. The landing pages are the primary conversion tool for a pre-launch platform with pilot partners committed.

### Key Decisions Made During Brainstorming

- **DaysiMission section** moves to About Us page (brand content, not conversion content).
- **Hero sections** use a shared `LandingHero` component with persona-specific copy.
- **DaysiMission replacement:** `PlatformStrengths` section — platform capabilities + "replaces 5+ tools" messaging. No fake social proof.
- **Form:** Keep existing form with toggle. Make default toggle state context-aware per page. Hide toggle on professional page.
- **Header CTA:** "Start Free Trial" replaces "Get The App".
- **JoinTheDaisy "As Colleagues"** stays as-is — it correctly links to `/careers` for Daisy employees.
- **facebook_url** in footer gets fixed to actual Facebook URL.

---

## Phase 1 — Bug Fixes

Quick wins. Fix things that are actively broken or incorrect.

### 1a. GrowthSection CTA link conflict

**File:** `src/components/businessPage/GrowthSection.tsx` (lines 39-43)
**Problem:** `<Button onClick={() => router.push(buttonLink)}>` wraps a `<Link href="/about">`. The Link wins the click, sending users to `/about` instead of `/get-the-app`.
**Fix:** Remove the nested `<Link>`. The Button's `onClick` callback already navigates correctly via `router.push(buttonLink)`.

### 1b. Form dev URL

**File:** `src/components/formBusiness/FormBusiness.tsx` (line 119)
**Problem:** Hardcoded `https://devapp.trythedaisy.com/api/v1/vendor/demo/enquiry`. Production form submissions go to dev environment.
**Fix:** Replace with `${Constants.BASE_URL}vendor/demo/enquiry` using the existing `Constants.BASE_URL` from `src/helpers/oldApi.ts` (already set to `https://app.trythedaisy.com/api/v1/`). This matches the pattern already used by `QASection.tsx` for its API calls. Import `Constants` from `@/helpers/oldApi`.

### 1c. Multiple H1 tags

**Problem:** Multiple components render `<h1>` tags on the landing pages. After Phase 3 introduces `LandingHero` as the single `<h1>`, all other H1s must be demoted.

**Files and fixes:**
- `src/components/lockerScrollingSection/LockerContentItem/LockerContentItem.tsx` (line 47) — `<h1>` → `<h2>` (each scroll section currently renders as H1, producing 5 H1s per page)
- `src/components/QASection/QASection.tsx` (line 56) — `<h1>` → `<h2>` (FAQ section title)
- `src/components/businessPage/BecomeFormPartner.tsx` (line 34) — `<h1>` → `<h2>` (form section title)
- `src/components/businessPage/DaysiMission.tsx` (line 16) — `<h1>` → `<h2>` (needed when relocated to About Us page in Phase 2b, where About page already has its own H1)

### 1d. "Vedors" typo

**File:** `src/lib/constants/shared/joinDaisyData.ts` (line 33)
**Fix:** Change "Vedors" to "Vendors".

### 1e. Professional FAQ endpoint

**File:** `src/components/QASection/QASection.tsx` (lines 83-93)
**Problem:** `pageType="Professional"` falls through to customer FAQ because the enum only has `Customer` and `Business`.
**Fix:** Add `Professional` case to the endpoint mapping. Map it to the vendor FAQ endpoint (`/account/faq/vendor/list`) since professionals are service providers, or to a dedicated professional endpoint if one exists.

### 1f. Footer hardcoded links

**Files:** `src/lib/constants/shared/footerData.ts` (line 32), `src/components/footer/Footer.tsx` (line 100)
**Problem:** Features link hardcoded to `/features/business`. Logo link hardcoded to `/business`.
**Fix:**
- Features link → `/features/business` stays as-is for now. The `/features` route has no standalone page — it relies on client-side persona detection to redirect via the toggle header. Changing this requires verifying the redirect logic works. **Revisit in a follow-up if persona-aware footer is needed.**
- Logo link → change from `/business` to `/` (site root). The root page (`src/app/[locale]/page.tsx`) already redirects to `/{locale}/business` — this is a safe default and standard behavior for a logo link.

### 1g. SearchAction schema

**Files:** `src/components/seo/OrganizationSchema.tsx` (line 29), `src/components/seo/WebSiteSchema.tsx` (line 13)
**Problem:** `potentialAction` references `/search?q={search_term_string}` — no `/search` route exists.
**Fix:** Remove the `potentialAction` / `SearchAction` block from both schemas entirely.

### 1h. OG images

**Problem:** OG image references `https://i.imgur.com/MNoL6BE.jpeg` — third-party host with no SLA.
**Fix:** Download the image, save to `public/images/og/og-default.jpg`. Update all references to `/images/og/og-default.jpg`.

**Note:** The `src/app/layout.tsx` change is global — it affects every page's default OG image. Grep for the Imgur URL across the entire codebase to catch all references, including the About page (`src/app/[locale]/about/page.tsx` lines 32-33).

**Files (known):** `src/app/layout.tsx`, `src/app/[locale]/business/page.tsx`, `src/app/[locale]/professional/page.tsx`, `src/app/[locale]/about/page.tsx`. Run a full grep during implementation to catch any others.

### 1i. Fix facebook_url in footer

**File:** `src/lib/constants/shared/footerData.ts` (line 66)
**Problem:** `facebook_url` points to a Threads URL, not Facebook.
**Fix:** Replace with the actual Daisy Facebook page URL. Icon already renders as Facebook.

---

## Phase 2 — Shared Infrastructure

Changes that affect both landing pages and/or the global layout.

### 2a. Header CTA: "Start Free Trial"

**File:** `src/components/buttonApp/GetAppButton.tsx` and header data in `src/lib/constants/shared/headerData.ts`
**Change:** Replace button text "Get The App" with "Start Free Trial" (English) and Arabic equivalent in the header data. Same destination (`/get-the-app`). The copy reframes the action around value rather than installation.

**Scope note:** The `GetAppButton` receives its text via the `textGetApp` prop from `headerData.ts`. Changing the text there affects the header and mobile menu. The `JoinTheDaisy` component uses separate data (`joinDaisyData.ts`) and keeps its own "Get The App" text — this is intentional since that section is specifically about downloading the app.

### 2b. Move DaysiMission to About Us page

**Remove from:**
- `src/app/[locale]/business/BusinessClient.tsx` — remove `<DaysiMission />` import and render
- `src/app/[locale]/professional/ProfessionalClient.tsx` — remove `<DaysiMission />` import and render

**Add to:** `src/app/[locale]/about/AboutClient.tsx` — import and render `<DaysiMission />` after existing about content. The About page uses `AboutClient` as its content wrapper (similar pattern to business/professional pages).

**H1 fix required:** `DaysiMission.tsx` line 16 renders an `<h1>`. The About page already has its own H1 (via its hero). Change the `<h1>` in `DaysiMission.tsx` to `<h2>` as part of Phase 1c (H1 cleanup).

Component data file (`daisyMissionData.ts`) remains unchanged.

### 2c. Context-aware form defaults

**Files:** `src/components/businessPage/BecomeFormPartner.tsx`, `src/components/formBusiness/FormBusiness.tsx`

**Change:** Add optional `defaultType` prop to `BecomeFormPartner` and `ProfileForm`: `'business' | 'freelance'`.

- Business page passes `defaultType="business"` → toggle defaults to Business, business fields visible.
- Professional page passes `defaultType="freelance"` → toggle hidden, freelance fields shown. Professionals have self-identified by being on this page.

**Implementation detail:** Inside `ProfileForm`, the toggle state is a boolean (`business_type: boolean` at line 41 — `true` = business, `false` = freelance). The `defaultType` prop maps to this:
- `defaultType="business"` → `useState(true)`
- `defaultType="freelance"` → `useState(false)` (current default)
- No prop → `useState(false)` (backwards compatible)

On the professional page, hide the toggle by wrapping the `<ToggleButtonForm>` and its `<p>` label (lines 222-233) in a conditional: `{showToggle && ...}`. Derive `showToggle` from `defaultType !== 'freelance'` or accept it as a separate boolean prop.

### 2d. Fix facebook_url

Covered in 1i (moved to Phase 1 since it's a simple data fix).

---

## Phase 3 — New Content Sections

New components and content that replace DaysiMission's position and add a hero.

### 3a. `LandingHero` component

**New file:** `src/components/shared/LandingHero.tsx`
**Type:** Server component (no `'use client'`)

**Rendering location:** `LandingHero` must be rendered in the server `page.tsx` files (`src/app/[locale]/business/page.tsx` and `src/app/[locale]/professional/page.tsx`), **not** inside `BusinessClient.tsx` / `ProfessionalClient.tsx`. The client wrapper files are within the client boundary (they use `dynamic()` imports), so any component rendered inside them cannot be a true server component. Rendering in `page.tsx` ensures the hero HTML is server-rendered for SEO.

Similarly, `PlatformStrengths` (3b) must also be rendered in `page.tsx`. The page flow becomes: `page.tsx` renders `LandingHero` (server) → `BusinessClient`/`ProfessionalClient` (client boundary, contains LockerContainer through BecomeFormPartner) → `PlatformStrengths` (server). This splits the rendering between server and client, but maintains correct visual ordering.

**Props:**
```typescript
interface LandingHeroProps {
  categoryLabel: string;    // e.g. "FOR BUSINESS OWNERS"
  headline: string;         // H1 text
  subHeadline: string;      // Supporting copy
  ctaText: string;          // e.g. "Start Free Trial"
  ctaLink: string;          // e.g. "/get-the-app"
  answerBlock?: {           // Optional GEO answer block (Phase 4)
    question: string;
    answer: string;
  };
}
```

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  [Category label]          small, uppercase      │
│  [H1 Headline]             large, bold           │
│  [Sub-headline]            medium, lighter       │
│  [Primary CTA button]     prominent button       │
│  [Answer block]            GEO content (Phase 4) │
└─────────────────────────────────────────────────┘
```

**Styling:** Full-width, `bg-primary` dark background to match the scroll section below. The hero and scroll walkthrough feel like one continuous experience.

**SEO:** This component owns the page's single `<h1>` tag.

**Data location:** New `hero` key in existing `businessPageData` and `professionalPageData` objects in `src/lib/constants/pages/`.

**Business hero copy:**
- Category: "FOR BUSINESS OWNERS"
- H1: "Grow Your Salon with AI-Powered Everything"
- Sub: "Replace 5+ tools with one platform. AI receptionist, customer acquisition, booking, payments, and marketing — all with your brand, your way."
- CTA: "Start Free Trial" → `/get-the-app`

**Professional hero copy:**
- Category: "FOR BEAUTY PROFESSIONALS"
- H1: "Your Career, Your Schedule, Your Clients"
- Sub: "Manage bookings, build your client base, and track your earnings — all from one app. Flexible scheduling with 24/7 AI support."
- CTA: "Start Free Trial" → `/get-the-app`

Arabic copy mirrors the English with equivalent messaging, stored in the same i18n `{ en: {...}, ar: {...} }` structure.

### 3b. `PlatformStrengths` component

**New file:** `src/components/shared/PlatformStrengths.tsx`
**Type:** Server component (no `'use client'`)

**Props:**
```typescript
interface PlatformStrengthsProps {
  headline: string;
  subHeadline: string;
  capabilities: Array<{
    icon: ReactNode;    // Pre-imported Lucide component, e.g. <CalendarIcon />
    label: string;
    description: string;
  }>;
  stats: Array<{
    value: string;      // e.g. "8"
    context: string;    // e.g. "tools in one platform" (matches StatisticHighlight prop name)
    source?: string;    // for StatisticHighlight citation
  }>;
}
```

**Note on `icon` type:** Uses `ReactNode` (pre-imported Lucide components) instead of string icon names. The codebase has no dynamic Lucide icon resolver — all Lucide usage is via direct component imports. The data files will import icons and pass them as JSX elements.

**Note on `stats.context`:** Named `context` (not `label`) to match the `StatisticHighlight` component's prop interface (`{ value, context, source }`) and avoid mapping during render.

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  [Headline]                                      │
│  [Sub-headline]                                  │
│                                                  │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ icon │  │ icon │  │ icon │  │ icon │         │
│  │label │  │label │  │label │  │label │         │
│  │desc  │  │desc  │  │desc  │  │desc  │         │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ icon │  │ icon │  │ icon │  │ icon │         │
│  │label │  │label │  │label │  │label │         │
│  │desc  │  │desc  │  │desc  │  │desc  │         │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ 8 tools  │  │  24/7 AI │  │ Bilingual │     │
│  │ in one   │  │reception │  │  AR + EN  │     │
│  └──────────┘  └──────────┘  └──────────┘      │
└─────────────────────────────────────────────────┘
```

**Styling:** Light background to contrast with `bg-primary` above. 4-column grid on desktop (2x4 capabilities), 2-column on tablet, 1-column on mobile. Stats use `StatisticHighlight` GEO component for semantic markup.

**Data location:** New `platformStrengths` key in existing page data files.

**Business copy:**
- Headline: "One Platform Replaces Your Entire Tool Stack"
- Sub: "Stop paying for 5+ separate tools. Daisy combines everything you need to run and grow your beauty business."
- 8 capabilities: AI Receptionist, Smart Booking, Customer Acquisition, Payments & Invoicing, Staff Management, Marketing Engine, Analytics Dashboard, Brand Control
- 3 stats: "8 tools in one" / "24/7 AI receptionist" / "Bilingual Arabic & English"

**Professional copy:**
- Headline: "Everything You Need in One App"
- Sub: "No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together."
- 8 capabilities: Flexible Scheduling, Client Management, Earnings Tracker, Professional Profile, Smart Booking, Notifications, Calendar Sync, Portfolio
- 3 stats: "All-in-one app" / "24/7 AI booking" / "Bilingual Arabic & English"

### 3c. Updated page flow and rendering split

After Phase 3, both pages follow this structure. Components are split between the server `page.tsx` and the client wrapper:

```
Rendered in page.tsx (server):
  1. LandingHero           (NEW — H1, value prop, primary CTA)

Rendered in BusinessClient/ProfessionalClient (client boundary):
  2. LockerContainer       (existing — desktop scroll feature walkthrough)
  3. MobileScrollSection   (existing — mobile version of scroll sections)
  4. GrowthSection         (existing — marketplace CTA, bug-fixed in Phase 1)
  5. JoinTheDaisy          (existing — three persona cards)
  6. ExperienceDaisy       (existing — app download CTA)
  7. QASection             (existing — FAQ, bug-fixed in Phase 1)
  8. BecomeFormPartner     (existing — lead capture form, context-aware in Phase 2)

Rendered in page.tsx (server):
  9. PlatformStrengths     (NEW — replaces DaysiMission position)
```

**Note:** `PlatformStrengths` is rendered after the client wrapper in `page.tsx`. Visually it appears between the scroll sections and GrowthSection. Since it's below the fold, the rendering order (server → client → server) doesn't cause layout issues — the client components hydrate before the user scrolls to `PlatformStrengths`.

**Alternative if visual ordering is problematic:** Move `PlatformStrengths` inside the client wrapper using `dynamic()` import (same pattern as other below-fold components). This sacrifices true server-rendering for this component but maintains simpler page structure. The content is still SSR'd via Next.js `dynamic()` prerendering — just within the client boundary.

---

## Phase 4 — SEO/GEO Hardening

Polish for search engine and AI discoverability.

### 4a. GEO Answer Blocks on hero sections

**Integration point:** `LandingHero` component's optional `answerBlock` prop.

Import and render `AnswerBlock` from `src/components/geo/AnswerBlock.tsx` inside the hero, below the CTA. First-screen placement maximizes AI citability per the project's GEO strategy.

**Heading level:** `AnswerBlock` defaults to rendering the question as `<h2>`. Inside the hero (directly after the `<h1>`), use `as="h3"` to avoid an overly prominent heading for a GEO answer question. The `AnswerBlock` component already accepts the `as` prop (`'h2' | 'h3'`).

**Business answer:**
- Q: "What is The Daisy for salons?"
- A: "The Daisy is an AI-powered beauty business platform that combines booking management, customer acquisition, payments, staff scheduling, and marketing into one system. It replaces 5+ separate tools with a single bilingual (Arabic/English) platform featuring a 24/7 AI receptionist."

**Professional answer:**
- Q: "What is The Daisy for beauty professionals?"
- A: "The Daisy is an all-in-one app for beauty and wellness professionals to manage bookings, build a client base, track earnings, and grow their career. It features flexible scheduling, 24/7 AI-powered booking, and bilingual Arabic/English support."

### 4b. FaqSchema + static FAQ fallback

**File:** `src/components/QASection/QASection.tsx`

Two changes:

1. **Add `FaqSchema` JSON-LD** — after FAQ items load (from API or fallback), generate `FaqPage` structured data and inject via `<script type="application/ld+json">`.

2. **Static fallback FAQ data** — add a `fallbackFaqs` key to the page data files (5-7 questions per persona). If the live API call fails or returns empty, render the static FAQs instead. This ensures crawlers always see FAQ content + structured data.

**Business static FAQs:**
- "How much does The Daisy cost?" → pricing tiers + link to /pricing
- "Can I migrate from my current booking system?" → onboarding support included
- "Does The Daisy work in Arabic?" → fully bilingual
- "What is the AI receptionist?" → 24/7 automated booking, payments, customer service
- "Is there a free trial?" → 14-day free trial, no credit card required

**Professional static FAQs:**
- "How do I join The Daisy as a professional?" → download the app, create profile
- "Can I set my own schedule?" → yes, full schedule control
- "How does payment work?" → earnings tracked in-app, regular payouts
- "Do I need to work at a salon to join?" → no, freelancers welcome
- "Is The Daisy available in Arabic?" → fully bilingual

### 4c. Metadata title updates

**Business page** (`src/app/[locale]/business/page.tsx`):
- Title: "Salon & Spa Business Solutions | The Daisy" → **"AI-Powered Salon & Spa Management Platform | The Daisy"**
- Description: update to include "AI" and "free trial"

**Professional page** (`src/app/[locale]/professional/page.tsx`):
- Title: "For Beauty Professionals | The Daisy" → **"Beauty Professional App — Manage Bookings & Grow Clients | The Daisy"**
- Description: update to include specific value props

### 4d. StatisticHighlight in PlatformStrengths

The stat cards in `PlatformStrengths` (Phase 3) use the `StatisticHighlight` GEO component from `src/components/geo/StatisticHighlight.tsx` instead of plain divs. This component uses semantic `<data>` and `<cite>` HTML — designed for AI citability. Same visual, better structure.

---

## Files Changed Summary

### Phase 1 (Bug Fixes)
| File | Change |
|------|--------|
| `src/components/businessPage/GrowthSection.tsx` | Remove nested `<Link>` inside Button |
| `src/components/formBusiness/FormBusiness.tsx` | Replace hardcoded dev URL with `Constants.BASE_URL` |
| `src/components/lockerScrollingSection/LockerContentItem/LockerContentItem.tsx` | `<h1>` → `<h2>` |
| `src/components/QASection/QASection.tsx` | `<h1>` → `<h2>` (section title) |
| `src/components/businessPage/BecomeFormPartner.tsx` | `<h1>` → `<h2>` (section title) |
| `src/components/businessPage/DaysiMission.tsx` | `<h1>` → `<h2>` (for About page relocation) |
| `src/lib/constants/shared/joinDaisyData.ts` | Fix "Vedors" typo |
| `src/components/QASection/QASection.tsx` | Add Professional FAQ endpoint mapping |
| `src/lib/constants/shared/footerData.ts` | Fix Features link and facebook_url |
| `src/components/footer/Footer.tsx` | Fix logo link |
| `src/components/seo/OrganizationSchema.tsx` | Remove SearchAction |
| `src/components/seo/WebSiteSchema.tsx` | Remove SearchAction |
| `src/app/layout.tsx` | Update OG image path |
| `src/app/[locale]/business/page.tsx` | Update OG image path |
| `src/app/[locale]/professional/page.tsx` | Update OG image path |
| `public/images/og/og-default.jpg` | New file — self-hosted OG image |
| `src/app/[locale]/about/page.tsx` | Update OG image path |
| + any other files referencing Imgur URL | Grep and update during implementation |

### Phase 2 (Shared Infrastructure)
| File | Change |
|------|--------|
| `src/components/buttonApp/GetAppButton.tsx` + data | "Get The App" → "Start Free Trial" |
| `src/app/[locale]/business/BusinessClient.tsx` | Remove DaysiMission |
| `src/app/[locale]/professional/ProfessionalClient.tsx` | Remove DaysiMission |
| `src/app/[locale]/about/AboutClient.tsx` | Add DaysiMission import and render |
| `src/components/businessPage/BecomeFormPartner.tsx` | Add `defaultType` prop |
| `src/components/formBusiness/FormBusiness.tsx` | Accept `defaultType`, conditionally hide toggle |

### Phase 3 (New Content)
| File | Change |
|------|--------|
| `src/components/shared/LandingHero.tsx` | New component |
| `src/components/shared/PlatformStrengths.tsx` | New component |
| `src/lib/constants/pages/businessPage.ts` | Add `hero` and `platformStrengths` data |
| `src/lib/constants/pages/professionalPage.ts` | Add `hero` and `platformStrengths` data |
| `src/app/[locale]/business/page.tsx` | Add LandingHero + PlatformStrengths (server-rendered) |
| `src/app/[locale]/professional/page.tsx` | Add LandingHero + PlatformStrengths (server-rendered) |

### Phase 4 (SEO/GEO)
| File | Change |
|------|--------|
| `src/lib/constants/pages/businessPage.ts` | Add `answerBlock` and `fallbackFaqs` data |
| `src/lib/constants/pages/professionalPage.ts` | Add `answerBlock` and `fallbackFaqs` data |
| `src/components/shared/LandingHero.tsx` | Integrate AnswerBlock |
| `src/components/QASection/QASection.tsx` | Add FaqSchema + static fallback |
| `src/app/[locale]/business/page.tsx` | Update metadata title/description |
| `src/app/[locale]/professional/page.tsx` | Update metadata title/description |

---

## Out of Scope

These were identified in the review but are not part of this overhaul:

- Header/Footer server-rendering refactor (both are `'use client'` due to language store — same pattern we fixed for the landing pages, but higher risk since they're global)
- Arabic `dir="ltr"` flash on initial render (layout-level issue)
- Customer page orphan state (exists but hidden from nav/sitemap)
- GrowthSection alt text cleanup
- Strapi-shim adapter refactoring in LockerContainer
- `shouldHideMenuItem` dead code removal
- Mobile menu hardcoded index for Resources submenu
- CarouselCompany eager loading optimization
