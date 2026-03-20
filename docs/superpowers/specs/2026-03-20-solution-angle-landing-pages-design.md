# Solution Angle Landing Pages — Design Spec

**Date:** 2026-03-20
**Status:** Approved
**Scope:** 14 landing pages (7 selling angles x 2 personas) with shared template, unique content, and full story scroll per page.

## Context

The Daisy platform has multiple key selling points. Different prospects respond to different value propositions. Rather than one landing page trying to sell everything, we create focused landing pages for each selling angle. Each page uses the exact same 8-section layout and shared components, with unique content tailored to one specific value proposition.

This enables:
- Running ads targeting specific pain points, each linking to a dedicated page
- A/B testing which angle converts best by comparing signup rates across pages
- SEO coverage for angle-specific keywords (e.g., "salon AI receptionist", "beauty booking automation")

### The 7 Angles

1. **AI Receptionist** — 24/7 AI handles WhatsApp and Instagram messages, bookings, payments
2. **Unified Inbox** — All customer communication (WhatsApp, Instagram) in one place
3. **Brand Control** — White-label booking page, branded communications, your identity
4. **Smart Scheduling** — AI-powered scheduling that fills calendars without conflicts
5. **Service Portfolio** — Visual showcase of services with photos, videos, and reviews
6. **AI Marketing** — Personalized customer retention using AI and preference data
7. **All-in-One** — Replace 8 separate tools with one platform

### Key Decisions

- **URL structure:** `/solutions/[slug]/[persona]` (e.g., `/solutions/ai-receptionist/business`)
- **One data file per angle** containing both persona variants and both languages
- **Same 8-section page template** as main landing pages (no new components)
- **One new client wrapper:** `SolutionAngleClient.tsx` (same pattern as `BusinessClient.tsx`)
- **SSR-optimized:** Hero in server `page.tsx`, client wrapper receives `lang` as prop (no `useChangeLanguage` store)
- **SSG at build time:** `generateStaticParams` returns 14 entries (7 slugs x 2 personas). Locale is handled by the parent `[locale]` layout's own `generateStaticParams`, composed automatically by Next.js.
- **Rename:** "AI story scroll" is now "story scroll" throughout

---

## Architecture

### Route Structure

```
src/app/[locale]/(routes)/solutions/[slug]/[persona]/
├── page.tsx                    — Server component (metadata, hero, schemas)
└── SolutionAngleClient.tsx     — Client wrapper (scroll + all below-fold sections)
```

**URL examples:**
- `/en/solutions/ai-receptionist/business`
- `/ar/solutions/smart-scheduling/professional`
- `/en/solutions/unified-inbox/business`

**Invalid slugs or personas:** Return `notFound()`.

**Route conflict with existing `/solutions/[slug]`:** The existing `solutions/[slug]/page.tsx` has `dynamicParams = false`, which blocks slugs not in its `generateStaticParams`. The new angle slugs (`ai-receptionist`, etc.) would 404 at the parent level before reaching the `[persona]` child. **Fix:** Change `dynamicParams` to `true` in the parent `[slug]/page.tsx`. The parent page already calls `notFound()` when `getSolution()` returns null, so unknown slugs (including angle slugs) will pass through to the child route safely.

**Slug namespace collision guard:** The 7 angle slugs must never overlap with the existing SEO solution slugs (e.g., `salon-management-software`). Add a build-time check in `angles/index.ts` that verifies no angle slug exists in `getAllSolutionSlugs()`. Also add a comment to both `solutionData.ts` and `angles/index.ts` documenting this constraint.

### Data Structure

```
src/lib/constants/solutions/angles/
├── index.ts                    — Lookup function + slug/persona validation
├── ai-receptionist.ts          — { business: { en, ar }, professional: { en, ar } }
├── unified-inbox.ts
├── brand-control.ts
├── smart-scheduling.ts
├── service-portfolio.ts
├── ai-marketing.ts
└── all-in-one.ts
```

Each angle file exports:

```typescript
import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';

export const aiReceptionistAngle: Record<
  'business' | 'professional',
  I18nContent<LandingPageContent>
> = {
  business: {
    en: { hero, scrollSections, socialProofStats, howItWorks, pricingHook, platformStrengths, inlineCtas, titleFraque, fallbackFaqs },
    ar: { /* Arabic mirror */ },
  },
  professional: {
    en: { /* professional copy */ },
    ar: { /* Arabic mirror */ },
  },
};
```

**No new types needed.** `LandingPageContent` already has all the fields. The `HeroData` type already includes `trustLine` and `answerBlock`.

