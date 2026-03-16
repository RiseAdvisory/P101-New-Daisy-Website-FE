import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllSolutionSlugs, getSolution } from '@/lib/constants/solutions';
import { SolutionsPageClient } from './SolutionsPageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
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
      url: `https://www.jointhedaisy.com/solutions/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/solutions/${params.slug}`,
    },
  };
}

export default function SolutionsPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getSolution(params.slug);
  if (!data) notFound();

  return <SolutionsPageClient slug={params.slug} />;
}
