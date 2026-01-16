import { Metadata } from 'next';
import { PricingClient } from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing Plans for Salons & Spas | The Daisy',
  description:
    'Flexible pricing plans for salons, spas, and beauty professionals. Choose monthly or annual billing with commission-based pricing tailored to your business size.',
  keywords: [
    'salon software pricing',
    'spa booking system cost',
    'beauty business subscription',
    'salon management pricing',
    'beauty marketplace fees',
    'commission pricing',
    'salon app pricing',
    'wellness business plans',
  ],
  openGraph: {
    title: 'Pricing Plans for Salons & Spas | The Daisy',
    description:
      'Flexible pricing plans for salons, spas, and beauty professionals. Monthly or annual billing available.',
    url: 'https://jointhedaisy.com/pricing',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans for Salons & Spas | The Daisy',
    description:
      'Flexible pricing plans for salons, spas, and beauty professionals.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/pricing',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
