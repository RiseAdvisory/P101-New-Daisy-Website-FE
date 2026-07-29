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
 * Data lives in releaseNotesData.json (NOT here) so the store-push script
 * can read it without a TypeScript toolchain. Add new entries at the TOP
 * (newest first — the validation test enforces ordering).
 *
 * Field rules (enforced by __tests__/releaseNotes.test.ts):
 * - `version`: semver for app releases ('1.5.4'), kebab slug for web-only.
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
