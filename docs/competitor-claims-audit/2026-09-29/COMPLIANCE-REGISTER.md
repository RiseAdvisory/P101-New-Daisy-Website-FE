# Fresha C&D — compliance register

**Source letter:** BSA Law, 29 September 2026. Jira **PD-6750**, attachment 53884.
The PDF is marked *External Confidential* and is deliberately **not** committed to this
repo. Jira is its system of record. This register paraphrases the allegations for
tracking; it does not reproduce the letter.

**Policy:** comparative advertising **stays**. The requirement is that every claim about
a competitor is factually true and substantiated. Removing the comparison is not the
goal; removing the falsehoods is.

---

## Why this register exists

Two earlier remediation passes reported "all clear" and were both wrong:

1. **Pass 1** searched for the exact phrases quoted in the letter. Demand (a) says
   "including but not limited to", so the same assertions survived in other words.
2. **Pass 2** was driven by a fact list derived from paragraphs 2(a)–(d). Anything the
   letter raised *elsewhere* — the VAT/TRN invoicing point at §1 and §3.1 — was
   invisible to it.

This register is keyed to the **whole letter**, so coverage is a table to read rather
than a question to re-ask.

---

## A. Facts the letter asserts about Fresha

Any copy contradicting these is false. Sources are Fresha's own published pages and the
letter's Schedules 2–4.

| # | Fact |
|---|------|
| F1 | UAE published price: **AED 149.95/mo** (Independent); **Team at custom rates** |
| F2 | GCC pricing: **SAR 149.95** (KSA), **OMR 11.95** (Oman), **BHD 14.95** (Bahrain), **QAR 149.95** (Qatar) |
| F3 | No **$9.95/mo**, and no **Starter / Standard / Premium** tiers — *in any market* |
| F4 | UAE online payments: **4.90% + AED 0.75** (not 2.19% + $0.20) |
| F5 | Marketplace: **one-time 50% commission on new clients, min AED 20**; **returning clients always free** (not 20%). Applies only to clients the marketplace introduced |
| F6 | Marketing emails: **free for the first 50/month, then AED 0.08** each |
| F7 | Insights add-on: **AED 319.95 per bookable team member per month** |
| F8 | Support: **email and chat on all plans**, **phone support on Team** |
| F9 | AI: Fresha has **developed and deployed AI-powered features**. *Keepable nuance:* their AI Concierge covers phone calls, not WhatsApp/Instagram |
| F10 | Arabic: a **complete** Arabic UI, expressly including **calendar and scheduling**, **reporting and analytics**, and **live performance dashboards** |
| F11 | Region: **all six GCC states** (UAE, Saudi, Oman, Bahrain, Qatar, Kuwait) **and beyond** — i.e. international |
| F12 | **UAE-compliant VAT/TRN invoicing** |
| F13 | Not free; and every charge above is **published**, therefore not "hidden" |

## B. The allegations

| Ref | Allegation |
|-----|-----------|
| 2(a) | Fabricated pricing — the $9.95 figure and the Starter/Standard/Premium tiers |
| 2(b) | "no AI capabilities" |
| 2(c) | "No Arabic UI. English only" and "Limited GCC presence… UAE only" |
| 2(d)(i) | Characterising published pricing as **"hidden fees"** |
| 2(d)(ii) | Fabricated ratings framework — **"Daisy leads in 7 of 9 categories"** |
| 2(d)(iii) | An **FAQ section repeating the falsehoods** in search-optimised Q&A form |
| §1 / §3.1 | Statements suggesting Fresha is **deficient in UAE-compliant VAT/TRN invoicing** — *not enumerated in 2(a)–(d)* |
| §3.2 | Statements "designed to divert customers" — commercial disparagement |
| §3.3 | Advertising must not damage a competitor's reputation through **unverified** claims |

**The letter states that disclaimers "do not cure" an inaccurate factual statement.**
A disclaimer is therefore not a remedy; the underlying claim has to be true.

## C. The demands

| Ref | Demand | Owner |
|-----|--------|-------|
| (a) | Remove/correct all inaccurate claims, **including but not limited to** 2(a)–(d) | Engineering |
| (b) | Remove content implying Fresha is **inferior, unavailable or unsuitable** for the UAE, the GCC, **or any other market they operate in** (they operate internationally, so this is global) | Engineering |
| (c) | Written confirmation within **7 days** that corrections are implemented | Counsel / founder |
| (d) | Undertaking not to publish further misleading content | Counsel / founder |

---

## D. Audit categories

Every claim about Fresha is classified as one of:

