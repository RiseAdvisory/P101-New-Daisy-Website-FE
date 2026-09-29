# Daisy Competitor Claims Baseline Audit — 2026-09-29

**Audience:** Founder / Chief of Staff  
**Access date (all rival checks):** 2026-09-29 Asia/Kuwait (UTC+3)  
**Primary surface:** Live https://www.jointhedaisy.com (English `/en/` paths)  
**Status:** Draft-only. No live Website-FE edits. No competitor contact. Rewrite pack Humanizer-passed 2026-09-29 (embedded); still draft-only / no live publish.

This report consolidates three inputs: the live-site claims inventory (975 claims), Tier-1 rival verification against each competitor’s own public pages, and a read-only Website-FE source cross-check. It ranks legal and commercial exposure (cease-and-desist likelihood × page visibility), lists ordered hotfixes, and preserves residual risk for rivals not yet rival-verified in this run.

---

## Executive severity ranking (C&D likelihood × visibility)

Ranking logic: absolute “absence” claims that a rival’s own pricing/feature page contradicts are highest risk (defamatory-risk). Stale price ladders on high-traffic daisy-vs pages rank next (outdated / misleading). Capability nuance misses (e.g., booking link vs voice+pay) are High when Daisy states “Not Available” for a product the rival brands as an AI receptionist.

### Critical — Defamatory-risk “absence” claims (fix first)

| Rank | claim_id | Competitor | Live Daisy page | What Daisy says | What rival’s own pages say | Why C&D-relevant |
|------|----------|------------|-----------------|-----------------|----------------------------|------------------|
| 1 | FRESHA-ARABIC | Fresha | `/en/compare/daisy-vs-fresha` | Arabic Support: “English Only”; FAQ “no Arabic” | Fresha blog (2025-07-01): “Fresha is live in Arabic”; GCC ops in Dubai, KSA, Qatar, Oman, Kuwait | False language absence on a flagship compare page |
| 2 | FRESHA-GCC | Fresha | same | GCC: “UAE” / “Limited GCC… UAE only” | Same GCC expansion blog: multi-country teams beyond UAE | False geo absence |
| 3 | FRESHA-AI-NONE / FRESHA-AI-TABLE / FRESHA-AI-FAQ | Fresha | same | AI Receptionist “Not Available”; FAQ: announced for 2026, “hasn’t shipped” / “no AI in Fresha” | fresha.com/pricing: **AI Concierge** live add-on at **$99.95/location/mo** | False product-absence; shipped, priced SKU |
| 4 | GLOSS-AI-NONE / GLOSS-AI-TABLE / GLOSS-AI-ANALYTICS | GlossGenius | `/en/compare/daisy-vs-glossgenius` | AI Receptionist “Not Available”; “AI analytics only at $148/mo” | glossgenius.com/reception: **Reception by GlossGenius** (voice+text, books calendar, 24/7); free through 2026-11-30 then $50/mo | False absence + understates AI portfolio |
| 5 | BOOKSY-AI-ROUTER / BOOKSY-AI-FAQ | Booksy | `/en/compare/daisy-vs-booksy` | Digital Doorman “call routing only”; cannot book / detailed Q&A / 24/7 | biz.booksy.com AI Receptionist (beta): picks up, **books the appointment**, day or night, EN/ES | Absolute “routing only” contradicts rival’s own product page |
| 6 | MINDBODY-AI-NONE / MB-AI-TABLE | Mindbody | `/en/compare/daisy-vs-mindbody` | AI Receptionist “Not Available” | Mindbody pricing: **AI Concierge** included on Ultimate; add-on on Accelerate; Messenger[ai] customer quotes | False product-absence |

### High — Outdated prices, mislabeled AI, absolute denials with partial product

| Rank | claim_id | Competitor | Issue |
|------|----------|------------|-------|
| 7 | VAGARO-AI-NONE | Vagaro | Table “AI Receptionist: Not Available” vs **Vera Receptionist** (Aug 2026) + AI tools on pricing. Capability is chat/SMS + booking *link*, not full voice+pay — but absolute “Not Available” is false. |
| 8 | FRESHA-PRICE-995 | Fresha | Daisy “From $9.95/mo”; US fresha.com/pricing: Independent **$19.95**, Team **$14.95**/bookable member |
| 9 | BOOKSY-BIZPLUS | Booksy | Daisy Biz $29.99 / Biz+ $49.99 per staff; Booksy: single plan **$29.99** + **$20**/extra user; no feature tiers |
| 10 | MINDBODY-PRICE-139 | Mindbody | Daisy “$139–699/mo”; Mindbody: “Starting at **$79** USD/month”; higher tiers sales-quoted |
| 11 | BLVD-PRICE-158 | Boulevard | Daisy “$158–410/mo”; live: Essentials **$143**, Premier **$234\*** (norm. $293), Prestige **$328\*** (norm. $410) |
| 12 | BLVD-DUO-AI | Boulevard | Daisy treats “Duo assistant” as AI in Premier; Boulevard FAQ: **Duo = POS hardware**; in-product AI is **Billie** |
| — | FRESHA-LOCAL-PAY | Fresha | Absolute “no local payment methods / GCC compliance” while Fresha localizes Arabic GCC markets |
| — | GLOSS-TEAM | GlossGenius | “Team management only in Platinum $148” — Gold already covers up to 9 staff |

### Medium — Unsupported exact figures, fee micro-drift, internal Daisy inconsistency

Examples: Fresha card fee 2.19% vs live 2.29%/2.79%; Fresha “25M+ consumers” not found on checked Fresha pages (35M+ appointments/mo cited instead); Mindbody Messenger[ai] “~$199” not on public pricing; Boulevard 2.6%+$0.10 not clearly listed; Daisy table vs body white-label inconsistency (Boulevard, GlossGenius); Vagaro absolute white-label “Not Available” despite branded app/MySite products.

**Status counts from Tier-1 verification (approx.):** Verified 14 · Outdated 10 · Misleading 12 · Unsupported 3 · Defamatory-risk 7.

---

## What to fix first (ordered hotfix list)

Draft-only. Concrete page URLs and cells/FAQ lines. Rewrite pack Humanizer-passed 2026-09-29. Do not publish until legal review + CoS authorization for Website-FE PR drafts.

### Priority 1 — This week (Critical absence / AI denials)

1. **https://www.jointhedaisy.com/en/compare/daisy-vs-fresha**
   - Feature table: change **AI Receptionist: Not Available** → paid add-on wording (AI Concierge, $99.95/location/mo as of 2026-09-29).
   - Feature table: change **Arabic Support: English Only** → acknowledge Fresha Arabic + multi-GCC ops; keep Daisy native Arabic/English positioning.
   - Feature table / body: change **GCC Countries: UAE** / “Limited GCC… UAE only” → multi-country GCC per Fresha blog; ask reader to confirm market availability.
   - FAQ: “Does Fresha have AI…?” — remove “announced for 2026 and has not shipped” / “no AI in Fresha.”
   - FAQ: “Does Fresha work in the Middle East?” — remove “no Arabic.”
   - Pricing block: replace **From $9.95 / Starter $9.95 / Standard $25** with live Independent $19.95 / Team $14.95 per bookable member (US page).
   - Fees: update **2.19% + $0.20** to published in-person/online rates; keep **20%** marketplace commission only with “one-time / new clients / min $6” nuance.

