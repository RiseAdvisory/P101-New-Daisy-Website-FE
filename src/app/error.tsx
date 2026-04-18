'use client';

import Link from 'next/link';
import { useMemo } from 'react';

const uiStrings = {
  en: {
    heading: 'Something went wrong',
    description: 'We encountered an unexpected error. Please try again.',
    tryAgain: 'Try Again',
    goHome: 'Go to Homepage',
    contact: 'Contact Us',
    faq: 'FAQ',
    pricing: 'Pricing',
  },
  ar: {
    heading: 'حدث خطأ ما',
    description: 'واجهنا خطأً غير متوقع. يرجى المحاولة مرة أخرى.',
    tryAgain: 'حاول مرة أخرى',
    goHome: 'الصفحة الرئيسية',
    contact: 'تواصل معنا',
    faq: 'الأسئلة الشائعة',
    pricing: 'الأسعار',
  },
};

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/ar') ? 'ar' : 'en';
    }
    return 'en';
  }, []);

  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const isRtl = locale === 'ar';

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-primary px-4 text-center"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <h1 className="text-5xl font-bold text-white">{t.heading}</h1>
      <p className="mt-4 text-xl text-[#D5D9D9]">{t.description}</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          {t.tryAgain}
        </button>
        <Link
          href={`/${locale}/business`}
          className="inline-block rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
        >
          {t.goHome}
        </Link>
      </div>

      <nav aria-label="Helpful links" className="mt-10">
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-[#D5D9D9]">
          <li>
            <Link href={`/${locale}/contact`} className="underline hover:text-white">
              {t.contact}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/faq`} className="underline hover:text-white">
              {t.faq}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/pricing`} className="underline hover:text-white">
              {t.pricing}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
