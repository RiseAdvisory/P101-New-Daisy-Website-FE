# Landing Page Redesign V2 — Design Spec

**Date:** 2026-03-19
**Status:** Approved
**Scope:** Redesign both Business and Professional landing pages with a new 8-section structure focused on pain-led messaging, AI story scroll, and conversion optimization.

## Context

The current landing pages were built incrementally — hero, scroll features, PlatformStrengths, GrowthSection, ExperienceDaisy, FAQ, and form. Analysis revealed:

- **Redundancy:** "Replace 8 tools" is stated 4 times across 4 consecutive sections
- **Missing sections:** No pain statement, no social proof, no "how it works," no pricing hook
- **Wrong order:** Features before proof, client acquisition buried deep
- **Weak conversion path:** CTAs only at top and bottom, inconsistent CTA text

This redesign follows the SaaS landing page framework: problem-led headline, product demo, social proof, simplicity, and features below the fold.

### Core Pain Points (drives all copy)

**Business owners:** Reception is chaos. Calls go unanswered, customers book elsewhere, they can't be everywhere at once. Daisy gives them control and elevates their customer experience.

**Professionals:** They're their own receptionist. Managing schedules, answering inquiries, handling payments — all while trying to provide excellent service. Daisy lets them focus on their craft.

### Key Decisions

- **Pain statement merged into hero headline** (not a separate section)
- **One scroll section: the AI booking story** (replaces both feature tour and AI spotlight)
- **Features grid moved below social proof** (per SaaS landing page best practices)
- **GrowthSection, ExperienceDaisy, JoinTheDaisy removed** (redundant or absorbed into new sections)
- **Inline CTAs after sections 2, 5, and 6** (not just top and bottom)
- **Both pages share the same 8-section structure** with different content

---

## Page Structure (8 sections)

```
1. Hero              — Problem-led H1 + H2 + CTA + trust line
2. AI Story Scroll   — Customer → AI → Booking → Payment → Calendar
   [inline CTA]
3. Social Proof      — Product stats bar
4. How It Works      — 3 steps to go live
5. Pricing Hook      — Free tier + commission model + CTA
   [inline CTA]
6. Features Grid     — 8 capabilities
   [inline CTA]
7. FAQ               — 4 questions
8. Form              — Lead capture
```

---

## Section 1: Hero

Server component in `page.tsx`. Problem-led headline, supporting sub-headline, primary CTA, trust line, and GEO answer block.

### Business

**H1:** "Stop Losing Customers to Missed Calls"

**H2:** "Daisy's AI receptionist answers every inquiry, books every appointment, and processes every payment — 24/7. One platform replaces your entire front desk."

**CTA:** "Start Your 14-Day Free Trial"

**Trust line (below CTA):** "No credit card required. Our team helps you set up."

**GEO Answer Block:**
- Q: "What is The Daisy for beauty businesses?"
- A: "The Daisy is an AI-powered beauty business platform that combines a 24/7 AI receptionist with booking management, customer acquisition, payments, staff scheduling, and marketing. It replaces 8 separate tools with one multilingual platform — currently supporting Arabic and English."

### Professional

**H1:** "Focus on Your Craft. Daisy Handles the Rest."

**H2:** "Stop being your own receptionist. Daisy's AI manages your bookings, answers client questions, and processes payments — while your hands are busy doing what you do best."

**CTA:** "Start Your Free Trial"

**Trust line:** "Free to join. No credit card required."

**GEO Answer Block:**
- Q: "What is The Daisy for beauty professionals?"
- A: "The Daisy is an all-in-one app for beauty and wellness professionals. Its AI assistant handles bookings, client communication, and payments 24/7 — so professionals can focus on providing exceptional services. Features flexible scheduling, multilingual support, and a marketplace for client discovery."

### Arabic copy

Business H1: "توقف عن خسارة العملاء بسبب المكالمات الفائتة"
Business H2: "موظف الاستقبال الذكي من ديزي يجيب على كل استفسار، يحجز كل موعد، ويعالج كل دفعة — على مدار الساعة. منصة واحدة تحل محل مكتب الاستقبال بالكامل."

Professional H1: "ركّز على إبداعك. ديزي تتولى الباقي."
Professional H2: "توقف عن كونك موظف استقبال نفسك. الذكاء الاصطناعي في ديزي يدير حجوزاتك، يجيب على أسئلة العملاء، ويعالج المدفوعات — بينما يداك مشغولتان بما تتقنه."

