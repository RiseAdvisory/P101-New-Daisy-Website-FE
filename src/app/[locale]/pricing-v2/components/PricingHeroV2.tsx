'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import { Switch } from '@/components/ui/switch';
import { PricingCardV2 } from './PricingCardV2';
import type {
  Persona,
  UIStrings,
} from '@/lib/constants/pricing/v2/pricingV2Shared';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

interface Props {
  persona: Persona;
  tiers: PricingTierV2[];
  billingPeriod: 'monthly' | 'annual';
  setBillingPeriod: Dispatch<SetStateAction<'monthly' | 'annual'>>;
  locale: string;
  ui: UIStrings;
}

export const PricingHeroV2 = ({
  persona,
  tiers,
  billingPeriod,
  setBillingPeriod,
  locale,
  ui,
}: Props) => {
  const router = useRouter();

  const switchPersona = (next: Persona) => {
    router.push(localePath(`/pricing-v2/${next}`, locale));
  };

  return (
    <section className="bg-primary px-4 pb-24 pt-20 md:px-16 md:pb-28 md:pt-[100px]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-semibold leading-10 text-white md:text-[48px] md:leading-[60px]">
            {ui.heroHeadline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75 ltr:font-montserrat rtl:font-cairo">
            {ui.heroSubtitle}
          </p>
        </div>

        {/* Persona selector */}
        <div className="mx-auto mb-8 flex w-fit gap-1 rounded-xl border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
          {(
            [
              { id: 'business' as const, label: ui.personaToggleBusiness },
              {
                id: 'professional' as const,
                label: ui.personaToggleProfessional,
              },
            ]
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => switchPersona(option.id)}
              aria-pressed={persona === option.id}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-semibold transition-colors ltr:font-montserrat rtl:font-cairo',
                persona === option.id
                  ? 'bg-white text-[#172524]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Billing toggle — matches the original /pricing page pattern:
            "Monthly [Switch] Annual" with the inactive label dimmed and
            an actual slider between them. The "2 Months Free" badge is
            stacked BELOW the toggle so it doesn't inflate the flex row
            width to one side and pull the toggle off-center. */}
        <div className="mx-auto mb-14 flex w-fit flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'text-base font-medium transition-opacity ltr:font-montserrat rtl:font-cairo',
                billingPeriod === 'monthly' ? 'text-white' : 'text-white/60',
              )}
            >
              {ui.billingMonthly}
            </button>
            <Switch
              checked={billingPeriod === 'annual'}
              onCheckedChange={(checked) =>
                setBillingPeriod(checked ? 'annual' : 'monthly')
              }
              aria-label={
                billingPeriod === 'annual'
                  ? `Switch to ${ui.billingMonthly}`
                  : `Switch to ${ui.billingAnnual}`
              }
              className="data-[state=checked]:bg-[#8B6554] data-[state=unchecked]:bg-white/25"
            />
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={cn(
                'text-base font-medium transition-opacity ltr:font-montserrat rtl:font-cairo',
                billingPeriod === 'annual' ? 'text-white' : 'text-white/60',
              )}
            >
              {ui.billingAnnual}
            </button>
          </div>
          <span
            className={cn(
              'rounded-full bg-[#8B6554] px-3 py-1 text-xs font-bold text-white ltr:font-montserrat rtl:font-cairo transition-opacity',
              // Dim when monthly is selected — the badge advertises the
              // annual benefit, so it reads as "disabled / available if you
              // switch" rather than active.
              billingPeriod === 'monthly' && 'opacity-40',
            )}
          >
            {ui.twoMonthsFreeBadge}
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCardV2
              key={tier.id}
              tier={tier}
              billingPeriod={billingPeriod}
              locale={locale}
              ui={ui}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50 ltr:font-montserrat rtl:font-cairo">
          {ui.marketplaceFootnote}
        </p>
      </div>
    </section>
  );
};
