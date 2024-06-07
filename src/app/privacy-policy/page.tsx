'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { PrivacyPoliceList } from '@/components/privacyPolice/PrivacyPolicyList';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [scroll, setScroll] = useState(null);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription="Home"
        bredCrumbTitle="Privacy Policy"
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title="data usage"
        description="Privacy Policy"
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription="Guardians of Your Information: Welcome to The Daisy's Privacy Safehouse"
      />
      <PrivacyPoliceList setScroll={setScroll} />
    </>
  );
};
export default PrivacyPolicy;
