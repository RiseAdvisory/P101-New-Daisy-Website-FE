# Website-FE competitor-claim hotfix pack — DRAFT ONLY

**Audience:** Founder / Chief of Staff  
**Date accessed / verification baseline:** 2026-09-29 Asia/Kuwait (UTC+3)  
**Authorization:** Founder + CoS authorized draft-only hotfix drafting (29 Sep 2026)  
**Mac repo (READ-ONLY):** `/Users/themoneyexp/Documents/GitHub/P101-New-Daisy-Website-FE`  
**machineId:** `e7456546-eff7-4d06-9aa5-f51ac2a1abf3`

---

## Status banner

**DRAFT ONLY.** Proposed constant diffs / rewrite notes.  
**No Mac write. No edit. No commit. No push. No PR.**  
**No deploy / no change to live jointhedaisy.com.**  
**No competitor contact.**  
Awaiting CoS explicit **"apply"** before any Website-FE handoff.

Companion files:
- Diffs: `/workspace/daisy-claims-audit/hotfix-diffs/`
- Tier-1 Humanizer-final: `2026-09-29-REWRITE-PACK-HUMANIZED.md`
- Tier-2 Humanizer-final (NEW): `2026-09-29-HOTFIX-TIER2-HUMANIZED.md`
- CoS note: `2026-09-29-HOTFIX-COS-NOTE.md`
- Evidence: `2026-09-29-FOUNDER-REPORT.md`, `2026-09-29-tier1-verification.md`, `2026-09-29-tier2-verification.md`, `2026-09-29-website-fe-inventory.md`
- Mac read copies (box): `/workspace/daisy-claims-audit/mac-extracts/`

---

## Ordered checklist by severity

### Critical (apply first) — 14 patches

| Patch ID | Rival | Severity | Primary file(s) | Field / context |
|----------|-------|----------|-----------------|-----------------|
| C01 | Fresha | Critical | `tier1Data.ts` | `gccPresence.arabicQuality` / `hasArabicUI` / weaknesses “No Arabic UI. English only” |
| C02 | Fresha | Critical | `tier1Data.ts` | `gccPresence.gccCountries` (UAE-only) + GCC weakness / FAQ ME |
| C03 | Fresha | Critical | `tier1Data.ts` | `aiCapabilities.hasAiReceptionist` false + “announced for 2026… has not shipped” |
| C04 | Fresha | Critical | `comparisonPages.ts` | daisy-vs-fresha verdict / FAQ echoes “no AI, no Arabic” |
| C05 | GlossGenius | Critical | `tier2Data.ts` | `hasAiReceptionist` false; “AI Growth Analyst… only… No AI receptionist” |
| C06 | GlossGenius | Critical | `comparisonPages.ts` | daisy-vs-glossgenius “AI… analytics only” / “no AI receptionist” |
| C07 | Booksy | Critical | `tier1Data.ts` | Digital Doorman “Routing is where it stops” / “call router” FAQ |
| C08 | Booksy | Critical | `comparisonPages.ts` | daisy-vs-booksy + best-booksy “routing calls” absolutes |
| C09 | Mindbody | Critical | `tier1Data.ts` | `hasAiReceptionist` false; “No AI of its own” |
| C10 | Mindbody | Critical | `comparisonPages.ts` | daisy-vs-mindbody AI absence framing |
| C11 | Mangomint | Critical | `tier3Data.ts` | `$165/$245/$375` ladder → `$120/loc + $10/user` (1 Aug 2026) |
| C12 | DINGG | Critical | `tier2Data.ts` | `gccCountries: ['UAE']` / “Limited to UAE” / “1 country” |
| C13 | Phorest | Critical | `tier3Data.ts` + `comparisonPages.ts` | absolute “no AI” vs Front Desk AI + Cheat Sheet AI |
| C14 | Zenoti | Critical | `tier1Data.ts` + `comparisonPages.ts` | “6 AI agents” → nine |

### High (same sprint; same constant blocks) — 10 patches

