# Landing Page Overhaul Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all bugs, add hero sections, replace DaysiMission with PlatformStrengths, and harden SEO/GEO on both Business and Professional landing pages.

**Architecture:** 4-phase approach — bug fixes first, then shared infrastructure changes, then new content components, then SEO/GEO hardening. Each phase is independently deployable. New components (LandingHero, PlatformStrengths) are server components rendered in page.tsx, while existing interactive components remain in the client wrapper.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide React icons, existing GEO components (AnswerBlock, StatisticHighlight), existing FaqSchema component.

**Spec:** `docs/superpowers/specs/2026-03-18-landing-page-overhaul-design.md`

---

## Phase 1 — Bug Fixes

### Task 1: Fix GrowthSection CTA link conflict

**Files:**
- Modify: `src/components/businessPage/GrowthSection.tsx:39-43`

- [ ] **Step 1: Fix the nested Link inside Button**

In `GrowthSection.tsx`, replace lines 39-43:

```tsx
// BEFORE:
<Button
  className="font-semibold w-full h-auto text-base mt-8 mb-10 px-[85px] py-[14px] rounded-[9px] md:w-[310px] hover:bg-white hover:text-primary hover:border hover:border-primary"
  onClick={() => router.push(buttonLink)}
>
  <Link href="/about"> {learnMore}</Link>
</Button>

// AFTER:
<Button
  className="font-semibold w-full h-auto text-base mt-8 mb-10 px-[85px] py-[14px] rounded-[9px] md:w-[310px] hover:bg-white hover:text-primary hover:border hover:border-primary"
  onClick={() => router.push(buttonLink)}
>
  {learnMore}
</Button>
```

