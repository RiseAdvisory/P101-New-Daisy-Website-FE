import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { TutorialsClient } from './TutorialsClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'دروس وإرشادات صناعة التجميل | ديزي' : 'Beauty Industry Tutorials & Guides | The Daisy',
    description: isAr
      ? 'أدلة خطوة بخطوة لأصحاب الصالونات ومحترفي التجميل. تعلّم إدارة الحجوزات، التسويق، جدولة الفريق، المدفوعات، وأكثر.'
      : 'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.',
    keywords: isAr
      ? [
          'أدلة صناعة التجميل',
          'دروس إدارة الصالون',
          'دليل تسويق الصالون',
          'كيفية إدارة مشروع تجميل',
          'إدارة موظفي الصالون',
          'إدارة الحجوزات',
          'أدلة محترفي التجميل',
          'موارد أصحاب الصالونات',
          'دروس ديزي',
        ]
      : [
          'beauty industry guides',
          'salon management tutorials',
          'salon marketing guide',
          'beauty business how-to',
          'salon staff management',
          'booking management guide',
          'beauty professional guides',
          'salon owner resources',
          'The Daisy tutorials',
        ],
    openGraph: {
      title: isAr ? 'دروس وإرشادات صناعة التجميل | ديزي' : 'Beauty Industry Tutorials & Guides | The Daisy',
      description: isAr
        ? 'أدلة خطوة بخطوة لأصحاب الصالونات ومحترفي التجميل: إدارة الحجوزات، التسويق، جدولة الفريق، المدفوعات، وأكثر.'
        : 'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.',
      url: `https://www.jointhedaisy.com/${locale}/resources/tutorials`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'دروس ديزي' : 'The Daisy Tutorials',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'دروس وإرشادات صناعة التجميل | ديزي' : 'Beauty Industry Tutorials & Guides | The Daisy',
      description: isAr
        ? 'أدلة خطوة بخطوة لأصحاب الصالونات ومحترفي التجميل.'
        : 'Step-by-step guides for salon owners and beauty professionals.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/resources/tutorials', locale),
  };
}

export default function TutorialsPage() {
  return <TutorialsClient />;
}
