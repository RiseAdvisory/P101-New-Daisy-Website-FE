import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { AboutClient } from './AboutClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'About Us | The Daisy - Beauty & Wellness Marketplace',
  description:
    'Learn about The Daisy, the beauty and wellness marketplace connecting customers with salons, spas, and beauty professionals. Our mission is to transform how you discover and book beauty services.',
  keywords: [
    'about The Daisy',
    'beauty marketplace',
    'wellness platform',
    'salon booking company',
    'beauty industry innovation',
    'spa marketplace',
    'beauty tech startup',
    'wellness technology',
  ],
  openGraph: {
    title: 'About Us | The Daisy - Beauty & Wellness Marketplace',
    description:
      'Learn about The Daisy, the beauty and wellness marketplace connecting customers with salons and beauty professionals.',
    url: 'https://www.jointhedaisy.com/about',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'About The Daisy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | The Daisy - Beauty & Wellness Marketplace',
    description: 'Learn about The Daisy beauty and wellness marketplace.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
    alternates: localeAlternates('/about', locale),
  };
}

export default function AboutPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="About Us | The Daisy - Beauty & Wellness Marketplace"
        description="Learn about The Daisy, the beauty and wellness marketplace connecting customers with salons, spas, and beauty professionals."
        url="https://www.jointhedaisy.com/about"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'About Us', url: 'https://www.jointhedaisy.com/about' }]}
      />
      <AboutClient lang={locale} />
    </>
  );
}