2. **https://www.jointhedaisy.com/en/compare/daisy-vs-glossgenius**
   - Feature table: **AI Receptionist: Not Available** → Reception by GlossGenius (24/7 calls/texts, books calendar; promo then $50/mo).
   - Body/FAQ: remove “AI analytics only at $148/mo” / “Growth Analyst is the only AI.”
   - Soften **team management only at Platinum $148** → Gold up to 9 staff; Platinum 10+.

3. **https://www.jointhedaisy.com/en/compare/daisy-vs-booksy**
   - Soften table **AI Receptionist: Basic (limited)** and FAQ “Digital Doorman = call router / cannot book / not 24/7.”
   - Align naming with rival’s “AI Receptionist” (beta); note deposits/No-Show Protection still limited per Booksy FAQ.
   - Pricing: replace Biz/Biz+ **$29.99 / $49.99** ladder with **$29.99 + $20 per additional user**, all features in core fee.
   - Transaction fee line: replace **2.49% + $0.15** with live reader / Tap to Pay / keyed schedule.

4. **https://www.jointhedaisy.com/en/compare/daisy-vs-mindbody**
   - Feature table: **AI Receptionist: Not Available** → AI Concierge / Messenger[ai] (Ultimate included; Accelerate add-on).
   - Pricing block: replace **$139 / $279 / $499 / $699** with “from $79/location/mo; higher tiers quote-based.”
   - Drop or footnote **Messenger[ai] ~$199** unless a written quote exists.
   - Marketplace metric: **2M+ classes/month** → **3M+ monthly shoppers** per Mindbody pricing page.

### Priority 2 — Same sprint (High outdated / mislabel)

5. **https://www.jointhedaisy.com/en/compare/daisy-vs-vagaro**
   - Table: **AI Receptionist: Not Available** → Vera (chat/SMS; FAQs; availability + booking link). Distinguish from Daisy voice+pay without denying Vagaro AI.
   - FAQ: soften “chatbot cannot book appointments” (Vera sends booking links; Fill My Books can auto-create from outreach).
   - Keep **$30 + $10/calendar** and **220K+** (professionals wording preferred).

6. **https://www.jointhedaisy.com/en/compare/daisy-vs-boulevard**
   - Pricing: Essentials **$143**; Premier/Prestige promo **$234 / $328** (normally $293 / $410); confirm annual vs monthly toggle.
   - Stop calling **Duo** an AI assistant; Duo = POS hardware; Billie = in-dashboard AI help; Precision Scheduling = AI slot optimization (confirm plan matrix).
   - Align table **White-Label: Not Available** with body “Basic” → branded booking UX, no consumer marketplace white-label.
   - Soften transaction fee **2.6% + $0.10** if not on live public page.

### Priority 3 — Hub / alternative / blog echo (after daisy-vs patches)

7. **https://www.jointhedaisy.com/en/compare** (hub blurbs) — same Fresha/Booksy/GlossGenius/Mindbody/Boulevard/Vagaro absences and price ladders appear in hub copy; patch after daisy-vs sources so hub does not reintroduce Critical rows.
8. Matching **/en/alternative/{fresha,booksy,vagaro,glossgenius,mindbody,boulevard}** and **best-*-alternatives** pages that repeat “no AI / English only / $9.95 / $139–699 / Digital Doorman routing-only.”
9. **Guides / blogs:** `switch-from-fresha`, payment-processing fee tables (2.19%), and `public/llms-full.txt` (“Fresha is a free marketplace…”) — align with compare research after Tier-1 constants are corrected.
10. **Arabic mirrors:** after EN hotfix, schedule AR (`comparisonPages.ar.ts` / tier*.ar.ts) so May 2026 lag does not leave Critical EN claims live in Arabic.

### Do not treat as hotfix yet

- **https://www.jointhedaisy.com/en/compare/daisy-vs-toast** — stub (chrome only). Orphan in FE; no Tier-1 verification needed until page is built or removed.
- Tier-2/3 numeric claims (Zenoti, RepeatMD, Mangomint, Planity, DINGG, Treatwell, Timely, etc.) — inventoried; **UNVERIFIED THIS RUN**. Flag residual risk below; do not rewrite from guesswork.

---

## Evidence table (Tier-1 verified)

Authoritative wording from `2026-09-29-tier1-verification.md`. Access date for all rival checks: **2026-09-29**.

