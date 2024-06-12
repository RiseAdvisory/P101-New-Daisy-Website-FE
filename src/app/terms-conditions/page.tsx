'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TermsConditionsSection } from '@/components/termsConditionsPage/TermsConditions';
import { useState } from 'react';

const TermsConditions = () => {
  const [scroll, setScroll] = useState(null);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription="Home"
        bredCrumbTitle="Terms & Conditions"
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title="policies"
        description="Terms & Conditions"
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        titleScroll="Explore the  terms"
        secondDescription=" Welcome to the Gateway of Guidelines - You've Just Stepped onto The Daisy's Terms and Conditions Turf!"
      />
      <TermsConditionsSection setScroll={setScroll} />
    </>
  );
};
export default TermsConditions;
