import { Metadata } from 'next';
import { TutorialsClient } from './TutorialsClient';

export const metadata: Metadata = {
  title: 'Beauty Booking Tutorials | The Daisy Resources',
  description:
    'Learn how to use The Daisy beauty booking platform with step-by-step tutorials. Guides for salon owners, beauty professionals, and customers.',
  keywords: [
    'salon app tutorials',
    'beauty booking guide',
    'how to book salon',
    'vendor onboarding guide',
    'beauty app tutorial',
    'salon management guide',
    'The Daisy tutorials',
    'spa booking help',
  ],
  openGraph: {
    title: 'Beauty Booking Tutorials | The Daisy Resources',
    description:
      'Learn how to use The Daisy beauty booking platform with step-by-step tutorials.',
    url: 'https://jointhedaisy.com/resources/tutorials',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Booking Tutorials | The Daisy Resources',
    description: 'Learn how to use The Daisy with step-by-step tutorials.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/resources/tutorials',
  },
};

export default function TutorialsPage() {
  return <TutorialsClient />;
}
