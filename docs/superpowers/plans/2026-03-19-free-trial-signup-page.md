# Free Trial Signup Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `/start-free-trial/business` and `/start-free-trial/professional` pages that capture lead info and direct users to download the app, replacing the current "Start Free Trial" → app store mismatch.

**Architecture:** Dynamic route `[locale]/start-free-trial/[type]/page.tsx` with server-rendered hero + metadata, and a client component wrapping the existing `ProfileForm` with a success state. All site-wide "Start Free Trial" CTAs update to link here.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, existing ProfileForm + app download button components.

**Spec:** `docs/superpowers/specs/2026-03-19-free-trial-signup-page-design.md`

---

## Task 1: Add `onSuccess` and `buttonText` props to ProfileForm

**Files:**
- Modify: `src/components/formBusiness/FormBusiness.tsx`

- [ ] **Step 1: Update the ProfileFormProps interface**

In `FormBusiness.tsx`, find the interface at line 36-38:

```tsx
// BEFORE:
interface ProfileFormProps {
  defaultType?: 'business' | 'freelance';
}

// AFTER:
interface ProfileFormProps {
  defaultType?: 'business' | 'freelance';
  buttonText?: string;
  onSuccess?: () => void;
}
```

- [ ] **Step 2: Update the component signature to accept new props**

```tsx
// BEFORE:
export const ProfileForm = ({ defaultType }: ProfileFormProps) => {

// AFTER:
export const ProfileForm = ({ defaultType, buttonText, onSuccess }: ProfileFormProps) => {
```

- [ ] **Step 3: Call onSuccess after successful submission**

Find the success handling (around line 134-143). Add `onSuccess?.()` after `form.reset()`:

```tsx
const data = await response.json();
toast.success('Sent Successfully!');
setPhoneNumber('');
form.reset();
onSuccess?.();
```

- [ ] **Step 4: Use buttonText prop for submit button**

Find the submit button (around line 505-508). Add the override:

```tsx
// BEFORE:
{isSubmit ? 'Sending...' : `${textForm?.buttonText}`}

// AFTER:
{isSubmit ? 'Sending...' : buttonText || `${textForm?.buttonText}`}
```

- [ ] **Step 5: Verify build and tests pass**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest "FormBusiness\|formBusiness" --no-coverage
```

- [ ] **Step 6: Commit**

```bash
git add "src/components/formBusiness/FormBusiness.tsx"
git commit -m "feat: add onSuccess callback and buttonText override to ProfileForm"
```

---

## Task 2: Create static data for free trial pages

**Files:**
- Create: `src/lib/constants/pages/startFreeTrialData.ts`

- [ ] **Step 1: Create the data file**

```tsx
// src/lib/constants/pages/startFreeTrialData.ts
import { I18nContent } from '@/lib/constants/i18n';

export interface StartFreeTrialContent {
  hero: {
    headline: string;
    subHeadline: string;
  };
  form: {
    buttonText: string;
  };
  success: {
    title: string;
    body: string;
  };
}

export type TrialType = 'business' | 'professional';

export const startFreeTrialData: Record<TrialType, I18nContent<StartFreeTrialContent>> = {
  business: {
    en: {
      hero: {
        headline: 'Start Your 14-Day Free Trial',
        subHeadline: 'Set up your salon, spa, or clinic on The Daisy in minutes. Full access to all features — no credit card required.',
      },
      form: {
        buttonText: 'Start Your Free Trial',
      },
      success: {
        title: 'Welcome to The Daisy!',
        body: 'Our team will reach out within 24 hours to help you get set up. In the meantime, download the app to get a head start.',
      },
    },
    ar: {
      hero: {
        headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        subHeadline: 'أعد تشغيل صالونك أو سبا أو عيادتك على ذا ديزي في دقائق. وصول كامل لجميع الميزات — لا حاجة لبطاقة ائتمان.',
      },
      form: {
        buttonText: 'ابدأ تجربتك المجانية',
      },
      success: {
        title: '!مرحبًا بك في ذا ديزي',
        body: 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك في الإعداد. في هذه الأثناء، قم بتنزيل التطبيق للبدء مبكرًا.',
      },
    },
  },
  professional: {
    en: {
      hero: {
        headline: 'Start Your Free Trial',
        subHeadline: 'Create your professional profile and start accepting bookings. Free to join — no credit card required.',
      },
      form: {
        buttonText: 'Start Your Free Trial',
      },
      success: {
        title: 'Welcome to The Daisy!',
        body: 'Our team will reach out within 24 hours to help you get set up. In the meantime, download the app to get a head start.',
      },
    },
    ar: {
      hero: {
        headline: 'ابدأ تجربتك المجانية',
        subHeadline: 'أنشئ ملفك المهني وابدأ في قبول الحجوزات. الانضمام مجاني — لا حاجة لبطاقة ائتمان.',
      },
      form: {
        buttonText: 'ابدأ تجربتك المجانية',
      },
      success: {
        title: '!مرحبًا بك في ذا ديزي',
        body: 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك في الإعداد. في هذه الأثناء، قم بتنزيل التطبيق للبدء مبكرًا.',
      },
    },
  },
};
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 3: Commit**

