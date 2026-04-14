import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { ContactClient } from './ContactClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
  title: isAr
    ? 'تواصل معنا | ديزي - منصة حجز التجميل'
    : 'Contact Us | The Daisy - Beauty Booking Platform',
  description: isAr
    ? 'تواصل مع فريق ديزي. نحن هنا لمساعدتك في البدء أو الإجابة على أسئلتك حول منصتنا لأعمال التجميل.'
    : 'Get in touch with The Daisy team. Questions about our beauty booking platform, salon partnerships, or customer support? We are here to help.',
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
    title: isAr
      ? 'تواصل معنا | ديزي - منصة حجز التجميل'
      : 'Contact Us | The Daisy - Beauty Booking Platform',
    description: isAr
      ? 'تواصل مع فريق ديزي. نحن هنا لمساعدتك في البدء أو الإجابة على أسئلتك حول منصتنا لأعمال التجميل.'
      : 'Get in touch with The Daisy team for beauty platform questions and support.',
    url: `https://www.jointhedaisy.com/${locale}/contact`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact The Daisy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: isAr
      ? 'تواصل معنا | ديزي - منصة حجز التجميل'
      : 'Contact Us | The Daisy - Beauty Booking Platform',
    description: isAr
      ? 'تواصل مع فريق ديزي. نحن هنا لمساعدتك في البدء أو الإجابة على أسئلتك حول منصتنا لأعمال التجميل.'
      : 'Get in touch with The Daisy team for questions and support.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/contact', locale),
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <WebPageSchema
        title="Contact Us | The Daisy - Beauty Booking Platform"
        description="Get in touch with The Daisy team. Questions about our beauty booking platform, salon partnerships, or customer support?"
        url="https://www.jointhedaisy.com/contact"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[{ name: 'Contact', url: 'https://www.jointhedaisy.com/contact' }]}
      />
      <ContactClient lang={params.locale} />
    </>
  );
}