| claim_id | competitor | daisy_claim | daisy_url | rival_source_url | rival_quote (paraphrase/excerpt) | status | severity | draft_rewrite |
|----------|------------|-------------|-----------|------------------|----------------------------------|--------|----------|---------------|
| FRESHA-AI-TABLE | Fresha | AI Receptionist: Not Available | https://www.jointhedaisy.com/en/compare/daisy-vs-fresha | https://www.fresha.com/pricing | “AI Concierge — Save time and fill your calendar by answering every call and message from your clients anytime — $99.95 per location, monthly; 200 mins… 500 messages…” | Defamatory-risk | Critical | “Fresha offers AI Concierge as a paid add-on ($99.95/location/mo on Fresha’s pricing page as of 2026-09-29). Daisy includes AI receptionist capabilities in its published plans—compare scope, languages, and total cost.” |
| FRESHA-AI-FAQ | Fresha | “Fresha announced an AI receptionist for 2026 and it has not shipped… no AI in Fresha” | same | https://www.fresha.com/pricing | Same AI Concierge line item on live pricing (shipped product, not roadmap-only). | Defamatory-risk | Critical | “Fresha markets a live AI Concierge add-on on its pricing page. Feature set and pricing differ from Daisy’s included AI receptionist—verify current Fresha add-on terms.” |
| FRESHA-ARABIC | Fresha | Arabic Support: English Only; FAQ “no Arabic” | same | https://www.fresha.com/blog/expanding-in-the-GCC | “Fresha is live in Arabic… Alongside our established teams in Dubai and Saudi Arabia, we’re now launching local operations in Qatar, Oman, and Kuwait.” (published/updated 2025-07-01) | Defamatory-risk | Critical | “Fresha states its platform is available in Arabic and that it operates teams across multiple GCC markets. Daisy offers native Arabic + English with GCC-focused product positioning—compare localization depth and local payments for your country.” |
| FRESHA-GCC | Fresha | GCC Countries: UAE (Daisy=6) | same | https://www.fresha.com/blog/expanding-in-the-GCC | Dubai + Saudi Arabia teams; launching Qatar, Oman, Kuwait. | Defamatory-risk | Critical | “Fresha publicly describes GCC expansion beyond the UAE (incl. KSA and announced ops in Qatar, Oman, Kuwait). Confirm availability and compliance for your specific market; Daisy lists support across six GCC countries.” |
| FRESHA-PRICE-995 | Fresha | Pricing from $9.95/mo + fees; Starter $9.95 | same | https://www.fresha.com/pricing | Independent **$19.95**/mo; Team **$14.95**/bookable team member/mo (US page, 2026-09-29). | Outdated | High | “Fresha’s US pricing page lists Independent from $19.95/mo and Team from $14.95 per bookable team member/mo, plus marketplace and card fees. Daisy publishes flat plan prices—compare total cost of ownership.” |
| FRESHA-CARD-FEE | Fresha | “2.19% + $0.20 on every card transaction” | same | https://www.fresha.com/pricing | In-person **2.29% + $0.20**; online **2.79% + $0.20**; manual **3.30% + $0.20**. | Outdated | Medium | “Fresha’s published US card rates (as of 2026-09-29) are 2.29%+$0.20 in person and 2.79%+$0.20 online (other rates for keyed/BNPL). Daisy’s published plans emphasize flat subscription pricing—confirm each vendor’s current processing schedule.” |
| FRESHA-MKT-20 | Fresha | 20% commission on marketplace bookings | same | https://www.fresha.com/pricing | “Fresha marketplace - New clients… **20% one-time commission**. Minimum fee of $6 per client… Returning clients… Free.” | Verified (with nuance) | Low | Optional clarify: “20% **one-time** on **new** marketplace clients (min. $6); returning clients free—per Fresha pricing.” |
| FRESHA-25M | Fresha | 25M+ consumers browsing marketplace | same | https://www.fresha.com/blog/fresha-1m-monthly-downloads-marketplace-growth ; https://www.fresha.com/for-business/features/marketplace | Blog: “facilitating over **35 million appointments per month**”; marketplace FAQ: “millions of clients”; +140,000 businesses. Exact “25M+ consumers” not found on checked Fresha pages today. | Outdated / Unsupported (exact figure) | Medium | “Fresha reports large marketplace scale (e.g., 35M+ appointments/month and 140,000+ businesses on its own materials). Use Fresha’s current published metrics rather than a fixed 25M consumer figure.” |
| FRESHA-WL | Fresha | White-Label: Not Available; “all customer-facing pages are Fresha-branded” | same | https://www.fresha.com/pricing (Smart Website add-on; marketplace branding) | Smart Website is an add-on; marketplace listing is Fresha-branded by nature. Full white-label brand control not advertised as a core feature. | Mostly Verified | Low | Keep cautious: “Fresha does not advertise full white-label marketplace branding; customer discovery is primarily via the Fresha marketplace/app.” |
| FRESHA-ACQ | Fresha | Customer Acquisition: Marketplace only | same | https://www.fresha.com/pricing | Direct booking links, Instagram/Facebook/Google bookings free; marketing tools; Client Loyalty add-on $59.95. | Misleading | Medium | “Fresha’s primary discovery channel is its marketplace, alongside direct booking links and paid marketing/loyalty add-ons. Daisy combines marketplace with cashback and AI marketing—compare acquisition mix.” |
| FRESHA-LOCAL-PAY | Fresha | “No… local payment methods, or GCC-specific compliance” | same | https://www.fresha.com/blog/expanding-in-the-GCC | Arabic live + regional teams; specific GCC payment rails / VAT claims not fully itemized on pages checked. | Misleading / Unsupported (absolute) | High | “Fresha is actively localizing for Arabic-speaking GCC markets. Validate payment methods and tax compliance for your country with Fresha; Daisy positions itself as GCC-built with local payments.” |
| BOOKSY-AI-TABLE | Booksy | AI Receptionist: Basic (limited) | https://www.jointhedaisy.com/en/compare/daisy-vs-booksy | https://biz.booksy.com/features/ai-receptionist-beta | “Booksy's automated receptionist picks up when you can't, and **books the appointment for you**… Every call answered, day or night… English or Spanish… AI Receptionist is in beta.” | Misleading | Critical | “Booksy offers an AI Receptionist (beta) that answers calls and can book appointments onto the Booksy calendar (English/Spanish). Daisy’s AI receptionist also covers chat and multilingual Arabic/English workflows—compare languages, payment handling, and maturity.” |
| BOOKSY-AI-FAQ | Booksy | Digital Doorman “cannot take a payment, answer a detailed question or cover customer service 24/7” / “call router” | same | https://biz.booksy.com/features/ai-receptionist-beta | Books appointments; answers day/night; FAQ: deposits/No-Show Protection “Not quite yet”; escalates unhandled requests. Product naming on page is “AI Receptionist” (not “Digital Doorman”). | Defamatory-risk / Misleading | Critical | “Booksy’s current AI Receptionist (beta) can complete many phone bookings 24/7; some policies (e.g., deposits/No-Show Protection) are not yet supported per Booksy’s FAQ. Avoid absolute ‘routing only’ language.” |
| BOOKSY-PRICE-TABLE | Booksy | Pricing Model: $29.99/mo | same | https://biz.booksy.com/pricing | “Booksy costs **$29.99** per month, plus **$20** per month for each additional team member (+ tax).” | Verified (base) | Low | Note add: “+$20 per additional user.” |
| BOOKSY-BIZPLUS | Booksy | Body: “$29.99–$49.99/provider/month”; plans Biz / Biz+ | same | https://biz.booksy.com/pricing | Single all-inclusive plan; “no higher tiers for access to more features.” Extra user = $20, not a $49.99 Biz+ tier. | Outdated | High | “Booksy publishes one subscription at $29.99/mo for the first user and $20/mo per additional team member, with features included in the core fee (payment processing separate).” |
| BOOKSY-TX | Booksy | Transaction fee 2.49% + $0.15 | same | https://biz.booksy.com/pricing | Card reader **2.49% + $0.10**; Tap to Pay **2.49% + $0.20**; Mobile/keyed **2.69% + $0.30**. | Outdated | Medium | “Booksy’s published processing rates (2026-09-29) are 2.49%+$0.10 (reader), 2.49%+$0.20 (Tap to Pay), 2.69%+$0.30 (mobile/keyed).” |
| BOOKSY-ARABIC | Booksy | Arabic: English Only; GCC: None | same | https://biz.booksy.com/features/ai-receptionist-beta | AI languages: “English and Spanish.” No Arabic/GCC localization found on Booksy biz pages checked. | Verified (as of sources checked) | Low | Keep; optionally note Spanish for AI Receptionist. |
| BOOKSY-WL | Booksy | White-Label: Not Available | same | https://biz.booksy.com/pricing | Marketplace/Boost model; no white-label product advertised. | Verified (no rival claim found) | Low | OK as “not advertised / marketplace-branded experience.” |
| BOOKSY-ACQ | Booksy | Marketplace only | same | https://biz.booksy.com/pricing | Free marketplace listing; Boost optional (30% one-time on first Boost visit); own marketing tools included. | Misleading | Low | “Booksy acquisition centers on its consumer marketplace (Boost optional) plus included marketing tools.” |
| VAGARO-AI-TABLE | Vagaro | AI Receptionist: Not Available | https://www.jointhedaisy.com/en/compare/daisy-vs-vagaro | https://www.vagaro.com/pro/updates/vera-receptionist ; https://www.vagaro.com/pro/pricing | “Your New AI Receptionist, Vera” (released Aug 24, 2026); pricing page: “AI-powered business tools & marketing… Vera.” | Misleading | High | “Vagaro offers Vera, branded as an AI receptionist for Connect chat/SMS (answers FAQs; can check availability and send a booking link). Daisy’s AI receptionist emphasizes voice+chat booking/payments—compare channel and booking depth.” |
| VAGARO-AI-FAQ | Vagaro | Chatbot cannot book appointments or process payments; “basic automated reminders” | same | https://www.vagaro.com/pro/updates/vera-receptionist ; https://www.vagaro.com/learn/introducing-fill-my-books-vagaro-ai-powered-booking-tools | Vera: “Check availability and **send customers a link to book**”; Fill My Books can auto-create appointments from outreach. Absolute “cannot book” is too broad. | Misleading | High | “Vera can answer questions and send booking links; Fill My Books can automate rebooking outreach. It is not a voice AI that takes card payments mid-call—state that distinction without denying Vagaro AI entirely.” |
| VAGARO-220K | Vagaro | Marketplace 220K+ businesses | same | Google Play: Vagaro Pro listing | “Join over **220,000** beauty, wellness, and fitness professionals who trust Vagaro Pro” | Verified | Low | OK (professionals ≈ businesses claim—acceptable with “professionals” wording). |
| VAGARO-PRICE | Vagaro | $30/mo; +$10/mo per additional staff calendar | same | https://www.vagaro.com/pro/pricing | Shows **$30.00** regular / **$23.99** promo first 6 months; FAQ: each additional bookable calendar **$10** (US) up to seven then free. | Verified | Low | Optional: note promo $23.99 and 7-calendar cap. |
| VAGARO-275 | Vagaro | POS with 2.75% transaction fees | same | Third-party + historical Vagaro Pay docs; live processing schedule varies by volume | Commonly cited ~2.75% card-present historically; live rates may vary (some 2026 writeups show 2.6%+$0.10 or volume tiers). | Partially outdated / needs live Pay schedule | Medium | “Vagaro processes cards via Vagaro Merchant Services; confirm the live rate schedule in-account. Avoid a single fixed 2.75% if Fresha-style precise quoting is used elsewhere.” |
| VAGARO-ARABIC | Vagaro | English Only; GCC None; no VAT for Gulf | same | https://www.vagaro.com/pro/pricing | US-centric pricing/support phones; no Arabic/GCC claims found on pages checked. | Verified (as checked) | Low | OK. |
| VAGARO-MKT-ADDON | Vagaro | Marketing tools as add-ons | same | Support pricing article (Cloudflare-gated at fetch time); third-party corroboration of Text Marketing etc. | Pricing page includes some marketing; many premium features traditionally à la carte. | Partially Verified | Low | Soften: “Many Vagaro growth features are optional add-ons; confirm current inclusions.” |
| VAGARO-WL | Vagaro | White-Label: Not Available | same | https://www.vagaro.com/pro/pricing | Branded App & MySite exist as products (often paid)—not full white-label marketplace. | Misleading if absolute | Medium | “Vagaro offers branded app/website options; marketplace listing remains Vagaro-branded. Daisy emphasizes full brand control on booking surfaces.” |
| BLVD-PRICE | Boulevard | Pricing $158–410/mo; table $158/mo | https://www.jointhedaisy.com/en/compare/daisy-vs-boulevard | https://www.joinblvd.com/pricing | Essentials **$143**/mo; Premier **$234\***/mo (Normally $293); Prestige **$328\***/mo (Normally $410); Enterprise custom. (*fall/new-customer promo). | Outdated | High | “Boulevard’s public pricing (2026-09-29) shows Essentials from $143/mo and promotional Premier/Prestige from $234/$328 (normally $293/$410) per location—confirm monthly vs annual toggle and current promo.” |
| BLVD-AI-LOCKED | Boulevard | “AI locked behind $295+ Premier”; Precision Scheduling + Duo in Premier | same | https://www.joinblvd.com/pricing ; https://support.boulevard.io/en/articles/6110033-precision-scheduling ; https://www.joinblvd.com/blog/boulevard-subscription-whats-included | Precision Scheduling appears across plan feature matrices on pricing; **Duo** is POS hardware per FAQ; Billie is in-dashboard AI help. No public $295 Premier list price today. | Misleading / Outdated | High | “Boulevard includes Precision Scheduling (AI slot optimization) and Billie (in-app support assistant). It does not ship a native voice AI receptionist. Duo refers to Boulevard’s POS hardware. Confirm which AI features ship on Essentials vs Premier on the live pricing matrix.” |
| BLVD-AI-RECEPT | Boulevard | AI Receptionist: Not Available (voice+chat) | same | https://www.joinblvd.com/pricing ; third-party synthesis aligned with Boulevard feature pages | No native phone AI receptionist on Boulevard product; partners (e.g., REACH.ai) mentioned off-platform. | Verified | Low | OK if scoped to “native voice AI receptionist.” |
| BLVD-ARABIC | Boulevard | English Only; GCC None | same | https://www.joinblvd.com/pricing | US self-care positioning; no Arabic/GCC localization found. | Verified (as checked) | Low | OK. |
| BLVD-WL | Boulevard | White-Label: Not Available (table); feature matrix “Basic” | same | https://www.joinblvd.com/pricing | Branded client experience is a product strength; full white-label marketplace N/A. Table “Not Available” vs body “Basic” is inconsistent. | Misleading (internal inconsistency) | Medium | Align Daisy table with “branded booking UX; no consumer marketplace white-label.” |
| BLVD-ACQ | Boulevard | Customer Acquisition: Limited / None | same | https://www.joinblvd.com/pricing | Marketing texts/email, automated campaigns; no large consumer marketplace like Fresha/Mindbody. | Mostly Verified | Low | Prefer “No large consumer marketplace; marketing tools available by plan.” |
| BLVD-TX | Boulevard | Transaction fee 2.6% + $0.10 | same | https://www.joinblvd.com/pricing | Offset program (client 3% / merchant 1%) described; standard interchange rate not clearly listed as 2.6%+$0.10 on page fetch. | Unsupported / Outdated | Medium | “Confirm Boulevard’s current processing rate with sales; public page emphasizes Offset and volume discounts rather than a single 2.6%+$0.10 line.” |
| MB-AI-TABLE | Mindbody | AI Receptionist: Not Available | https://www.jointhedaisy.com/en/compare/daisy-vs-mindbody | https://www.mindbodyonline.com/business/pricing | Feature table: “AI Concierge — Get a 24/7 front desk assistant…” Ultimate = Check; Accelerate = Add-on. Customer: “Messenger[ai] takes the call and walks them through the booking process.” | Defamatory-risk | Critical | “Mindbody offers AI Concierge / Messenger[ai] (included on Ultimate; add-on on Accelerate per Mindbody pricing). Daisy includes AI receptionist in base published plans—compare inclusion tier, language, and beauty vs fitness fit.” |
| MB-AI-ADDON-199 | Mindbody | Messenger[ai] add-on ~$199/mo | same | https://www.mindbodyonline.com/business/pricing | AI Concierge listed; **no public $199** figure on pricing page (sales-quoted). | Unsupported (exact $) | Medium | “Mindbody sells AI Concierge as a plan feature/add-on; ask Mindbody for current add-on pricing rather than citing ~$199 unless you have a written quote.” |
| MB-PRICE | Mindbody | Expensive $139–699/mo; Starter $139 … Ultimate Plus $699 | same | https://www.mindbodyonline.com/business/pricing ; https://www.mindbodyonline.com/business/education/blog/mindbody-pricing-united-states | “Starting at **$79** USD/month per location” (blog updated 2026-08-28). Accelerate/Ultimate: “Let’s talk” / Contact for pricing. No public Ultimate Plus $699 card. | Outdated | High | “Mindbody publicly advertises plans starting at $79/location/mo; higher tiers are quote-based. Avoid fixed $139–699 ladders unless sourced from a current written quote.” |
| MB-2M | Mindbody | 2M+ classes/month listed | same | https://www.mindbodyonline.com/business/pricing | “Access to **3M+ monthly shoppers**” on the Mindbody app. | Outdated | Medium | “Mindbody cites 3M+ monthly shoppers on its app marketplace (as of 2026-09-29 pricing page).” |
| MB-MKT-COMM | Mindbody | Marketplace commissions | same | https://www.mindbodyonline.com/business/pricing FAQ | “A fee applies only when the app delivers a client you wouldn't have received otherwise. The fee is **20%**, capped at $30… only on the first purchase…” | Verified | Low | OK with “new app-sourced clients, 20% capped at $30.” |
| MB-ARABIC | Mindbody | English Only; GCC None | same | https://www.mindbodyonline.com/business/pricing | Global product; no Arabic UI / GCC VAT claims found on pages checked. | Verified (as checked) | Low | OK. |
| MB-WL | Mindbody | White-Label: Not Available | same | https://www.mindbodyonline.com/business/pricing | Branded website widgets + branded app **add-on**; not full white-label of Mindbody marketplace. | Misleading if absolute | Medium | “Mindbody offers branded widgets and an optional branded app; the Mindbody consumer app remains Mindbody-branded.” |
| GLOSS-AI-TABLE | GlossGenius | AI Receptionist: Not Available | https://www.jointhedaisy.com/en/compare/daisy-vs-glossgenius | https://glossgenius.com/reception ; https://glossgenius.com/pricing | “Reception is the front desk that runs itself… answers every call and text 24/7 and books… Free until November 30th 2026, then only $50/month.” FAQ: books into calendar; can collect deposit/card-on-file. | Defamatory-risk | Critical | “GlossGenius offers Reception by GlossGenius (24/7 calls/texts, books into calendar; promotional free period then $50/mo). Daisy’s AI receptionist is positioned for Arabic/English GCC workflows—compare languages, channels, and plan packaging.” |
| GLOSS-AI-ANALYTICS | GlossGenius | “AI analytics only at $148/mo” / Growth Analyst only AI | same | https://glossgenius.com/pricing ; https://glossgenius.com/reception | Growth Analyst is one AI product; Reception and AI Marketing Assistant also exist. Growth Analyst has limited trial on lower tiers / fuller on Platinum. | Misleading | Critical | “GlossGenius AI includes Reception (voice/text booking) and Growth Analyst (insights). Do not describe AI as analytics-only.” |
| GLOSS-PRICE | GlossGenius | $24/mo starting; Platinum $148/mo | same | https://glossgenius.com/pricing | Standard **$24**/mo billed annually ($28 monthly); Gold $48/$56; Platinum $148/$168; flat **2.6%** processing. | Verified | Low | Optional: disclose monthly vs annual. |
| GLOSS-TEAM | GlossGenius | Team management only in Platinum $148 | same | https://glossgenius.com/pricing | Gold: “businesses up to 9 staff”; Platinum: “teams 10+” / unlimited team features. | Misleading | High | “Staff/team tools start on Gold (up to 9); Platinum targets larger teams (10+). Avoid ‘team only at $148’.” |
| GLOSS-ARABIC | GlossGenius | English Only; GCC None | same | https://glossgenius.com/pricing | US beauty/wellness focus; no Arabic/GCC claims found. | Verified (as checked) | Low | OK. |
| GLOSS-WL | GlossGenius | White-Label: Not Available (table); strengths say white-label in Platinum | same | https://glossgenius.com/pricing | Custom booking website on plans; Daisy table vs Daisy strengths disagree. | Misleading (Daisy inconsistency) | Medium | Align Daisy’s own table/body; describe GlossGenius branded booking site accurately by plan. |
| GLOSS-ACQ | GlossGenius | Limited / None customer acquisition | same | https://glossgenius.com/pricing | No Fresha-scale marketplace; Google Booking on Gold+; marketing included. | Mostly Verified | Low | “No large consumer marketplace; acquisition via booking site, Google Booking, and marketing tools.” |
| GLOSS-TX | GlossGenius | 2.6% per transaction | same | https://glossgenius.com/pricing | “Flat 2.6% rate” / “Flat 2.6% payment processing.” | Verified | Low | OK. |

