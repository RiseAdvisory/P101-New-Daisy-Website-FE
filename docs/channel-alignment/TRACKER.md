# Channel Messaging Alignment Tracker

**Goal:** every public channel tells the same story as the website. The website (this repo) is the source of truth for positioning; every other channel gets audited against it and brought into line.

**Started:** 2026-07-28 · **Owner:** founder + Claude · **Credentials:** `~/.daisy/stores.env` (outside repo, alongside other service env files)

---

## Source-of-truth message pillars (from website)

1. AI receptionist for WhatsApp, Instagram, and your booking site (24/7)
2. Run the business in one platform: bookings, team calendars, payments, reviews, client records
3. 0% commission on your existing clients; marketplace brings new ones
4. 14-day free trial, no card required; $1/month entry tier (+plan price past 5 appointments/month)
5. Full brand control (white-label booking site)
6. Bilingual English/Arabic, equal priority
7. Personas: businesses first, solo professionals second, consumers third (customer page redirects to /business)

---

## Channel inventory & status

| Channel | URL / handle | Copy status | Last audit | Managed via |
|---------|--------------|-------------|-----------|-------------|
| Website | jointhedaisy.com | ✅ Source of truth | — | This repo |
| App Store (iOS) | apps.apple.com/kw/app/the-daisy/id1667105749 | 🔴 Consumer-only positioning, EN-only | 2026-07-28 | fastlane deliver (pending ASC key) |
| Google Play | play.google.com/store/apps/details?id=com.trythedaisy.app | 🔴 Consumer-only positioning, EN-only | 2026-07-28 | fastlane supply (pending service account) |
| Instagram | instagram.com/thedaisy.app | ⚪ Not yet audited | — | Manual now; Meta Graph API later |
| Facebook | facebook.com/thedaisy.app | ⚪ Not yet audited | — | Manual now; Meta Graph API later |
| X / Twitter | twitter.com/thedaisy_app | ⚪ Not yet audited | — | Manual now; API later |
| LinkedIn | linkedin.com/company/the-daisy | ⚪ Not yet audited | — | Manual |

Status legend: ✅ aligned · 🟡 partially aligned · 🔴 contradicts website · ⚪ not audited

---

## Audit findings

### App stores (2026-07-28)
- Both listings describe a CONSUMER cashback/booking app ("Concierge Booking Service", "Curated Offers & Experiences"). No mention of business tools, AI receptionist, or free trial — yet every "Start Business Trial" CTA on the site funnels here via /get-the-app. Funnel contradiction at the final step.
- English only on both stores. No Arabic listing despite bilingual being a core differentiator.
- Release notes are generic ("bug fixes and performance improvements") on every release.
- iOS subtitle: "Curated Offers & Experiences". Categories: Lifestyle (iOS) / Beauty (Play).

### Social accounts
- Not yet audited. Next session: review bios, pinned posts, and recent content on IG/FB/X/LinkedIn against the message pillars. Bios are the store-listing equivalent (small, high-traffic, easy to fix first).

---

## Action items

| # | Action | Who | Status |
|---|--------|-----|--------|
| 1 | Draft aligned store listings (EN + AR, business-led) | Claude | ✅ Done — see `store-listings-draft.md` |
| 2 | Generate App Store Connect API key → fill `~/.daisy/stores.env`, drop `.p8` in `~/.daisy/` | Founder | ✅ Working — 3 apps visible (prod/stage/dev) |
| 3 | Play service account access | Founder | ✅ Working — reused the app-publishing service account whose key lives in the TALT repo under `certificates/`; copied to `~/.daisy/play-service-account.json`. It is NOT the Search Console service account (different project). |
| 4 | Push new Play listing (via API or console; editable anytime) | Claude | ✅ Pushed 2026-07-28 — EN + AR committed, in Google review |
| 5 | iOS: promo text updated on live 1.5.3; new description/keywords/subtitle + ar-SA staged on draft version 1.5.4 (ships with next release) | Claude | ✅ Pushed/staged 2026-07-28 |
| 6 | Set up fastlane metadata-as-code in P101-Daisy-App-TALT (Fastfile already uses supply via `PLAY_CONFIG_JSON` in CI — extend, don't duplicate) | Claude | ⏳ |
| 7 | Audit social bios + pinned content vs pillars | Claude | ⏳ next session |
| 8 | Add Arabic store listings (both stores) | Claude + Founder | ⏳ drafted with #1 |

---

## API access (verified 2026-07-28)

- Helper: `~/.daisy/bin/stores-api.mjs` (`asc-test`, `play-test`)
- ASC: team key (id and issuer in `~/.daisy/stores.env`), sees The Daisy prod + Stage + Dev
- Play: `try-the-daisy` SA creates/deletes listing edits on `com.trythedaisy.app`
- Play listing locales found: `en-US` AND `ar` (Arabic exists! Same consumer copy: "عروض وتجارب مختارة"). iOS is EN-only.

## Release-notes pipeline (built 2026-07-29)

One source feeds three surfaces:
- Data: `src/lib/constants/updates/releaseNotesData.json` (canonical, newest first) + `releaseNotes.ts` (types) + validation test (500-char Play cap, locale parity, no generic "bug fixes" text)
- Website: `/resources/updates` rebuilt to render it (SSR, EN/AR, `<details>` expanders; lorem-ipsum placeholder content removed)
- Stores: `~/.daisy/bin/stores-api.mjs push-whatsnew <version> [--track x] [--dry-run]` — iOS whatsNew on the draft version + Play releaseNotes on the track release via API (CI skips changelogs, so API is the working path)

Per-release flow: founder hands over the shipped-feature list for the deployment → write JSON entry from it → commit (website shows it) → `push-whatsnew <version>` after the draft/release exists.

**Scope (corrected 2026-07-30):** entries are vendor-facing PRODUCT features only — what a business or solo professional would notice while running their business. Marketing website work, internal refactors, and infrastructure are excluded, even when real. The page promises "New tools and features for your business", and the same entries feed both app stores, so an off-scope entry would reach the stores too. The three originally seeded entries were marketing-site changes and were removed. Never infer entries from this repo's git history; the source of truth arrives per deployment. `'web'` in `platforms` means the vendor web platform, not this marketing site. An empty list renders an empty state and is the correct state between deployments.

## Screenshot assets

Figma is the source of truth. Locations, node IDs and export notes:
`store-screenshot-assets.md` (same folder).

## Log

- **2026-07-28** — Tracker created. Store audit done (both 🔴). `~/.daisy/stores.env` template created. Listing drafts written (`store-listings-draft.md`).
- **2026-07-28 (later)** — ASC + Play API access both verified working. Play has an existing `ar` locale with consumer copy (tracker table said EN-only; iOS still is). Helper script bug (missing `await`) caused false 401s during setup; the Play SA had access all along.
- **2026-07-28 (rev 2)** — Customer side removed from listing drafts (founder: the published app does not expose the customer side for now). No cashback/loyalty promises; business + solo pro only. Category recommendation changed to Business on both stores. Re-add a customer section when that side ships.
- **2026-07-28 (PUSHED)** — Play: EN + AR listings committed (edit 16188007187341831948), in Google review. iOS: promo text live on 1.5.3 (no review needed); draft version 1.5.4 created (843e308c…) carrying new description + keywords (en-US), full ar-SA metadata (locale pre-existed in ASC, patched), and subtitle "AI receptionist & bookings". These ship automatically with the next release. REMAINING: category switch to Business in both consoles (manual, founder); "What's New" text for 1.5.4 when the release is prepared; ar-SA screenshots optional (falls back to en-US).
