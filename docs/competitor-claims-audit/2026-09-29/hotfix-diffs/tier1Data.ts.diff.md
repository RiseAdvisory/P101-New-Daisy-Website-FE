# Proposed surgical patches — `tier1Data.ts`

**Repo path:** `src/lib/constants/competitors/tier1Data.ts`  
**Status:** DRAFT ONLY — do not apply to Mac until CoS “apply”  
**Baseline read:** 2026-09-29 Asia/Kuwait via machineId `e7456546-eff7-4d06-9aa5-f51ac2a1abf3`  
**Rivals in this file:** Fresha, Booksy, Vagaro, Mindbody, Zenoti

---

## Fresha (`fresha`) — Critical C01–C03 + High H01/H07 + Medium M01–M03

### Pricing (H01 + M01)

```diff
-      startingPrice: 'From $9.95/mo + fees',
-      startingPriceNumeric: 9.95,
-      tiers: [
-        {
-          name: 'Starter',
-          price: '$9.95/mo',
-          priceNumeric: 9.95,
-          ...
-        },
-        {
-          name: 'Standard',
-          price: '$25/mo',
-          priceNumeric: 25,
-          ...
-        },
-        {
-          name: 'Premium',
-          price: 'Custom pricing',
-          ...
-        },
-      ],
-      transactionFees: '2.19% + $0.20 per transaction',
+      startingPrice: 'From $19.95/mo + fees (US)',
+      startingPriceNumeric: 19.95,
+      tiers: [
+        {
+          name: 'Independent',
+          price: '$19.95/mo',
+          priceNumeric: 19.95,
+          features: [
+            'Appointment scheduling',
+            'Calendar management',
+            'Client database',
+            'Basic reporting',
+          ],
+        },
+        {
+          name: 'Team',
+          price: '$14.95 per bookable team member/mo',
+          priceNumeric: 14.95,
+          features: [
+            'Team scheduling',
+            'Online payments',
+            'Marketing tools',
+            'Marketplace listing',
+          ],
+        },
+      ],
+      transactionFees: 'In-person 2.29% + $0.20; online 2.79% + $0.20 (US published, 2026-09-29)',
       commissionOnMarketplace: '20% on new clients from marketplace',
+      // optional nuance note in hiddenCosts or FAQ: one-time on new marketplace clients, min $6; returning free
-      lastVerified: '2026-03-14',
+      lastVerified: '2026-09-29',
```

### GCC / Arabic (C01, C02, H07)

```diff
     gccPresence: {
-      hasArabicUI: false,
-      arabicQuality: 'none',
-      gccCountries: ['UAE'],
-      localCompliance: false,
-      localPaymentMethods: false,
+      hasArabicUI: true,
+      arabicQuality: 'partial',
+      gccCountries: ['UAE', 'KSA', 'Qatar', 'Oman', 'Kuwait'],
+      localCompliance: false, // still confirm per market; do not claim Daisy-equivalent compliance
+      localPaymentMethods: false, // soften absolute denials in FAQ; verify rails per country
```

Weakness / FAQ string replacements (Humanizer-final):

| OLD | NEW |
|-----|-----|
| `'No Arabic UI. English only'` | `'Arabic UI exists; confirm localization depth and local payments for your GCC country vs Daisy native Arabic/English'` |
| `'Limited GCC presence, no local compliance, payment methods, or support'` | `'GCC expansion beyond UAE is public; confirm availability, payments, and compliance for your country'` |
| FAQ ME answer denying Arabic / local payments / GCC compliance | Rewrite-pack **Arabic + GCC** + **Local payments** paragraphs |
| `'Complete GCC compliance (VAT, local payment methods) vs limited UAE presence'` (daisyAdvantages) | `'Native Arabic/English + listed six-GCC support vs Fresha multi-GCC ops with market-by-market confirmation'` |

### AI Concierge (C03)