### Competitor-by-competitor verdict (Tier-1)

- **Fresha — highest C&D exposure.** Daisy asserts no AI, English only, and UAE-only GCC. Fresha’s own properties contradict all three. Pricing floor and card rates are stale. Marketplace 20% one-time new-client commission is accurate if qualified. Priority: rewrite before any paid distribution of this page.
- **Booksy.** Biz/Biz+ ladder and “routing-only Digital Doorman” are the main risks. Arabic/GCC absence remains supportable from pages checked.
- **Vagaro.** Base price, +$10 calendars, ~220k professionals are fine. Absolute AI “Not Available” conflicts with Vera.
- **Boulevard.** “No native AI receptionist” is fair. Mislabeling Duo and stale $295 Premier are the problems.
- **Mindbody.** AI “Not Available” is the critical miss. Replace $139–699 with from $79; higher tiers quoted. Commission claim solid with 20%/cap nuance.
- **GlossGenius.** Reception makes “AI Not Available” and “AI analytics only” indefensible. $24 / $148 / 2.6% largely fine. Soften team-only-at-Platinum.

---

## Inventory of pages checked

Source: `2026-09-29-inventory.md`. Claims are Daisy’s exact wording about rivals; inventory half did **not** verify against rival sources.

### Scope and method

- Live https://www.jointhedaisy.com and `/en/` paths.
- Sitemap enumeration + curl; FAQ JSON-LD + visible text + Next.js RSC payload extraction for client-rendered blogs.
- **975 claims** captured across **67 pages** contributing claims.
- **EN-only for this run.** Arabic `/ar/` mirrors exist in sitemap for the same compare/alternative slugs but were not separately inventoried (assumed translation of EN claims). AR lag is confirmed in the FE inventory (below).

