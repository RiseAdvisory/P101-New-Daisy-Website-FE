import { PillarPageData } from '@/lib/constants/pillars';
import { PillarHero } from './PillarHero';
import { KeyTakeaways } from './KeyTakeaways';
import { PillarSection } from './PillarSection';
import { TableOfContents } from './TableOfContents';
import { ClusterArticleGrid } from './ClusterArticleGrid';
import { RelatedPillars } from './RelatedPillars';
import { PillarCTA } from './PillarCTA';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { PillarArticleSchema } from '@/components/seo/PillarArticleSchema';

interface PillarPageTemplateProps {
  data: PillarPageData;
  locale: string;
}

export function PillarPageTemplate({ data, locale }: PillarPageTemplateProps) {
  // Content is static TypeScript data (not user input), safe to render directly
  const introHtml = data.introduction;
  const tocSections = data.sections.map((s) => ({ id: s.id, title: s.title }));
  const baseUrl = `https://www.jointhedaisy.com/${locale}/${data.slug}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Schema */}
      <PageBreadcrumbSchema
        items={[{ name: data.title, url: baseUrl }]}
      />
      <PillarArticleSchema
        title={data.title}
        description={data.metaDescription}
        url={baseUrl}
        datePublished={data.lastUpdated}
        dateModified={data.lastUpdated}
        articleSections={data.sections.map((s) => s.title)}
      />
      {data.faqs.length > 0 && <FaqSchema faqs={data.faqs} />}

      {/* Hero */}
      <PillarHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        readingTime={data.readingTime}
        lastUpdated={data.lastUpdated}
        breadcrumbTitle={data.title}
      />

      {/* Key Takeaways (GEO answer block) */}
      <KeyTakeaways takeaways={data.keyTakeaways} />

      {/* Content area with TOC */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Mobile TOC (collapsible, hidden on desktop, rendered inside TableOfContents) */}
        <div className="lg:hidden">
          <TableOfContents sections={tocSections} />
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
          {/* Main content column */}
          <div>
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24 pb-8">
              <div
                className="blog-content prose-pillar text-lg leading-relaxed text-[#455150]"
                dangerouslySetInnerHTML={{ __html: introHtml }}
              />
            </section>

            {/* Sections */}
            {data.sections.map((section) => (
              <PillarSection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                callout={section.callout}
                relatedLinks={section.relatedLinks}
              />
            ))}

            {/* FAQ */}
            {data.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-24 py-8">
                <h2 className="mb-6 text-2xl font-bold text-[#172524] md:text-3xl">
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
              </section>
            )}
          </div>

          {/* Desktop TOC sidebar column (hidden on mobile via TableOfContents component) */}
          <div className="hidden lg:block">
            <TableOfContents sections={tocSections} />
          </div>
        </div>
      </div>

      {/* Cluster Articles */}
      <ClusterArticleGrid articles={data.clusterArticles} />

      {/* Related Pillars */}
      <RelatedPillars slugs={data.relatedPillarSlugs} />

      {/* Bottom CTA */}
      <PillarCTA />
    </main>
  );
}
