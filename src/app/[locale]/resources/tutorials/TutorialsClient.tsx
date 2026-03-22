'use client';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMyContext } from '@/app/MyContext';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TutorialCard } from '@/components/tutorials/TutorialCard';
import {
  getTutorialArticles,
  TutorialCategoryWithArticles,
} from '@/lib/constants/tutorials/getTutorialArticles';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const TutorialsClient = () => {
  const fullPathname = usePathname();
  const locale = useMemo(
    () => getLocaleFromPathname(fullPathname),
    [fullPathname],
  );
  const { userChange: currentPage } = useMyContext();

  const [heroData, setHeroData] = useState<{
    bredCrumbDesription?: string;
    bredCrumbTitle?: string;
    title: string;
    subtitle: string;
    description?: string;
    titleScroll?: string;
  } | null>(null);

  const [categories, setCategories] = useState<TutorialCategoryWithArticles[]>(
    [],
  );

  useEffect(() => {
    // Determine persona — default to business (customer falls back to business)
    let persona: 'business' | 'professional' = 'business';
    if (currentPage === '/professional') persona = 'professional';

    // Load hero data
    const type =
      currentPage === '/professional' ? 'professional' : 'business';
    const hero = tutorialsHeroData[type];
    if (hero) {
      setHeroData(t(hero, locale));
    }

    // Load tutorial articles
    setCategories(getTutorialArticles(persona));
  }, [locale, currentPage]);

  return (
    <>
      <HeroPage
        bredCrumbDesription={heroData?.bredCrumbDesription}
        bredCrumbTitle={heroData?.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={heroData?.title ?? ''}
        description={heroData?.subtitle ?? ''}
        heightScreen={false}
        styleSection="pb-[60px] pt-6 px-[16px]"
        secondDescription={heroData?.description}
        titleScroll={heroData?.titleScroll}
      />
      <div className="bg-[#F8F5F3] px-4 md:px-16 pb-20">
        {categories.map((cat) => (
          <section key={cat.category.slug} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172524] text-center pt-8 pb-10">
              {t(cat.category.label, locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.articles.map((article) => (
                <TutorialCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
