import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { ProfessionalClient } from './ProfessionalClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  const title = isAr
    ? 'تطبيق الحجز لمحترفي التجميل | ديزي'
    : 'Beauty Professional Booking App | The Daisy';
  const description = isAr
    ? 'انضم إلى ديزي كمحترف تجميل. أدِر الحجوزات وتتبّع الأرباح وابنِ قاعدة عملائك ونمِّ مسيرتك المهنية مع جدولة مرنة ودعم ذكاء اصطناعي على مدار الساعة.'
    : 'Join The Daisy as a beauty professional. Manage bookings, track earnings, build your client base, and grow your career with flexible scheduling and 24/7 AI support.';
  return {
    title,
    description,
    keywords: isAr
      ? [
          'منصة محترفي التجميل',
          'تطبيق حجز مصففي الشعر',
          'منصة فنيي الأظافر',
          'وظائف معالجي المنتجعات',
          'مختصة تجميل مستقلة',
          'مصفف مستقل',
          'مهنة التجميل',
          'جدولة موظفي الصالون',
          'أرباح محترفي التجميل',
          'محترف العافية',
        ]
      : [
          'beauty professional platform',
          'hairstylist booking app',
          'nail technician platform',
          'spa therapist jobs',
          'freelance beautician',
          'independent stylist',
          'beauty career',
          'salon staff scheduling',
          'beauty professional earnings',
          'wellness professional',
        ],
    openGraph: {
      title,
      description,
      url: `https://www.jointhedaisy.com/${locale}/professional`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr
            ? 'ديزي - لمحترفي التجميل'
            : 'The Daisy - For Beauty Professionals',
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
    alternates: localeAlternates('/professional', locale),
  };
}

export default function ProfessionalPage({ params }: { params: { locale: string } }) {
  const pageData = t(professionalPageData, params.locale);

  return (
    <>
      <WebPageSchema
        title={
          params.locale === 'ar'
            ? 'لمحترفي التجميل | ديزي'
            : 'For Beauty Professionals | The Daisy'
        }
        description={
          params.locale === 'ar'
            ? 'انضم إلى ديزي كمحترف تجميل. أدِر مواعيدك وابنِ قاعدة عملائك وتتبّع أرباحك ونمِّ مسيرتك المهنية.'
            : 'Join The Daisy as a beauty professional. Manage your appointments, build your client base, track earnings, and grow your career.'
        }
        url={`https://www.jointhedaisy.com/${params.locale}/professional`}
        dateModified="2026-03-17T00:00:00.000Z"
        primaryImage="/images/og/og-default.jpg"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[
          {
            name: params.locale === 'ar' ? 'للمحترفين' : 'For Professionals',
            url: 'https://www.jointhedaisy.com/professional',
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
          locale={params.locale}
        />
      )}
      <ProfessionalClient lang={params.locale} />
    </>
  );
}