Remove the `Link` import if it's no longer used elsewhere in the file.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/businessPage/GrowthSection.tsx
git commit -m "fix: remove conflicting Link inside GrowthSection CTA button"
```

---

### Task 2: Fix form dev URL

**Files:**
- Modify: `src/components/formBusiness/FormBusiness.tsx:118-119`

- [ ] **Step 1: Add Constants import and replace hardcoded URL**

Add import at top of file:
```tsx
import { Constants } from '@/helpers/oldApi';
```

Replace line 118-119:
```tsx
// BEFORE:
const response = await fetch(
  `https://devapp.trythedaisy.com/api/v1/vendor/demo/enquiry`,

// AFTER:
const response = await fetch(
  `${Constants.BASE_URL}vendor/demo/enquiry`,
```

This matches the pattern already used in `QASection.tsx` which imports from the same `oldApi.ts`.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/formBusiness/FormBusiness.tsx
git commit -m "fix: use Constants.BASE_URL for form submission endpoint"
```

---

### Task 3: Fix all H1 tags to H2

**Files:**
- Modify: `src/components/lockerScrollingSection/LockerContentItem/LockerContentItem.tsx:47`
- Modify: `src/components/QASection/QASection.tsx:56`
- Modify: `src/components/businessPage/BecomeFormPartner.tsx:34`
- Modify: `src/components/businessPage/DaysiMission.tsx:16`

- [ ] **Step 1: Fix LockerContentItem.tsx**

Line 47 — change `<h1>` to `<h2>` and its closing tag:
```tsx
// BEFORE:
<h1 className="text-white text-5xl leading-[60px] capitalize">

// AFTER:
<h2 className="text-white text-5xl leading-[60px] capitalize">
```

- [ ] **Step 2: Fix QASection.tsx**

Line 56 — change `<h1>` to `<h2>`:
```tsx
// BEFORE:
<h1
  className={cn(
    'text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px] md:text-[40px] md:leading-[50px] md:font-bold',
    { hidden: titleHidden },
  )}
>

// AFTER:
<h2
  className={cn(
    'text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px] md:text-[40px] md:leading-[50px] md:font-bold',
    { hidden: titleHidden },
  )}
>
```

Also fix the closing tag (find `</h1>` → `</h2>` for this element).

- [ ] **Step 3: Fix BecomeFormPartner.tsx**

Line 34 — change `<h1>` to `<h2>`:
```tsx
// BEFORE:
<h1 className="text-center text-white text-[32px] leading-10">

// AFTER:
<h2 className="text-center text-white text-[32px] leading-10">
```

Also fix the closing tag.

- [ ] **Step 4: Fix DaysiMission.tsx**

Line 16 — change `<h1>` to `<h2>`:
```tsx
// BEFORE:
<h1 className="text-center mx-[20px] md:mx-0  text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">

// AFTER:
<h2 className="text-center mx-[20px] md:mx-0  text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
```

Also fix the closing tag.

- [ ] **Step 5: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 6: Commit**

```bash
git add src/components/lockerScrollingSection/LockerContentItem/LockerContentItem.tsx \
  src/components/QASection/QASection.tsx \
  src/components/businessPage/BecomeFormPartner.tsx \
  src/components/businessPage/DaysiMission.tsx
git commit -m "fix: demote all section H1 tags to H2 for correct heading hierarchy"
```

---

### Task 4: Fix "Vedors" typo

**Files:**
- Modify: `src/lib/constants/shared/joinDaisyData.ts:37`

- [ ] **Step 1: Fix the typo**

Line 37:
```tsx
// BEFORE:
title: 'As Vedors',

// AFTER:
title: 'As Vendors',
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/constants/shared/joinDaisyData.ts
git commit -m "fix: correct 'Vedors' typo to 'Vendors' in JoinTheDaisy data"
```

---

### Task 5: Fix Professional FAQ endpoint

**Files:**
- Modify: `src/components/QASection/QASection.tsx:82-93`

- [ ] **Step 1: Add Professional to the PageType enum and endpoint mapping**

First, find the PageType enum (check the top of the file or imports). Then update the `getData` function at lines 82-93:

```tsx
// BEFORE:
const getData = async (locale: string, pageType: PageType) => {
  try {
    const res =
      pageType == PageType.Business
        ? await fetch(`${Constants.BASE_URL}account/faq/vendor/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          })
        : await fetch(`${Constants.BASE_URL}account/faq/customer/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          });

// AFTER:
const getData = async (locale: string, pageType: PageType) => {
  try {
    const endpoint =
      pageType === PageType.Business || pageType === PageType.Professional
        ? 'account/faq/vendor/list'
        : 'account/faq/customer/list';
    const res = await fetch(`${Constants.BASE_URL}${endpoint}`, {
      cache: 'no-store',
      headers: { 'Content-Language': locale },
    });
```

If `PageType` is an enum, add `Professional = 'Professional'` to it. If the pageType is compared as a string, add the string comparison.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/QASection/QASection.tsx
git commit -m "fix: map Professional FAQ to vendor endpoint instead of customer fallback"
```

---

### Task 6: Fix footer links and facebook_url

**Files:**
- Modify: `src/components/footer/Footer.tsx:100`
- Modify: `src/lib/constants/shared/footerData.ts:66`

- [ ] **Step 1: Fix logo link in Footer.tsx**

Line 100:
```tsx
// BEFORE:
<Link href={localePath('/business', locale)} className="mb-6 opacity-60">

// AFTER:
<Link href={localePath('/', locale)} className="mb-6 opacity-60">
```

- [ ] **Step 2: Fix facebook_url in footerData.ts**

Line 66 (English) and line 113 (Arabic):
```tsx
// BEFORE (both en and ar sections):
facebook_url: 'https://www.threads.net/@thedaisy.app',

// AFTER (both en and ar sections):
facebook_url: 'https://www.facebook.com/thedaisy.app',
```

Note: Verify the actual Facebook URL with the user if unsure. Fix both the English (line 66) and Arabic (line 113) sections.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer/Footer.tsx src/lib/constants/shared/footerData.ts
git commit -m "fix: footer logo links to root, fix facebook_url pointing to Threads"
```

---

### Task 7: Remove SearchAction from schemas

**Files:**
- Modify: `src/components/seo/OrganizationSchema.tsx:29-36`
- Modify: `src/components/seo/WebSiteSchema.tsx:9-17`

- [ ] **Step 1: Remove potentialAction from OrganizationSchema.tsx**

Remove lines 29-36 (the entire `potentialAction` block):
```tsx
// REMOVE:
potentialAction: {
  '@type': 'SearchAction',
  target: {
    '@type': 'EntryPoint',
    urlTemplate: 'https://www.jointhedaisy.com/search?q={search_term_string}',
  },
  'query-input': 'required name=search_term_string',
},
```

- [ ] **Step 2: Remove potentialAction from WebSiteSchema.tsx**

Remove lines 9-17 (the entire `potentialAction` block):
```tsx
// REMOVE:
potentialAction: {
  '@type': 'SearchAction',
  target: {
    '@type': 'EntryPoint',
    urlTemplate:
      'https://www.jointhedaisy.com/search?q={search_term_string}',
  },
  'query-input': 'required name=search_term_string',
},
```

- [ ] **Step 3: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/components/seo/OrganizationSchema.tsx src/components/seo/WebSiteSchema.tsx
git commit -m "fix: remove SearchAction schema referencing non-existent /search route"
```

---

### Task 8: Self-host OG image

**Files:**
- Create: `public/images/og/og-default.jpg`
- Modify: All files referencing `https://i.imgur.com/MNoL6BE.jpeg` (51 files per grep)

- [ ] **Step 1: Download the Imgur image to public/**

```bash
mkdir -p public/images/og
curl -L -o public/images/og/og-default.jpg "https://i.imgur.com/MNoL6BE.jpeg"
```

- [ ] **Step 2: Find all references**

Run: `grep -r "imgur.com" src/ --include="*.tsx" --include="*.ts" -l`

This should return ~51 files.

- [ ] **Step 3: Replace all Imgur references**

Use a global find-and-replace across the codebase:
```bash
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|https://i.imgur.com/MNoL6BE.jpeg|/images/og/og-default.jpg|g' {} +
```

- [ ] **Step 4: Verify no Imgur references remain**

Run: `grep -r "imgur.com" src/ --include="*.tsx" --include="*.ts" -l`
Expected: No results.

- [ ] **Step 5: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 6: Commit**

```bash
git add public/images/og/og-default.jpg
git add -u src/
git commit -m "fix: self-host OG image, replace all Imgur references"
```

---

## Phase 2 — Shared Infrastructure

### Task 9: Change header CTA to "Start Free Trial"

**Files:**
- Modify: `src/lib/constants/shared/headerData.ts:27,88`

- [ ] **Step 1: Update English text**

Line 27:
```tsx
// BEFORE:
getTheApp: 'Get The App',

// AFTER:
getTheApp: 'Start Free Trial',
```

- [ ] **Step 2: Update Arabic text**

Line 88:
```tsx
// BEFORE:
getTheApp: 'حمل التطبيق',

// AFTER:
getTheApp: 'ابدأ تجربتك المجانية',
```

- [ ] **Step 3: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants/shared/headerData.ts
git commit -m "feat: change header CTA from 'Get The App' to 'Start Free Trial'"
```

---

### Task 10: Move DaysiMission to About Us page

**Files:**
- Modify: `src/app/[locale]/business/BusinessClient.tsx`
- Modify: `src/app/[locale]/professional/ProfessionalClient.tsx`
- Modify: `src/app/[locale]/about/AboutClient.tsx`

- [ ] **Step 1: Remove DaysiMission from BusinessClient.tsx**

Remove the `DaysiMission` dynamic import and its render call (`<DaysiMission />`).

- [ ] **Step 2: Remove DaysiMission from ProfessionalClient.tsx**

Remove the `DaysiMission` dynamic import and its render call (`<DaysiMission />`).

- [ ] **Step 3: Read AboutClient.tsx to understand its current structure**

Read the file to see where DaysiMission should be placed (after existing content).

- [ ] **Step 4: Add DaysiMission to AboutClient.tsx**

`AboutClient.tsx` uses direct imports (not `dynamic()`). Add a direct import and render after existing content:

```tsx
import { DaysiMission } from '@/components/businessPage/DaysiMission';
```

Add `<DaysiMission />` after the last existing section (after `<OurValue />`).

- [ ] **Step 5: Update existing tests**

In `src/app/[locale]/business/__tests__/page.test.tsx`, remove the `DaysiMission` mock and the assertion checking for `data-testid="daisy-mission"`.

In `src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx`, remove the `DaysiMission` mock and the assertion checking for `data-testid="daisy-mission"`.

- [ ] **Step 6: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 7: Commit**

```bash
git add src/app/[locale]/business/BusinessClient.tsx \
  src/app/[locale]/professional/ProfessionalClient.tsx \
  src/app/[locale]/about/AboutClient.tsx \
  src/app/[locale]/business/__tests__/page.test.tsx \
  src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx
git commit -m "feat: move DaysiMission section from landing pages to About Us page"
```

---

### Task 11: Context-aware form defaults

**Files:**
- Modify: `src/components/businessPage/BecomeFormPartner.tsx`
- Modify: `src/components/formBusiness/FormBusiness.tsx`
- Modify: `src/app/[locale]/business/BusinessClient.tsx`
- Modify: `src/app/[locale]/professional/ProfessionalClient.tsx`

- [ ] **Step 1: Add defaultType prop to BecomeFormPartner**

Read `BecomeFormPartner.tsx` to understand its current props, then add `defaultType`:

```tsx
// Add to the component's props interface (or add one):
interface BecomeFormPartnerProps {
  defaultType?: 'business' | 'freelance';
}

export const BecomeFormPartner = ({ defaultType }: BecomeFormPartnerProps) => {
  // ... pass defaultType to ProfileForm
  return (
    // ...
    <ProfileForm defaultType={defaultType} />
    // ...
  );
};
```

- [ ] **Step 2: Add defaultType prop to ProfileForm**

In `FormBusiness.tsx`, update the component to accept and use `defaultType`:

```tsx
interface ProfileFormProps {
  defaultType?: 'business' | 'freelance';
}

export const ProfileForm = ({ defaultType }: ProfileFormProps) => {
  // Change line 41 from:
  // const [business_type, setBusinessType] = useState(false);
  // To:
  const [business_type, setBusinessType] = useState(defaultType === 'business');

  // Derive whether to show the toggle
  const showToggle = defaultType !== 'freelance';
```

- [ ] **Step 3: Conditionally hide the toggle on professional page**

Wrap the toggle section (lines 222-233 approximately) in a conditional:

```tsx
{showToggle && (
  <div className="w-full mt-6">
    <p className="text-[#172524] ltr:font-montserrat font-semibold mb-2">
      {textForm?.serviceProvidor}
    </p>
    <ToggleButtonForm
      firstValue={textForm?.serviceProvidorValue[0]}
      secondValue={textForm?.serviceProvidorValue[1]}
      homeService={business_type}
      setHomeService={setBusinessType}
      setContent={setContentChange}
      name="serviceProvidorType"
    />
  </div>
)}
```

- [ ] **Step 4: Pass defaultType from landing pages**

In `BusinessClient.tsx`:
```tsx
<BecomeFormPartner defaultType="business" />
```

In `ProfessionalClient.tsx`:
```tsx
<BecomeFormPartner defaultType="freelance" />
```

- [ ] **Step 5: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 6: Commit**

```bash
git add src/components/businessPage/BecomeFormPartner.tsx \
  src/components/formBusiness/FormBusiness.tsx \
  src/app/[locale]/business/BusinessClient.tsx \
  src/app/[locale]/professional/ProfessionalClient.tsx
git commit -m "feat: context-aware form defaults per landing page persona"
```

---

## Phase 3 — New Content Sections

### Task 12: Add hero data to page data files

**Files:**
- Modify: `src/lib/constants/pages/businessPage.ts`
- Modify: `src/lib/constants/pages/professionalPage.ts`
- Modify: `src/lib/constants/pages/scrollSections.types.ts`

- [ ] **Step 1: Extend the LandingPageContent type**

In `scrollSections.types.ts`, add the hero type to `LandingPageContent`:

```tsx
export interface HeroData {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  answerBlock?: {
    question: string;
    answer: string;
  };
}

export interface LandingPageContent {
  titleFraque: string;
  growth: GrowthData;
  scrollSections: LocalScrollSection[];
  hero?: HeroData;  // Optional — added in this task, data follows
}
```

- [ ] **Step 2: Add hero data to businessPage.ts**

Add `hero` key to the English data:
```tsx
hero: {
  categoryLabel: 'FOR BUSINESS OWNERS',
  headline: 'Grow Your Salon with AI-Powered Everything',
  subHeadline: 'Replace 5+ tools with one platform. AI receptionist, customer acquisition, booking, payments, and marketing — all with your brand, your way.',
  ctaText: 'Start Free Trial',
  ctaLink: '/get-the-app',
  answerBlock: {
    question: 'What is The Daisy for salons?',
    answer: 'The Daisy is an AI-powered beauty business platform that combines booking management, customer acquisition, payments, staff scheduling, and marketing into one system. It replaces 5+ separate tools with a single bilingual (Arabic/English) platform featuring a 24/7 AI receptionist.',
  },
},
```

Add equivalent Arabic hero data in the `ar` section.

- [ ] **Step 3: Add hero data to professionalPage.ts**

Add `hero` key to the English data:
```tsx
hero: {
  categoryLabel: 'FOR BEAUTY PROFESSIONALS',
  headline: 'Your Career, Your Schedule, Your Clients',
  subHeadline: 'Manage bookings, build your client base, and track your earnings — all from one app. Flexible scheduling with 24/7 AI support.',
  ctaText: 'Start Free Trial',
  ctaLink: '/get-the-app',
  answerBlock: {
    question: 'What is The Daisy for beauty professionals?',
    answer: 'The Daisy is an all-in-one app for beauty and wellness professionals to manage bookings, build a client base, track earnings, and grow their career. It features flexible scheduling, 24/7 AI-powered booking, and bilingual Arabic/English support.',
  },
},
```

Add equivalent Arabic hero data.

- [ ] **Step 4: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants/pages/scrollSections.types.ts \
  src/lib/constants/pages/businessPage.ts \
  src/lib/constants/pages/professionalPage.ts
git commit -m "feat: add hero content data for business and professional landing pages"
```

---

### Task 13: Create LandingHero component

**Files:**
- Create: `src/components/shared/LandingHero.tsx`
- Create: `src/components/shared/__tests__/LandingHero.test.tsx`

- [ ] **Step 1: Write the test**

```tsx
// src/components/shared/__tests__/LandingHero.test.tsx
import { render, screen } from '@testing-library/react';
import { LandingHero } from '../LandingHero';

describe('LandingHero', () => {
  const defaultProps = {
    categoryLabel: 'FOR BUSINESS OWNERS',
    headline: 'Test Headline',
    subHeadline: 'Test sub-headline text',
    ctaText: 'Start Free Trial',
    ctaLink: '/get-the-app',
  };

  it('renders the headline as h1', () => {
    render(<LandingHero {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test Headline');
  });

  it('renders category label', () => {
    render(<LandingHero {...defaultProps} />);
    expect(screen.getByText('FOR BUSINESS OWNERS')).toBeInTheDocument();
  });

  it('renders CTA link', () => {
    render(<LandingHero {...defaultProps} />);
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/get-the-app');
  });

  it('renders answer block when provided', () => {
    render(
      <LandingHero
        {...defaultProps}
        answerBlock={{
          question: 'What is The Daisy?',
          answer: 'An AI-powered platform.',
        }}
      />,
    );
    expect(screen.getByText('What is The Daisy?')).toBeInTheDocument();
    expect(screen.getByText('An AI-powered platform.')).toBeInTheDocument();
  });

  it('does not render answer block when not provided', () => {
    render(<LandingHero {...defaultProps} />);
    expect(screen.queryByTestId('geo-answer')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest "LandingHero" --no-coverage`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement LandingHero component**

```tsx
// src/components/shared/LandingHero.tsx
import Link from 'next/link';
import { AnswerBlock } from '@/components/geo/AnswerBlock';

interface LandingHeroProps {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  answerBlock?: {
    question: string;
    answer: string;
  };
}

export const LandingHero = ({
  categoryLabel,
  headline,
  subHeadline,
  ctaText,
  ctaLink,
  answerBlock,
}: LandingHeroProps) => {
  return (
    <section className="w-full bg-primary pt-32 pb-16 md:pt-40 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-[#A67F6B] uppercase mb-4">
          {categoryLabel}
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-[#B0C4C3] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-[#A67F6B] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#956F5E] transition-colors"
        >
          {ctaText}
        </Link>
        {answerBlock && (
          <div className="mt-12 text-left max-w-2xl mx-auto bg-white/10 rounded-xl p-6" data-testid="geo-answer">
            <AnswerBlock
              question={answerBlock.question}
              answer={answerBlock.answer}
              as="h3"
            />
          </div>
        )}
      </div>
    </section>
  );
};
```

Note: Styling should match the project's design system (check `design-guide.md` memory). The colors used above (`bg-primary`, `#A67F6B`, `#B0C4C3`) align with the existing Daisy palette. Adjust after visual review.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx jest "LandingHero" --no-coverage`
Expected: PASS — all 5 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/shared/LandingHero.tsx \
  src/components/shared/__tests__/LandingHero.test.tsx
git commit -m "feat: create LandingHero server component with GEO answer block"
```

---

### Task 14: Add platformStrengths data to page data files

**Files:**
- Modify: `src/lib/constants/pages/scrollSections.types.ts`
- Modify: `src/lib/constants/pages/businessPage.ts`
- Modify: `src/lib/constants/pages/professionalPage.ts`

- [ ] **Step 1: Add PlatformStrengthsData type**

In `scrollSections.types.ts`:

```tsx
export interface PlatformStrengthsData {
  headline: string;
  subHeadline: string;
  capabilities: Array<{
    label: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    context: string;
    source?: string;
  }>;
}

// Update LandingPageContent:
export interface LandingPageContent {
  titleFraque: string;
  growth: GrowthData;
  scrollSections: LocalScrollSection[];
  hero?: HeroData;
  platformStrengths?: PlatformStrengthsData;  // Optional until data is added
}
```

Note: Icons are handled in the component, not the data. The `PlatformStrengths` component will map capability labels to Lucide icons using a lookup object. This avoids storing React components in static data files while still rendering icons per the spec wireframe.

- [ ] **Step 2: Add platformStrengths data to businessPage.ts**

```tsx
platformStrengths: {
  headline: 'One Platform Replaces Your Entire Tool Stack',
  subHeadline: 'Stop paying for 5+ separate tools. Daisy combines everything you need to run and grow your beauty business.',
  capabilities: [
    { label: 'AI Receptionist', description: '24/7 automated booking, payments, and customer service' },
    { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
    { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
    { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
    { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
    { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
    { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
    { label: 'Brand Control', description: 'White-label everything with your brand' },
  ],
  stats: [
    { value: '8', context: 'tools in one platform' },
    { value: '24/7', context: 'AI receptionist' },
    { value: '2', context: 'languages — Arabic & English' },
  ],
},
```

Add equivalent Arabic data.

- [ ] **Step 3: Add platformStrengths data to professionalPage.ts**

```tsx
platformStrengths: {
  headline: 'Everything You Need in One App',
  subHeadline: 'No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together.',
  capabilities: [
    { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
    { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
    { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
    { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
    { label: 'Smart Booking', description: 'AI handles bookings even when you are busy' },
    { label: 'Notifications', description: 'Stay on top of appointments and messages' },
    { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
    { label: 'Portfolio', description: 'Display your best work to potential clients' },
  ],
  stats: [
    { value: '1', context: 'app for everything' },
    { value: '24/7', context: 'AI-powered booking' },
    { value: '2', context: 'languages — Arabic & English' },
  ],
},
```

Add equivalent Arabic data.

- [ ] **Step 4: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants/pages/scrollSections.types.ts \
  src/lib/constants/pages/businessPage.ts \
  src/lib/constants/pages/professionalPage.ts
git commit -m "feat: add platformStrengths content data for both landing pages"
```

---

### Task 15: Create PlatformStrengths component

**Files:**
- Create: `src/components/shared/PlatformStrengths.tsx`
- Create: `src/components/shared/__tests__/PlatformStrengths.test.tsx`

- [ ] **Step 1: Write the test**

```tsx
// src/components/shared/__tests__/PlatformStrengths.test.tsx
import { render, screen } from '@testing-library/react';
import { PlatformStrengths } from '../PlatformStrengths';

describe('PlatformStrengths', () => {
  const defaultProps = {
    headline: 'One Platform',
    subHeadline: 'Replace your tools',
    capabilities: [
      { label: 'Booking', description: 'Smart scheduling' },
      { label: 'Payments', description: 'Seamless transactions' },
    ],
    stats: [
      { value: '8', context: 'tools in one' },
      { value: '24/7', context: 'AI support' },
    ],
  };

  it('renders headline as h2', () => {
    render(<PlatformStrengths {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('One Platform');
  });

  it('renders all capabilities', () => {
    render(<PlatformStrengths {...defaultProps} />);
    expect(screen.getByText('Booking')).toBeInTheDocument();
    expect(screen.getByText('Payments')).toBeInTheDocument();
  });

  it('renders stats with StatisticHighlight semantic markup', () => {
    render(<PlatformStrengths {...defaultProps} />);
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('tools in one')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest "PlatformStrengths" --no-coverage`
Expected: FAIL

- [ ] **Step 3: Implement PlatformStrengths component**

```tsx
// src/components/shared/PlatformStrengths.tsx
import { StatisticHighlight } from '@/components/geo/StatisticHighlight';

interface PlatformStrengthsProps {
  headline: string;
  subHeadline: string;
  capabilities: Array<{
    label: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    context: string;
    source?: string;
  }>;
}

// Icon mapping — maps capability labels to Lucide icons
const iconMap: Record<string, ReactNode> = {
  'AI Receptionist': <Bot className="w-6 h-6" />,
  'Smart Booking': <CalendarCheck className="w-6 h-6" />,
  'Customer Acquisition': <Users className="w-6 h-6" />,
  'Payments & Invoicing': <CreditCard className="w-6 h-6" />,
  'Staff Management': <UserCog className="w-6 h-6" />,
  'Marketing Engine': <Megaphone className="w-6 h-6" />,
  'Analytics Dashboard': <BarChart3 className="w-6 h-6" />,
  'Brand Control': <Palette className="w-6 h-6" />,
  'Flexible Scheduling': <Clock className="w-6 h-6" />,
  'Client Management': <Users className="w-6 h-6" />,
  'Earnings Tracker': <TrendingUp className="w-6 h-6" />,
  'Professional Profile': <UserCircle className="w-6 h-6" />,
  'Notifications': <Bell className="w-6 h-6" />,
  'Calendar Sync': <CalendarSync className="w-6 h-6" />,
  'Portfolio': <Image className="w-6 h-6" />,
};

export const PlatformStrengths = ({
  headline,
  subHeadline,
  capabilities,
  stats,
}: PlatformStrengthsProps) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-4">
            {headline}
          </h2>
          <p className="text-[#455150] text-lg md:text-xl max-w-2xl mx-auto">
            {subHeadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="p-6 rounded-xl bg-[#F9FBFB] border border-[#E8E9E9]"
            >
              <div className="text-[#A67F6B] mb-3">
                {iconMap[cap.label] ?? <Box className="w-6 h-6" />}
              </div>
              <h3 className="text-[#172524] font-semibold text-lg mb-2">
                {cap.label}
              </h3>
              <p className="text-[#586968] text-sm">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div
              key={stat.context}
              className="text-center px-6 py-4 rounded-lg bg-primary/5"
            >
              <StatisticHighlight
                value={stat.value}
                context={stat.context}
                source={stat.source}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx jest "PlatformStrengths" --no-coverage`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/shared/PlatformStrengths.tsx \
  src/components/shared/__tests__/PlatformStrengths.test.tsx
git commit -m "feat: create PlatformStrengths component with StatisticHighlight"
```

---

### Task 16: Wire up LandingHero and PlatformStrengths in page.tsx files

**Files:**
- Modify: `src/app/[locale]/business/page.tsx`
- Modify: `src/app/[locale]/professional/page.tsx`

- [ ] **Step 1: Update business page.tsx**

Add imports and render LandingHero before BusinessClient. `LandingHero` renders in the server `page.tsx` for true SSR of the H1 and hero content. Preserve all existing WebPageSchema/PageBreadcrumbSchema props.

```tsx
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';

export default function BusinessPage({ params }: { params: { locale: string } }) {
  const pageData = t(businessPageData, params.locale);

  return (
    <>
      {/* Preserve existing WebPageSchema and PageBreadcrumbSchema with their current props */}
      <WebPageSchema
        title="AI-Powered Salon & Spa Management Platform | The Daisy"
        description="..."
        url="https://www.jointhedaisy.com/business"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'For Business', url: 'https://www.jointhedaisy.com/business' }]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          answerBlock={pageData.hero.answerBlock}
        />
      )}
      <BusinessClient lang={params.locale} />
    </>
  );
}
```

Note: `PlatformStrengths` is added inside `BusinessClient.tsx` (not `page.tsx`) as a `dynamic()` import — this keeps it in the correct visual position (after scroll sections, before GrowthSection) and follows the existing lazy-load pattern for below-fold components. See Step 3.

- [ ] **Step 2: Update professional page.tsx**

Same pattern:

```tsx
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';

