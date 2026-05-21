import Link from 'next/link';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';
import type { UIStrings } from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  tier: PricingTierV2;
  billingPeriod: 'monthly' | 'annual';
  locale: string;
  ui: UIStrings;
}

export const PricingCardV2 = ({ tier, billingPeriod, locale, ui }: Props) => {
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
          {ui.mostPopularBadge}
        </div>
      )}

      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
        {tier.title}
      </div>

      <p className="mb-8 min-h-[5rem] text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {tier.oneLiner}
      </p>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-5xl font-bold text-[#172524] ltr:font-montserrat rtl:font-cairo">
          ${displayPrice}
        </span>
        <span className="text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {ui.cardPerMonth}
        </span>
      </div>

      <p className="mb-7 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {showAnnual
          ? ui.cardBilledAnnually(tier.annualTotal, tier.annualSavingsLine)
          : ui.cardBilledMonthly}
      </p>

      <Link
        href={localePath('/get-the-app', locale)}
        className={cn(
          'mb-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ltr:font-montserrat rtl:font-cairo',
          popular
            ? 'bg-[#172524] text-white hover:bg-[#2a3937]'
            : 'border border-[#172524] text-[#172524] hover:bg-[#F8F5F3]',
        )}
      >
        {ui.cardCtaLabel}
      </Link>

      <ul className="space-y-4">
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
  );
};
