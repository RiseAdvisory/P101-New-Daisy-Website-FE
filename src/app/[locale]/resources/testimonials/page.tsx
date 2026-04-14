import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { TestimonialsClient } from './TestimonialsClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'قصص نجاح الصالونات والمنتجعات | شهادات ديزي'
      : 'Salon & Spa Success Stories | The Daisy Testimonials',
    description: isAr
      ? 'اقرأ كيف تنمو مشاريع التجميل مع ديزي. قصص نجاح حقيقية من صالونات ومنتجعات ومتخصصين.'
      : 'Read success stories from salons, spas, beauty professionals, and customers who use The Daisy beauty booking platform.',
    keywords: [
      'salon success stories',
      'beauty business reviews',
      'spa testimonials',
      'The Daisy reviews',
      'beauty platform reviews',
      'salon owner testimonials',
      'customer success stories',
      'beauty professional reviews',
    ],
    openGraph: {
      title: isAr
        ? 'قصص نجاح الصالونات والمنتجعات | شهادات ديزي'
        : 'Salon & Spa Success Stories | The Daisy Testimonials',
      description: isAr
        ? 'اقرأ كيف تنمو مشاريع التجميل مع ديزي. قصص نجاح حقيقية من صالونات ومنتجعات ومتخصصين.'
        : 'Read success stories from salons, spas, and beauty professionals on The Daisy.',
      url: `https://www.jointhedaisy.com/${locale}/resources/testimonials`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy Testimonials',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'قصص نجاح الصالونات والمنتجعات | شهادات ديزي'
        : 'Salon & Spa Success Stories | The Daisy Testimonials',
      description: isAr
        ? 'اقرأ كيف تنمو مشاريع التجميل مع ديزي. قصص نجاح حقيقية من صالونات ومنتجعات ومتخصصين.'
        : 'Read success stories from salons and beauty professionals on The Daisy.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/resources/testimonials', locale),
  };
}

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
