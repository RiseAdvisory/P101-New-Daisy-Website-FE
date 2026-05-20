'use client';
import { useState } from 'react';
import Link from 'next/link';
import { localePath } from '@/lib/utils/locale';
import { PricingHeroV2 } from './components/PricingHeroV2';
import { AICreditsCallout } from './components/AICreditsCallout';
import { CommissionCallout } from './components/CommissionCallout';
import { ComparisonTableV2 } from './components/ComparisonTableV2';
import { AddOnsTableV2 } from './components/AddOnsTableV2';
import { PricingFAQV2 } from './components/PricingFAQV2';
import {
  BUSINESS_TIERS,
  BUSINESS_FEATURE_CATEGORIES,
} from '@/lib/constants/pricing/v2/pricingV2Business';
import {
  PROFESSIONAL_TIERS,
  PROFESSIONAL_FEATURE_CATEGORIES,
} from '@/lib/constants/pricing/v2/pricingV2Professional';
import type { Persona } from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  persona: Persona;
  locale: string;
}

export const PricingV2Client = ({ persona, locale }: Props) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual',
  );

  const tiers = persona === 'business' ? BUSINESS_TIERS : PROFESSIONAL_TIERS;
  const categories =
    persona === 'business'
      ? BUSINESS_FEATURE_CATEGORIES
      : PROFESSIONAL_FEATURE_CATEGORIES;

  const otherPersona: Persona =
    persona === 'business' ? 'professional' : 'business';
  const otherLabel =
    persona === 'business'
      ? 'Solo professional? See Professional pricing'
      : 'Have a team? See Business pricing';

  return (
    <>
      <PricingHeroV2
        persona={persona}
        tiers={tiers}
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
        locale={locale}
      />

      <AICreditsCallout />

      <CommissionCallout />

      <ComparisonTableV2 categories={categories} tiers={tiers} />

      {/* Cross-link to other persona */}
      <section className="bg-primary px-4 py-12 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href={localePath(`/pricing-v2/${otherPersona}`, locale)}
            className="text-base font-semibold text-[#CAB2A6] hover:text-white hover:underline"
          >
            {otherLabel} →
          </Link>
        </div>
      </section>

      <AddOnsTableV2 />

      <PricingFAQV2 />

      {/* Final CTA */}
      <section className="bg-primary px-4 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#8B6554]/25 via-white/[0.05] to-white/[0.04] px-8 py-12 text-center ring-1 ring-white/10 md:px-16 md:py-16">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Ready to grow with The Daisy?
          </h2>
          <p className="mt-4 text-base text-white/80">
            Start your 14-day free trial. No credit card required to try the
            platform; only required to unlock your 1,000 free AI credits.
          </p>
          <Link
            href={localePath('/get-the-app', locale)}
            className="mt-8 inline-block rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-[#172524] transition-colors hover:bg-white/90"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
};
