'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { updatesHeroData, updatesPostsByUserType } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

export const UpdatesClient = () => {
  const [heroUpdate, setHeroUpdate] = useState<{
    title: string;
    subtitle: string;
    description?: string;
    bredCrumbDesription?: string;
    bredCrumbTitle?: string;
    breadcrumbs?: string;
  } | null>(null);
  const [listCard, setListCards] = useState<any[] | null>(null);

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let type = 'customer';
    if (currentPage === '/customer') type = 'customer';
    if (currentPage === '/business') type = 'business';
    if (currentPage === '/professional') type = 'professional';

    const hero = updatesHeroData[type];
    if (hero) {
      const heroData = t(hero, lang);
      setHeroUpdate(heroData);
    }

    const posts = updatesPostsByUserType[type] || [];
    setListCards(posts);
    choosePathStrapi(`/resources/updates/${type}`);
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