### URL counts by section

| Section | Count (EN) | Notes |
|---------|------------|-------|
| Compare (sitemap-complete) | **36** | Includes hub `/en/compare` + daisy-vs + competitor-vs |
| Alternative (sitemap-complete) | **29** | Hub + single-alternative + best-alternatives listicles |
| Guides | **2** | `choose-best-salon-software`, `switch-from-fresha` |
| Blog (business) | **5** | Client-rendered; claims recovered from RSC payloads |
| Home | **1** | `jointhedaisy.com/` |
| Business landing | **1** | `/en/business` (same chrome family as home) |
| Pricing | **1** | `/en/pricing/business` |
| FAQ | **1** | `/en/faq` |
| Solutions | **1** | `/en/solutions/salon-management-software` |

All probed URLs returned HTTP 200. No 404s in the inventory list.

**Toast stub:** `https://www.jointhedaisy.com/en/compare/daisy-vs-toast` returns 200 but renders chrome only (no comparison body; ~727 chars extracted). Treated as stub. FE has the slug in `comparisonPages` but **no** Toast object in tier1/2/3Data (orphan).

### Competitors named (claim counts)

Boulevard 91 · Fresha 90 · Square Appointments 76 · Booksy 75 · GlossGenius 70 · Vagaro 69 · Mindbody 69 · Mangomint 60 · Acuity Scheduling 58 · Phorest 55 · Zenoti 37 · Glamera 34 · RepeatMD 34 · DINGG 33 · Planity 31 · Setmore 28 · Timely 25 · SimplyBook.me 23 · SumUp 2 · Toast 1 · Stripe 1.

**Tier-1 exhaustive verification this run:** Fresha, Booksy, Vagaro, Mindbody, Boulevard, GlossGenius.

**Dedicated daisy-vs pages also exist for:** Glamera, DINGG, RepeatMD, Planity, Mangomint, Square Appointments, Phorest, Acuity Scheduling; Toast (stub only).

**Named without dedicated daisy-vs (or only vs-vs / listicles):** Zenoti, Setmore, SimplyBook.me, Timely; fee-blog processors Stripe, SumUp. Treatwell appears in FE tier3 research but has no dedicated daisy-vs conversion page.

