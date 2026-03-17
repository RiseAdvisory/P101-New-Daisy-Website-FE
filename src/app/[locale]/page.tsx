import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { redirect } from 'next/navigation';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return {
    title: 'The Daisy - Beauty & Wellness Platform',
    description: 'AI-powered beauty and wellness platform for salons, spas, and professionals.',
    robots: 'noindex, follow',
    ...localeAlternates('/', locale),
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  redirect(`/${locale}/business`);
}
