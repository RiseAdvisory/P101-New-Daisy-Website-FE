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

type LocalizedMeta = { title: string; description: string };

const metadataByPersona: Record<
  FaqPersona,
  { en: LocalizedMeta; ar: LocalizedMeta }
> = {
  business: {
    en: {
      title: 'FAQ for Beauty Businesses | The Daisy',
      description:
        'Answers to common questions about The Daisy salon management platform — pricing, AI receptionist, booking, payments, and migration.',
    },
    ar: {
      title: 'الأسئلة الشائعة لأعمال التجميل | ديزي',
      description:
        'إجابات على الأسئلة الشائعة حول منصة ديزي لإدارة الصالونات — الأسعار، موظف الاستقبال الذكي، الحجز، المدفوعات، ونقل البيانات.',
    },
  },
  customer: {
    en: {
      title: 'FAQ for Customers | The Daisy',
      description:
        'Answers to common questions about booking beauty services with The Daisy — how to book, cashback rewards, payments, and account management.',
    },
    ar: {
      title: 'الأسئلة الشائعة للعملاء | ديزي',
      description:
        'إجابات على الأسئلة الشائعة حول حجز خدمات التجميل عبر ديزي — كيفية الحجز ومكافآت الكاشباك والمدفوعات وإدارة الحساب.',
    },
  },
  professional: {
    en: {
      title: 'FAQ for Beauty Professionals | The Daisy',
      description:
        'Answers to common questions for beauty professionals on The Daisy — earnings, scheduling, profile visibility, and going independent.',
    },
    ar: {
      title: 'الأسئلة الشائعة لمحترفي التجميل | ديزي',
      description:
        'إجابات على الأسئلة الشائعة لمحترفي التجميل على ديزي — الأرباح والجدولة وظهور الملف الشخصي والاستقلال المهني.',
    },
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string; persona: string };
}): Metadata {
  const { locale, persona } = params;
  if (!VALID_FAQ_PERSONAS.includes(persona as FaqPersona)) return {};
  const isAr = locale === 'ar';
  const meta = isAr
    ? metadataByPersona[persona as FaqPersona].ar
    : metadataByPersona[persona as FaqPersona].en;

  return {
    title: meta.title,
    description: meta.description,
    keywords: isAr
      ? [
          'الأسئلة الشائعة لحجز التجميل',
          'أسئلة تطبيق الصالون',
          `الأسئلة الشائعة ${persona === 'business' ? 'للأعمال' : persona === 'professional' ? 'للمحترفين' : 'للعملاء'}`,
          'مساعدة ديزي',
          'أسئلة منصة التجميل',
        ]
      : [
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
          alt: isAr ? `الأسئلة الشائعة ديزي - ${persona}` : `The Daisy FAQ - ${persona}`,
        },
      ],
      locale: isAr ? 'ar_KW' : 'en_US',
      alternateLocale: isAr ? ['en_US'] : ['ar_KW'],
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
  const isAr = locale === 'ar';
  const schemaMeta = isAr
    ? metadataByPersona[persona as FaqPersona].ar
    : metadataByPersona[persona as FaqPersona].en;
  const personaCrumbName = isAr
    ? persona === 'business'
      ? 'الأعمال'
      : persona === 'professional'
        ? 'المحترفون'
        : 'العملاء'
    : persona.charAt(0).toUpperCase() + persona.slice(1);

  return (
    <>
      <WebPageSchema
        title={schemaMeta.title}
        description={schemaMeta.description}
        url={`https://www.jointhedaisy.com/${locale}/faq/${persona}`}
        dateModified="2026-04-13T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[
          { name: isAr ? 'الأسئلة الشائعة' : 'FAQ', url: '/faq' },
          { name: personaCrumbName, url: `/faq/${persona}` },
        ]}
      />
      <SpeakableSchema
        title={schemaMeta.title}
        url={`https://www.jointhedaisy.com/${locale}/faq/${persona}`}
        cssSelectors={['[data-geo-answer]', '.faq-answer']}
      />
      <FaqSchema faqs={allFaqs} />
      <FaqPersonaClient persona={persona as FaqPersona} />
    </>
  );
}
