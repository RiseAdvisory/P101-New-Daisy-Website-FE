# Proposed surgical patches — `comparisonPages.ts`

**Repo path:** `src/lib/constants/competitors/comparisonPages.ts`  
**Status:** DRAFT ONLY — do not apply to Mac until CoS “apply”  
**Sections:** `daisyVsPages`, `alternativePages`, `bestAlternativesPages` (competitorVs optional follow-up)

Humanizer sources: `2026-09-29-REWRITE-PACK-HUMANIZED.md` (Tier-1) + `2026-09-29-HOTFIX-TIER2-HUMANIZED.md` (Tier-2 Critical).

---

## daisy-vs-fresha (C04 + H01 + M01/M02)

| Field | OLD exact (Mac) | NEW proposed |
|-------|-----------------|--------------|
| `verdict` | `'Fresha brings marketplace reach, but it now charges monthly subscriptions on top of transaction fees and commissions, and it has no AI, no Arabic support and no customer acquisition tools. For businesses serious about growth, particularly in the GCC, Daisy is the better choice.'` | `'Fresha brings marketplace reach and now charges monthly subscriptions plus transaction fees and commissions. Fresha also lists AI Concierge as a paid add-on and states Arabic plus multi-GCC operations. Daisy includes AI receptionist capabilities in published plans, native Arabic and English, and GCC-focused positioning. Compare total cost, languages, and acquisition mix for your market.'` |
| `whoShouldChooseCompetitor[0]` | `'You need to start cheaply, at the $9.95/mo base plan'` | `'You want Fresha Independent/Team US pricing (from $19.95/mo or $14.95 per bookable member) plus marketplace discovery'` |
| `tldr` | denies growth tools / frames Fresha as fees-only without AI/Arabic | Align with rewrite-pack Fresha AI + Arabic+GCC + Pricing (no absolute no-AI / no-Arabic) |
| Any intro/body citing `2.19%` or `25M+` | fee / scale stale | M01 / M03 Humanizer lines |

Also update any FAQ blocks embedded in this page object that echo tier1 Critical FAQs.

---

## daisy-vs-booksy (C08 + H02)

| Field | OLD | NEW |
|-------|-----|-----|
| `verdict` | `'...the AI does nothing beyond routing calls...'` | Remove routing-only absolute; use Booksy AI Receptionist Humanizer paragraph + keep per-provider pricing / no GCC points that remain Verified |
| `whoShouldChooseDaisy` item `'You want AI across the business, not just call routing'` | softens to | `'You want Arabic/English AI workflows and payment handling beyond Booksy\'s AI Receptionist (beta) scope'` |
| Body pricing `$29.99-$49.99/provider` | | `$29.99 + $20 per additional user` (H02) |

---

## daisy-vs-vagaro (H06)

| Field | OLD | NEW |
|-------|-----|-----|
| `tldr` / body denying AI receptionist | operations-only vs Daisy AI | Acknowledge Vera (chat/SMS + booking link); keep Daisy voice+pay distinction |
| FAQ if present claiming chatbot cannot book | absolute | Vera Humanizer paragraph |

best-vagaro intro `'Vagaro is a comprehensive US salon platform with no AI...'` → drop “no AI”; say Vera exists with scoped capability.

---

## daisy-vs-glossgenius (C06 + H08)

| Field | OLD | NEW |
|-------|-----|-----|
| `verdict` | `'Its AI, though, is analytics only and sits in the $148/mo tier, team features are locked behind Platinum...'` | Reception + Growth Analyst Humanizer; team tools start on Gold (up to 9), Platinum 10+ |
| `whoShouldChooseDaisy` `'You would rather not pay $148/mo for basic AI features'` | | `'You want Arabic/English AI receptionist workflows and acquisition tools beyond GlossGenius Reception / Growth Analyst packaging'` |
| best-glossgenius `intro` | `'...the AI stops at analytics...'` | Reception Humanizer |

---

## daisy-vs-mindbody (C10 + H03)

| Field | OLD | NEW |
|-------|-----|-----|
| `tldr` | `'...expensive at $139-699/mo...'` + `2M+ classes` | From $79/location; higher tiers quote-based; optional `3M+ monthly shoppers` |
| AI framing | absence / expensive add-on only | AI Concierge included Ultimate / add-on Accelerate |

