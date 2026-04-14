'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChoosePath } from '@/store/currentPath';
import { useEffect, useMemo, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { blogHeroData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { getAllBlogPosts, UserType } from '@/lib/api/blog';

export const BlogPostClient = () => {
  const [listCard, setListCards] = useState<any[] | null>(null);
  const [userType, setUserType] = useState<string>('customer');

  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage } = useMyContext();

  const hero = t(blogHeroData, locale);

  useEffect(() => {
    let type = 'customer';
    if (currentPage === '/customer') type = 'customer';
    if (currentPage === '/business') type = 'business';
    if (currentPage === '/professional') type = 'professional';

    setUserType(type);
    // Uses the blog API which merges EN media into AR posts so imagery matches across locales.
    getAllBlogPosts(type as UserType, locale).then(setListCards);
    chooseBreadcrumb(hero.breadcrumbs ?? '');
    choosePathStrapi(`/resources/blog/${type}`);
  }, [locale, currentPage, hero, chooseBreadcrumb, choosePathStrapi]);

  return (
    <div className="w-full">
      <HeroPage
        bredCrumbDesription={locale === 'ar' ? 'الموارد' : 'Resources'}
        bredCrumbTitle={locale === 'ar' ? 'المقالات' : 'Blog Posts'}
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
