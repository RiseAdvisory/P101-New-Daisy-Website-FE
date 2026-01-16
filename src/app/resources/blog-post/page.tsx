import { Metadata } from 'next';
import { BlogPostClient } from './BlogPostClient';

export const metadata: Metadata = {
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
    url: 'https://jointhedaisy.com/resources/blog-post',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
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
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/resources/blog-post',
  },
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}
