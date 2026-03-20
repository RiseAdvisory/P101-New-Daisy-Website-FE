# Form Unification, Bug Fixes, Geo Detection & Terminology — Design Spec

**Date:** 2026-03-20
**Status:** Approved
**Scope:** Unify form experience across all pages, fix all form bugs, add IP-based country code detection, standardize "Professional" terminology.

## Context

The `ProfileForm` component is rendered in 5 locations across the site (3 via `BecomeFormPartner` wrapper, 2 directly) (landing pages, trial signup pages, solution angle pages). The agent audit revealed 8 bugs, inconsistent post-submit experiences, and terminology inconsistencies ("Freelance" vs "Professional").

### Key Decisions

- **Unified post-submit experience:** All form contexts show inline success state (not toast-and-reset)
- **Keep all fields:** None removed. Optional fields marked "(Optional)" in labels
- **Required fields enforced:** Name, Email, Phone (all modes) + Business Name, Business Type (business mode)
- **IP-based country code:** Via Vercel `x-vercel-ip-country` header, no third-party API
- **Business Type:** Changed from free text to Select dropdown
- **"Professional" standardization:** Replace all "freelance/freelancer/freelances" with "professional" codebase-wide
- **`defaultType` values:** `'business' | 'professional'` (was `'business' | 'freelance'`)

---

## 1. Unified Form Experience

### Current state

| Context | Post-submit behavior |
|---------|---------------------|
| `BecomeFormPartner` (landing pages, solution pages) | Toast "Sent Successfully!" + form resets. No persistent confirmation. |
| `StartFreeTrialClient` (trial pages) | Full success screen: checkmark, welcome message, app download buttons |

### New state (unified)

All contexts show the same inline success state after submission:
- Checkmark icon
- "Welcome to The Daisy!" (localized)
- "Our team will reach out within 24 hours to help you get set up." (localized)
- App Store + Google Play download buttons

### Implementation

**`BecomeFormPartner`** gets its own `useState<boolean>(false)` for `submitted` state:
- When `false`: renders the form section (title, subtitle, `ProfileForm`)
- When `true`: renders the success state (same layout as `StartFreeTrialClient`)

**`ProfileForm`** always receives `onSuccess` callback from its parent. Remove the toast on success. Keep the toast on error only.

**Success state content** comes from `startFreeTrialData` (already bilingual) to keep messaging consistent. Import and use the shared success copy.

**`StartFreeTrialClient`** stays as-is (already has the correct behavior). No changes needed.

---

## 2. Bug Fixes

### 2a. Country codes from dev URL

**File:** `src/helpers/getCountryCodes.ts`
**Bug:** Fetches from `https://devapp.trythedaisy.com/api/v1/countries`
**Fix:** Use `Constants.BASE_URL` from `@/helpers/oldApi` (points to `https://app.trythedaisy.com/api/v1/`)

**Note:** The API fetch for the country code dropdown list is KEPT (it provides the full list of countries with flag images for the Select dropdown). The geo detection cookie only sets the *default selection* in that dropdown. Both systems coexist: API populates the options, geo sets the default.

### 2b. No field validation except email

**File:** `src/components/formBusiness/FormBusiness.tsx`
**Bug:** All fields except email use bare `z.string()` with no `.min(1)`
**Fix:** Update Zod schema:

```typescript
const formSchema = z.object({
  name: z.string().min(1, descriptionForm?.errorRequired || 'Required'),
  email: z.string().email(descriptionForm?.errorEmail),
  business_type: business_type ? z.string().min(1, descriptionForm?.errorRequired || 'Required') : z.string(),
  business_name: business_type ? z.string().min(1, descriptionForm?.errorRequired || 'Required') : z.string(),
  social_media: z.string(),  // optional
  country_code: z.string(),
  mobile: z.string().min(1, descriptionForm?.errorRequired || 'Required'),
  location_count: z.string(),  // optional
  staff_count: z.string(),  // optional
});
```

Add `errorRequired` to `formBusinessData` (EN: "This field is required", AR: "هذا الحقل مطلوب").

**Dynamic schema approach:** The Zod schema depends on `business_type` state (conditional required fields). Use `useMemo` with `[descriptionForm, business_type]` as dependencies to recompute the schema when the toggle changes. After schema change, call `form.clearErrors()` to prevent stale errors from the previous schema. Do NOT recreate the `useForm` instance, only the resolver's schema.

**Note:** The schema needs to be dynamic based on `business_type` state. Use `useMemo` to recompute when `business_type` changes, or use Zod's `.refine()`.

### 2c. Phone number outside React Hook Form

**Bug:** `mobile` managed by standalone `useState`, never validated by Zod
**Fix:** Remove `const [mobile, setPhoneNumber] = useState('')`. Register `mobile` with React Hook Form:
- Change the phone input from `value={mobile} onChange={(e) => setPhoneNumber(e.target.value)}` to `{...field}` from RHF's `register('mobile')`
- Remove the `mobile: mobile` override in `onSubmit` (RHF `data.mobile` will have the value)