| Patch ID | Rival | Severity | Primary file(s) | Field / context |
|----------|-------|----------|-----------------|-----------------|
| H01 | Fresha | High | `tier1Data.ts` / `comparisonPages.ts` | From $9.95 / Starter $9.95 / Standard $25 → Independent $19.95 / Team $14.95 |
| H02 | Booksy | High | `tier1Data.ts` / `comparisonPages.ts` | Biz $29.99 / Biz+ $49.99 → $29.99 + $20/extra user |
| H03 | Mindbody | High | `tier1Data.ts` / `comparisonPages.ts` | $139–699 ladder → from $79/location; higher tiers quote-based |
| H04 | Boulevard | High | `tier2Data.ts` / `comparisonPages.ts` | $158/$295/$410 → $143 / promo $234/$328 (norm $293/$410) |
| H05 | Boulevard | High | `tier2Data.ts` / `comparisonPages.ts` | Duo ≠ AI; Billie + Precision Scheduling |
| H06 | Vagaro | High | `tier1Data.ts` / `comparisonPages.ts` | AI “Not Available” / basic chatbot → Vera (chat/SMS + booking link) |
| H07 | Fresha | High | `tier1Data.ts` FAQ / weaknesses | Absolute “no local payment methods / GCC compliance” |
| H08 | GlossGenius | High | `tier2Data.ts` / `comparisonPages.ts` | “team management only… $148” → Gold up to 9; Platinum 10+ |
| H09 | DINGG | High | `tier2Data.ts` | $49 Starter unsupported; prefer ~$79 / $149 from DINGG US blog |
| H10 | Zenoti | High | `tier1Data.ts` / best-zenoti | Soften “mandatory annual contracts”; attribute ~$225 as third-party estimate |

### Medium already Humanizer-passed in same Fresha/Booksy blocks (include for coherent apply)

| Patch ID | Rival | Severity | Notes |
|----------|-------|----------|-------|
| M01 | Fresha | Medium | Card fees 2.19%+$0.20 → 2.29%+$0.20 in-person / 2.79%+$0.20 online |
| M02 | Fresha | Medium | Acquisition “Marketplace only” → marketplace + direct links + paid add-ons |
| M03 | Fresha | Medium | Optional 25M consumers → prefer Fresha’s 35M+ appointments / 140k+ businesses |
| M04 | Booksy | Medium | Tx fees 2.49%+$0.15 → reader/Tap/keyed schedule |

---

## Patch detail (OLD → NEW)

Access date for all rival evidence quotes: **2026-09-29 Asia/Kuwait**.

### C01 — Fresha Arabic Support

- **Rival / severity:** Fresha / Critical  
- **File(s):** `src/lib/constants/competitors/tier1Data.ts` (`fresha`)  
- **Fields:** `gccPresence.hasArabicUI`, `gccPresence.arabicQuality`; `competitorWeaknesses` “No Arabic UI. English only”; FAQ answer on Middle East / Arabic  
- **OLD exact:**
  - `hasArabicUI: false`
  - `arabicQuality: 'none'`
  - `'No Arabic UI. English only'`
  - FAQ: `'Fresha has some UAE presence, but no Arabic, no local payment methods and nothing for GCC compliance...'`
- **NEW proposed:**
  - `hasArabicUI: true`
  - `arabicQuality: 'partial'` *(or product-appropriate label; do not invent “native” without product depth evidence)*
  - Weakness rewrite: `'Arabic UI exists; confirm localization depth and local payments for your GCC country vs Daisy native Arabic/English'`
  - FAQ / table prose (Humanizer-final from rewrite pack):  
    > Fresha states its platform is available in Arabic and that it operates teams across multiple GCC markets. It describes expansion beyond the UAE, including KSA and announced operations in Qatar, Oman, and Kuwait. Daisy provides native Arabic and English with GCC-focused product positioning and lists support across six GCC countries. Confirm availability, localization depth, local payments, and compliance for your country.
- **Rival evidence:** https://www.fresha.com/blog/expanding-in-the-GCC — “Fresha is live in Arabic… Alongside our established teams in Dubai and Saudi Arabia, we’re now launching local operations in Qatar, Oman, and Kuwait.” (blog dated/updated 2025-07-01; accessed 2026-09-29)

