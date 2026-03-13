'use client';

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
}

function RatingDots({ rating, highlight }: { rating: FeatureRating; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              level <= rating
                ? highlight
                  ? 'bg-green-500'
                  : 'bg-gray-400'
                : 'bg-gray-200',
            )}
          />
        ))}
      </div>
      <span
        className={cn(
          'text-xs font-medium',
          highlight ? 'text-green-700' : 'text-gray-500',
        )}
      >
        {featureRatingLabel(rating)}
      </span>
    </div>
  );
}

export const FeatureComparisonTable: FC<FeatureComparisonTableProps> = ({
  competitorSlug,
  competitorName,
  secondCompetitor,
}) => {
  const comparison = compareFeatures(competitorSlug);
  const secondCompetitorData = secondCompetitor
    ? getCompetitor(secondCompetitor.slug)
    : null;

  const featureKeys: (keyof typeof daisyData.features)[] = [
    'onlineBooking',
    'posAndPayments',
    'clientManagement',
    'staffManagement',
    'marketingAndCrm',
    'inventoryManagement',
    'reportingAndAnalytics',
    'marketplaceAndDiscovery',
    'aiCapabilities',
  ];

  const daisyWinCount = comparison.filter((c) => c.daisyWins).length;
  const columnCount = secondCompetitor ? 4 : 3;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Feature-by-Feature Comparison
        </h2>
        <p className="mb-4 text-center text-gray-600">
          9 categories rated from Basic to Best-in-Class
        </p>
        <p className="mb-10 text-center text-sm font-medium text-green-700">
          Daisy leads in {daisyWinCount} of 9 categories
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[600px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div
              className="grid border-b border-gray-200 bg-gray-50"
              style={{
                gridTemplateColumns: `1.5fr repeat(${columnCount - 1}, 1fr)`,
              }}
            >
              <div className="px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </div>
              <div className="px-6 py-4">
                <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
                  Daisy
                </span>
              </div>
              <div className="px-6 py-4">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {competitorName}
                </span>
              </div>
              {secondCompetitor && (
                <div className="px-6 py-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {secondCompetitor.name}
                  </span>
                </div>
              )}
            </div>

            {/* Rows */}
            {comparison.map((row, index) => {
              const secondRating = secondCompetitorData
                ? secondCompetitorData.features[featureKeys[index]]
                : null;

              return (
                <div
                  key={row.category}
                  className={cn(
                    'grid border-b border-gray-100 last:border-b-0 transition-colors',
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50',
                    row.daisyWins && 'bg-green-50/30',
                  )}
                  style={{
                    gridTemplateColumns: `1.5fr repeat(${columnCount - 1}, 1fr)`,
                  }}
                >
                  <div className="flex items-center px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">
                      {row.category}
                    </span>
                    {row.daisyWins && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 uppercase">
                        Daisy leads
                      </span>
                    )}
                  </div>
                  <div className="flex items-center px-6 py-4">
                    <RatingDots rating={row.daisy} highlight={row.daisyWins} />
                  </div>
                  <div className="flex items-center px-6 py-4">
                    <RatingDots rating={row.competitor} />
                  </div>
                  {secondRating !== null && secondRating !== undefined && (
                    <div className="flex items-center px-6 py-4">
                      <RatingDots rating={secondRating} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          {([0, 1, 2, 3] as FeatureRating[]).map((rating) => (
            <div key={rating} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={cn(
                      'h-2 w-2 rounded-full',
                      level <= rating ? 'bg-gray-400' : 'bg-gray-200',
                    )}
                  />
                ))}
              </div>
              <span>{featureRatingLabel(rating)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
