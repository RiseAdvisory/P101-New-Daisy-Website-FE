import Link from 'next/link';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { GlossaryEntry } from '@/lib/constants/glossary/glossaryData';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

function sanitize(html: string): string {
  return typeof window !== 'undefined' ? DOMPurify.sanitize(html) : html;
}

const uiStrings = {
  en: {
    glossary: 'Glossary',
    whatIs: 'What is',
    howCompare: 'How Does Daisy Compare on',
    feature: 'Feature',
    daisy: 'Daisy',
    typicalSolution: 'Typical Solution',
    captionPrefix: 'Feature Comparison: Daisy vs Typical Solutions',
    howImplement: 'How Does Daisy Implement',
    faq: 'Frequently Asked Questions About',
    relatedTerms: 'Related Terms',
    readyToExperience: 'Ready to Experience',
    ctaDescription: 'Start your 14-day free trial and see how Daisy transforms your beauty business.',
    ctaButton: 'Start Free Trial',
    questionMark: '?',
  },
  ar: {
    glossary: 'المصطلحات',
    whatIs: 'ما هو',
    howCompare: 'كيف تتفوق ديزي في',
    feature: 'الميزة',
    daisy: 'ديزي',
    typicalSolution: 'الحلول التقليدية',
    captionPrefix: 'مقارنة الميزات: ديزي مقابل الحلول التقليدية',
    howImplement: 'كيف تطبّق ديزي',
    faq: 'الأسئلة الشائعة حول',
    relatedTerms: 'مصطلحات ذات صلة',
    readyToExperience: 'هل أنت مستعد لتجربة',
    ctaDescription: 'ابدأ تجربتك المجانية لمدة 14 يوماً واكتشف كيف تحوّل ديزي أعمال التجميل الخاصة بك.',
    ctaButton: 'ابدأ التجربة المجانية',
    questionMark: '؟',
  },
};

interface Props {
  entry: GlossaryEntry;
  slug: string;
  locale: string;
  termMap?: Record<string, string>;
}

export function GlossaryPageClient({ entry, slug, locale, termMap }: Props) {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const isRtl = locale === 'ar';

  return (
    <main className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <ComparisonBreadcrumbSchema
        pageName={entry.term}
        pageSlug={slug}
        section="glossary"
      />
      <WebPageSchema
        title={entry.metaTitle}
        description={entry.metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/glossary/${slug}`}
      />
      {entry.faqs.length > 0 && <FaqSchema faqs={entry.faqs} />}

      {/* Hero / Definition */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-[#586968]">
            <Link href={`/${locale}/glossary`} className="hover:text-primary">
              {t.glossary}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#172524]">{entry.term}</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            {t.whatIs} {entry.term}{t.questionMark}
          </h1>
          <p className="text-lg leading-relaxed text-[#455150] [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80" data-geo-answer="true">
            <dfn className="not-italic font-semibold text-[#172524]">
              {entry.term}
            </dfn>{' '}
            <span dangerouslySetInnerHTML={{ __html: sanitize(entry.definition) }} />
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src={`/images/glossary/${slug}.webp`}
              alt={`${entry.term} illustration`}
              width={1440}
              height={810}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Extended Description */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p
          className="text-lg leading-relaxed text-[#455150] [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
          dangerouslySetInnerHTML={{ __html: sanitize(entry.extendedDescription) }}
        />
      </section>

      {/* Key Features Comparison Table */}
      {entry.keyFeatures.length > 0 && (
        <section className="bg-[#F8F5F3] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-[#172524]">
              {t.howCompare} {entry.term}{t.questionMark}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
                <caption className="sr-only">
                  {entry.term} {t.captionPrefix}
                </caption>
                <thead>
                  <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                    <th
                      scope="col"
                      className={`px-6 py-4 ${isRtl ? 'text-right' : 'text-left'} text-sm font-semibold text-[#586968] uppercase tracking-wider`}
                    >
                      {t.feature}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-4 ${isRtl ? 'text-right' : 'text-left'} text-sm font-bold text-primary uppercase tracking-wider`}
                    >
                      {t.daisy}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-4 ${isRtl ? 'text-right' : 'text-left'} text-sm font-semibold text-[#586968] uppercase tracking-wider`}
                    >
                      {t.typicalSolution}
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
          {t.howImplement} {entry.term}{t.questionMark}
        </h2>
        <p
          className="text-lg leading-relaxed text-[#455150] [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
          dangerouslySetInnerHTML={{ __html: sanitize(entry.howDaisyImplements) }}
        />
      </section>

      {/* FAQ */}
      {entry.faqs.length > 0 && (
        <section className="bg-[#F8F5F3] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-[#172524]">
              {t.faq} {entry.term}
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
            {t.relatedTerms}
          </h2>
          <div className="flex flex-wrap gap-3">
            {entry.relatedTerms.map((termSlug) => (
              <Link
                key={termSlug}
                href={`/${locale}/glossary/${termSlug}`}
                className="rounded-full border border-[#E8E9E9] px-4 py-2 text-sm font-medium text-[#455150] transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
              >
                {termMap?.[termSlug] || termSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            {t.readyToExperience} {entry.term}{t.questionMark}
          </h2>
          <p className="mb-6 text-white/80">
            {t.ctaDescription}
          </p>
          <Link
            href={`/${locale}/get-the-app`}
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
