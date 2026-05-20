'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import { PricingCardV2 } from './PricingCardV2';
import type { Persona } from '@/lib/constants/pricing/v2/pricingV2Shared';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

interface Props {
  persona: Persona;
  tiers: PricingTierV2[];
  billingPeriod: 'monthly' | 'annual';
  setBillingPeriod: Dispatch<SetStateAction<'monthly' | 'annual'>>;
  locale: string;
}

export const PricingHeroV2 = ({
  persona,
  tiers,
  billingPeriod,
  setBillingPeriod,
  locale,
}: Props) => {
  const router = useRouter();

  const switchPersona = (next: Persona) => {
    router.push(localePath(`/pricing-v2/${next}`, locale));
  };

  return (
    <section className="bg-[#F8F5F3] px-4 pb-16 pt-12 md:px-16 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold leading-tight text-[#172524] md:text-5xl">
            Pricing that grows with your business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#455150]">
            Pick the plan that matches your scale today. Move up — or stay — as
            you grow. Every plan starts with 1,000 free AI credits and a 14-day
            free trial.
          </p>
        </div>

        {/* Persona selector */}
        <div className="mx-auto mb-8 flex w-fit gap-1 rounded-xl border border-[#E8E9E9] bg-white p-1">
          {(
            [
              { id: 'business' as const, label: 'For Business (with a team)' },
              { id: 'professional' as const, label: 'For Solo Professional' },
            ]
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => switchPersona(option.id)}
              aria-pressed={persona === option.id}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                persona === option.id
                  ? 'bg-[#172524] text-white'
                  : 'text-[#455150] hover:bg-[#F8F5F3]',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Billing toggle */}
        <div className="mx-auto mb-12 flex w-fit items-center gap-4">
          <button
            type="button"
            onClick={() => setBillingPeriod('monthly')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors',
              billingPeriod === 'monthly'
                ? 'bg-[#172524] text-white'
                : 'text-[#455150] hover:text-[#172524]',
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod('annual')}
            className={cn(
              'flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors',
              billingPeriod === 'annual'
                ? 'bg-[#172524] text-white'
                : 'text-[#455150] hover:text-[#172524]',
            )}
          >
            Annual
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-xs font-bold',
                billingPeriod === 'annual'
                  ? 'bg-white text-[#172524]'
                  : 'bg-[#8B6554] text-white',
              )}
            >
              2 months free
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCardV2
              key={tier.id}
              tier={tier}
              billingPeriod={billingPeriod}
              locale={locale}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#455150]">
          * Marketplace visibility and cashback promotions require a
          service-quality review.
        </p>
      </div>
    </section>
  );
};