CTA (both): "ابدأ تجربتك المجانية"
Trust line (business): "لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد."
Trust line (professional): "الانضمام مجاني. لا حاجة لبطاقة ائتمان."

---

## Section 2: AI Story Scroll

The core product demo. Uses the existing `LockerContainer` scroll mechanic (desktop) and `MobileScrollSection` (mobile). **4 panels** telling a sequential story: a customer interacts with the AI from first message to confirmed appointment.

### Business version — "Watch Your AI Receptionist in Action"

**Panel 1 — Customer Reaches Out**
- Title: "A Customer Has a Question"
- Subtitle: "Your AI Receptionist Responds Instantly"
- Description: "A customer messages at 9 PM asking about availability for a balayage appointment. Your AI receptionist responds within seconds — friendly, professional, in their language."
- Bullets: Responds in Arabic and English / Available 24/7, even holidays / Knows your services and pricing

**Panel 2 — Appointment Booked**
- Title: "Appointment Booked in Minutes"
- Subtitle: "Smart Scheduling, Zero Conflicts"
- Description: "The AI checks your real-time availability, suggests the best time slot, and books the appointment — no double-bookings, no back-and-forth."
- Bullets: Checks staff availability automatically / Sends instant confirmation / Avoids scheduling conflicts

**Panel 3 — Payment Processed**
- Title: "Payment Handled Before They Arrive"
- Subtitle: "Deposits, Full Payments, or Pay-at-Visit"
- Description: "The customer pays a deposit or the full amount right in the chat. By the time they walk in, everything is settled."
- Bullets: Secure in-chat payment / Deposit or full payment options / Automatic receipts sent

**Panel 4 — On Your Calendar**
- Title: "Confirmed and on Your Calendar"
- Subtitle: "You Didn't Lift a Finger"
- Description: "The appointment appears on your calendar with all the details — service, time, staff member, payment status. Your customer got a perfect experience. You were home with your family."
- Bullets: Synced to your business calendar / Customer gets reminder before visit / Staff notified automatically

### Professional version — "See How Daisy Works While You Work"

**Panel 1 — Client Messages While You're Busy**
- Title: "A Client Reaches Out"
- Subtitle: "You're Mid-Appointment. Daisy Answers."
- Description: "You're giving a haircut when a new client messages asking about your availability for highlights. Daisy responds instantly — you never even see the notification."
- Bullets: AI responds while you work / Knows your services and prices / Speaks their language

**Panel 2 — Booking Confirmed**
- Title: "Booked Into Your Next Open Slot"
- Subtitle: "No Phone Calls. No Back-and-Forth."
- Description: "Daisy checks your schedule, finds the next available slot, and confirms the booking. The client gets an instant confirmation. You find out when you're done with your current client."
- Bullets: Real-time schedule awareness / Instant booking confirmation / Zero interruption to your work

**Panel 3 — Payment Secured**
- Title: "Paid Before They Sit Down"
- Subtitle: "No Awkward Money Conversations"
- Description: "The client pays through the app before their appointment. When they arrive, you just focus on the service."
- Bullets: In-app payment processing / Deposit or full prepayment / Automatic receipts

**Panel 4 — Your Schedule, Handled**
- Title: "Your Calendar, Always Up to Date"
- Subtitle: "Check Between Clients. Everything's There."
- Description: "When you check your phone between appointments, you see the new booking with all the details. The client is confirmed, paid, and knows exactly when to arrive. You didn't do a thing."
- Bullets: Synced to your calendar / Client gets reminders / Your earnings update in real-time

### Arabic scroll copy

Full Arabic translations of all 4 panels for both versions, following the same narrative structure. (Content to be translated matching the exact story flow.)

### Inline CTA (after scroll section)

**Business:** "Ready to put your reception on autopilot?" → "Start Your 14-Day Free Trial"
**Professional:** "Ready to stop being your own receptionist?" → "Start Your Free Trial"

---

## Section 3: Social Proof

A horizontal stats bar — compact, visual, immediately after the product demo. Uses the existing `StatisticHighlight` GEO component for semantic markup.

### Business stats

| Value | Context |
|-------|---------|
| 8 | tools replaced by one platform |
| 24/7 | AI receptionist — never misses a call |
| 10+ | languages supported |

### Professional stats

| Value | Context |
|-------|---------|
| 0% | commission on your existing clients |
| 24/7 | AI handles bookings while you work |
| 10+ | languages supported |

