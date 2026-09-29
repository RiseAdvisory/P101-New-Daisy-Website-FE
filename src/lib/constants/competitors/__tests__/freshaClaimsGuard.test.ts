/**
 * Guard against the specific claims about Fresha that were retracted after the
 * 29 September 2026 cease and desist from BSA Law.
 *
 * The first remediation pass searched for the exact wordings quoted in the
 * letter and reported all clear. It was wrong: the letter's demand (a) covers
 * the named statements "including but not limited to", and demand (b) covers
 * anything implying the platform is inferior, unavailable or unsuitable. The
 * same assertions were still live in other words, in Arabic, in booleans that
 * render as table cells, and in blog prose. These tests encode the verified
 * facts so a future edit cannot quietly reintroduce them.
 *
 * Verified 2026-09-29 against Fresha's own published pages:
 *   - Arabic UI is live (fresha.com/ar/pricing serves lang="ar" dir="rtl")
 *   - all six GCC states, each with published local-currency pricing
 *   - AI Concierge ships; it answers calls and books from them
 *   - UAE: AED 149.95/mo Independent, Team custom
 *   - UAE: 4.90% + AED 0.75 per online transaction
 *   - one-time 50% commission on new marketplace clients, minimum AED 20
 *   - phone support on the Team plan
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.join(__dirname, '..', '..', '..', '..');

function contentFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === '__tests__' || entry.name === 'node_modules') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.tsx?$/.test(entry.name) && !entry.name.includes('.test.')) out.push(full);
    }
  };
  walk(path.join(ROOT, 'lib', 'constants'));
  walk(path.join(ROOT, 'components'));
  walk(path.join(ROOT, 'app'));
  return out;
}

const FILES = contentFiles();

/** Only flag a match that actually sits near a mention of Fresha. */
function offenders(pattern: RegExp): string[] {
  const found: string[] = [];
  for (const file of FILES) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(new RegExp(pattern, 'gu'))) {
      const start = match.index ?? 0;
      const window = text.slice(Math.max(0, start - 220), start + match[0].length + 220);
      if (!/Fresha|فريشا/.test(window)) continue;
      const line = text.slice(0, start).split('\n').length;
      found.push(`${path.relative(ROOT, file)}:${line} -> ${match[0]}`);
    }
  }
  return found;
}

describe('retracted Fresha claims stay retracted', () => {
  it('does not quote the retracted 2.19% processing rate', () => {
    expect(offenders(/2\.19%/)).toEqual([]);
  });

  it('does not quote the retracted 20% marketplace commission', () => {
    expect(offenders(/20% (?:commission|on new|new client)|عمولة 20%/)).toEqual([]);
  });

  it('does not quote a $9.95 plan or the Starter/Standard/Premium tiers', () => {
    expect(offenders(/\$9\.95|مبتدئ\/قياسي\/متميز/)).toEqual([]);
  });

  it('does not describe Fresha as free', () => {
    expect(
      // Narrow to the retracted assertions. "لم تعد Fresha مجانية" (no longer
      // free) and the FAQ questions "هل Fresha مجانية؟" are the corrected
      // copy and must not trip this.
      offenders(
        /free \(Fresha|Fresha \(free|Fresha,? is free|free with fees|Fresha \(مجاني|\(Fresha مع رسوم|المجاني \(Fresha|مجاني عبر السوق|أساسياً مجانياً|خطة مجانية أساسية/,
      ),
    ).toEqual([]);
  });

  it('does not call Fresha\'s published charges hidden', () => {
    expect(
      offenders(
        /hidden (?:fees|costs|transaction)[^.]{0,60}Fresha|Fresha[^.]{0,80}hidden (?:fees|costs)|رسوم (?:خفية|مخفية)[^.]{0,60}Fresha|Fresha[^.]{0,80}رسوم (?:خفية|مخفية)/,
      ),
    ).toEqual([]);
  });

  it('does not claim Fresha has no Arabic interface', () => {
    expect(
      offenders(
        /Fresha[^.]{0,120}(?:no Arabic|No Arabic|English only|English Only|lacks Arabic)|Fresha[^.]{0,120}(?:لا توجد واجهة عربية|إنجليزي فقط)/,
      ),
    ).toEqual([]);
  });

  it('does not claim Fresha has no AI or has not shipped it', () => {
    expect(
      offenders(
        /Fresha[^.]{0,120}(?:hasn't shipped|has not shipped|no AI|No AI|lacks AI|never offered)|Fresha[^.]{0,120}لا يوجد ذكاء/,
      ),
    ).toEqual([]);
  });

  it('does not accuse Fresha of taking clients', () => {
    expect(offenders(/client poaching|سرقة عملاء/)).toEqual([]);
  });
});

describe('Fresha record matches the verified facts', () => {
  const tier1 = fs.readFileSync(
    path.join(ROOT, 'lib', 'constants', 'competitors', 'tier1Data.ts'),
    'utf8',
  );
  const fresha = tier1.slice(tier1.indexOf('\n  fresha: {'), tier1.indexOf('\n  booksy: {'));

  it('records the Arabic UI as present', () => {
    expect(fresha).toMatch(/hasArabicUI: true/);
  });

  it('records all six GCC states', () => {
    const match = fresha.match(/gccCountries: \[([^\]]*)\]/);
    expect(match).not.toBeNull();
    expect(match![1].split(',').filter((s) => s.trim()).length).toBe(6);
  });

  it('records the AI receptionist as shipping, since the boolean renders as a table cell', () => {
    expect(fresha).toMatch(/hasAiReceptionist: true/);
  });

  it('quotes the published UAE price and transaction fee', () => {
    expect(fresha).toMatch(/149\.95/);
    expect(fresha).toMatch(/4\.90%/);
  });

  it('describes the marketplace fee as a one-time 50% on new clients', () => {
    expect(fresha).toMatch(/one-time 50% commission/i);
  });
});
