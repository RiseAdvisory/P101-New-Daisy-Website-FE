import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { localeAlternates } from '@/lib/utils/metadata';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { SpeakableSchema } from '@/components/seo/SpeakableSchema';
import { FaqSchema } from '@/components/seo/FaqSchema';
import {
  faqPageData,
  FaqPersona,
  VALID_FAQ_PERSONAS,
} from '@/lib/constants/pages/faqPageData';
import { t } from '@/lib/constants/i18n';
import { FaqPersonaClient } from './FaqPersonaClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return VALID_FAQ_PERSONAS.map((persona) => ({ persona }));
}

const metadataByPersona: Record<
  FaqPersona,
  { title: string; description: string }
> = {
  business: {
    title: 'FAQ for Beauty Businesses | The Daisy',
    description:
      'Answers to common questions about The Daisy salon management platform — pricing, AI receptionist, booking, payments, and migration.',
  },
  customer: {
    title: 'FAQ for Customers | The Daisy',
    description:
      'Answers to common questions about booking beauty services with The Daisy — how to book, cashback rewards, payments, and account management.',
  },
  professional: {
    title: 'FAQ for Beauty Professionals | The Daisy',
    description:
      'Answers to common questions for beauty professionals on The Daisy — earnings, scheduling, profile visibility, and going independent.',
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string; persona: string };
}): Metadata {
  const { locale, persona } = params;
  if (!VALID_FAQ_PERSONAS.includes(persona as FaqPersona)) return {};
  const meta = metadataByPersona[persona as FaqPersona];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'beauty booking FAQ',
      'salon app questions',
      `${persona} FAQ`,
      'the daisy help',
      'beauty platform questions',
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.jointhedaisy.com/${locale}/faq/${persona}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: `The Daisy FAQ - ${persona}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(`/faq/${persona}`, locale),
  };
}

export default function FaqPersonaPage({
  params,
}: {
  params: { locale: string; persona: string };
}) {
  const { locale, persona } = params;
  if (!VALID_FAQ_PERSONAS.includes(persona as FaqPersona)) notFound();

  const data = t(faqPageData, locale);
  const personaData = data[persona as FaqPersona];
  const allFaqs = personaData.categories.flatMap((cat) => cat.questions);

  return (
    <>
      <WebPageSchema
        title={metadataByPersona[persona as FaqPersona].title}
        description={metadataByPersona[persona as FaqPersona].description}
        url={`https://www.jointhedaisy.com/${locale}/faq/${persona}`}
        dateModified="2026-04-13T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[
          {
            name: 'FAQ',
            url: `https://www.jointhedaisy.com/${locale}/faq`,
          },
          {
            name: persona.charAt(0).toUpperCase() + persona.slice(1),
            url: `https://www.jointhedaisy.com/${locale}/faq/${persona}`,
          },
        ]}
      />
      <SpeakableSchema
        title={metadataByPersona[persona as FaqPersona].title}
        url={`https://www.jointhedaisy.com/${locale}/faq/${persona}`}
        cssSelectors={['[data-geo-answer]', '.faq-answer']}
      />
      <FaqSchema faqs={allFaqs} />
      <FaqPersonaClient persona={persona as FaqPersona} />
    </>
  );
}
