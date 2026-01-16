import { Metadata } from 'next';
import { BusinessClient } from './BusinessClient';

export const metadata: Metadata = {
  title: 'Salon & Spa Business Solutions | The Daisy',
  description:
    'Grow your salon or spa business with The Daisy. Manage bookings, staff scheduling, promotions, and payments. Reach new customers through our beauty marketplace.',
  keywords: [
    'salon management software',
    'spa booking system',
    'beauty business platform',
    'salon marketing tools',
    'wellness business growth',
    'staff scheduling software',
    'salon promotions',
    'beauty marketplace',
    'salon payment processing',
    'client management system',
  ],
  openGraph: {
    title: 'Salon & Spa Business Solutions | The Daisy',
    description:
      'Grow your salon or spa business with The Daisy. Manage bookings, staff, and promotions on our beauty marketplace.',
    url: 'https://jointhedaisy.com/business',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - Salon & Spa Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon & Spa Business Solutions | The Daisy',
    description:
      'Grow your salon or spa business with The Daisy beauty marketplace.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/business',
  },
};

export default function BusinessPage() {
  return <BusinessClient />;
}
