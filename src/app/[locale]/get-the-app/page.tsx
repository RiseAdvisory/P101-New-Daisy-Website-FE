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

// Mobile visitors get punted to the thedaisy.link smartlink (which device-
// detects and forwards to the App Store / Play Store). Desktop visitors see
// the full page below. Runs before paint so there's no flash of /get-the-app
// content on phones.
const MOBILE_REDIRECT_SCRIPT = `(function(){try{if(window.matchMedia&&window.matchMedia('(max-width: 767px)').matches){window.location.replace('https://thedaisy.link/install-app');}}catch(e){}})();`;

export default function GetTheAppPage() {
  const locale = getLocale();

  return (
    <>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: MOBILE_REDIRECT_SCRIPT }}
      />
      <WebPageSchema
        title="Download The Daisy App | Beauty Booking for iOS & Android"
        description="Download The Daisy beauty booking app for iOS and Android. Find salons near you, book appointments, earn cashback."
        url="https://www.jointhedaisy.com/get-the-app"
        dateModified="2026-05-19T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: 'Get the App', url: 'https://www.jointhedaisy.com/get-the-app' }]}
      />
      <GetTheAppClient lang={locale} />
    </>
  );
}