### C02 — Fresha GCC (UAE-only)

- **Rival / severity:** Fresha / Critical  
- **File(s):** `tier1Data.ts`  
- **Fields:** `gccPresence.gccCountries: ['UAE']`; daisyAdvantages “Complete GCC compliance… vs limited UAE presence”; weakness “Limited GCC presence…”  
- **OLD:** `gccCountries: ['UAE']` + UAE-only copy above  
- **NEW:** `gccCountries: ['UAE', 'KSA', 'Qatar', 'Oman', 'Kuwait']` *(per Fresha blog ops language; still ask reader to confirm market availability)* + Humanizer Arabic+GCC paragraph from C01  
- **Evidence:** same Fresha GCC blog; accessed 2026-09-29

### C03 — Fresha AI Concierge absence

- **Rival / severity:** Fresha / Critical  
- **File(s):** `tier1Data.ts`  
- **Fields:** `aiCapabilities.hasAiReceptionist` (false); `aiDescription`; FAQ “Fresha announced an AI receptionist for 2026…”; competitiveAnalysis / weaknesses “No AI…”  
- **OLD:**
  - `hasAiReceptionist: false`
  - `aiDescription: 'No AI today. An AI receptionist was announced for 2026 and has not launched...'`
  - FAQ: `'Fresha announced an AI receptionist for 2026 and it has not shipped. As things stand there is no AI in Fresha...'`
- **NEW:**
  - `hasAiReceptionist: true` *(paid add-on; not free core)*
  - `hasAiChatbot: true` *(messages covered by Concierge SKU description)*
  - `aiDescription` / FAQ (Humanizer-final):  
    > Fresha lists AI Concierge as a paid add-on at $99.95 per location per month on its pricing page as of 2026-09-29. Daisy includes AI receptionist capabilities in its published plans. Feature set, languages, and total cost differ, so check Fresha's current add-on terms when you compare.
- **Evidence:** https://www.fresha.com/pricing — “AI Concierge… $99.95 per location, monthly…” (accessed 2026-09-29)

### C04 — Fresha comparisonPages echoes

- **File(s):** `comparisonPages.ts` — `daisy-vs-fresha`  
- **OLD snippets:**
  - verdict: `'...and it has no AI, no Arabic support and no customer acquisition tools...'`
  - whoShouldChooseCompetitor: `'You need to start cheaply, at the $9.95/mo base plan'`
  - intro/tldr marketplace framing that denies AI/Arabic
- **NEW:** Align verdict/tldr with C01–C03 + H01 Humanizer pricing; remove absolute “no AI / no Arabic”. Reuse rewrite-pack Fresha AI + Arabic+GCC + Pricing paragraphs.  
- **Evidence:** same Fresha pricing + GCC blog; accessed 2026-09-29

### C05 — GlossGenius Reception (tier2Data)

- **Rival / severity:** GlossGenius / Critical *(lives in tier2Data.ts)*  
- **Fields:** `hasAiReceptionist: false`; `aiDescription` Growth Analyst-only; FAQ “There is no AI receptionist…”; weaknesses “No AI receptionist or chatbot”  
- **OLD:**
  - `hasAiReceptionist: false`
  - `aiDescription: 'The AI Growth Analyst offers business insights... No AI receptionist, no chatbot, no smart scheduling.'`
  - FAQ: `'There is an AI Growth Analyst in the Platinum tier at $148/mo... There is no AI receptionist, no chatbot and no smart scheduling.'`
- **NEW:**
  - `hasAiReceptionist: true`
  - `hasAiChatbot: true` *(Reception covers calls/texts)*
  - Humanizer-final (rewrite pack):  
    > GlossGenius has Reception by GlossGenius, which answers calls and texts 24/7 and books into the calendar. It is promotional free for a period, then $50 per month. GlossGenius AI also includes Growth Analyst for insights. Daisy's AI receptionist supports Arabic and English GCC workflows. Languages, channels, and plan packaging differ. GlossGenius AI is not limited to analytics.
