'use client';
import { useEffect, useState } from 'react';
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

const BILLING_STORAGE_KEY = 'pricingV2BillingPeriod';

export const PricingV2Client = ({ persona, locale }: Props) => {
  // Default to annual on initial render to keep SSR and client hydration in
  // sync. We restore any previously chosen value from localStorage in the
  // effect below, so persona switches (which remount this component) don't
  // reset the user's billing choice.
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual',
  );

  // Hydrate from localStorage on mount.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem(BILLING_STORAGE_KEY);
    if (saved === 'monthly' || saved === 'annual') {
      setBillingPeriod(saved);
    }
  }, []);

  // Persist on every change so the next mount (after a persona switch)
  // picks the value back up.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(BILLING_STORAGE_KEY, billingPeriod);
  }, [billingPeriod]);

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
      <section className="bg-white px-4 py-16 md:px-16 md:py-20">
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
      <section className="bg-white px-4 pb-24 md:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-10 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
            {ui.finalCtaHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 ltr:font-montserrat rtl:font-cairo">
            {ui.finalCtaBody}
          </p>
          <Link
            href={localePath('/get-the-app', locale)}
            className="mt-10 inline-block rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-[#172524] transition-colors hover:bg-[#F8F5F3] ltr:font-montserrat rtl:font-cairo"
          >
            {ui.finalCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
};
