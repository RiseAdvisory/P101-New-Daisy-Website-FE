import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  getAllAlternativeSlugs,
  getAlternativePageData,
} from '@/lib/constants/competitors/comparisonPages';
import { AlternativePageClient } from './AlternativePageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAlternativeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const result = getAlternativePageData(params.slug);
  if (!result) return { title: 'Not Found' };

  const { metaTitle, metaDescription, keywords } = result.data;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/alternative/${params.slug}`,
      type: 'website',
      images: [{ url: 'https://i.imgur.com/MNoL6BE.jpeg', width: 1200, height: 630, alt: 'The Daisy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ['https://i.imgur.com/MNoL6BE.jpeg'],
    },
    alternates: localeAlternates(`/alternative/${params.slug}`, params.locale),
  };
}

export default function AlternativePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const result = getAlternativePageData(params.slug);
  if (!result) notFound();

  return <AlternativePageClient slug={params.slug} />;
}
