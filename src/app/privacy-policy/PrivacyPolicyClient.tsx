'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { PrivacyPoliceList } from '@/components/privacyPolice/PrivacyPolicyList';
import { privacyPolicyPageData } from '@/lib/constants/privacyPolicyData';
import { t } from '@/lib/constants/i18n';
import { useChangeLanguage } from '@/store/language';
import { useState } from 'react';

export const PrivacyPolicyClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();
  const data = t(privacyPolicyPageData, lang);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription={data.bredCrumbDesription}
        bredCrumbTitle={data.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={data.titleHero}
        description={data.subtitleHero}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription={data.descriptionHero}
      />
      <PrivacyPoliceList setScroll={setScroll} dataSection={data} />
    </>
  );
};