**Component:** A slim horizontal bar (not a full section with headline). Light background, centered stats. No headline needed — the numbers speak.

---

## Section 4: How It Works

A 3-step visual section. Simple, clean, numbered.

### Both versions (same steps, different copy)

**Business:**
1. **Sign up and tell us about your business** — "Takes 5 minutes. Tell us your services, staff, and hours."
2. **Our team helps you get set up** — "We migrate your data, configure your AI receptionist, and test everything with you."
3. **Go live — your AI receptionist takes over** — "Customers get instant responses. You get control."

**Professional:**
1. **Sign up and tell us about yourself** — "Takes 5 minutes. Set your services, availability, and pricing."
2. **Our team helps you get set up** — "We configure your profile, set up your AI assistant, and walk you through everything."
3. **Go live — focus on your clients** — "Daisy handles your bookings. You handle your craft."

### Arabic

Full Arabic translations of all 3 steps for both versions.

---

## Section 5: Pricing Hook

Not a full pricing page — just enough to answer "what does it cost?" and remove the price objection. Light background section with a clear value statement and CTA.

### Business

**Headline:** "Free to Start. Grow at Your Own Pace."

**Body:** "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Commission only on new customers the Daisy marketplace brings you — your existing clients, zero commission."

**CTA:** "Start Your 14-Day Free Trial" → `/start-free-trial/business`

**Link:** "See full pricing details →" → `/pricing`

### Professional

**Headline:** "Free to Join. Zero Risk."

**Body:** "Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Commission only on new clients who find you through the Daisy marketplace — your existing clients, always zero commission."

**CTA:** "Get Listed — Free" → `/start-free-trial/professional`

**Link:** "See full pricing details →" → `/pricing`

### Arabic

Full Arabic translations of both versions.

### Inline CTA (after pricing)

Same CTA as section content — reinforced visually.

---

## Section 6: Features Grid

The full capability inventory. Moved below social proof and pricing per the SaaS landing page framework ("benefits and features listed out below the fold"). Uses the existing `PlatformStrengths` component.

### Business — 8 capabilities

1. AI Receptionist — 24/7 automated booking, payments, and customer service
2. Smart Booking — Intelligent scheduling that fills your calendar
3. Customer Acquisition — Marketplace, cashback, and marketing tools
4. Payments & Invoicing — Seamless transactions and financial tracking
5. Staff Management — Scheduling, permissions, and performance
6. Marketing Engine — Promotions, campaigns, and customer retention
7. Analytics Dashboard — Revenue trends, insights, and reporting
8. Brand Control — White-label everything with your brand

### Professional — 8 capabilities

1. AI Booking Assistant — Handles bookings and payments while you work
2. Flexible Scheduling — Set your own hours across multiple locations
3. Earnings Tracker — Track revenue in real-time with detailed breakdowns
4. Professional Profile — Showcase your work and attract new clients
5. Client Management — Build relationships with detailed client profiles
6. Smart Notifications — Appointment reminders that reduce no-shows
7. Calendar Sync — Sync with Google Calendar and other tools
8. Marketplace Visibility — Customers find you when searching nearby

**Headline (business):** "Everything You Need to Run Your Business"
**Headline (professional):** "Everything You Need in One App"

### Inline CTA (after features)

**Business:** "Start Your 14-Day Free Trial"
**Professional:** "Start Your Free Trial"

---

## Section 7: FAQ

Trimmed to 4 questions per page. Only objection-handling questions that haven't been answered earlier on the page. No feature questions (those are covered above).

### Business (4 questions)

1. **Can I migrate from my current booking system?** — "Yes. Our onboarding team helps you migrate your client data, booking history, and preferences at no extra cost."

2. **Does The Daisy work in Arabic?** — "Yes. Fully multilingual — your AI receptionist speaks Arabic and English fluently. Customer communications, your booking page, and the entire interface support both languages with full RTL. More languages coming soon."

3. **Do I need to change how I run my business?** — "No. Daisy adapts to your workflow. Keep your brand, your processes, your team. We just handle your reception and give you better tools."

4. **Is my data safe?** — "Yes. Enterprise-grade encryption, secure payment processing, and your data is never shared. You own your customer data completely."

### Professional (4 questions)

1. **Is there a fee or commission?** — "Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace — your existing clients, zero commission. Premium features available through affordable subscription tiers."

2. **Do I need to work at a salon to join?** — "No. Freelance professionals, independent stylists, mobile service providers, and salon-based professionals are all welcome."

