import Link from 'next/link';
import { getGlossaryEntry } from '@/lib/constants/glossary/glossaryData';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

interface Props {
  slug: string;
}

export function GlossaryPageClient({ slug }: Props) {
  const entry = getGlossaryEntry(slug);
  if (!entry) return null;

  return (
    <main className="min-h-screen bg-white">
      <ComparisonBreadcrumbSchema
        pageName={entry.term}
        pageSlug={slug}
        section="glossary"
      />
      <WebPageSchema
        title={entry.metaTitle}
        description={entry.metaDescription}
        url={`https://www.jointhedaisy.com/glossary/${slug}`}
      />
      {entry.faqs.length > 0 && <FaqSchema faqs={entry.faqs} />}

      {/* Hero / Definition */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-[#586968]">
            <Link href="/glossary" className="hover:text-primary">
              Glossary
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#172524]">{entry.term}</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            What is {entry.term}?
          </h1>
          <p className="text-lg leading-relaxed text-[#455150]" data-geo-answer="true">
            <dfn className="not-italic font-semibold text-[#172524]">
              {entry.term}
            </dfn>{' '}
            {entry.definition}
          </p>
        </div>
      </section>

      {/* Extended Description */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg leading-relaxed text-[#455150]">
          {entry.extendedDescription}
        </p>
      </section>

      {/* Key Features Comparison Table */}
      {entry.keyFeatures.length > 0 && (
        <section className="bg-[#F8F5F3] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-[#172524]">
              How Does Daisy Compare on {entry.term}?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
                <caption className="sr-only">
                  {entry.term} Feature Comparison: Daisy vs Typical Solutions
                </caption>
                <thead>
                  <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider"
                    >
                      Daisy
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                    >
                      Typical Solution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entry.keyFeatures.map((feature, index) => (
                    <tr
                      key={feature.label}
                      className={
                        index % 2 === 0
                          ? 'bg-white'
                          : 'bg-[#F8F5F3]/50'
                      }
                    >
                      <td className="border-b border-[#E8E9E9] px-6 py-4 text-sm font-medium text-[#172524]">
                        {feature.label}
                      </td>
                      <td className="border-b border-[#E8E9E9] px-6 py-4 text-sm font-medium text-primary">
                        {feature.daisy}
                      </td>
                      <td className="border-b border-[#E8E9E9] px-6 py-4 text-sm text-[#586968]">
                        {feature.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* How Daisy Implements */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          How Does Daisy Implement {entry.term}?
        </h2>
        <p className="text-lg leading-relaxed text-[#455150]">
          {entry.howDaisyImplements}
        </p>
      </section>

      {/* FAQ */}
      {entry.faqs.length > 0 && (
        <section className="bg-[#F8F5F3] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-[#172524]">
              Frequently Asked Questions About {entry.term}
            </h2>
            <div className="space-y-4">
              {entry.faqs.map((faq, i) => (
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

      {/* Related Terms */}
      {entry.relatedTerms.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold text-[#172524]">
            Related Terms
          </h2>
          <div className="flex flex-wrap gap-3">
            {entry.relatedTerms.map((termSlug) => (
              <Link
                key={termSlug}
                href={`/glossary/${termSlug}`}
                className="rounded-full border border-[#E8E9E9] px-4 py-2 text-sm font-medium text-[#455150] transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
              >
                {termSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to Experience {entry.term}?
          </h2>
          <p className="mb-6 text-white/80">
            Start your 14-day free trial and see how Daisy transforms your
            beauty business.
          </p>
          <a
            href="/get-the-app"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
