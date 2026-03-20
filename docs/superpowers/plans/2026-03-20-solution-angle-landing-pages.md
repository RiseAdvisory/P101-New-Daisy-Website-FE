# Solution Angle Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 14 focused landing pages (7 selling angles x 2 personas) at `/solutions/[slug]/[persona]` using shared components and unique content per angle, with full story scroll, SEO schemas, and SSG.

**Architecture:** One dynamic route with a shared client wrapper (same pattern as BusinessClient.tsx). Each angle has its own data file containing both persona variants and both languages. All existing components are reused. The parent `/solutions/[slug]` route is updated to allow dynamic params so angle slugs pass through to the child `[persona]` route.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS. Reuses: LandingHero, LockerContainer, MobileScrollSection, InlineCTA, SocialProofBar, HowItWorks, PricingHook, PlatformStrengths, QASection, BecomeFormPartner.

**Spec:** `docs/superpowers/specs/2026-03-20-solution-angle-landing-pages-design.md`

---

## Task 1: Fix parent route and create infrastructure

**Files:**
- Modify: `src/app/[locale]/(routes)/solutions/[slug]/page.tsx`
- Create: `src/app/[locale]/(routes)/solutions/[slug]/[persona]/page.tsx`
- Create: `src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx`
- Create: `src/lib/constants/solutions/angles/index.ts`

- [ ] **Step 1: Fix parent route dynamicParams**

Read `src/app/[locale]/(routes)/solutions/[slug]/page.tsx`. Change line 7:
```tsx
// BEFORE:
export const dynamicParams = false;

// AFTER:
export const dynamicParams = true;
```

The parent page already calls `notFound()` when `getSolution()` returns null, so unknown slugs (including angle slugs like `ai-receptionist`) will pass through to the child `[persona]` route.

Also add a comment to the top of `src/lib/constants/solutions/solutionData.ts`:
```tsx
// IMPORTANT: Solution slugs must NOT overlap with angle landing page slugs
// defined in src/lib/constants/solutions/angles/index.ts
// (e.g., ai-receptionist, unified-inbox, brand-control, etc.)
```

- [ ] **Step 2: Create the angle index with lookup and validation**

Create `src/lib/constants/solutions/angles/index.ts`:

```tsx
import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';

export const VALID_ANGLE_SLUGS = [
  'ai-receptionist',
  'unified-inbox',
  'brand-control',
  'smart-scheduling',
  'service-portfolio',
  'ai-marketing',
  'all-in-one',
] as const;

export const VALID_PERSONAS = ['business', 'professional'] as const;

export type AngleSlug = (typeof VALID_ANGLE_SLUGS)[number];
export type AnglePersona = (typeof VALID_PERSONAS)[number];

// Slug namespace collision guard
const solutionSlugs = getAllSolutionSlugs();
const collisions = VALID_ANGLE_SLUGS.filter((s) => solutionSlugs.includes(s));
if (collisions.length > 0) {
  throw new Error(
    `Angle slugs collide with solution slugs: ${collisions.join(', ')}. These namespaces must not overlap.`,
  );
}

// Registry — populated by angle data files
const angleRegistry = new Map<
  string,
  Record<AnglePersona, I18nContent<LandingPageContent>>
>();

export function registerAngle(
  slug: AngleSlug,
  data: Record<AnglePersona, I18nContent<LandingPageContent>>,
) {
  angleRegistry.set(slug, data);
}

export function getAngleData(
  slug: string,
  persona: string,
): I18nContent<LandingPageContent> | null {
  if (
    !VALID_ANGLE_SLUGS.includes(slug as AngleSlug) ||
    !VALID_PERSONAS.includes(persona as AnglePersona)
  ) {
    return null;
  }
  const angle = angleRegistry.get(slug);
  if (!angle) return null;
  return angle[persona as AnglePersona] ?? null;
}

export function getAllAngleParams(): Array<{ slug: string; persona: string }> {
  const params: Array<{ slug: string; persona: string }> = [];
  for (const slug of VALID_ANGLE_SLUGS) {
    for (const persona of VALID_PERSONAS) {
      params.push({ slug, persona });
    }
  }
  return params;
}

// Import all angle data files to trigger registration
// These will be added as each angle data file is created
```

**Note:** The registry pattern allows each angle file to self-register on import. The index file imports them all at the bottom to ensure they're loaded. We'll add the imports as we create each angle file.

