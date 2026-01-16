'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { ResourcePageAttributes, ResourceItem } from '@/types/strapi';

interface UpdatesHeroData extends ResourcePageAttributes {
  title?: string;
  subtitle?: string;
  description?: string;
  bredCrumbDesription?: string;
  bredCrumbTitle?: string;
  breadcrumbs?: string;
}

export const UpdatesClient = () => {
  const [heroUpdate, setHeroUpdate] = useState<UpdatesHeroData | null>(null);
  const [listCard, setListCards] = useState<ResourceItem[] | null>(null);

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let endpointHeroResourceUpdates = '';
    let endpointResourceUpdates = '';
    if (currentPage === '/customer') {
      endpointHeroResourceUpdates = 'hero-resources-update-customers';
      endpointResourceUpdates = 'resources-update-customers';
    }
    if (currentPage === '/business') {
      endpointHeroResourceUpdates = 'hero-resources-update-businesses';
      endpointResourceUpdates = 'resources-update-businesses';
    }
    if (currentPage === '/professional') {
      endpointHeroResourceUpdates = 'hero-resources-update-independents';
      endpointResourceUpdates = 'resources-update-independents';
    }

    (async () => {
      try {
        const [response, responseList] = await Promise.all([
          axiosInstance.get(`/${endpointHeroResourceUpdates}?locale=${lang}`),
          axiosInstance.get(
            `/${endpointResourceUpdates}?populate=*&locale=${lang}`,
          ),
        ]);
        setListCards(responseList?.data?.data);
        setHeroUpdate(response?.data?.data[0]?.attributes);
        choosePathStrapi(`/${endpointResourceUpdates}`);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    })();
  }, [lang, currentPage, choosePathStrapi]);

  useEffect(() => {
    chooseBreadcrumb(heroUpdate?.breadcrumbs ?? '');
  }, [heroUpdate, lang, currentPage, chooseBreadcrumb]);

  return (
    <div>
      <HeroPage
        isVisibleBreadCrumbs={true}
        bredCrumbDesription={heroUpdate?.bredCrumbDesription}
        bredCrumbTitle={heroUpdate?.bredCrumbTitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroUpdate?.title ?? ''}
        description={heroUpdate?.subtitle ?? ''}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={heroUpdate?.description}
      />

      <CardPosts typePath="updates" redirect={true} listCard={listCard} />
    </div>
  );
};