- **Evidence:** https://glossgenius.com/reception — “answers every call and text 24/7 and books… Free until November 30th 2026, then only $50/month.” (accessed 2026-09-29)

### C06 — GlossGenius comparisonPages

- **File(s):** `comparisonPages.ts` daisy-vs-glossgenius + best-glossgenius-alternatives intro  
- **OLD:** verdict “Its AI, though, is analytics only…”; best intro “the AI stops at analytics”  
- **NEW:** same Reception Humanizer paragraph; remove analytics-only absolutes  
- **Evidence:** glossgenius.com/reception; accessed 2026-09-29

### C07 — Booksy AI Receptionist (not routing-only)

- **File(s):** `tier1Data.ts` (`booksy`)  
- **Fields:** `aiDescription`; FAQ Digital Doorman answers  
- **OLD:**
  - `aiDescription: 'The "Digital Doorman" AI voice receptionist answers the phone and passes callers to booking...'`
  - FAQ: `'...Routing is where it stops: it cannot take a payment, answer a detailed question or cover customer service 24/7.'`
  - FAQ: `'Digital Doorman answers the phone and redirects callers to online booking, which makes it a call router...'`
- **NEW (Humanizer-final):**  
  > Booksy has an AI Receptionist (beta) that answers calls and can book appointments onto the Booksy calendar in English or Spanish. It can complete many phone bookings day or night. Per Booksy's FAQ, some policies such as deposits and No-Show Protection are not yet supported. Daisy's AI receptionist also covers chat and Arabic/English workflows. Languages, payment handling, and product maturity differ. Absolute "routing only" language does not match Booksy's current product page.
- Keep `hasAiReceptionist: true` (already true). Prefer rival product name “AI Receptionist (beta)” alongside legacy “Digital Doorman” if still used in market.  
- **Evidence:** https://biz.booksy.com/features/ai-receptionist-beta — “books the appointment for you… Every call answered, day or night…” (accessed 2026-09-29)

### C08 — Booksy comparisonPages

- **OLD:** verdict “…the AI does nothing beyond routing calls…”; best-booksy intro “Digital Doorman AI does nothing beyond routing calls”  
- **NEW:** C07 Humanizer paragraph; remove routing-only absolutes  
- **Evidence:** same Booksy AI Receptionist page; accessed 2026-09-29

### C09 — Mindbody AI Concierge

- **File(s):** `tier1Data.ts` (`mindbody`)  
- **OLD:**
  - `hasAiReceptionist: false`
  - `aiDescription: 'No AI of its own. The AI front desk, Messenger[ai], is a third-party add-on costing about ~$199/mo on top...'`
- **NEW:**
  - `hasAiReceptionist: true`
  - Humanizer-final:  
    > Mindbody has AI Concierge / Messenger[ai], included on Ultimate and available as an add-on on Accelerate per Mindbody pricing. Daisy includes an AI receptionist in its base published plans. Inclusion tier, language support, and beauty versus fitness fit differ between the products.
  - Drop exact `~$199` unless written quote (Medium companion in same block — see H03/M notes).  
- **Evidence:** https://www.mindbodyonline.com/business/pricing — AI Concierge on feature matrix (Ultimate included; Accelerate add-on); accessed 2026-09-29

### C10 — Mindbody comparisonPages

- **OLD:** tldr/verdict frame Mindbody as lacking modern included AI / expensive add-on narrative tied to absence  
- **NEW:** Align with C09 + H03 Humanizer price ladder  
- **Evidence:** Mindbody pricing; accessed 2026-09-29

### C11 — Mangomint price (tier3Data)

- **File(s):** `tier3Data.ts` (`mangomint`); also `comparisonPages.ts` daisy-vs-mangomint / best-mangomint  
- **OLD:**
  - `startingPrice: '$165/mo'`, tiers Essentials `$165`, Standard `$245`, Unlimited `$375`
  - FAQ / advantages citing `$165-375/mo`
