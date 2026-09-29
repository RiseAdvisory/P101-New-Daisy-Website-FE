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
