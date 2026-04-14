import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { FeaturesBusinessClient } from './FeaturesBusinessClient';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FeatureDeepDiveLinks } from '@/components/featuresPage/FeatureDeepDiveLinks';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'ميزات الأعمال للصالونات | ديزي' : 'AI Salon Business Features | The Daisy',
    description: isAr
      ? 'ميزات مدعومة بالذكاء الاصطناعي لأعمال الصالونات والسبا: الجدولة الذكية، الحجز، التسويق، المدفوعات، إدارة الفريق، CRM، التواصل متعدد القنوات، والتحليلات.'
      : 'AI-powered features for salon & spa businesses: smart scheduling, appointment booking, marketing tools, payment processing, team management, customer CRM, multi-channel communication, and detailed analytics.',
    keywords: isAr
      ? [
          'ميزات صالون بالذكاء الاصطناعي',
          'إدارة الصالون بالذكاء الاصطناعي',
          'ميزات تسويق الصالون',
          'مدفوعات الصالون والسبا',
          'تحليلات وتقارير الصالون',
          'تقارير أعمال التجميل',
          'إدارة صالون متعدد الفروع',
          'جدولة الموظفين',
          'عروض وترويج الصالون',
          'إيرادات أعمال التجميل',
          'حجز مواعيد الصالون',
          'إدارة علاقات العملاء للصالون',
          'تواصل متعدد القنوات',
          'إدارة فريق الصالون',
        ]
      : [
          'AI salon features',
          'AI-powered salon management',
          'salon marketing features',
          'spa payment processing',
          'salon analytics dashboard',
          'beauty business reports',
          'multi-branch salon management',
          'staff scheduling features',
          'salon promotion tools',
          'beauty business earnings',
          'salon appointment booking',
          'salon customer CRM',
          'salon communication tools',
          'salon staff management',
        ],
    openGraph: {
      title: isAr ? 'ميزات الأعمال للصالونات | ديزي' : 'AI Salon Business Features | The Daisy',
      description: isAr
        ? 'ميزات مدعومة بالذكاء الاصطناعي لأعمال الصالونات والسبا: جدولة ذكية، حجز، تسويق، مدفوعات، تواصل، نمو، وإدارة فريق.'
        : 'AI-powered features for salon & spa businesses: smart scheduling, booking, marketing, payments, communication, growth, and team management.',
      url: `https://www.jointhedaisy.com/${locale}/features/business`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'ميزات ديزي للأعمال' : 'The Daisy Business Features',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'ميزات الأعمال للصالونات | ديزي' : 'AI Salon Business Features | The Daisy',
      description: isAr
        ? 'ميزات مدعومة بالذكاء الاصطناعي لأعمال الصالونات والسبا على منصة ديزي.'
        : 'AI-powered features for salon & spa businesses on The Daisy platform.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/features/business', locale),
  };
}

export default function FeaturesBusinessPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <FeaturesBreadcrumbSchema pageName="Business" pageSlug="business" locale={params.locale} />
      <WebPageSchema
        title="AI-Powered Salon Business Features | The Daisy"
        description="AI-powered features for salon & spa businesses: smart scheduling, booking, marketing, payments, and team management."
        url="https://www.jointhedaisy.com/features/business"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <FeaturesBusinessClient lang={params.locale} />
      <FeatureDeepDiveLinks userType="business" />
    </>
  );
}