- [ ] **Step 3: Create the client wrapper**

Create `src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx`:

```tsx
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { toScrollSectionItems, LandingPageContent } from '@/lib/constants/pages/scrollSections.types';

const InlineCTA = dynamic(
  () => import('@/components/shared/InlineCTA').then((mod) => mod.InlineCTA),
);
const SocialProofBar = dynamic(
  () => import('@/components/shared/SocialProofBar').then((mod) => mod.SocialProofBar),
);
const HowItWorks = dynamic(
  () => import('@/components/shared/HowItWorks').then((mod) => mod.HowItWorks),
);
const PricingHook = dynamic(
  () => import('@/components/shared/PricingHook').then((mod) => mod.PricingHook),
);
const PlatformStrengths = dynamic(
  () => import('@/components/shared/PlatformStrengths').then((mod) => mod.PlatformStrengths),
);
const QASection = dynamic(
  () => import('@/components/QASection/QASection').then((mod) => mod.QASection),
);
const BecomeFormPartner = dynamic(
  () => import('@/components/businessPage/BecomeFormPartner').then((mod) => mod.BecomeFormPartner),
);

interface SolutionAngleClientProps {
  lang: string;
  pageData: LandingPageContent;
  persona: string;
}

export const SolutionAngleClient = ({
  lang,
  pageData,
  persona,
}: SolutionAngleClientProps) => {
  const dataScroll = toScrollSectionItems(pageData.scrollSections);
  const defaultType = persona === 'business' ? 'business' : 'freelance';
  const pageType = persona === 'business' ? 'Business' : 'Professional';

  const formTitle =
    persona === 'business'
      ? lang === 'ar'
        ? 'مستعد للسيطرة؟ أخبرنا عن عملك.'
        : 'Ready to Take Control? Tell Us About Your Business.'
      : lang === 'ar'
        ? 'سجّل في ذا ديزي — مجانًا'
        : 'Get Listed on The Daisy for Free';

  const formSubtitle =
    persona === 'business'
      ? lang === 'ar'
        ? 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك على البدء.'
        : 'Our team will reach out within 24 hours to help you get started.'
      : lang === 'ar'
        ? 'أخبرنا عن نفسك وسيساعدك فريقنا في الإعداد.'
        : 'Tell us about yourself and our team will help you get set up.';

  return (
    <div className="w-full bg-primary md:-mt-[100px]">
      <LockerContainer listInfo={dataScroll} />
      <MobileScrollSection dataScroll={dataScroll} />
      {pageData.inlineCtas?.afterScroll && (
        <InlineCTA
          headline={pageData.inlineCtas.afterScroll.headline}
          ctaText={pageData.inlineCtas.afterScroll.ctaText}
          ctaLink={pageData.inlineCtas.afterScroll.ctaLink}
        />
      )}
      {pageData.socialProofStats && (
        <SocialProofBar stats={pageData.socialProofStats} />
      )}
      {pageData.howItWorks && (
        <HowItWorks steps={pageData.howItWorks.steps} />
      )}
      {pageData.pricingHook && (
        <PricingHook
          headline={pageData.pricingHook.headline}
          body={pageData.pricingHook.body}
          ctaText={pageData.pricingHook.ctaText}
          ctaLink={pageData.pricingHook.ctaLink}
          pricingLinkText={pageData.pricingHook.pricingLinkText}
          pricingLinkHref={pageData.pricingHook.pricingLinkHref}
        />
      )}
      {pageData.platformStrengths && (
        <PlatformStrengths
          headline={pageData.platformStrengths.headline}
          subHeadline={pageData.platformStrengths.subHeadline}
          capabilities={pageData.platformStrengths.capabilities}
          stats={pageData.platformStrengths.stats}
          hideStats
        />
      )}
      {pageData.inlineCtas?.afterFeatures && (
        <InlineCTA
          headline={pageData.inlineCtas.afterFeatures.headline}
          ctaText={pageData.inlineCtas.afterFeatures.ctaText}
          ctaLink={pageData.inlineCtas.afterFeatures.ctaLink}
          secondaryLinkText={pageData.inlineCtas.afterFeatures.secondaryLinkText}
          secondaryLinkHref={pageData.inlineCtas.afterFeatures.secondaryLinkHref}
        />
      )}
      <QASection
        pageType={pageType}
        titleFraque={pageData.titleFraque}
        fallbackFaqs={pageData.fallbackFaqs}
      />
      <BecomeFormPartner
        defaultType={defaultType as 'business' | 'freelance'}
        title={formTitle}
        subtitle={formSubtitle}
      />
    </div>
  );
};
```

