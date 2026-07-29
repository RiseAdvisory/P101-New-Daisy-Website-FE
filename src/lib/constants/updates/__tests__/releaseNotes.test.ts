import {
  RELEASE_NOTES,
  STORE_NOTES_MAX_CHARS,
  type ReleaseNote,
} from '../releaseNotes';

describe('release notes data', () => {
  it('has at least one entry', () => {
    expect(RELEASE_NOTES.length).toBeGreaterThan(0);
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

  it('no store-notes text falls back to the meaningless generic line', () => {
    for (const note of RELEASE_NOTES) {
      if (!note.storeNotes) continue;
      expect(note.storeNotes.en.toLowerCase()).not.toContain(
        'bug fixes and performance improvements',
      );
    }
  });
});
