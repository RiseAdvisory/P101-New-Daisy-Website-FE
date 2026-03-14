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
        'Your solution for managing bookings and elevating your business.',
      description: 'Download Now!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'نمِّ، نظم، وازدهر مع ذا ديزي',
      subtitle:
        'حلّك لإدارة الحجوزات والارتقاء بعملك.',
      description: 'حمل التطبيق الآن!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },

  professional: {
    en: {
      title: 'Connect, Engage, and Build with The Daisy',
      subtitle:
        'Empowering you to grow your business and reach more clients.',
      description: 'Download Now!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'تواصل، تفاعل، وابنِ مع ذا ديزي',
      subtitle:
        'نمكنك من تنمية عملك والوصول إلى المزيد من العملاء.',
      description: 'حمل التطبيق الآن!',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },
};