- **NEW:**
  - `startingPrice: 'From $120/loc + $10/user/mo'`
  - `startingPriceNumeric: 120`
  - Replace tier ladder with single published model: `$120/mo per location` + `$10/mo per user` (+ optional Phone/Marketing/Payroll)
  - `lastVerified: '2026-09-29'`
  - Public prose: see `2026-09-29-HOTFIX-TIER2-HUMANIZED.md` Mangomint section  
- Soften absolute “No AI” in weaknesses to automation-vs-receptionist distinction (same file).  
- **Evidence:** https://www.mangomint.com/learn/price-changes-2026/ — Aug 1, 2026 move to $120/loc + $10/user; accessed 2026-09-29

### C12 — DINGG multi-GCC

- **File(s):** `tier2Data.ts` (`dingg`); `comparisonPages.ts` daisy-vs-dingg  
- **OLD:**
  - `gccCountries: ['UAE']`
  - weakness `'Limited to UAE in GCC, not yet in KSA, Kuwait, etc.'`
  - FAQ: `'...has not yet reached KSA, Kuwait, Bahrain, Oman or Qatar.'`
  - daisy-vs tldr: `'...6 countries against 1...'`
- **NEW:**
  - `gccCountries: ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Oman']`
  - Remove “1 country / UAE only” absolutes
  - Prose: `2026-09-29-HOTFIX-TIER2-HUMANIZED.md` DINGG section  
- **Evidence:** dingg.app `/ae` `/sa` `/qa` `/kw` `/om` live; accessed 2026-09-29

### C13 — Phorest AI add-ons

- **File(s):** `tier3Data.ts` (`phorest`); `comparisonPages.ts` best-phorest-alternatives heroSubtitle  
- **OLD:**
  - `aiDescription: 'AI stretches to suggesting marketing campaigns. No receptionist, no chatbot, no smart scheduling.'`
  - FAQ: `'The AI suggests marketing campaigns and stops there...'`
  - best-phorest heroSubtitle: `'...with no AI, no marketplace and no Arabic support.'`
- **NEW:**
  - Raise AI honesty: acknowledge Front Desk AI + Cheat Sheet AI add-ons; keep `hasAiReceptionist` nuanced (Front Desk AI ≠ Daisy voice+pay claim — set true only if product pages support receptionist framing; otherwise keep false + accurate aiDescription)
  - Recommended boolean approach: `hasAiReceptionist: true` if Front Desk AI is receptionist-class; else keep false but **must** drop “no AI” absolutes and set `hasAiMarketing`/`aiDescription` to name both add-ons.
  - Prose: Tier-2 Humanized Phorest section  
- **Evidence:** https://www.phorest.com/gb/pricing/ — Front Desk AI, Cheat Sheet AI; accessed 2026-09-29

### C14 — Zenoti nine agents

- **File(s):** `tier1Data.ts` (`zenoti`); `comparisonPages.ts` best-zenoti-alternatives intro  
- **OLD:** multiple `'6 AI agents'` / `'running 6 AI agents'` strings in description, aiDescription, strengths, FAQ, best-zenoti intro  
- **NEW:** replace count with **nine**; optional “suite of AI agents” if exact count should stay flexible  
- Prose: Tier-2 Humanized Zenoti section  
- **Evidence:** https://www.zenoti.com/ai-workforce — “Nine AI agents…”; accessed 2026-09-29

---

### H01 — Fresha prices

- **OLD:** `startingPrice: 'From $9.95/mo + fees'`; Starter `$9.95/mo`; Standard `$25/mo`  
- **NEW (Humanizer):**  
  > Fresha's US pricing page lists Independent from $19.95/mo and Team from $14.95 per bookable team member per month, plus marketplace and card fees. Daisy publishes flat plan prices. Total cost of ownership depends on fees and plan mix for each vendor.  
  Concrete constants: Independent `$19.95/mo`; Team `$14.95` per bookable team member; `startingPriceNumeric: 19.95`; `lastVerified: '2026-09-29'`  
- **Evidence:** https://www.fresha.com/pricing; accessed 2026-09-29

### H02 — Booksy Biz/Biz+

