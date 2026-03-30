import { I18nContent } from '../i18n';
import Customers from '../../../assets/images/join-customer-experience.webp';
import Vendors from '../../../assets/images/join-vendor-partners.webp';
import Colleagues from '../../../assets/images/join-colleagues-team.webp';
import { StaticImageData } from 'next/image';

export interface JoinDaisyItem {
  image: StaticImageData;
  title: string;
  description: string;
  linksto: string;
  textButton: string;
}

export interface JoinDaisyData {
  title: string;
  subtitle: string;
  items: JoinDaisyItem[];
}

export const joinDaisyData: I18nContent<JoinDaisyData> = {
  en: {
    title: 'Join The Daisy',
    subtitle:
      'Become part of our vision. Customers deserve nothing less than exceptional service, and exceptional providers should thrive with greater visibility and growth.',
    items: [
      {
        image: Customers,
        title: 'As Customers',
        description:
          'You deserve the confidence that every experience will be seamless and beyond perfect.',
        linksto: '/get-the-app',
        textButton: 'Get The App',
      },
      {
        image: Vendors,
        title: 'As Vendors',
        description:
          'Your commitment to excellence and customer satisfaction should drive your business growth.',
        linksto: '/get-the-app',
        textButton: 'Partner With Us',
      },
      {
        image: Colleagues,
        title: 'As Colleagues',
        description:
          'Join us if you believe in providing exceptional service with every customer interaction.',
        linksto: '/careers',
        textButton: 'Join Our Team',
      },
    ],
  },

  ar: {
    title: 'انضم إلى ديزي',
    subtitle:
      'كن جزءًا من رؤيتنا. يستحق العملاء خدمات استثنائية فقط، ويجب أن يزدهر مقدمو الخدمات الاستثنائيون من خلال رؤية أكبر ونمو مستمر.',
    items: [
      {
        image: Customers,
        title: 'كعملاء',
        description:
          'أنتم تستحقون الثقة بأن كل تجربة ستكون سلسة وأكثر من مثالية.',
        linksto: '/get-the-app',
        textButton: 'احصل على التطبيق',
      },
      {
        image: Vendors,
        title: 'كمقدمي خدمات',
        description:
          'يجب أن يدفعك التزامك بالتميز ورضا العملاء نحو نمو عملك بشكل أكبر.',
        linksto: '/get-the-app',
        textButton: 'تعاون معنا',
      },
      {
        image: Colleagues,
        title: 'كزملاء',
        description:
          'انضم إلينا إذا كنت تؤمن بتقديم خدمة استثنائية مع كل تفاعل مع العملاء.',
        linksto: '/careers',
        textButton: 'إنضم إلى فريقنا',
      },
    ],
  },
};
