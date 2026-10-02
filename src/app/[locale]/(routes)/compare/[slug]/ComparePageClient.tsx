import { getComparePageData } from '@/lib/constants/competitors/comparisonPages';
import {
  getCompetitor,
  featureRatingLabel,
  featureCategoryLabel,
} from '@/lib/constants/competitors';
import { getRelatedComparePages } from '@/lib/constants/competitors/comparisonPages';
import { ComparisonHero } from '@/components/comparePage/ComparisonHero';
import { QuickComparisonTable } from '@/components/comparePage/QuickComparisonTable';
import { FeatureComparisonTable } from '@/components/comparePage/FeatureComparisonTable';
import { PricingComparisonCard } from '@/components/comparePage/PricingComparisonCard';
import { ProsConsList } from '@/components/comparePage/ProsConsList';
import { VerdictSection } from '@/components/comparePage/VerdictSection';
import { DaisyDifferentiators } from '@/components/comparePage/DaisyDifferentiators';
import { GrowthVsOperations } from '@/components/comparePage/GrowthVsOperations';
import { ObjectionHandling } from '@/components/comparePage/ObjectionHandling';
import { SwitchingCTA } from '@/components/comparePage/SwitchingCTA';
import { RelatedPages } from '@/components/comparePage/RelatedPages';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { ProductComparisonSchema } from '@/components/seo/ProductComparisonSchema';
import { daisyData } from '@/lib/constants/competitors/competitorData';
import { renderSafeHtml } from '@/lib/utils/htmlContent';

interface Props {
  slug: string;
  locale?: string;
}


const GCC_AR: Record<string, string> = {
  UAE: 'الإمارات',
  KSA: 'السعودية',
  Qatar: 'قطر',
  Oman: 'عُمان',
  Bahrain: 'البحرين',
  Kuwait: 'الكويت',
};

const uiStrings = {
  en: {
    tldr: 'TL;DR',
    aiReceptionist: 'AI Receptionist',
    arabicSupport: 'Arabic Support',
    pricingModel: 'Pricing Model',
    customerAcquisition: 'Customer Acquisition',
    gccCountries: 'GCC Countries',
    whiteLabel: 'White-Label',
    daisyAi: 'WhatsApp, Instagram and booking site, 24/7',
    daisyArabic: 'Native Arabic + English',
    daisyPricing: 'Flat pricing, all features',
    daisyAcquisition: 'Marketplace + Cashback + AI Marketing',
    // Founder confirmed 2026-10-02 that Daisy is live in all six GCC countries.
    daisyGcc: 'Live in all six GCC countries',
    daisyWhiteLabel: 'Full brand control',
    noAiReceptionist: 'No AI receptionist published',
    aiReceptionistPublished: 'Publishes an AI receptionist',
    arabicUi: 'Arabic UI available',
    noArabicUi: 'No Arabic UI published',
    marketplaceDiscovery: 'Marketplace discovery',
    limitedNone: 'Limited / None',
    none: 'None',
    country: (c: string) => c,
    competitorStrengths: (name: string) => `What Are ${name}'s Strengths and Limitations?`,
    daisyStrengths: "What Are Daisy's Strengths and Limitations?",
    daisyPros: [
      'AI receptionist (24/7, Arabic + English)',
      'Cashback customer acquisition',
      'Full brand control (white-label)',
      'Live in all six GCC countries',
      'One flat price, no transaction fee and no marketplace commission',
      'Complete business management suite',
    ],
    daisyCons: [
      'Newer brand (building market presence)',
      'Premium positioning (not the cheapest option)',
    ],
    daisy: 'Daisy',
    faqAbout: (name: string) => `Frequently Asked Questions About ${name}`,
    whyBoth: 'Why Choose Daisy Over Both?',
    featuresVs: (a: string, b: string) => `How Do ${a} and ${b} Compare on Features?`,
    and: (a: string, b: string) => `${a} and ${b}`,
  },
  ar: {
    tldr: 'باختصار',
    aiReceptionist: 'موظف الاستقبال الذكي',
    arabicSupport: 'دعم اللغة العربية',
    pricingModel: 'نموذج التسعير',
    customerAcquisition: 'استقطاب العملاء',
    gccCountries: 'دول الخليج',
    whiteLabel: 'وايت ليبل',
    daisyAi: 'واتساب وإنستغرام وصفحة الحجز، على مدار الساعة',
    daisyArabic: 'العربية والإنجليزية بأولوية متساوية',
    daisyPricing: 'سعر ثابت يشمل كل الميزات',
    daisyAcquisition: 'سوق + كاشباك + تسويق بالذكاء الاصطناعي',
    daisyGcc: 'متاحة في دول الخليج الست',
    daisyWhiteLabel: 'تحكم كامل بالعلامة التجارية',
    noAiReceptionist: 'لا يوجد موظف استقبال ذكي منشور',
    aiReceptionistPublished: 'تنشر موظف استقبال ذكي',
    arabicUi: 'واجهة عربية متاحة',
    noArabicUi: 'لا توجد واجهة عربية منشورة',
    marketplaceDiscovery: 'الاكتشاف عبر السوق',
    limitedNone: 'محدود / لا يوجد',
    none: 'لا يوجد',
    country: (c: string) => GCC_AR[c] ?? c,
    competitorStrengths: (name: string) => `نقاط قوة ${name} وما يستحق الموازنة`,
    daisyStrengths: 'نقاط قوة ديزي وما يستحق الموازنة',
    daisyPros: [
      'موظف استقبال ذكي على مدار الساعة بالعربية والإنجليزية',
      'استقطاب العملاء عبر الكاشباك',
      'تحكم كامل بعلامتك التجارية (وايت ليبل)',
      'متاحة في دول الخليج الست',
      'سعر واحد ثابت، دون رسوم معاملات ودون عمولة سوق',
      'منظومة متكاملة لإدارة الأعمال',
    ],
    daisyCons: [
      'علامة أحدث (تبني حضورها في السوق)',
      'تموضع مميز (ليست الخيار الأرخص)',
    ],
    daisy: 'ديزي',
    faqAbout: (name: string) => `الأسئلة الشائعة حول ${name}`,
    whyBoth: 'لماذا ديزي بدلاً من كليهما؟',
    featuresVs: (a: string, b: string) => `كيف يقارن ${a} و${b} من حيث الميزات؟`,
    and: (a: string, b: string) => `${a} و${b}`,
  },
};

