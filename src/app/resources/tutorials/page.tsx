'use client';
import { useMyContext } from '@/app/MyContext';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TabsTutorials } from '@/components/tabsTutorials/TabsTutorials';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const Tutorials = () => {
  const [scroll, setScroll] = useState(null);
  const [dataTutorials, setDataTutorials] = useState<any>();
  const { lang } = useChangeLanguage();
  const { userChange: currentPage, setUserChange } = useMyContext();

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
      const response = await axiosInstance.get(
        `/${endpointExperienceDaisyLink}?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setDataTutorials(data?.attributes);
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
        title={dataTutorials?.title}
        description={dataTutorials?.subtitle}
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
export default Tutorials;
