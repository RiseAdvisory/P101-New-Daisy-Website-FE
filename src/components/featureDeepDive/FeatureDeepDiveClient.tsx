'use client';

import Link from 'next/link';
import {
  getFeatureDeepDive,
  getRelatedFeatureDeepDives,
} from '@/lib/constants/features/featureDeepDive';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FaqSchema } from '@/components/seo/FaqSchema';

function SoftwareApplicationSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'The Daisy',
    applicationCategory: 'BusinessApplication',
    description,
    url,
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available',
    },
    featureList: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
import { SolutionCTA } from '@/components/solutionsPage/SolutionCTA';
import { RelatedPages } from '@/components/comparePage/RelatedPages';
import { FeatureHero } from './FeatureHero';
import { OverviewSection } from './OverviewSection';
import { SubFeaturesSection } from './SubFeaturesSection';
import { WorkflowSection } from './WorkflowSection';
import { ComparisonHighlight } from './ComparisonHighlight';
import { UseCasesSection } from './UseCasesSection';
import { IntegrationSection } from './IntegrationSection';
import { AiEnhancementSection } from './AiEnhancementSection';
import { NetworkEffectsSection } from './NetworkEffectsSection';
import { DemoPlaceholder } from './DemoPlaceholder';

interface Props {
  userType: 'business' | 'professional';
  slug: string;
}

export function FeatureDeepDiveClient({ userType, slug }: Props) {
  const data = getFeatureDeepDive(userType, slug);
  if (!data) return null;

  const related = getRelatedFeatureDeepDives(userType, slug);
  const userLabel = userType === 'business' ? 'Business' : 'Professional';

  const relatedLinks = related.map((r) => ({
    title: r.categoryName,
    url: `/features/${userType}/${r.slug}`,
    description: r.metaDescription.slice(0, 120) + '...',
  }));

  return (
    <main className="min-h-screen">
      {/* SEO Schemas */}
      <FeaturesBreadcrumbSchema
        pageName={userLabel}
        pageSlug={userType}
        categoryName={data.categoryName}
        categorySlug={slug}
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/features/${userType}/${slug}`}
      />
      {data.faqs.length > 0 && <FaqSchema faqs={data.faqs} />}
      <SoftwareApplicationSchema
        name={data.categoryName}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/features/${userType}/${slug}`}
      />

      {/* Visual Breadcrumb */}
      <div className="bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 pt-28 md:pt-32">
        <nav className="mx-auto max-w-4xl text-sm text-white/60">
          <Link href="/features" className="hover:text-white/80">
            Features
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/features/${userType}`}
            className="hover:text-white/80"
          >
            {userLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{data.categoryName}</span>
        </nav>
      </div>

      {/* Hero */}
      <FeatureHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        stat={data.heroStat}
      />

      {/* Overview + Pain Points + Growth Outcome */}
      <OverviewSection
        overview={data.overview}
        painPoints={data.painPoints}
        growthOutcome={data.growthOutcome}
      />

      {/* Sub-Features */}
      <SubFeaturesSection
        subFeatures={data.subFeatures}
        categoryName={data.categoryName}
      />

      {/* Workflow */}
      <WorkflowSection workflow={data.workflow} />

      {/* Comparison */}
      {data.comparisonHighlights.length > 0 && (
        <ComparisonHighlight comparisons={data.comparisonHighlights} />
      )}

      {/* Use Cases */}
      <UseCasesSection useCases={data.useCases} />

      {/* Integration Points */}
      <IntegrationSection
        integrationPoints={data.integrationPoints}
        userType={userType}
      />

      {/* AI Enhancement — shown for non-AI category pages */}
      {data.aiEnhancement && (
        <AiEnhancementSection
          capabilities={data.aiEnhancement.capabilities}
        />
      )}

      {/* Network Effects — AI category page only */}
      {data.networkEffects && (
        <NetworkEffectsSection
          description={data.networkEffects.description}
          benefits={data.networkEffects.benefits}
        />
      )}

      {/* Demo Placeholder */}
      <DemoPlaceholder categoryName={data.categoryName} />

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-[#E8E9E9] bg-white"
                >
                  <summary className="cursor-pointer p-4 font-medium text-[#172524]">
                    {faq.question}
                  </summary>
                  <p className="border-t border-[#E8E9E9] p-4 text-[#455150]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <SolutionCTA
        headline={`Ready to Experience ${data.categoryName}?`}
        subtext={`See how Daisy's ${data.categoryName} features can transform your ${userType === 'business' ? 'business' : 'career'}. Start your free trial today.`}
      />

      {/* Related */}
      {relatedLinks.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedLinks} />
        </section>
      )}
    </main>
  );
}
