# Form Unification, Bug Fixes, Geo Detection & Terminology Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify form experience with inline success state everywhere, fix all form bugs (validation, dev URL, localization, dead code), add IP-based country code detection via Vercel geo headers, and standardize "Professional" terminology replacing "Freelance" codebase-wide.

**Architecture:** ProfileForm gets validation fixes, geo-based country default (reads cookie client-side), and always calls onSuccess. BecomeFormPartner gets its own submitted state + success view (matching StartFreeTrialClient). Middleware sets geo cookie. Codebase-wide rename of 'freelance' to 'professional' in prop types, values, and UI labels (SEO keywords preserved).

**Tech Stack:** Next.js 14, TypeScript, Zod validation, React Hook Form, Vercel x-vercel-ip-country header, Tailwind CSS.

**Spec:** `docs/superpowers/specs/2026-03-20-form-unification-design.md`

---

## Task 1: Create country dial code utility and update middleware

**Files:**
- Create: `src/helpers/countryDialCodes.ts`
- Modify: `src/middleware.ts`
- Modify: `src/helpers/getCountryCodes.ts`

- [ ] **Step 1: Create the dial code utility**

Create `src/helpers/countryDialCodes.ts`:

```tsx
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
  if (!isoCountry) return '+971';
  return countryToDialCode[isoCountry.toUpperCase()] ?? '+971';
}

export function getCountryFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/geo-country=([A-Z]{2})/);
  return match ? match[1] : null;
}
```

- [ ] **Step 2: Update middleware to set geo cookie**

Read `src/middleware.ts`. Add geo cookie logic. After the existing middleware logic, before the response is returned:

```tsx
const country = request.headers.get('x-vercel-ip-country');
if (country) {
  response.cookies.set('geo-country', country, {
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
    sameSite: 'lax',
  });
}
```

Create a helper function and apply it to all non-static-asset returns:

```tsx
function setGeoCookie(response: NextResponse, request: NextRequest): NextResponse {
  const country = request.headers.get('x-vercel-ip-country');
  if (country) {
    response.cookies.set('geo-country', country, {
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
    });
  }
  return response;
}
```

Apply `setGeoCookie(response, request)` to every `return` statement EXCEPT the static assets early return (which should not set cookies on CSS/JS/image requests). Wrap existing `return setLocaleCookie(...)` calls with `return setGeoCookie(setLocaleCookie(...), request)`.

- [ ] **Step 3: Fix dev URL in getCountryCodes.ts**

Read `src/helpers/getCountryCodes.ts`. Find the hardcoded `devapp.trythedaisy.com` URL and replace with `Constants.BASE_URL`:

```tsx
import { Constants } from '@/helpers/oldApi';

// Replace the hardcoded URL with:
const response = await fetch(`${Constants.BASE_URL}countries`, { ... });
```

- [ ] **Step 4: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 5: Commit**

```bash
git add src/helpers/countryDialCodes.ts src/middleware.ts src/helpers/getCountryCodes.ts
git commit -m "feat: add geo-based country code detection via Vercel headers"
```

---

## Task 2: Fix all ProfileForm bugs

**Files:**
- Modify: `src/components/formBusiness/FormBusiness.tsx`
- Modify: `src/lib/constants/shared/formBusinessData.ts`

This is the biggest task. Read both files completely before starting.

- [ ] **Step 1: Add new i18n strings to formBusinessData.ts**

First, update the `FormBusinessContent` TypeScript interface to include the new fields:
```tsx
formDescription: {
  // ... existing fields
  errorRequired: string;
  countryCode: string;
  buttonLoading: string;
  optionalLabel: string;
};
formPlaceholder: {
  // ... existing fields
  errorSubmit: string;
  businessTypeOptions: string[];
};
```

Then add to the English `formDescription` object:
```tsx
errorRequired: 'This field is required',
countryCode: 'Code',
buttonLoading: 'Sending...',
optionalLabel: '(Optional)',
```

Add to the English `formPlaceholder` object:
```tsx
errorSubmit: 'Something went wrong. Please try again.',
businessTypeOptions: ['Salon', 'Spa', 'Clinic', 'Other'],
```

Add the same to the Arabic section:
```tsx
// formDescription:
errorRequired: 'هذا الحقل مطلوب',
countryCode: 'الرمز',
buttonLoading: 'جاري الإرسال...',
optionalLabel: '(اختياري)',

// formPlaceholder:
errorSubmit: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
businessTypeOptions: ['صالون', 'سبا', 'عيادة', 'أخرى'],
```

