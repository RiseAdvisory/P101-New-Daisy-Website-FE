import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getAllFeatureDeepDiveSlugs,
  getFeatureDeepDive,
} from '@/lib/constants/features/featureDeepDive';
import { FeatureDeepDiveClient } from '@/components/featureDeepDive/FeatureDeepDiveClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFeatureDeepDiveSlugs('business').map((category) => ({
    category,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const data = getFeatureDeepDive('business', params.category);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/features/business/${params.category}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/features/business/${params.category}`,
    },
  };
}

export default function FeatureBusinessDeepDivePage({
  params,
}: {
  params: { category: string };
}) {
  const data = getFeatureDeepDive('business', params.category);
  if (!data) notFound();

  return <FeatureDeepDiveClient userType="business" slug={params.category} />;
}
