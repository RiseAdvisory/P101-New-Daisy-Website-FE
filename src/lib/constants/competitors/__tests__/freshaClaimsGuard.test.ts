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

describe('claims the letter raises outside paragraphs 2(a)-(d)', () => {
  // The letter's section 3.1 complains that we suggest Fresha is deficient in
  // UAE-compliant VAT/TRN invoicing. That claim is NOT enumerated in 2(a)-(d),
  // so an audit driven off the 2(a)-(d) fact list never looked for it.
  it('does not imply Fresha lacks VAT or tax compliance', () => {
    expect(
      offenders(
        /(?:no|lacks?|without|need)[^.]{0,40}(?:VAT|TRN|tax compliance)|tax compliance for your|التوافق الضريبي في سوقك/,
      ),
    ).toEqual([]);
  });

  it('does not claim Fresha has no phone support', () => {
    expect(offenders(/no phone support|without phone support|لا يوجد دعم هاتفي/)).toEqual([]);
  });

  // Section 3.2: statements "designed to divert customers". An asserted
  // defection trend is the clearest form of that.
  it('does not assert that businesses are leaving Fresha', () => {
    expect(
      offenders(
        /partner dissatisfaction|already made the move|sending some businesses looking|caught some partners out|broke trust|partner backlash|استياء الشركاء/,
      ),
    ).toEqual([]);
  });

  // Section 3.3: advertising must not damage a competitor through UNVERIFIED
  // claims. These are the ones we could find no source for anywhere.
  it('does not publish unsourced quality verdicts about Fresha', () => {
    expect(
      offenders(
        /unreliable notifications|grown cluttered|process can be awkward|basic static reports|ليست سلسة دائمًا|تقارير ثابتة أساسية/,
      ),
    ).toEqual([]);
  });

  it('does not assert Fresha offers no branding control at all', () => {
    expect(
      offenders(
        /all customer-facing pages are Fresha-branded|No branding control|جميع الصفحات الموجهة للعملاء بعلامة/,
      ),
    ).toEqual([]);
  });
});

describe('the ratings framework the letter calls fabricated', () => {
  const table = fs.readFileSync(
    path.join(ROOT, 'components', 'comparePage', 'FeatureComparisonTable.tsx'),
    'utf8',
  );
  const index = fs.readFileSync(
    path.join(ROOT, 'lib', 'constants', 'competitors', 'index.ts'),
    'utf8',
  );

  it('publishes no aggregate "we lead in N of M" scoreboard', () => {
    expect(table).not.toMatch(/we lead in/i);
    expect(table).not.toMatch(/daisyWinCount/);
  });

  it('does not badge rows with a self-assigned win', () => {
    expect(table).not.toMatch(/Daisy leads/);
  });

  // A comparison table that silently drops the competitor's strongest category
  // is the hardest thing here to defend.
  it('includes the category competitors most often lead on', () => {
    expect(index).toMatch(/marketplaceAndDiscovery/);
    expect(table).toMatch(/marketplaceAndDiscovery/);
  });

  // An editorial 0 is the absence of a documented capability, not proof of
  // absence. It used to render as the absolute "Not Available".
  it('does not render a zero rating as an absolute', () => {
    expect(index).not.toMatch(/0: 'Not Available'/);
  });
});

describe('Arabic corrections actually reach the Arabic pages', () => {
  // tier1Data.ar.ts was unreferenced: every caller used the English-only
  // `competitors` map, so /ar/compare/daisy-vs-fresha published the English
  // pros, cons, FAQ and FAQ JSON-LD, and Arabic fixes were dead code.
  it('resolves competitors by locale', () => {
    const index = fs.readFileSync(
      path.join(ROOT, 'lib', 'constants', 'competitors', 'index.ts'),
      'utf8',
    );
    expect(index).toMatch(/export function getCompetitor\(\s*slug: string,\s*locale/);
  });

  it('passes the locale through from the compare and alternative pages', () => {
    for (const rel of [
      ['app', '[locale]', '(routes)', 'compare', '[slug]', 'ComparePageClient.tsx'],
      ['app', '[locale]', '(routes)', 'alternative', '[slug]', 'AlternativePageClient.tsx'],
    ]) {
      const src = fs.readFileSync(path.join(ROOT, ...rel), 'utf8');
      expect(src).toMatch(/getCompetitor\([^)]*,\s*locale\)/);
    }
  });
});