- [ ] **Step 2: Fix ProfileForm — remove dead state, fix phone, fix validation, add geo default, localize, change Business Type to Select**

In `FormBusiness.tsx`, make these changes:

**a) Remove dead `country_code` useState** (line ~45):
Delete `const [country_code, setCountryCode] = useState('+1');`

**b) Remove standalone `mobile` useState** (line ~47):
Delete `const [mobile, setPhoneNumber] = useState('');`

**c) Add geo detection import and default:**
```tsx
import { getCountryFromCookie, getDialCode } from '@/helpers/countryDialCodes';

// Inside component, before useForm:
const detectedCountry = getCountryFromCookie();
const defaultDialCode = getDialCode(detectedCountry);
```

**d) Fix contentChange initial value:**
```tsx
const [contentChange, setContentChange] = useState({
  serviceProvidorType: 'Professional', // was 'Freelances'
  homeVisits: 'No',
});
```

**e) Use a single static Zod schema with `.superRefine()` for conditional validation:**

Do NOT use `useMemo` to swap schemas (RHF's `zodResolver` captures the schema at init and doesn't re-evaluate). Instead, use one schema that conditionally validates based on a closure over `business_type`:

```tsx
// Define the schema as a function that closes over business_type
const getFormSchema = (isBusiness: boolean) => z.object({
  name: z.string().min(1, textForm?.errorRequired || 'Required'),
  email: z.string().email(descriptionForm?.errorEmail),
  business_type: z.string(),
  business_name: z.string(),
  social_media: z.string(),
  country_code: z.string(),
  mobile: z.string().min(1, textForm?.errorRequired || 'Required'),
  location_count: z.string(),
  staff_count: z.string(),
}).superRefine((data, ctx) => {
  if (isBusiness) {
    if (!data.business_type) {
      ctx.addIssue({ code: 'custom', path: ['business_type'], message: textForm?.errorRequired || 'Required' });
    }
    if (!data.business_name) {
      ctx.addIssue({ code: 'custom', path: ['business_name'], message: textForm?.errorRequired || 'Required' });
    }
  }
});
```

Then in the `useForm` call, pass a custom resolver that re-evaluates:
```tsx
const form = useForm({
  resolver: async (values, context, options) => {
    const schema = getFormSchema(business_type);
    return zodResolver(schema)(values, context, options);
  },
  // ... defaultValues
});
```

This ensures the schema is freshly evaluated on every validation pass using the current `business_type` state. No `useMemo`, no stale resolver.

Also add a `useEffect` to clear errors when business_type changes:
```tsx
useEffect(() => {
  form.clearErrors();
}, [business_type, form]);
```

**Note:** All `errorRequired` references use `textForm?.errorRequired` (from `formDescription` object, where we added the key in Step 1).

**f) Update useForm default values:**
```tsx
const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {
    type: 'enquiry',
    name: '',
    business_type: '',
    email: '',
    social_media: '',
    mobile: '',
    location_count: '',
    staff_count: '',
    business_name: '',
    content: '',
    country_code: defaultDialCode,  // was '+1'
  },
});
```

**g) Fix phone input to use RHF field instead of useState:**
Find the phone number `<Input>` and change from:
```tsx
value={mobile}
onChange={(e) => setPhoneNumber(e.target.value)}
```
to using the RHF field spread:
```tsx
{...field}
```

