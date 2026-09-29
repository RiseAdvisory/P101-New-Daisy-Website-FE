# Daisy Website-FE Competitor Copy Inventory

**Date:** 2026-09-29 (Asia/Kuwait)  
**Repo (founder Mac, read-only):** `/Users/themoneyexp/Documents/GitHub/P101-New-Daisy-Website-FE`  
**machineId:** `e7456546-eff7-4d06-9aa5-f51ac2a1abf3`  
**Scope:** Inventory of rival names + comparison/alternative claims in FE source. No repo edits; no live re-fetch.

---

## 1. Files scanned / key paths

### Primary claim sources (feed `/compare` and `/alternative`)

| Path | Role | Notes |
|------|------|-------|
| `src/lib/constants/competitors/competitorData.ts` | Types + Daisy baseline pricing/features | Daisy listed as From $50/mo (Basic/Growth/Business) — **drifts from live $1 + usage pricing** |
| `src/lib/constants/competitors/tier1Data.ts` | Tier 1 rivals: Fresha, Booksy, Vagaro, Mindbody, Zenoti | EN updated Sep 29 12:03 KW |
| `src/lib/constants/competitors/tier2Data.ts` | Tier 2: Glamera, DINGG, GlossGenius, Zylu, RepeatMD, Boulevard, Planity | EN Sep 29 |
| `src/lib/constants/competitors/tier3Data.ts` | Tier 3: Square Appointments, Mangomint, Phorest, Timely, Meevo, Treatwell, Acuity, SimplyBook.me, Setmore, BookB, Belliata, Sparkalz, SQUIRE, Salonist, Pabau | EN Sep 29 11:58 |
| `src/lib/constants/competitors/comparisonPages.ts` | daisyVs (15), alternative (14), bestAlternatives (14), competitorVs (20) | EN Sep 29 12:03 |
| `src/lib/constants/competitors/comparisonPages.ar.ts` | Arabic mirrors of comparison pages | **Last mtime May 1** — lag risk vs EN Sep 29 |
| `src/lib/constants/competitors/tier{1,2,3}Data.ar.ts` | Arabic competitor research data | Mixed ages (May 1 / Apr 15) |
| `src/lib/constants/competitors/aiTools.ts` | AI-only tools: Anolla, BookingBee.ai, SharpAI | Sep 29 11:58 |
| `src/lib/constants/competitors/index.ts` | Helpers / exports | |

### Route / UI shells (consume constants; little unique claim text)

- `src/app/[locale]/(routes)/compare/page.tsx`, `compare/[slug]/page.tsx`, `ComparePageClient.tsx`
- `src/app/[locale]/(routes)/alternative/page.tsx`, `alternative/[slug]/page.tsx`, `AlternativePageClient.tsx`
- `src/components/comparePage/*` (FeatureComparisonTable, PricingComparisonCard, QuickComparisonTable, CompetitorSummaryCard, DaisyDifferentiators, VerdictSection, etc.)
- `src/components/seo/ProductComparisonSchema.tsx`, `ComparisonBreadcrumbSchema.tsx`
- `src/app/[locale]/pricing/components/ComparisonTableV3.tsx` (Daisy plan comparison, not rival)

### Secondary copy that names rivals

- `src/lib/constants/guides/guideData.ts` — `switch-from-fresha` + migration FAQs (Daisy $1/mo claims)
- `src/lib/constants/blog/articles/payment-processing.ts` — Fresha 2.19% + 20% commission table vs Square/Stripe
- `src/lib/constants/blog/articles/{bottom-of-funnel,salon-management,salon-marketing,salon-payments,client-retention,thought-leadership}.ts`
- `src/lib/constants/pillars/{salon-management-software,beauty-booking-system,ai-salon-software,salon-payment-solutions,...}.ts` + `pillars.ar.ts`
- `src/lib/constants/solutions/solutionData.ts`, `solutions/angles/ai-marketing.ts`
- `src/lib/constants/features/featuresBusinessData.ts`, `professionalDeepDiveEntries1.ts`
- `src/lib/constants/glossary/glossaryData.ts`, `tutorials/tutorialCatalog.ts`, `pages/customerPage.ts`
- `public/llms.txt`, `public/llms-full.txt` — LLM indexes of compare/alternative URLs
- `docs/` plans/specs (content-ops, seo push, image plans) — research/ops, not live page copy
- Blog images under `public/images/blog/*vs*`, `*compared*`, `*competition*`