### 2d. Toast messages hardcoded English

**Bug:** `toast.success('Sent Successfully!')` and `toast.error('Error!')`
**Fix:**
- Remove success toast entirely (replaced by inline success state)
- Localize error toast: add `errorSubmit` to `formBusinessData` (EN: "Something went wrong. Please try again.", AR: "حدث خطأ. يرجى المحاولة مرة أخرى.")
- Also localize the submit button loading text: `'Sending...'` (line 521) → add `buttonLoading` to `formBusinessData` (EN: "Sending...", AR: "جاري الإرسال...")

### 2e. "Code" label hardcoded

**Bug:** Line 316, `Code` is a plain string
**Fix:** Add `countryCode` label to `formBusinessData` (EN: "Code", AR: "الرمز")

### 2f. Dead `country_code` state variable

**Bug:** `const [country_code, setCountryCode] = useState('+1')` never used
**Fix:** Remove it entirely

### 2g. `contentChange` initializes to "Freelances"

**Bug:** `serviceProvidorType: 'Freelances'` doesn't match any UI label
**Fix:** Change to `serviceProvidorType: 'Professional'` (matches the toggle button text after terminology standardization)

### 2h. Country code defaults to +1

**Bug:** US default for a GCC-focused product
**Fix:** See Section 3 (Geo Detection)

---

## 3. IP-Based Country Code Detection

### Flow

**Important:** Reading cookies in server `page.tsx` components would break static generation (SSG → dynamic rendering). Since these are marketing pages where TTFB and CDN caching matter, we use a **client-side approach** that preserves static pages.

```
Request → Vercel Edge → x-vercel-ip-country header → middleware.ts → cookie
ProfileForm (client) → reads cookie from document.cookie → maps to dial code → sets default
```

1. **`middleware.ts`** reads `request.headers.get('x-vercel-ip-country')` (e.g., `"AE"`, `"SA"`)
2. Sets a `geo-country` cookie with the ISO country code (lightweight, set on every request)
3. **`ProfileForm` (client component)** reads the cookie directly from `document.cookie` on mount
4. Maps ISO code to dial code using a static lookup
5. Sets as the default `country_code` value in the form

**No prop threading needed.** The form reads the cookie directly since it's already a client component. No server components need to call `cookies()`. Static generation is preserved.

### Country-to-dial-code mapping

Static object in a new utility file `src/helpers/countryDialCodes.ts`:

```typescript
export const countryToDialCode: Record<string, string> = {
  // GCC (primary market)
  AE: '+971', SA: '+966', KW: '+965', BH: '+973',
  OM: '+968', QA: '+974',
  // MENA
  EG: '+20', JO: '+962', LB: '+961', IQ: '+964',
  MA: '+212', TN: '+216', DZ: '+213',
  // Key expat source countries
  IN: '+91', PK: '+92', PH: '+63', BD: '+880',
  NP: '+977', LK: '+94',
  // Major Western markets
  US: '+1', GB: '+44', CA: '+1', AU: '+61',
  DE: '+49', FR: '+33',
};

export function getDialCode(isoCountry: string | null): string {
  if (!isoCountry) return '+971'; // Default to UAE for GCC-focused product
  return countryToDialCode[isoCountry.toUpperCase()] ?? '+971';
}

export function getCountryFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/geo-country=([A-Z]{2})/);
  return match ? match[1] : null;
}
```

**Default fallback:** `+971` (UAE) instead of `+1` (USA). This product targets GCC first.

### Implementation in ProfileForm

```typescript
// Inside ProfileForm, on mount:
const detectedCountry = getCountryFromCookie();
const defaultDialCode = getDialCode(detectedCountry);

const form = useForm({
  defaultValues: {
    country_code: defaultDialCode,
    // ... other defaults
  },
});
```

**No prop drilling needed.** `ProfileForm` handles geo detection internally via the cookie. No changes to page.tsx files, BusinessClient, ProfessionalClient, SolutionAngleClient, or StartFreeTrialClient for geo purposes. Static generation is fully preserved.

---

## 4. Field Configuration

### Business mode

| # | Field | Form name | Type | Required | Validation | Label change |
|---|-------|-----------|------|----------|------------|-------------|
| 1 | Full Name | `name` | text | Yes | `.min(1)` | No change |
| 2 | Email | `email` | email | Yes | `.email()` | No change |
| 3 | Business Name | `business_name` | text | Yes | `.min(1)` | No change |
| 4 | Business Type | `business_type` | **Select** | Yes | `.min(1)` | Changed from text input to Select (Salon / Spa / Clinic / Other) |
| 5 | Country Code | `country_code` | Select | Yes | Auto-detected | Label from i18n |
| 6 | Phone | `mobile` | tel | Yes | `.min(1)` | No change |
| 7 | Social Media | `social_media` | text | No | None | Append "(Optional)" to label |
| 8 | Locations | `location_count` | Select | No | None | Append "(Optional)" |
| 9 | Staff | `staff_count` | Select | No | None | Append "(Optional)" |
| 10 | Home Service | toggle | No | None | Append "(Optional)" |

