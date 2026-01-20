import { create } from 'zustand';

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

export const useChangeLanguage = create<ILanguageStore>((set) => ({
  lang:
    typeof window !== 'undefined' ? localStorage.getItem('lang') || 'en' : 'en',
  changeLanguages: (newLang: string) => {
    set(() => ({
      lang: newLang,
    }));

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
      updateDocumentDirection(newLang);
    }
  },
}));

// Initialize document direction on load (deferred)
if (typeof window !== 'undefined') {
  const initialLang = localStorage.getItem('lang') || 'en';
  updateDocumentDirection(initialLang);
}
