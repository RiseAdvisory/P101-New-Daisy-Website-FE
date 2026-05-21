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

      {/* Each oneLiner is intentionally written to ~50–65 chars so all
          three wrap to the same number of lines (2 at typical desktop
          card widths). min-h-[50px] is a safety cap — if a longer
          description ever lands here, the wasted space is bounded at
          50px so the cards still feel balanced. */}
      <p className="mb-8 min-h-[50px] text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {tier.oneLiner}
      </p>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-[44px] font-semibold leading-none text-[#172524] md:text-5xl">
          ${displayPrice}
        </span>
        <span className="text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {ui.cardPerMonth}
        </span>
      </div>

      {/* Always renders two lines so the card height stays constant when
          the user toggles monthly / annual. Mode-specific copy fills both
          lines either way. */}
      <div className="mb-7 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
        <p>
          {showAnnual
            ? ui.cardBilledAnnuallyLine1(tier.annualTotal)
            : ui.cardBilledMonthlyLine1}
        </p>
        <p>
          {showAnnual
            ? `${tier.annualSavingsLine}.`
            : ui.cardBilledMonthlyLine2}
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
