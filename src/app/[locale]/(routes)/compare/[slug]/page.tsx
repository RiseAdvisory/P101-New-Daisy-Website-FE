import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  getAllCompareSlugs,
  getComparePageData,
} from '@/lib/constants/competitors/comparisonPages';
import { ComparePageClient } from './ComparePageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCompareSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const result = getComparePageData(params.slug);
  if (!result) return { title: 'Not Found' };

  const metaTitle =
    result.type === 'daisy-vs' ? result.data.metaTitle : result.data.metaTitle;
  const metaDescription =
    result.type === 'daisy-vs'
      ? result.data.metaDescription
      : result.data.metaDescription;
  const keywords =
    result.type === 'daisy-vs' ? result.data.keywords : result.data.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/compare/${params.slug}`,
      type: 'website',
      images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(`/compare/${params.slug}`, params.locale),
  };
}

export default function ComparePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const result = getComparePageData(params.slug);
  if (!result) notFound();

  return <ComparePageClient slug={params.slug} locale={params.locale} />;
}
