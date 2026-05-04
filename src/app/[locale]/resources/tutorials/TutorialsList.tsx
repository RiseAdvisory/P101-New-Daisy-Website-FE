import { TutorialCard } from '@/components/tutorials/TutorialCard';
import {
  getTutorialArticles,
  type TutorialCategoryWithArticles,
} from '@/lib/constants/tutorials/getTutorialArticles';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

interface TutorialsListProps {
  locale: string;
}

const PERSONAS = ['business', 'professional'] as const;

export function TutorialsList({ locale }: TutorialsListProps) {
  const isRtl = locale === 'ar';
  const businessHero = t(tutorialsHeroData.business, locale);

  // Server-render every tutorial in the SSR HTML so each article URL is
  // discoverable from the link graph instead of only via the sitemap.
  // Dedupe by slug across personas so an article tagged for both personas
  // doesn't appear twice.
  const seen = new Set<string>();
  const allCategories: { category: TutorialCategoryWithArticles['category']; articles: TutorialCategoryWithArticles['articles'] }[] = [];
  for (const persona of PERSONAS) {
    const categories = getTutorialArticles(persona, locale);
    for (const cat of categories) {
      const dedupedArticles = cat.articles.filter((a) => {
        if (seen.has(a.slug)) return false;
        seen.add(a.slug);
        return true;
      });
      if (dedupedArticles.length === 0) continue;
      const existing = allCategories.find((c) => c.category.slug === cat.category.slug);
      if (existing) {
        existing.articles.push(...dedupedArticles);
      } else {
        allCategories.push({ category: cat.category, articles: dedupedArticles });
      }
    }
  }

  return (
    <div className="w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      <section className="w-full bg-primary px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#D5D9D9]">
            {businessHero?.bredCrumbDesription ?? (isRtl ? 'الموارد / الدروس' : 'Resources / Tutorials')}
          </p>
          <h1 className="text-white text-[32px] leading-10 font-semibold md:text-[48px] md:leading-[60px]">
            {businessHero?.title ?? ''}
          </h1>
          {businessHero?.subtitle && (
            <p className="mt-4 text-lg text-[#D5D9D9] md:text-xl ltr:font-montserrat">
              {businessHero.subtitle}
            </p>
          )}
          {businessHero?.description && (
            <p className="mt-2 text-base text-[#A8B0AF] ltr:font-montserrat">
              {businessHero.description}
            </p>
          )}
        </div>
      </section>

      <div className="bg-[#F8F5F3] px-4 pb-20 md:px-16">
        {allCategories.map((cat) => (
          <section key={cat.category.slug} className="mb-16">
            <h2 className="pb-10 pt-8 text-center text-3xl font-bold text-[#172524] md:text-4xl">
              {t(cat.category.label, locale)}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
    </div>
  );
}