export default function ProfessionalPage({ params }: { params: { locale: string } }) {
  const pageData = t(professionalPageData, params.locale);

  return (
    <>
      {/* Preserve existing WebPageSchema and PageBreadcrumbSchema with their current props */}
      <WebPageSchema
        title="Beauty Professional App — Manage Bookings & Grow Clients | The Daisy"
        description="..."
        url="https://www.jointhedaisy.com/professional"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'For Professionals', url: 'https://www.jointhedaisy.com/professional' }]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          answerBlock={pageData.hero.answerBlock}
        />
      )}
      <ProfessionalClient lang={params.locale} />
    </>
  );
}
```

- [ ] **Step 3: Add PlatformStrengths inside client wrappers**

Add `PlatformStrengths` as a `dynamic()` import in both `BusinessClient.tsx` and `ProfessionalClient.tsx`, placed after `MobileScrollSection` and before `GrowthSection` (replacing DaysiMission's former position):

In `BusinessClient.tsx`:
```tsx
const PlatformStrengths = dynamic(
  () => import('@/components/shared/PlatformStrengths').then((mod) => mod.PlatformStrengths),
);

// In the return, after MobileScrollSection:
<LockerContainer listInfo={dataScroll} />
<MobileScrollSection dataScroll={dataScroll} />
{pageData.platformStrengths && (
  <PlatformStrengths
    headline={pageData.platformStrengths.headline}
    subHeadline={pageData.platformStrengths.subHeadline}
    capabilities={pageData.platformStrengths.capabilities}
    stats={pageData.platformStrengths.stats}
  />
)}
<GrowthSection ... />
```

Same pattern in `ProfessionalClient.tsx`.

Note: While this renders PlatformStrengths inside the client boundary (so it's not a true server component), Next.js `dynamic()` still prerenders the HTML on the server. The content appears in the initial HTML response. This is the pragmatic tradeoff for correct visual ordering.

- [ ] **Step 4: Update existing tests with mocks for new components**

In `src/app/[locale]/business/__tests__/page.test.tsx`, add mocks:
```tsx
jest.mock('@/components/shared/LandingHero', () => ({
  LandingHero: () => <div data-testid="landing-hero">Hero</div>,
}));

