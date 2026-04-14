import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { FeaturesProfessionalClient } from './FeaturesProfessionalClient';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FeatureDeepDiveLinks } from '@/components/featuresPage/FeatureDeepDiveLinks';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'ميزات محترفي التجميل | ديزي' : 'Beauty Professional Features | The Daisy',
    description: isAr
      ? 'ميزات لمحترفي التجميل: جدولة المواعيد، إدارة العملاء، تتبع الأرباح، حجوزات الخدمات، وأدوات لتنمية مسيرتك كمصفف شعر أو فني أظافر أو معالج سبا.'
      : 'Features for beauty professionals: appointment scheduling, client management, earnings tracking, service bookings, and tools to grow your career as a stylist, nail tech, or spa therapist.',
    keywords: isAr
      ? [
          'جدولة مصفف الشعر',
          'مواعيد فني الأظافر',
          'أدوات محترفي التجميل',
          'ميزات معالج السبا',
          'تتبع أرباح المصمم',
          'إدارة عملاء التجميل',
          'نظام حجز للمحترفين',
          'ميزات تطبيق التجميل',
          'أدوات فريق الصالون',
          'نمو مسيرة التجميل',
        ]
      : [
          'hairstylist scheduling',
          'nail tech appointments',
          'beauty professional tools',
          'spa therapist features',
          'stylist earnings tracking',
          'beauty client management',
          'professional booking system',
          'beautician app features',
          'salon staff tools',
          'beauty career growth',
        ],
    openGraph: {
      title: isAr ? 'ميزات محترفي التجميل | ديزي' : 'Beauty Professional Features | The Daisy',
      description: isAr
        ? 'ميزات لمحترفي التجميل: الجدولة، إدارة العملاء، وتتبع الأرباح.'
        : 'Features for beauty professionals: scheduling, client management, and earnings tracking.',
      url: `https://www.jointhedaisy.com/${locale}/features/professional`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'ميزات ديزي للمحترفين' : 'The Daisy Professional Features',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'ميزات محترفي التجميل | ديزي' : 'Beauty Professional Features | The Daisy',
      description: isAr
        ? 'ميزات لمحترفي التجميل لتنمية مسيرتهم.'
        : 'Features for beauty professionals to grow their careers.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/features/professional', locale),
  };
}

export default function FeaturesProfessionalPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <FeaturesBreadcrumbSchema pageName="Professional" pageSlug="professional" locale={params.locale} />
      <WebPageSchema
        title="Beauty Professional Features | The Daisy"
        description="Features for beauty professionals: appointment scheduling, client management, earnings tracking, and tools to grow your career."
        url="https://www.jointhedaisy.com/features/professional"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <FeaturesProfessionalClient lang={params.locale} />
      <FeatureDeepDiveLinks userType="professional" />
    </>
  );
}
