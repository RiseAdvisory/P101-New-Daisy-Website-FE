import { getSolution, getRelatedSolutions } from '@/lib/constants/solutions';
import { SolutionHero } from '@/components/solutionsPage/SolutionHero';
import { ChallengesSection } from '@/components/solutionsPage/ChallengesSection';
import { IndustryFeatures } from '@/components/solutionsPage/IndustryFeatures';
import { SolutionCTA } from '@/components/solutionsPage/SolutionCTA';
import { DaisyDifferentiators } from '@/components/comparePage/DaisyDifferentiators';
import { RelatedPages } from '@/components/comparePage/RelatedPages';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

const uiStrings = {
  en: {
    whatIs: (title: string) =>
      `What Is ${title.replace(/That .+|Powered .+|Built .+|Automated .+|Designed .+|for the .+|with .+|,.*/, '').trim()}?`,
    faqAbout: (title: string) =>
      `Frequently Asked Questions About ${title}`,
    seeComparison:
      'See how Daisy compares in our detailed comparison.',
  },
  ar: {
    whatIs: (title: string) =>
      `ما هو ${title.replace(/الذي .+|المدعوم .+|المصمم .+|مع .+|,.*/, '').trim()}؟`,
    faqAbout: (title: string) =>
      `الأسئلة الشائعة حول ${title}`,
    seeComparison:
      'اطلع على مقارنتنا التفصيلية لمعرفة كيف تتفوق ديزي.',
  },
};

interface Props {
  slug: string;
  locale?: string;
}

export function SolutionsPageClient({ slug, locale = 'en' }: Props) {
  const data = getSolution(slug, locale);
  if (!data) return null;

  const relatedSolutions = getRelatedSolutions(slug, locale);
  const isAr = locale === 'ar';
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;

  const relatedLinks = [
    ...relatedSolutions.map((s) => ({
      title: s.heroTitle,
      url: `/${locale}/solutions/${s.slug}`,
      description: s.metaDescription.slice(0, 120) + '...',
    })),
    ...data.relatedComparisons.map((compSlug) => ({
      title: compSlug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      url: `/${locale}/compare/${compSlug}`,
      description: t.seeComparison,
    })),
  ];

  return (
    <main className="min-h-screen" dir={isAr ? 'rtl' : 'ltr'}>
      <ComparisonBreadcrumbSchema
        pageName={data.heroTitle}
        pageSlug={slug}
        section="solutions"
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/solutions/${slug}`}
      />
      {data.faqs.length > 0 && <FaqSchema faqs={data.faqs} />}

      <SolutionHero title={data.heroTitle} subtitle={data.heroSubtitle} />

      {/* Definition. GEO-optimized answer block */}
      {data.definition && (
        <section className="mx-auto max-w-4xl px-4 py-10">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {t.whatIs(data.heroTitle)}
          </h2>
          <p
            className="text-lg leading-relaxed text-gray-600"
            data-geo-answer="true"
          >
            {data.definition}
          </p>
        </section>
      )}

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-lg leading-relaxed text-gray-600">{data.intro}</p>
      </section>

      {/* Challenges */}
      <ChallengesSection challenges={data.challenges} />

      {/* Features / How Daisy Solves It */}
      <IndustryFeatures features={data.features} locale={locale} />

      {/* Differentiators */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <DaisyDifferentiators />
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {t.faqAbout(data.heroTitle)}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-lg border border-gray-200 bg-white"
              >
                <summary className="cursor-pointer p-4 font-medium text-gray-900">
                  {faq.question}
                </summary>
                <p className="border-t border-gray-100 p-4 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <SolutionCTA />

      {/* Related */}
      {relatedLinks.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedLinks} />
        </section>
      )}
    </main>
  );
}
