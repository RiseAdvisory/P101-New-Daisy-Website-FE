import Link from 'next/link';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import type { PricingTierV3 } from '@/lib/constants/pricing/v3/pricingV3Business';
import type {
  SharedCopy,
  PersonaCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  tier: PricingTierV3;
  billingPeriod: 'monthly' | 'annual';
  locale: string;
  shared: SharedCopy;
  persona: PersonaCopy;
}

/**
 * v3 card mirrors the visual structure of the live /pricing card:
 *   - centered top section (name, trial pill, description, nested price box, CTA)
 *   - features list rendered on a light-cream band that extends to the card edges
 * Description has `min-h-[6rem]` so all three tier cards line up regardless of
 * how each description wraps.
 */
export const PricingCardV3 = ({
  tier,
  billingPeriod,
  locale,
  shared,
  persona,
}: Props) => {
  const showAnnual = billingPeriod === 'annual';
  const displayPrice = showAnnual ? tier.annualPerMonth : tier.monthlyPrice;
  const popular = !!tier.isMostPopular;

  return (
    <div
      className={cn(
        'relative flex flex-col items-center overflow-hidden rounded-2xl border bg-white pt-10 text-center transition-shadow',
        popular
          ? 'border-2 border-[#8B6554] shadow-lg shadow-[#8B6554]/20'
          : 'border border-[#E8E9E9] shadow-sm hover:shadow-md',
      )}
    >
      {popular && (
        <p className="absolute left-0 right-0 top-0 bg-[#8B6554] py-1 text-center text-sm font-medium text-white ltr:font-montserrat rtl:font-cairo">
          {shared.mostPopularBadge}
        </p>
      )}

      <div className="flex w-full flex-col items-center px-6 pb-6">
        <h3 className="text-2xl font-semibold text-[#172524]">
          {tier.displayName}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#586968] ltr:font-montserrat rtl:font-cairo">
          {tier.bestFor}
        </p>

        {/* Trial pill: blue palette matching the live /pricing page. */}
        <p className="mt-3 inline-block w-fit rounded-full bg-[#E9ECF7] px-3 py-1 text-xs font-medium text-[#2543AD] ltr:font-montserrat rtl:font-cairo">
          {shared.trialBadge}
        </p>

        <p className="mt-3 min-h-[6rem] text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {tier.description}
        </p>

        {/* Nested price box matching the v1 visual treatment: outer cream
            padding, inner white card with price + CTA. */}
        <div className="mt-4 w-full rounded-lg bg-[#F8F5F3] p-4">
          <div className="flex flex-col items-center rounded-lg border border-[#E8E9E9] bg-white p-4 text-center">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[32px] font-bold leading-10 text-[#172524]">
                ${displayPrice}
              </span>
              <span className="text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                {shared.cardPerMonth}
              </span>
            </div>
            <div className="mt-1 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
              <p>
                {showAnnual
                  ? shared.cardBilledAnnuallyLine1(tier.annualTotal)
                  : shared.cardBilledMonthlyLine1}
              </p>
              <p>
                {showAnnual
                  ? `${tier.annualSavingsLine}.`
                  : shared.cardBilledMonthlyLine2}
              </p>
            </div>
            <Link
              href={localePath('/get-the-app', locale)}
              className={cn(
                'mt-4 inline-block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ltr:font-montserrat rtl:font-cairo',
                popular
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'border border-primary bg-white text-primary hover:bg-primary hover:text-white',
              )}
            >
              {persona.ctaPrimary}
            </Link>
          </div>
        </div>
      </div>

      {/* Features band extends to the card edges with its own light-cream
          background, matching the live /pricing card's two-zone layout. */}
      <div className="w-full bg-[#F8F5F3] px-6 py-8 rtl:text-right ltr:text-left">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-[#586968] ltr:font-montserrat rtl:font-cairo">
          {shared.cardIncludedHeader}
        </p>
        <ul className="space-y-3">
          {tier.cardHighlights.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[#172524] ltr:font-montserrat rtl:font-cairo"
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8B6554]"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