best-mindbody `intro` `$139-699/mo` → from $79 quote-based Humanizer.

---

## daisy-vs-boulevard (H04 + H05)

| Field | OLD | NEW |
|-------|-----|-----|
| `tldr` | `'$158-410/mo with the AI locked behind $295+'` | Essentials from $143; promo Premier/Prestige $234/$328 (normally $293/$410); Billie + Precision Scheduling; Duo = POS hardware |
| `verdict` | `'$295+/mo for the AI features'` | Same Humanizer Boulevard pricing + AI/Duo paragraph |
| `whoShouldChooseCompetitor` `'You can budget $295+/mo for the AI features'` | | `'You can budget Boulevard Premier/Prestige for Billie / Precision Scheduling (confirm live matrix); Duo is POS hardware'` |

---

## daisy-vs-dingg (C12 + H09)

| Field | OLD | NEW |
|-------|-----|-----|
| `tldr` | `'...6 countries against 1...'` / UAE expansion | Multi-GCC country sites (AE/SA/QA/KW/OM); not one country |
| `verdict` | `'covering the UAE only...'` | Tier-2 Humanized DINGG paragraphs |
| Pricing `$49-79` | | Prefer ~$79 / $149 from DINGG US blog; confirm AED |

---

## daisy-vs-mangomint (C11)

| Field | OLD | NEW |
|-------|-----|-----|
| Pricing / TL;DR citing `$165-375` | | `$120/loc + $10/user` from 1 Aug 2026 |
| “no AI” absolute in intro/body | | Soften per Tier-2 Humanized Mangomint AI note |

best-mangomint `intro`: `'Premium pricing, no AI and no marketplace...'` → update price + soften AI absolute; marketplace absence OK.

---

## daisy-vs-phorest / best-phorest (C13)

| Field | OLD | NEW |
|-------|-----|-----|
| best-phorest `heroSubtitle` | `'Excellent CRM and loyalty at ~$99/mo, confined to the UK and Ireland, with no AI, no marketplace and no Arabic support.'` | `'Excellent CRM and loyalty at ~$99/mo, UK/Ireland-strong, with Front Desk AI and Cheat Sheet AI add-ons available; still weak on Arabic/GCC and Daisy-style cashback marketplace.'` |
| daisy-vs-phorest body/FAQ if echo “no AI” | | Tier-2 Humanized Phorest |

---

## best-zenoti-alternatives (C14 + H10)

| Field | OLD | NEW |
|-------|-----|-----|
| `intro` | `'Zenoti is a powerful enterprise platform running 6 AI agents. At $225+/month per location, with mandatory annual contracts...'` | `'Zenoti is a powerful enterprise platform whose AI Workforce marketing lists nine AI agents. Pricing is custom/quote-based (third-party estimates often cite ~$225+/location/mo). Annual or multi-month order forms are common—confirm terms. It has GCC offices; Arabic localization is partial at best vs Daisy native Arabic/English...'` |

---

## best-fresha / best-booksy / best-vagaro hub echoes

| Slug | OLD high-risk phrase | NEW direction |
|------|----------------------|---------------|
| best-fresha `intro` | `'offers no AI'` | Acknowledge AI Concierge paid add-on; keep fee-stack critique with updated rates |
| best-booksy `intro` | `'Digital Doorman AI does nothing beyond routing calls'` | AI Receptionist (beta) books appointments; note deposit/No-Show limits |
| best-vagaro `intro` | `'with no AI'` | Vera exists (scoped) |

---

## alternativePages (selected)

Patch rival blurbs that repeat Critical absences/prices for fresha, booksy, vagaro, glossgenius, mindbody, boulevard, mangomint, phorest, dingg, zenoti after daisy-vs sources so alternative pages do not reintroduce Critical rows. Prefer reusing the same Humanizer paragraphs rather than inventing new variants.

---

## competitorVsPages (follow-up, lower priority)

Rows like fresha-vs-booksy “Neither offers Arabic support, full AI ecosystem…” may reintroduce Fresha Arabic/AI false absences. Schedule after primary daisy-vs apply; not blocking Critical constant patches.
