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
      ? 'بدائل برامج الصالونات. قارن وانتقل | ديزي'
      : 'Salon Software Alternatives. Compare & Switch | The Daisy',
    description: isAr
      ? 'قارن بدائل برامج إدارة الصالونات من حيث الذكاء الاصطناعي والأسعار والدعم العربي: Fresha وBooksy وVagaro وغيرها جنباً إلى جنب.'
      : 'Looking for alternatives to Fresha, Booksy, Vagaro, or GlossGenius? Compare top salon software alternatives with AI features, pricing, and Arabic support.',
    keywords: [
      'fresha alternative',
      'booksy alternative',
      'vagaro alternative',
      'salon software alternatives',
    ],
    openGraph: {
      title: isAr
        ? 'بدائل برامج الصالونات. قارن وانتقل | ديزي'
        : 'Salon Software Alternatives. Compare & Switch | The Daisy',
      description: isAr
        ? 'قارن بدائل برامج إدارة الصالونات من حيث الذكاء الاصطناعي والأسعار والدعم العربي: Fresha وBooksy وVagaro وغيرها جنباً إلى جنب.'
        : 'Looking for alternatives to Fresha, Booksy, Vagaro, or GlossGenius? Compare top salon software alternatives with AI features, pricing, and Arabic support.',
      url: `https://www.jointhedaisy.com/${locale}/alternative`,
      type: 'website',
      images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'بدائل برامج الصالونات. قارن وانتقل | ديزي'
        : 'Salon Software Alternatives. Compare & Switch | The Daisy',
      description: isAr
        ? 'قارن بدائل برامج إدارة الصالونات من حيث الذكاء الاصطناعي والأسعار والدعم العربي: Fresha وBooksy وVagaro وغيرها جنباً إلى جنب.'
        : 'Looking for alternatives to Fresha, Booksy, Vagaro, or GlossGenius? Compare top salon software alternatives.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/alternative', locale),
  };
}

const uiStrings = {
  en: {
    h1: 'Salon Software Alternatives',
    intro:
      'Ready to switch? Find the best alternative for your current salon platform, with honest comparisons and clear recommendations.',
    find: 'Find Your Alternative',
    alternative: (name: string) => `${name} Alternative`,
    roundups: 'Best Alternatives Roundups',
    ctaTitle: 'Ready to make the switch?',
    ctaBody: 'Daisy makes switching easy with migration support and zero downtime.',
    cta: 'Start Free Trial',
  },
  ar: {
    h1: 'بدائل برامج الصالونات',
    intro:
      'مستعد للانتقال؟ اعثر على أفضل بديل لمنصة صالونك الحالية، مع مقارنات صريحة وتوصيات واضحة.',
    find: 'اعثر على بديلك',
    alternative: (name: string) => `بديل ${name}`,
    roundups: 'قوائم أفضل البدائل',
    ctaTitle: 'مستعد للانتقال؟',
    ctaBody: 'تجعل ديزي الانتقال سهلاً مع دعم نقل البيانات ودون توقف عن العمل.',
    cta: 'ابدأ تجربتك المجانية',
  },
};

export default function AlternativeIndexPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  // Was the English arrays imported directly, so /ar/alternative listed every
  // page's English subtitle and intro.
  const pages = getComparisonPagesI18n();
  const { alternativePages, bestAlternativesPages } = pages[locale as keyof typeof pages] ?? pages.en;
  return (
    <main className="min-h-screen">
      <WebPageSchema
        title="Salon Software Alternatives. Compare & Switch | The Daisy"
        description="Looking for alternatives to Fresha, Booksy, Vagaro, or GlossGenius? Compare top salon software alternatives."
        url="https://www.jointhedaisy.com/alternative"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[{ name: 'Alternatives', url: 'https://www.jointhedaisy.com/alternative' }]}
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

      {/* Alternative Pages */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-[#172524]">
          {t.find}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {alternativePages.map((page) => {
            const competitor = getCompetitor(page.competitorSlug, locale);
            if (!competitor) return null;
            return (
              <Link
                key={page.slug}
                href={`/${locale}/alternative/${page.slug}`}
                className="rounded-lg border border-[#E8E9E9] p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                  {t.alternative(competitor.name)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                  {page.heroSubtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best Alternatives */}
      <section className="bg-[#F8F5F3] py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#172524]">
            {t.roundups}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {bestAlternativesPages.map((page) => {
              const competitor = getCompetitor(page.competitorSlug, locale);
              if (!competitor) return null;
              return (
                <Link
                  key={page.slug}
                  href={`/${locale}/alternative/${page.slug}`}
                  className="rounded-lg border border-[#E8E9E9] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                    {page.heroTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                    {page.intro}
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
