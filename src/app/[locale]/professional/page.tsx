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
  return {
  title: 'Beauty Professional Booking App | The Daisy',
  description:
    'Join The Daisy as a beauty professional. Manage bookings, track earnings, build your client base, and grow your career with flexible scheduling and 24/7 AI support.',
  keywords: [
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
    title: 'Beauty Professional Booking App | The Daisy',
    description:
      'Join The Daisy as a beauty professional. Manage bookings, track earnings, build your client base, and grow your career with flexible scheduling and 24/7 AI support.',
    url: `https://www.jointhedaisy.com/${locale}/professional`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - For Beauty Professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Professional Booking App | The Daisy',
    description:
      'Join The Daisy as a beauty professional. Manage bookings, track earnings, build your client base, and grow your career with flexible scheduling and 24/7 AI support.',
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
        title="For Beauty Professionals | The Daisy"
        description="Join The Daisy as a beauty professional. Manage your appointments, build your client base, track earnings, and grow your career."
        url="https://www.jointhedaisy.com/professional"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'For Professionals', url: 'https://www.jointhedaisy.com/professional' }]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
          answerBlock={pageData.hero.answerBlock}
        />
      )}
      <ProfessionalClient lang={params.locale} />
    </>
  );
}
