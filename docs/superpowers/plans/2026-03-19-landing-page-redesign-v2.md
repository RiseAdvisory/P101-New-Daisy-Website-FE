# Landing Page Redesign V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Business and Professional landing pages with pain-led hero, AI story scroll, social proof bar, how-it-works, pricing hook, and streamlined features grid — replacing the current redundant 7-section layout with a conversion-optimized 8-section structure.

**Architecture:** Shared 8-section structure with persona-specific content. New components (InlineCTA, SocialProofBar, HowItWorks, PricingHook) are rendered inside the existing client wrappers via `dynamic()` imports. The hero stays server-rendered in `page.tsx`. GrowthSection and ExperienceDaisy are removed; their roles are absorbed by the new sections.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide React icons, existing LockerContainer/MobileScrollSection for scroll, existing StatisticHighlight for stats.

**Spec:** `docs/superpowers/specs/2026-03-19-landing-page-redesign-v2-design.md`

---

## Task 1: Update type system

**Files:**
- Modify: `src/lib/constants/pages/scrollSections.types.ts`

- [ ] **Step 1: Add new interfaces and update LandingPageContent**

Read `scrollSections.types.ts`. Add these new interfaces after the existing ones, then update `LandingPageContent`:

```tsx
export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface HowItWorksData {
  steps: HowItWorksStep[];
}

export interface PricingHookData {
  headline: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  pricingLinkText: string;
  pricingLinkHref: string;
}

export interface InlineCTAData {
  headline: string;
  ctaText: string;
  ctaLink: string;
}

export interface SocialProofStat {
  value: string;
  context: string;
}
```

Update the `LandingPageContent` interface — remove `growth: GrowthData` and add new fields:

```tsx
export interface LandingPageContent {
  hero?: HeroData;
  scrollSections: LocalScrollSection[];
  platformStrengths?: PlatformStrengthsData;
  socialProofStats?: SocialProofStat[];
  howItWorks?: HowItWorksData;
  pricingHook?: PricingHookData;
  inlineCtas?: {
    afterScroll: InlineCTAData;
    afterFeatures: InlineCTAData;
  };
  titleFraque: string;
  fallbackFaqs?: FaqItem[];
}
```

