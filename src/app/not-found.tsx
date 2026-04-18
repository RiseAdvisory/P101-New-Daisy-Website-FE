'use client';

import Link from 'next/link';
import { useMemo } from 'react';

const uiStrings = {
  en: {
    title: '404',
    sorry: "Sorry, we couldn't find the page you're looking for.",
    moved: 'It may have been moved, renamed, or no longer exists.',
    helpful: 'Here are some helpful links:',
    forBusiness: 'For Business Owners',
    forProfessional: 'For Professionals',
    pricing: 'Pricing',
    features: 'Features',
    faq: 'FAQ',
    contact: 'Contact Us',
    blog: 'Blog',
    glossary: 'Glossary',
  },
  ar: {
    title: '404',
    sorry: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.',
    moved: 'ربما تم نقلها أو إعادة تسميتها أو لم تعد موجودة.',
    helpful: 'إليك بعض الروابط المفيدة:',
    forBusiness: 'لأصحاب الأعمال',
    forProfessional: 'للمتخصصين',
    pricing: 'الأسعار',
    features: 'الميزات',
    faq: 'الأسئلة الشائعة',
    contact: 'تواصل معنا',
    blog: 'المقالات',
    glossary: 'المصطلحات',
  },
};

export default function NotFound() {
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
      <h1 className="text-6xl font-bold text-white">{t.title}</h1>
      <p className="mt-4 text-xl text-[#D5D9D9]">{t.sorry}</p>
      <p className="mt-2 text-[#D5D9D9]">{t.moved}</p>

      <nav aria-label="Helpful links" className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-white">{t.helpful}</h2>
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <li>
            <Link
              href={`/${locale}/business`}
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              {t.forBusiness}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/professional`}
              className="inline-block rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.forProfessional}
            </Link>
          </li>
        </ul>

        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#D5D9D9]">
          <li>
            <Link href={`/${locale}/pricing`} className="underline hover:text-white">
              {t.pricing}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/features/business`} className="underline hover:text-white">
              {t.features}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/faq`} className="underline hover:text-white">
              {t.faq}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/contact`} className="underline hover:text-white">
              {t.contact}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/resources/blog-post`} className="underline hover:text-white">
              {t.blog}
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/glossary`} className="underline hover:text-white">
              {t.glossary}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
