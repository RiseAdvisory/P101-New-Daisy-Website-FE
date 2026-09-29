# Proposed surgical patches — `tier3Data.ts`

**Repo path:** `src/lib/constants/competitors/tier3Data.ts`  
**Status:** DRAFT ONLY — do not apply to Mac until CoS “apply”  
**Rivals in this file for this pack:** Mangomint, Phorest (Timely High optional / out of Critical order)

---

## Mangomint (`mangomint`) — Critical C11

### Pricing ladder → Aug 2026 model

```diff
     pricing: {
       hasFreePlan: false,
-      startingPrice: '$165/mo',
-      startingPriceNumeric: 165,
+      startingPrice: 'From $120/loc + $10/user/mo',
+      startingPriceNumeric: 120,
       tiers: [
-        { name: 'Essentials', price: '$165/mo', priceNumeric: 165, billingCycle: 'monthly', features: ['Booking', 'Calendar', 'POS', 'Client management'] },
-        { name: 'Standard', price: '$245/mo', priceNumeric: 245, billingCycle: 'monthly', features: ['Everything in Essentials', 'Marketing', 'Advanced reporting', 'Automations'] },
-        { name: 'Unlimited', price: '$375/mo', priceNumeric: 375, billingCycle: 'monthly', features: ['Everything in Standard', 'Unlimited staff', 'API access', 'Priority support'] },
+        { name: 'Location + users (from 1 Aug 2026)', price: '$120/mo per location + $10/mo per user', priceNumeric: 120, billingCycle: 'monthly', features: ['Booking', 'Calendar', 'POS', 'Client management', 'Core platform features per Mangomint notice'] },
+        { name: 'Optional add-ons', price: 'Phone / Marketing / Payroll (confirm current)', features: ['Optional Phone', 'Optional Marketing', 'Optional Payroll'] },
       ],
-      hiddenCosts: ['Premium pricing', 'Payment processing fees', 'Limited marketing tools'],
+      hiddenCosts: ['Per-user fees scale with team size', 'Optional Phone / Marketing / Payroll', 'Payment processing fees'],
       pricingModel: 'flat',
-      lastVerified: '2026-03-13',
+      lastVerified: '2026-09-29',
     },
```

### Copy field replacements (Humanizer-final Tier-2)

| Field | OLD (approx) | NEW |
|-------|--------------|-----|
| daisyAdvantages | `'More affordable pricing vs $165-375/mo'` | `'Published Daisy plans vs Mangomint $120/loc + $10/user (plus optional add-ons)'` |
| competitorWeaknesses | `'Premium pricing ($165-375/mo)'` | `'Per-location + per-user pricing from 1 Aug 2026 ($120 + $10/user)'` |
| competitorWeaknesses | `'No AI'` | `'Workflow automations; no 24/7 AI receptionist comparable to Daisy positioning'` |
| FAQ compare / expensive / worth $375 | cites `$165-375` / `$375/mo` Unlimited | Tier-2 Humanized Mangomint pricing paragraphs; remove retired Unlimited $375 framing |
| FAQ AI | absolute “No… none of it is AI” | Soften to automation vs receptionist distinction (Tier-2 Humanized) |
| aiDescription | `'Smart workflow automations, but no real AI: no receptionist...'` | `'Mangomint includes workflow automations. It does not ship a 24/7 AI receptionist that books and takes payment on voice or chat the way Daisy positions its AI receptionist.'` |

Keep marketplace absence + US-only / no Arabic Verified claims.

**Evidence:** https://www.mangomint.com/learn/price-changes-2026/ — “On August 1, 2026, all customers moved to … $120/mo per location and $10/mo per user…” — accessed 2026-09-29 Asia/Kuwait

---

## Phorest (`phorest`) — Critical C13

```diff
     aiCapabilities: {
-      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
+      hasAiReceptionist: true,  // Front Desk AI add-on on Phorest pricing; scope ≠ Daisy voice+pay — describe in aiDescription
+      hasAiChatbot: false,
+      hasSmartScheduling: false,
       hasAiMarketing: true, hasAiAnalytics: false, hasAiPricing: false,
-      aiDescription: 'AI stretches to suggesting marketing campaigns. No receptionist, no chatbot, no smart scheduling.',
+      aiDescription: 'Phorest sells Front Desk AI and Cheat Sheet AI as add-ons on its pricing page. Absolute "no AI" language does not match that page. Phorest remains strongest on CRM and loyalty in the UK and Ireland. Arabic and GCC localization are still weak compared with Daisy.',
```

If product review later shows Front Desk AI is not receptionist-class, revert boolean to `false` but **keep** aiDescription naming both add-ons (never “no AI”).

Also patch:

| Field | OLD | NEW |
|-------|-----|-----|
| daisyAdvantages | `'Full AI ecosystem vs basic marketing AI only'` | `'Full AI receptionist ecosystem vs Phorest Front Desk AI / Cheat Sheet AI add-ons'` |
| competitorWeaknesses | `'Limited AI'` | `'AI sold largely as add-ons (Front Desk AI, Cheat Sheet AI); not Daisy-style included voice+pay receptionist'` |
| FAQ “Does Phorest have AI features like Daisy?” | “suggests marketing campaigns and stops there” | Tier-2 Humanized Phorest AI paragraph |

`lastVerified: '2026-09-29'`

**Evidence:** https://www.phorest.com/gb/pricing/ — Front Desk AI, Cheat Sheet AI — accessed 2026-09-29 Asia/Kuwait

---

## Optional (out of Critical order)

**Timely** pricing formula `$30 + $9–15/staff` → ~$26/$39/$47 first seat math (High Tier-2). Not in CoS Critical ordered list for this pack.
