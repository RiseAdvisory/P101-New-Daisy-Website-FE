import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  getAllFeatureDeepDiveSlugs,
  getFeatureDeepDive,
} from '@/lib/constants/features/featureDeepDive';
import { FeatureDeepDiveClient } from '@/components/featureDeepDive/FeatureDeepDiveClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFeatureDeepDiveSlugs('professional').map((category) => ({
    category,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; category: string };
}): Metadata {
  const data = getFeatureDeepDive('professional', params.category, params.locale);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/features/professional/${params.category}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
    alternates: localeAlternates(`/features/professional/${params.category}`, params.locale),
  };
}

export default function FeatureProfessionalDeepDivePage({
  params,
}: {
  params: { locale: string; category: string };
}) {
  const data = getFeatureDeepDive('professional', params.category, params.locale);
  if (!data) notFound();

  return (
    <FeatureDeepDiveClient userType="professional" slug={params.category} locale={params.locale} />
  );
}
