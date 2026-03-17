import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  getGlossaryEntry,
  getAllGlossarySlugs,
} from '@/lib/constants/glossary/glossaryData';
import { GlossaryPageClient } from './GlossaryPageClient';

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
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://www.jointhedaisy.com/glossary/${params.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.metaTitle,
      description: entry.metaDescription,
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

  return <GlossaryPageClient slug={params.slug} />;
}