### Competitor registry (27 in tier data)

**Tier 1:** fresha, booksy, vagaro, mindbody, zenoti  
**Tier 2:** glamera, dingg, glossgenius, zylu, repeatmd, boulevard, planity  
**Tier 3:** square-appointments, mangomint, phorest, timely, meevo, treatwell, acuity-scheduling, simplybook-me, setmore, bookb, belliata, sparkalz, squire, salonist, pabau  

**AI tools (not full CompetitorData):** anolla ($29/mo), bookingbee-ai ($99/mo), sharpai ($49/mo)

**Page-only rival (no tier record):** `toast` — has `daisy-vs-toast` in comparisonPages but **no** entry in tier1/2/3Data.

### Page slug inventory

**Daisy vs (15):** daisy-vs-{fresha, booksy, vagaro, glossgenius, mindbody, toast, boulevard, glamera, dingg, repeatmd, planity, mangomint, square-appointments, phorest, acuity-scheduling}

**Alternative (14):** fresha, booksy, vagaro, glossgenius, mindbody, boulevard, mangomint, square-appointments, phorest, acuity-scheduling, timely, zenoti, setmore, simplybook-me

**Best alternatives (14):** best-{fresha,booksy,vagaro,glossgenius,mindbody,boulevard,mangomint,square-appointments,zenoti,acuity,phorest,timely,setmore,simplybookme}-alternatives

**Competitor vs competitor (20):** fresha-vs-booksy, fresha-vs-vagaro, booksy-vs-vagaro, vagaro-vs-mindbody, glossgenius-vs-boulevard, fresha-vs-glossgenius, booksy-vs-glossgenius, mindbody-vs-boulevard, vagaro-vs-glossgenius, fresha-vs-mindbody, booksy-vs-boulevard, vagaro-vs-boulevard, fresha-vs-square-appointments, booksy-vs-mindbody, booksy-vs-square-appointments, vagaro-vs-square-appointments, glossgenius-vs-square-appointments, mindbody-vs-zenoti, zenoti-vs-boulevard, acuity-vs-setmore

**EN vs AR daisyVs slugs:** matched (15/15). Content freshness of AR files still lagging EN mtimes.

---

## 2. Claims table

Categories: `pricing` | `fees_commission` | `feature_absence` | `stat_scale` | `ai` | `geo_language` | `review_rating` | `positioning` | `daisy_self`

### 2a. Daisy self-claims (baseline used in comparisons)

| competitor | file_path | exact_wording | claim_category |
|---|---|---|---|
| Daisy | `src/lib/constants/competitors/competitorData.ts` | `startingPrice: 'From $50/mo'` with tiers Basic `$50/mo`, Growth `$150/mo`, Business `$250/mo`; `freeTrialDays: 14`; `lastVerified: '2026-03-14'` | daisy_self / pricing |
| Daisy | `src/lib/constants/pricing/v3/pricingV3Shared.ts` | Entry tier `$1 per month` + `+$50/month on Basic` / `+$25/month on Starter` once account passes 5 appointments in a calendar month | daisy_self / pricing |
| Daisy | `src/lib/constants/guides/guideData.ts` (switch-from-fresha FAQ) | `Daisy starts at $1/month, plus $50 once you pass 5 appointments in a month, with no commissions.` | daisy_self / pricing |
| Daisy | `competitorData.ts` | Feature matrix: onlineBooking/pos/client/marketing/reporting/branding = 3; inventory = 2; staff = 1; marketplace = 0; ai = 2 | daisy_self / feature_absence |
| Daisy | `competitorData.ts` | `AI receptionist (24/7...)`, `Customer acquisition engine (marketplace + cashback + marketing)`, `Multilingual (Arabic/English...)`, `All-in-one (8 categories replacing 5+ tools)` | daisy_self / positioning |