### Claim category counts (inventory)

| Category | Count |
|----------|------:|
| price | 283 |
| market | 180 |
| feature_present | 128 |
| other | 114 |
| feature_absent | 113 |
| stat | 74 |
| commission | 36 |
| rating | 34 |
| **Total** | **975** |

---

## Website-FE source cross-check

Source: `2026-09-29-website-fe-inventory.md`. Repo on founder Mac (read-only): `/Users/themoneyexp/Documents/GitHub/P101-New-Daisy-Website-FE` (`machineId e7456546-eff7-4d06-9aa5-f51ac2a1abf3`). No repo edits.

### Key constant files (claim sources)

| Path | Role |
|------|------|
| `src/lib/constants/competitors/competitorData.ts` | Types + Daisy baseline pricing/features |
| `src/lib/constants/competitors/tier1Data.ts` | Fresha, Booksy, Vagaro, Mindbody, Zenoti |
| `src/lib/constants/competitors/tier2Data.ts` | Glamera, DINGG, GlossGenius, Zylu, RepeatMD, Boulevard, Planity |
| `src/lib/constants/competitors/tier3Data.ts` | Square, Mangomint, Phorest, Timely, Treatwell, Acuity, etc. |
| `src/lib/constants/competitors/comparisonPages.ts` | daisyVs (15), alternative (14), bestAlternatives (14), competitorVs (20) |
| `src/lib/constants/competitors/comparisonPages.ar.ts` | Arabic mirrors — **last mtime May 1** |
| `src/lib/constants/competitors/tier{1,2,3}Data.ar.ts` | Arabic research — May 1 / Apr 15 |
| `src/lib/constants/competitors/aiTools.ts` | Anolla, BookingBee.ai, SharpAI |
| `public/llms.txt`, `public/llms-full.txt` | LLM indexes / rival blurbs |

### FE-vs-live drift (confirmed)

1. **Daisy price model conflict (high).** Compare constants: **From $50/mo** (Basic $50 / Growth $150 / Business $250). Live-aligned FE pricing (`pricingV3Shared.ts`) + guides: **$1/mo entry** + usage add-on after 5 appointments. Live daisy-vs pages also show Daisy **From $50/mo** in pricing blocks — FE constants drive the stale Daisy side of comparisons.
2. **Fresha “free” vs paid (high).** `tier1Data` / daisy-vs-fresha: free plan gone, from **$9.95/mo**. `public/llms-full.txt`: still “Fresha is a free marketplace-based platform.” Guide FAQ softens to “may still exist.”
3. **Arabic content lag (medium).** EN competitor/comparison files touched **2026-09-29**. AR comparison/tier files last **May 1 / Apr 15**. EN factual hotfixes will not land in AR until those files are updated.
4. **Toast orphan (medium).** `daisy-vs-toast` in EN+AR comparisonPages; no Toast in tier1/2/3Data → empty/broken matrix risk; live page is a stub.
5. **Research freshness stamp.** Most `lastVerified` / `lastResearched` = **2026-03-13/14** while files were edited Sep 29 (copy polish). Explains why live rival checks found stale Tier-1 numbers.

### FE constants are the source of the stale Tier-1 numbers

The same figures flagged Critical/High on live pages are hard-coded in FE research constants:

| Stale live claim | FE source (exact pattern) |
|------------------|---------------------------|
| Fresha From **$9.95/mo**; 2.19%+$0.20; no AI / English only | `tier1Data.ts` + `comparisonPages.ts` daisy-vs-fresha |
| Booksy Biz **$29.99** / Biz+ **$49.99**; 2.49%+$0.15; Digital Doorman routing | `tier1Data.ts` + `comparisonPages.ts` |
| Mindbody **$139–699**; Messenger[ai] ~$199; “No AI of its own” | `tier1Data.ts` + `comparisonPages.ts` |
| Boulevard Essentials **$158** / Premier **$295** / Prestige **$410**; Duo as AI | `tier2Data.ts` + `comparisonPages.ts` |
| GlossGenius AI Growth Analyst only / Reception not reflected | `tier2Data.ts` + `comparisonPages.ts` |
| Vagaro receptionist false / basic chatbot only | `tier1Data.ts` |

**Implication for CoS:** Website-FE hotfixes should edit `tier1Data.ts` / `tier2Data.ts` (GlossGenius, Boulevard) and `comparisonPages.ts` first; route components largely consume those constants. Then sync AR files and `llms-full.txt` / payment blog / guides.

---

## Verified / keep-with-nuance claims

These Tier-1 checks held up against rival public pages (keep or lightly qualify):

| Claim | Status |
|-------|--------|
| Fresha marketplace **20%** one-time commission on **new** marketplace clients (min $6; returning free) | Verified with nuance — qualify wording |
| Fresha white-label / marketplace-branded discovery (full WL not advertised) | Mostly Verified — keep cautious |
| Booksy base **$29.99/mo** (add “+$20 per additional user”) | Verified (base) |
| Booksy Arabic / GCC absence (EN/ES for AI; no Arabic found) | Verified as checked |
| Booksy white-label not advertised | Verified |
| Vagaro **$30/mo** + **$10** per additional staff calendar | Verified |
| Vagaro **220K+** professionals (prefer “professionals” over “businesses”) | Verified |
| Vagaro English only / GCC none (as checked) | Verified |
| Boulevard **no native voice AI receptionist** (if scoped that way) | Verified |
| Boulevard English only / GCC none | Verified |
| Mindbody marketplace fee **20% capped at $30** on first purchase for new app-sourced clients | Verified with nuance |
| Mindbody English only / GCC none (as checked) | Verified |
| GlossGenius **$24** / **$148** (annual vs monthly optional disclose) | Verified |
| GlossGenius flat **2.6%** processing | Verified |
| GlossGenius English only / GCC none | Verified |

---

## Tier-2/3 claims inventoried but not yet rival-verified

**Flag: UNVERIFIED THIS RUN.** Highest-risk numeric / absolute absence claims from inventory + FE research. Founder residual risk until a Tier-2/3 rival-check pass.

