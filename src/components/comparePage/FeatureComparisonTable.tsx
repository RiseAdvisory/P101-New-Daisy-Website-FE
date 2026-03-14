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
    <section className="py-16 px-4 bg-[#F8F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          Feature-by-Feature Comparison
        </h2>
        <p className="mb-4 text-center text-[#455150]">
          9 categories rated from Basic to Best-in-Class
        </p>
        <p className="mb-10 text-center text-sm font-medium text-primary">
          Daisy leads in {daisyWinCount} of 9 categories
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[600px] overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
            {/* Header */}
            <div
              className="grid border-b border-[#E8E9E9] bg-[#F8F5F3]"
              style={{
                gridTemplateColumns: `1.5fr repeat(${columnCount - 1}, 1fr)`,
              }}
            >
              <div className="px-6 py-4 text-sm font-semibold text-[#586968] uppercase tracking-wider">
                Category
              </div>
              <div className="px-6 py-4">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Daisy
                </span>
              </div>
              <div className="px-6 py-4">
                <span className="text-sm font-semibold text-[#586968] uppercase tracking-wider">
                  {competitorName}
                </span>
              </div>
              {secondCompetitor && (
                <div className="px-6 py-4">
                  <span className="text-sm font-semibold text-[#586968] uppercase tracking-wider">
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
                    'grid border-b border-[#E8E9E9] last:border-b-0 transition-colors',
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F3]/50',
                    row.daisyWins && 'bg-primary/5',
                  )}
                  style={{
                    gridTemplateColumns: `1.5fr repeat(${columnCount - 1}, 1fr)`,
                  }}
                >
                  <div className="flex items-center px-6 py-4">
                    <span className="text-sm font-medium text-[#172524]">
                      {row.category}
                    </span>
                    {row.daisyWins && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#586968]">
          {([0, 1, 2, 3] as FeatureRating[]).map((rating) => (
            <div key={rating} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
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
              <span>{featureRatingLabel(rating)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