jest.mock('@/components/shared/PlatformStrengths', () => ({
  PlatformStrengths: () => <div data-testid="platform-strengths">Strengths</div>,
}));
```

Add corresponding assertions in the test:
```tsx
expect(getByTestId('landing-hero')).toBeInTheDocument();
```

Do the same for `src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx` (add PlatformStrengths mock and assertion).

- [ ] **Step 5: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 6: Run existing tests**

Run: `npx jest "business/__tests__/page" "professional/__tests__/ProfessionalClient" --no-coverage`
Expected: All tests pass.

- [ ] **Step 7: Commit**

```bash
git add src/app/[locale]/business/page.tsx \
  src/app/[locale]/professional/page.tsx \
  src/app/[locale]/business/BusinessClient.tsx \
  src/app/[locale]/professional/ProfessionalClient.tsx \
  src/app/[locale]/business/__tests__/page.test.tsx \
  src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx
git commit -m "feat: wire up LandingHero and PlatformStrengths on both landing pages"
```

---

## Phase 4 — SEO/GEO Hardening

### Task 17: Add FaqSchema and static FAQ fallback

**Files:**
- Modify: `src/components/QASection/QASection.tsx`
- Modify: `src/lib/constants/pages/businessPage.ts`
- Modify: `src/lib/constants/pages/professionalPage.ts`
- Modify: `src/lib/constants/pages/scrollSections.types.ts`

- [ ] **Step 1: Add fallbackFaqs type and data**

In `scrollSections.types.ts`, add:
```tsx
export interface FaqItem {
  question: string;
  answer: string;
}

