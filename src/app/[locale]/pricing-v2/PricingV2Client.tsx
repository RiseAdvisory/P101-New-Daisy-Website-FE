'use client';
import { useState } from 'react';
import Link from 'next/link';
import { t } from '@/lib/constants/i18n';
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
import {
  UI_STRINGS,
  type Persona,
} from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  persona: Persona;
  locale: string;
}

export const PricingV2Client = ({ persona, locale }: Props) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual',
  );

  const ui = t(UI_STRINGS, locale);
  const tiers = t(
    persona === 'business' ? BUSINESS_TIERS : PROFESSIONAL_TIERS,
    locale,
  );
  const categories = t(
    persona === 'business'
      ? BUSINESS_FEATURE_CATEGORIES
      : PROFESSIONAL_FEATURE_CATEGORIES,
    locale,
  );

  const otherPersona: Persona =
    persona === 'business' ? 'professional' : 'business';
  const crossLinkLabel =
    persona === 'business'
      ? ui.crossLinkToProfessional
      : ui.crossLinkToBusiness;

  return (
    <>
      <PricingHeroV2
        persona={persona}
        tiers={tiers}
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
        locale={locale}
        ui={ui}
      />

      <AICreditsCallout locale={locale} />

      <CommissionCallout locale={locale} />

      <ComparisonTableV2 categories={categories} tiers={tiers} ui={ui} />

      {/* Cross-link to other persona */}
      <section className="bg-white px-4 py-12 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href={localePath(`/pricing-v2/${otherPersona}`, locale)}
            className="text-base font-semibold text-[#8B6554] hover:underline ltr:font-montserrat rtl:font-cairo"
          >
            {crossLinkLabel}
          </Link>
        </div>
      </section>

      <AddOnsTableV2 locale={locale} ui={ui} />

      <PricingFAQV2 locale={locale} ui={ui} />

      {/* Final CTA */}
      <section className="bg-white px-4 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-12 text-center md:px-16 md:py-16">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            {ui.finalCtaHeadline}
          </h2>
          <p className="mt-4 text-base text-white/80 ltr:font-montserrat rtl:font-cairo">
            {ui.finalCtaBody}
          </p>
          <Link
            href={localePath('/get-the-app', locale)}
            className="mt-8 inline-block rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-[#172524] transition-colors hover:bg-[#F8F5F3]"
          >
            {ui.finalCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
};
