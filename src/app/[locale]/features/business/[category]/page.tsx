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
  return getAllFeatureDeepDiveSlugs('business').map((category) => ({
    category,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; category: string };
}): Metadata {
  const data = getFeatureDeepDive('business', params.category, params.locale);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/features/business/${params.category}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
    alternates: localeAlternates(`/features/business/${params.category}`, params.locale),
  };
}

export default function FeatureBusinessDeepDivePage({
  params,
}: {
  params: { locale: string; category: string };
}) {
  const data = getFeatureDeepDive('business', params.category, params.locale);
  if (!data) notFound();

  return <FeatureDeepDiveClient userType="business" slug={params.category} locale={params.locale} />;
}