// Update LandingPageContent:
export interface LandingPageContent {
  // ... existing fields
  fallbackFaqs?: FaqItem[];  // Optional until data is added
}
```

- [ ] **Step 2: Add static FAQ data to businessPage.ts**

```tsx
fallbackFaqs: [
  { question: 'How much does The Daisy cost?', answer: 'The Daisy offers flexible pricing tiers starting with a 14-day free trial. Visit our pricing page for detailed plan comparisons.' },
  { question: 'Can I migrate from my current booking system?', answer: 'Yes. Our onboarding team helps you migrate your client data, booking history, and preferences from your existing system at no extra cost.' },
  { question: 'Does The Daisy work in Arabic?', answer: 'Yes. The Daisy is fully bilingual with complete Arabic and English support, including RTL interface, Arabic customer communications, and bilingual AI receptionist.' },
  { question: 'What is the AI receptionist?', answer: 'The AI receptionist handles customer inquiries, booking requests, and payments 24/7 — even outside business hours. It speaks both Arabic and English and learns your business preferences over time.' },
  { question: 'Is there a free trial?', answer: 'Yes. Every new business gets a 14-day free trial with full access to all features. No credit card required to start.' },
],
```

Add Arabic equivalents.

- [ ] **Step 3: Add static FAQ data to professionalPage.ts**

```tsx
fallbackFaqs: [
  { question: 'How do I join The Daisy as a professional?', answer: 'Download The Daisy app, create your professional profile, set your services and availability, and start accepting bookings.' },
  { question: 'Can I set my own schedule?', answer: 'Yes. You have full control over your availability, working hours, break times, and can block time for personal appointments.' },
  { question: 'How does payment work?', answer: 'Your earnings are tracked in real-time in the app. Payments are processed securely and deposited to your account on a regular schedule.' },
  { question: 'Do I need to work at a salon to join?', answer: 'No. Freelance professionals, independent stylists, and mobile service providers are all welcome on The Daisy.' },
  { question: 'Is The Daisy available in Arabic?', answer: 'Yes. The Daisy is fully bilingual with complete Arabic and English support throughout the app.' },
],
```

Add Arabic equivalents.

- [ ] **Step 4: Update QASection to accept fallback FAQs and render FaqSchema**

Add a `fallbackFaqs` prop to `QASection`. If the API call fails or returns empty, render the static FAQs. Import and render `FaqSchema`:

```tsx
import { FaqSchema } from '@/components/seo/FaqSchema';

