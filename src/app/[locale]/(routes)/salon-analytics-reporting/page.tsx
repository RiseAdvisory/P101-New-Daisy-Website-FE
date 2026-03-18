import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { getPillarPage } from '@/lib/constants/pillars';
import { PillarPageTemplate } from '@/components/pillarPage/PillarPageTemplate';

const SLUG = 'salon-analytics-reporting';

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const data = getPillarPage(SLUG);
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/${SLUG}`,
      type: 'article',
      images: [{ url: 'https://i.imgur.com/MNoL6BE.jpeg', width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
      images: ['https://i.imgur.com/MNoL6BE.jpeg'],
    },
    alternates: localeAlternates(`/${SLUG}`, params.locale),
  };
}

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const data = getPillarPage(SLUG);
  if (!data) notFound();

  return <PillarPageTemplate data={data} locale={params.locale} />;
}
