import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { CareersClient } from './CareersClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Careers | The Daisy - Beauty Tech Jobs',
  description:
    'Join The Daisy team and help build the future of beauty and wellness booking. Explore open positions in engineering, design, marketing, and more.',
  keywords: [
    'beauty tech careers',
    'The Daisy jobs',
    'wellness startup jobs',
    'beauty industry careers',
    'tech jobs',
    'startup careers',
    'beauty marketplace jobs',
    'work in beauty tech',
  ],
  openGraph: {
    title: 'Careers | The Daisy - Beauty Tech Jobs',
    description:
      'Join The Daisy team and help build the future of beauty and wellness booking.',
    url: 'https://www.jointhedaisy.com/careers',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'Careers at The Daisy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | The Daisy - Beauty Tech Jobs',
    description:
      'Join The Daisy team. Explore career opportunities in beauty tech.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
    alternates: localeAlternates('/careers', locale),
  };
}

export default function CareersPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Careers | The Daisy - Beauty Tech Jobs"
        description="Join The Daisy team and help build the future of beauty and wellness booking. Explore open positions."
        url="https://www.jointhedaisy.com/careers"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Careers', url: 'https://www.jointhedaisy.com/careers' }]}
      />
      <CareersClient lang={locale} />
    </>
  );
}
