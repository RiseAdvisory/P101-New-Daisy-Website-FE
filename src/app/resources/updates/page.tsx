'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';

const Updates = () => {
  const [heroUpdate, setHeroUpdate] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const {state:currentPage,setState}= useMyContext();

  useEffect(() => {
    //hero-resources-updates
    //resources-updates
    let endpointHeroResourseUpdates = '';
    let endpointResourseUpdates = '';
    if (currentPage === '/customer') {
      endpointHeroResourseUpdates = 'hero-resources-update-customers'
      endpointResourseUpdates = 'resources-update-customers';
    }
    if (currentPage === '/business') {
      endpointHeroResourseUpdates = 'hero-resources-update-businesses'
      endpointResourseUpdates = 'resources-update-businesses';
    }
    if (currentPage === '/professional') {
      endpointHeroResourseUpdates = 'hero-resources-update-independents'
      endpointResourseUpdates = 'resources-update-independents';
    }
    console.log(endpointHeroResourseUpdates);
    (async () => {
      const response = await axiosInstance.get(
        `/${endpointHeroResourseUpdates}?locale=${lang}`,
      );
      const responseList = await axiosInstance.get(
        `/${endpointResourseUpdates}?populate=*&locale=${lang}`,
      );
      console.log(responseList?.data, 'setListCards')
      console.log(response?.data, 'setHeroUpdate')
      setListCards(responseList?.data?.data);
      setHeroUpdate(response?.data?.data[0]?.attributes);
    })();
  }, [lang, currentPage]);

  useEffect(() => {
    let endpointHeroResourseUpdates = 'hero-resources-updates';
    if (currentPage === '/customer') {
      endpointHeroResourseUpdates = 'hero-resources-update-customers'
    }
    if (currentPage === '/business') {
      endpointHeroResourseUpdates = 'hero-resources-update-businesses'
    }
    if (currentPage === '/professional') {
      endpointHeroResourseUpdates = 'hero-resources-update-independents'
    }
    console.log(heroUpdate, 'heroUpdate');

    chooseBreadcrumb(heroUpdate?.breadcrumbs);
    choosePathStrapi(`/${endpointHeroResourseUpdates}`);
  }, [heroUpdate, lang, currentPage]);

  return (
    <div>
      <HeroPage
        isVisibleBreadCrumbs={true}
        bredCrumbDesription={heroUpdate?.bredCrumbDesription}
        bredCrumbTitle={heroUpdate?.bredCrumbTitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroUpdate?.title}
        description={heroUpdate?.subtitle}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={heroUpdate?.description}
      />
      
      <CardPosts
        typePath="updates" 
        redirect={true} 
        listCard={listCard} 
      />
    </div>
  );
};
export default Updates;
