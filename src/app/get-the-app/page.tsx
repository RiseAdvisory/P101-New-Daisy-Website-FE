import { Metadata } from 'next';
import { GetTheAppClient } from './GetTheAppClient';

export const metadata: Metadata = {
  title: 'Download The Daisy App | Beauty Booking for iOS & Android',
  description:
    'Download The Daisy beauty booking app for iOS and Android. Find salons near you, book appointments, earn cashback, and manage your beauty services on the go.',
  keywords: [
    'beauty booking app download',
    'salon app iOS',
    'beauty app Android',
    'download salon booking app',
    'beauty services app',
    'The Daisy mobile app',
    'wellness booking app',
    'spa app download',
  ],
  openGraph: {
    title: 'Download The Daisy App | Beauty Booking for iOS & Android',
    description:
      'Download The Daisy beauty booking app. Find salons, book appointments, and earn cashback.',
    url: 'https://jointhedaisy.com/get-the-app',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'Download The Daisy Beauty Booking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download The Daisy App | Beauty Booking for iOS & Android',
    description: 'Download The Daisy beauty booking app for iOS and Android.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/get-the-app',
  },
};

export default function GetTheAppPage() {
  return <GetTheAppClient />;
}
