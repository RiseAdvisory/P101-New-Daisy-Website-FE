import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { getGuide, getAllGuideSlugs } from '@/lib/constants/guides/guideData';
import { GuidesPageClient } from './GuidesPageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return { title: 'Not Found' };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://www.jointhedaisy.com/${params.locale}/guides/${params.slug}`,
      type: 'article',
      images: [{ url: `/images/guides/${params.slug}.webp`, width: 1200, height: 630, alt: guide.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [`/images/guides/${params.slug}.webp`],
    },
    alternates: localeAlternates(`/guides/${params.slug}`, params.locale),
  };
}

export default function GuidePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  return <GuidesPageClient slug={params.slug} />;
}
