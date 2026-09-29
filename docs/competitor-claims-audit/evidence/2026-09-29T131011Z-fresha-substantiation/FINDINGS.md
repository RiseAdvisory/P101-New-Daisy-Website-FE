# Substantiation evidence — Fresha claims

**Captured:** see folder name (UTC) · 2026-09-29 Asia/Kuwait
**Why:** Fresha sent a cease and desist. These are Fresha's own published pages, captured to establish whether Daisy's live claims about Fresha are true.
**Method:** four ordinary HTTPS GETs to public URLs, one per page, from the founder Mac. No proxies, no VPN, no IP rotation, no automated crawling, no login, no access control bypassed. Fresha publishes per-locale URLs itself, so no geo-circumvention was needed or used.

## Findings

### 1. Arabic — Daisy's claim is false

Daisy published: `No Arabic UI. English only`

Fresha serves a complete Arabic site. `https://www.fresha.com/ar/pricing` returned **HTTP 200** with **38,391 Arabic-script characters**, and its own document element declares:

```html
<html lang="ar" dir="rtl" data-country-code="KW"
```

That is a full right-to-left Arabic interface, declared by Fresha's own markup.

### 2. GCC coverage — Daisy's claim is false

Daisy published: GCC presence limited to `['UAE']`

The same element carries `data-country-code="KW"` — **Kuwait**. Fresha's pricing page also served Kuwaiti dinar pricing when requested without any locale hint. Fresha is trading in at least one GCC market Daisy's data says it is absent from.

### 3. AI — Daisy's claim is false

Daisy published: AI not available / announced but not shipped.

`https://www.fresha.com/for-business/features/ai-concierge` returned **HTTP 200** and describes a shipped product in present tense: it **answers calls** and **books appointments**. The page carries no "coming soon", "beta" or "waitlist" language.

### 4. Pricing — Daisy's figure is stale, and the audit's replacement is not substantiated

Daisy published: `From $9.95/mo + fees`.

Fresha's pricing page is **locale-varying**. It declares **38 locale alternates** (`ar, bg, cs, da, de, el, en-GB, en-US, es-ES, es-MX, fi, fr-CA, fr-FR, hr, hu, id, it, ja, ko, lt, ms, nb, nl, pl, pt-BR, pt-PT, ro, ru, sl, sq, sr, sv, th, tr, uk, vi, zh-CN, zh-HK, x-default`) and publishes per-market pricing URLs such as `/en-GB/pricing` and `/es-MX/pricing`.

Requested from Kuwait, the Independent plan showed **KWD 8.95/month**, with **Team and Enterprise quoted as "Custom rates"**.

**The internal hotfix pack proposes publishing Fresha at `$19.95` / `$14.95` per team member, and AI Concierge at `$99.95/location/month`. None of those figures were found on Fresha's own pages during this capture.** Team pricing is not published at all; it is quote-based. Publishing those numbers would restate an unsubstantiated competitor price, which is the same category of exposure this exercise exists to remove.

## Limits of this evidence

- One point in time, one network location. Fresha's pages are locale-varying, so other markets will differ.
- Server-rendered HTML only; anything rendered after hydration or behind interaction is not captured.
- No claim is made here about Fresha's localisation *depth*, support quality, per-market compliance, or payment rails. Only that an Arabic UI exists, a GCC country code is served, and an AI product page is published.
- Not legal advice. A live cease and desist should be handled with counsel.

## Integrity

`SHA256SUMS.txt` covers all four captures. `capture-log.txt` records HTTP status and source URL per file.

---

## Addendum — pricing is geo-determined, not locale-determined

**Correction to an earlier assumption in this workstream.** Fresha's per-locale URLs (`/ar/pricing`, `/en-GB/pricing`) change **language only**. Price and currency follow the requesting IP.

Proof from the captures in this folder: all three of `/pricing`, `/ar/pricing` and `/en-GB/pricing` returned `data-country-code="KW"` and KWD figures. `/en-GB/pricing` is Kuwaiti pricing rendered in British English, not UK pricing.

So Fresha's non-GCC pricing cannot be observed from Kuwait by changing the URL.

**An independent, dated source shows a different market.** The Internet Archive snapshot of `fresha.com/pricing` taken **2026-09-13** carries `data-country-code="CA"` and dollar-denominated figures — a different geography from a third party, captured before this dispute, with no involvement from Daisy. Saved here as `pricing-wayback-20260913-CA.html`.

