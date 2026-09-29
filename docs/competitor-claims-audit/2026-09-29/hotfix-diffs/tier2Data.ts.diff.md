# Proposed surgical patches — `tier2Data.ts`

**Repo path:** `src/lib/constants/competitors/tier2Data.ts`  
**Status:** DRAFT ONLY — do not apply to Mac until CoS “apply”  
**Rivals in this file for this pack:** GlossGenius, Boulevard, DINGG (Glamera High free-tier optional / out of Critical order)

---

## GlossGenius (`glossgenius`) — Critical C05 + High H08

### AI Reception (C05)

```diff
     aiCapabilities: {
-      hasAiReceptionist: false,
-      hasAiChatbot: false,
+      hasAiReceptionist: true,
+      hasAiChatbot: true,
       hasSmartScheduling: false,
       hasAiMarketing: false,
       hasAiAnalytics: true,
       hasAiPricing: false,
       aiDescription:
-        'The AI Growth Analyst offers business insights and growth recommendations, and only appears in the Platinum tier at $148/mo. No AI receptionist, no chatbot, no smart scheduling.',
+        'GlossGenius has Reception by GlossGenius, which answers calls and texts 24/7 and books into the calendar. It is promotional free for a period, then $50 per month. GlossGenius AI also includes Growth Analyst for insights. Daisy\'s AI receptionist supports Arabic and English GCC workflows. Languages, channels, and plan packaging differ. GlossGenius AI is not limited to analytics.',
```

Replace FAQ “no AI receptionist…”; daisyAdvantages “vs AI analytics only…”; weaknesses `'No AI receptionist or chatbot'`; competitiveAnalysis “thin AI, analytics alone…”.

### Team management (H08)

Replace copy that says team management only in Platinum $148 with Humanizer:

> Staff and team tools start on Gold for businesses with up to 9 staff. Platinum targets teams of 10 or more. Team management is not limited to the $148 Platinum plan.

Keep verified Standard `$24` / Gold `$48` / Platinum `$148` / `2.6%` unless monthly vs annual disclosure is desired (Low).

`lastVerified: '2026-09-29'`

**Evidence:** https://glossgenius.com/reception ; https://glossgenius.com/pricing — accessed 2026-09-29

---

## Boulevard (`boulevard`) — High H04 + H05

### Pricing (H04)

```diff
-      startingPrice: '$158/mo',
-      startingPriceNumeric: 158,
+      startingPrice: 'From $143/mo',
+      startingPriceNumeric: 143,
       tiers: [
-        { name: 'Essentials', price: '$158/mo', priceNumeric: 158, ... },
-        { name: 'Premier', price: '$295/mo', priceNumeric: 295, ... },
-        { name: 'Prestige', price: '$410/mo', priceNumeric: 410, ... },
+        { name: 'Essentials', price: '$143/mo', priceNumeric: 143, ... },
+        { name: 'Premier', price: '$234/mo promo (normally $293)', priceNumeric: 234, ... },
+        { name: 'Prestige', price: '$328/mo promo (normally $410)', priceNumeric: 328, ... },
+      lastVerified: '2026-09-29',
```

Note in hiddenCosts: confirm monthly vs annual toggle and active promo on joinblvd.com/pricing.

### Duo ≠ AI / Billie / Precision Scheduling (H05)

```diff
-            'Duo AI assistant',   // in Premier features list
+            'Billie (in-app AI help)',
+            'Precision Scheduling',
+            // Duo is POS hardware — do not list under AI features
```

```diff
       aiDescription:
-        'Precision Scheduling AI arranges appointment slots, and Duo is an AI assistant for business insights and task automation. Both appear only in the Premier tier at $295/mo and above.',
+        'Boulevard includes Precision Scheduling for AI slot optimization and Billie as an in-app support assistant. It does not include a native voice AI receptionist. Duo is Boulevard\'s POS hardware. Which AI features appear on Essentials versus Premier is listed on Boulevard\'s live pricing matrix.',
```

Keep `hasAiReceptionist: false` (Verified — no native voice AI receptionist).  
`hasAiChatbot` may stay true only if Billie qualifies; prefer documenting Billie in aiDescription rather than overstating chatbot.

Replace FAQ / daisyAdvantages referencing “Duo assistant” as AI and “AI locked behind $295+”. Soften unsupported `2.6% + $0.10` if touching fees (Medium).

**Evidence:** https://www.joinblvd.com/pricing — accessed 2026-09-29

---

## DINGG (`dingg`) — Critical C12 + High H09

### GCC (C12)

```diff
     gccPresence: {
       hasArabicUI: true,
       arabicQuality: 'native',
-      gccCountries: ['UAE'],
+      gccCountries: ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Oman'],
```

String replacements:

| OLD | NEW |
|-----|-----|
| `'Limited to UAE in GCC, not yet in KSA, Kuwait, etc.'` | `'Markets across multiple GCC country sites (UAE, KSA, Qatar, Kuwait, Oman); confirm local availability'` |
| `'Established GCC presence across all 6 countries vs UAE-only expansion'` | `'Listed six-GCC Daisy support vs DINGG multi-GCC marketing (confirm depth per country)'` |
| FAQ “has not yet reached KSA, Kuwait…” | Tier-2 Humanized DINGG GCC paragraph |
| competitiveAnalysis “covering the UAE only” | same |

### Pricing (H09)

```diff
-      startingPrice: '$49/mo',
-      startingPriceNumeric: 49,
+      startingPrice: 'From ~$79/mo (US blog; confirm local AED)',
+      startingPriceNumeric: 79,
       tiers: [
-        { name: 'Starter', price: '$49/mo', priceNumeric: 49, ... },
-        { name: 'Professional', price: '$79/mo', priceNumeric: 79, ... },
+        { name: 'Single location (US blog)', price: '$79/mo', priceNumeric: 79, ... },
+        { name: 'Multi-location (US blog)', price: '$149/mo', priceNumeric: 149, ... },
+      lastVerified: '2026-09-29',
```

**Evidence:** https://dingg.app/ae · /sa · /qa · /kw · /om ; US comparison blog $79/$149 — accessed 2026-09-29

---

## Optional (out of Critical order; same file)

**Glamera free tier (High Tier-2):** if CoS expands, remove “free tier” — Foundation SAR 125/mo on business.glamera.com/en/our-pricing. Not required for this Critical pack.
