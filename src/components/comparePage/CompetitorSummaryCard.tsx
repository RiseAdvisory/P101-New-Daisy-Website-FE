import { FC } from 'react';
import { cn } from '@/lib/utils';
import { getCompetitor, getAverageRating } from '@/lib/constants/competitors';
import type { FeatureRating } from '@/lib/constants/competitors/competitorData';
import { Star, ExternalLink } from 'lucide-react';

interface CompetitorSummaryCardProps {
  competitorSlug: string;
  rank?: number;
  recommended?: boolean;
}

const featureLabels: { key: string; label: string }[] = [
  { key: 'onlineBooking', label: 'Booking' },
  { key: 'posAndPayments', label: 'Payments' },
  { key: 'clientManagement', label: 'Clients' },
  { key: 'staffManagement', label: 'Staff' },
  { key: 'marketingAndCrm', label: 'Marketing' },
  { key: 'inventoryManagement', label: 'Inventory' },
  { key: 'reportingAndAnalytics', label: 'Analytics' },
  { key: 'marketplaceAndDiscovery', label: 'Marketplace' },
  { key: 'aiCapabilities', label: 'AI' },
];

function MiniRating({ rating }: { rating: FeatureRating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className={cn(
            'h-1.5 w-4 rounded-full',
            level <= rating ? 'bg-primary' : 'bg-[#E8E9E9]',
          )}
        />
      ))}
    </div>
  );
}

export const CompetitorSummaryCard: FC<CompetitorSummaryCardProps> = ({
  competitorSlug,
  rank,
  recommended,
}) => {
  const competitor = getCompetitor(competitorSlug);
  if (!competitor) return null;

  const avgRating = getAverageRating(competitorSlug);
  const features = competitor.features;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        recommended
          ? 'border-primaryBtn/40 ring-2 ring-primary/10'
          : 'border-[#E8E9E9]',
      )}
    >
      {/* Rank Badge */}
      {rank !== undefined && (
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-br-xl bg-[#F8F5F3] text-sm font-bold text-[#455150]">
          #{rank}
        </div>
      )}

      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
            Recommended
          </span>
        </div>
      )}

      <div className={cn('pt-2', rank !== undefined && 'pt-6')}>
        {/* Name & Description */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#172524]">
              {competitor.name}
            </h3>
            {competitor.founded && (
              <p className="mt-0.5 text-xs text-[#D5D9D9]">
                Founded {competitor.founded}
                {competitor.headquarters && ` - ${competitor.headquarters}`}
              </p>
            )}
          </div>
          {avgRating !== null && (
            <div className="flex items-center gap-1 rounded-lg bg-[#F8F5F3] px-2.5 py-1.5">
              <Star className="h-4 w-4 fill-[#A67F6B] text-[#A67F6B]" />
              <span className="text-sm font-bold text-[#455150]">
                {avgRating}
              </span>
            </div>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#455150] line-clamp-2">
          {competitor.description}
        </p>

        {/* Feature Ratings Grid */}
        <div className="mt-5 grid grid-cols-3 gap-x-4 gap-y-2">
          {featureLabels.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between gap-1">
              <span className="text-xs text-[#586968] truncate">{label}</span>
              <MiniRating
                rating={features[key as keyof typeof features] as FeatureRating}
              />
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-5 flex items-center justify-between rounded-lg bg-[#F8F5F3] px-4 py-3">
          <div>
            <p className="text-xs text-[#586968]">Starting at</p>
            <p className="text-sm font-bold text-[#172524]">
              {competitor.pricing.startingPrice}
            </p>
          </div>
          {competitor.pricing.hasFreePlan && (
            <span className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
              Free plan
            </span>
          )}
        </div>

        {/* Link */}
        <a
          href={competitor.website}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#586968] transition-colors hover:text-[#455150]"
        >
          Visit {competitor.name}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};

export default CompetitorSummaryCard;