### Index Lookup

```typescript
// src/lib/constants/solutions/angles/index.ts
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { I18nContent } from '@/lib/constants/i18n';

export const VALID_ANGLE_SLUGS = [
  'ai-receptionist', 'unified-inbox', 'brand-control',
  'smart-scheduling', 'service-portfolio', 'ai-marketing', 'all-in-one',
] as const;

export const VALID_PERSONAS = ['business', 'professional'] as const;

export type AngleSlug = typeof VALID_ANGLE_SLUGS[number];
export type AnglePersona = typeof VALID_PERSONAS[number];

export function getAngleData(
  slug: string,
  persona: string,
): I18nContent<LandingPageContent> | null;

export function getAllAngleParams(): Array<{ slug: string; persona: string }>;
```

### Page Component (Server)

```typescript
// page.tsx
export default function SolutionAnglePage({
  params,
}: {
  params: { locale: string; slug: string; persona: string };
}) {
  const data = getAngleData(params.slug, params.persona);
  if (!data) notFound();

  const pageData = t(data, params.locale);

  return (
    <>
      <WebPageSchema ... />
      <PageBreadcrumbSchema ... />
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
      <SolutionAngleClient lang={params.locale} pageData={pageData} persona={params.persona} />
    </>
  );
}
```

### Client Wrapper

`SolutionAngleClient.tsx` follows the exact `BusinessClient.tsx` pattern:
- Receives `lang`, `pageData`, and `persona` as props (no store reads)
- Uses `dynamic()` imports for all below-fold components
- Renders: scroll sections → InlineCTA → SocialProofBar → HowItWorks → PricingHook → PlatformStrengths → InlineCTA → QASection → BecomeFormPartner
- Form `defaultType` derived from `persona` prop: `business` → `'business'`, `professional` → `'freelance'`
- `QASection` receives `pageType="Business"` for business persona, `pageType="Professional"` for professional persona (matches existing pattern)
- **Pattern note:** Passing `pageData` as a pre-resolved prop from the server component is an intentional improvement over the `BusinessClient.tsx` pattern (which reads data internally). Since `LandingPageContent` contains only strings, numbers, and plain objects, it serializes safely across the server/client boundary. This avoids redundant `t()` calls in the client.

---

## Page Sections (9-section template)

Every angle page follows this exact structure. Only the data content changes.

### Section 1: Hero
- Pain-led H1 specific to the angle
- H2 expanding on the angle's value proposition
- CTA: "Start Your 14-Day Free Trial" (business) / "Start Your Free Trial" (professional)
- Trust line: "No credit card required. Our team helps you set up." / "Free to join. No credit card required."
- GEO answer block with angle-specific Q&A

### Section 2: Story Scroll (4 panels)
- Each angle tells a unique 4-panel story showing how that specific feature works
- Uses existing `LockerContainer` (desktop) and `MobileScrollSection` (mobile)
- Each panel: title, subtitle, description, 3 bullets

### Section 3: Inline CTA
- Angle-specific headline question
- CTA button linking to `/start-free-trial/[persona]`

### Section 4: Social Proof Bar
- 3 stats relevant to the angle
- Large bold numbers with context text below

### Section 5: How It Works
- Same 3 steps for all angles (onboarding is the same regardless of which feature attracted them):
  - Business: Sign up → Team helps set up → Go live
  - Professional: Sign up → Team helps set up → Focus on clients

