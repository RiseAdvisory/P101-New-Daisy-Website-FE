'use client';

import { useEffect } from 'react';
import { useChangeLanguage } from '@/store/language';

export function LocaleHtmlUpdater({ locale }: { locale: string }) {
  const { changeLanguages } = useChangeLanguage();

  useEffect(() => {
    // Sync Zustand store with URL locale
    changeLanguages(locale);

    // Update HTML attributes
    document.documentElement.lang = locale;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [locale, changeLanguages]);

  return null;
}
