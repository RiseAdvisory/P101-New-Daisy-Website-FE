import { Metadata } from 'next';
import { CustomerClient } from './CustomerClient';

export const metadata: Metadata = {
  title: 'Book Beauty & Salon Services | The Daisy',
  description:
    'Book beauty, wellness & salon services with The Daisy. Discover salons near you, earn cashback rewards, manage appointments, and enjoy exclusive promotions on hair, nails & spa services.',
  keywords: [
    'beauty booking app',
    'salon near me',
    'book hair appointment',
    'nail salon booking',
    'spa booking app',
    'wellness services',
    'cashback rewards',
    'beauty promotions',
    'salon discounts',
    'home beauty services',
  ],
  openGraph: {
    title: 'Book Beauty & Salon Services | The Daisy',
    description:
      'Discover salons near you, earn cashback rewards, and book beauty services with exclusive promotions.',
    url: 'https://jointhedaisy.com/customer',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - Book Beauty & Salon Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Beauty & Salon Services | The Daisy',
    description:
      'Discover salons near you, earn cashback rewards, and book beauty services.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/customer',
  },
};

export default function CustomerPage() {
  return <CustomerClient />;
}
