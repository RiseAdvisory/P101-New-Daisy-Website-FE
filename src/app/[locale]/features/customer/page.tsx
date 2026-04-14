import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { FeaturesCustomerClient } from './FeaturesCustomerClient';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'ميزات العملاء: الحجز والكاشباك | ديزي' : 'Customer Features - Salon Booking & Cashback | The Daisy',
    description: isAr
      ? 'استكشف ميزات ديزي للعملاء: العثور على صالونات قريبة، حجز خدمات التجميل، كسب كاشباك، إدارة المواعيد، التقييم وكسب النقاط، وخدمات التجميل المنزلية.'
      : 'Explore The Daisy customer features: find salons near you, book beauty services, earn cashback rewards, manage appointments, rate & earn points, and enjoy home beauty services.',
    keywords: isAr
      ? [
          'اكتشاف الصالونات',
          'كاشباك التجميل',
          'إدارة المواعيد',
          'صالون قريب مني',
          'برنامج مكافآت التجميل',
          'تقييم الصالونات',
          'حجز خدمات منزلية',
          'الصالونات المفضلة',
          'البحث عن خدمات التجميل',
          'عروض الصالونات',
        ]
      : [
          'salon discovery',
          'beauty cashback',
          'appointment management',
          'salon near me feature',
          'beauty rewards program',
          'rate and review salons',
          'home beauty booking',
          'favorite salons',
          'beauty service search',
          'salon promotions',
        ],
    openGraph: {
      title: isAr ? 'ميزات العملاء: الحجز والكاشباك | ديزي' : 'Customer Features - Salon Booking & Cashback | The Daisy',
      description: isAr
        ? 'اعثر على صالونات قريبة، اكسب كاشباك، وأدر مواعيدك مع ديزي.'
        : 'Find salons near you, earn cashback rewards, and manage beauty appointments with The Daisy.',
      url: `https://www.jointhedaisy.com/${locale}/features/customer`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'ميزات ديزي للعملاء' : 'The Daisy Customer Features',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'ميزات العملاء: الحجز والكاشباك | ديزي' : 'Customer Features - Salon Booking & Cashback | The Daisy',
      description: isAr
        ? 'اعثر على صالونات قريبة، اكسب كاشباك، وأدر مواعيدك.'
        : 'Find salons near you, earn cashback rewards, and manage beauty appointments.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/features/customer', locale),
  };
}

export default function FeaturesCustomerPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <FeaturesBreadcrumbSchema pageName="Customer" pageSlug="customer" locale={params.locale} />
      <WebPageSchema
        title="Customer Features - Salon Booking & Cashback | The Daisy"
        description="Explore The Daisy customer features: find salons near you, book beauty services, earn cashback rewards, manage appointments."
        url="https://www.jointhedaisy.com/features/customer"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <FeaturesCustomerClient lang={params.locale} />
    </>
  );
}
