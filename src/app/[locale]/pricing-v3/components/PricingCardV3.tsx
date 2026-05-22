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

      <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
        {tier.displayName}
      </div>
      <p className="mb-3 text-xs font-medium text-[#586968] ltr:font-montserrat rtl:font-cairo">
        {tier.bestFor}
      </p>

      {/* Trial pill: blue palette matching the live /pricing page. */}
      <p className="mb-4 inline-block w-fit rounded-full bg-[#E9ECF7] px-3 py-1 text-xs font-medium text-[#2543AD] ltr:font-montserrat rtl:font-cairo">
        {shared.trialBadge}
      </p>

      <p className="mb-6 min-h-[50px] text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
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

      <div className="mb-7 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
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
          'mb-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ltr:font-montserrat rtl:font-cairo',
          popular
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'border border-[#172524] text-[#172524] hover:bg-[#F8F5F3]',
        )}
      >
        {persona.ctaPrimary}
      </Link>

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
