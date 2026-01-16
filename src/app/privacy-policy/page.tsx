import { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
  description:
    'Read The Daisy privacy policy to understand how we collect, use, and protect your personal information when using our beauty booking platform.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'beauty app privacy',
    'salon booking privacy',
    'user data protection',
    'The Daisy privacy',
  ],
  openGraph: {
    title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
    description:
      'Read The Daisy privacy policy to understand how we protect your personal information.',
    url: 'https://jointhedaisy.com/privacy-policy',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
    description: 'Read The Daisy privacy policy and data protection practices.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
