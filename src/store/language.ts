import { create } from 'zustand';

interface ILanguageStore {
  lang: string;
  changeLanguages: (newLang: string) => void;
}

export const useChangeLanguage = create<ILanguageStore>((set) => ({
  lang: 'en',
  changeLanguages: (newLang: string) => {
    set(() => ({
      lang: newLang,
    }));
    document.body.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  },
}));
