import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  getGlossaryEntry,
  getAllGlossarySlugs,
} from '@/lib/constants/glossary/glossaryData';
import { GlossaryPageClient } from './GlossaryPageClient';
import { SpeakableSchema } from '@/components/seo/SpeakableSchema';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) return { title: 'Not Found' };

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    keywords: entry.keywords,
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/glossary/${params.slug}`,
      type: 'article',
      images: [{ url: `/images/glossary/${params.slug}.webp`, width: 1200, height: 630, alt: entry.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.metaTitle,
      description: entry.metaDescription,
      images: [`/images/glossary/${params.slug}.webp`],
    },
    alternates: localeAlternates(`/glossary/${params.slug}`, params.locale),
  };
}

export default function GlossaryPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) notFound();

  return (
    <>
      <SpeakableSchema
        title={entry.metaTitle}
        url={`https://www.jointhedaisy.com/${params.locale}/glossary/${params.slug}`}
        cssSelectors={['[data-geo-answer]', 'dfn', 'article > p:first-of-type']}
      />
      <GlossaryPageClient slug={params.slug} />
    </>
  );
}
