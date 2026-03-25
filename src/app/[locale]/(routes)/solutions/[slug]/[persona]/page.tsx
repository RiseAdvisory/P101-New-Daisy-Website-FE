import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { getAngleData, getAllAngleParams } from '@/lib/constants/solutions/angles';
import { t } from '@/lib/constants/i18n';
import { SolutionAngleClient } from './SolutionAngleClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAngleParams();
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string; persona: string };
}): Metadata {
  const data = getAngleData(params.slug, params.persona);
  if (!data) return { title: 'Not Found' };

  const pageData = t(data, params.locale);
  const title = pageData.hero?.headline || 'The Daisy';
  const description = pageData.hero?.subHeadline || '';

  return {
    title: `${title} | The Daisy`,
    description,
    keywords: pageData.hero?.answerBlock
      ? [params.slug.replace(/-/g, ' '), params.persona, 'beauty', 'salon', 'spa']
      : [],
    openGraph: {
      title: `${title} | The Daisy`,
      description,
      url: `https://www.jointhedaisy.com/${params.locale}/solutions/${params.slug}/${params.persona}`,
      type: 'website',
      images: [
        { url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | The Daisy`,
      description,
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates(
      `/solutions/${params.slug}/${params.persona}`,
      params.locale,
    ),
  };
}

export default function SolutionAnglePage({
  params,
}: {
  params: { locale: string; slug: string; persona: string };
}) {
  const data = getAngleData(params.slug, params.persona);
  if (!data) notFound();

  const pageData = t(data, params.locale);
  const personaLabel = params.persona === 'business' ? 'For Business' : 'For Professionals';
  const baseUrl = 'https://www.jointhedaisy.com';

  return (
    <>
      <WebPageSchema
        title={`${pageData.hero?.headline || 'Solutions'} | The Daisy`}
        description={pageData.hero?.subHeadline || ''}
        url={`${baseUrl}/${params.locale}/solutions/${params.slug}/${params.persona}`}
      />
      <PageBreadcrumbSchema
        items={[
          { name: 'Solutions', url: `${baseUrl}/solutions` },
          { name: pageData.hero?.headline || params.slug, url: `${baseUrl}/solutions/${params.slug}` },
          { name: personaLabel, url: `${baseUrl}/solutions/${params.slug}/${params.persona}` },
        ]}
      />
      {pageData.fallbackFaqs && <FaqSchema faqs={pageData.fallbackFaqs} />}
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
        />
      )}
      <SolutionAngleClient
        lang={params.locale}
        pageData={pageData}
        persona={params.persona}
      />
    </>
  );
}
