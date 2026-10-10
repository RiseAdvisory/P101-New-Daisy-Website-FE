/**
 * Claims about competitors must match what the competitors publish.
 *
 * On 2026-10-09 every competitor claim on the comparison pages, solutions
 * pages, glossary, blog and llms files was checked against the vendors' own
 * pages, and the false or out-of-date ones were corrected. The sources sit in
 * comments next to each record in tier1Data.ts, tier2Data.ts and tier3Data.ts.
 *
 * These tests stop the patterns that were wrong most often from coming back:
 * absolute statements that a rival has no AI, calling published fees hidden,
 * figures that were checked and found wrong, and claims about Daisy that the
 * founder has confirmed are not true. freshaClaimsGuard.test.ts covers Fresha
 * in more detail.
 */
import fs from 'fs';
import path from 'path';

const SRC = path.join(__dirname, '..', '..', '..', '..');
const ROOT = path.join(SRC, '..');

function contentFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === '__tests__') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.tsx?$/.test(entry.name) && !entry.name.includes('.test.')) out.push(full);
    }
  };
  walk(path.join(SRC, 'lib', 'constants'));
  out.push(path.join(ROOT, 'public', 'llms.txt'), path.join(ROOT, 'public', 'llms-full.txt'));
  return out;
}

const FILES = contentFiles();

const COMPETITORS =
  /Booksy|Vagaro|Mindbody|Zenoti|Square|Mangomint|Phorest|Timely|Acuity|Setmore|SimplyBook|SQUIRE|Squire|Glamera|DINGG|RepeatMD|Planity|GlossGenius|Boulevard|Meevo|Treatwell|Zylu|Pabau|Salonist|Belliata|Sparkalz|BookB/;

/**
 * Matches outside code comments, as file:line -> text. With `nearCompetitor`,
 * only matches with a competitor named within 200 characters count, so generic
 * advice ("watch for hidden fees") is not flagged.
 */
function offenders(pattern: RegExp, { nearCompetitor = false } = {}): string[] {
  const found: string[] = [];
  for (const file of FILES) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(new RegExp(pattern, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`))) {
      const start = match.index ?? 0;
      const lineStart = text.lastIndexOf('\n', start) + 1;
      if (/^\s*(\/\/|\*)/.test(text.slice(lineStart, start))) continue;
      const window = text.slice(Math.max(0, start - 200), start + match[0].length + 200);
      if (nearCompetitor && !COMPETITORS.test(window)) continue;
      const line = text.slice(0, start).split('\n').length;
      found.push(`${path.relative(ROOT, file)}:${line} -> ${match[0]}`);
    }
  }
  return found;
}

describe('competitor claims stay accurate', () => {
  it('makes no absolute "no AI" statement about a competitor', () => {
    expect(
      offenders(
        /no AI whatsoever|zero AI|no AI at all|no AI of any kind|no native AI|nothing equivalent to Daisy|لا يوجد أي ذكاء اصطناعي|بلا أي ذكاء اصطناعي/i,
      ),
    ).toEqual([]);
  });

  it('never calls published fees hidden', () => {
    // Glamera's own pricing page says "No hidden fees"; quoting it is fine.
    expect(
      offenders(/(?<!No |لا |بلا |دون )(?:hidden (?:fees|costs|charges)|رسوم مخفية|تكاليف مخفية)/i, {
        nearCompetitor: true,
      }),
    ).toEqual([]);
  });

  it('does not reuse figures that were checked and found wrong', () => {
    expect(
      offenders(
        /Biz\+|Vagaro[^.']{0,60}2\.75%|RepeatMD[^.']{0,60}\$700|\$700\/mo|€59\/mo|Boulevard[^.']{0,40}\$158|\$116M|Plus \$29\b|Premium \$69\b|\$100\+\/barber|per-barber pricing/,
      ),
    ).toEqual([]);
  });

  it('does not say Daisy answers phone calls', () => {
    expect(
      offenders(
        /Daisy(?:'s| AI)[^.'"]{0,60}\b(?:answers|takes|handles|carries) (?:phone )?calls\b|Daisy[^.'"]{0,40}Voice \+ Chat/,
      ),
    ).toEqual([]);
  });

  it('does not say Daisy is live only in Kuwait', () => {
    expect(offenders(/live in Kuwait today/i)).toEqual([]);
  });
});

// Founder-confirmed on 2026-10-10: Daisy's AI does not handle calls yet; each
// plan includes a set number of team members and extra ones are paid; the
// marketplace is optional and available in selected countries; a business can
// redirect its own domain to its Daisy booking site but not host it there.
describe("claims about Daisy's own product stay accurate", () => {
  it('does not describe Daisy as a voice or phone receptionist', () => {
    expect(
      offenders(
        /Daisy[^.'"]{0,80}\b(?:voice (?:receptionist|call|calls|AI)|Voice \+ Chat|via voice call)|voice receptionist \+ chatbot/i,
      ),
    ).toEqual([]);
  });

  it('does not promise unlimited staff or pricing that ignores team size', () => {
    expect(
      offenders(
        // Competitors that publish unlimited users (Mindbody, Square, Setmore...)
        // are stated as such; only sentences crediting Daisy count here.
        /Daisy[^.'"]{0,80}(?:unlimited (?:staff|users|team members|stylists|barbers|technicians|therapists)|no per-(?:staff|user|seat|barber|stylist|therapist|provider) (?:fee|fees|charge|charges|pricing))|flat pricing whatever|regardless of team size|hiring costs you nothing/i,
      ),
    ).toEqual([]);
  });

  it('does not describe the marketplace as covering every GCC country', () => {
    expect(
      // "live in all six GCC countries" describes the platform and is true.
      offenders(/marketplace (?:across|in|throughout|visibility across) (?:all |every |the )?(?:6 |six )?GCC/i),
    ).toEqual([]);
  });

  it('does not say the booking page is hosted on the business\'s own domain', () => {
    expect(
      offenders(/(?:sits|lives|hosted) on your own domain|Connect your own domain|on your own domain \(/i),
    ).toEqual([]);
  });
});
