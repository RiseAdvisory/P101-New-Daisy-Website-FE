'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChangeLanguage } from '@/store/language';
import { useState } from 'react';
import { t } from '@/lib/constants/i18n';
import { aboutPageData } from '@/lib/constants/pages/aboutPageData';

export const AboutClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();

  const data = t(aboutPageData, lang);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        title={data.heroTitle}
        description={data.heroSubtitle}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        titleScroll={data.titleScroll}
      />
      <OurMissing setScroll={setScroll} heroAbout={data} />
      <OurValue heroAbout={data} />
    </>
  );
};
