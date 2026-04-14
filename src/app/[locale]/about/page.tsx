import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { AboutClient } from './AboutClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { ProfilePageSchema } from '@/components/seo/ProfilePageSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
  title: isAr
    ? 'من نحن | ديزي - سوق التجميل والعافية'
    : 'About Us | The Daisy - Beauty & Wellness Marketplace',
  description: isAr
    ? 'تعرّف على ديزي، المنصة المدعومة بالذكاء الاصطناعي التي تساعد مشاريع التجميل على النمو من خلال الحجز الذكي وموظف الاستقبال الذكي واستقطاب العملاء.'
    : 'The Daisy is an AI-powered beauty platform helping salons, spas, and clinics grow through smart booking, marketing, and a 24/7 AI receptionist. Learn our story.',
  keywords: [
    'about The Daisy',
    'beauty marketplace',
    'wellness platform',
    'salon booking company',
    'beauty industry innovation',
    'spa marketplace',
    'beauty tech startup',
    'wellness technology',
  ],
  openGraph: {
    title: isAr
      ? 'من نحن | ديزي - سوق التجميل والعافية'
      : 'About Us | The Daisy - Beauty & Wellness Marketplace',
    description: isAr
      ? 'تعرّف على ديزي، المنصة المدعومة بالذكاء الاصطناعي التي تساعد مشاريع التجميل على النمو من خلال الحجز الذكي وموظف الاستقبال الذكي واستقطاب العملاء.'
      : 'Learn about The Daisy, the beauty and wellness marketplace connecting customers with salons and beauty professionals.',
    url: `https://www.jointhedaisy.com/${locale}/about`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'About The Daisy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: isAr
      ? 'من نحن | ديزي - سوق التجميل والعافية'
      : 'About Us | The Daisy - Beauty & Wellness Marketplace',
    description: isAr
      ? 'تعرّف على ديزي، المنصة المدعومة بالذكاء الاصطناعي التي تساعد مشاريع التجميل على النمو من خلال الحجز الذكي وموظف الاستقبال الذكي واستقطاب العملاء.'
      : 'Learn about The Daisy beauty and wellness marketplace.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/about', locale),
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <WebPageSchema
        title="About Us | The Daisy - Beauty & Wellness Marketplace"
        description="Learn about The Daisy, the beauty and wellness marketplace connecting customers with salons, spas, and beauty professionals."
        url="https://www.jointhedaisy.com/about"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[{ name: 'About Us', url: 'https://www.jointhedaisy.com/about' }]}
      />
      <ProfilePageSchema url={`https://www.jointhedaisy.com/${params.locale}/about`} />
      <AboutClient lang={params.locale} />
    </>
  );
}
