import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { BusinessClient } from './business/BusinessClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isAr = locale === 'ar';
  const title = isAr
    ? 'منصة إدارة الصالونات والمنتجعات بالذكاء الاصطناعي | ديزي'
    : 'AI Salon & Spa Management Platform | The Daisy';
  const description = isAr
    ? 'انمِ صالونك أو منتجعك مع ديزي. موظف استقبال ذكي، حجز ذكي، اكتساب العملاء، المدفوعات، والتسويق في منصة واحدة. ابدأ تجربتك المجانية لمدة 14 يوماً.'
    : 'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform. Start your 14-day free trial.';
  return {
    title,
    description,
    keywords: isAr
      ? [
          'برنامج إدارة الصالونات',
          'نظام حجز المنتجعات',
          'منصة أعمال التجميل',
          'أدوات تسويق الصالون',
          'نمو أعمال العافية',
          'برنامج جدولة الموظفين',
          'عروض الصالونات',
          'سوق التجميل',
          'معالجة مدفوعات الصالون',
          'نظام إدارة العملاء',
        ]
      : [
          'salon management software',
          'spa booking system',
          'beauty business platform',
          'salon marketing tools',
          'wellness business growth',
          'staff scheduling software',
          'salon promotions',
          'beauty marketplace',
          'salon payment processing',
          'client management system',
        ],
    openGraph: {
      title,
      description,
      url: `https://www.jointhedaisy.com/${locale}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr
            ? 'ديزي - منصة إدارة الصالونات والمنتجعات بالذكاء الاصطناعي'
            : 'The Daisy - AI Salon & Spa Management Platform',
        },
      ],
      locale: isAr ? 'ar_KW' : 'en_US',
      alternateLocale: isAr ? ['en_US'] : ['ar_KW'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/${locale}`,
      ...localeAlternates('/', locale),
    },
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const pageData = t(businessPageData, locale);

  return (
    <>
      <WebPageSchema
        title={
          locale === 'ar'
            ? 'منصة إدارة الصالونات والمنتجعات بالذكاء الاصطناعي | ديزي'
            : 'AI Salon & Spa Management Platform | The Daisy'
        }
        description={
          locale === 'ar'
            ? 'منصة أعمال التجميل المدعومة بالذكاء الاصطناعي. أدِر الحجوزات واكتساب العملاء وجدولة الموظفين والمدفوعات والتسويق من مكان واحد.'
            : 'AI-powered beauty business platform. Manage bookings, customer acquisition, staff scheduling, payments, and marketing, all in one.'
        }
        url={`https://www.jointhedaisy.com/${locale}`}
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[
          {
            name: locale === 'ar' ? 'الرئيسية' : 'Home',
            url: 'https://www.jointhedaisy.com',
          },
        ]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
          showMetaBadge
          locale={locale}
        />
      )}
      <BusinessClient lang={locale} />
    </>
  );
}