Keep `GrowthData` interface definition (it may be used elsewhere), but remove `growth` from `LandingPageContent`.

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -10
```

Note: Build will likely have errors because `businessPage.ts` and `professionalPage.ts` still have `growth` in their data. This is expected — we fix the data files in Task 2.

- [ ] **Step 3: Commit**

```bash
git add "src/lib/constants/pages/scrollSections.types.ts"
git commit -m "refactor: update LandingPageContent type — remove growth, add new section types"
```

---

## Task 2: Replace all content data for both pages

**Files:**
- Modify: `src/lib/constants/pages/businessPage.ts`
- Modify: `src/lib/constants/pages/professionalPage.ts`

This is the largest task. Replace ALL content in both data files with the new V2 content from the spec: new hero copy, AI story scroll panels (4 panels replacing old 5), social proof stats, how-it-works steps, pricing hook, inline CTAs, and trimmed FAQ (4 questions). Remove the `growth` field entirely.

- [ ] **Step 1: Rewrite businessPage.ts English section**

Read `businessPage.ts` fully. Replace the `en` section with:

**Hero:**
```tsx
hero: {
  categoryLabel: 'FOR BUSINESS OWNERS',
  headline: 'Stop Losing Customers to Missed Calls',
  subHeadline: "Daisy's AI receptionist answers every inquiry, books every appointment, and processes every payment — 24/7. One platform replaces your entire front desk.",
  ctaText: 'Start Your 14-Day Free Trial',
  ctaLink: '/start-free-trial/business',
  answerBlock: {
    question: 'What is The Daisy for beauty businesses?',
    answer: 'The Daisy is an AI-powered beauty business platform that combines a 24/7 AI receptionist with booking management, customer acquisition, payments, staff scheduling, and marketing. It replaces 8 separate tools with one multilingual platform — currently supporting Arabic and English.',
  },
},
```

**Scroll sections (4 panels — AI story):**
```tsx
scrollSections: [
  {
    sortId: 1,
    mainImage: '/images/pages/business/scroll/device-mockups.png',
    firstBg: '/images/pages/business/scroll/leaf-bg.png',
    secondBg: '/images/pages/business/scroll/stars.png',
    // Keep existing style JSON objects from current sortId 1
    infoScroll: {
      title: 'A Customer Has a Question',
      text: 'Your AI Receptionist Responds Instantly',
      description: "A customer messages at 9 PM asking about availability for a balayage appointment. Your AI receptionist responds within seconds — friendly, professional, in their language.",
      listSub: [
        'Responds in Arabic and English',
        'Available 24/7, even holidays',
        'Knows your services and pricing',
      ],
    },
  },
  {
    sortId: 2,
    mainImage: '/images/pages/business/scroll/schedule.png',
    firstBg: '/images/pages/business/scroll/leaf-bg.png',
    // Keep existing style JSON objects from current sortId 2
    infoScroll: {
      title: 'Appointment Booked in Minutes',
      text: 'Smart Scheduling, Zero Conflicts',
      description: "The AI checks your real-time availability, suggests the best time slot, and books the appointment — no double-bookings, no back-and-forth.",
      listSub: [
        'Checks staff availability automatically',
        'Sends instant confirmation',
        'Avoids scheduling conflicts',
      ],
    },
  },
  {
    sortId: 3,
    mainImage: '/images/pages/business/scroll/integrations.png',
    firstBg: '/images/pages/business/scroll/leaf-bg.png',
    secondBg: '/images/pages/business/scroll/stars.png',
    // Keep existing style JSON objects from current sortId 3
    infoScroll: {
      title: 'Payment Handled Before They Arrive',
      text: 'Deposits, Full Payments, or Pay-at-Visit',
      description: "The customer pays a deposit or the full amount right in the chat. By the time they walk in, everything is settled.",
      listSub: [
        'Secure in-chat payment',
        'Deposit or full payment options',
        'Automatic receipts sent',
      ],
    },
  },
  {
    sortId: 4,
    mainImage: '/images/pages/business/scroll/analytics.png',
    firstBg: '/images/pages/business/scroll/leaf-bg.png',
    // Keep existing style JSON objects from current sortId 4
    infoScroll: {
      title: 'Confirmed and on Your Calendar',
      text: "You Didn't Lift a Finger",
      description: "The appointment appears on your calendar with all the details — service, time, staff member, payment status. Your customer got a perfect experience. You were home with your family.",
      listSub: [
        'Synced to your business calendar',
        'Customer gets reminder before visit',
        'Staff notified automatically',
      ],
    },
  },
],
```

**Note on scroll panel count:** The array goes from 5 panels to 4. The removed 5th panel ("Get Started") had no `listSub`, which triggered the `storeBurron` flag (shows app store buttons). With all 4 new panels having `listSub`, `storeBurron` will be `false` on all panels — this is the intended behavior (no app store buttons in the AI story scroll).

**Note on inline CTAs:** The spec's structural diagram shows 3 inline CTAs but the final render order shows 2 (after scroll, after features). We implement 2 as shown in the render order. The pricing hook section has its own CTA built in, making a separate inline CTA after it redundant.

**IMPORTANT:** Copy the style JSON objects (`styleMainPictureJSON`, `styleFirstBgJSON`, `styleSecondBgJSON`, `styleBgMobileSecond`, `styleImageMobile`, `mainImageWidth`, `mainImageHeight`) from the CURRENT file's corresponding sortId entries. Only replace the `infoScroll` content and remove the 5th panel.

**PlatformStrengths** — update the headline to match the spec:
- Business headline: `'Everything You Need to Run Your Business'` (was "One Platform Replaces Your Entire Tool Stack")
- Arabic business headline: `'كل ما تحتاجه لإدارة عملك'`
- Capabilities and stats: keep as-is for business page.

**Note:** `trustLine` will be added to HeroData and the data files in Task 4, not here. Do not add it yet.

**New fields:**
```tsx
socialProofStats: [
  { value: '8', context: 'tools replaced by one platform' },
  { value: '24/7', context: 'AI receptionist — never misses a call' },
  { value: '10+', context: 'languages supported' },
],
howItWorks: {
  steps: [
    { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
    { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
    { title: 'Go live — your AI receptionist takes over', description: 'Customers get instant responses. You get control.' },
  ],
},
pricingHook: {
  headline: 'Free to Start. Grow at Your Own Pace.',
  body: '14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Commission only on new customers the Daisy marketplace brings you — your existing clients, zero commission.',
  ctaText: 'Start Your 14-Day Free Trial',
  ctaLink: '/start-free-trial/business',
  pricingLinkText: 'See full pricing details →',
  pricingLinkHref: '/pricing',
},
inlineCtas: {
  afterScroll: {
    headline: 'Ready to put your reception on autopilot?',
    ctaText: 'Start Your 14-Day Free Trial',
    ctaLink: '/start-free-trial/business',
  },
  afterFeatures: {
    headline: 'Start Your 14-Day Free Trial',
    ctaText: 'Start Your 14-Day Free Trial',
    ctaLink: '/start-free-trial/business',
  },
},
titleFraque: 'Frequently Asked Questions',
fallbackFaqs: [
  { question: 'Can I migrate from my current booking system?', answer: 'Yes. Our onboarding team helps you migrate your client data, booking history, and preferences at no extra cost.' },
  { question: 'Does The Daisy work in Arabic?', answer: 'Yes. Fully multilingual — your AI receptionist speaks Arabic and English fluently. Customer communications, your booking page, and the entire interface support both languages with full RTL. More languages coming soon.' },
  { question: 'Do I need to change how I run my business?', answer: 'No. Daisy adapts to your workflow. Keep your brand, your processes, your team. We just handle your reception and give you better tools.' },
  { question: 'Is my data safe?', answer: 'Yes. Enterprise-grade encryption, secure payment processing, and your data is never shared. You own your customer data completely.' },
],
```

**Remove** the `growth` field entirely.

- [ ] **Step 2: Add Arabic section for businessPage.ts**

Translate all the new English content to Arabic. Keep the same structure. For the scroll sections, copy the style JSON objects from the current Arabic section.

- [ ] **Step 3: Rewrite professionalPage.ts English section**

Same approach. Replace with professional-specific content from the spec:

**Hero:**
- H1: "Focus on Your Craft. Daisy Handles the Rest."
- H2: "Stop being your own receptionist. Daisy's AI manages your bookings, answers client questions, and processes payments — while your hands are busy doing what you do best."
- CTA: "Start Your Free Trial" → `/start-free-trial/professional`

**Scroll sections (4 panels — professional AI story):**
- Panel 1: "A Client Reaches Out" / "You're Mid-Appointment. Daisy Answers."
- Panel 2: "Booked Into Your Next Open Slot" / "No Phone Calls. No Back-and-Forth."
- Panel 3: "Paid Before They Sit Down" / "No Awkward Money Conversations"
- Panel 4: "Your Calendar, Always Up to Date" / "Check Between Clients. Everything's There."

(Full copy in the spec, Section 2 Professional version)

**Professional PlatformStrengths** — update capability labels to match spec:
- "Smart Booking" → "AI Booking Assistant" / "مساعد الحجز الذكي"
- "Notifications" → "Smart Notifications" / "إشعارات ذكية"
- "Portfolio" → "Marketplace Visibility" / "ظهور في السوق"
- Headline: `'Everything You Need in One App'` (unchanged)
- Update descriptions to match spec Section 6.

**Professional-specific new fields:**
```tsx
socialProofStats: [
  { value: '0%', context: 'commission on your existing clients' },
  { value: '24/7', context: 'AI handles bookings while you work' },
  { value: '10+', context: 'languages supported' },
],
howItWorks: {
  steps: [
    { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Set your services, availability, and pricing.' },
    { title: 'Our team helps you get set up', description: 'We configure your profile, set up your AI assistant, and walk you through everything.' },
    { title: 'Go live — focus on your clients', description: 'Daisy handles your bookings. You handle your craft.' },
  ],
},
pricingHook: {
  headline: 'Free to Join. Zero Risk.',
  body: 'Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Commission only on new clients who find you through the Daisy marketplace — your existing clients, always zero commission.',
  ctaText: 'Get Listed — Free',
  ctaLink: '/start-free-trial/professional',
  pricingLinkText: 'See full pricing details →',
  pricingLinkHref: '/pricing',
},
inlineCtas: {
  afterScroll: {
    headline: 'Ready to stop being your own receptionist?',
    ctaText: 'Start Your Free Trial',
    ctaLink: '/start-free-trial/professional',
  },
  afterFeatures: {
    headline: 'Start Your Free Trial',
    ctaText: 'Start Your Free Trial',
    ctaLink: '/start-free-trial/professional',
  },
},
fallbackFaqs: [
  { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace — your existing clients, zero commission. Premium features available through affordable subscription tiers.' },
  { question: 'Do I need to work at a salon to join?', answer: 'No. Freelance professionals, independent stylists, mobile service providers, and salon-based professionals are all welcome.' },
  { question: 'How do customers find my profile?', answer: 'Your profile appears in the Daisy marketplace when customers search for beauty services in your area. The more complete your profile, the higher your visibility.' },
  { question: 'How and when do I get paid?', answer: 'Earnings are tracked in real-time in the app. Payments are processed securely and deposited to your account on a weekly schedule.' },
],
```

- [ ] **Step 4: Add Arabic section for professionalPage.ts**

Translate all professional content to Arabic.

- [ ] **Step 5: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -10
```

Build may still fail because BusinessClient/ProfessionalClient reference GrowthSection and ExperienceDaisy which expect `growth` data. This is fixed in Task 5.

- [ ] **Step 6: Commit**

```bash
git add "src/lib/constants/pages/businessPage.ts" "src/lib/constants/pages/professionalPage.ts"
git commit -m "content: replace landing page data with V2 — AI story scroll, pricing hook, how-it-works"
```

---

## Task 3: Create new components

**Files:**
- Create: `src/components/shared/InlineCTA.tsx`
- Create: `src/components/shared/SocialProofBar.tsx`
- Create: `src/components/shared/HowItWorks.tsx`
- Create: `src/components/shared/PricingHook.tsx`

- [ ] **Step 1: Create InlineCTA**

```tsx
// src/components/shared/InlineCTA.tsx
import Link from 'next/link';

interface InlineCTAProps {
  headline: string;
  ctaText: string;
  ctaLink: string;
}

export const InlineCTA = ({ headline, ctaText, ctaLink }: InlineCTAProps) => {
  return (
    <section className="w-full bg-primary py-12 md:py-16 px-4 text-center">
      <p className="text-[#D5D9D9] text-lg md:text-xl mb-6">{headline}</p>
      <Link
        href={ctaLink}
        className="inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent"
      >
        {ctaText}
      </Link>
    </section>
  );
};
```

- [ ] **Step 2: Create SocialProofBar**

```tsx
// src/components/shared/SocialProofBar.tsx
import { StatisticHighlight } from '@/components/geo/StatisticHighlight';

interface SocialProofBarProps {
  stats: Array<{ value: string; context: string }>;
}

export const SocialProofBar = ({ stats }: SocialProofBarProps) => {
  return (
    <section className="w-full bg-[#F8F5F3] py-10 md:py-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
        {stats.map((stat) => (
          <div key={stat.context} className="text-center px-6 py-4">
            <StatisticHighlight value={stat.value} context={stat.context} />
          </div>
        ))}
      </div>
    </section>
  );
};
```

- [ ] **Step 3: Create HowItWorks**

```tsx
// src/components/shared/HowItWorks.tsx
interface HowItWorksProps {
  steps: Array<{ title: string; description: string }>;
}

export const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#172524] text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-[#172524] font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[#455150] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 4: Create PricingHook**

```tsx
// src/components/shared/PricingHook.tsx
import Link from 'next/link';

interface PricingHookProps {
  headline: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  pricingLinkText: string;
  pricingLinkHref: string;
}

export const PricingHook = ({
  headline,
  body,
  ctaText,
  ctaLink,
  pricingLinkText,
  pricingLinkHref,
}: PricingHookProps) => {
  return (
    <section className="w-full bg-[#F8F5F3] py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-6">
          {headline}
        </h2>
        <p className="text-[#455150] text-lg leading-relaxed mb-8">
          {body}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-primary text-white font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-white hover:text-primary hover:border hover:border-primary transition-colors border border-transparent mb-4"
        >
          {ctaText}
        </Link>
        <div>
          <Link
            href={pricingLinkHref}
            className="text-[#A67F6B] text-sm hover:underline"
          >
            {pricingLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 5: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 6: Commit**

```bash
git add src/components/shared/InlineCTA.tsx \
  src/components/shared/SocialProofBar.tsx \
  src/components/shared/HowItWorks.tsx \
  src/components/shared/PricingHook.tsx
git commit -m "feat: create InlineCTA, SocialProofBar, HowItWorks, PricingHook components"
```

---

## Task 4: Update LandingHero with trustLine prop

**Files:**
- Modify: `src/components/shared/LandingHero.tsx`

- [ ] **Step 1: Add trustLine prop**

Read `LandingHero.tsx`. Add `trustLine?: string` to the props interface. Render it below the CTA button:

```tsx
interface LandingHeroProps {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  trustLine?: string;
  answerBlock?: {
    question: string;
    answer: string;
  };
}
```

Add after the `<Link>` CTA:

```tsx
{trustLine && (
  <p className="text-[#D5D9D9] text-sm mt-4">{trustLine}</p>
)}
```

- [ ] **Step 2: Update page.tsx files to pass trustLine**

In `src/app/[locale]/business/page.tsx`, add `trustLine` to the `LandingHero` props. The trust line text should come from the data file. Add `trustLine?: string` to the `HeroData` interface in `scrollSections.types.ts`, and add the text to the data files:

Business EN: `"No credit card required. Our team helps you set up."`
Business AR: `"لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد."`
Professional EN: `"Free to join. No credit card required."`
Professional AR: `"الانضمام مجاني. لا حاجة لبطاقة ائتمان."`

- [ ] **Step 3: Update tests**

Update `src/components/shared/__tests__/LandingHero.test.tsx` — add a test for trustLine rendering.

- [ ] **Step 4: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest "LandingHero" --no-coverage
```

- [ ] **Step 5: Commit**

```bash
git add src/components/shared/LandingHero.tsx \
  "src/components/shared/__tests__/LandingHero.test.tsx" \
  "src/lib/constants/pages/scrollSections.types.ts" \
  "src/lib/constants/pages/businessPage.ts" \
  "src/lib/constants/pages/professionalPage.ts" \
  "src/app/[locale]/business/page.tsx" \
  "src/app/[locale]/professional/page.tsx"
git commit -m "feat: add trustLine to LandingHero — 'no credit card required' below CTA"
```

---

## Task 5: Update PlatformStrengths with hideStats and new icons

**Files:**
- Modify: `src/components/shared/PlatformStrengths.tsx`

- [ ] **Step 1: Add hideStats prop**

Read `PlatformStrengths.tsx`. Add `hideStats?: boolean` to the props interface. Wrap the stats section in a conditional:

```tsx
{!hideStats && (
  <div className="flex flex-wrap justify-center gap-8">
    {stats.map((stat) => (
      // ... existing stats rendering
    ))}
  </div>
)}
```

- [ ] **Step 2: Add new icon map entries**

Add these to the English icon map:
```tsx
'AI Booking Assistant': <Bot className="w-6 h-6" />,
'Smart Notifications': <Bell className="w-6 h-6" />,
'Marketplace Visibility': <Users className="w-6 h-6" />,
```

Add Arabic equivalents:
```tsx
'مساعد الحجز الذكي': <Bot className="w-6 h-6" />,
'إشعارات ذكية': <Bell className="w-6 h-6" />,
'ظهور في السوق': <Users className="w-6 h-6" />,
```

- [ ] **Step 3: Verify build and tests**

```bash
npx jest "PlatformStrengths" --no-coverage
```

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/PlatformStrengths.tsx
git commit -m "feat: add hideStats prop and new icon entries to PlatformStrengths"
```

---

## Task 6: Add subtitle prop to BecomeFormPartner

**Files:**
- Modify: `src/components/businessPage/BecomeFormPartner.tsx`

- [ ] **Step 1: Add subtitle prop**

Read `BecomeFormPartner.tsx`. Add `subtitle?: string` to the props interface:

```tsx
interface BecomeFormPartnerProps {
  defaultType?: 'business' | 'freelance';
  title?: string;
  subtitle?: string;
}
```

In the render, use the override when provided:

```tsx
<p className="...">{subtitle || data.subtitle}</p>
```

- [ ] **Step 2: Commit**

```bash
git add "src/components/businessPage/BecomeFormPartner.tsx"
git commit -m "feat: add subtitle prop override to BecomeFormPartner"
```

---

## Task 7: Rewire BusinessClient and ProfessionalClient

**Files:**
- Modify: `src/app/[locale]/business/BusinessClient.tsx`
- Modify: `src/app/[locale]/professional/ProfessionalClient.tsx`

This is the core wiring task — remove old sections, add new ones in the correct order.

- [ ] **Step 1: Rewrite BusinessClient.tsx**

Read the current file. Replace with:

```tsx
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

// Lazy load below-fold components
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

export const BusinessClient = ({ lang }: { lang: string }) => {
  const pageData = t(businessPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);
  const formTitle = lang === 'ar' ? 'مستعد للسيطرة؟ أخبرنا عن عملك.' : 'Ready to Take Control? Tell Us About Your Business.';
  const formSubtitle = lang === 'ar' ? 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك على البدء.' : 'Our team will reach out within 24 hours to help you get started.';

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
        />
      )}
      <QASection pageType="Business" titleFraque={pageData.titleFraque} fallbackFaqs={pageData.fallbackFaqs} />
      <BecomeFormPartner
        defaultType="business"
        title={formTitle}
        subtitle={formSubtitle}
      />
    </div>
  );
};
```

Note: GrowthSection and ExperienceDaisy imports are completely removed.

- [ ] **Step 2: Rewrite ProfessionalClient.tsx**

Same structure as BusinessClient, with professional-specific data and props:

```tsx
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { t } from '@/lib/constants/i18n';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

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

export const ProfessionalClient = ({ lang }: { lang: string }) => {
  const pageData = t(professionalPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);
  const formTitle = lang === 'ar' ? 'سجّل في ذا ديزي — مجانًا' : 'Get Listed on The Daisy — Free';
  const formSubtitle = lang === 'ar' ? 'أخبرنا عن نفسك وسيساعدك فريقنا في الإعداد.' : 'Tell us about yourself and our team will help you get set up.';

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
        />
      )}
      <QASection pageType="Professional" titleFraque={pageData.titleFraque} fallbackFaqs={pageData.fallbackFaqs} />
      <BecomeFormPartner
        defaultType="freelance"
        title={formTitle}
        subtitle={formSubtitle}
      />
    </div>
  );
};
```

- [ ] **Step 3: Update tests**

Update `src/app/[locale]/business/__tests__/page.test.tsx`:
- Remove mocks for GrowthSection, ExperienceDaisy
- Add mocks for InlineCTA, SocialProofBar, HowItWorks, PricingHook
- Remove assertions for removed sections
- Add assertions for new sections

Update `src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx`:
- Same changes

- [ ] **Step 4: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -10
npx jest "business/__tests__/page" "professional/__tests__/ProfessionalClient" --no-coverage
```

- [ ] **Step 5: Commit**

```bash
git add "src/app/[locale]/business/BusinessClient.tsx" \
  "src/app/[locale]/professional/ProfessionalClient.tsx" \
  "src/app/[locale]/business/__tests__/page.test.tsx" \
  "src/app/[locale]/professional/__tests__/ProfessionalClient.test.tsx"
git commit -m "feat: rewire landing pages with V2 section order — remove GrowthSection and ExperienceDaisy"
```

---

## Task 8: Write tests for new components

**Files:**
- Create: `src/components/shared/__tests__/InlineCTA.test.tsx`
- Create: `src/components/shared/__tests__/SocialProofBar.test.tsx`
- Create: `src/components/shared/__tests__/HowItWorks.test.tsx`
- Create: `src/components/shared/__tests__/PricingHook.test.tsx`

- [ ] **Step 1: Write tests for all 4 components**

Test each component renders its content correctly:
- InlineCTA: renders headline, CTA link with correct href
- SocialProofBar: renders all stats
- HowItWorks: renders 3 steps with numbers, headline "How It Works"
- PricingHook: renders headline, body, CTA link, pricing link

- [ ] **Step 2: Run tests**

```bash
npx jest "InlineCTA\|SocialProofBar\|HowItWorks\|PricingHook" --no-coverage
```

- [ ] **Step 3: Commit**

```bash
git add src/components/shared/__tests__/
git commit -m "test: add tests for InlineCTA, SocialProofBar, HowItWorks, PricingHook"
```

---

## Task 9: Final verification

- [ ] **Step 1: Full build**

```bash
npx next build 2>&1 | tail -20
```

Expected: Both `/en/business` and `/en/professional` appear as SSG routes.

- [ ] **Step 2: Full test suite**

```bash
npx jest --no-coverage 2>&1 | tail -5
```

Expected: All tests pass, no regressions.

- [ ] **Step 3: Visual smoke test**

Run `npx next dev` and check both pages:

**Business (`/en/business`):**
1. Hero: "Stop Losing Customers to Missed Calls" + trust line
2. Scroll: 4-panel AI booking story
3. Inline CTA: "Ready to put your reception on autopilot?"
4. Social proof bar: 8 tools / 24/7 / 10+ languages
5. How It Works: 3 steps
6. Pricing hook: "Free to Start" + CTA + pricing link
7. Features grid: 8 capabilities (no stats row)
8. Inline CTA: "Start Your 14-Day Free Trial"
9. FAQ: 4 questions
10. Form: "Ready to Take Control?"

**Professional (`/en/professional`):**
Same structure with professional content:
1. Hero: "Focus on Your Craft. Daisy Handles the Rest."
2. Scroll: 4-panel professional AI story
3-10: All professional-specific content

**Arabic (`/ar/business` and `/ar/professional`):**
RTL layout, Arabic content, no hydration errors.
