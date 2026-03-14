import { notFound } from 'next/navigation';
import { Metadata } from 'next';
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
  params: { slug: string };
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
    alternates: {
      canonical: `https://www.jointhedaisy.com/glossary/${params.slug}`,
    },
  };
}

export default function GlossaryPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) notFound();

  return <GlossaryPageClient slug={params.slug} />;
}
