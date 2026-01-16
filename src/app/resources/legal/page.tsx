import { Metadata } from 'next';
import { LegalClient } from './LegalClient';

export const metadata: Metadata = {
  title: 'Legal Resources | The Daisy Beauty Platform',
  description:
    'Access legal resources, documentation, and downloads related to The Daisy beauty booking platform services and policies.',
  keywords: [
    'legal resources',
    'beauty platform documentation',
    'salon app legal',
    'vendor agreements',
    'The Daisy legal',
    'platform policies',
    'service agreements',
  ],
  openGraph: {
    title: 'Legal Resources | The Daisy Beauty Platform',
    description:
      'Access legal resources and documentation from The Daisy beauty platform.',
    url: 'https://jointhedaisy.com/resources/legal',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Legal Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Resources | The Daisy Beauty Platform',
    description: 'Access legal resources and documentation from The Daisy.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/resources/legal',
  },
};

export default function LegalPage() {
  return <LegalClient />;
}
