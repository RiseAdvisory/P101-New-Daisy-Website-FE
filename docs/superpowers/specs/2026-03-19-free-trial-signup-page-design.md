# Free Trial Signup Page — Design Spec

**Date:** 2026-03-19
**Status:** Approved
**Scope:** New `/start-free-trial/business` and `/start-free-trial/professional` pages with form, success state, and CTA link updates.

## Context

The header and landing page CTAs say "Start Free Trial" but link to `/get-the-app` (app store download page). This creates a mismatch — users expect a signup action but get redirected to an app store. The actual trial activation happens in-app after signup, but we're losing leads who don't complete the app download.

### Solution

Create dedicated trial signup pages that capture lead info (same fields as the partner form) AND direct users to download the app. The team uses the captured data for onboarding outreach.

### Key Decisions

- **Two URLs** — `/start-free-trial/business` and `/start-free-trial/professional` (pre-configured per persona, no toggle)
- **Same fields as partner form** — full lead qualification (Name, Email, Phone, Social, Business Name/Type/Locations/Staff for business, Home Service toggle for both)
- **Same backend endpoint** — `Constants.BASE_URL + 'vendor/demo/enquiry'`
- **Success state** — warm tone, team will reach out within 24 hours, app download buttons shown immediately
- **All "Start Free Trial" CTAs site-wide** update to link to these pages instead of `/get-the-app`

## Page Architecture

### Routing

Dynamic route: `src/app/[locale]/start-free-trial/[type]/page.tsx`
- `[type]` = `business` | `professional`
- Invalid types redirect to `/start-free-trial/business`
- Placed at `src/app/[locale]/start-free-trial/` (same level as `/get-the-app`, `/careers`, `/business` — core navigation pages, not inside the `(routes)` group which is for SEO/content pages)

### Page Structure

```
┌─────────────────────────────────────────────────┐
│  Hero section (bg-primary, compact)             │
│  [H1 headline — persona-specific]               │
│  [Sub-headline — value prop + trial mention]     │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  Form section (bg-[#F8F5F3])                    │
│  [Same fields as partner form via ProfileForm]  │
│  [Button: "Start Your Free Trial"]              │
└─────────────────────────────────────────────────┘

── After submission, form section becomes: ──────

┌─────────────────────────────────────────────────┐
│  Success state (bg-[#F8F5F3])                   │
│  [Checkmark icon]                               │
│  "Welcome to The Daisy!"                        │
│  "Our team will reach out within 24 hours to    │
│   help you get set up. In the meantime,         │
│   download the app to get a head start."        │
│  [App Store button] [Google Play button]        │
└─────────────────────────────────────────────────┘
```

### Server/Client Split

- `page.tsx` — server component. Renders metadata, SEO schemas, hero section. Validates `[type]` param.
- Form + success state — client component (needs `useState` for submission state). Reuses existing `ProfileForm` from `src/components/formBusiness/FormBusiness.tsx`.

## Copy

### Business variant (`/start-free-trial/business`)

**Metadata:**
- Title: "Start Your Free Trial — Salon, Spa & Clinic Management | The Daisy"
- Description: "Set up your beauty business on The Daisy in minutes. 14-day free trial with full access to AI receptionist, booking, payments, marketing, and staff management. No credit card required."

**Hero:**
- H1: "Start Your 14-Day Free Trial"
- Sub: "Set up your salon, spa, or clinic on The Daisy in minutes. Full access to all features — no credit card required."

**Form button:** "Start Your Free Trial"

### Professional variant (`/start-free-trial/professional`)

**Metadata:**
- Title: "Start Your Free Trial — Beauty Professional App | The Daisy"
- Description: "Create your professional profile on The Daisy and start accepting bookings. Free to join with flexible scheduling and 24/7 AI support."

**Hero:**
- H1: "Start Your Free Trial"
- Sub: "Create your professional profile and start accepting bookings. Free to join — no credit card required."

**Form button:** "Start Your Free Trial"

### Success state (shared)

- Title: "Welcome to The Daisy!"
- Body: "Our team will reach out within 24 hours to help you get set up. In the meantime, download the app to get a head start."
- App Store button + Google Play button (reuse existing `AppStoreButton` and `PlayMarketButton` components)

### Arabic copy

**Business:**
- H1: "ابدأ تجربتك المجانية لمدة 14 يومًا"
- Sub: "أعد تشغيل صالونك أو سبا أو عيادتك على ذا ديزي في دقائق. وصول كامل لجميع الميزات — لا حاجة لبطاقة ائتمان."

**Professional:**
- H1: "ابدأ تجربتك المجانية"
- Sub: "أنشئ ملفك المهني وابدأ في قبول الحجوزات. الانضمام مجاني — لا حاجة لبطاقة ائتمان."

