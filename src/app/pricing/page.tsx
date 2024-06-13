'use client';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { useState } from 'react';

const Pricing = () => {
  const [activePricingPage, setActivePricingPage] = useState('professional');
  // console.log('🚀 ~ Pricing ~ activePricingPage:', activePricingPage);
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
      <GridPricingCard />
    </>
  );
};
export default Pricing;
