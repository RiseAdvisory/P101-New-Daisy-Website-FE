# Echo surfaces + AR mirror lag notes

**Status:** DRAFT ONLY follow-ups after primary constant apply  
**Baseline:** 2026-09-29 Asia/Kuwait  
**Hard stops still in force:** no Mac write until CoS “apply”; no inventing AR translations

---

## 1. Hub / alternative / best-alternatives echoes

Primary patches live in `tier{1,2,3}Data.ts` + `comparisonPages.ts` daisy-vs objects. These surfaces re-state Critical/High claims and must be swept in the same apply pass or immediately after:

| Priority | File | What to sweep |
|----------|------|---------------|
| P0 | `comparisonPages.ts` → `bestAlternativesPages` | best-fresha “no AI”; best-booksy routing-only; best-vagaro “no AI”; best-glossgenius analytics-only; best-mindbody $139–699; best-boulevard $295 AI lock; best-mangomint price+no AI; best-zenoti “6 AI agents” + mandatory annual; best-phorest “no AI” |
| P0 | `comparisonPages.ts` → `alternativePages` | Same rivals’ hero/intro/price blurbs |
| P1 | `comparisonPages.ts` → compare hub card blurbs (if any hardcoded, not only data-driven) | Fresha/Booksy/GlossGenius/Mindbody/Boulevard/Vagaro/DINGG/Mangomint/Phorest/Zenoti |
| P2 | `comparisonPages.ts` → `competitorVsPages` | fresha-vs-* lines denying Fresha Arabic/AI; booksy routing; boulevard Duo-as-AI |

Use the same Humanizer-final strings as the primary pack; do not invent new rival facts.

---

## 2. `public/llms-full.txt` / `public/llms.txt`

| Path | Issue | Proposed direction |
|------|-------|--------------------|
| `public/llms-full.txt` | Exact: `Fresha is a free marketplace-based platform (recently introducing paid features).` | Align with Fresha Independent $19.95 / Team $14.95 + fees narrative after H01; drop “free marketplace-based” as primary frame |
| `public/llms.txt` | Mostly URL index | Re-scan after copy changes; no Critical string invent |

Do not rewrite LLM files with unverified rival claims.

---

## 3. Guides / blog fee echoes (esp. Fresha)

| Path | Issue | Proposed direction |
|------|-------|--------------------|
| `src/lib/constants/guides/guideData.ts` (`switch-from-fresha`) | Soft “A basic free plan may still exist…” conflicts with paid Independent/Team | Align with H01; remove free-plan hope unless Fresha republishes free plan |
| `src/lib/constants/blog/articles/payment-processing.ts` | `Card-present rate: 2.19% + $0.20` + worked examples | Update to in-person **2.29%+$0.20** / online **2.79%+$0.20** (M01); keep 20% marketplace commission with one-time/new-client/min $6 nuance |
| Other blog/pillar files naming Fresha AI absence / English-only | Inventory §2d | Spot-check after Critical apply |

---

## 4. AR mirrors — EN keys needing sync (NO AR invention)

AR files lag EN (inventory: `comparisonPages.ar.ts` / several `tier*.ar.ts` mtimes May 1 / Apr 15 vs EN Sep 29). After EN apply, schedule professional AR update for these EN keys/fields. **This pack lists keys only; it does not supply Arabic text.**

### tier1Data.ar.ts — sync keys

- `fresha.pricing.*` (startingPrice, tiers, transactionFees, lastVerified)
- `fresha.gccPresence.*` (hasArabicUI, arabicQuality, gccCountries)
- `fresha.aiCapabilities.*` (booleans + aiDescription)
- `fresha.faq[]` answers on AI, Middle East/Arabic, pricing, fees
- `fresha.competitorWeaknesses` / `daisyAdvantages` / competitiveAnalysis
- `booksy.pricing.*` (remove Biz+ $49.99 ladder; +$20 user)
- `booksy.aiCapabilities.aiDescription` + Digital Doorman / AI Receptionist FAQs
- `booksy` transactionFees schedule
- `vagaro.aiCapabilities.*` (Vera)
- `mindbody.pricing.*` + `aiCapabilities.*` (from $79; AI Concierge)
- `zenoti` all `6 AI agents` strings → nine; pricing attribution; contract wording if present

### tier2Data.ar.ts — sync keys

- `glossgenius.aiCapabilities.*` + team-management copy + FAQs
- `boulevard.pricing.*` + Duo/Billie/Precision Scheduling copy + FAQs
- `dingg.gccPresence.gccCountries` + UAE-only FAQs/weaknesses + pricing $49→~$79/$149

### tier3Data.ar.ts — sync keys

- `mangomint.pricing.*` + FAQ price/AI strings ($165–375 → $120+$10)
- `phorest.aiCapabilities.*` + FAQ “no AI” / best-phorest mirrored strings

### comparisonPages.ar.ts — sync slugs

- `daisy-vs-{fresha,booksy,vagaro,glossgenius,mindbody,boulevard,dingg,mangomint,phorest}`
- `alternative` + `best-*-alternatives` for the same rivals + `best-zenoti-alternatives`
- Any hub blurb strings for those rivals

Until AR sync ships, `/ar/` routes may still show Critical EN claims in Arabic from May/Apr snapshots — flag residual locale risk to CoS.

---

## 5. Out of scope reminders

- Toast orphan page  
- Daisy From $50 vs $1 usage drift  
- Medium-only rivals not in Critical/High ordered list  
- Inventing Arabic translations in this pack
