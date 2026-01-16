import { Metadata } from 'next';
import { FeaturesProfessionalClient } from './FeaturesProfessionalClient';

export const metadata: Metadata = {
  title: 'Beauty Professional Features - Scheduling & Earnings | The Daisy',
  description:
    'Features for beauty professionals: appointment scheduling, client management, earnings tracking, service bookings, and tools to grow your career as a stylist, nail tech, or spa therapist.',
  keywords: [
    'hairstylist scheduling',
    'nail tech appointments',
    'beauty professional tools',
    'spa therapist features',
    'stylist earnings tracking',
    'beauty client management',
    'professional booking system',
    'beautician app features',
    'salon staff tools',
    'beauty career growth',
  ],
  openGraph: {
    title: 'Beauty Professional Features - Scheduling & Earnings | The Daisy',
    description:
      'Features for beauty professionals: scheduling, client management, and earnings tracking.',
    url: 'https://jointhedaisy.com/features/professional',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Professional Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Professional Features - Scheduling & Earnings | The Daisy',
    description: 'Features for beauty professionals to grow their careers.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/features/professional',
  },
};

export default function FeaturesProfessionalPage() {
  return <FeaturesProfessionalClient />;
}
