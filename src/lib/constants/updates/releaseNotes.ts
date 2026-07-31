/**
 * Release notes: the single source of truth feeding three surfaces.
 *
 * 1. The website updates page (/resources/updates) renders every entry.
 * 2. iOS "What's New" — pushed per app release via
 *    `~/.daisy/bin/stores-api.mjs push-whatsnew <version>` (reads the JSON).
 * 3. Google Play release notes — same command, via the Play API (the CI
 *    fastlane lane uploads with skip_upload_changelogs, so the API path is
 *    the one that works).
 *
 * WHAT BELONGS HERE
 *
 * The updates page promises "New tools and features for your business" and
 * "what is new for business owners on The Daisy platform". An entry earns
 * its place only if a vendor would care that it shipped:
 *
 *   INCLUDE  product capability changes for businesses and professionals —
 *            new features in the apps or the vendor platform, changes to
 *            how they take bookings, get paid, manage staff or clients,
 *            AI receptionist behaviour, reporting.
 *
 *   EXCLUDE  marketing website work (page copy, pricing page design, SEO),
 *            internal refactors, infrastructure, and anything a vendor
 *            would never notice while running their business.
 *
 * The exclusions are not hypothetical: the first three seeded entries were
 * marketing-site changes and were removed for exactly this reason. Note
 * that 'web' in `platforms` means the vendor web platform, NOT this
 * marketing site.
 *
 * The source of truth is supplied per deployment: when a release ships,
 * the shipped features are handed over and an entry is written from them.
 * Do not infer entries from this repository's own git history.
 *
 * Data lives in releaseNotesData.json (NOT here) so the store-push script
 * can read it without a TypeScript toolchain. Add new entries at the TOP
 * (newest first — the validation test enforces ordering).
 *
 * Field rules (enforced by __tests__/releaseNotes.test.ts):
 * - `version`: semver for app releases ('1.5.4'), kebab slug otherwise.
 * - `platforms`: entries containing 'ios'/'android' MUST provide storeNotes.
 * - `storeNotes`: <= 500 chars per locale (Google Play's cap; iOS allows
 *   4000, so Play is the binding limit).
 */
import { I18nContent } from '../i18n';
import data from './releaseNotesData.json';

export type ReleasePlatform = 'ios' | 'android' | 'web';

export interface ReleaseNote {
  version: string;
  date: string; // ISO yyyy-mm-dd
  platforms: ReleasePlatform[];
  title: I18nContent<string>;
  summary: I18nContent<string>;
  highlights: I18nContent<string[]>;
  /** Store-facing "What's New" text. Required for ios/android entries. */
  storeNotes?: I18nContent<string>;
}

export const RELEASE_NOTES = data as ReleaseNote[];

/** Google Play caps release notes at 500 characters per locale. */
export const STORE_NOTES_MAX_CHARS = 500;