### Professional mode

| # | Field | Required | Label change |
|---|-------|----------|-------------|
| 1 | Full Name | Yes | No change |
| 2 | Email | Yes | No change |
| 3 | Country Code | Yes | Label from i18n |
| 4 | Phone | Yes | No change |
| 5 | Social Media | No | "(Optional)" |
| 6 | Home Service | No | "(Optional)" |

### Business Type dropdown options

Add to `formBusinessData`:
```typescript
businessTypeOptions: ['Salon', 'Spa', 'Clinic', 'Other'],
// Arabic:
businessTypeOptions: ['صالون', 'سبا', 'عيادة', 'أخرى'],
```

### Optional field label format

Labels for optional fields append " (Optional)" / " (اختياري)" from i18n data:
```typescript
optionalLabel: '(Optional)',
// Arabic:
optionalLabel: '(اختياري)',
```

---

## 5. "Professional" Terminology Standardization

### What changes

Replace all instances of "freelance", "freelancer", "freelances" with "professional" in user-facing content and code:

| Location | Before | After |
|----------|--------|-------|
| `defaultType` prop type | `'business' \| 'freelance'` | `'business' \| 'professional'` |
| `ProfileFormProps` interface | `defaultType?: 'business' \| 'freelance'` | `defaultType?: 'business' \| 'professional'` |
| `BecomeFormPartnerProps` | Same | Same |
| All callers passing `defaultType="freelance"` | `"freelance"` | `"professional"` |
| `contentChange` initial value | `serviceProvidorType: 'Freelances'` | `serviceProvidorType: 'Professional'` |
| `showToggle` logic | `!defaultType` | `!defaultType` (unchanged logic, new value) |
| `business_type` init | `defaultType === 'business'` | `defaultType === 'business'` (unchanged, professional = false = correct) |
| `SolutionAngleClient` | `persona === 'business' ? 'business' : 'freelance'` | `persona === 'business' ? 'business' : 'professional'` |
| Any visible copy mentioning "freelance" | "freelance" | "professional" or "independent professional" |

### Files to search

```bash
grep -rn "freelance\|Freelance\|FREELANCE\|Freelances" src/ --include="*.ts" --include="*.tsx"
```

This will catch all instances. Replace contextually:
- **Code values** (prop types, prop values, variable names): `'freelance'` → `'professional'`
- **UI labels and form copy**: "Freelance" → "Professional" or "Independent Professional"
- **SEO EXCEPTION:** Do NOT change SEO keywords, meta descriptions, pillar/blog content, or slugs that target "freelance" search queries (e.g., `freelance-beauty-professional-guide.ts`, keyword `'freelance beautician'`). These are real search terms that drive organic traffic. Only change UI labels and code identifiers.

---

## Files to Modify

### Core form files
| File | Changes |
|------|---------|
| `src/components/formBusiness/FormBusiness.tsx` | Validation, phone in RHF, remove dead state, Business Type Select, detectedCountry prop, onSuccess always called, remove success toast, localize error toast, optional labels, professional terminology |
| `src/components/businessPage/BecomeFormPartner.tsx` | Add submitted state + success view, pass onSuccess to ProfileForm, pass detectedCountry through, professional terminology |
| `src/components/formBusiness/ToogleForm.tsx` | No changes (button text comes from data, already "Professional") |
| `src/lib/constants/shared/formBusinessData.ts` | Add errorRequired, errorSubmit, countryCode label, businessTypeOptions, optionalLabel. Fix any "freelance" copy. |

### Geo detection (no prop drilling needed, preserves static generation)
| File | Changes |
|------|---------|
| `src/middleware.ts` | Read `x-vercel-ip-country`, set `geo-country` cookie |
| `src/helpers/countryDialCodes.ts` | New file: ISO country to dial code mapping + cookie reader |
| `src/helpers/getCountryCodes.ts` | Fix dev URL to use `Constants.BASE_URL` |

### Page files (no changes for geo, only terminology)
| File | Changes |
|------|---------|
| `src/app/[locale]/professional/ProfessionalClient.tsx` | Professional terminology (`defaultType="professional"`) |
| `src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx` | Professional terminology |
| Any other file passing `defaultType="freelance"` | Change to `"professional"` |

**Note:** No page.tsx files need modification for geo detection. `ProfileForm` reads the geo cookie directly from `document.cookie`. Static generation is fully preserved.

### Terminology standardization (codebase-wide grep + replace)
All files containing "freelance" in prop values, type definitions, or visible copy.

---

## Out of Scope

- Changing form field order or layout
- Adding multi-step form wizard
- Analytics/tracking for form submissions
- reCAPTCHA or bot protection
- Form field auto-fill from browser
- Changes to the backend API endpoint or payload structure
