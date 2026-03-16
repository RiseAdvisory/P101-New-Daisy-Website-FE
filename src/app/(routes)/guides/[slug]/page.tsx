import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getGuide, getAllGuideSlugs } from '@/lib/constants/guides/guideData';
import { GuidesPageClient } from './GuidesPageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return { title: 'Not Found' };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://www.jointhedaisy.com/guides/${params.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/guides/${params.slug}`,
    },
  };
}

export default function GuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  return <GuidesPageClient slug={params.slug} />;
}
