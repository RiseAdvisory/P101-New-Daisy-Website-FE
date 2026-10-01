import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import Link from 'next/link';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getComparisonPagesI18n } from '@/lib/constants/competitors/comparisonPages';
import { getCompetitor } from '@/lib/constants/competitors';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'مقارنات ديزي: كيف نقارن | ديزي'
      : 'Daisy Comparisons. See How We Stack Up | The Daisy',
    description: isAr
      ? 'قارن ديزي مع أفضل برامج إدارة الصالونات. مقارنات مفصلة بالميزات والأسعار والقدرات.'
      : 'Compare The Daisy vs Fresha, Booksy, Vagaro, GlossGenius, and more. Side-by-side features, pricing, and honest verdicts to find the best salon software.',
    keywords: [
      'salon software comparison',
      'beauty booking comparison',
      'daisy vs fresha',
      'daisy vs booksy',
      'salon software reviews',
    ],
    openGraph: {
      title: isAr
        ? 'مقارنات ديزي: كيف نقارن | ديزي'
        : 'Daisy Comparisons. See How We Stack Up | The Daisy',
      description: isAr
        ? 'قارن ديزي مع أفضل برامج إدارة الصالونات. مقارنات مفصلة بالميزات والأسعار والقدرات.'
        : 'Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis, pricing breakdowns, and honest verdicts.',
      url: `https://www.jointhedaisy.com/${locale}/compare`,
      type: 'website',
      images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'مقارنات ديزي: كيف نقارن | ديزي'
        : 'Daisy Comparisons. See How We Stack Up | The Daisy',
      description: isAr
        ? 'قارن ديزي مع أفضل برامج إدارة الصالونات. مقارنات مفصلة بالميزات والأسعار والقدرات.'
        : 'Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis and pricing breakdowns.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/compare', locale),
  };
}

const uiStrings = {
  en: {
    h1: 'Compare Daisy',
    intro:
      'Honest, detailed comparisons to help you choose the right beauty business platform. We show strengths and weaknesses, for everyone.',
    daisyVs: 'Daisy vs Competitors',
    vsTitle: (a: string, b: string) => `${a} vs ${b}`,
    competitorVs: 'Competitor vs Competitor',
    ctaTitle: 'Ready to see Daisy in action?',
    ctaBody: 'Start your free trial and experience the difference AI makes.',
    cta: 'Get Started Free',
  },
  ar: {
    h1: 'مقارنات ديزي',
    intro:
      'مقارنات صريحة ومفصّلة تساعدك على اختيار منصة أعمال التجميل المناسبة. نعرض نقاط القوة والضعف لكل منصة.',
    daisyVs: 'ديزي مقابل المنافسين',
    vsTitle: (a: string, b: string) => `${a} مقابل ${b}`,
    competitorVs: 'منافس مقابل منافس',
    ctaTitle: 'مستعد لترى ديزي على أرض الواقع؟',
    ctaBody: 'ابدأ تجربتك المجانية واكتشف الفرق الذي يصنعه الذكاء الاصطناعي.',
    cta: 'ابدأ تجربتك المجانية',
  },
};

export default function CompareIndexPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  // Was the English arrays imported directly, so /ar/compare listed every
  // comparison's English summary and verdict.
  const pages = getComparisonPagesI18n();
  const { daisyVsPages, competitorVsPages } = pages[locale as keyof typeof pages] ?? pages.en;
  return (
    <main className="min-h-screen">
      <WebPageSchema
        title="Daisy Comparisons. See How We Stack Up | The Daisy"
        description="Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis and pricing breakdowns."
        url="https://www.jointhedaisy.com/compare"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[{ name: 'Compare', url: 'https://www.jointhedaisy.com/compare' }]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F5F3] to-white px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
          {t.h1}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#455150]">
          {t.intro}
        </p>
      </section>

      {/* Daisy vs Pages */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-[#172524]">
          {t.daisyVs}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {daisyVsPages.map((page) => {
            const competitor = getCompetitor(page.competitorSlug, locale);
            if (!competitor) return null;
            return (
              <Link
                key={page.slug}
                href={`/${locale}/compare/${page.slug}`}
                className="rounded-lg border border-[#E8E9E9] p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                  {t.vsTitle(locale === 'ar' ? 'ديزي' : 'Daisy', competitor.name)}
                </h3>
                <p className="text-sm text-[#586968]">
                  {competitor.headquarters}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                  {page.tldr}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Competitor vs Competitor */}
      <section className="bg-[#F8F5F3] py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#172524]">
            {t.competitorVs}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {competitorVsPages.map((page) => {
              const a = getCompetitor(page.slugA, locale);
              const b = getCompetitor(page.slugB, locale);
              if (!a || !b) return null;
              return (
                <Link
                  key={page.combinedSlug}
                  href={`/${locale}/compare/${page.combinedSlug}`}
                  className="rounded-lg border border-[#E8E9E9] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                    {t.vsTitle(a.name, b.name)}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                    {page.verdict}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          {t.ctaTitle}
        </h2>
        <p className="mb-6 text-[#455150]">
          {t.ctaBody}
        </p>
        <Link
          href="/get-the-app"
          className="inline-block rounded-lg bg-primaryBtn px-8 py-3 font-semibold text-white transition-colors hover:bg-primary"
        >
          {t.cta}
        </Link>
      </section>
    </main>
  );
}