**h) Fix onSubmit — remove mobile override, remove success toast, localize error toast:**
```tsx
const onSubmit = async (data: any) => {
  const contentChangeString = JSON.stringify(contentChange);
  const formData = {
    ...data,
    // Remove: mobile: mobile (RHF data.mobile now has the value)
    content: contentChangeString,
    type: 'enquiry',
  };
  try {
    setIsSubmit(true);
    const response = await fetch(`${Constants.BASE_URL}vendor/demo/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error('Form submission failed');
    await response.json();
    // Remove: toast.success('Sent Successfully!');
    form.reset();
    onSuccess?.();
  } catch {
    setIsSubmit(false);
    toast.error(descriptionForm?.errorSubmit || 'Error!');
  } finally {
    setIsSubmit(false);
  }
};
```

**i) Localize submit button loading text:**
```tsx
{isSubmit ? (textForm?.buttonLoading || 'Sending...') : buttonText || `${textForm?.buttonText}`}
```

**j) Localize "Code" label:**
```tsx
<FormLabel ...>{textForm?.countryCode || 'Code'}</FormLabel>
```

**k) Add "(Optional)" to optional field labels:**
For Social Media, Number of Locations, Number of Staff, and Home Service labels, append:
```tsx
{textForm?.socialMediaAccount} {textForm?.optionalLabel && <span className="text-[#aab4b3] font-normal">{textForm.optionalLabel}</span>}
```

**l) Change Business Type from text input to Select dropdown:**
Replace the Business Type `<Input>` with a `<Select>` using options from `descriptionForm.businessTypeOptions`:
```tsx
<Select onValueChange={field.onChange}>
  <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
    <SelectValue placeholder={descriptionForm?.businessType} />
  </SelectTrigger>
  <SelectContent>
    {descriptionForm?.businessTypeOptions?.map((option: string, index: number) => (
      <SelectItem key={index} value={option}>{option}</SelectItem>
    ))}
  </SelectContent>
</Select>
```

- [ ] **Step 3: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest --no-coverage 2>&1 | grep -E "^Test Suites:|^Tests:"
```

- [ ] **Step 4: Commit**

```bash
git add "src/components/formBusiness/FormBusiness.tsx" "src/lib/constants/shared/formBusinessData.ts"
git commit -m "fix: form validation, geo country default, localization, Business Type Select, dead code removal"
```

---

## Task 3: Unify BecomeFormPartner with inline success state

**Files:**
- Modify: `src/components/businessPage/BecomeFormPartner.tsx`

- [ ] **Step 1: Add submitted state and success view**

Read `BecomeFormPartner.tsx` and `StartFreeTrialClient.tsx` (for the success state pattern).

