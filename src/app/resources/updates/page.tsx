import { Metadata } from 'next';
import { UpdatesClient } from './UpdatesClient';

export const metadata: Metadata = {
  title: 'Platform Updates | The Daisy Beauty Booking News',
  description:
    'Stay informed with the latest updates, new features, and announcements from The Daisy beauty booking platform. See what is new for salons, spas, and customers.',
  keywords: [
    'beauty app updates',
    'salon platform news',
    'new features',
    'The Daisy updates',
    'product updates',
    'beauty booking news',
    'spa platform announcements',
    'wellness app updates',
  ],
  openGraph: {
    title: 'Platform Updates | The Daisy Beauty Booking News',
    description:
      'Stay informed with the latest updates and features from The Daisy beauty booking platform.',
    url: 'https://jointhedaisy.com/resources/updates',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Platform Updates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Updates | The Daisy Beauty Booking News',
    description:
      'Stay informed with the latest updates from The Daisy beauty platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/resources/updates',
  },
};

export default function UpdatesPage() {
  return <UpdatesClient />;
}
