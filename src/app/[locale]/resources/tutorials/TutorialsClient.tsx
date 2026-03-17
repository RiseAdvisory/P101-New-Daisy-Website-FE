'use client';
import { useMyContext } from '@/app/MyContext';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

export const TutorialsClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();
  const { userChange: currentPage } = useMyContext();

  const [dataTutorials, setDataTutorials] = useState<{
    bredCrumbDesription?: string;
    bredCrumbTitle?: string;
    title: string;
    subtitle: string;
    description?: string;
    titleScroll?: string;
  } | null>(null);

  useEffect(() => {
    let type = 'customer';
    if (currentPage === '/customer') type = 'customer';
    if (currentPage === '/business') type = 'business';
    if (currentPage === '/professional') type = 'professional';

    const heroData = tutorialsHeroData[type];
    if (heroData) {
      setDataTutorials(t(heroData, lang));
    }
  }, [lang, currentPage]);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription={dataTutorials?.bredCrumbDesription}
        bredCrumbTitle={dataTutorials?.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataTutorials?.title ?? ''}
        description={dataTutorials?.subtitle ?? ''}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription={dataTutorials?.description}
        titleScroll={dataTutorials?.titleScroll}
      />
      <TutorialSection setScroll={setScroll} />
      {/* <TabsTutorials /> */}
    </>
  );
};
