import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { GetTheAppClient } from './GetTheAppClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
  title: isAr
    ? 'حمّل تطبيق ديزي | حجز التجميل لـ iOS و Android'
    : 'Download The Daisy App | Beauty Booking for iOS & Android',
  description: isAr
    ? 'حمّل تطبيق ديزي مجاناً على iOS و Android. احجز خدمات التجميل، اكسب كاشباك، وأدر مواعيدك من هاتفك.'
    : 'Download The Daisy beauty booking app for iOS and Android. Find salons near you, book appointments, earn cashback, and manage your beauty services on the go.',
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
    title: isAr
      ? 'حمّل تطبيق ديزي | حجز التجميل لـ iOS و Android'
      : 'Download The Daisy App | Beauty Booking for iOS & Android',
    description: isAr
      ? 'حمّل تطبيق ديزي مجاناً على iOS و Android. احجز خدمات التجميل، اكسب كاشباك، وأدر مواعيدك من هاتفك.'
      : 'Download The Daisy beauty booking app. Find salons, book appointments, and earn cashback.',
    url: `https://www.jointhedaisy.com/${locale}/get-the-app`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Download The Daisy Beauty Booking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: isAr
      ? 'حمّل تطبيق ديزي | حجز التجميل لـ iOS و Android'
      : 'Download The Daisy App | Beauty Booking for iOS & Android',
    description: isAr
      ? 'حمّل تطبيق ديزي مجاناً على iOS و Android. احجز خدمات التجميل، اكسب كاشباك، وأدر مواعيدك من هاتفك.'
      : 'Download The Daisy beauty booking app for iOS and Android.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/get-the-app', locale),
  };
}

export default function GetTheAppPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Download The Daisy App | Beauty Booking for iOS & Android"
        description="Download The Daisy beauty booking app for iOS and Android. Find salons near you, book appointments, earn cashback."
        url="https://www.jointhedaisy.com/get-the-app"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: 'Get the App', url: 'https://www.jointhedaisy.com/get-the-app' }]}
      />
      <GetTheAppClient lang={locale} />
    </>
  );
}