**Success state:**
- Title: "!مرحبًا بك في ذا ديزي"
- Body: "سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك في الإعداد. في هذه الأثناء، قم بتنزيل التطبيق للبدء مبكرًا."

**Form button:** "ابدأ تجربتك المجانية"

## CTA Link Updates

All "Start Free Trial" links across the site update to point to the new pages:

| Source | Current link | New link | File to change |
|--------|-------------|----------|----------------|
| Business hero CTA | `/get-the-app` | `/start-free-trial/business` | `businessPage.ts` → `hero.ctaLink` |
| Professional hero CTA | `/get-the-app` | `/start-free-trial/professional` | `professionalPage.ts` → `hero.ctaLink` |
| Header "Start Free Trial" button | `/get-the-app` (hardcoded) | `/start-free-trial/business` | `src/components/buttonApp/GetAppButton.tsx` line 33 — change hardcoded `href={'/get-the-app'}` to `href={'/start-free-trial/business'}` |
| Business GrowthSection CTA | `/get-the-app` | `/start-free-trial/business` | `businessPage.ts` → `growth.buttonLink` |
| Professional GrowthSection CTA | `/get-the-app` | `/start-free-trial/professional` | `professionalPage.ts` → `growth.buttonLink` |

**ExperienceDaisy:** This component renders external App Store + Google Play buttons (not internal links). Replace the two store buttons with a single "Start Your Free Trial" `<Link>` button pointing to the persona-appropriate trial page. Add a `ctaLink` prop to the `ExperienceDaisy` component. The existing `pageType` prop determines persona; the new `ctaLink` prop provides the destination. Business page passes `/start-free-trial/business`, professional passes `/start-free-trial/professional`.

**Not updated:** The `/get-the-app` page remains as-is — it's still the pure app download page linked from other places. The success state on the trial page uses app store buttons for the post-signup download step.

## Form Behavior

### Submission

- Same endpoint: `Constants.BASE_URL + 'vendor/demo/enquiry'`
- Same payload structure as existing partner form
- On success: hide form, show success state with app download buttons
- On error: show toast error, keep form visible for retry

### Success state detection

`ProfileForm` currently has no way to signal success to a parent component. Add an `onSuccess` callback prop to `ProfileForm`:

```typescript
interface ProfileFormProps {
  defaultType?: 'business' | 'freelance';
  buttonText?: string;
  onSuccess?: () => void;
}
```

In the `onSubmit` function, after `toast.success(...)` and `form.reset()`, call `onSuccess?.()`. The `StartFreeTrialClient` wrapper passes `onSuccess={() => setSubmitted(true)}` and conditionally renders the success state when `submitted` is true.

### Form defaults per variant

- Business (`type="business"`): `defaultType="business"` — toggle hidden, business fields visible
- Professional (`type="professional"`): `defaultType="freelance"` — toggle hidden, freelance fields only

### Button text override

The existing `ProfileForm` uses `textForm.buttonText` from data (currently "Get Started"). For this page, override the button text to "Start Your Free Trial" / "ابدأ تجربتك المجانية".

Either:
- Add a `buttonText` prop to `ProfileForm` that overrides the data-driven text
- Or create a wrapper component that provides the override

## Files to Create/Modify

### New files
| File | Purpose |
|------|---------|
| `src/app/[locale]/start-free-trial/[type]/page.tsx` | Server component — metadata, hero, validation |
| `src/app/[locale]/start-free-trial/[type]/StartFreeTrialClient.tsx` | Client component — form + success state |
| `src/lib/constants/pages/startFreeTrialData.ts` | Static copy data (en/ar, business/professional variants) |

### Modified files
| File | Change |
|------|--------|
| `src/lib/constants/pages/businessPage.ts` | Hero `ctaLink` → `/start-free-trial/business` |
| `src/lib/constants/pages/professionalPage.ts` | Hero `ctaLink` → `/start-free-trial/professional` |
| `src/lib/constants/shared/experienceDaisyData.ts` | Update CTA links per persona |
| `src/components/buttonApp/GetAppButton.tsx` or `src/lib/constants/shared/headerData.ts` | Header CTA link → `/start-free-trial/business` |
| `src/components/formBusiness/FormBusiness.tsx` | Add optional `buttonText` and `onSuccess` props |
| `src/components/experienceDaisy/ExperienceDaisy.tsx` | Add `ctaLink` prop, replace store buttons with trial link |
| `src/components/buttonApp/GetAppButton.tsx` | Change hardcoded `/get-the-app` href to `/start-free-trial/business` |
| `src/app/sitemap.ts` | Add new routes with priority 0.9, changeFrequency 'monthly' |

## Out of Scope

- Changing the `/get-the-app` page itself (stays as pure app download)
- Email/SMS follow-up automation (backend concern, not frontend)
- A/B testing the form length
- Analytics event tracking for form submission (can be added later)