```bash
git add "src/lib/constants/pages/startFreeTrialData.ts"
git commit -m "feat: add static content data for free trial signup pages"
```

---

## Task 3: Create the client component (form + success state)

**Files:**
- Create: `src/app/[locale]/start-free-trial/[type]/StartFreeTrialClient.tsx`

- [ ] **Step 1: Create the client component**

```tsx
// src/app/[locale]/start-free-trial/[type]/StartFreeTrialClient.tsx
'use client';
import { useState } from 'react';
import { ProfileForm } from '@/components/formBusiness/FormBusiness';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';
import { StartFreeTrialContent } from '@/lib/constants/pages/startFreeTrialData';

interface StartFreeTrialClientProps {
  data: StartFreeTrialContent;
  defaultType: 'business' | 'freelance';
}

export const StartFreeTrialClient = ({
  data,
  defaultType,
}: StartFreeTrialClientProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="bg-[#F8F5F3] py-16 md:py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-4">
            {data.success.title}
          </h2>
          <p className="text-[#455150] text-lg mb-8 max-w-md mx-auto">
            {data.success.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton />
            <PlayMarketButton />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F5F3] py-16 md:py-24 px-4">
      <div className="max-w-[860px] mx-auto">
        <ProfileForm
          defaultType={defaultType}
          buttonText={data.form.buttonText}
          onSuccess={() => setSubmitted(true)}
        />
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/start-free-trial/[type]/StartFreeTrialClient.tsx"
git commit -m "feat: create StartFreeTrialClient with form and success state"
```

---

## Task 4: Create the server page component

**Files:**
- Create: `src/app/[locale]/start-free-trial/[type]/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// src/app/[locale]/start-free-trial/[type]/page.tsx
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { localeAlternates } from '@/lib/utils/metadata';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { StartFreeTrialClient } from './StartFreeTrialClient';
import { startFreeTrialData, TrialType } from '@/lib/constants/pages/startFreeTrialData';
import { t } from '@/lib/constants/i18n';

const VALID_TYPES: TrialType[] = ['business', 'professional'];

const metadataByType: Record<TrialType, { en: { title: string; description: string } }> = {
  business: {
    en: {
      title: 'Start Your Free Trial — Salon, Spa & Clinic Management | The Daisy',
      description:
        'Set up your beauty business on The Daisy in minutes. 14-day free trial with full access to AI receptionist, booking, payments, marketing, and staff management. No credit card required.',
    },
  },
  professional: {
    en: {
      title: 'Start Your Free Trial — Beauty Professional App | The Daisy',
      description:
        'Create your professional profile on The Daisy and start accepting bookings. Free to join with flexible scheduling and 24/7 AI support.',
    },
  },
};

export function generateStaticParams() {
  return VALID_TYPES.map((type) => ({ type }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; type: string };
}): Metadata {
  const { locale, type } = params;
  const trialType = VALID_TYPES.includes(type as TrialType)
    ? (type as TrialType)
    : 'business';
  const meta = metadataByType[trialType].en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.jointhedaisy.com/${locale}/start-free-trial/${trialType}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy - Start Free Trial',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(`/start-free-trial/${trialType}`, locale),
  };
}

export default function StartFreeTrialPage({
  params,
}: {
  params: { locale: string; type: string };
}) {
  const { locale, type } = params;

  if (!VALID_TYPES.includes(type as TrialType)) {
    redirect(`/${locale}/start-free-trial/business`);
  }

  const trialType = type as TrialType;
  const data = t(startFreeTrialData[trialType], locale);
  const defaultType = trialType === 'business' ? 'business' : 'freelance';

  return (
    <>
      <WebPageSchema
        title={metadataByType[trialType].en.title}
        description={metadataByType[trialType].en.description}
        url={`https://www.jointhedaisy.com/start-free-trial/${trialType}`}
      />
      <PageBreadcrumbSchema
        items={[
          {
            name: trialType === 'business' ? 'For Business' : 'For Professionals',
            url: `https://www.jointhedaisy.com/${trialType}`,
          },
          {
            name: 'Start Free Trial',
            url: `https://www.jointhedaisy.com/start-free-trial/${trialType}`,
          },
        ]}
      />
      <section className="w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-[32px] leading-10 md:text-[48px] md:leading-[60px] font-semibold mb-6">
            {data.hero.headline}
          </h1>
          <p className="text-[#D5D9D9] ltr:font-montserrat text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {data.hero.subHeadline}
          </p>
        </div>
      </section>
      <StartFreeTrialClient data={data} defaultType={defaultType} />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep -E "start-free-trial|Error" | head -10
