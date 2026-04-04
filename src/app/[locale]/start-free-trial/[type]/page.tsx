import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { localeAlternates } from '@/lib/utils/metadata';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { StartFreeTrialClient } from './StartFreeTrialClient';
import { startFreeTrialData, TrialType } from '@/lib/constants/pages/startFreeTrialData';
import { t } from '@/lib/constants/i18n';

const VALID_TYPES: TrialType[] = ['business', 'professional'];

const metadataByType: Record<TrialType, { en: { title: string; description: string } }> = {
  business: {
    en: {
      title: 'Start Your Free Trial — Salon & Spa | The Daisy',
      description:
        'Set up your beauty business on The Daisy in minutes. 14-day free trial with full access to AI receptionist, booking, payments, marketing, and staff management. No credit card required.',
    },
  },
  professional: {
    en: {
      title: 'Start Free Trial — Professionals | The Daisy',
      description:
        'Create your professional profile on The Daisy and start accepting bookings. Free to join with flexible scheduling and 24/7 AI support.',
    },
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return VALID_TYPES.map((type) => ({ type }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; type: string };
}): Metadata {
  const { locale, type } = params;
  const trialType = VALID_TYPES.includes(type as TrialType)
    ? (type as TrialType)
    : 'business';
  const meta = metadataByType[trialType].en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.jointhedaisy.com/${locale}/start-free-trial/${trialType}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy - Start Free Trial',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(`/start-free-trial/${trialType}`, locale),
  };
}

export default function StartFreeTrialPage({
  params,
}: {
  params: { locale: string; type: string };
}) {
  const { locale, type } = params;

  if (!VALID_TYPES.includes(type as TrialType)) {
    redirect(`/${locale}/start-free-trial/business`);
  }

  const trialType = type as TrialType;
  const data = t(startFreeTrialData[trialType], locale);
  const defaultType = trialType === 'business' ? 'business' : 'professional';

  return (
    <>
      <WebPageSchema
        title={metadataByType[trialType].en.title}
        description={metadataByType[trialType].en.description}
        url={`https://www.jointhedaisy.com/start-free-trial/${trialType}`}
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        items={[
          {
            name: trialType === 'business' ? 'For Business' : 'For Professionals',
            url: `https://www.jointhedaisy.com/${trialType}`,
          },
          {
            name: 'Start Free Trial',
            url: `https://www.jointhedaisy.com/start-free-trial/${trialType}`,
          },
        ]}
      />
      <section className="w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-[32px] leading-10 md:text-[48px] md:leading-[60px] font-semibold mb-6">
            {data.hero.headline}
          </h1>
          <p className="text-[#D5D9D9] ltr:font-montserrat text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {data.hero.subHeadline}
          </p>
        </div>
      </section>
      <StartFreeTrialClient data={data} defaultType={defaultType} />
    </>
  );
}
