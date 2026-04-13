import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import Link from 'next/link';
import { guideData } from '@/lib/constants/guides/guideData';
import { t } from '@/lib/constants/i18n';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Salon Business Guides | The Daisy',
  description:
    'Step-by-step guides for salon owners: reduce no-shows, get more clients, choose the right software, set up online booking, and grow your beauty business.',
  keywords: [
    'salon business guides',
    'how to reduce no-shows salon',
    'salon online booking setup',
    'beauty business growth tips',
    'salon software guide',
  ],
  openGraph: {
    title: 'Salon Business Guides | The Daisy',
    description:
      'Step-by-step guides for salon owners on growing their beauty business.',
    url: `https://www.jointhedaisy.com/${locale}/guides`,
    type: 'website',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Business Guides | The Daisy',
    description:
      'Step-by-step guides for salon owners: reduce no-shows, get more clients, choose the right software.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/guides', locale),
  };
}

export default function GuidesIndex({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const entries = t(guideData, locale);

  return (
    <main className="min-h-screen bg-white">
      <WebPageSchema
        title="Salon Business Guides | The Daisy"
        description="Step-by-step guides for salon owners: reduce no-shows, get more clients, choose the right software."
        url="https://www.jointhedaisy.com/guides"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: 'Guides', url: 'https://www.jointhedaisy.com/guides' }]}
      />
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            Salon Business Guides
          </h1>
          <p className="text-lg text-[#455150]" data-geo-answer="true">
            Step-by-step guides to help you grow your beauty business, reduce
            costs, and make smarter decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-6">
          {entries.map((guide) => (
            <Link
              key={guide.slug}
              href={`/${locale}/guides/${guide.slug}`}
              className="group block rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md md:p-8"
            >
              <h2 className="mb-3 text-2xl font-bold text-[#172524] group-hover:text-primary">
                {guide.title}
              </h2>
              <p className="mb-4 text-[#455150]" data-geo-answer="true">
                {guide.answer}
              </p>
              <div className="text-sm font-medium text-primary">
                Read full guide ({guide.steps.length} steps) &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