3. **How do customers find my profile?** — "Your profile appears in the Daisy marketplace when customers search for beauty services in your area. The more complete your profile, the higher your visibility."

4. **How and when do I get paid?** — "Earnings are tracked in real-time in the app. Payments are processed securely and deposited to your account on a weekly schedule."

### Arabic

Full Arabic translations of all FAQ items for both versions.

---

## Section 8: Form

Lead capture for visitors who want human contact before committing. Same form as the free trial signup page but positioned as "talk to us" rather than "sign up."

### Business

**Headline:** "Ready to Take Control? Tell Us About Your Business."
**Subtitle:** "Our team will reach out within 24 hours to help you get started."

### Professional

**Headline:** "Get Listed on The Daisy — Free"
**Subtitle:** "Tell us about yourself and our team will help you get set up."

### Form fields

Same as existing partner form, with `defaultType` pre-set per page:
- Business: all business fields visible, no toggle
- Professional: freelance fields only, no toggle

**Button text:** "Get Started"

**Subtitle override:** `BecomeFormPartner` currently reads subtitle from `becomePartnerData` via i18n. Add a `subtitle?: string` prop — when provided, it overrides `data.subtitle`. The page data files (not hardcoded strings) should provide the persona-specific subtitles. Pass from ProfessionalClient/BusinessClient using locale-aware logic (same pattern as the `title` override).

### Arabic

**Business:**
- Headline: "مستعد للسيطرة؟ أخبرنا عن عملك."
- Subtitle: "سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك على البدء."

**Professional:**
- Headline: "سجّل في ذا ديزي — مجانًا"
- Subtitle: "أخبرنا عن نفسك وسيساعدك فريقنا في الإعداد."

---

## Components: What's Removed, What's New, What's Modified

### Removed from landing pages

| Component | Reason |
|-----------|--------|
| GrowthSection | Redundant — content absorbed into AI Story and Pricing Hook |
| ExperienceDaisy | Redundant — replaced by inline CTAs and Pricing Hook CTA |
| JoinTheDaisy | Already removed in previous sprint |
| DaysiMission | Already moved to About page in previous sprint |
| Scroll Panel 5 ("Get Started") | Dead weight — no content, no CTA |

### New components

| Component | Type | Purpose |
|-----------|------|---------|
| `InlineCTA` | Server | Simple section with headline + CTA button, reusable between sections |
| `HowItWorks` | Server | 3-step numbered section with icons |
| `PricingHook` | Server | Compact pricing summary with CTA and link to full pricing |
| `SocialProofBar` | Server | Horizontal stats bar using StatisticHighlight |

### Modified components

| Component | Change |
|-----------|--------|
| `BecomeFormPartner` | Add `subtitle` prop override (currently only `title` is overridable) |
| `LandingHero` | Add `trustLine` prop for "no credit card required" text below CTA |

### Existing components (modified for this redesign)

- `LockerContainer` + `MobileScrollSection` — used for AI Story Scroll (new data, same component, unchanged code)
- `PlatformStrengths` — used for Features Grid (new position). **Requires icon map updates** for new professional labels: add "AI Booking Assistant", "Smart Notifications", "Marketplace Visibility" (EN) and their Arabic equivalents to the `iconMap` in `PlatformStrengths.tsx`. Also add `hideStats?: boolean` prop — stats are now rendered by the separate `SocialProofBar`, so PlatformStrengths should hide its stats row when `hideStats={true}` is passed.
- `QASection` — used for FAQ (new questions, same component, unchanged code)
- `ProfileForm` — used in Form section (no changes needed, already has `onSuccess`, `buttonText`, `defaultType`)

---

## Files to Create/Modify

### New files

| File | Purpose |
|------|---------|
| `src/components/shared/InlineCTA.tsx` | Reusable CTA section between major sections |
| `src/components/shared/HowItWorks.tsx` | 3-step visual section |
| `src/components/shared/PricingHook.tsx` | Compact pricing summary section |
| `src/components/shared/SocialProofBar.tsx` | Horizontal stats bar |

### Modified files