// In the component, after FAQ data resolves:
{faqItems.length > 0 && <FaqSchema faqs={faqItems} />}
```

The fallback logic:
```tsx
const items = apiData.length > 0 ? apiData : fallbackFaqs;
```

- [ ] **Step 5: Pass fallbackFaqs from landing pages**

In `BusinessClient.tsx`:
```tsx
<QASection pageType="Business" titleFraque={pageData.titleFraque} fallbackFaqs={pageData.fallbackFaqs} />
```

In `ProfessionalClient.tsx`:
```tsx
<QASection pageType="Professional" titleFraque={pageData.titleFraque} fallbackFaqs={pageData.fallbackFaqs} />
```

- [ ] **Step 6: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 7: Commit**

```bash
git add src/components/QASection/QASection.tsx \
  src/lib/constants/pages/scrollSections.types.ts \
  src/lib/constants/pages/businessPage.ts \
  src/lib/constants/pages/professionalPage.ts \
  src/app/[locale]/business/BusinessClient.tsx \
  src/app/[locale]/professional/ProfessionalClient.tsx
git commit -m "feat: add FaqSchema structured data and static FAQ fallback"
```

---

### Task 18: Update metadata titles and descriptions

**Files:**
- Modify: `src/app/[locale]/business/page.tsx`
- Modify: `src/app/[locale]/professional/page.tsx`

- [ ] **Step 1: Update business page metadata**

In `generateMetadata`:
```tsx
title: 'AI-Powered Salon & Spa Management Platform | The Daisy',
description: 'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing — all in one platform. Start your 14-day free trial.',
```

Update the `openGraph` and `twitter` titles/descriptions to match.

- [ ] **Step 2: Update professional page metadata**

```tsx
title: 'Beauty Professional App — Manage Bookings & Grow Clients | The Daisy',
description: 'Join The Daisy as a beauty professional. Manage bookings, track earnings, build your client base, and grow your career with flexible scheduling and 24/7 AI support.',
```

Update OG and Twitter to match.

- [ ] **Step 3: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/business/page.tsx \
  src/app/[locale]/professional/page.tsx
git commit -m "feat: update metadata titles to include AI differentiator and value props"
```

---

## Verification

### Task 19: Final build and test verification

- [ ] **Step 1: Run full build**

Run: `npx next build 2>&1 | tail -20`
Expected: Build passes. Both `/en/business` and `/en/professional` appear as SSG routes.

- [ ] **Step 2: Run all tests**

Run: `npx jest --no-coverage 2>&1 | tail -10`
Expected: No new test failures (pre-existing failures acceptable).

- [ ] **Step 3: Visual smoke test**

Run: `npx next dev` and manually check:
- `/en/business` — hero section visible, scroll walkthrough works, PlatformStrengths visible, form defaults to Business toggle
- `/en/professional` — hero section visible, scroll walkthrough works, PlatformStrengths visible, form has no toggle (freelance fields only)
- `/en/about` — DaysiMission section visible
- Header shows "Start Free Trial" button
- Footer logo links to `/`
- View page source on both landing pages — confirm hero H1 text is in the initial HTML

- [ ] **Step 4: Final commit if any fixes needed**

Fix any visual or rendering issues discovered during smoke testing.
