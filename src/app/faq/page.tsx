import { Metadata } from 'next';
import { FaqClient } from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ - Beauty Booking Questions | The Daisy',
  description:
    'Find answers to common questions about The Daisy beauty booking platform. Learn about salon bookings, cashback rewards, business features, and getting started.',
  keywords: [
    'beauty booking FAQ',
    'salon app questions',
    'cashback help',
    'how to book salon',
    'beauty app help',
    'vendor FAQ',
    'booking questions',
    'spa booking help',
  ],
  openGraph: {
    title: 'FAQ - Beauty Booking Questions | The Daisy',
    description:
      'Find answers to common questions about The Daisy beauty booking platform.',
    url: 'https://jointhedaisy.com/faq',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Beauty Booking Questions | The Daisy',
    description:
      'Find answers to common questions about The Daisy beauty platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/faq',
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
