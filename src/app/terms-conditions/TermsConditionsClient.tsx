'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TermsConditionsSection } from '@/components/termsConditionsPage/TermsConditions';
import { termsConditionsPageData } from '@/lib/constants/termsConditionsData';
import { t } from '@/lib/constants/i18n';
import { useChangeLanguage } from '@/store/language';
import { useState } from 'react';

export const TermsConditionsClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();
  const data = t(termsConditionsPageData, lang);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription={data.bredCrumbDesription}
        bredCrumbTitle={data.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={data.heroTitle}
        description={data.heroSubtitle}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        titleScroll={data.titleScroll}
        secondDescription={data.heroSubcription}
      />
      <TermsConditionsSection
        setScroll={setScroll}
        dataConditions={data}
      />
    </>
  );
};
