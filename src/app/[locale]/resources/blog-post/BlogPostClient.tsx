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

function pickPostsForLocale(posts: any[], locale: string) {
  const bySlug = new Map<string, any>();
  for (const post of posts) {
    const slug = post?.attributes?.slug;
    if (!slug) continue;

    const existing = bySlug.get(slug);
    if (!existing) {
      bySlug.set(slug, post);
      continue;
    }

    // Prefer the current locale when it exists, otherwise keep the existing entry.
    const postLocale = post?.attributes?.locale;
    const existingLocale = existing?.attributes?.locale;
    if (postLocale === locale && existingLocale !== locale) {
      bySlug.set(slug, post);
    }
  }
  return Array.from(bySlug.values());
}

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
    setListCards(pickPostsForLocale(blogPostsByUserType[type] || [], locale));
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