- **OLD:** Biz `$29.99/mo`; Biz+ `$49.99/mo`; body `$29.99-$49.99/provider/month`  
- **NEW (Humanizer):**  
  > Booksy publishes one subscription at $29.99 per month for the first user and $20 per month for each additional team member. Features are included in the core fee; payment processing is separate.  
- **Evidence:** https://biz.booksy.com/pricing; accessed 2026-09-29

### H03 — Mindbody from $79

- **OLD:** Starter `$139` … Ultimate Plus `$699`; tldr `$139-699/mo`  
- **NEW (Humanizer):**  
  > Mindbody publicly advertises plans starting at $79 per location per month. Higher tiers are quote-based. A fixed $139 to $699 ladder needs a current written quote before use.  
- Drop public `~$199` Messenger price without quote.  
- **Evidence:** Mindbody pricing + education blog “Starting at $79 USD/month”; accessed 2026-09-29

### H04 — Boulevard prices

- **OLD:** Essentials `$158`; Premier `$295`; Prestige `$410`; daisy-vs `$158-410/mo`  
- **NEW (Humanizer):**  
  > Boulevard's public pricing as of 2026-09-29 shows Essentials from $143 per month and promotional Premier and Prestige from $234 and $328 per location (normally $293 and $410). Confirm whether the page shows monthly or annual billing and what promo is active.  
- **Evidence:** https://www.joinblvd.com/pricing; accessed 2026-09-29

### H05 — Boulevard Duo ≠ AI

- **OLD:** `'Duo AI assistant'`; `aiDescription` treating Duo as AI; daisyAdvantages “vs chat-only Duo assistant”; FAQ Precision + Duo at `$295`  
- **NEW (Humanizer):**  
  > Boulevard includes Precision Scheduling for AI slot optimization and Billie as an in-app support assistant. It does not include a native voice AI receptionist. Duo is Boulevard's POS hardware. Which AI features appear on Essentials versus Premier is listed on Boulevard's live pricing matrix.  
- Remove Duo from AI feature lists; keep `hasAiReceptionist: false` (Verified for native voice).  
- **Evidence:** joinblvd.com/pricing FAQ (Duo = POS hardware); Billie / Precision Scheduling docs; accessed 2026-09-29

### H06 — Vagaro Vera

- **OLD:** `hasAiReceptionist: false`; `aiDescription` “basic AI chatbot… No AI receptionist…”; FAQ “cannot book… cannot take payment” absolutes  
- **NEW:**
  - Prefer `hasAiReceptionist: true` **or** keep false with accurate Vera description (Vera is chat/SMS receptionist brand; capability = booking **link**, not voice+pay). Recommended: set true with scoped `aiDescription`.  
  - Humanizer:  
    > Vagaro has Vera, an AI receptionist for Connect chat and SMS. Vera answers FAQs, checks availability, and can send a booking link. Fill My Books can automate rebooking outreach. Daisy's AI receptionist handles voice and chat booking and payments. Vera does not take card payments on a voice call; channel and booking depth differ from Daisy.  
- **Evidence:** https://www.vagaro.com/pro/updates/vera-receptionist (released Aug 24, 2026); pricing page Vera mention; accessed 2026-09-29

### H07 — Fresha local payments absolute

- Soften FAQ/weakness absolutes denying local payments / GCC compliance while Fresha localizes Arabic GCC markets. Humanizer Local payments paragraph from rewrite pack.  
- **Evidence:** Fresha GCC blog; accessed 2026-09-29

### H08 — GlossGenius team management

- Soften “team only at Platinum $148” → Gold up to 9 staff; Platinum 10+. Humanizer Team management paragraph.  
- **Evidence:** glossgenius.com/pricing; accessed 2026-09-29

### H09 — DINGG $49

- Prefer published ~$79 / $149 (DINGG US blog); mark $49 unsupported/outdated if kept.  
- **Evidence:** dingg.app US comparison blog; accessed 2026-09-29

### H10 — Zenoti contracts / $225 attribution

- Soften “mandatory annual contracts”; label ~$225 as third-party estimate, not Zenoti list price.  
- **Evidence:** zenoti.com/trust/franchisee-terms; softwarefinder third-party; accessed 2026-09-29

