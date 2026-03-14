import { I18nContent } from '../i18n';

export interface SignUpBlockData {
  title: string;
  description: string;
  placeholderEmail: string;
  subscribeText: string;
  succesSend: string;
  about: string;
  privacy: string;
}

export const signUpBlockData: I18nContent<SignUpBlockData> = {
  en: {
    title: 'Stay Up to Date',
    description:
      'Subscribe to our newsletter and get the latest beauty industry news, tips, and exclusive offers delivered to your inbox.',
    placeholderEmail: 'Enter your email',
    subscribeText: 'Subscribe',
    succesSend: 'Thank you for subscribing!',
    about: 'By subscribing you agree to our',
    privacy: 'Privacy Policy',
  },

  ar: {
    title: 'ابقَ على اطلاع',
    description:
      'اشترك في نشرتنا الإخبارية واحصل على أحدث أخبار صناعة التجميل والنصائح والعروض الحصرية مباشرة إلى بريدك الإلكتروني.',
    placeholderEmail: 'أدخل بريدك الإلكتروني',
    subscribeText: 'اشترك',
    succesSend: 'شكرًا لاشتراكك!',
    about: 'بالاشتراك فإنك توافق على',
    privacy: 'سياسة الخصوصية',
  },
};
