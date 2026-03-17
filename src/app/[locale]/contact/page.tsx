import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { ContactClient } from './ContactClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
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
    url: `https://www.jointhedaisy.com/${locale}/contact`,
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
    alternates: localeAlternates('/contact', locale),
  };
}

export default function ContactPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Contact Us | The Daisy - Beauty Booking Platform"
        description="Get in touch with The Daisy team. Questions about our beauty booking platform, salon partnerships, or customer support?"
        url="https://www.jointhedaisy.com/contact"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Contact', url: 'https://www.jointhedaisy.com/contact' }]}
      />
      <ContactClient lang={locale} />
    </>
  );
}