- [ ] **Step 4: Create the server page component**

Create `src/app/[locale]/(routes)/solutions/[slug]/[persona]/page.tsx`:

```tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { getAngleData, getAllAngleParams } from '@/lib/constants/solutions/angles';
import { t } from '@/lib/constants/i18n';
import { SolutionAngleClient } from './SolutionAngleClient';

export function generateStaticParams() {
  return getAllAngleParams();
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string; persona: string };
}): Metadata {
  const data = getAngleData(params.slug, params.persona);
  if (!data) return { title: 'Not Found' };

  const pageData = t(data, params.locale);
  const title = pageData.hero?.headline || 'The Daisy';
  const description = pageData.hero?.subHeadline || '';

  return {
    title: `${title} | The Daisy`,
    description,
    keywords: pageData.hero?.answerBlock
      ? [params.slug.replace(/-/g, ' '), params.persona, 'beauty', 'salon', 'spa']
      : [],
    openGraph: {
      title: `${title} | The Daisy`,
      description,
      url: `https://www.jointhedaisy.com/${params.locale}/solutions/${params.slug}/${params.persona}`,
      type: 'website',
      images: [
        { url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | The Daisy`,
      description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(
      `/solutions/${params.slug}/${params.persona}`,
      params.locale,
    ),
  };
}

export default function SolutionAnglePage({
  params,
}: {
  params: { locale: string; slug: string; persona: string };
}) {
  const data = getAngleData(params.slug, params.persona);
  if (!data) notFound();

  const pageData = t(data, params.locale);
  const personaLabel = params.persona === 'business' ? 'For Business' : 'For Professionals';
  const baseUrl = 'https://www.jointhedaisy.com';

  return (
    <>
      <WebPageSchema
        title={`${pageData.hero?.headline || 'Solutions'} | The Daisy`}
        description={pageData.hero?.subHeadline || ''}
        url={`${baseUrl}/${params.locale}/solutions/${params.slug}/${params.persona}`}
      />
      <PageBreadcrumbSchema
        items={[
          { name: 'Solutions', url: `${baseUrl}/solutions` },
          { name: pageData.hero?.headline || params.slug, url: `${baseUrl}/solutions/${params.slug}` },
          { name: personaLabel, url: `${baseUrl}/solutions/${params.slug}/${params.persona}` },
        ]}
      />
      {pageData.fallbackFaqs && <FaqSchema faqs={pageData.fallbackFaqs} />}
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
          answerBlock={pageData.hero.answerBlock}
        />
      )}
      <SolutionAngleClient
        lang={params.locale}
        pageData={pageData}
        persona={params.persona}
      />
    </>
  );
}
```

- [ ] **Step 5: Verify build (will partially fail — no angle data registered yet)**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

The build should compile but generate 0 angle pages since no data files are registered. This is expected.

- [ ] **Step 6: Commit**

```bash
git add "src/app/[locale]/(routes)/solutions/[slug]/page.tsx" \
  "src/app/[locale]/(routes)/solutions/[slug]/[persona]/page.tsx" \
  "src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx" \
  "src/lib/constants/solutions/angles/index.ts"
git commit -m "feat: create solution angle landing page infrastructure (route, template, client wrapper)"
```

---

## Task 2: Create AI Receptionist angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/ai-receptionist.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts` (add import)

This angle reuses scroll/section content from the main landing pages since the AI receptionist IS the main selling angle.

- [ ] **Step 1: Create the data file**

Read `src/lib/constants/pages/businessPage.ts` and `src/lib/constants/pages/professionalPage.ts` to understand the data structure. Create `src/lib/constants/solutions/angles/ai-receptionist.ts` with:

**Business EN:** Reuse scrollSections, socialProofStats, howItWorks, pricingHook, platformStrengths, inlineCtas, and fallbackFaqs from businessPage.ts (import and spread). Create a unique hero:
- categoryLabel: 'AI RECEPTIONIST FOR BUSINESS'
- headline: 'Every Customer Message Answered. Instantly.'
- subHeadline: (same as main landing page)
- ctaText: 'Start Your 14-Day Free Trial'
- ctaLink: '/start-free-trial/business'
- trustLine: 'No credit card required. Our team helps you set up.'
- answerBlock: angle-specific Q&A about the AI receptionist

**Business AR:** Arabic mirror of above.

**Professional EN:** Reuse from professionalPage.ts. Unique hero:
- categoryLabel: 'AI RECEPTIONIST FOR PROFESSIONALS'
- headline: 'Focus on Your Craft.\nDaisy Handles the Rest.'
- (rest mirrors main professional landing page)

**Professional AR:** Arabic mirror.

Register the angle:
```tsx
import { registerAngle } from './index';
registerAngle('ai-receptionist', aiReceptionistAngle);
```

- [ ] **Step 2: Add import to index.ts**

At the bottom of `src/lib/constants/solutions/angles/index.ts`, add:
```tsx
import './ai-receptionist';
```

- [ ] **Step 3: Verify build**

```bash
npx next build 2>&1 | grep -E "ai-receptionist|Error" | head -10
```

Expected: `/en/solutions/ai-receptionist/business` and `/en/solutions/ai-receptionist/professional` appear as SSG routes.

- [ ] **Step 4: Commit**

```bash
git add "src/lib/constants/solutions/angles/ai-receptionist.ts" \
  "src/lib/constants/solutions/angles/index.ts"
git commit -m "feat: add AI receptionist angle data (business + professional, EN + AR)"
```

---

## Task 3: Create Unified Inbox angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/unified-inbox.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts` (add import)

- [ ] **Step 1: Create the data file**

Full content from the spec, Section "2. Unified Inbox":

**Business EN hero:**
- categoryLabel: 'UNIFIED INBOX FOR BUSINESS'
- headline: 'One Inbox for Every Customer Conversation.'
- subHeadline: 'WhatsApp, Instagram, and more. All your customer messages in one place. No more switching between apps or missing messages buried in different platforms.'

**Business EN scroll (4 panels):**
1. "A WhatsApp Message Arrives" / "Instant Notification in Your Inbox" / description about unified view / 3 bullets
2. "An Instagram DM Follows" / "Same Thread. Same Place." / description about conversation continuity / 3 bullets
3. "Your Team Sees Everything" / "One Dashboard for All Channels" / description about team collaboration / 3 bullets
4. "Customer Gets a Seamless Experience" / "They Don't Know You're Using Multiple Channels" / description about unified response / 3 bullets

**Business stats:** 2+ (messaging channels unified) / 0 (messages lost between platforms) / 24/7 (AI monitors all channels)

**Business FAQ:** What channels does the unified inbox support? / Can multiple team members use it? / Does the AI respond across all channels? / How does it handle messages after hours?

**Professional EN:** Similar structure, professional-specific copy per spec.

**Both AR:** Full Arabic translations.

Use the same howItWorks, pricingHook structure as the main pages (adjust ctaLink to `/start-free-trial/business` or `/start-free-trial/professional`).

PlatformStrengths: reorder capabilities so a relevant one appears first. For unified inbox, if there's no exact match in the existing capabilities, use "AI Receptionist" as first (it handles the messaging).

Register and add import to index.ts.

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep -E "unified-inbox|Error" | head -10
```

- [ ] **Step 3: Commit**

```bash
git add "src/lib/constants/solutions/angles/unified-inbox.ts" \
  "src/lib/constants/solutions/angles/index.ts"
git commit -m "feat: add unified inbox angle data (business + professional, EN + AR)"
```

---

## Task 4: Create Brand Control angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/brand-control.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts`

Same pattern as Task 3. Content from spec Section "3. Brand Control". Full EN + AR for both personas. 4 unique scroll panels per persona. Register and import.

- [ ] **Step 1: Create data file with full content**
- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add brand control angle data (business + professional, EN + AR)"
```

---

## Task 5: Create Smart Scheduling angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/smart-scheduling.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts`

Content from spec Section "4. Smart Scheduling". Same pattern.

- [ ] **Step 1: Create data file with full content**
- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add smart scheduling angle data (business + professional, EN + AR)"
```

---

## Task 6: Create Service Portfolio angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/service-portfolio.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts`

Content from spec Section "5. Service Portfolio". Same pattern.

- [ ] **Step 1: Create data file with full content**
- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add service portfolio angle data (business + professional, EN + AR)"
```

---

## Task 7: Create AI Marketing angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/ai-marketing.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts`

Content from spec Section "6. AI Marketing". Same pattern.

- [ ] **Step 1: Create data file with full content**
- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add AI marketing angle data (business + professional, EN + AR)"
```

---

## Task 8: Create All-in-One angle data

**Files:**
- Create: `src/lib/constants/solutions/angles/all-in-one.ts`
- Modify: `src/lib/constants/solutions/angles/index.ts`

Content from spec Section "7. All-in-One". Same pattern.

- [ ] **Step 1: Create data file with full content**
- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add all-in-one angle data (business + professional, EN + AR)"
```

---

## Task 9: Add routes to sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add angle routes to sitemap**

Read `src/app/sitemap.ts`. Import `getAllAngleParams` from the angles index. Add entries for all 14 pages:

```tsx
import { getAllAngleParams } from '@/lib/constants/solutions/angles';

// In the sitemap generation:
...getAllAngleParams().flatMap(({ slug, persona }) =>
  localizedEntries(`/solutions/${slug}/${persona}`, {
    lastModified: STATIC_CONTENT_DATE,
    changeFrequency: 'monthly',
    priority: 0.8,
  }),
),
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | tail -30
```

Expected: All 14 angle pages (x 2 locales = 28 routes) appear as SSG.

- [ ] **Step 3: Commit**

```bash
git add "src/app/sitemap.ts"
git commit -m "feat: add 14 solution angle pages to sitemap"
```

---

## Task 10: Write tests

**Files:**
- Create: `src/app/[locale]/(routes)/solutions/[slug]/[persona]/__tests__/page.test.tsx`

- [ ] **Step 1: Write tests**

Test the page component:
- Renders business variant with correct hero headline for ai-receptionist
- Renders professional variant with correct hero headline
- Returns notFound for invalid slug
- Returns notFound for invalid persona
- Renders all major sections (mock child components)

- [ ] **Step 2: Run tests**

```bash
npx jest "solutions.*persona" --no-coverage
```

- [ ] **Step 3: Run full test suite**

```bash
npx jest --no-coverage 2>&1 | grep -E "^Test Suites:|^Tests:"
```

- [ ] **Step 4: Commit**

```bash
git add "src/app/[locale]/(routes)/solutions/[slug]/[persona]/__tests__/page.test.tsx"
git commit -m "test: add tests for solution angle landing pages"
```

---

## Task 11: Final verification

- [ ] **Step 1: Full build**

```bash
npx next build 2>&1 | tail -30
```

Expected: All 28 routes (14 angle pages x 2 locales) generated as SSG.

- [ ] **Step 2: Full test suite**

```bash
npx jest --no-coverage 2>&1 | tail -5
```

- [ ] **Step 3: Visual smoke test**

Run `npx next dev` and check:

**Business angles:**
- `/en/solutions/ai-receptionist/business` — hero, 4-panel scroll, all sections
- `/en/solutions/unified-inbox/business` — different hero and scroll content
- `/en/solutions/all-in-one/business` — different hero and scroll content

**Professional angles:**
- `/en/solutions/ai-receptionist/professional` — professional copy
- `/en/solutions/smart-scheduling/professional` — professional scheduling story

**Arabic:**
- `/ar/solutions/ai-receptionist/business` — Arabic content, RTL layout

**Verify:**
- Each page has unique hero headline
- Each page has unique 4-panel story scroll
- Social proof stats differ per angle
- FAQ questions are angle-specific
- Form defaults match persona (business fields vs freelance)
- No hydration errors in console
- View page source confirms hero H1 is in initial HTML (SSR working)

---

## Content Writing Guidelines (for all angle data files)

When writing the 56 scroll panels and other angle-specific content:

1. **No em dashes** — use periods, commas, or colons
2. **No "bilingual"** — use "multilingual"
3. **WhatsApp and Instagram** — not "calls" or "phone"
4. **Headlines support `\n`** for forced line breaks (rendered via `whitespace-pre-line`)
5. **Keep scroll panel descriptions to 2-3 sentences max**
6. **3 bullets per scroll panel** (consistent with main landing pages)
7. **Full Arabic translations required** — not placeholders
8. **PlatformStrengths capabilities reordered** — angle's featured capability appears first
9. **ctaLink always points to** `/start-free-trial/business` or `/start-free-trial/professional`
10. **afterFeatures InlineCTA includes secondary link** — "Explore all features" → `/features/business` or `/features/professional`
