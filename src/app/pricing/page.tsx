'use client';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { pricingBusinessCard } from '@/lib/constants/pricing/pricingBusiness';
import { pricingProfessionalCard } from '@/lib/constants/pricing/prisingProfessional';
import { useState } from 'react';

const Pricing = () => {
  const [activePricingPage, setActivePricingPage] = useState('professional');
  const currentPricing =
    activePricingPage === 'professional'
      ? pricingProfessionalCard
      : pricingBusinessCard;
  return (
    <>
      <PricingHero
        setActivePricingPage={setActivePricingPage}
        description="Straightforward pricing that grows with you"
        heightScreen={false}
        styleSection="pb-[100px]"
      />
      <div className="px-4 md:px-20 md:pb-[112px] bg-primary pb-28">
        <Separator />
      </div>
      <GridPricingCard listChangePricing={currentPricing} />
      {activePricingPage === 'business' && <EnterPrise />}
    </>
  );
};
export default Pricing;