**Styling note:** `BecomeFormPartner` sits on a `bg-primary` (dark) background, while `StartFreeTrialClient` sits on `bg-[#F8F5F3]` (light). The success state colors must adapt: use white text on the dark BecomeFormPartner background (since it's already inside a dark section). This is an intentional deviation from StartFreeTrialClient's dark-on-light scheme.

Update BecomeFormPartner:

```tsx
import { useState } from 'react';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';
import { startFreeTrialData } from '@/lib/constants/pages/startFreeTrialData';

// Inside component:
const [submitted, setSubmitted] = useState(false);

// Get success copy from shared data
const trialType = defaultType === 'business' ? 'business' : 'professional';
const successData = t(startFreeTrialData[trialType as keyof typeof startFreeTrialData], locale);

if (submitted) {
  return (
    <div className="bg-primary px-4 py-16 md:py-24">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {successData.success.title}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
          {successData.success.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppStoreButton />
          <PlayMarketButton />
        </div>
      </div>
    </div>
  );
}

// Normal render: pass onSuccess to ProfileForm
<ProfileForm
  defaultType={defaultType}
  onSuccess={() => setSubmitted(true)}
/>
```

- [ ] **Step 2: Verify build**

```bash
npx next build 2>&1 | grep "Error" | head -5
```

- [ ] **Step 3: Commit**

```bash
git add "src/components/businessPage/BecomeFormPartner.tsx"
git commit -m "feat: add inline success state to BecomeFormPartner (unified with trial page)"
```

---

## Task 4: Standardize "Professional" terminology codebase-wide

**Files:** Multiple (grep to find all)

- [ ] **Step 1: Find all instances**

```bash
grep -rn "freelance\|Freelance\|FREELANCE\|Freelances" src/ --include="*.ts" --include="*.tsx" | grep -v node_modules | grep -v ".test."
```

- [ ] **Step 2: Update prop type definitions**

In `FormBusiness.tsx`:
```tsx
// BEFORE:
interface ProfileFormProps {
  defaultType?: 'business' | 'freelance';

// AFTER:
interface ProfileFormProps {
  defaultType?: 'business' | 'professional';
```

In `BecomeFormPartner.tsx`:
```tsx
// Same change to the interface
defaultType?: 'business' | 'professional';
```

- [ ] **Step 3: Update all callers passing defaultType="freelance"**

Search and replace in these files:
- `src/app/[locale]/professional/ProfessionalClient.tsx`: `defaultType="freelance"` → `defaultType="professional"`
- `src/app/[locale]/start-free-trial/[type]/StartFreeTrialClient.tsx`: update `StartFreeTrialClientProps` interface `defaultType: 'business' | 'freelance'` → `'business' | 'professional'`, and the ternary that derives it in `page.tsx`
- `src/app/[locale]/start-free-trial/[type]/page.tsx`: `const defaultType = trialType === 'business' ? 'business' : 'freelance'` → `'professional'`
- `src/app/[locale]/(routes)/solutions/[slug]/[persona]/SolutionAngleClient.tsx`: `persona === 'business' ? 'business' : 'freelance'` → `'professional'`
- Any other files found in the grep

- [ ] **Step 4: Update internal logic in ProfileForm**

```tsx
// BEFORE:
const [business_type, setBusinessType] = useState(defaultType === 'business');

// AFTER (same logic, professional = not business = false, which is correct):
const [business_type, setBusinessType] = useState(defaultType === 'business');
// No change needed — 'professional' !== 'business' evaluates to false, same as before
```

```tsx
// BEFORE:
const showToggle = !defaultType;

// AFTER (same logic, still correct):
const showToggle = !defaultType;
```

- [ ] **Step 5: Update UI-facing copy that says "Freelance"**

In `formBusinessData.ts`, check the toggle labels. The EN value `serviceProvidorValue[1]` should already be "Professional" (verify). If it says "Freelancer" or "Freelance", change to "Professional".

**SEO EXCEPTION:** Do NOT change keywords, meta descriptions, pillar content slugs, or blog content that targets "freelance" search queries. Only change UI labels and code identifiers.

- [ ] **Step 6: Update tests**

Search test files for `"freelance"` and update to `"professional"`:
```bash
grep -rn "freelance" src/ --include="*.test.*"
```

Update each test to use `"professional"` where it was `"freelance"`.

- [ ] **Step 7: Verify build and tests**

```bash
npx next build 2>&1 | grep "Error" | head -5
npx jest --no-coverage 2>&1 | grep -E "^Test Suites:|^Tests:"
```

- [ ] **Step 8: Commit**

```bash
git add -u
git commit -m "refactor: standardize Professional terminology, replace all Freelance references in UI and code"
```

---

## Task 5: Update tests for form changes

**Files:**
- Modify: existing test files for form components

- [ ] **Step 1: Find and update form-related tests**

```bash
grep -rn "FormBusiness\|ProfileForm\|BecomeFormPartner" src/ --include="*.test.*"
```

For each test file found:
- Update mocks to match new prop interfaces (`defaultType: 'professional'` instead of `'freelance'`)
- Add test for onSuccess callback in BecomeFormPartner context
- Verify validation tests match new Zod schema (name required, mobile required)

- [ ] **Step 2: Run all tests**

```bash
npx jest --no-coverage 2>&1 | grep -E "^Test Suites:|^Tests:"
```

- [ ] **Step 3: Commit**

```bash
git add -u
git commit -m "test: update form tests for new validation, terminology, and success state"
```

---

## Task 6: Final verification

- [ ] **Step 1: Full build**

```bash
npx next build 2>&1 | tail -20
```

Expected: Clean build, all pages SSG.

- [ ] **Step 2: Full test suite**

```bash
npx jest --no-coverage 2>&1 | tail -5
```

Expected: All tests pass.

- [ ] **Step 3: Verify no "freelance" in UI code**

```bash
grep -rn "freelance" src/ --include="*.ts" --include="*.tsx" | grep -v node_modules | grep -v ".test." | grep -v "pillar\|blog\|article\|keyword\|meta"
```

Expected: Only SEO content files (pillars, blog, keywords).

- [ ] **Step 4: Visual smoke test**

Run `npx next dev` and check:

**Form on business landing page:**
- Business Type is a Select dropdown (Salon / Spa / Clinic / Other), not free text
- Optional fields show "(Optional)" label
- Country code defaults to user's country (or +971 fallback)
- Name and email show "Required" error when submitted blank
- Phone shows "Required" error when submitted blank
- Submit → inline success state replaces form (checkmark, welcome message, app download buttons)
- Error toast is localized (test with Arabic: `/ar/business`)

**Form on professional landing page:**
- Fewer fields (no business name, type, locations, staff)
- Same success state after submit
- `defaultType` is "professional" (verify in React DevTools if needed)

**Form on trial signup page:**
- Same behavior as before (already had success state)
- Country code auto-detected

**Arabic:**
- All labels, errors, loading text, success message in Arabic
- "(اختياري)" shows on optional fields
- "جاري الإرسال..." on submit button while loading
