import { Metadata } from 'next';
import { FeaturesBusinessClient } from './FeaturesBusinessClient';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FeatureDeepDiveLinks } from '@/components/featuresPage/FeatureDeepDiveLinks';

export const metadata: Metadata = {
  title: 'AI-Powered Salon Business Features - Booking, Marketing & Payments | The Daisy',
  description:
    'AI-powered features for salon & spa businesses: smart scheduling, appointment booking, marketing tools, payment processing, team management, customer CRM, multi-channel communication, and detailed analytics.',
  keywords: [
    'AI salon features',
    'AI-powered salon management',
    'salon marketing features',
    'spa payment processing',
    'salon analytics dashboard',
    'beauty business reports',
    'multi-branch salon management',
    'staff scheduling features',
    'salon promotion tools',
    'beauty business earnings',
    'salon appointment booking',
    'salon customer CRM',
    'salon communication tools',
    'salon staff management',
  ],
  openGraph: {
    title: 'AI-Powered Salon Business Features - Booking, Marketing & Payments | The Daisy',
    description:
      'AI-powered features for salon & spa businesses: smart scheduling, booking, marketing, payments, communication, growth, and team management.',
    url: 'https://www.jointhedaisy.com/features/business',
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
    title: 'AI-Powered Salon Business Features | The Daisy',
    description:
      'AI-powered features for salon & spa businesses on The Daisy platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://www.jointhedaisy.com/features/business',
  },
};

export default function FeaturesBusinessPage() {
  return (
    <>
      <FeaturesBreadcrumbSchema pageName="Business" pageSlug="business" />
      <WebPageSchema
        title="AI-Powered Salon Business Features | The Daisy"
        description="AI-powered features for salon & spa businesses: smart scheduling, booking, marketing, payments, and team management."
        url="https://www.jointhedaisy.com/features/business"
      />
      <FeaturesBusinessClient />
      <FeatureDeepDiveLinks userType="business" />
    </>
  );
}
