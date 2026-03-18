'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { useState } from 'react';
import { t } from '@/lib/constants/i18n';
import { aboutPageData } from '@/lib/constants/pages/aboutPageData';

export const AboutClient = ({ lang }: { lang: string }) => {
  const [scroll, setScroll] = useState(null);

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
      <DaysiMission />
    </>
  );
};