| File | Change |
|------|--------|
| `src/lib/constants/pages/businessPage.ts` | Replace all content — new hero, new scroll data (AI story), new FAQ, add how-it-works/pricing-hook data |
| `src/lib/constants/pages/professionalPage.ts` | Same — replace all content for new structure |
| `src/lib/constants/pages/scrollSections.types.ts` | Redefine `LandingPageContent` — remove `growth: GrowthData`, add `howItWorks`, `pricingHook`, `inlineCtas`, `socialProofStats`. Add new interfaces: `HowItWorksData`, `PricingHookData`, `InlineCTAData`, `SocialProofStat` |
| `src/components/shared/PlatformStrengths.tsx` | Add `hideStats` prop, add new icon map entries for renamed capabilities |
| `src/app/[locale]/business/page.tsx` | Update hero props, add trust line |
| `src/app/[locale]/professional/page.tsx` | Same |
| `src/app/[locale]/business/BusinessClient.tsx` | Remove GrowthSection, ExperienceDaisy imports. Add InlineCTA, SocialProofBar, HowItWorks, PricingHook. Reorder sections. |
| `src/app/[locale]/professional/ProfessionalClient.tsx` | Same restructure |
| `src/components/shared/LandingHero.tsx` | Add `trustLine` prop |
| `src/components/businessPage/BecomeFormPartner.tsx` | Add `subtitle` prop |

---

## Updated Type System

The `LandingPageContent` interface in `scrollSections.types.ts` must be redefined:

```typescript
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

export interface LandingPageContent {
  hero?: HeroData;                          // kept
  scrollSections: LocalScrollSection[];     // kept (now 4 panels, AI story)
  platformStrengths?: PlatformStrengthsData; // kept (features grid)
  socialProofStats?: SocialProofStat[];     // NEW
  howItWorks?: HowItWorksData;              // NEW
  pricingHook?: PricingHookData;            // NEW
  inlineCtas?: {                            // NEW
    afterScroll: InlineCTAData;
    afterFeatures: InlineCTAData;
  };
  titleFraque: string;                      // kept (FAQ title)
  fallbackFaqs?: FaqItem[];                 // kept
  // REMOVED: growth: GrowthData (GrowthSection eliminated)
}
```

**Note on scroll sections:** The `scrollSections` array is reduced from 5 to 4 items. The 5th panel ("Get Started") is removed. The remaining 4 panels contain completely new AI story content (not the old feature tour).

---

## Component Rendering Notes

**Server vs Client:** The new components (InlineCTA, HowItWorks, PricingHook, SocialProofBar) are labeled "Server" by intent — they render static content. However, they will be rendered inside the Client boundary (`BusinessClient.tsx` / `ProfessionalClient.tsx`) via `dynamic()` imports for correct visual positioning. This means they are effectively client-rendered but still get SSR via Next.js `dynamic()` prerendering. This matches the pattern used for PlatformStrengths.

**Hero trust line:** The `categoryLabel` prop remains unchanged ("FOR BUSINESS OWNERS" / "FOR BEAUTY PROFESSIONALS"). New `trustLine` prop is added.

**`-mt-[100px]` offset:** The existing `md:-mt-[100px]` on the Client wrapper div may need adjustment after adding the trust line to the hero. During implementation, verify the overlap visually and adjust if needed.

**FaqSchema:** Reducing FAQs from 5→4 (business) and 7→4 (professional) is intentional. Fewer, higher-quality FAQ items in structured data.

**Arabic copy:** All Arabic translations are marked as required for each section. Arabic content for Sections 3-6 and 8 must be written during implementation — this is a translation task, not a separate follow-up. The implementer should translate based on the English copy provided.

**Inline CTA links:** All inline CTAs point to the free trial signup pages:
- Business: `/start-free-trial/business`
- Professional: `/start-free-trial/professional`

---

## Page Flow — Final Structure

### Business page render order

```
page.tsx (server):
  1. LandingHero (problem-led, with trust line and GEO answer block)

BusinessClient (client boundary):
  2. LockerContainer / MobileScrollSection (AI Story — 4 panels)
  3. InlineCTA ("Ready to put your reception on autopilot?")
  4. SocialProofBar (8 tools / 24/7 AI / 10+ languages)
  5. HowItWorks (3 steps)
  6. PricingHook (free trial + commission model + CTA)
  7. PlatformStrengths (8 capabilities)
  8. InlineCTA ("Start Your 14-Day Free Trial")
  9. QASection (4 FAQs + FaqSchema)
  10. BecomeFormPartner (form with business defaults)
```

### Professional page render order

Same structure, different content.

---

## Out of Scope

- Custom images/illustrations for the AI story panels (reuse existing mockup assets initially)
- Video testimonials or embedded demos
- A/B testing framework
- Customer logo collection for social proof (future)
- Mobile-specific layout changes beyond responsive Tailwind
