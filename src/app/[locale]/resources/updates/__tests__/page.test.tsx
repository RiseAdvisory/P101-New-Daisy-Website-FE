import { render, screen, within } from '@testing-library/react';
import UpdatesPage from '../page';
import { RELEASE_NOTES } from '@/lib/constants/updates/releaseNotes';

// Route-level smoke tests. Rendering the real page.tsx (rather than the
// UpdatesList component in isolation) is deliberate: if the route still
// imported a component that no longer exists, the import below would throw
// and every test in this file would fail. That makes these tests the
// regression guard for the route's import graph, not just its markup.

describe('/resources/updates route', () => {
  it('renders without missing imports (en)', () => {
    expect(() => render(<UpdatesPage params={{ locale: 'en' }} />)).not.toThrow();
  });

  it('renders every release note entry', () => {
    render(<UpdatesPage params={{ locale: 'en' }} />);
    for (const note of RELEASE_NOTES) {
      expect(screen.getByText(note.title.en)).toBeInTheDocument();
      expect(screen.getByText(note.summary.en)).toBeInTheDocument();
    }
  });

  it('renders highlights inside an expandable details element', () => {
    const { container } = render(<UpdatesPage params={{ locale: 'en' }} />);
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(RELEASE_NOTES.length);
    // Highlights live in the SSR HTML even while collapsed, which is what
    // makes them readable by crawlers and AI engines.
    const first = RELEASE_NOTES[0];
    for (const highlight of first.highlights.en) {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    }
  });

  it('renders Arabic copy and RTL direction for the ar locale', () => {
    const { container } = render(<UpdatesPage params={{ locale: 'ar' }} />);
    expect(container.querySelector('[dir="rtl"]')).toBeTruthy();
    for (const note of RELEASE_NOTES) {
      expect(screen.getByText(note.title.ar)).toBeInTheDocument();
    }
  });

  it('formats dates in the Gregorian calendar for both locales', () => {
    // Guards the calendar pinning in formatDate. ar-SA would resolve to the
    // Islamic calendar and print 2026-07-27 as "١٣ صفر ١٤٤٨", contradicting
    // the ISO value in the <time datetime> attribute.
    const note = RELEASE_NOTES[0];
    const year = note.date.slice(0, 4);

    const en = render(<UpdatesPage params={{ locale: 'en' }} />);
    const enTime = en.container.querySelector(`time[datetime="${note.date}"]`);
    expect(enTime).toBeTruthy();
    expect(enTime!.textContent).toContain(year);
    en.unmount();

    const ar = render(<UpdatesPage params={{ locale: 'ar' }} />);
    const arTime = ar.container.querySelector(`time[datetime="${note.date}"]`);
    expect(arTime).toBeTruthy();
    // Arabic-Indic digits for the same Gregorian year (٢٠٢٦ for 2026).
    const arabicYear = year.replace(/\d/g, (d) =>
      String.fromCharCode(0x0660 + Number(d)),
    );
    expect(arTime!.textContent).toContain(arabicYear);
    // The Hijri era marker must not appear.
    expect(arTime!.textContent).not.toContain('هـ');
  });

  it('exposes a machine-readable date on every entry', () => {
    const { container } = render(<UpdatesPage params={{ locale: 'en' }} />);
    const times = container.querySelectorAll('time[datetime]');
    expect(times.length).toBe(RELEASE_NOTES.length);
    for (const note of RELEASE_NOTES) {
      expect(
        container.querySelector(`time[datetime="${note.date}"]`),
      ).toBeTruthy();
    }
  });

  it('labels the platforms each entry shipped to', () => {
    const { container } = render(<UpdatesPage params={{ locale: 'en' }} />);
    // Direct children only: each entry also contains an inner <ul> of
    // highlight <li>s, so an unscoped 'li' query would not line up with
    // RELEASE_NOTES by index.
    const items = container.querySelectorAll('ol > li');
    expect(items.length).toBe(RELEASE_NOTES.length);
    RELEASE_NOTES.forEach((note, i) => {
      const item = items[i] as HTMLElement;
      if (note.platforms.includes('web')) {
        expect(within(item).getByText('Web')).toBeInTheDocument();
      }
    });
  });
});
