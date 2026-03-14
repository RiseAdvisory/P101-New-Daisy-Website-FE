'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { blogHeroData, blogPostsByUserType } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';

export const BlogPostClient = () => {
  const [listCard, setListCards] = useState<any[] | null>(null);
  const [userType, setUserType] = useState<string>('customer');

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let type = 'customer';

    if (currentPage === '/customer') {
      type = 'customer';
    }
    if (currentPage === '/business') {
      type = 'business';
    }
    if (currentPage === '/professional') {
      type = 'professional';
    }

    setUserType(type);

    // Load blog posts from local data
    const posts = blogPostsByUserType[type] || [];
    setListCards(posts);
  }, [lang, currentPage]);

  const hero = t(blogHeroData, lang);

  useEffect(() => {
    chooseBreadcrumb(hero.breadcrumbs ?? '');
    choosePathStrapi(`/resources/blog/${userType}`);
  }, [hero, lang, currentPage, chooseBreadcrumb, choosePathStrapi, userType]);

  return (
    <div className="w-full">
      <HeroPage
        bredCrumbDesription={'Resources'}
        bredCrumbTitle={'Blog Posts'}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={hero.title ?? ''}
        description={hero.subtitle ?? ''}
        heightScreen={false}
        styleSection="pb-[100px] pt-[25px]"
        secondDescription={hero.description}
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
