import Link from 'next/link';
import Image from 'next/image';
import { GuideData, guideData } from '@/lib/constants/guides/guideData';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { ComparisonBreadcrumbSchema } from '@/components/seo/ComparisonBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { renderSafeHtml } from '@/lib/utils/htmlContent';

interface Props {
  guide: GuideData;
  locale: string;
}


const uiStrings = {
  en: {
    guides: 'Guides',
    whyMatters: 'Why This Matters',
    steps: 'Step-by-Step Guide',
    howDaisyHelps: 'How Does Daisy Help?',
    faq: 'Frequently Asked Questions',
    related: 'Related Guides',
    ready: 'Ready to Get Started?',
    trial: 'Try Daisy free for 14 days. No credit card required.',
    start: 'Start Free Trial',
  },
  ar: {
    guides: 'الأدلة',
    whyMatters: 'لماذا يهم هذا',
    steps: 'دليل خطوة بخطوة',
    howDaisyHelps: 'كيف تساعدك ديزي؟',
    faq: 'الأسئلة الشائعة',
    related: 'أدلة ذات صلة',
    ready: 'مستعد للبدء؟',
    trial: 'جرّب ديزي مجاناً لمدة 14 يوماً. لا حاجة لبطاقة ائتمان.',
    start: 'ابدأ تجربتك المجانية',
  },
};

/** Related-guide label: the guide's own title in this locale, not its slug. */
function relatedGuideTitle(slug: string, locale: string): string {
  const list = guideData[locale as keyof typeof guideData] ?? guideData.en;
  const match = list.find((g) => g.slug === slug);
  return match?.title ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function GuidesPageClient({ guide, locale }: Props) {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const slug = guide.slug;

  return (
    <main className="min-h-screen bg-white">
      <ComparisonBreadcrumbSchema
        pageName={guide.title}
        pageSlug={slug}
        section="guides"
      />
      <WebPageSchema
        title={guide.metaTitle}
        description={guide.metaDescription}
        url={`https://www.jointhedaisy.com/guides/${slug}`}
      />
      <HowToSchema
        title={guide.title}
        description={guide.answer}
        steps={guide.steps}
      />
      {guide.faqs.length > 0 && <FaqSchema faqs={guide.faqs} />}

      {/* Hero */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-[#586968]">
            <Link href={`/${locale}/guides`} className="hover:text-primary">
              {t.guides}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#172524]">{guide.title}</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            {guide.title}
          </h1>
          <div
            className="text-lg leading-relaxed text-[#455150]"
            data-geo-answer="true"
            dangerouslySetInnerHTML={{ __html: renderSafeHtml(guide.answer) }}
          />
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src={`/images/guides/${slug}.webp`}
              alt={guide.title}
              width={1440}
              height={810}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem Explained */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          {t.whyMatters}
        </h2>
        <p className="text-lg leading-relaxed text-[#455150]">
          <span
            dangerouslySetInnerHTML={{ __html: renderSafeHtml(guide.problemExplained) }}
          />
        </p>
      </section>

      {/* Steps */}
      <section className="bg-[#F8F5F3] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-[#172524]">
            {t.steps}
          </h2>
          <ol className="space-y-6">
            {guide.steps.map((step, index) => (
              <li
                key={index}
                className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#172524]">
                    {step.name}
                  </h3>
                </div>
                <div
                  className="ml-12 text-[#455150]"
                  dangerouslySetInnerHTML={{ __html: renderSafeHtml(step.text) }}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How Daisy Helps */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          {t.howDaisyHelps}
        </h2>
        <div className="rounded-2xl border border-primaryBtn/30 bg-primary/5 p-6 md:p-8">
          <p
            className="text-lg leading-relaxed text-[#455150]"
            dangerouslySetInnerHTML={{ __html: renderSafeHtml(guide.howDaisyHelps) }}
          />
        </div>
      </section>

      {/* FAQ */}
      {guide.faqs.length > 0 && (
        <section className="bg-[#F8F5F3] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-[#172524]">
              {t.faq}
            </h2>
            <div className="space-y-4">
              {guide.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-[#E8E9E9] bg-white"
                >
                  <summary className="cursor-pointer p-4 font-medium text-[#172524]">
                    {faq.question}
                  </summary>
                  <div
                    className="border-t border-[#E8E9E9] p-4 text-[#455150]"
                    dangerouslySetInnerHTML={{ __html: renderSafeHtml(faq.answer) }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Guides */}
      {guide.relatedGuides.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold text-[#172524]">
            {t.related}
          </h2>
          <div className="flex flex-wrap gap-3">
            {guide.relatedGuides.map((relatedSlug) => (
              <Link
                key={relatedSlug}
                href={`/${locale}/guides/${relatedSlug}`}
                className="rounded-full border border-[#E8E9E9] px-4 py-2 text-sm font-medium text-[#455150] transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
              >
                {relatedGuideTitle(relatedSlug, locale)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            {t.ready}
          </h2>
          <p className="mb-6 text-white/80">
            {t.trial}
          </p>
          <Link
            href={`/${locale}/get-the-app`}
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            {t.start}
          </Link>
        </div>
      </section>
    </main>
  );
}