**Implication for any published price claim.** Fresha's pricing is market-varying, and Team and Enterprise are quote-based rather than published. Any single figure, or any range presented as comprehensive, will be wrong in some market. A market-qualified and dated statement, or a comparison on pricing *structure* rather than amount, is the only form that stays true.

---

## Booksy, GlossGenius and Mindbody — same pattern, same verdict

Checked against each rival's own pages on the same day, because Daisy published absence claims about all three.

### Booksy — "routing only, cannot book, not 24/7" is false

`biz.booksy.com/features/ai-receptionist-beta`, HTTP 200:

> "Booksy's automated receptionist picks up when you can't, and **books the appointment for you**."
> "Every call gets answered, **day or night**."
> "AI Receptionist is **in beta**. Current Booksy providers can request access and start using it today."

It books, and it is day-or-night. The true and still-useful qualifiers are that it is in beta, request-based, English and Spanish, and phone-only. Note also that Booksy now brands this "AI Receptionist"; "Digital Doorman" appears to be the older name Daisy was still using.

### GlossGenius — "AI receptionist not available; analytics only" is false

`glossgenius.com/reception`, HTTP 200:

> "Reception by Genius AI: Calls, Texts & Bookings."
> "Reception answers your calls and texts 24/7 and **books clients in seconds**."
> "**Free on GlossGenius until 11/30/26.**"

Reception is shipped. It covers calls and texts, not WhatsApp or Instagram, which is the honest distinction. The internal pack proposed "promo then $50/mo"; the page states only that it is free until 30 November 2026, so no post-promo price is asserted in the corrected copy.

### Mindbody — "AI Receptionist not available" is false

`mindbodyonline.com/business/pricing`, HTTP 200, lists among plan features:

> "**AI Concierge** — Turn missed calls into bookings"

The same page also confirms a claim Daisy makes that is true and has been kept: the marketplace fee is "20%, capped at $30 … and only on the first purchase for someone new to your business."

## What this does not establish

Nothing here speaks to the quality, reliability or real-world performance of any rival's AI, nor to pricing beyond what each page states. The corrections move the comparison from presence to scope and channel coverage, which is what the evidence supports.

---

## Mangomint, DINGG, Phorest, Zenoti — the remaining Critical rows

### Mangomint — the published price is stale

`mangomint.com/pricing`, HTTP 200:

> "$120 per location and $10 per user"
> "Locations $120/mo each · Users $10/mo each"

Daisy published $165–375/mo across three named tiers. Those tiers no longer exist; Mangomint moved to per-location plus per-user. Unlike Fresha, this price **is** published openly on their own page, so it is safe to state with a capture date.

Add-ons, also published: Phone $70/mo per line, Marketing from $30/mo, Payroll $50/mo + $8 per worker.

**Not changed:** Daisy also claims Mangomint has "no AI". Their pricing page contains exactly one instance of "AI", and it is a note telling AI agents where to find a Markdown version of the page, not a product. So the claim is not contradicted by this capture, but neither is it positively verified. Given four rivals in this audit turned out to ship AI that Daisy said they lacked, this one should be checked properly rather than assumed.

### DINGG — "1 GCC country" is false, but "not all six" is true

Live country sites, all HTTP 200 with country-specific titles, verified 2026-09-29:

| URL | Title |
|---|---|
| `dingg.app/ae` | Salon & Spa Software in UAE |
| `dingg.app/sa` | Salon & Spa Software in Saudi Arabia |
| `dingg.app/qa` | Salon & Spa Software in Qatar |
| `dingg.app/kw` | Salon & Spa Software in Kuwait |
| `dingg.app/om` | Salon & Spa Software in Oman |
| `dingg.app/bh` | **404 — Page Not Found** |

Five GCC markets, not one. Bahrain genuinely absent, so Daisy's six-country coverage remains a real and defensible differentiator; the copy now says five-not-six rather than one.

### Phorest — "no AI" is false

`phorest.com/gb/pricing`, HTTP 200, lists under an "AI Features" section:

> "**Front Desk AI** — Give clients faster answers and smoother bookings with AI that supports everyday front-desk conversations."
> "**Cheat Sheet AI** — Get an instant summary of each client's history before they arrive."

### Zenoti — "6 AI agents" is outdated

`zenoti.com/ai-workforce`, HTTP 200:

> "AI Workforce … **Nine AI agents** — each built for a specific revenue leak in your business."

Daisy said six. Note this claim was in Daisy's copy as a point in Zenoti's favour, so correcting it upward is simply accuracy, not a concession.
