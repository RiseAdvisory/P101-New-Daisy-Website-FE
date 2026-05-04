import { TutorialCard } from '@/components/tutorials/TutorialCard';
import {
  getTutorialArticles,
  type TutorialCategoryWithArticles,
} from '@/lib/constants/tutorials/getTutorialArticles';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { ResourceListingHero } from '@/components/resources/ResourceListingHero';

export const TUTORIAL_PERSONAS = ['business', 'professional'] as const;
export type TutorialPersona = (typeof TUTORIAL_PERSONAS)[number];

interface TutorialsListProps {
  locale: string;
  /**
   * Optional persona filter. When set, only that persona's tutorials
   * render (used by /resources/tutorials/[persona]). When omitted the
   * hub view dedupes across both personas — the SSR fallback for the
   * bare /resources/tutorials URL.
   */
  persona?: TutorialPersona;
}

export function TutorialsList({ locale, persona }: TutorialsListProps) {
  const isRtl = locale === 'ar';
  const heroPersona: TutorialPersona = persona ?? 'business';
  const businessHero = t(tutorialsHeroData[heroPersona], locale);

  const personasToRender: readonly TutorialPersona[] = persona
    ? [persona]
    : TUTORIAL_PERSONAS;

  const seen = new Set<string>();
  const allCategories: { category: TutorialCategoryWithArticles['category']; articles: TutorialCategoryWithArticles['articles'] }[] = [];
  for (const p of personasToRender) {
    const categories = getTutorialArticles(p, locale);
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
      <ResourceListingHero
        locale={locale}
        eyebrow={
          businessHero?.bredCrumbDesription ??
          (isRtl ? 'الموارد / الدروس' : 'Resources / Tutorials')
        }
        title={businessHero?.title ?? ''}
        description={businessHero?.subtitle ?? ''}
        secondaryDescription={businessHero?.description}
      />

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