### 2b. Tier research data — pricing, fees, commissions, absences, stats

| competitor | file_path | exact_wording | claim_category |
|---|---|---|---|
| Fresha | `tier1Data.ts` | `startingPrice: 'From $9.95/mo + fees'`; tiers Starter `$9.95/mo`, Standard `$25/mo`, Premium `Custom pricing`; `hasFreePlan: false` | pricing |
| Fresha | `tier1Data.ts` | `transactionFees: '2.19% + $0.20 per transaction'`; `commissionOnMarketplace: '20% on new clients from marketplace'` | fees_commission |
| Fresha | `tier1Data.ts` FAQ | `A salon running $10,000/month through cards pays $239 in transaction fees alone, before the subscription and the marketplace commission.` | fees_commission |
| Fresha | `tier1Data.ts` | `No AI today. An AI receptionist was announced for 2026 and has not launched.`; all AI flags false; `brandingAndWhiteLabel: 0` | ai / feature_absence |
| Fresha | `tier1Data.ts` | `100K+ partner venues and 450M+ appointments booked`; marketplace commentary elsewhere cites `25M+ users` | stat_scale |
| Fresha | `tier1Data.ts` | Reviews: Capterra 4.8/1441; G2 4.5/800; App Store 4.9/350000; Google Play 4.8/125000 | review_rating |
| Fresha | `tier1Data.ts` | `No Arabic UI. English only` | geo_language |
| Booksy | `tier1Data.ts` | `$29.99/mo` Biz / `$49.99/mo` Biz+; `pricingModel: 'per-staff'`; `2.49% + $0.15 per transaction` | pricing / fees_commission |
| Booksy | `tier1Data.ts` | `"Digital Doorman" AI voice receptionist...`; `hasAiReceptionist: true`, other AI false; `brandingAndWhiteLabel: 0` | ai / feature_absence |
| Booksy | `tier1Data.ts` | `380K+ service providers across 50+ countries` | stat_scale |
| Booksy | `tier1Data.ts` | `No Arabic support or GCC presence` | geo_language |
| Vagaro | `tier1Data.ts` | `$30/mo` Single; `+$10/month per additional staff calendar`; `2.75% per transaction (Vagaro Pay)`; 30-day trial | pricing / fees_commission |
| Vagaro | `tier1Data.ts` | `A basic AI chatbot that answers questions without booking...`; `hasAiChatbot: true`, receptionist false | ai |
| Vagaro | `tier1Data.ts` | `220K+` businesses; acquired Schedulicity Jan 2025 | stat_scale |
| Mindbody | `tier1Data.ts` | Starter `$139/mo` … Ultimate Plus `$699/mo`; Messenger[ai] add-on `~$199/mo`; Vista Equity `$1.9B` acquisition 2019 | pricing / fees_commission / stat_scale |
| Mindbody | `tier1Data.ts` | `No AI of its own`; Capterra 4.0/2961; G2 3.6/750 | ai / review_rating |
| Zenoti | `tier1Data.ts` | `Custom (~$225+/mo per location)`; `6 AI agents`; Dubai office / GCC but `No Arabic UI despite GCC presence` | pricing / ai / geo_language |
| GlossGenius | `tier2Data.ts` | Standard `$24/mo`, Gold `$48/mo`, Platinum `$148/mo`; `2.6% per transaction`; AI Growth Analyst only in Platinum | pricing / fees_commission / ai |
| Boulevard | `tier2Data.ts` | Essentials `$158/mo`, Premier `$295/mo`, Prestige `$410/mo`; `2.6% + $0.10`; Precision Scheduling + Duo only Premier+ `$295+/mo` | pricing / fees_commission / ai |
| Glamera | `tier2Data.ts` | `Free (paid from ~$30/mo)`; `Marketplace commission on bookings`; no AI; primarily KSA; funding `$2.37M` | pricing / fees_commission / ai / geo_language |
| DINGG | `tier2Data.ts` | Starter `$49/mo`, Professional `$79/mo`; AI Genius suite; `Limited to UAE in GCC`; funding `$3M` | pricing / ai / geo_language |
| RepeatMD | `tier2Data.ts` | `~$700/mo`; Beauty Bank cashback; marketing-only (no booking/POS); US/Canada | pricing / feature_absence / geo_language |
| Planity | `tier2Data.ts` | `~€59/mo`; France-focused; no AI | pricing / ai / geo_language |
| Zylu | `tier2Data.ts` | `Quote-based` | pricing |
| Square Appointments | `tier3Data.ts` | `Free (paid from $29/mo)`; `2.6% + $0.10 per transaction`; no AI; not beauty-specific | pricing / fees_commission / ai |
| Mangomint | `tier3Data.ts` | `$165/mo` / `$245/mo` / `$375/mo`; Capterra `4.9/5` (170); no AI; no marketplace | pricing / review_rating / ai |
| Phorest | `tier3Data.ts` | `~$99/mo`; UK/Ireland; AI limited to marketing suggestions; Capterra 4.8/400 | pricing / geo_language / ai |
| Timely | `tier3Data.ts` | Build `$30/mo` +`$9/staff`; Elevate `$45` +`$12/staff`; Innovate `$50` +`$15/staff`; no AI | pricing / ai |
| Acuity Scheduling | `tier3Data.ts` | `$16/mo`; Capterra 4.8/5600; not beauty-specific; no POS/CRM/inventory/AI/marketplace | pricing / feature_absence / review_rating |
| SimplyBook.me | `tier3Data.ts` | `Free (paid from $8.25/mo)`; 70+ add-ons; translated (not native) Arabic; no AI | pricing / geo_language / ai |
| Setmore | `tier3Data.ts` | Free / Pro `$5/mo` / Team `$12/mo` per user; generic scheduling; no AI/POS/CRM | pricing / feature_absence |
| Treatwell | `tier3Data.ts` | `Commission-based (up to 35%)`; `Up to 35% per booking` | fees_commission |
| Meevo | `tier3Data.ts` | `~$139/mo`; US-only; no AI | pricing / geo_language / ai |
| SQUIRE | `tier3Data.ts` | `$30/mo` + `$15-25/barber`; `2.6% + $0.10`; barbershop-only | pricing / fees_commission |
| BookB | `tier3Data.ts` | Custom; Dubai-only; very basic | pricing / geo_language |
| Belliata | `tier3Data.ts` | Free / Pro `~$20/mo`; UAE marketplace; translated Arabic | pricing / geo_language |
| Sparkalz | `tier3Data.ts` | Custom; Dubai POS; no AI | pricing / geo_language |
| Salonist | `tier3Data.ts` | `~$25/mo`; India budget; no AI | pricing / ai |
| Pabau | `tier3Data.ts` | `~$49/mo per user`; UK med spa focus | pricing / geo_language |
| Anolla | `aiTools.ts` | `startingPrice: '$29/mo'` | pricing |
| BookingBee.ai | `aiTools.ts` | `startingPrice: '$99/mo'` | pricing |
| SharpAI | `aiTools.ts` | `startingPrice: '$49/mo'` | pricing |

