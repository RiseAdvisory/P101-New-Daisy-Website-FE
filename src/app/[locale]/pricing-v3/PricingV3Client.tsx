'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { t } from '@/lib/constants/i18n';
import { localePath } from '@/lib/utils/locale';
import { PricingHeroV3 } from './components/PricingHeroV3';
import { HowItWorksV3 } from './components/HowItWorksV3';
import { CommissionCalloutV3 } from './components/CommissionCalloutV3';
import { AIConversationsCalloutV3 } from './components/AIConversationsCalloutV3';
import { ComparisonTableV3 } from './components/ComparisonTableV3';
import { AIUsageExampleV3 } from './components/AIUsageExampleV3';
import { AddOnsTableV3 } from './components/AddOnsTableV3';
import { WhyDaisyV3 } from './components/WhyDaisyV3';
import { BusinessSalesCTAV3 } from './components/BusinessSalesCTAV3';
import { ReassuranceSectionV3 } from './components/ReassuranceSectionV3';
import { PricingFAQV3 } from './components/PricingFAQV3';
import {
  BUSINESS_TIERS_V3,
  BUSINESS_COMPARISON_DEFAULT_V3,
  BUSINESS_COMPARISON_FULL_V3,
} from '@/lib/constants/pricing/v3/pricingV3Business';
import {
  PROFESSIONAL_TIERS_V3,
  PROFESSIONAL_COMPARISON_DEFAULT_V3,
  PROFESSIONAL_COMPARISON_FULL_V3,
} from '@/lib/constants/pricing/v3/pricingV3Professional';
import {
  SHARED_COPY,
  PERSONA_COPY,
  type Persona,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  persona: Persona;
  locale: string;
}

const BILLING_STORAGE_KEY = 'pricingV3BillingPeriod';

export const PricingV3Client = ({ persona, locale }: Props) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual',
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem(BILLING_STORAGE_KEY);
    if (saved === 'monthly' || saved === 'annual') {
      setBillingPeriod(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(BILLING_STORAGE_KEY, billingPeriod);
  }, [billingPeriod]);

  const shared = t(SHARED_COPY, locale);
  const personaCopy = t(PERSONA_COPY[persona], locale);
  const tiers =
    persona === 'business' ? BUSINESS_TIERS_V3 : PROFESSIONAL_TIERS_V3;
  const defaultComparison =
    persona === 'business'
      ? BUSINESS_COMPARISON_DEFAULT_V3
      : PROFESSIONAL_COMPARISON_DEFAULT_V3;
  const fullComparison =
    persona === 'business'
      ? BUSINESS_COMPARISON_FULL_V3
      : PROFESSIONAL_COMPARISON_FULL_V3;

  const otherPersona: Persona =
    persona === 'business' ? 'professional' : 'business';
  const crossLinkLabel =
    persona === 'business'
      ? shared.crossLinkToProfessional
      : shared.crossLinkToBusiness;

  return (
    <>
      <HowItWorksV3 personaCopy={personaCopy} />

      {/* Commission promise moved ABOVE the pricing cards per v3 spec. */}
      <CommissionCalloutV3 personaCopy={personaCopy} />

      <PricingHeroV3
        persona={persona}
        tiers={tiers}
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
        locale={locale}
        shared={shared}
        personaCopy={personaCopy}
      />

      <AIConversationsCalloutV3 personaCopy={personaCopy} />

      <ComparisonTableV3
        defaultCategories={defaultComparison}
        fullCategories={fullComparison}
        tiers={tiers}
        shared={shared}
      />

      <AIUsageExampleV3 shared={shared} personaCopy={personaCopy} />

      <AddOnsTableV3 persona={persona} locale={locale} shared={shared} />

      <WhyDaisyV3 shared={shared} personaCopy={personaCopy} />

      {persona === 'business' && (
        <BusinessSalesCTAV3 locale={locale} shared={shared} />
      )}

      <ReassuranceSectionV3 personaCopy={personaCopy} />

      <PricingFAQV3 persona={persona} locale={locale} shared={shared} />

      {/* Cross-link to other persona */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href={localePath(`/pricing-v3/${otherPersona}`, locale)}
            className="text-base font-semibold text-[#8B6554] hover:underline ltr:font-montserrat rtl:font-cairo"
          >
            {crossLinkLabel}
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-4 pb-24 md:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-10 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
            {shared.finalCtaHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 ltr:font-montserrat rtl:font-cairo">
            {shared.finalCtaBody}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={localePath('/get-the-app', locale)}
              className="rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-[#172524] transition-colors hover:bg-[#F8F5F3] ltr:font-montserrat rtl:font-cairo"
            >
              {personaCopy.ctaPrimary}
            </Link>
            <Link
              href={localePath('/contact', locale)}
              className="rounded-lg border border-white/40 px-10 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 ltr:font-montserrat rtl:font-cairo"
            >
              {personaCopy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
