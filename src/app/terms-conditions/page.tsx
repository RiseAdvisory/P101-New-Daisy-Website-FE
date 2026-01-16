import { Metadata } from 'next';
import { TermsConditionsClient } from './TermsConditionsClient';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
  description:
    'Review The Daisy terms and conditions governing the use of our beauty booking platform, services, and your rights and responsibilities as a customer or vendor.',
  keywords: [
    'terms and conditions',
    'terms of service',
    'user agreement',
    'beauty platform terms',
    'salon booking terms',
    'vendor agreement',
    'The Daisy terms',
  ],
  openGraph: {
    title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
    description:
      'Review The Daisy terms and conditions governing the use of our beauty booking platform.',
    url: 'https://jointhedaisy.com/terms-conditions',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
    description:
      'Review The Daisy terms and conditions for using our platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return <TermsConditionsClient />;
}