### M01–M04 — Medium same-block (Humanizer already passed)

- **M01 Fresha card fees:** `2.19% + $0.20` → in-person `2.29% + $0.20`; online `2.79% + $0.20` (rewrite pack).  
- **M02 Fresha acquisition:** marketplace primary + direct booking links + marketing/loyalty add-ons.  
- **M03 Fresha 25M:** prefer 35M+ appointments/mo and 140,000+ businesses.  
- **M04 Booksy tx:** reader `2.49%+$0.10`; Tap `2.49%+$0.20`; mobile/keyed `2.69%+$0.30`.

---

## Hub / alternative / llms / blog echo follow-ups

Do **after** daisy-vs + tier constant patches so hub copy cannot reintroduce Critical rows.

| Surface | Path | Echo to fix |
|---------|------|-------------|
| Compare hub | `comparisonPages.ts` / compare hub blurbs consuming tier data | Fresha/Booksy/GlossGenius/Mindbody/Boulevard/Vagaro absences + price ladders |
| Alternative pages | `comparisonPages.ts` `alternativePages` | Same rivals; Fresha “free” framing; Booksy routing; GlossGenius analytics-only |
| Best alternatives | `comparisonPages.ts` `bestAlternativesPages` | best-fresha “offers no AI”; best-booksy routing; best-vagaro “no AI”; best-glossgenius analytics; best-mindbody $139-699; best-mangomint “no AI”; best-zenoti “6 AI agents”; best-phorest “no AI”; best-timely formula (High Tier-2, optional this pack) |
| LLM index | `public/llms-full.txt` | “Fresha is a free marketplace-based platform…” — align after Fresha price patch |
| LLM short | `public/llms.txt` | URL list OK; re-scan after copy changes |
| Guide | `src/lib/constants/guides/guideData.ts` (`switch-from-fresha`) | Soft “free plan may still exist” vs paid Independent/Team |
| Blog | `src/lib/constants/blog/articles/payment-processing.ts` | Fresha `2.19% + $0.20` fee table → live 2.29%/2.79% schedule |
| Pillars / other | inventory §2d | Spot-check after Critical apply |

Surgical echo notes also in `hotfix-diffs/echo-and-ar-notes.md`.

---

## AR mirrors (do not invent translations)

EN keys patched in this pack need AR sync. **Do not invent Arabic translations in this pack.**

| AR file | mtime lag (inventory) | EN keys to sync after apply |
|---------|----------------------|-----------------------------|
| `comparisonPages.ar.ts` | May 1 2026 vs EN Sep 29 | All daisy-vs / alternative / best-* strings changed above |
| `tier1Data.ar.ts` | May 1 | fresha, booksy, vagaro, mindbody, zenoti AI/GCC/price fields |
| `tier2Data.ar.ts` | Apr 15 | glossgenius, boulevard, dingg |
| `tier3Data.ar.ts` | Apr 15 | mangomint, phorest |

Schedule AR update immediately after EN apply so May/Apr lag does not leave Critical EN claims live on `/ar/` routes.

---

## Out of scope this pack

- **Toast orphan** (`daisy-vs-toast` with no tier record) — inventory only; no Tier-1 verification this run.  
- **Daisy From $50 drift** in `competitorData.ts` vs live $1 + usage (`pricingV3Shared.ts`) — Daisy-self pricing, separate ticket.  
- **Medium-only rivals** not already in the same Critical/High constant blocks (e.g. standalone Treatwell 35% nuance, Planity EU polish, Square AI beta) unless CoS expands scope.  
- **Timely / Glamera / Acuity / SimplyBook / RepeatMD High rows** from Tier-2 verification — inventoried; optional follow-up pack (not CoS Critical ordered list for this hotfix).  
- Live deploy, competitor outreach, Mac writes, git PR.

---

## Counts

- **Critical patches:** 14 (C01–C14)  
- **High patches:** 10 (H01–H10)  
- **Medium same-block:** 4 (M01–M04)  
- **Mac Website-FE modified:** **No** (read-only extracts only)

---

*End of hotfix pack index. Diffs under `hotfix-diffs/`.*
