import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { localeAlternates } from '@/lib/utils/metadata';
import { BlogPostList, PERSONAS } from '../BlogPostList';
import type { UserType } from '@/lib/api/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return PERSONAS.map((persona) => ({ persona }));
}

const PERSONA_LABEL = {
  business: { en: 'Salons & Spas', ar: 'الصالونات والمنتجعات' },
  professional: { en: 'Beauty Professionals', ar: 'محترفو التجميل' },
  customer: { en: 'Beauty Customers', ar: 'عملاء التجميل' },
} as const;

export function generateMetadata({
  params,
}: {
  params: { locale: string; persona: string };
}): Metadata {
  const { locale, persona } = params;
  if (!PERSONAS.includes(persona as UserType)) return { title: 'Not Found' };
  const isAr = locale === 'ar';
  const label = PERSONA_LABEL[persona as UserType][isAr ? 'ar' : 'en'];

  const title = isAr
    ? `مدونة ${label} | موارد ديزي`
    : `${label} Blog | The Daisy Resources`;
  const description = isAr
    ? `أحدث المقالات والرؤى لـ${label} من ديزي: نصائح وأدلة واتجاهات قطاع التجميل والعافية.`
    : `Latest articles and industry insights from The Daisy for ${label}. Tips, guides, and beauty + wellness industry trends.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.jointhedaisy.com/${locale}/resources/blog-post/${persona}`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'مدونة ديزي' : 'The Daisy Blog',
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
    alternates: localeAlternates(`/resources/blog-post/${persona}`, locale),
  };
}

export default function BlogPostPersonaPage({
  params,
}: {
  params: { locale: string; persona: string };
}) {
  const { locale, persona } = params;
  if (!PERSONAS.includes(persona as UserType)) notFound();
  return <BlogPostList locale={locale} persona={persona as UserType} />;
}
