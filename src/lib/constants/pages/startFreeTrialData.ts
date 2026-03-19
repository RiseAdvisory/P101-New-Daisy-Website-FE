import { I18nContent } from '@/lib/constants/i18n';

export interface StartFreeTrialContent {
  hero: {
    headline: string;
    subHeadline: string;
  };
  form: {
    buttonText: string;
  };
  success: {
    title: string;
    body: string;
  };
}

export type TrialType = 'business' | 'professional';

export const startFreeTrialData: Record<TrialType, I18nContent<StartFreeTrialContent>> = {
  business: {
    en: {
      hero: {
        headline: 'Start Your 14-Day Free Trial',
        subHeadline: 'Set up your salon, spa, or clinic on The Daisy in minutes. Full access to all features — no credit card required.',
      },
      form: {
        buttonText: 'Start Your Free Trial',
      },
      success: {
        title: 'Welcome to The Daisy!',
        body: 'Our team will reach out within 24 hours to help you get set up. In the meantime, download the app to get a head start.',
      },
    },
    ar: {
      hero: {
        headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        subHeadline: 'أعد تشغيل صالونك أو سبا أو عيادتك على ذا ديزي في دقائق. وصول كامل لجميع الميزات — لا حاجة لبطاقة ائتمان.',
      },
      form: {
        buttonText: 'ابدأ تجربتك المجانية',
      },
      success: {
        title: '!مرحبًا بك في ذا ديزي',
        body: 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك في الإعداد. في هذه الأثناء، قم بتنزيل التطبيق للبدء مبكرًا.',
      },
    },
  },
  professional: {
    en: {
      hero: {
        headline: 'Start Your Free Trial',
        subHeadline: 'Create your professional profile and start accepting bookings. Free to join — no credit card required.',
      },
      form: {
        buttonText: 'Start Your Free Trial',
      },
      success: {
        title: 'Welcome to The Daisy!',
        body: 'Our team will reach out within 24 hours to help you get set up. In the meantime, download the app to get a head start.',
      },
    },
    ar: {
      hero: {
        headline: 'ابدأ تجربتك المجانية',
        subHeadline: 'أنشئ ملفك المهني وابدأ في قبول الحجوزات. الانضمام مجاني — لا حاجة لبطاقة ائتمان.',
      },
      form: {
        buttonText: 'ابدأ تجربتك المجانية',
      },
      success: {
        title: '!مرحبًا بك في ذا ديزي',
        body: 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك في الإعداد. في هذه الأثناء، قم بتنزيل التطبيق للبدء مبكرًا.',
      },
    },
  },
};
