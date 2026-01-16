import { Metadata } from 'next';
import { TestimonialsClient } from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Salon & Spa Success Stories | The Daisy Testimonials',
  description:
    'Read success stories from salons, spas, beauty professionals, and customers who use The Daisy beauty booking platform.',
  keywords: [
    'salon success stories',
    'beauty business reviews',
    'spa testimonials',
    'The Daisy reviews',
    'beauty platform reviews',
    'salon owner testimonials',
    'customer success stories',
    'beauty professional reviews',
  ],
  openGraph: {
    title: 'Salon & Spa Success Stories | The Daisy Testimonials',
    description:
      'Read success stories from salons, spas, and beauty professionals on The Daisy.',
    url: 'https://jointhedaisy.com/resources/testimonials',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon & Spa Success Stories | The Daisy Testimonials',
    description:
      'Read success stories from salons and beauty professionals on The Daisy.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/resources/testimonials',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