### 2c. Comparison page wording (selected high-signal claims)

| competitor | file_path | exact_wording | claim_category |
|---|---|---|---|
| Fresha | `comparisonPages.ts` daisy-vs-fresha | `Fresha takes 2.19% + $0.20 on every card transaction and 20% commission on marketplace bookings.` | fees_commission |
| Fresha | `comparisonPages.ts` | `Fresha's strength is the size of its consumer marketplace, with 25M+ users.` | stat_scale |
| Fresha | `comparisonPages.ts` | `Fresha has announced AI features for 2026 but hasn't shipped them.` | ai |
| Fresha | `comparisonPages.ts` whoShouldChooseCompetitor | `You need to start cheaply, at the $9.95/mo base plan` | pricing |
| Fresha | `comparisonPages.ts` verdict | `...charges monthly subscriptions on top of transaction fees and commissions, and it has no AI, no Arabic support...` | fees_commission / ai / geo_language |
| Booksy | `comparisonPages.ts` | `Booksy charges 2.49% + $0.15 per transaction and prices per provider, at $29.99-$49.99/provider/month. A 5-person team could be paying $150-250/month...` | fees_commission / pricing |
| Booksy | `comparisonPages.ts` | `Booksy's "Digital Doorman" answers inbound calls and passes them to booking...` | ai |
| Vagaro | `comparisonPages.ts` | `...2.75% transaction fees, though the $10/month for each additional staff calendar adds up.` | fees_commission / pricing |
| GlossGenius | `comparisonPages.ts` | `Its AI... sits in the $148/mo tier, team features are locked behind Platinum...` / `beautiful, simple and cheap at $24/mo` | pricing / ai |
| Mindbody | `comparisonPages.ts` | `expensive at $139-699/mo... charges marketplace commissions`; `listing 2M+ classes/month` | pricing / fees_commission / stat_scale |
| Boulevard | `comparisonPages.ts` | `$158-410/mo with the AI locked behind $295+` | pricing / ai |
| Toast | `comparisonPages.ts` daisy-vs-toast | `no AI receptionist, no beauty-specific workflows, no marketplace and no GCC support` | feature_absence / ai / geo_language |
| Glamera | `comparisonPages.ts` | `Saudi-focused marketplace with basic features and a free tier` / `no AI whatsoever` | pricing / ai / geo_language |
| DINGG | `comparisonPages.ts` | `competitive AI suite at $49-79/mo` / `covering the UAE only, with no marketplace, no cashback` | pricing / ai / geo_language |
| RepeatMD | `comparisonPages.ts` | `expensive marketing add-on at $700/mo` | pricing |
| Planity | `comparisonPages.ts` | `France's #1 beauty marketplace with zero AI capabilities` | ai / geo_language |
| Mangomint | `comparisonPages.ts` / best-mangomint-alternatives | `highest Capterra rating at 4.9/5`; `Premium pricing, no AI and no marketplace` | review_rating / ai |
| Square Appointments | best-square-appointments-alternatives | `solid free scheduling tool attached to a great POS, and it was never built for beauty` | feature_absence / pricing |
| Zenoti | best-zenoti-alternatives | `$225+/month per location, with mandatory annual contracts... GCC offices and still no Arabic UI` / `6 AI agents` | pricing / ai / geo_language |
| Acuity | best-acuity-alternatives | `4.8/5 across 5600+ reviews` / `no POS, no CRM, no inventory management, no AI and no Arabic support` | review_rating / feature_absence |
| Phorest | best-phorest-alternatives | `Excellent CRM and loyalty at ~$99/mo, confined to the UK and Ireland, with no AI, no marketplace and no Arabic support` | pricing / geo_language / ai |
| Timely | best-timely-alternatives | `$30/mo base, then $9-15/staff` / no AI, no marketplace, no Arabic | pricing / ai |
| Setmore | best-setmore-alternatives | `paid tiers at $5-12/user/month` / no POS, CRM, AI, Arabic | pricing / feature_absence |
| SimplyBook.me | best-simplybookme-alternatives | `running from free to $59.90/mo` / `70+ add-ons` / Arabic translated not native | pricing / geo_language |
| Fresha vs Booksy | competitorVsPages | `Neither offers Arabic support, full AI ecosystem, or cas[hback]...` | positioning |
| Treatwell | (tier only; no dedicated daisy-vs page) | up to 35% commission — research data only | fees_commission |

