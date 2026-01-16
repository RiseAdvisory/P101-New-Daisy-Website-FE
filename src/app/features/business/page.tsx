import { Metadata } from 'next';
import { FeaturesBusinessClient } from './FeaturesBusinessClient';

export const metadata: Metadata = {
  title: 'Salon Business Features - Marketing & Payments | The Daisy',
  description:
    'Powerful features for salon & spa businesses: promotions management, earnings dashboard, payout processing, staff scheduling, multi-branch support, and detailed analytics.',
  keywords: [
    'salon marketing features',
    'spa payment processing',
    'salon analytics dashboard',
    'beauty business reports',
    'multi-branch salon management',
    'staff scheduling features',
    'salon promotion tools',
    'beauty business earnings',
    'salon payout system',
    'workspace management',
  ],
  openGraph: {
    title: 'Salon Business Features - Marketing & Payments | The Daisy',
    description:
      'Powerful features for salon & spa businesses: marketing, payments, analytics, and multi-branch management.',
    url: 'https://jointhedaisy.com/features/business',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Business Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Business Features - Marketing & Payments | The Daisy',
    description:
      'Powerful features for salon & spa businesses on The Daisy platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/features/business',
  },
};

export default function FeaturesBusinessPage() {
  return <FeaturesBusinessClient />;
}
