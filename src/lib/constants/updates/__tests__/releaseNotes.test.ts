import {
  RELEASE_NOTES,
  STORE_NOTES_MAX_CHARS,
  type ReleaseNote,
} from '../releaseNotes';

describe('release notes data', () => {
  // The list is intentionally allowed to be empty: entries come from
  // per-deployment handover of shipped vendor features, not from this
  // repository's own history, so there are quiet periods between releases.
  it('is an array', () => {
    expect(Array.isArray(RELEASE_NOTES)).toBe(true);
  });

  it('every entry has valid ISO dates', () => {
    for (const note of RELEASE_NOTES) {
      expect(note.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(note.date))).toBe(false);
    }
  });

  it('entries are ordered newest first', () => {
    const dates = RELEASE_NOTES.map((n) => n.date);
    const sorted = [...dates].sort((a, b) => b.localeCompare(a));
    expect(dates).toEqual(sorted);
  });

  it('versions are unique', () => {
    const versions = RELEASE_NOTES.map((n) => n.version);
    expect(new Set(versions).size).toBe(versions.length);
  });

  it('every entry has both locales for title, summary, and highlights', () => {
    for (const note of RELEASE_NOTES) {
      for (const field of ['title', 'summary'] as const) {
        expect(typeof note[field].en).toBe('string');
        expect(note[field].en.length).toBeGreaterThan(0);
        expect(typeof note[field].ar).toBe('string');
        expect(note[field].ar.length).toBeGreaterThan(0);
      }
      expect(note.highlights.en.length).toBeGreaterThan(0);
      expect(note.highlights.ar.length).toBeGreaterThan(0);
      // AR highlights must mirror EN one-to-one so the page renders the
      // same number of bullets in both languages.
      expect(note.highlights.ar.length).toBe(note.highlights.en.length);
    }
  });

  it('platforms only contain known values', () => {
    for (const note of RELEASE_NOTES) {
      expect(note.platforms.length).toBeGreaterThan(0);
      for (const p of note.platforms) {
        expect(['ios', 'android', 'web']).toContain(p);
      }
    }
  });

  it('app-store entries provide storeNotes within the Play 500-char cap', () => {
    const appEntries = RELEASE_NOTES.filter((n: ReleaseNote) =>
      n.platforms.some((p) => p === 'ios' || p === 'android'),
    );
    for (const note of appEntries) {
      // The store push script reads these; an app release without them
      // would silently ship the old "bug fixes" text.
      expect(note.storeNotes).toBeDefined();
      expect(note.storeNotes!.en.length).toBeGreaterThan(0);
      expect(note.storeNotes!.en.length).toBeLessThanOrEqual(
        STORE_NOTES_MAX_CHARS,
      );
      expect(note.storeNotes!.ar.length).toBeGreaterThan(0);
      expect(note.storeNotes!.ar.length).toBeLessThanOrEqual(
        STORE_NOTES_MAX_CHARS,
      );
      // App versions use semver, not slugs.
      expect(note.version).toMatch(/^\d+\.\d+\.\d+$/);
    }
  });

  it('only a release flagged maintenanceOnly may use the generic line', () => {
    // The generic text is allowed, but only as a recorded decision. Without
    // the flag it is the default-boilerplate problem this data file exists
    // to prevent.
    for (const note of RELEASE_NOTES) {
      if (!note.storeNotes) continue;
      const isGeneric = note.storeNotes.en
        .toLowerCase()
        .includes('bug fixes and performance improvements');
      if (isGeneric) {
        expect(note.maintenanceOnly).toBe(true);
      }
    }
  });

  it('a maintenanceOnly release still provides store notes', () => {
    // The flag suppresses the website entry, not the store requirement.
    for (const note of RELEASE_NOTES) {
      if (!note.maintenanceOnly) continue;
      expect(note.storeNotes?.en?.length).toBeGreaterThan(0);
      expect(note.storeNotes?.ar?.length).toBeGreaterThan(0);
    }
  });
});

// The live data is web-only right now, so the app-release rules above never
// fire against it. These fixtures exercise that path directly rather than
// putting a fabricated app release into the data that the public updates
// page renders.
describe('app-release validation rules (fixtures)', () => {
  const validAppEntry: ReleaseNote = {
    version: '9.9.9',
    date: '2026-01-01',
    platforms: ['ios', 'android'],
    title: { en: 'Title', ar: 'عنوان' },
    summary: { en: 'Summary', ar: 'ملخص' },
    highlights: { en: ['One'], ar: ['واحد'] },
    storeNotes: { en: 'Real note about what changed.', ar: 'ملاحظة عن التغييرات.' },
  };

  /** Mirrors the rules the store-push script enforces before sending. */
  function validateAppEntry(note: ReleaseNote): string[] {
    const errors: string[] = [];
    const isApp = note.platforms.some((p) => p === 'ios' || p === 'android');
    if (!isApp) return errors;
    if (!note.storeNotes) {
      errors.push('missing storeNotes');
      return errors;
    }
    for (const locale of ['en', 'ar'] as const) {
      const text = note.storeNotes[locale];
      if (!text) errors.push(`missing storeNotes.${locale}`);
      else if (text.length > STORE_NOTES_MAX_CHARS)
        errors.push(`storeNotes.${locale} over ${STORE_NOTES_MAX_CHARS} chars`);
    }
    if (!/^\d+\.\d+\.\d+$/.test(note.version))
      errors.push('app version must be semver');
    return errors;
  }

  it('accepts a well-formed app release', () => {
    expect(validateAppEntry(validAppEntry)).toEqual([]);
  });

  it('rejects an app release with no storeNotes', () => {
    const { storeNotes, ...withoutNotes } = validAppEntry;
    expect(validateAppEntry(withoutNotes as ReleaseNote)).toContain(
      'missing storeNotes',
    );
  });

  it('rejects storeNotes longer than the Play cap', () => {
    const tooLong: ReleaseNote = {
      ...validAppEntry,
      storeNotes: {
        en: 'x'.repeat(STORE_NOTES_MAX_CHARS + 1),
        ar: validAppEntry.storeNotes!.ar,
      },
    };
    expect(validateAppEntry(tooLong)).toContain(
      `storeNotes.en over ${STORE_NOTES_MAX_CHARS} chars`,
    );
  });

  it('rejects a slug version on an app release', () => {
    const slugVersion: ReleaseNote = { ...validAppEntry, version: 'some-slug' };
    expect(validateAppEntry(slugVersion)).toContain('app version must be semver');
  });

  it('ignores web-only entries', () => {
    const webOnly: ReleaseNote = {
      ...validAppEntry,
      version: 'web-thing',
      platforms: ['web'],
      storeNotes: undefined,
    };
    expect(validateAppEntry(webOnly)).toEqual([]);
  });
});
