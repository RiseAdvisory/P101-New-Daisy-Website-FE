'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { getCompetitor } from '@/lib/constants/competitors';
import { daisyData } from '@/lib/constants/competitors/competitorData';
import { Check, AlertTriangle } from 'lucide-react';

interface PricingComparisonCardProps {
  competitorSlug: string;
  competitorName: string;
}

export const PricingComparisonCard: FC<PricingComparisonCardProps> = ({
  competitorSlug,
  competitorName,
}) => {
  const competitor = getCompetitor(competitorSlug);

  if (!competitor) return null;

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Pricing Comparison
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Transparent pricing vs hidden costs
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Daisy Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-white p-8 shadow-sm">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-50" />
            <div className="relative">
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 uppercase">
                  Recommended
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">Daisy</h3>
              <p className="mt-1 text-3xl font-bold text-green-700">
                {daisyData.pricing.startingPrice}
              </p>
              {daisyData.pricing.freeTrialDays && (
                <p className="mt-1 text-sm text-gray-500">
                  {daisyData.pricing.freeTrialDays}-day free trial
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {daisyData.pricing.pricingModel === 'flat'
                  ? 'Simple flat pricing'
                  : daisyData.pricing.pricingModel}{' '}
                model
              </p>

              <div className="mt-6 space-y-3">
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  What you get
                </p>
                {[
                  'AI receptionist included',
                  'No transaction fees',
                  'No marketplace commission',
                  'All 8 feature categories',
                  'Arabic & English support',
                  'Transparent pricing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitor Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900">
                {competitorName}
              </h3>
              <p className="mt-1 text-3xl font-bold text-gray-700">
                {competitor.pricing.startingPrice}
              </p>
              {competitor.pricing.freeTrialDays && (
                <p className="mt-1 text-sm text-gray-500">
                  {competitor.pricing.freeTrialDays}-day free trial
                </p>
              )}
              {competitor.pricing.hasFreePlan && (
                <p className="mt-1 text-sm text-gray-500">
                  Free plan available
                </p>
              )}

              {/* Pricing Tiers */}
              {competitor.pricing.tiers.length > 0 && (
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Plans
                  </p>
                  {competitor.pricing.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {tier.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {tier.price}
                        {tier.perStaff && (
                          <span className="text-xs text-gray-400">
                            {' '}
                            / staff
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Hidden Costs */}
              {competitor.pricing.hiddenCosts.length > 0 && (
                <div className="mt-6 space-y-3">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-amber-700 uppercase tracking-wider">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Hidden costs to watch
                  </p>
                  {competitor.pricing.hiddenCosts.map((cost) => (
                    <div key={cost} className="flex items-start gap-2">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                      <span className="text-sm text-gray-600">{cost}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Transaction/Commission Fees */}
              {(competitor.pricing.transactionFees ||
                competitor.pricing.commissionOnMarketplace) && (
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-semibold text-amber-800 uppercase">
                    Additional Fees
                  </p>
                  {competitor.pricing.transactionFees && (
                    <p className="mt-1 text-sm text-amber-700">
                      Transaction fee: {competitor.pricing.transactionFees}
                    </p>
                  )}
                  {competitor.pricing.commissionOnMarketplace && (
                    <p className="mt-1 text-sm text-amber-700">
                      Marketplace commission:{' '}
                      {competitor.pricing.commissionOnMarketplace}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonCard;
