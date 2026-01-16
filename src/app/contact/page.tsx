import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | The Daisy - Beauty Booking Platform',
  description:
    'Get in touch with The Daisy team. Questions about our beauty booking platform, salon partnerships, or customer support? We are here to help.',
  keywords: [
    'contact The Daisy',
    'beauty platform support',
    'salon partnership inquiry',
    'customer support',
    'beauty app help',
    'spa business inquiry',
    'vendor onboarding',
    'beauty marketplace contact',
  ],
  openGraph: {
    title: 'Contact Us | The Daisy - Beauty Booking Platform',
    description:
      'Get in touch with The Daisy team for beauty platform questions and support.',
    url: 'https://jointhedaisy.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact The Daisy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | The Daisy - Beauty Booking Platform',
    description: 'Get in touch with The Daisy team for questions and support.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