```

Expected: Routes `/en/start-free-trial/business` and `/en/start-free-trial/professional` appear as SSG.

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/start-free-trial/[type]/page.tsx"
git commit -m "feat: create free trial signup page with server-rendered hero and metadata"
```

---

## Task 5: Update all CTA links site-wide

**Files:**
- Modify: `src/lib/constants/pages/businessPage.ts`
- Modify: `src/lib/constants/pages/professionalPage.ts`
- Modify: `src/components/buttonApp/GetAppButton.tsx`

- [ ] **Step 1: Update business page CTA links**

In `businessPage.ts`, find and update these values in BOTH en and ar sections:

```tsx
// hero.ctaLink (en ~line 12, ar ~line 299):
ctaLink: '/start-free-trial/business',

// growth.buttonLink (en ~line 53, ar ~line 340):
buttonLink: '/start-free-trial/business',
```

- [ ] **Step 2: Update professional page CTA links**

In `professionalPage.ts`, same pattern:

```tsx
// hero.ctaLink (en ~line 12, ar ~line 299):
ctaLink: '/start-free-trial/professional',

// growth.buttonLink (en ~line 55, ar ~line 342):
buttonLink: '/start-free-trial/professional',
```

- [ ] **Step 3: Update header CTA link**

In `GetAppButton.tsx`, find line 33:

```tsx
// BEFORE:
<Link href={'/get-the-app'}>

// AFTER:
<Link href={'/start-free-trial/business'}>
```

- [ ] **Step 4: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest --no-coverage 2>&1 | grep -E "^Test Suites:|^Tests:"
```

- [ ] **Step 5: Commit**

```bash
git add "src/lib/constants/pages/businessPage.ts" \
  "src/lib/constants/pages/professionalPage.ts" \
  "src/components/buttonApp/GetAppButton.tsx"
git commit -m "feat: update all Start Free Trial CTAs to link to new signup pages"
```

---

## Task 6: Update ExperienceDaisy component

**Files:**
- Modify: `src/components/experienceDaisy/ExperienceDaisy.tsx`
- Modify: `src/app/[locale]/business/BusinessClient.tsx`
- Modify: `src/app/[locale]/professional/ProfessionalClient.tsx`

- [ ] **Step 1: Add ctaLink prop to ExperienceDaisy**

Read `ExperienceDaisy.tsx`. Add optional `ctaLink` and `ctaText` props. When `ctaLink` is provided, render a single CTA link button instead of the two app store buttons.

First, add `import Link from 'next/link';` at the top of the file (not currently imported).

```tsx
// Add to props interface:
interface ExperienceDaisyProps {
  pageType?: ExperienceDaisyPageType;
  ctaLink?: string;
  ctaText?: string;
}
```

Find the wrapping div that contains the app store buttons (around line 81-85):
```tsx
<div className="flex flex-col pb-16 md:w-[427px]">
```

Replace the buttons INSIDE this div with a conditional:

```tsx
<div className="flex flex-col pb-16 md:w-[427px]">
  {ctaLink ? (
    <Link
      href={ctaLink}
      className="inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent mt-8 text-center"
    >
      {ctaText || 'Start Your Free Trial'}
    </Link>
  ) : (
    <>
      <PlayMarketButton className="mb-6 mt-8" />
      <AppStoreButton />
    </>
  )}
</div>
```

Note: the wrapper `<div>` is preserved in both branches to maintain layout.
```

- [ ] **Step 2: Pass ctaLink from landing pages**

In `BusinessClient.tsx`:
```tsx
<ExperienceDaisy pageType="business" ctaLink="/start-free-trial/business" ctaText="Start Your Free Trial" />
```

In `ProfessionalClient.tsx`:
```tsx
<ExperienceDaisy pageType="professional" ctaLink="/start-free-trial/professional" ctaText="Start Your Free Trial" />
```

Note: The `ctaText` prop provides the button label instead of relying on `content.description` (which is "Download Now!" in the data). The `experienceDaisyData.ts` file does NOT need modification — the CTA text comes from the prop.

