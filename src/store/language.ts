import { create } from 'zustand';

const SUPPORTED_LOCALES = ['en', 'ar'];

interface ILanguageStore {
  lang: string;
  changeLanguages: (newLang: string) => void;
}

/**
 * Helper to update document direction without blocking the main thread.
 * Uses queueMicrotask to defer DOM manipulation.
 */
function updateDocumentDirection(lang: string): void {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Use queueMicrotask to avoid blocking the main thread during initial render
  if (typeof queueMicrotask !== 'undefined') {
    queueMicrotask(() => {
      // Update both html and body elements for Tailwind RTL support
      if (document.documentElement.getAttribute('dir') !== dir) {
        document.documentElement.setAttribute('dir', dir);
      }
      if (document.body.getAttribute('dir') !== dir) {
        document.body.setAttribute('dir', dir);
      }
    });
  } else {
    // Fallback for older browsers
    setTimeout(() => {
      // Update both html and body elements for Tailwind RTL support
      if (document.documentElement.getAttribute('dir') !== dir) {
        document.documentElement.setAttribute('dir', dir);
      }
      if (document.body.getAttribute('dir') !== dir) {
        document.body.setAttribute('dir', dir);
      }
    }, 0);
  }
}

/**
 * Extract the current locale from the URL path.
 * Returns the locale segment if present, otherwise null.
 */
function getLocaleFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  const segments = window.location.pathname.split('/');
  // URL format: /{locale}/rest-of-path
  if (segments.length >= 2 && SUPPORTED_LOCALES.includes(segments[1])) {
    return segments[1];
  }
  return null;
}

/**
 * Navigate to the same page in a different locale.
 * Replaces the locale segment in the current URL path.
 */
function navigateToLocale(newLang: string): void {
  if (typeof window === 'undefined') return;
  const currentLocale = getLocaleFromUrl();
  if (!currentLocale || currentLocale === newLang) return;

  const pathname = window.location.pathname;
  // Replace /{currentLocale}/ with /{newLang}/
  const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
  window.location.pathname = newPathname;
}

export const useChangeLanguage = create<ILanguageStore>((set, get) => ({
  lang:
    typeof window !== 'undefined'
      ? getLocaleFromUrl() || localStorage.getItem('lang') || 'en'
      : 'en',
  changeLanguages: (newLang: string) => {
    const currentLang = get().lang;

    set(() => ({
      lang: newLang,
    }));

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
      // Sync to cookie so server components and middleware can read locale
      document.cookie = `locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      updateDocumentDirection(newLang);

      // If the language actually changed (user action, not initial sync),
      // navigate to the same page in the new locale
      if (currentLang !== newLang) {
        navigateToLocale(newLang);
      }
    }
  },
}));

// Initialize document direction on load (deferred)
if (typeof window !== 'undefined') {
  const initialLang = getLocaleFromUrl() || localStorage.getItem('lang') || 'en';
  // Sync localStorage and cookie with URL locale
  localStorage.setItem('lang', initialLang);
  document.cookie = `locale=${initialLang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  updateDocumentDirection(initialLang);
}
