'use client';

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
import { Check, X } from 'lucide-react';

interface Props {
  slug: string;
}

export function AlternativePageClient({ slug }: Props) {
  const result = getAlternativePageData(slug);
  if (!result) return null;

  if (result.type === 'alternative') {
    return <AlternativeSinglePage data={result.data} slug={slug} />;
  }

  return <BestAlternativesPage data={result.data} slug={slug} />;
}

function AlternativeSinglePage({
  data,
  slug,
}: {
  data: NonNullable<ReturnType<typeof getAlternativePageData> & { type: 'alternative' }>['data'];
  slug: string;
}) {
  const competitor = getCompetitor(data.competitorSlug);
  if (!competitor) return null;

  const relatedPages = getRelatedAlternativePages(slug);

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
        url={`https://www.jointhedaisy.com/alternative/${slug}`}
      />
      {competitor.faq.length > 0 && <FaqSchema faqs={competitor.faq} />}

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="alternative"
      />

      {/* Pain Points */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Why People Look for {competitor.name} Alternatives
        </h2>
        <div className="space-y-3">
          {data.painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
            >
              <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
              <p className="text-gray-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            How Daisy Compares to {competitor.name}
          </h2>
          <FeatureComparisonTable
            competitorSlug={data.competitorSlug}
            competitorName={competitor.name}
          />
        </div>
      </section>

      {/* Why Switch to Daisy */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Why Switch to Daisy?
        </h2>
        <div className="space-y-3">
          {data.switchingReasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <p className="text-gray-800">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Alternatives */}
      {data.topAlternatives.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Other {competitor.name} Alternatives
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {data.topAlternatives.map((altSlug) => (
                <CompetitorSummaryCard key={altSlug} competitorSlug={altSlug} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Differentiators */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <DaisyDifferentiators />
      </section>

      {/* FAQ */}
      {competitor.faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Frequently Asked Questions
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

      {/* CTA */}
      <SwitchingCTA
        competitorName={competitor.name}
        switchingReasons={competitor.daisySwitchingReasons.slice(0, 3)}
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

function BestAlternativesPage({
  data,
  slug,
}: {
  data: NonNullable<ReturnType<typeof getAlternativePageData> & { type: 'best-alternatives' }>['data'];
  slug: string;
}) {
  const competitor = getCompetitor(data.competitorSlug);
  if (!competitor) return null;

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
        url={`https://www.jointhedaisy.com/alternative/${slug}`}
      />

      <ComparisonHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        variant="best-alternatives"
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-lg text-gray-600">{data.intro}</p>
      </section>

      {/* #1: Daisy */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
              #1 Our Pick
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Daisy</h2>
          </div>
          <p className="mb-4 text-gray-700">
            AI-powered beauty business platform with 24/7 receptionist, cashback
            rewards, marketplace, and native Arabic/English support. The only
            platform that combines operations management with proactive customer
            acquisition.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'AI Receptionist',
              'Cashback Rewards',
              'Arabic + English',
              'White-Label',
              'Marketplace',
              'Flat Pricing',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives List */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Other Top Alternatives
          </h2>
          <div className="space-y-4">
            {data.alternatives.map((altSlug, i) => (
              <CompetitorSummaryCard
                key={altSlug}
                competitorSlug={altSlug}
                rank={i + 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-bold text-blue-900">Our Verdict</h2>
          <p className="text-blue-800">{data.verdict}</p>
        </div>
      </section>

      {/* CTA */}
      <SwitchingCTA competitorName={competitor.name} />
    </main>
  );
}