```diff
     aiCapabilities: {
-      hasAiReceptionist: false,
-      hasAiChatbot: false,
+      hasAiReceptionist: true,
+      hasAiChatbot: true,
       hasSmartScheduling: false,
       hasAiMarketing: false,
       hasAiAnalytics: false,
       hasAiPricing: false,
       aiDescription:
-        'No AI today. An AI receptionist was announced for 2026 and has not launched. What exists is automated confirmations and reminders.',
+        'Fresha lists AI Concierge as a paid add-on at $99.95 per location per month on its pricing page as of 2026-09-29. Daisy includes AI receptionist capabilities in its published plans. Feature set, languages, and total cost differ, so check Fresha\'s current add-on terms when you compare.',
```

Also replace FAQ answer that says announced for 2026 / has not shipped / no AI in Fresha with the same Humanizer AI paragraph.  
Replace competitiveAnalysis line about AI receptionist announced for 2026 has not arrived.

Optional acquisition (M02): soften “Marketplace only” / acquisition copy using rewrite-pack **Acquisition** paragraph.  
Optional scale (M03): replace fixed 25M consumer claims with Fresha’s published 35M+ appointments / 140k+ businesses where they appear in this file.

---

## Booksy (`booksy`) — Critical C07 + High H02 + Medium M04

### Pricing (H02)

```diff
-      startingPrice: '$29.99/mo',
+      startingPrice: '$29.99/mo + $20/extra user',
       startingPriceNumeric: 29.99,
       tiers: [
         {
           name: 'Booksy Biz',
           price: '$29.99/mo',
           ...
         },
-        {
-          name: 'Booksy Biz+',
-          price: '$49.99/mo',
-          ...
-        },
+        {
+          name: 'Additional team member',
+          price: '$20/mo per additional user',
+          priceNumeric: 20,
+          features: [
+            'Same feature set as first user',
+            'Payment processing separate',
+          ],
+        },
       ],
-      transactionFees: '2.49% + $0.15 per transaction',
+      transactionFees: 'Reader 2.49%+$0.10; Tap to Pay 2.49%+$0.20; mobile/keyed 2.69%+$0.30 (2026-09-29)',
+      lastVerified: '2026-09-29',
```

### AI Receptionist (C07) — keep `hasAiReceptionist: true`

```diff
       aiDescription:
-        'The "Digital Doorman" AI voice receptionist answers the phone and passes callers to booking. A Google AI Mode integration has been announced. There is no AI chatbot, no scheduling optimization and no marketing automation.',
+        'Booksy has an AI Receptionist (beta) that answers calls and can book appointments onto the Booksy calendar in English or Spanish. It can complete many phone bookings day or night. Per Booksy\'s FAQ, some policies such as deposits and No-Show Protection are not yet supported. Daisy\'s AI receptionist also covers chat and Arabic/English workflows. Languages, payment handling, and product maturity differ. Absolute "routing only" language does not match Booksy\'s current product page.',
```

Replace FAQ answers that say “Routing is where it stops” / “makes it a call router” with the same Humanizer paragraph. Soften daisyAdvantages / switching reasons that say “single Digital Doorman” only if they imply routing-only incapacity.

---

## Vagaro (`vagaro`) — High H06

```diff
     aiCapabilities: {
-      hasAiReceptionist: false,
+      hasAiReceptionist: true,
       hasAiChatbot: true,
       ...
       aiDescription:
-        'A basic AI chatbot that answers questions without booking an appointment or taking a payment. No AI receptionist, no smart scheduling, no marketing AI. Schedulicity was acquired in Jan 2025 to widen the marketplace.',
+        'Vagaro has Vera, an AI receptionist for Connect chat and SMS. Vera answers FAQs, checks availability, and can send a booking link. Fill My Books can automate rebooking outreach. Daisy\'s AI receptionist handles voice and chat booking and payments. Vera does not take card payments on a voice call; channel and booking depth differ from Daisy.',
```

Replace FAQ answers claiming chatbot cannot book at all / only basic reminders with Vera Humanizer paragraph (booking link ≠ voice+pay). Soften daisyAdvantages “vs basic chatbot that can't book”.

Keep verified price `$30` + `$10` calendar unless promo note desired (optional Low).

---

## Mindbody (`mindbody`) — Critical C09 + High H03

### Pricing (H03)

