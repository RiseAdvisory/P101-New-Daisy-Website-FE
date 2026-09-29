# Pre-edit archive — competitor claims (EN + AR)

**Captured:** 2026-09-29T125721Z (UTC) · 2026-09-29 Asia/Kuwait
**Purpose:** Preserve the published state of Daisy's competitor-comparison claims, in English and Arabic, **before** any corrective edit is made.
**Context:** A cease and desist letter was received from a competitor. This archive is the pre-edit reference point. It is a record, not a working copy.

## Do not modify

Files in this directory are evidence of what was published at the capture time above. Do not edit, reformat, re-run the humanizer over, or "tidy" anything here. Corrections belong in `src/`, not in this folder.

## Repository state at capture

| | |
|---|---|
| Branch | `main` |
| Commit | `d6c062a61bb995f14d8fa0547f419650f39ec6c5` |
| Working tree | Clean for all `src/` paths; only untracked/unrelated `docs/` and `.claude/` edits present |

The commit above is the authoritative source state. This archive duplicates it in fixed form so the record does not depend on branch history remaining unrewritten.

## What was captured

### 1. Source constants (`source/`, 13 files)

Every file carrying competitor claims, **both locales**:

- `tier1Data.ts` / `tier1Data.ar.ts`
- `tier2Data.ts` / `tier2Data.ar.ts`
- `tier3Data.ts` / `tier3Data.ar.ts`
- `comparisonPages.ts` / `comparisonPages.ar.ts`
- `competitorData.ts`, `aiTools.ts`, `index.ts`
- `public/llms.txt`, `public/llms-full.txt` (these restate competitor claims to AI crawlers)

### 2. Live published pages (`live-pages.tar.gz`, 130 pages)

Rendered HTML as served to the public at capture time — **65 English and 65 Arabic**, every `/compare/*` and `/alternative/*` URL listed in the live sitemap.

This matters more than the source for a claims dispute: it is what a reader, or a complainant, actually saw.

- URL list: `captured-urls.txt` (derived from `https://www.jointhedaisy.com/sitemap.xml`)
- Per-request HTTP status and byte count: `capture-log.txt`
- **All 130 returned HTTP 200. No failures, no omissions.**

## Integrity

| File | Covers |
|---|---|
| `SHA256SUMS-source.txt` | each of the 13 source files |
| `SHA256SUMS-live.txt` | each of the 130 captured pages, hashed **before** compression |
| `SHA256SUMS-archive.txt` | the `live-pages.tar.gz` bundle itself |

Per-page hashes were taken before archiving, so an individual page can be verified after extraction without trusting the tarball.

Verify with:

```
shasum -a 256 -c SHA256SUMS-source.txt
shasum -a 256 -c SHA256SUMS-archive.txt
tar -xzf live-pages.tar.gz && cd live && shasum -a 256 -c ../SHA256SUMS-live.txt
```

## Method and its limits

- Captured with `curl` over HTTPS from the founder Mac, following the live sitemap. Server-rendered HTML only.
- **Not captured:** client-side state after hydration, A/B or personalised variants if any exist, images, CSS, JS bundles, and anything behind interaction.
- **Not captured:** third-party mirrors, search-engine caches, or social previews that may still carry the prior claims after the site is corrected.
- Capture reflects one point in time from one network location. Geo-varying content, if any, would not be visible here.

## Known context recorded at capture time

Independently confirmed before any edit, on the live site:

- `No Arabic UI. English only` was live on `/en/compare/daisy-vs-fresha`.
- Fresha's own pricing page served Kuwaiti dinar pricing (KWD 8.95), and Fresha publishes a live AI Concierge product page.

These two observations are recorded because they bear directly on the disputed claims. They are observations, not legal conclusions.
