import { I18nContent } from '../i18n';

export interface FaqHeroContent {
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqPageContent {
  listFaq: Record<string, FaqHeroContent>;
}

export const faqPageData: I18nContent<FaqPageContent> = {
  en: {
    listFaq: {
      customer: {
        title: 'support',
        subtitle: 'Frequently Asked Questions',
        description:
          'Find answers to the most commonly asked questions about our services, products, and policies',
      },
      business: {
        title: 'support',
        subtitle: 'Frequently Asked Questions',
        description:
          'Find answers to the most commonly asked questions about our services, products, and policies',
      },
      professional: {
        title: 'support',
        subtitle: 'Frequently Asked Questions',
        description:
          'Find answers to the most commonly asked questions about our services, products, and policies',
      },
    },
  },

  ar: {
    listFaq: {
      customer: {
        title: 'الدعم',
        subtitle: 'الأسئلة الشائعة',
        description:
          'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول خدماتنا ومنتجاتنا وسياساتنا',
      },
      business: {
        title: 'الدعم',
        subtitle: 'الأسئلة الشائعة',
        description:
          'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول خدماتنا ومنتجاتنا وسياساتنا',
      },
      professional: {
        title: 'الدعم',
        subtitle: 'الأسئلة الشائعة',
        description:
          'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول خدماتنا ومنتجاتنا وسياساتنا',
      },
    },
  },
};
