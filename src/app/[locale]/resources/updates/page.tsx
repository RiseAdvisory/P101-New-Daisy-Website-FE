import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { UpdatesClient } from './UpdatesClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'تحديثات المنصة | أخبار ديزي لحجز التجميل'
      : 'Platform Updates | The Daisy Beauty Booking News',
    description: isAr
      ? 'ابقَ على اطلاع بآخر تحديثات منصة ديزي. ميزات جديدة وتحسينات وأخبار الصناعة.'
      : 'Stay informed with the latest updates, new features, and announcements from The Daisy beauty booking platform. See what is new for salons, spas, and customers.',
    keywords: [
      'beauty app updates',
      'salon platform news',
      'new features',
      'The Daisy updates',
      'product updates',
      'beauty booking news',
      'spa platform announcements',
      'wellness app updates',
    ],
    openGraph: {
      title: isAr
        ? 'تحديثات المنصة | أخبار ديزي لحجز التجميل'
        : 'Platform Updates | The Daisy Beauty Booking News',
      description: isAr
        ? 'ابقَ على اطلاع بآخر تحديثات منصة ديزي. ميزات جديدة وتحسينات وأخبار الصناعة.'
        : 'Stay informed with the latest updates and features from The Daisy beauty booking platform.',
      url: `https://www.jointhedaisy.com/${locale}/resources/updates`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy Platform Updates',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'تحديثات المنصة | أخبار ديزي لحجز التجميل'
        : 'Platform Updates | The Daisy Beauty Booking News',
      description: isAr
        ? 'ابقَ على اطلاع بآخر تحديثات منصة ديزي. ميزات جديدة وتحسينات وأخبار الصناعة.'
        : 'Stay informed with the latest updates from The Daisy beauty platform.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/resources/updates', locale),
  };
}

export default function UpdatesPage() {
  return <UpdatesClient />;
}
