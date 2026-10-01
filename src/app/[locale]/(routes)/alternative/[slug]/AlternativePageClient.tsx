import { getAlternativePageData } from '@/lib/constants/competitors/comparisonPages';
import { getRelatedAlternativePages } from '@/lib/constants/competitors/comparisonPages';
import { getCompetitor } from '@/lib/constants/competitors';
import { ComparisonHero } from '@/components/comparePage/ComparisonHero';
import { FeatureComparisonTable } from '@/components/comparePage/FeatureComparisonTable';
import { CompetitorSummaryCard } from '@/components/comparePage/CompetitorSummaryCard';
import { DaisyDifferentiators } from '@/components/comparePage/DaisyDifferentiators';
import { SwitchingCTA } from '@/components/comparePage/SwitchingCTA';
import { ObjectionHandling } from '@/components/comparePage/ObjectionHandling';
import { RelatedPages } from '@/components/comparePage/RelatedPages';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { renderSafeHtml } from '@/lib/utils/htmlContent';
import { Check, X } from 'lucide-react';

interface Props {
  slug: string;
  locale?: string;
}


const uiStrings = {
  en: {
    answer: (name: string) =>
      `The Daisy is an alternative to ${name} built for GCC beauty businesses: a 24/7 AI receptionist across voice, WhatsApp and Instagram, cashback-driven customer acquisition, and Arabic and English treated as equals with full RTL.`,
    whyLook: (name: string) => `Why People Look for ${name} Alternatives`,
    howCompares: (name: string) => `How Daisy Compares to ${name}`,
    whySwitch: 'Why Switch to Daisy?',
    otherAlternatives: (name: string) => `Other ${name} Alternatives`,
    faq: 'Frequently Asked Questions',
    topAlternatives: (name: string) => `Top Alternatives to ${name}`,
  },
  ar: {
    answer: (name: string) =>
      `ديزي بديل لـ ${name} مبني لأعمال التجميل في الخليج: موظف استقبال ذكي على مدار الساعة عبر المكالمات وواتساب وإنستغرام، واستقطاب عملاء عبر الكاشباك، والعربية والإنجليزية بأولوية متساوية مع دعم كامل للكتابة من اليمين إلى اليسار.`,
    whyLook: (name: string) => `لماذا يبحث البعض عن بدائل لـ ${name}`,
    howCompares: (name: string) => `كيف تقارن ديزي مع ${name}`,
    whySwitch: 'لماذا الانتقال إلى ديزي؟',
    otherAlternatives: (name: string) => `بدائل أخرى لـ ${name}`,
    faq: 'الأسئلة الشائعة',
    topAlternatives: (name: string) => `أبرز البدائل لـ ${name}`,
  },
};

type UiStrings = (typeof uiStrings)['en'];
const stringsFor = (locale: string): UiStrings =>
  (uiStrings as Record<string, UiStrings>)[locale] || uiStrings.en;

export function AlternativePageClient({ slug, locale = 'en' }: Props) {
  const result = getAlternativePageData(slug, locale);
  if (!result) return null;

  if (result.type === 'alternative') {
    return <AlternativeSinglePage data={result.data} slug={slug} locale={locale} />;
  }

  return <BestAlternativesPage data={result.data} slug={slug} locale={locale} />;
}