| Code | Meaning |
|------|---------|
| **CAT-1** | FALSE — contradicts F1–F13 |
| **CAT-2** | HIDDEN-FRAMING — published charges described as hidden/concealed/surprise |
| **CAT-3** | SELF-SCORED-AS-FACT — our rating or "leads in N of M" presented as neutral. *A disclaimer does not cure this* |
| **CAT-4** | UNSUITABILITY — implies inferior/unavailable/unsuitable in **any** market |
| **CAT-5** | UNVERIFIED-NEGATIVE — disparaging and unsubstantiated, even if not provably false (§3.3) |
| **CAT-6** | DEFECTION-CLAIM — asserts businesses are leaving Fresha, or a dissatisfaction trend (§3.2) |
| **DRIFT** | Arabic twin more negative than, or contradicting, its corrected English source |
| **STRUCTURAL** | A render/schema bug that can publish a false claim about any competitor |

---

## E. Status

*Filled in from the audit of 2026-09-29. See `git log --grep "fix(claims)"`.*

| Ref | Status | Evidence |
|-----|--------|----------|
| 2(a) fabricated pricing | **Corrected** | `$9.95`, Starter/Standard/Premium, `2.19%`, `20%` all gone repo-wide. Record carries AED 149.95 / Team custom / 4.90% + AED 0.75 / one-time 50% min AED 20 / AED 0.08 email / AED 319.95 Insights. Guard: 3 tests |
| 2(b) "no AI capabilities" | **Corrected** | `hasAiReceptionist: true`; comparisons now argue *channel scope* (phone-only Concierge vs calls + WhatsApp + Instagram), not absence. Guard: 1 test |
| 2(c) Arabic + GCC | **Corrected** | `hasArabicUI: true`, all six GCC states, "and beyond" reflected. Depth judgements ("translated layer", "localisation depth") removed as unverifiable. Guard: 2 tests |
| 2(d)(i) "hidden fees" | **Corrected** | Wording replaced with "charges that sit on top" across guides, solutions, blog, components. The `AlertTriangle` caution iconography remains — see open items |
| 2(d)(ii) fabricated ratings | **Corrected** | The aggregate "we lead in N of M" scoreboard is **deleted**, not disclaimed (the letter says disclaimers do not cure). Win badges and row tint removed. `marketplaceAndDiscovery` added to the table — it was omitted, and it is the category Fresha leads 3–0. Guard: 4 tests |
| 2(d)(iii) FAQ repetition | **Corrected** | All 10 EN FAQ answers rewritten; unsourced app-quality and migration criticisms removed from the set that ships as `FAQPage` JSON-LD |
| §1 / §3.1 VAT/TRN | **Corrected** | The only allegation *not* in 2(a)–(d). Removed from `daisySwitchingReasons`, `competitorWeaknesses` and `daisyAdvantages`, EN and AR; `localCompliance` flipped to `true`. Guard: 1 test |
| §3.2 defection | **Corrected** | "partner dissatisfaction", "caught some partners out", "sending some businesses looking", "Join businesses that have already made the move" all removed. Guard: 1 test |
| §3.3 unverified claims | **Corrected** | App-quality, migration-difficulty, "basic reports", branding absolutes, `Settings > Data Export` path, and the `20-30%` "industry stat" all removed or sourced. Guard: 2 tests |
| Demand (b), all markets | **Corrected** | Not GCC-scoped: "English-speaking Western markets", "any old/legacy system", "Avoid commission-based platforms", and the inverted "most expensive for existing clients" conclusion all corrected |

### Structural defects found in the render layer

These published claims that no data supported, and no content edit would have fixed them.

| Defect | Resolution |
|--------|-----------|
| `getCompetitor()` read the English map only, so **every Arabic page rendered English claims** and `tier1Data.ar.ts` was dead code | Made locale-aware; locale threaded through both page clients and two components |
| A `0` rating rendered as the absolute **"Not Available"** | Relabelled "Not published" — a 0 on our own editorial scale is not evidence of absence |
| Feature table **omitted `marketplaceAndDiscovery`**, the one category Fresha leads by two steps | Added |
| Three `daisyWins: true` **hardcoded**, incl. Customer Acquisition, which our own data contradicts | Removed; the one that remains is derived |
| `data-geo-answer` flagged marketing copy and competitor claims to AI crawlers as the extractable fact | Removed from all five |
| Cost table total rested on an unsubstantiated "Additional tool costs" row for Fresha | Row dropped; total restated 6,500 → **6,370 AED** |

---

## F. Mechanical guard

`src/lib/constants/competitors/__tests__/freshaClaimsGuard.test.ts` encodes F1–F13 and
fails the build if a retracted claim returns. It scans content constants, components and
routes, and only flags a match that sits near a mention of Fresha.

This is the check that replaces asking whether coverage is complete.
