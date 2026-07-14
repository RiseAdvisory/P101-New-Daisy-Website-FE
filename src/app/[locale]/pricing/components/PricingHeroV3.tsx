'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { localePath } from '@/lib/utils/locale';
import { Switch } from '@/components/ui/switch';
import { PricingCardV3 } from './PricingCardV3';
import type {
  Persona,
  SharedCopy,
  PersonaCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';
import type { PricingTierV3 } from '@/lib/constants/pricing/v3/pricingV3Business';

interface Props {
  persona: Persona;
  tiers: PricingTierV3[];
  billingPeriod: 'monthly' | 'annual';
  setBillingPeriod: Dispatch<SetStateAction<'monthly' | 'annual'>>;
  /** When false, the Monthly/Annual toggle (and its "2 Months Free"
      badge) is not rendered — monthly pricing only. */
  showBillingToggle: boolean;
  locale: string;
  shared: SharedCopy;
  personaCopy: PersonaCopy;
}

export const PricingHeroV3 = ({
  persona,
  tiers,
  billingPeriod,
  setBillingPeriod,
  showBillingToggle,
  locale,
  shared,
  personaCopy,
}: Props) => {
  const router = useRouter();

  const switchPersona = (next: Persona) => {
    router.push(localePath(`/pricing/${next}`, locale));
  };

  return (
    <section className="bg-primary px-4 pb-24 pt-20 md:px-16 md:pb-28 md:pt-[100px]">
      {/* No max-width here. Matches the live /pricing layout which lets
          the three cards breathe across the full container instead of
          being constrained to a narrower band. */}
      <div className="mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-semibold leading-10 text-white md:text-[48px] md:leading-[60px]">
            {personaCopy.heroHeadline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75 ltr:font-montserrat rtl:font-cairo">
            {personaCopy.heroSubheadline}
          </p>
        </div>

        {/* Persona selector. The "Pricing for:" label sits above the two
            buttons (not inline) so the toggle stays visually centered.
            When the billing toggle is hidden, this block takes over its
            bottom margin so the cards keep the same breathing room. */}
        <div
          className={cn(
            'mx-auto flex w-fit flex-col items-center gap-2',
            showBillingToggle ? 'mb-8' : 'mb-14',
          )}
        >
          <span
            id="persona-selector-label"
            className="text-sm font-medium text-white/70 ltr:font-montserrat rtl:font-cairo"
          >
            {shared.personaSelectorLabel}:
          </span>
          <div
            role="group"
            aria-labelledby="persona-selector-label"
            className="flex w-fit gap-1 rounded-xl border border-white/15 bg-white/5 p-1 backdrop-blur-sm"
          >
            {(
              [
                { id: 'business' as const, label: shared.personaToggleBusiness },
                {
                  id: 'professional' as const,
                  label: shared.personaToggleProfessional,
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
        </div>

        {/* Billing toggle (hidden while annual pricing is off) */}
        {showBillingToggle && (
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
              {shared.billingMonthly}
            </button>
            <Switch
              checked={billingPeriod === 'annual'}
              onCheckedChange={(checked) =>
                setBillingPeriod(checked ? 'annual' : 'monthly')
              }
              aria-label={
                billingPeriod === 'annual'
                  ? `Switch to ${shared.billingMonthly}`
                  : `Switch to ${shared.billingAnnual}`
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
              {shared.billingAnnual}
            </button>
          </div>
          <span
            className={cn(
              'rounded-full bg-[#8B6554] px-3 py-1 text-xs font-bold text-white ltr:font-montserrat rtl:font-cairo transition-opacity',
              billingPeriod === 'monthly' && 'opacity-40',
            )}
          >
            {shared.twoMonthsFreeBadge}
          </span>
        </div>
        )}

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCardV3
              key={tier.id}
              tier={tier}
              billingPeriod={billingPeriod}
              locale={locale}
              shared={shared}
              persona={personaCopy}
            />
          ))}
        </div>

        {/* Dual CTAs below cards */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={localePath('/get-the-app', locale)}
            className="rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-[#172524] transition-colors hover:bg-[#F8F5F3] ltr:font-montserrat rtl:font-cairo"
          >
            {personaCopy.ctaPrimary}
          </Link>
          <Link
            href={localePath('/contact', locale)}
            className="rounded-lg border border-white/40 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 ltr:font-montserrat rtl:font-cairo"
          >
            {personaCopy.ctaSecondary}
          </Link>
        </div>

      </div>
    </section>
  );
};
