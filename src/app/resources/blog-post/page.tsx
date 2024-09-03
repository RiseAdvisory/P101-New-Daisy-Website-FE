'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';

const BlogPosts = () => {
  const [heroBlog, setHeroBlog] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage, setUserChange } = useMyContext();

  useEffect(() => {
    //resources-blog-posts
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

    (async () => {
      const response = await axiosInstance.get(
        `hero-resources-blogposts?locale=${lang}&_sort=name:DESCa`,
      );
      const responseList = await axiosInstance.get(
        `/${endpointExperienceDaisyLink}?populate=*&locale=${lang}`,
      );
      setListCards(responseList?.data?.data);
      setHeroBlog(response?.data?.data[0]?.attributes);
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
    chooseBreadcrumb(heroBlog?.breadcrumbs);
    choosePathStrapi(`/${endpointExperienceDaisyLink}`);
  }, [heroBlog, lang, currentPage]);
  return (
    <div className="w-full">
      <HeroPage
        bredCrumbDesription={'Resources'}
        bredCrumbTitle={'Blog Posts'}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroBlog?.title}
        description={heroBlog?.subtitle}
        heightScreen={false}
        styleSection="pb-[100px] pt-[25px]"
        secondDescription={heroBlog?.description}
      />
      <CardPosts
        typePath="blog-post"
        redirect={true}
        style="cursor-pointer"
        listCard={listCard}
      />
    </div>
  );
};
export default BlogPosts;