| Competitor | High-risk Daisy claims (inventory/FE paraphrase) | Surfaces | Residual risk |
|------------|--------------------------------------------------|----------|---------------|
| **Zenoti** | Custom ~**$225+/mo** per location; mandatory annual contracts; **6 AI agents**; GCC offices but **no Arabic UI** | best-zenoti-alternatives, zenoti alternative, mindbody-vs-zenoti, zenoti-vs-boulevard, hub | Price + Arabic absence + AI count untested on Zenoti’s own pages |
| **RepeatMD** | **~$700/mo** marketing/loyalty only; needs separate booking/POS; Beauty Bank; Adonis/Aria AI | daisy-vs-repeatmd, hub | Price and “marketing-only” scope UNVERIFIED |
| **Mangomint** | **$165–375/mo**; Capterra **4.9/5**; **no AI**; **no marketplace**; US-only | daisy-vs-mangomint, best-mangomint-alternatives, hub | Price ladder + absolute “no AI” UNVERIFIED (same failure mode as Tier-1 AI absences) |
| **Planity** | **~€59/mo**; **10M+** monthly bookings; commission-free; France-focused; **zero AI** | daisy-vs-planity, hub | Stats + “zero AI” + commission-free UNVERIFIED |
| **DINGG** | **$49–79/mo**; AI Genius suite; **UAE-only** GCC; no marketplace/cashback/white-label; **$3M** funding | daisy-vs-dingg, hub | Geo absolute + price + funding UNVERIFIED |
| **Treatwell** | Commission **up to 35%** per booking | FE `tier3Data.ts` only (no daisy-vs page) | Fee claim in research DB; low live visibility but still a published constant |
| **Timely** | Build **$30** +$9/staff; Elevate **$45** +$12; Innovate **$50** +$15; **no AI** | best-timely-alternatives, timely alternative | Per-staff ladder + AI absence UNVERIFIED |
| **Phorest** | **~$99/mo**; UK/Ireland; AI limited to marketing suggestions; no marketplace/Arabic | daisy-vs-phorest, best-phorest-alternatives | Price + AI absence UNVERIFIED |
| **Glamera** | Free / paid from ~**$30**; marketplace commission; **no AI**; primarily KSA; funding **$2.37M** | daisy-vs-glamera, hub | Local rival — high GCC sensitivity; UNVERIFIED |
| **Square Appointments** | Free / paid from **$29**; **2.6%+$0.10**; no AI; not beauty-specific | daisy-vs-square, best-square-alternatives | Fee + AI absence UNVERIFIED this run |
| **Acuity / Setmore / SimplyBook.me** | Low price floors; absolute “no POS/CRM/AI/Arabic” bundles | alternatives + best-* listicles | Feature-absence clusters UNVERIFIED |
| **Meevo, Zylu, BookB, Belliata, Sparkalz, SQUIRE, Salonist, Pabau, AI tools** | Various price/geo/AI claims in FE tier/aiTools | Research only or thin routes | Inventory-complete in FE; limited conversion pages |

**Recommendation:** After Priority-1/2 Website-FE hotfixes ship as drafts, run a Tier-2 rival-verification pass starting with **Mangomint “no AI”**, **Zenoti Arabic/price**, **DINGG UAE-only**, **Glamera**, and **RepeatMD $700** — same method (rival’s own public pages only).

---

## Draft-safe rewrite pack

Humanizer applied 2026-09-29 (embedded). Draft-only; not live.

Collects all **non-Verified** Tier-1 draft rewrites after Humanizer (blader/humanizer v3.0.0, Daisy embedded mode). Factual website compare voice: neutral, plain, complete sentences. Every factual claim, number, URL reference, and competitor product name kept. Grouped by competitor / page. **Not published.** Companion file: `2026-09-29-REWRITE-PACK-HUMANIZED.md`.

### Fresha: https://www.jointhedaisy.com/en/compare/daisy-vs-fresha

**AI Receptionist (table + FAQ)**  
Fresha lists AI Concierge as a paid add-on at $99.95 per location per month on its pricing page as of 2026-09-29. Daisy includes AI receptionist capabilities in its published plans. Feature set, languages, and total cost differ, so check Fresha's current add-on terms when you compare.

**Arabic + GCC**  
Fresha states its platform is available in Arabic and that it operates teams across multiple GCC markets. It describes expansion beyond the UAE, including KSA and announced operations in Qatar, Oman, and Kuwait. Daisy provides native Arabic and English with GCC-focused product positioning and lists support across six GCC countries. Confirm availability, localization depth, local payments, and compliance for your country.

**Pricing**  
Fresha's US pricing page lists Independent from $19.95/mo and Team from $14.95 per bookable team member per month, plus marketplace and card fees. Daisy publishes flat plan prices. Total cost of ownership depends on fees and plan mix for each vendor.

**Card fees**  
Fresha's published US card rates as of 2026-09-29 are 2.29%+$0.20 in person and 2.79%+$0.20 online, with other rates for keyed and BNPL. Daisy's published plans use flat subscription pricing. Check each vendor's current processing schedule.

**25M consumers**  
Fresha's own materials cite figures such as 35M+ appointments per month and 140,000+ businesses. Prefer those current published metrics over a fixed 25M consumer figure.

**Acquisition**  
Fresha's primary discovery channel is its marketplace, with direct booking links and paid marketing and loyalty add-ons also available. Daisy combines a marketplace with cashback and AI marketing. The acquisition mix differs between the two.

**Local payments (absolute)**  
Fresha is localizing for Arabic-speaking GCC markets. Confirm payment methods and tax compliance for your country with Fresha. Daisy is built for the GCC and includes local payments.

*(Optional Verified nuance for 20% commission: "20% one-time on new marketplace clients (min. $6); returning clients free, per Fresha pricing.")*

### Booksy: https://www.jointhedaisy.com/en/compare/daisy-vs-booksy

**AI Receptionist / Digital Doorman**  
Booksy has an AI Receptionist (beta) that answers calls and can book appointments onto the Booksy calendar in English or Spanish. It can complete many phone bookings day or night. Per Booksy's FAQ, some policies such as deposits and No-Show Protection are not yet supported. Daisy's AI receptionist also covers chat and Arabic/English workflows. Languages, payment handling, and product maturity differ. Absolute "routing only" language does not match Booksy's current product page.

**Pricing (Biz/Biz+)**  
Booksy publishes one subscription at $29.99 per month for the first user and $20 per month for each additional team member. Features are included in the core fee; payment processing is separate.

**Transaction fees**  
Booksy's published processing rates as of 2026-09-29 are 2.49%+$0.10 for the card reader, 2.49%+$0.20 for Tap to Pay, and 2.69%+$0.30 for mobile or keyed entry.

**Acquisition**  
Booksy's customer acquisition runs mainly through its consumer marketplace, with optional Boost and included marketing tools.

### Vagaro: https://www.jointhedaisy.com/en/compare/daisy-vs-vagaro

**AI / Vera**  
Vagaro has Vera, an AI receptionist for Connect chat and SMS. Vera answers FAQs, checks availability, and can send a booking link. Fill My Books can automate rebooking outreach. Daisy's AI receptionist handles voice and chat booking and payments. Vera does not take card payments on a voice call; channel and booking depth differ from Daisy.

**Processing fee**  
Vagaro processes cards through Vagaro Merchant Services. The live rate schedule appears in-account. A single fixed 2.75% figure may not match current pricing when precise fee quoting is used elsewhere.

**White-label**  
Vagaro has branded app and website options. Marketplace listings remain Vagaro-branded. Daisy provides full brand control on booking surfaces.

**Marketing add-ons**  
Many Vagaro growth features are optional add-ons. Check which features are included in the current plan.

### Boulevard: https://www.jointhedaisy.com/en/compare/daisy-vs-boulevard

**Pricing**  
Boulevard's public pricing as of 2026-09-29 shows Essentials from $143 per month and promotional Premier and Prestige from $234 and $328 per location (normally $293 and $410). Confirm whether the page shows monthly or annual billing and what promo is active.

**AI / Duo / Billie**  
Boulevard includes Precision Scheduling for AI slot optimization and Billie as an in-app support assistant. It does not include a native voice AI receptionist. Duo is Boulevard's POS hardware. Which AI features appear on Essentials versus Premier is listed on Boulevard's live pricing matrix.

**White-label (align Daisy table/body)**  
Boulevard provides a branded booking experience. It does not offer consumer marketplace white-label.

**Acquisition**  
Boulevard does not run a large consumer marketplace. Marketing tools are available by plan.

**Transaction fee**  
Ask Boulevard sales for the current processing rate. The public pricing page describes Offset and volume discounts rather than a single 2.6%+$0.10 line.

### Mindbody: https://www.jointhedaisy.com/en/compare/daisy-vs-mindbody