### 2d. Blog / guides / llms (extra claim surfaces)

| competitor | file_path | exact_wording | claim_category |
|---|---|---|---|
| Fresha | `blog/articles/payment-processing.ts` | `Card-present rate: 2.19% + $0.20`; `20% commission on the first booking from new clients acquired through the Fresha marketplace`; worked example ~1500 AED commissions | fees_commission |
| Fresha / Square | `payment-processing.ts` | Cost comparison table: Daisy vs Square (Plus) vs Fresha vs Stripe + separate software | fees_commission |
| Fresha | `guides/guideData.ts` switch-from-fresha | `Fresha has been adding paid features... A basic free plan may still exist...` (softer than tier1 “free plan is gone”) | pricing |
| Fresha | `public/llms-full.txt` | `Fresha is a free marketplace-based platform (recently introducing paid features).` | pricing |
| Multiple | `public/llms.txt` | Lists daisy-vs-* and alternative URLs for Fresha, Booksy, Vagaro, GlossGenius, Mindbody, Boulevard, Glamera, DINGG, RepeatMD, Planity, Mangomint, Square, Phorest, Acuity | positioning |

---

## 3. Drift notes (FE-vs-live / internal inconsistency candidates)

Flagged from FE source alone (no live re-fetch). “Typical live” = Daisy’s current published pricing narrative + obvious stale LLM/guide copy.

