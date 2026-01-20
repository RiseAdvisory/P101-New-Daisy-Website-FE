'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { ResourcePageAttributes, ResourceItem } from '@/types/strapi';

interface BlogHeroData extends ResourcePageAttributes {
  title?: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: string;
}

export const BlogPostClient = () => {
  const [heroBlog, setHeroBlog] = useState<BlogHeroData | null>(null);
  const [listCard, setListCards] = useState<ResourceItem[] | null>(null);
  const [userType, setUserType] = useState<string>('customer');

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let endpointExperienceDaisyLink = 'resources-blog-post-customers';
    let type = 'customer';

    if (currentPage === '/customer') {
      endpointExperienceDaisyLink = 'resources-blog-post-customers';
      type = 'customer';
    }
    if (currentPage === '/business') {
      endpointExperienceDaisyLink = 'resources-blog-post-businesses';
      type = 'business';
    }
    if (currentPage === '/professional') {
      endpointExperienceDaisyLink = 'resources-blog-post-independents';
      type = 'professional';
    }

    setUserType(type);

    (async () => {
      try {
        const [response, responseList] = await Promise.all([
          axiosInstance.get(
            `hero-resources-blogposts?locale=${lang}&_sort=name:DESCa`,
          ),
          axiosInstance.get(
            `/${endpointExperienceDaisyLink}?populate=*&locale=${lang}`,
          ),
        ]);
        setListCards(responseList?.data?.data);
        setHeroBlog(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    })();
  }, [lang, currentPage]);

  useEffect(() => {
    let endpointExperienceDaisyLink = 'resources-blog-post-customers';
    if (currentPage === '/customer') {
      endpointExperienceDaisyLink = 'resources-blog-post-customers';
    }
    if (currentPage === '/business') {
      endpointExperienceDaisyLink = 'resources-blog-post-businesses';
    }
    if (currentPage === '/professional') {
      endpointExperienceDaisyLink = 'resources-blog-post-independents';
    }
    chooseBreadcrumb(heroBlog?.breadcrumbs ?? '');
    choosePathStrapi(`/${endpointExperienceDaisyLink}`);
  }, [heroBlog, lang, currentPage, chooseBreadcrumb, choosePathStrapi]);

  return (
    <div className="w-full">
      <HeroPage
        bredCrumbDesription={'Resources'}
        bredCrumbTitle={'Blog Posts'}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroBlog?.title ?? ''}
        description={heroBlog?.subtitle ?? ''}
        heightScreen={false}
        styleSection="pb-[100px] pt-[25px]"
        secondDescription={heroBlog?.description}
      />
      <CardPosts
        typePath={userType}
        redirect={true}
        style="cursor-pointer"
        listCard={listCard}
      />
    </div>
  );
};