function AlternativeSinglePage({
  data,
  slug,
  locale = 'en',
}: {
  data: NonNullable<ReturnType<typeof getAlternativePageData> & { type: 'alternative' }>['data'];
  slug: string;
  locale?: string;
}) {
  const competitor = getCompetitor(data.competitorSlug, locale);
  if (!competitor) return null;
  const t = stringsFor(locale);

  const relatedPages = getRelatedAlternativePages(slug, 4, locale);
  // Add cross-link to the compare page
  const compareLink = {
    title:
      locale === 'ar'
        ? `ديزي مقابل ${competitor.name}: مقارنة كاملة`
        : `Daisy vs ${competitor.name}. Full Comparison`,
    url: `/${locale}/compare/daisy-vs-${data.competitorSlug}`,
    description:
      locale === 'ar'
        ? `مقارنة تفصيلية ميزة بميزة بين ديزي و${competitor.name}.`
        : `Detailed feature-by-feature comparison of Daisy and ${competitor.name}.`,
  };
  const allRelatedPages = [compareLink, ...relatedPages];

  return (
    <main className="min-h-screen">
      <ComparisonBreadcrumbSchema
        pageName={`${competitor.name} Alternative`}
        pageSlug={slug}
        section="alternative"
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/alternative/${slug}`}
      />
      {competitor.faq.length > 0 && <FaqSchema faqs={competitor.faq} />}

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="alternative"
        locale={locale}
      />

      {/* Answer block for AI extraction */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div
          className="text-lg leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{
            __html: renderSafeHtml(
              t.answer(competitor.name),
            ),
          }}
        />
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {t.whyLook(competitor.name)}
        </h2>
        <div className="space-y-3">
          {data.painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
            >
              <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: renderSafeHtml(point) }}
            />
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {t.howCompares(competitor.name)}
          </h2>
          <FeatureComparisonTable
            competitorSlug={data.competitorSlug}
            competitorName={competitor.name}
            locale={locale}
          />
        </div>
      </section>

      {/* Why Switch to Daisy */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {t.whySwitch}
        </h2>
        <div className="space-y-3">
          {data.switchingReasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <div
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: renderSafeHtml(reason) }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Other Alternatives */}
      {data.topAlternatives.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {t.otherAlternatives(competitor.name)}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {data.topAlternatives.map((altSlug) => (
                <CompetitorSummaryCard key={altSlug} competitorSlug={altSlug} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Differentiators */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <DaisyDifferentiators locale={locale} />
      </section>

      {/* FAQ */}
      {competitor.faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {t.faq}
            </h2>
            <div className="space-y-4">
              {competitor.faq.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-gray-200 bg-white"
                >
                  <summary className="cursor-pointer p-4 font-medium text-gray-900">
                    {faq.question}
                  </summary>
                  <div
                    className="border-t border-gray-100 p-4 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: renderSafeHtml(faq.answer) }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Objection Handling */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <ObjectionHandling variant="compact" competitorName={competitor.name} locale={locale} />
      </section>

      {/* CTA */}
      <SwitchingCTA
        competitorName={competitor.name}
        switchingReasons={competitor.daisySwitchingReasons.slice(0, 3)}
        locale={locale}
      />

      {/* Related Pages */}
      {allRelatedPages.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={allRelatedPages} locale={locale} />
        </section>
      )}
    </main>
  );
}

function BestAlternativesPage({
  data,
  slug,
  locale = 'en',
}: {
  data: NonNullable<ReturnType<typeof getAlternativePageData> & { type: 'best-alternatives' }>['data'];
  slug: string;
  locale?: string;
}) {
  const competitor = getCompetitor(data.competitorSlug, locale);
  if (!competitor) return null;
  const t = stringsFor(locale);

  return (
    <main className="min-h-screen">
      <ComparisonBreadcrumbSchema
        pageName={`Best ${competitor.name} Alternatives`}
        pageSlug={slug}
        section="alternative"
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/alternative/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="best-alternatives"
        locale={locale}
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div
          className="text-lg text-gray-600"
          dangerouslySetInnerHTML={{ __html: renderSafeHtml(data.intro) }}
        />
      </section>

      {/* Alternatives List */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {t.topAlternatives(competitor.name)}
          </h2>
          <div className="space-y-4">
            {data.alternatives.map((altSlug) => (
              <CompetitorSummaryCard
                key={altSlug}
                competitorSlug={altSlug}
                bestFor={data.bestFor[altSlug]}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Daisy Edge — contextual intro + specific differentiators */}
      <section className="mx-auto max-w-4xl px-4 pt-12 pb-4">
        <div
          className="text-lg text-gray-600"
          dangerouslySetInnerHTML={{ __html: renderSafeHtml(data.daisyEdge) }}
        />
      </section>

      <DaisyDifferentiators locale={locale} />

      {/* CTA */}
      <SwitchingCTA competitorName={competitor.name} locale={locale} />
    </main>
  );
}
