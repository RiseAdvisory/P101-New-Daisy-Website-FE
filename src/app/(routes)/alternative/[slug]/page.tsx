import { notFound } from 'next/navigation';
import { Metadata } from 'next';
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
  params: { slug: string };
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
      url: `https://www.jointhedaisy.com/alternative/${params.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/alternative/${params.slug}`,
    },
  };
}

export default function AlternativePage({
  params,
}: {
  params: { slug: string };
}) {
  const result = getAlternativePageData(params.slug);
  if (!result) notFound();

  return <AlternativePageClient slug={params.slug} />;
}
