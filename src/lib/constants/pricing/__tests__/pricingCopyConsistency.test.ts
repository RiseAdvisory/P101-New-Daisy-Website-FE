import fs from 'fs';
import path from 'path';
import { BUSINESS_TIERS_V3 } from '../v3/pricingV3Business';
import { PROFESSIONAL_TIERS_V3 } from '../v3/pricingV3Professional';
import { PERSONA_COPY } from '../v3/pricingV3Shared';

/**
 * Marketing copy lives in dozens of content constants, separately from the
 * pricing data that /pricing actually renders. Those two drifted: copy
 * advertised "plans starting from $50/month" long after the entry tier
 * moved to a $1 base plus a usage fee.
 *
 * These tests pin the canonical numbers and fail if stale entry-price
 * claims reappear anywhere in the content constants.
 */

const ROOT = path.resolve(__dirname, '../../../../..');
const CONTENT_DIRS = [
  'src/lib/constants/pages',
  'src/lib/constants/solutions',
  'src/lib/constants/glossary',
  'src/lib/constants/guides',
  'src/lib/constants/competitors',
  'src/lib/constants/features',
  'src/lib/constants/pillars',
];

const collectFiles = (dir: string): string[] => {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const out: string[] = [];
  const walk = (d: string) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== '__tests__') walk(full);
      } else if (entry.name.endsWith('.ts') && !entry.name.includes('.test.')) {
        out.push(full);
      }
    }
  };
  walk(abs);
  return out;
};

const CONTENT_FILES = CONTENT_DIRS.flatMap(collectFiles);

describe('pricing copy consistency', () => {
  describe('canonical pricing data', () => {
    it('bills the business entry tier at a $1 base', () => {
      const basic = BUSINESS_TIERS_V3.en[0];
      expect(basic.id).toBe('basic');
      expect(basic.monthlyPrice).toBe(1);
    });

    it('bills the solo entry tier at a $1 base', () => {
      const starter = PROFESSIONAL_TIERS_V3.en[0];
      // The solo entry tier is displayed as "Starter" but keyed 'basic'.
      expect(starter.displayName).toBe('Starter');
      expect(starter.monthlyPrice).toBe(1);
    });

    it('states the usage fee that applies past 5 appointments, per persona', () => {
      expect(PERSONA_COPY.business.en.subscriptionStartsNote).toMatch(
        /\+\$50\/month once you pass 5 appointments/i,
      );
      // The solo fee is $25, not $50 — copy must not blanket-apply the
      // business figure to professional surfaces.
      expect(PERSONA_COPY.professional.en.subscriptionStartsNote).toMatch(
        /\+\$25\/month once you pass 5 appointments/i,
      );
    });
  });

  describe('marketing copy does not contradict it', () => {
    // Claims that Daisy's own entry price is $50/month. Competitor price
    // ranges ("Spa software typically ranges from $50/mo") are a different
    // statement and are deliberately not matched here.
    const STALE_ENTRY_CLAIMS = [
      /plans? start(?:ing)? (?:from|at) \$50\/month/i,
      /Daisy starts at \$50\/month/i,
      /starting at \$50\/month/i,
      /Basic \(\$50\/mo\)/i,
      /Basic \$50\/mo/i,
      /تبدأ من 50 دولار/,
      /بدءاً من 50 دولار/,
    ];

    it.each(STALE_ENTRY_CLAIMS.map((re) => [re.source, re] as const))(
      'has no content file claiming %s',
      (_label, pattern) => {
        const offenders = CONTENT_FILES.filter((f) =>
          pattern.test(fs.readFileSync(f, 'utf-8')),
        ).map((f) => path.relative(ROOT, f));

        expect(offenders).toEqual([]);
      },
    );

    it('scans a meaningful number of content files', () => {
      // Guards against the globbing above silently matching nothing, which
      // would make every assertion here vacuously pass.
      expect(CONTENT_FILES.length).toBeGreaterThan(20);
    });
  });

  describe('competitor price ranges are left intact', () => {
    it('still describes third-party software pricing in ranges', () => {
      const solutionData = fs.readFileSync(
        path.join(ROOT, 'src/lib/constants/solutions/solutionData.ts'),
        'utf-8',
      );
      // These describe other vendors, not Daisy. A blanket find-and-replace
      // of "$50" would wrongly rewrite them, so pin that they survive.
      expect(solutionData).toMatch(/ranges? from \$50\/mo/i);
    });
  });
});
