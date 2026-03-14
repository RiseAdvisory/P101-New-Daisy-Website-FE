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
    title: 'Sign up for our Blog',
    description:
      'Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.',
    placeholderEmail: 'Enter your email!',
    subscribeText: 'Subscribe',
    succesSend: 'Success Submitet email!',
    about: 'We care about the protection of your data. Read our',
    privacy: 'Privacy Policy',
  },

  ar: {
    title: 'اشترك في مدونتنا',
    description:
      'ابق على اطلاع بتقدم خارطة الطريق، والإعلانات، والخصومات الحصرية.',
    placeholderEmail: 'أدخل بريدك الإلكتروني!',
    subscribeText: 'اشترك',
    succesSend: 'تم إرسال البريد الإلكتروني بنجاح!',
    about: 'نحن نهتم بحماية بياناتك. اقرأ',
    privacy: 'سياسة الخصوصية',
  },
};
