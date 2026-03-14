'use client';
import { Vacansies } from '@/components/careersPage/Vacancies';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { careersPageData } from '@/lib/constants/careersPageData';
import { t } from '@/lib/constants/i18n';
import { useChangeLanguage } from '@/store/language';
import { useState } from 'react';

export const CareersClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();
  const data = t(careersPageData, lang);

  return (
    <div className="w-full">
      <HeroPage
        blockRef={scroll}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={data.titleHero}
        description={data.subtitleHero}
        heightScreen={true}
        styleSection="pb-[100px]"
        secondDescription={data.descriptionHero}
        titleScroll={data.titleScroll}
      />
      <Vacansies setScroll={setScroll} dataCareers={data} />
    </div>
  );
};
