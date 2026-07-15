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
        'relative flex flex-col rounded-2xl border bg-white p-10 transition-shadow',
        popular
          ? 'border-[#8B6554] shadow-lg ring-1 ring-[#8B6554]/30'
          : 'border-[#E8E9E9] shadow-sm hover:shadow-md',
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8B6554] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white ltr:font-montserrat rtl:font-cairo">
          {shared.mostPopularBadge}
        </div>
      )}

      {/* Title block. min-h keeps the name/best-for rows the same height
          across tiers so the trial pills below line up. */}
      <div className="mb-4 min-h-[2.5rem]">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
            {tier.displayName}
          </span>
          {tier.showLowRiskStart && (
            <span className="rounded-full bg-[#E7F1F1] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#14736F] ltr:font-montserrat rtl:font-cairo">
              {shared.lowRiskBadge}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-[#586968] ltr:font-montserrat rtl:font-cairo">
          {tier.bestFor}
        </p>
      </div>

      {/* Trial pills: blue palette matching the live /pricing page. The
          duration and the no-card promise render as two distinct labels
          so each claim stands on its own. */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-block w-fit rounded-full bg-[#E9ECF7] px-3 py-1 text-xs font-medium text-[#2543AD] ltr:font-montserrat rtl:font-cairo">
          {shared.trialBadgeDuration}
        </span>
        <span className="inline-block w-fit rounded-full bg-[#E9ECF7] px-3 py-1 text-xs font-medium text-[#2543AD] ltr:font-montserrat rtl:font-cairo">
          {shared.trialBadgeNoCard}
        </span>
      </div>

      {/* Description is intentionally trimmed to ~3 lines; min-h-[4.5rem]
          (= 3 lines of text-sm/leading-relaxed) keeps cards aligned even
          when one tier wraps slightly shorter. */}
      <p className="mb-6 min-h-[4.5rem] text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {tier.description}
      </p>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-[44px] font-semibold leading-none text-[#172524] md:text-5xl">
          ${displayPrice}
        </span>
        <span className="text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {shared.cardPerMonth}
        </span>
      </div>

      {/* Billing copy on a single line so the CTA below it lines up at
          the same vertical position across all three tier cards. */}
      <p className="mb-7 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {showAnnual
          ? `${shared.cardBilledAnnuallyLine1(tier.annualTotal)} ${tier.annualSavingsLine}.`
          : `${shared.cardBilledMonthlyLine1} ${shared.cardBilledMonthlyLine2}`}
      </p>

      <Link
        href={localePath('/get-the-app', locale)}
        className={cn(
          'mb-4 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ltr:font-montserrat rtl:font-cairo',
          popular
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'border border-[#172524] text-[#172524] hover:bg-[#F8F5F3]',
        )}
      >
        {persona.ctaPrimary}
      </Link>

      {/* Plan add-on banner. The entry tier advertises its real $1/month
          base price, and this teal banner states the add-on that applies
          once the account passes 5 appointments in a month (+$50 business,
          +$25 solo — hence PersonaCopy, not SharedCopy). Rendered on every
          tier but hidden (visibility:hidden, which preserves layout) on the
          others so the "Included with your plan" sections stay aligned
          across all three cards. */}
      <div
        className={cn(
          'mb-6 flex w-full items-center gap-2 rounded-lg bg-[#14736F] px-3 py-2 ltr:font-montserrat rtl:font-cairo',
          !tier.showLowRiskStart && 'invisible',
        )}
        aria-hidden={tier.showLowRiskStart ? undefined : true}
      >
        <Check
          className="h-4 w-4 flex-shrink-0 text-white"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <span className="text-xs font-semibold leading-snug text-white">
          {persona.subscriptionStartsNote}
        </span>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#586968] ltr:font-montserrat rtl:font-cairo">
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
