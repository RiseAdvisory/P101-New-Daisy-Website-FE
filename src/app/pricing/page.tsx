'use client';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { Switch } from '@/components/ui/switch';
import { pricingBusinessCard } from '@/lib/constants/pricing/pricingBusiness';
import { pricingProfessionalCard } from '@/lib/constants/pricing/prisingProfessional';
import { useState } from 'react';

const Pricing = () => {
  const [activePricingPage, setActivePricingPage] = useState('professional');
  const [checkedMonth, setCheckedMonth] = useState(false);
  const currentPricing =
    activePricingPage === 'professional'
      ? pricingProfessionalCard
      : pricingBusinessCard;
  return (
    <div className="bg-primary">
      <PricingHero
        setActivePricingPage={setActivePricingPage}
        description="Straightforward pricing that grows with you"
        heightScreen={false}
        styleSection="pb-[100px]"
      />
      <div className="px-4 md:px-20  bg-primary">
        <Separator />
      </div>
      <div className="flex mx-auto w-fit bg-primary my-[44px]">
        <p className="font-normal text-[18px] leading-6 text-[#F8F5F3]">
          Pay Monthly
        </p>
        <Switch className="mx-4" />
        <p className="font-normal text-[18px] leading-6 text-[#F8F5F3]">
          Pay Annually
        </p>
      </div>
      <GridPricingCard listChangePricing={currentPricing} />
      {activePricingPage === 'business' && <EnterPrise />}
    </div>
  );
};
export default Pricing;
