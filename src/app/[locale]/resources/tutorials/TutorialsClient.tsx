'use client';
import { useMyContext } from '@/app/MyContext';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useEffect, useMemo, useState } from 'react';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const TutorialsClient = () => {
  const [scroll, setScroll] = useState(null);
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
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
      setDataTutorials(t(heroData, locale));
    }
  }, [locale, currentPage]);

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
