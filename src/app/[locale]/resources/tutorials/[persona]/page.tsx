import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  TutorialsList,
  TUTORIAL_PERSONAS,
  type TutorialPersona,
} from '../TutorialsList';

export const dynamicParams = false;

export function generateStaticParams() {
  return TUTORIAL_PERSONAS.map((persona) => ({ persona }));
}

const PERSONA_LABEL = {
  business: { en: 'Salons & Spas', ar: 'الصالونات والمنتجعات' },
  professional: { en: 'Beauty Professionals', ar: 'محترفو التجميل' },
} as const;

export function generateMetadata({
  params,
}: {
  params: { locale: string; persona: string };
}): Metadata {
  const { locale, persona } = params;
  if (!TUTORIAL_PERSONAS.includes(persona as TutorialPersona)) {
    return { title: 'Not Found' };
  }
  const isAr = locale === 'ar';
  const label = PERSONA_LABEL[persona as TutorialPersona][isAr ? 'ar' : 'en'];

  const title = isAr
    ? `دروس وأدلة ${label} | ديزي`
    : `${label} Tutorials & Guides | The Daisy`;
  const description = isAr
    ? `أدلة خطوة بخطوة لـ${label}: إدارة الحجوزات، التسويق، الجدولة، المدفوعات، والمزيد.`
    : `Step-by-step guides for ${label}. Booking management, marketing strategies, staff scheduling, payments, and more.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.jointhedaisy.com/${locale}/resources/tutorials/${persona}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'دروس ديزي' : 'The Daisy Tutorials',
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
    alternates: localeAlternates(`/resources/tutorials/${persona}`, locale),
  };
}

export default function TutorialsPersonaPage({
  params,
}: {
  params: { locale: string; persona: string };
}) {
  const { locale, persona } = params;
  if (!TUTORIAL_PERSONAS.includes(persona as TutorialPersona)) notFound();
  return (
    <TutorialsList
      locale={locale}
      persona={persona as TutorialPersona}
    />
  );
}