**AI Concierge**  
Mindbody has AI Concierge / Messenger[ai], included on Ultimate and available as an add-on on Accelerate per Mindbody pricing. Daisy includes an AI receptionist in its base published plans. Inclusion tier, language support, and beauty versus fitness fit differ between the products.

**~$199 add-on**  
Mindbody sells AI Concierge as a plan feature or add-on. Current add-on pricing is not listed as about $199 on the public pricing page; ask Mindbody for a written quote before citing that figure.

**Price ladder**  
Mindbody publicly advertises plans starting at $79 per location per month. Higher tiers are quote-based. A fixed $139 to $699 ladder needs a current written quote before use.

**Marketplace metric**  
Mindbody cites 3M+ monthly shoppers on its app marketplace as of the 2026-09-29 pricing page.

**White-label**  
Mindbody has branded widgets and an optional branded app. The Mindbody consumer app remains Mindbody-branded.

### GlossGenius: https://www.jointhedaisy.com/en/compare/daisy-vs-glossgenius

**Reception / AI portfolio**  
GlossGenius has Reception by GlossGenius, which answers calls and texts 24/7 and books into the calendar. It is promotional free for a period, then $50 per month. GlossGenius AI also includes Growth Analyst for insights. Daisy's AI receptionist supports Arabic and English GCC workflows. Languages, channels, and plan packaging differ. GlossGenius AI is not limited to analytics.

**Team management**  
Staff and team tools start on Gold for businesses with up to 9 staff. Platinum targets teams of 10 or more. Team management is not limited to the $148 Platinum plan.

**White-label (align Daisy table/body)**  
GlossGenius provides a branded booking site by plan. Align Daisy's table and body to the same description for each plan.

**Acquisition**  
GlossGenius does not run a large consumer marketplace. Acquisition comes through the booking site, Google Booking, and marketing tools.

---

---

## Tier-2/3 verification addendum (same access date 2026-09-29)

Additional rival checks completed after the Tier-1 pass. Full evidence: `2026-09-29-tier2-verification.md`.

### Additional Critical / High (fix with Tier-1)

| Rank | Rival | Daisy claim | Rival’s own pages | Status | Severity |
|------|-------|-------------|-------------------|--------|----------|
| T2-1 | Mangomint | Pricing $165–375/mo | As of 1 Aug 2026: **$120/loc + $10/user** | Outdated | Critical |
| T2-2 | DINGG | “1 GCC country only” | Live country sites: UAE, KSA, Qatar, Kuwait, Oman | Misleading | Critical |
| T2-3 | Phorest | “no AI” | Pricing sells **Front Desk AI** and **Cheat Sheet AI** | Misleading | Critical |
| T2-4 | Zenoti | “6 AI agents” | Own AI Workforce page: **nine** agents | Outdated | Critical |
| T2-5 | Zenoti | ~$225+/mo; mandatory annual | Quote-only on Zenoti.com; annual not absolute | Unsupported / Misleading | High |
| T2-6 | Timely | $30 + $9–15/staff | Calculator ~$26/$39/$47 first seat | Outdated | High |
| T2-7 | Glamera | “free tier” | Plans from **SAR 125/mo** | Unsupported | High |
| T2-8 | Acuity | “no AI” | **AI Booking Assistant** on pricing | Outdated | High |
| T2-9 | SimplyBook.me | “no AI” | **Ask Simply** + **AI Voice Booking** | Outdated | High |
| T2-10 | RepeatMD | ~$700/mo | Not published on RepeatMD pricing | Unsupported (own source) | High |

### Tier-2 Verified (keep with nuance)
Treatwell marketplace **up to 35%** on first booking (0% repeat per FAQ nuance); Planity **10M+ monthly bookings** and commission-free; Acuity **$16–49**; Setmore free / **$5–12**/user; SimplyBook free–**$59.90**; Square Appointments free tier; RepeatMD scope as marketing/loyalty layer (not full booking/POS OS).

### Hotfix order update
After Tier-1 Priority 1–2 pages, add: Mangomint price ladder, DINGG GCC footprint, Phorest “no AI,” Zenoti agent count, then Timely / Glamera / Acuity / SimplyBook / RepeatMD attribution.

## Method & limits

| Rule | Observed |
|------|----------|
| Live jointhedaisy.com primary | Yes — inventory + Tier-1 claim extraction from live `/en/` pages |
| FE Mac path read-only | Yes — Website-FE inventory via registered Mac; no repo edits, no git commit/push |
| Rival = own public pages only | Yes — pricing, features, blog/press, App Store/Play, help. Third-party summaries used only as leads, never as sole proof |
| No competitor contact | Yes |
| No live FE edits / no live publish | Yes — rewrites are drafts only |
| EN-only rival verification this run | Yes — AR not separately rival-checked; AR FE mtime lag noted |
| Humanizer | **Applied 2026-09-29 (embedded)** to Draft-safe rewrite pack only — draft-only; not live |
| Tier-2/3 rival verification | **Completed same day** — see Tier-2/3 addendum + `2026-09-29-tier2-verification.md` |

Hard stops from Tier-1 verification: no competitor contact; Daisy site not edited; rewrites are drafts only.

---

## Appendix: rival URLs checked

From `2026-09-29-tier1-verification.md`. Access date: **2026-09-29**.

### Daisy (claim sources)

- https://www.jointhedaisy.com/en/compare/daisy-vs-fresha
- https://www.jointhedaisy.com/en/compare/daisy-vs-booksy
- https://www.jointhedaisy.com/en/compare/daisy-vs-vagaro
- https://www.jointhedaisy.com/en/compare/daisy-vs-boulevard
- https://www.jointhedaisy.com/en/compare/daisy-vs-mindbody
- https://www.jointhedaisy.com/en/compare/daisy-vs-glossgenius

### Fresha

- https://www.fresha.com/pricing
- https://www.fresha.com/for-business/features/marketplace
- https://www.fresha.com/blog/expanding-in-the-GCC
- https://www.fresha.com/blog/fresha-1m-monthly-downloads-marketplace-growth
- https://www.fresha.com/for-business (curl)

### Booksy

- https://biz.booksy.com/pricing
- https://biz.booksy.com/features/ai-receptionist-beta

### Vagaro

- https://www.vagaro.com/pro/pricing
- https://www.vagaro.com/pro/updates/vera-receptionist
- https://www.vagaro.com/learn/introducing-fill-my-books-vagaro-ai-powered-booking-tools
- https://support.vagaro.com/hc/en-us/articles/22781768988187-Vagaro-Plans-Pricing-and-Premium-Features (Cloudflare blocked full body)
- Google Play: Vagaro Pro (`com.semaphore.login`)

### Boulevard

- https://www.joinblvd.com/pricing
- https://support.boulevard.io/en/articles/6110033-precision-scheduling
- https://www.joinblvd.com/blog/boulevard-subscription-whats-included (via search)
- https://www.joinblvd.com/blog/ai-assistant-for-business (via search)

### Mindbody

- https://www.mindbodyonline.com/business/pricing
- https://www.mindbodyonline.com/business/education/blog/mindbody-pricing-united-states

### GlossGenius

- https://glossgenius.com/pricing
- https://glossgenius.com/reception

### Secondary (lead only, not sole proof)

- Front Desk Review / Codersy / UseCarly pricing trackers (used to locate primary URLs)

---

*End of founder baseline audit report. Inputs: `2026-09-29-tier1-verification.md`, `2026-09-29-inventory.md`, `2026-09-29-website-fe-inventory.md`. Companion CoS cover: `2026-09-29-COS-COVER.md`.*
