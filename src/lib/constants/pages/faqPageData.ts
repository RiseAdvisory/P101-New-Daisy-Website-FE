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
        title: 'Frequently Asked Questions',
        subtitle: 'Customer FAQ',
        description:
          'Find answers to the most common questions about using Daisy as a customer. From booking services to earning cashback, we have you covered.',
      },
      business: {
        title: 'Frequently Asked Questions',
        subtitle: 'Business FAQ',
        description:
          'Everything you need to know about using Daisy to manage and grow your beauty or wellness business. Get answers about features, pricing, and more.',
      },
      professional: {
        title: 'Frequently Asked Questions',
        subtitle: 'Professional FAQ',
        description:
          'Answers to common questions for beauty and wellness professionals using Daisy. Learn about scheduling, client management, and earning opportunities.',
      },
    },
  },

  ar: {
    listFaq: {
      customer: {
        title: 'الأسئلة الشائعة',
        subtitle: 'أسئلة العملاء',
        description:
          'اعثر على إجابات لأكثر الأسئلة شيوعاً حول استخدام ديزي كعميل. من حجز الخدمات إلى كسب الاسترداد النقدي، لدينا كل ما تحتاجه.',
      },
      business: {
        title: 'الأسئلة الشائعة',
        subtitle: 'أسئلة الأعمال',
        description:
          'كل ما تحتاج معرفته حول استخدام ديزي لإدارة وتنمية أعمال التجميل أو العافية الخاصة بك. احصل على إجابات حول الميزات والتسعير والمزيد.',
      },
      professional: {
        title: 'الأسئلة الشائعة',
        subtitle: 'أسئلة المحترفين',
        description:
          'إجابات على الأسئلة الشائعة لمحترفي التجميل والعافية الذين يستخدمون ديزي. تعرف على الجدولة وإدارة العملاء وفرص الكسب.',
      },
    },
  },
};
