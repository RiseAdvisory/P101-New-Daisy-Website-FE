'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChoosePath } from '@/store/currentPath';
import { useEffect, useMemo, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { blogHeroData, blogPostsByUserType } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const BlogPostClient = () => {
  const [listCard, setListCards] = useState<any[] | null>(null);
  const [userType, setUserType] = useState<string>('customer');

  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
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
  }, [locale, currentPage]);

  const hero = t(blogHeroData, locale);

  useEffect(() => {
    chooseBreadcrumb(hero.breadcrumbs ?? '');
    choosePathStrapi(`/resources/blog/${userType}`);
  }, [hero, locale, currentPage, chooseBreadcrumb, choosePathStrapi, userType]);

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
