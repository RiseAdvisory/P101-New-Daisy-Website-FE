import { FC } from 'react';
import { cn } from '@/lib/utils';
import {
  compareFeatures,
  featureRatingLabel,
  getCompetitor,
} from '@/lib/constants/competitors';
import { daisyData } from '@/lib/constants/competitors/competitorData';
import type { FeatureRating } from '@/lib/constants/competitors/competitorData';

interface FeatureComparisonTableProps {
  competitorSlug: string;
  competitorName: string;
  secondCompetitor?: { slug: string; name: string };
  heading?: string;
  locale?: string;
}

const uiStrings = {
  en: {
    heading: (name: string) => `How Do Daisy and ${name} Compare on Features?`,
    rated: (n: number) => `${n} categories rated from Basic to Best-in-Class`,
    ownAssessment: 'Ratings are Daisy’s own assessment, not an independent benchmark',
    caption: (name: string) => `Daisy vs ${name} Feature Comparison ${new Date().getFullYear()}`,
    category: 'Category',
    daisy: 'Daisy',
  },
  ar: {
    heading: (name: string) => `كيف تقارن ديزي و${name} من حيث الميزات؟`,
    rated: (n: number) => `${n} فئات مقيّمة من «أساسي» إلى «الأفضل في فئته»`,
    ownAssessment: 'التقييمات تقدير ديزي الخاص، وليست معياراً مستقلاً',
    caption: (name: string) => `مقارنة الميزات بين ديزي و${name} ${new Date().getFullYear()}`,
    category: 'الفئة',
    daisy: 'ديزي',
  },
};

function RatingDots({
  rating,
  highlight,
  locale = 'en',
}: {
  rating: FeatureRating;
  highlight?: boolean;
  locale?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1" aria-hidden="true">
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              level <= rating
                ? highlight
                  ? 'bg-primary'
                  : 'bg-primaryBtn'
                : 'bg-[#E8E9E9]',
            )}
          />
        ))}
      </div>
      <span
        className={cn(
          'text-xs font-medium',
          highlight ? 'text-primary' : 'text-[#586968]',
        )}
      >
        {featureRatingLabel(rating, locale)}
      </span>
    </div>
  );
}

export const FeatureComparisonTable: FC<FeatureComparisonTableProps> = ({
  competitorSlug,
  competitorName,
  secondCompetitor,
  heading,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const comparison = compareFeatures(competitorSlug, locale);
  const secondCompetitorData = secondCompetitor
    ? getCompetitor(secondCompetitor.slug, locale)
    : null;

  const featureKeys: (keyof typeof daisyData.features)[] = [
    'onlineBooking',
    'posAndPayments',
    'clientManagement',
    'staffManagement',
    'marketingAndCrm',
    'inventoryManagement',
    'reportingAndAnalytics',
    'aiCapabilities',
    'brandingAndWhiteLabel',
    // Must stay in the same order as compareFeatures() in competitors/index.ts.
    'marketplaceAndDiscovery',
  ];

  return (
    <section className="py-16 px-4 bg-[#F8F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          {heading || t.heading(competitorName)}
        </h2>
        <p className="mb-4 text-center text-[#455150]">
          {t.rated(comparison.length)}
        </p>
        {/*
          The aggregate win tally that used to sit here is
          the "fabricated ratings framework" the cease and desist names. A
          disclaimer does not cure it - the letter says so explicitly - so the
          aggregate verdict is gone. The per-row ratings remain, labelled as
          Daisy's own assessment rather than a benchmark.
        */}
        <p className="mb-10 text-center text-sm font-medium text-primary">
          {t.ownAssessment}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
            <caption className="sr-only">
              {t.caption(competitorName)}
            </caption>
            <thead>
              <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                <th
                  scope="col"
                  className="px-6 py-4 text-start text-sm font-semibold text-[#586968] uppercase tracking-wider"
                  style={{ width: '35%' }}
                >
                  {t.category}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-start text-sm font-bold text-primary uppercase tracking-wider"
                >
                  {t.daisy}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-start text-sm font-semibold text-[#586968] uppercase tracking-wider"
                >
                  {competitorName}
                </th>
                {secondCompetitor && (
                  <th
                    scope="col"
                    className="px-6 py-4 text-start text-sm font-semibold text-[#586968] uppercase tracking-wider"
                  >
                    {secondCompetitor.name}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => {
                const secondRating = secondCompetitorData
                  ? secondCompetitorData.features[featureKeys[index]]
                  : null;

                return (
                  <tr
                    key={row.category}
                    className={cn(
                      'border-b border-[#E8E9E9] last:border-b-0 transition-colors',
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F3]/50',
                    )}
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-[#172524]">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <RatingDots rating={row.daisy} highlight locale={locale} />
                    </td>
                    <td className="px-6 py-4">
                      <RatingDots rating={row.competitor} locale={locale} />
                    </td>
                    {secondRating !== null && secondRating !== undefined && (
                      <td className="px-6 py-4">
                        <RatingDots rating={secondRating} locale={locale} />
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#586968]">
          {([0, 1, 2, 3] as FeatureRating[]).map((rating) => (
            <div key={rating} className="flex items-center gap-1.5">
              <div className="flex gap-0.5" aria-hidden="true">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={cn(
                      'h-2 w-2 rounded-full',
                      level <= rating ? 'bg-primaryBtn' : 'bg-[#E8E9E9]',
                    )}
                  />
                ))}
              </div>
              <span>{featureRatingLabel(rating, locale)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
