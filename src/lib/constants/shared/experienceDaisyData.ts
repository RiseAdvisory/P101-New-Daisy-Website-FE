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
      title: 'Experience Daisy Today',
      subtitle:
        'Discover a new way to book beauty services with cashback rewards on every appointment.',
      description:
        'Download the Daisy app and start booking your favourite beauty services. Earn cashback on every visit and enjoy a seamless booking experience.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'جرّب دايزي اليوم',
      subtitle:
        'اكتشف طريقة جديدة لحجز خدمات التجميل مع مكافآت استرداد نقدي على كل موعد.',
      description:
        'حمّل تطبيق دايزي وابدأ بحجز خدمات التجميل المفضلة لديك. اكسب استرداداً نقدياً في كل زيارة واستمتع بتجربة حجز سلسة.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },

  business: {
    en: {
      title: 'Grow Your Business with Daisy',
      subtitle:
        'Manage your beauty business smarter with AI-powered tools and attract new customers effortlessly.',
      description:
        'Download the Daisy app and unlock powerful business management features. From appointment scheduling to customer retention, we have got you covered.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'نمِّ أعمالك مع دايزي',
      subtitle:
        'أدِر أعمال التجميل بذكاء مع أدوات مدعومة بالذكاء الاصطناعي واجذب عملاء جدد بسهولة.',
      description:
        'حمّل تطبيق دايزي واطلق العنان لميزات إدارة الأعمال القوية. من جدولة المواعيد إلى الاحتفاظ بالعملاء، نحن نغطي كل شيء.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },

  professional: {
    en: {
      title: 'Elevate Your Career with Daisy',
      subtitle:
        'Take control of your schedule, build your client base, and grow your earnings as a beauty professional.',
      description:
        'Download the Daisy app and access tools designed for independent professionals. Manage your calendar, track earnings, and deliver exceptional service.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
    ar: {
      title: 'ارتقِ بمسيرتك المهنية مع دايزي',
      subtitle:
        'تحكّم بجدولك الزمني، وابنِ قاعدة عملائك، وزِد أرباحك كمتخصص في التجميل.',
      description:
        'حمّل تطبيق دايزي واحصل على أدوات مصممة للمتخصصين المستقلين. أدِر تقويمك، وتتبّع أرباحك، وقدّم خدمة استثنائية.',
      phoneMobileImage: phoneMobile,
      phoneDesktopImage: phoneDesktop,
    },
  },
};
