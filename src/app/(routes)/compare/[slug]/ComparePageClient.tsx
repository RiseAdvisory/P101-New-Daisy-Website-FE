'use client';

import { getComparePageData } from '@/lib/constants/competitors/comparisonPages';
import { getCompetitor } from '@/lib/constants/competitors';
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

interface Props {
  slug: string;
}

export function ComparePageClient({ slug }: Props) {
  const result = getComparePageData(slug);
  if (!result) return null;

  if (result.type === 'daisy-vs') {
    return <DaisyVsPage data={result.data} slug={slug} />;
  }

  return <CompetitorVsPage data={result.data} slug={slug} />;
}

function DaisyVsPage({
  data,
  slug,
}: {
  data: NonNullable<ReturnType<typeof getComparePageData> & { type: 'daisy-vs' }>['data'];
  slug: string;
}) {
  const competitor = getCompetitor(data.competitorSlug);
  if (!competitor) return null;

  const relatedPages = getRelatedComparePages(slug);

  // Build quick comparison entries
  const quickEntries = [
    {
      label: 'AI Receptionist',
      daisy: '24/7 Voice + Chat',
      competitor: competitor.aiCapabilities.hasAiReceptionist
        ? 'Basic (limited)'
        : 'Not Available',
    },
    {
      label: 'Arabic Support',
      daisy: 'Native Arabic + English',
      competitor: competitor.gccPresence.hasArabicUI
        ? competitor.gccPresence.arabicQuality === 'native'
          ? 'Native Arabic'
          : 'Translated'
        : 'English Only',
    },
    {
      label: 'Pricing Model',
      daisy: 'Flat pricing, all features',
      competitor: competitor.pricing.startingPrice,
    },
    {
      label: 'Customer Acquisition',
      daisy: 'Marketplace + Cashback + AI Marketing',
      competitor: competitor.features.marketplaceAndDiscovery >= 2
        ? 'Marketplace only'
        : 'Limited / None',
    },
    {
      label: 'GCC Countries',
      daisy: '6 (UAE, KSA, Kuwait, Bahrain, Oman, Qatar)',
      competitor:
        competitor.gccPresence.gccCountries.length > 0
          ? competitor.gccPresence.gccCountries.join(', ')
          : 'None',
    },
    {
      label: 'White-Label',
      daisy: 'Full brand control',
      competitor: 'Not Available',
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
        url={`https://www.jointhedaisy.com/compare/${slug}`}
      />
      {competitor.faq.length > 0 && <FaqSchema faqs={competitor.faq} />}
      <ProductComparisonSchema
        products={[
          {
            name: 'Daisy',
            description: 'AI-powered beauty and wellness platform with cashback, AI receptionist, and white-label branding',
            url: 'https://www.jointhedaisy.com',
            startingPrice: daisyData.pricing.startingPrice,
            features: ['AI Receptionist', 'Cashback Loyalty', 'White-Label', 'Arabic + English', 'No Transaction Fees'],
          },
          {
            name: competitor.name,
            description: `${competitor.name} salon and beauty business management software`,
            startingPrice: competitor.pricing.startingPrice,
            rating: competitor.reviews.length > 0 ? competitor.reviews[0].rating : undefined,
          },
        ]}
        pageTitle={`Daisy vs ${competitor.name} Comparison ${new Date().getFullYear()}`}
        pageUrl={`https://www.jointhedaisy.com/compare/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="daisy-vs"
      />

      {/* TL;DR */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">TL;DR</h2>
          <p className="text-blue-800">{data.tldr}</p>
        </div>
      </section>

      {/* Quick Comparison */}
      <QuickComparisonTable
        entries={quickEntries}
        competitorName={competitor.name}
      />

      {/* Feature Comparison */}
      <FeatureComparisonTable
        competitorSlug={data.competitorSlug}
        competitorName={competitor.name}
      />
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">

          {/* Feature Commentary */}
          <div className="mt-8 space-y-6">
            {Object.entries(data.featureCommentary).map(
              ([category, commentary]) => (
                <div key={category}>
                  <h3 className="mb-2 text-lg font-semibold capitalize text-gray-900">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-gray-600">{commentary}</p>
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
      />

      {/* Pros & Cons */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <ProsConsList
              pros={competitor.competitorStrengths}
              cons={competitor.competitorWeaknesses}
              title={competitor.name}
              heading={`What Are ${competitor.name}'s Strengths and Limitations?`}
            />
            <ProsConsList
              pros={[
                'AI receptionist (24/7, Arabic + English)',
                'Cashback customer acquisition',
                'Full brand control (white-label)',
                'All 6 GCC countries supported',
                'Flat pricing, no hidden fees',
                'Complete business management suite',
              ]}
              cons={[
                'Newer brand (building market presence)',
                'Premium positioning (not the cheapest option)',
              ]}
              title="Daisy"
              heading="What Are Daisy's Strengths and Limitations?"
            />
          </div>
        </div>
      </section>

      {/* Growth vs Operations */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <GrowthVsOperations
          competitorName={competitor.name}
          competitorGrowthScore={competitor.growthVsOperations?.growthScore}
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
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <DaisyDifferentiators />
      </section>

      {/* FAQ */}
      {competitor.faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Frequently Asked Questions About {competitor.name}
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
                  <p className="border-t border-gray-100 p-4 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Objection Handling */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <ObjectionHandling variant="compact" competitorName={competitor.name} />
      </section>

      {/* Switching CTA */}
      <SwitchingCTA
        competitorName={competitor.name}
        switchingReasons={competitor.daisySwitchingReasons.slice(0, 4)}
      />

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedPages} />
        </section>
      )}
    </main>
  );
}

function CompetitorVsPage({
  data,
  slug,
}: {
  data: NonNullable<ReturnType<typeof getComparePageData> & { type: 'competitor-vs' }>['data'];
  slug: string;
}) {
  const competitorA = getCompetitor(data.slugA);
  const competitorB = getCompetitor(data.slugB);
  if (!competitorA || !competitorB) return null;

  const relatedPages = getRelatedComparePages(slug);

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
        url={`https://www.jointhedaisy.com/compare/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="competitor-vs"
      />

      {/* Feature Comparison */}
      <FeatureComparisonTable
        competitorSlug={data.slugA}
        competitorName={competitorA.name}
        secondCompetitor={{ slug: data.slugB, name: competitorB.name }}
        heading={`How Do ${competitorA.name} and ${competitorB.name} Compare on Features?`}
      />

      {/* Verdict */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <VerdictSection
            verdict={data.verdict}
            daisyReasons={data.whoShouldChooseA}
            competitorReasons={data.whoShouldChooseB}
            competitorName={competitorB.name}
          />
        </div>
      </section>

      {/* Why Daisy Is Better Than Both */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-green-900">
            Why Choose Daisy Over Both?
          </h2>
          <p className="text-lg text-green-800">{data.daisyPitch}</p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <DaisyDifferentiators />
        </div>
      </section>

      {/* CTA */}
      <SwitchingCTA competitorName={`${competitorA.name} and ${competitorB.name}`} />

      {/* Related */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedPages} />
        </section>
      )}
    </main>
  );
}
