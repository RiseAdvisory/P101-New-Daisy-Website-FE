import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import Link from 'next/link';
import { glossaryData } from '@/lib/constants/glossary/glossaryData';
import { t } from '@/lib/constants/i18n';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Salon Software Glossary | The Daisy',
  description:
    'Understand key beauty industry and salon software terms. Definitions, comparisons, and expert explanations of salon management, AI receptionist, cashback booking, and more.',
  keywords: [
    'salon software glossary',
    'beauty industry terms',
    'salon management definitions',
    'AI receptionist definition',
    'cashback booking explained',
  ],
  openGraph: {
    title: 'Salon Software Glossary | The Daisy',
    description:
      'Understand key beauty industry and salon software terms. Expert definitions and comparisons.',
    url: `https://www.jointhedaisy.com/${locale}/glossary`,
    type: 'website',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Software Glossary | The Daisy',
    description:
      'Understand key beauty industry and salon software terms. Definitions, comparisons, and expert explanations.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/glossary', locale),
  };
}

export default function GlossaryIndex({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const entries = t(glossaryData, locale);

  return (
    <main className="min-h-screen bg-white">
      <WebPageSchema
        title="Salon Software Glossary | The Daisy"
        description="Understand key beauty industry and salon software terms. Definitions, comparisons, and expert explanations."
        url="https://www.jointhedaisy.com/glossary"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: 'Glossary', url: 'https://www.jointhedaisy.com/glossary' }]}
      />
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            Salon Software Glossary
          </h1>
          <p className="text-lg text-[#455150]" data-geo-answer="true">
            Key terms and definitions for beauty business technology, explained
            in plain language.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/glossary/${entry.slug}`}
              className="group rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-bold text-[#172524] group-hover:text-primary">
                What is {entry.term}?
              </h2>
              <p className="text-sm leading-relaxed text-[#455150]">
                <dfn className="not-italic font-medium text-[#172524]">
                  {entry.term}
                </dfn>{' '}
                {entry.definition.slice(0, 150)}...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
