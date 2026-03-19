import { I18nContent } from '../i18n';
import { StaticImageData } from 'next/image';
import phoneMobile from '../../../assets/images/PHONE.png';
import phoneDesktop from '../../../assets/images/PHONEallheight.png';

export interface ExperienceDaisyContent {
  title: string;
  subtitle: string;
  description: string;
  phoneMobileImage: StaticImageData;
  phoneDesktopImage: StaticImageData;
}

export type ExperienceDaisyPageType = 'customer' | 'business' | 'professional';

export type ExperienceDaisyData = Record<
  ExperienceDaisyPageType,
  I18nContent<ExperienceDaisyContent>
>;

export const experienceDaisyData: ExperienceDaisyData = {
  customer: {
    en: {
      title: 'Discover, Book, and Enjoy with The Daisy',
      subtitle:
        'Your trusted platform for seamless beauty and wellness services.',
      description: 'Download Now!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'اكتشف، احجز، واستمتع مع ذا ديزي',
      subtitle:
        'منصتك الموثوقة لخدمات الجمال والعافية السلسة.',
      description: 'حمل التطبيق الآن!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },

  business: {
    en: {
      title: 'Grow, Manage, and Thrive with The Daisy',
      subtitle:
        'Download and start your 14-day free trial — no credit card required.',
      description: 'Download Now!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'نمِّ، نظم، وازدهر مع ذا ديزي',
      subtitle:
        'حمّل وابدأ تجربتك المجانية لمدة 14 يومًا — لا حاجة لبطاقة ائتمان.',
      description: 'حمل التطبيق الآن!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },

  professional: {
    en: {
      title: 'Your Next Client Is Already Searching',
      subtitle:
        'Download and start your free trial — go live in minutes.',
      description: 'Download Now!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'عميلك القادم يبحث عنك الآن',
      subtitle:
        'حمّل وابدأ تجربتك المجانية — انطلق في دقائق.',
      description: 'حمل التطبيق الآن!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },
};
