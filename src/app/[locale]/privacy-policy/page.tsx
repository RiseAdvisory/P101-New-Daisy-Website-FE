import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
  description:
    'Read The Daisy privacy policy to understand how we collect, use, and protect your personal information when using our beauty booking platform.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'beauty app privacy',
    'salon booking privacy',
    'user data protection',
    'The Daisy privacy',
  ],
  openGraph: {
    title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
    description:
      'Read The Daisy privacy policy to understand how we protect your personal information.',
    url: `https://www.jointhedaisy.com/${locale}/privacy-policy`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | The Daisy - Beauty Booking Platform',
    description: 'Read The Daisy privacy policy and data protection practices.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/privacy-policy', locale),
  };
}

export default function PrivacyPolicyPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Privacy Policy | The Daisy"
        description="Read The Daisy privacy policy to understand how we collect, use, and protect your personal information."
        url="https://www.jointhedaisy.com/privacy-policy"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Privacy Policy', url: 'https://www.jointhedaisy.com/privacy-policy' }]}
      />
      <PrivacyPolicyClient lang={locale} />
    </>
  );
}