```diff
-      startingPrice: '$139/mo',
-      startingPriceNumeric: 139,
+      startingPrice: 'From $79/mo per location (higher tiers quote-based)',
+      startingPriceNumeric: 79,
       tiers: [
-        { name: 'Starter', price: '$139/mo', priceNumeric: 139, ... },
-        { name: 'Accelerate', price: '$279/mo', ... },
-        { name: 'Ultimate', price: '$499/mo', ... },
-        { name: 'Ultimate Plus', price: '$699/mo', ... },
+        { name: 'Entry (public)', price: 'From $79/mo per location', priceNumeric: 79,
+          features: ['Schedule & booking', 'Client management', 'Marketplace listing'] },
+        { name: 'Accelerate', price: 'Contact for pricing',
+          features: ['Advanced marketing', 'Automations', 'AI Concierge available as add-on'] },
+        { name: 'Ultimate', price: 'Contact for pricing',
+          features: ['AI Concierge included per Mindbody pricing matrix', 'Advanced reporting', 'Priority support'] },
       ],
-        'Messenger[ai] AI front desk is separate add-on (~$199/mo)',
+        'AI Concierge / Messenger[ai]: included on Ultimate; add-on on Accelerate (ask Mindbody for current add-on price; ~$199 not on public page)',
+      lastVerified: '2026-09-29',
```

### AI (C09)

```diff
-      hasAiReceptionist: false,
+      hasAiReceptionist: true,
       aiDescription:
-        'No AI of its own. The AI front desk, Messenger[ai], is a third-party add-on costing about ~$199/mo on top...',
+        'Mindbody has AI Concierge / Messenger[ai], included on Ultimate and available as an add-on on Accelerate per Mindbody pricing. Daisy includes an AI receptionist in its base published plans. Inclusion tier, language support, and beauty versus fitness fit differ between the products.',
```

Replace FAQ pricing answers that hard-code $139–699 and ~$199. Optional marketplace metric: `2M+ classes` → `3M+ monthly shoppers` where present (Medium).

---

## Zenoti (`zenoti`) — Critical C14 + High H10

Replace every `6 AI agents` / `running 6 AI agents` with **nine** (or “suite of nine AI agents”).

```diff
     description:
-      'Enterprise-grade, AI-first management platform for salons, spas and med spas. Its 6 AI agents make it the most comprehensive AI suite in the industry. A Dubai office gives it real GCC presence.',
+      'Enterprise-grade, AI-first management platform for salons, spas and med spas. Its nine AI agents (per Zenoti AI Workforce marketing) make it one of the broadest AI suites in the industry. A Dubai office gives it real GCC presence.',
```

```diff
       aiDescription:
-        'The most comprehensive AI suite available: 6 AI agents covering...',
+        'Zenoti\'s AI Workforce page lists nine specialized AI agents covering receptionist, marketing, reviews, scheduling, analytics, staff recommendations, and related workflows. AI comes first here, and the investment continues.',
```

Also patch: strengths `'AI-first platform with 6 AI agents'`; content commentary; FAQ compare answer “running 6 AI agents”.

Pricing attribution (H10):

```diff
-      startingPrice: 'Custom (~$225+/mo per location)',
+      startingPrice: 'Custom / quote-based (third-party estimates often cite ~$225+/location/mo — not a Zenoti list price)',
```

Soften any “mandatory annual contracts” absolute in this object or dependent FAQ to order-form / annual-or-monthly invoice nuance (Tier-2 verification). Soften absolute “No Arabic UI despite GCC presence” to partial-localization caution if touching same block (Medium–High).

Set `lastVerified: '2026-09-29'` on Zenoti pricing.

---

## Evidence URLs (2026-09-29 Asia/Kuwait)

| Rival | URL |
|-------|-----|
| Fresha pricing | https://www.fresha.com/pricing |
| Fresha GCC blog | https://www.fresha.com/blog/expanding-in-the-GCC |
| Booksy AI | https://biz.booksy.com/features/ai-receptionist-beta |
| Booksy pricing | https://biz.booksy.com/pricing |
| Vagaro Vera | https://www.vagaro.com/pro/updates/vera-receptionist |
| Mindbody pricing | https://www.mindbodyonline.com/business/pricing |
| Zenoti AI Workforce | https://www.zenoti.com/ai-workforce |
