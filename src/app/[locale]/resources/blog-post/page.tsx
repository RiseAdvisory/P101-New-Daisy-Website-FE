import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { BlogPostClient } from './BlogPostClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Beauty & Wellness Blog | The Daisy Resources',
  description:
    'Read the latest beauty and wellness industry insights from The Daisy. Tips for salon owners, beauty professionals, and customers on booking, marketing, and trends.',
  keywords: [
    'beauty blog',
    'salon tips',
    'wellness articles',
    'beauty industry trends',
    'salon marketing tips',
    'beauty business insights',
    'spa industry blog',
    'The Daisy blog',
  ],
  openGraph: {
    title: 'Beauty & Wellness Blog | The Daisy Resources',
    description:
      'Read the latest beauty and wellness industry insights from The Daisy.',
    url: `https://www.jointhedaisy.com/${locale}/resources/blog-post`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Beauty Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty & Wellness Blog | The Daisy Resources',
    description: 'Read the latest beauty and wellness insights from The Daisy.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/resources/blog-post', locale),
  };
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