### Section 6: Pricing Hook
- Same pricing information for all angles (pricing doesn't change per angle)
- Business: "Free to Start. Grow at Your Own Pace." + 14-day trial details
- Professional: "Free to Join. Zero Risk." + commission model

### Section 7: Features Grid (PlatformStrengths)
- Same 8 capabilities but **reordered** so the angle's featured capability appears first
- `hideStats` = true (stats already shown in SocialProofBar)
- Followed by Inline CTA with "Explore all features" secondary link

### Section 8: FAQ
- 4 angle-specific questions per page
- One question always about the specific feature ("How does [feature] work?")
- One about pricing/cost
- Two addressing angle-specific concerns

### Section 9: Form
- Business: "Ready to Take Control? Tell Us About Your Business."
- Professional: "Get Listed on The Daisy for Free"
- Same form fields as main landing page

---

## Content Per Angle (7 angles x 2 personas = 14 pages)

### 1. AI Receptionist (`ai-receptionist`)

**Business:**
- Hero H1: "Every Customer Message Answered. Instantly."
- Hero H2: "Daisy's AI receptionist handles every WhatsApp and Instagram inquiry, books appointments, and processes payments, 24/7. One platform replaces your entire front desk."
- Scroll story: Customer messages → AI responds → Booking confirmed → Payment processed → Calendar updated
- Stats: 24/7 (AI receptionist, never misses a message) / 8 (tools in one platform) / 10+ (languages supported)
- FAQ: How does the AI receptionist work? / What channels does it handle? / Can I customize the AI's responses? / How much does it cost?

**Professional:**
- Hero H1: "Focus on Your Craft.\nDaisy Handles the Rest."
- Hero H2: "Stop being your own receptionist. Daisy's AI handles your WhatsApp and Instagram messages, books appointments, and processes payments, while you focus on what you do best."
- Scroll story: Client messages while busy → AI books into next slot → Payment secured → Calendar updated
- Stats: 0% (commission on existing clients) / 24/7 (AI handles bookings while you work) / 10+ (languages supported)
- FAQ: Is there a fee or commission? / How does the AI booking assistant work? / Do I need to work at a salon to join? / How does payment work?

**Note:** This angle reuses the main landing page content since it IS the main angle. The data file should import the non-hero sections (scrollSections, socialProofStats, howItWorks, pricingHook, platformStrengths, inlineCtas, fallbackFaqs) from `businessPage.ts` / `professionalPage.ts` via destructuring, then define angle-specific hero and metadata. Do NOT share the hero since the main landing page hero may evolve independently.

### 2. Unified Inbox (`unified-inbox`)

**Business:**
- Hero H1: "One Inbox for Every Customer Conversation."
- Hero H2: "WhatsApp, Instagram, and more. All your customer messages in one place. No more switching between apps or missing messages buried in different platforms."
- Scroll: WhatsApp message arrives → Instagram DM arrives → Both appear in one unified thread → Team member responds from one place
- Stats: 2+ (messaging channels unified) / 0 (messages lost between platforms) / 24/7 (AI monitors all channels)
- FAQ: What channels does the unified inbox support? / Can multiple team members use it? / Does the AI respond across all channels? / How does it handle messages after hours?

**Professional:**
- Hero H1: "All Your Client Messages in One Place."
- Hero H2: "Clients message you on WhatsApp, Instagram, and more. Stop checking 5 apps. See every conversation in one clean inbox."
- Scroll: Client messages on WhatsApp → Another DMs on Instagram → Both in your unified inbox → Reply without switching apps
- Stats: 0 (missed messages) / 1 (inbox for everything) / 24/7 (AI responds when you can't)
- FAQ: What channels are supported? / Can the AI auto-reply when I'm busy? / Do I need to check multiple apps? / Is there a fee or commission?

### 3. Brand Control (`brand-control`)

**Business:**
- Hero H1: "Your Brand on Every Touchpoint. Not Ours."
- Hero H2: "Your logo, your colors, your domain. Customers see your brand from booking to confirmation. No 'Powered by' badges. No co-branding."
- Scroll: Customer visits your branded booking page → Sees your logo, colors, services → Books through your brand → Gets confirmation with your branding
- Stats: 100% (your brand, not ours) / 0 (co-branding badges) / 8 (touchpoints you control)
- FAQ: Can I use my own domain? / What can I customize? / Will customers see The Daisy brand? / Can I match my existing brand guidelines?

**Professional:**
- Hero H1: "Your Professional Brand. Your Booking Page."
- Hero H2: "Stand out with a branded profile that showcases your work. Clients book through your page, not a generic platform."
- Scroll: Client finds your branded profile → Sees your portfolio and services → Books through your page → Gets branded confirmation
- Stats: 1 (branded booking page, all yours) / 0 (platform branding visible to clients) / 10+ (languages for your audience)
- FAQ: Can I customize my profile page? / Will clients see The Daisy brand? / Can I add my portfolio? / How do clients find my page?

### 4. Smart Scheduling (`smart-scheduling`)

**Business:**
- Hero H1: "Scheduling That Fills Your Calendar.\nNot Your Time."
- Hero H2: "AI handles availability checks, conflict detection, and staff scheduling. Customers book the right person at the right time. You never touch the calendar."
- Scroll: Customer requests time → AI checks all staff availability → Suggests best slot with right stylist → Confirmed without double-booking
- Stats: 0 (scheduling conflicts) / 24/7 (bookings accepted, even after hours) / 8 (tools replaced)
- FAQ: How does AI scheduling prevent conflicts? / Can it handle multiple staff members? / Does it work with my existing calendar? / What happens if a customer needs to reschedule?

**Professional:**
- Hero H1: "Your Schedule. Your Rules.\nZero Admin."
- Hero H2: "Set your hours, block personal time, work across multiple locations. Daisy's AI fills your calendar without you lifting a finger."
- Scroll: Set your availability → Client requests a time → AI finds the perfect slot → Confirmed without interrupting you
- Stats: 0% (time spent on scheduling admin) / 24/7 (booking accepted automatically) / 0% (commission on existing clients)
- FAQ: Can I set my own working hours? / What if I work at multiple locations? / Can I block personal time? / How does AI avoid double-bookings?

### 5. Service Portfolio (`service-portfolio`)

**Business:**
- Hero H1: "Show Your Work Before They Walk In."
- Hero H2: "Rich service menus with photos, videos, and descriptions. Customers see exactly what they're booking. Confidence drives conversion."
- Scroll: Customer browses your service menu → Sees photos and videos of each service → Picks with confidence → Books immediately
- Stats: 3x (more bookings with visual menus) / 0 (guesswork for customers) / 8 (service categories supported)
- FAQ: Can I add photos and videos to services? / How do customers browse my menu? / Can I set different prices for different services? / Does it support multiple service categories?

**Professional:**
- Hero H1: "Your Portfolio Is Your Best Marketing."
- Hero H2: "Display your best work, showcase client transformations, and let your skills speak for themselves. Clients book what they see."
- Scroll: Client finds your profile → Browses your work gallery → Sees client reviews alongside photos → Books based on what they see
- Stats: 1 (professional portfolio, always visible) / 0 (cost to showcase your work) / 10+ (languages for your audience)
- FAQ: Can I upload before/after photos? / How do reviews appear on my profile? / Can I organize my portfolio by service type? / Do I need to work at a salon to have a portfolio?

### 6. AI Marketing (`ai-marketing`)

**Business:**
- Hero H1: "Marketing That Knows Your Customers."
- Hero H2: "AI analyzes customer preferences, visit history, and behavior. It sends the right offer to the right person at the right time. No marketing degree required."
- Scroll: AI identifies customers who haven't visited recently → Personalizes an offer based on their preferences → Sends via WhatsApp → Customer rebooks
- Stats: 24/7 (AI working on retention) / 0 (manual marketing effort) / 8 (tools in one platform)
- FAQ: How does AI marketing work? / What data does the AI use? / Can I control what gets sent? / Does it work for new customers too?

**Professional:**
- Hero H1: "Grow Your Client Base Without\nthe Marketing Hustle."
- Hero H2: "Daisy's AI learns your clients' preferences and sends personalized rebooking reminders. You get repeat clients without chasing them."
- Scroll: AI learns client preferences → Notices a client is due for a visit → Sends personalized reminder → Client rebooks automatically
- Stats: 0 (hours spent on marketing) / 24/7 (AI-powered retention) / 0% (commission on existing clients)
- FAQ: Does the AI contact my clients for me? / Can I control what messages are sent? / How does it know when to send reminders? / Is there a fee or commission?

### 7. All-in-One (`all-in-one`)

**Business:**
- Hero H1: "8 Tools. One Platform.\nZero Headaches."
- Hero H2: "Booking, marketing, payments, staff scheduling, customer acquisition, analytics, brand management, and AI reception. Daisy replaces them all. One subscription, one dashboard, one login."
- Scroll: See your current tool stack → Watch Daisy replace each one → Everything in one dashboard → One login, one subscription
- Stats: 8 (tools replaced) / 1 (subscription for everything) / 24/7 (AI running it all)
- FAQ: What tools does Daisy replace? / How much does it cost compared to separate tools? / Can I migrate my data from current tools? / Is there a free trial?

**Professional:**
- Hero H1: "One App for Your Entire Career."
- Hero H2: "Scheduling, bookings, payments, client management, portfolio, marketing, and AI assistant. Everything you need, nothing you don't."
- Scroll: Scheduling app gone → Payment app gone → Marketing effort gone → Everything in one app
- Stats: 1 (app for everything) / 0% (commission on existing clients) / 24/7 (AI assistant included)
- FAQ: What does the all-in-one app include? / Is there a fee or commission? / Can I manage multiple locations? / How do I get started?

---

## Shared Content (same across all angles)

### How It Works

**Business (all angles):**
1. Sign up and tell us about your business. Takes 5 minutes. Tell us your services, staff, and hours.
2. Our team helps you get set up. We migrate your data, configure your AI receptionist, and test everything with you.
3. Go live. Your AI receptionist takes over. Customers get instant responses. You get control.

**Professional (all angles):**
1. Sign up and tell us about yourself. Takes 5 minutes. Set your services, availability, and pricing.
2. Our team helps you get set up. We configure your profile, set up your AI assistant, and walk you through everything.
3. Go live. Focus on your clients. Daisy handles your bookings. You handle your craft.

### Pricing Hook

**Business (all angles):**
- Headline: "Free to Start. Grow at Your Own Pace."
- Body: 14-day free trial, flexible plans from $50/month, commission only on marketplace customers, AI learns preferences over time.

**Professional (all angles):**
- Headline: "Free to Join. Zero Risk."
- Body: Free to start, premium features available, commission only on marketplace clients, AI learns and personalizes.

### Form

**Business:** "Ready to Take Control? Tell Us About Your Business." / subtitle / defaultType="business"
**Professional:** "Get Listed on The Daisy for Free" / subtitle / defaultType="freelance"

---

## SEO / GEO

### Metadata per page
Each page gets unique:
- `<title>` with angle keyword + persona
- `<meta description>` targeting angle-specific search intent
- `keywords` array
- OpenGraph and Twitter card metadata
- `WebPageSchema` JSON-LD
- `PageBreadcrumbSchema` (Home → Solutions → [Angle] → [Persona])
- `FaqSchema` from fallback FAQs
- `answerBlock` in hero for GEO/AI citation

### Sitemap
All 14 pages added to `src/app/sitemap.ts`:
- Priority: 0.8 (below main landing pages at 1.0/0.9, above blog at 0.6)
- changeFrequency: 'monthly'
- Both locales via `localizedEntries`

### URL structure for SEO
```
/en/solutions/ai-receptionist/business      — targets "salon AI receptionist"
/en/solutions/smart-scheduling/business     — targets "salon scheduling software"
/en/solutions/unified-inbox/business        — targets "salon customer messaging"
/en/solutions/brand-control/business        — targets "white-label salon booking"
/en/solutions/service-portfolio/business    — targets "salon service menu software"
/en/solutions/ai-marketing/business         — targets "salon marketing automation"
/en/solutions/all-in-one/business           — targets "all-in-one salon software"
```

---

## Files to Create/Modify

### New files
| File | Purpose |
|------|---------|
| `src/app/[locale]/(routes)/solutions/[slug]/[persona]/page.tsx` | Server page component |
| `src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx` | Client wrapper |
| `src/lib/constants/solutions/angles/index.ts` | Lookup function, slug/persona validation |
| `src/lib/constants/solutions/angles/ai-receptionist.ts` | AI receptionist angle data |
| `src/lib/constants/solutions/angles/unified-inbox.ts` | Unified inbox angle data |
| `src/lib/constants/solutions/angles/brand-control.ts` | Brand control angle data |
| `src/lib/constants/solutions/angles/smart-scheduling.ts` | Smart scheduling angle data |
| `src/lib/constants/solutions/angles/service-portfolio.ts` | Service portfolio angle data |
| `src/lib/constants/solutions/angles/ai-marketing.ts` | AI marketing angle data |
| `src/lib/constants/solutions/angles/all-in-one.ts` | All-in-one angle data |

### Modified files
| File | Change |
|------|--------|
| `src/app/sitemap.ts` | Add 14 solution angle routes (priority 0.8, monthly) |
| `src/app/[locale]/(routes)/solutions/[slug]/page.tsx` | Change `dynamicParams = false` to `true` |

### No component changes needed
All components are reused as-is: `LandingHero`, `LockerContainer`, `MobileScrollSection`, `InlineCTA`, `SocialProofBar`, `HowItWorks`, `PricingHook`, `PlatformStrengths`, `QASection`, `BecomeFormPartner`.

---

## Content Rules (apply to all copy)

- **No em dashes** — use periods, commas, or colons
- **No "bilingual"** — use "multilingual"
- **WhatsApp and Instagram** — not "calls" or "phone" (call handling not yet live)
- **Server-side rendering** — `lang` always passed as prop, never from Zustand store
- **Both EN and AR** — every data file has complete Arabic translations
- **Headlines support `\n`** — `whitespace-pre-line` on H1 preserves forced line breaks

---

## Out of Scope

- Custom images per angle (reuse existing product mockups initially)
- A/B testing infrastructure (compare conversion by looking at signup data per URL)
- Angle-specific blog content or pillar pages
- Dynamic angle switching on the same page (each URL is a separate page)
- Changes to existing `/solutions/[slug]` SEO content pages (those stay as-is)