1. **Daisy price model conflict (high)**  
   - Compare constants (`competitorData.ts`): **From $50/mo** flat tiers $50 / $150 / $250.  
   - Live-aligned FE pricing (`pricingV3Shared.ts`) + guides: **$1/mo entry** + usage add-on (+$50 Basic / +$25 Starter after 5 appointments).  
   - Any compare UI that renders `daisyData.pricing` will show the old $50 baseline against rivals → **FE-vs-live drift candidate**.

2. **Fresha “free” vs paid (high)**  
   - `tier1Data` / daisy-vs-fresha: free plan **gone**, from **$9.95/mo** + fees/commissions.  
   - `public/llms-full.txt`: still **“Fresha is a free marketplace-based platform”**.  
   - `guideData` FAQ: “A basic free plan **may still exist**” — softer / conflicting.  
   - Drift candidate across llms-full + guide FAQ vs compare research.

3. **Fresha fee micro-copy (medium)**  
   - Research/compare: `2.19% + $0.20` (sometimes `$0.19` in type comments only).  
   - Blog payment article matches `$0.20`. Consistent in main claim paths; watch type-comment `$0.19` if ever surfaced.

4. **Toast orphan page (medium)**  
   - `daisy-vs-toast` exists in EN+AR comparisonPages.  
   - **No** `toast` object in tier1/2/3Data → feature matrix / pricing cards may be empty or broken depending on client fallbacks. Drift / completeness risk.

5. **SimplyBook price ceiling (medium)**  
   - Tier data: Free / paid from **$8.25/mo**.  
   - best-simplybookme-alternatives intro: free to **$59.90/mo**. Different ceilings — verify which is current.

6. **Arabic content lag (medium)**  
   - EN competitor/comparison files touched **2026-09-29**.  
   - `comparisonPages.ar.ts` / several `*.ar.ts` last **May 1 / Apr 15**. EN factual updates may not be in AR yet → FE locale drift.

7. **Research freshness stamp (low–medium)**  
   - Most `lastVerified` / `lastResearched` = **2026-03-13/14** while files were edited Sep 29 (copy polish likely). Pricing claims may be months old vs live rival sites.

8. **Daisy “no transaction fees” vs POS reality (low–medium, positioning)**  
   - Compare copy repeatedly: Daisy flat rate / “nothing added per transaction.”  
   - Confirm against live payment processing terms (payment blog also compares processors). Risk if Daisy still passes card network fees.

9. **Rivals with research but thin/no conversion pages (low)**  
   - Treatwell, Meevo, Zylu, BookB, Belliata, Sparkalz, SQUIRE, Salonist, Pabau, AI tools — in tier/aiTools data; limited or no daisy-vs / alternative slugs. Inventory-complete in research, not all on conversion routes.

10. **Mangomint / Phorest / Timely / Acuity rating claims**  
    - Repeated in best-alternatives intros (4.9, 4.8, 4.7, 4.8/5600+). Align with tier `reviews` arrays; still candidate for live rating drift since Mar 2026 verify date.

---

## 4. Method notes

- Shell+Read on Mac `machineId e7456546-eff7-4d06-9aa5-f51ac2a1abf3` only (read-only).  
- `rg` for rival names + compare/alternative paths under `src/`, `docs/`, `public/`, `config/` (excluded `node_modules`, `.next`, coverage).  
- Structured parse of tier + comparisonPages constants for claims table.  
- Output written on box: `/workspace/daisy-claims-audit/2026-09-29-website-fe-inventory.md`.  
- Hard stops honored: no repo edits, no git commit/push, no live site fetch.

