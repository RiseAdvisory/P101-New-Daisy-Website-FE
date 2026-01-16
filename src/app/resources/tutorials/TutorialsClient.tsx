'use client';
import { useMyContext } from '@/app/MyContext';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { ResourcePageAttributes } from '@/types/strapi';

interface TutorialsData extends ResourcePageAttributes {
  bredCrumbDesription?: string;
  bredCrumbTitle?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  titleScroll?: string;
}

export const TutorialsClient = () => {
  const [scroll, setScroll] = useState(null);
  const [dataTutorials, setDataTutorials] = useState<TutorialsData | null>(
    null,
  );
  const { lang } = useChangeLanguage();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let endpointExperienceDaisyLink = '';

    if (currentPage === '/customer') {
      endpointExperienceDaisyLink = 'resource-tutorial-customers';
    }
    if (currentPage === '/business') {
      endpointExperienceDaisyLink = 'resource-tutorial-businesses';
    }
    if (currentPage === '/professional') {
      endpointExperienceDaisyLink = 'resource-tutorial-independents';
    }

    (async () => {
      try {
        const response = await axiosInstance.get(
          `/${endpointExperienceDaisyLink}?locale=${lang}`,
        );
        const [data] = response?.data?.data;
        setDataTutorials(data?.attributes);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    })();
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