type UiStrings = (typeof uiStrings)['en'];
const stringsFor = (locale: string): UiStrings =>
  (uiStrings as Record<string, UiStrings>)[locale] || uiStrings.en;

export function ComparePageClient({ slug, locale = 'en' }: Props) {
  const result = getComparePageData(slug, locale);
  if (!result) return null;

  if (result.type === 'daisy-vs') {
    return <DaisyVsPage data={result.data} slug={slug} locale={locale} />;
  }

  return <CompetitorVsPage data={result.data} slug={slug} locale={locale} />;
}

function DaisyVsPage({
  data,
  slug,
  locale = 'en',
}: {
  data: NonNullable<ReturnType<typeof getComparePageData> & { type: 'daisy-vs' }>['data'];
  slug: string;
  locale?: string;
}) {
  const competitor = getCompetitor(data.competitorSlug, locale);
  if (!competitor) return null;
  const t = stringsFor(locale);

  const relatedPages = getRelatedComparePages(slug, 4, locale);

  // Build quick comparison entries
  const quickEntries = [
    {
      label: t.aiReceptionist,
      daisy: t.daisyAi,
      // Never a fixed pejorative: describe the channels the competitor's AI
      // actually covers. 'Basic (limited)' capped every rival at "basic"
      // regardless of what their record said.
      // "AI Concierge" is Fresha's product name; it was printed here for
      // every competitor with an AI receptionist, Booksy and DINGG included.
      competitor: competitor.aiCapabilities.hasAiReceptionist
        ? t.aiReceptionistPublished
        : t.noAiReceptionist,
    },
    {
      label: t.arabicSupport,
      daisy: t.daisyArabic,
      // 'Translated' was an unsourced quality downgrade published as fact.
      // Report only what we can substantiate: whether an Arabic UI exists.
      competitor: competitor.gccPresence.hasArabicUI
        ? t.arabicUi
        : t.noArabicUi,
    },
    {
      label: t.pricingModel,
      daisy: t.daisyPricing,
      competitor: competitor.pricing.startingPrice,
    },
    {
      label: t.customerAcquisition,
      daisy: t.daisyAcquisition,
      competitor: competitor.features.marketplaceAndDiscovery >= 2
        ? t.marketplaceDiscovery
        : t.limitedNone,
    },
    {
      label: t.gccCountries,
      // No win claimed: rivals such as Fresha also operate across the GCC,
      // so a market count is not an advantage to assert.
      daisy: t.daisyGcc,
      competitor:
        competitor.gccPresence.gccCountries.length > 0
          ? competitor.gccPresence.gccCountries.map(t.country).join(locale === 'ar' ? '، ' : ', ')
          : t.none,
    },
    {
      // Was hardcoded to 'Not Available' for every competitor, with no data
      // lookup at all - a flat assertion about each rival that nothing backed.
      label: t.whiteLabel,
      daisy: t.daisyWhiteLabel,
      // Derived, not asserted. brandingAndWhiteLabel is an editorial rating we
      // assign, so this only claims a difference in our own assessment.
      daisyWins:
        competitor.features.brandingAndWhiteLabel <
        daisyData.features.brandingAndWhiteLabel,
      competitor: featureRatingLabel(competitor.features.brandingAndWhiteLabel, locale),
    },
  ];

  return (
    <main className="min-h-screen">
      <ComparisonBreadcrumbSchema
        pageName={`Daisy vs ${competitor.name}`}
        pageSlug={slug}
        section="compare"
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/compare/${slug}`}
      />
      {competitor.faq.length > 0 && <FaqSchema faqs={competitor.faq} />}
      <ProductComparisonSchema
        products={[
          {
            name: 'Daisy',
            description: 'AI-powered beauty and wellness platform with cashback, AI receptionist, and branded booking pages',
            url: 'https://www.jointhedaisy.com',
            startingPrice: daisyData.pricing.startingPrice,
            features: ['AI Receptionist', 'Cashback Loyalty', 'White-Label', 'Arabic + English', 'No Transaction Fees'],
          },
          {
            name: competitor.name,
            description: competitor.description,
        url: competitor.website,
            startingPrice: competitor.pricing.startingPrice,
            // No rating passed: a single cherry-picked platform score is not an
        // aggregate, and we have no sourced mean to publish for a competitor.
          },
        ]}
        pageTitle={`Daisy vs ${competitor.name} Comparison ${new Date().getFullYear()}`}
        pageUrl={`https://www.jointhedaisy.com/compare/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="daisy-vs"
        locale={locale}
      />

      {/* TL;DR */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">{t.tldr}</h2>
          <p className="text-blue-800" dangerouslySetInnerHTML={{ __html: renderSafeHtml(data.tldr) }} />
        </div>
      </section>

      {/* Quick Comparison */}
      <QuickComparisonTable
        entries={quickEntries}
        competitorName={competitor.name}
        locale={locale}
      />

      {/* Feature Comparison */}
      <FeatureComparisonTable
        competitorSlug={data.competitorSlug}
        competitorName={competitor.name}
        locale={locale}
      />
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">

          {/* Feature Commentary */}
          <div className="mt-8 space-y-6">
            {Object.entries(data.featureCommentary).map(
              ([category, commentary]) => (
                <div key={category}>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {featureCategoryLabel(category, locale)}
                  </h3>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: renderSafeHtml(commentary) }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingComparisonCard
        competitorSlug={data.competitorSlug}
        competitorName={competitor.name}
        locale={locale}
      />

      {/* Pros & Cons */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <ProsConsList
              pros={competitor.competitorStrengths}
              cons={competitor.competitorWeaknesses}
              title={competitor.name}
              heading={t.competitorStrengths(competitor.name)}
              locale={locale}
            />
            <ProsConsList
              pros={t.daisyPros}
              cons={t.daisyCons}
              title={t.daisy}
              heading={t.daisyStrengths}
              locale={locale}
            />
          </div>
        </div>
      </section>

      {/* Growth vs Operations */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <GrowthVsOperations
          competitorName={competitor.name}
          competitorGrowthScore={competitor.growthVsOperations?.growthScore}
          locale={locale}
        />
      </section>

      {/* Verdict */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <VerdictSection
            verdict={data.verdict}
            daisyReasons={data.whoShouldChooseDaisy}
            competitorReasons={data.whoShouldChooseCompetitor}
            competitorName={competitor.name}
            locale={locale}
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <DaisyDifferentiators locale={locale} />
      </section>

      {/* FAQ */}
      {competitor.faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {t.faqAbout(competitor.name)}
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

      {/* Switching CTA */}
      <SwitchingCTA
        competitorName={competitor.name}
        switchingReasons={competitor.daisySwitchingReasons.slice(0, 4)}
        locale={locale}
      />

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedPages} locale={locale} />
        </section>
      )}
    </main>
  );
}

function CompetitorVsPage({
  data,
  slug,
  locale = 'en',
}: {
  data: NonNullable<ReturnType<typeof getComparePageData> & { type: 'competitor-vs' }>['data'];
  slug: string;
  locale?: string;
}) {
  const competitorA = getCompetitor(data.slugA, locale);
  const competitorB = getCompetitor(data.slugB, locale);
  if (!competitorA || !competitorB) return null;
  const t = stringsFor(locale);

  const relatedPages = getRelatedComparePages(slug, 4, locale);

  return (
    <main className="min-h-screen">
      <ComparisonBreadcrumbSchema
        pageName={`${competitorA.name} vs ${competitorB.name}`}
        pageSlug={slug}
        section="compare"
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/compare/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="competitor-vs"
        locale={locale}
      />

      {/* Feature Comparison */}
      <FeatureComparisonTable
        competitorSlug={data.slugA}
        competitorName={competitorA.name}
        secondCompetitor={{ slug: data.slugB, name: competitorB.name }}
        heading={t.featuresVs(competitorA.name, competitorB.name)}
        locale={locale}
      />

      {/* Verdict */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <VerdictSection
            verdict={data.verdict}
            daisyReasons={data.whoShouldChooseA}
            competitorReasons={data.whoShouldChooseB}
            competitorName={competitorB.name}
            // The left list is competitor A's reasons. Without this it rendered
            // under "Choose Daisy if..." - presenting A's selling points as Daisy's.
            optionAName={competitorA.name}
            locale={locale}
          />
        </div>
      </section>

      {/* Why Daisy Is Better Than Both */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-green-900">
            {t.whyBoth}
          </h2>
          <p
            className="text-lg text-green-800"
            dangerouslySetInnerHTML={{ __html: renderSafeHtml(data.daisyPitch) }}
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <DaisyDifferentiators locale={locale} />
        </div>
      </section>

      {/* CTA */}
      <SwitchingCTA competitorName={t.and(competitorA.name, competitorB.name)} locale={locale} />

      {/* Related */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedPages} locale={locale} />
        </section>
      )}
    </main>
  );
}
