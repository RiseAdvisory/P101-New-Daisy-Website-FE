import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { getAllSolutionSlugs, getSolution } from '@/lib/constants/solutions';
import { SolutionsPageClient } from './SolutionsPageClient';

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const data = getSolution(params.slug);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/solutions/${params.slug}`,
      type: 'website',
      images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(`/solutions/${params.slug}`, params.locale),
  };
}

export default function SolutionsPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const data = getSolution(params.slug);
  if (!data) notFound();

  return <SolutionsPageClient slug={params.slug} />;
}