- [ ] **Step 3: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest "ExperienceDaisy" --no-coverage
```

- [ ] **Step 4: Commit**

```bash
git add "src/components/experienceDaisy/ExperienceDaisy.tsx" \
  "src/app/[locale]/business/BusinessClient.tsx" \
  "src/app/[locale]/professional/ProfessionalClient.tsx"
git commit -m "feat: add ctaLink prop to ExperienceDaisy, link to trial signup pages"
```

---

## Task 7: Add routes to sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add free trial routes**

Read `sitemap.ts`. Find where other high-priority pages are listed (business, professional, pricing). Add nearby:

```tsx
...localizedEntries('/start-free-trial/business', {
  lastModified: STATIC_CONTENT_DATE,
  changeFrequency: 'monthly',
  priority: 0.9,
}),
...localizedEntries('/start-free-trial/professional', {
  lastModified: STATIC_CONTENT_DATE,
  changeFrequency: 'monthly',
  priority: 0.9,
}),
```

Use whatever date constant the file uses for static pages (check existing entries).

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 3: Commit**

```bash
git add "src/app/sitemap.ts"
git commit -m "feat: add free trial signup pages to sitemap with high priority"
```

---

## Task 8: Write tests for the new page

**Files:**
- Create: `src/app/[locale]/start-free-trial/[type]/__tests__/page.test.tsx`

- [ ] **Step 1: Write tests**

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import StartFreeTrialPage from '../page';

// Mock dependencies
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
  usePathname: jest.fn(() => '/en/start-free-trial/business'),
  useRouter: jest.fn(() => ({ push: jest.fn(), replace: jest.fn(), prefetch: jest.fn() })),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt="" {...props} />,
}));

jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => null,
}));

jest.mock('@/components/seo/PageBreadcrumbSchema', () => ({
  PageBreadcrumbSchema: () => null,
}));

jest.mock('@/components/formBusiness/FormBusiness', () => ({
  ProfileForm: ({ buttonText }: { buttonText?: string }) => (
    <div data-testid="profile-form">{buttonText || 'Submit'}</div>
  ),
}));

jest.mock('@/components/buttonApp/AppStoreButton', () => ({
  AppStoreButton: () => <div data-testid="app-store">App Store</div>,
}));

jest.mock('@/components/buttonApp/PlayMarketButton', () => ({
  PlayMarketButton: () => <div data-testid="play-market">Play Market</div>,
}));

describe('StartFreeTrialPage', () => {
  it('renders business variant with correct headline', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'business' }} />,
    );
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toHaveTextContent('Start Your 14-Day Free Trial');
  });

  it('renders professional variant with correct headline', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'professional' }} />,
    );
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toHaveTextContent('Start Your Free Trial');
  });

  it('renders the profile form', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'business' }} />,
    );
    expect(screen.getByTestId('profile-form')).toBeInTheDocument();
    expect(screen.getByTestId('profile-form')).toHaveTextContent(
      'Start Your Free Trial',
    );
  });

  it('redirects invalid type to business', () => {
    const { redirect } = require('next/navigation');
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'invalid' }} />,
    );
    expect(redirect).toHaveBeenCalledWith('/en/start-free-trial/business');
  });
});
```

- [ ] **Step 2: Run tests**

```bash
npx jest "start-free-trial" --no-coverage
```

Expected: 4 tests pass.

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/start-free-trial/[type]/__tests__/page.test.tsx"
git commit -m "test: add tests for free trial signup page"
```

---

## Task 9: Final verification

- [ ] **Step 1: Run full build**

```bash
npx next build 2>&1 | tail -20
```

Expected: Both `/en/start-free-trial/business` and `/en/start-free-trial/professional` appear as SSG routes.

- [ ] **Step 2: Run full test suite**

```bash
npx jest --no-coverage 2>&1 | tail -5
```

Expected: All tests pass, no regressions.

- [ ] **Step 3: Visual smoke test**

Run `npx next dev` and check:
- `/en/start-free-trial/business` — hero says "Start Your 14-Day Free Trial", form shows business fields
- `/en/start-free-trial/professional` — hero says "Start Your Free Trial", form shows freelance fields only
- `/ar/start-free-trial/business` — Arabic hero and form
- Click "Start Free Trial" in the header — goes to `/start-free-trial/business`
- Business hero CTA → goes to `/start-free-trial/business`
- Professional hero CTA → goes to `/start-free-trial/professional`
- Submit the form — success state shows with app download buttons
- ExperienceDaisy section shows single CTA link (not app store buttons)
