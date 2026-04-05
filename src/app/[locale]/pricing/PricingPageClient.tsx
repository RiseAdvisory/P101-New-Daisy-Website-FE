'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stars from '@/assets/images/stars-background-decoration.png';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { CalculatePricing } from '@/components/pricingPage/CalculatePricing';
import { QAAccordion } from '@/components/qaAccordion/QAAccordion';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import Separator from '@/components/separator/Separator';
import { cn } from '@/lib/utils';
import { pricingPageData } from '@/lib/constants/pricing/pricingPageData';
import { t } from '@/lib/constants/i18n';
import { localePath } from '@/lib/utils/locale';

interface PricingPageClientProps {
  persona: 'business' | 'professional';
  lang: string;
}

export const PricingPageClient = ({ persona, lang }: PricingPageClientProps) => {
  const [checkedMonth, setCheckedMonth] = useState(true);
  const [isRecommended, setIsRecommended] = useState(false);
  const gridCardRef = useRef<HTMLDivElement>(null);

  const dataPricing = t(pricingPageData, lang);
  const currentPricing = dataPricing[persona].pricingCard;
  const pay = dataPricing.switchAnnually;

  const crossLink = dataPricing.crossLinks[persona];
  const otherPersona = persona === 'business' ? 'professional' : 'business';
  const faqs = dataPricing.pricingFaqs[persona];
  const finalCta = dataPricing.finalCta[persona];

  const handleScrollToGrid = () => {
    if (gridCardRef.current) {
      gridCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8F5F3] pb-[180px]">
      {/* Hero Section */}
      <div className="w-full bg-primary pt-[100px] flex flex-col justify-start items-center px-4 pb-[100px]">
        <Image
          src={stars}
          alt="stars"
          className="mx-auto w-[60px] h-[60px]"
        />
        <h1 className="text-center capitalize mt-[46px] font-semibold text-[32px] leading-10 text-white md:px-[400px] md:text-[48px] md:leading-[60px]">
          {dataPricing.title}
        </h1>
      </div>

      {/* Billing switch separator */}
      <div className="px-4 md:px-20 bg-primary">
        <Separator />
      </div>

      {/* Billing toggle (Monthly / Annual) */}
      <div className="w-full bg-primary py-[44px]">
        <div className="flex mx-auto w-fit bg-primary">
          <p
            className={cn(
              'font-normal text-[18px] leading-6 text-[#F8F5F3] text-right',
              { 'text-[#F8F5F3]/60': checkedMonth },
            )}
          >
            {pay?.monthly}
          </p>
          <Switch
            checked={checkedMonth}
            aria-label={
              checkedMonth
                ? pay?.monthly || 'Switch to monthly billing'
                : pay?.annually || 'Switch to annual billing'
            }
            className="mx-4 data-[state=checked]:bg-[#8B6554] my-auto bg-[#aab4b3]"
            onCheckedChange={() => setCheckedMonth(!checkedMonth)}
          />
          <p
            className={cn(
              'font-normal text-[18px] leading-6 text-[#F8F5F3]',
              { 'text-[#F8F5F3]/60': !checkedMonth },
            )}
          >
            {pay?.annually}
          </p>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div ref={gridCardRef} className="md:scroll-mt-[150px]">
        <GridPricingCard
          gridCardRef={gridCardRef}
          isRecommended={isRecommended}
          activePricingPage={persona}
          checkedAnnually={checkedMonth}
          dataPricing={currentPricing ?? []}
          listChangePricing={dataPricing}
        />
      </div>

      {/* Cross-link to other persona */}
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <p className="text-[#455150] text-lg text-center">{crossLink.text}</p>
        <Link
          href={localePath(`/pricing/${otherPersona}`, lang)}
          className="mt-3 text-[#8B6554] font-semibold text-lg hover:underline"
        >
          {crossLink.linkText}
        </Link>
      </div>

      {/* Calculator section (business only — professional plans are straightforward) */}
      {persona === 'business' && (
        <div className="px-4 md:px-16 py-12">
          <div className="text-center mb-8">
            <h2 className="text-[#172524] font-semibold text-[28px] md:text-[36px] leading-tight">
              {dataPricing.calculatorSectionTitle}
            </h2>
            <p className="text-[#455150] mt-3 text-lg ltr:font-montserrat">
              {dataPricing.calculatorSectionSubtitle}
            </p>
          </div>
          <CalculatePricing
            onScrollToGrid={handleScrollToGrid}
            setIsRecommended={setIsRecommended}
            activePricingPage={persona}
            dataPricing={dataPricing}
            checkedAnnual={checkedMonth}
            setCheckedAnnual={setCheckedMonth}
          />
        </div>
      )}

      {/* Enterprise section (business only) */}
      {persona === 'business' && (
        <EnterPrise data={dataPricing.enterprise} />
      )}

      {/* FAQ section */}
      <div className="px-4 md:px-16 py-16">
        <h2 className="text-[#172524] font-semibold text-[28px] md:text-[36px] leading-tight text-center mb-8">
          {dataPricing.faqSectionTitle}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <QAAccordion
              key={index}
              value={index}
              item={{ question: faq.question, answer: faq.answer }}
            />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-primary mx-4 md:mx-16 rounded-[16px]">
        <h2 className="text-white font-semibold text-[28px] md:text-[36px] leading-tight text-center">
          {finalCta.title}
        </h2>
        <Link href={localePath(`/start-free-trial/${persona}`, lang)}>
          <Button className="mt-8 py-[14px] px-[40px] md:px-[60px] bg-white text-primary hover:bg-[#F8F5F3] font-semibold text-lg rounded-[8px]">
            {finalCta.button}
          </Button>
        </Link>
      </div>
    </div>
  );
};
