import Link from 'next/link';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

interface Props {
  tier: PricingTierV2;
  billingPeriod: 'monthly' | 'annual';
  locale: string;
}

export const PricingCardV2 = ({ tier, billingPeriod, locale }: Props) => {
  const showAnnual = billingPeriod === 'annual';
  const displayPrice = showAnnual ? tier.annualPerMonth : tier.monthlyPrice;
  const popular = !!tier.isMostPopular;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-white p-8 transition-shadow',
        popular
          ? 'border-[#8B6554] shadow-lg ring-1 ring-[#8B6554]/30'
          : 'border-[#E8E9E9] shadow-sm hover:shadow-md',
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8B6554] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most popular
        </div>
      )}

      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#8B6554]">
        {tier.title}
      </div>

      <p className="mb-6 min-h-[3.5rem] text-sm leading-relaxed text-[#455150]">
        {tier.oneLiner}
      </p>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-5xl font-bold text-[#172524]">
          ${displayPrice}
        </span>
        <span className="text-base text-[#455150]">/ month</span>
      </div>

      <p className="mb-6 text-xs text-[#455150]">
        {showAnnual ? (
          <>
            Billed annually at <strong>${tier.annualTotal}</strong> ·{' '}
            <span className="text-[#8B6554] font-semibold">
              {tier.annualSavingsLine}
            </span>
          </>
        ) : (
          'Billed monthly · Cancel anytime'
        )}
      </p>

      <Link
        href={localePath('/get-the-app', locale)}
        className={cn(
          'mb-6 block rounded-lg py-3 text-center text-sm font-semibold transition-colors',
          popular
            ? 'bg-[#172524] text-white hover:bg-[#2a3937]'
            : 'border border-[#172524] text-[#172524] hover:bg-[#F8F5F3]',
        )}
      >
        {tier.ctaLabel}
      </Link>

      <ul className="space-y-3">
        {tier.cardHighlights.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[#172524]">
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
