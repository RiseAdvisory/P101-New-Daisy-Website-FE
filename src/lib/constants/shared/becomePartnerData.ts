import { I18nContent } from '../i18n';

export interface BecomePartnerData {
  title: string;
  subtitle: string;
}

export const becomePartnerData: I18nContent<BecomePartnerData> = {
  en: {
    title: 'Partner with The Daisy',
    subtitle:
      'Unlock the potential of your business or freelance career by joining The Daisy. List your services and connect with a growing community of customers seeking premium beauty and wellness experiences. Start expanding your client base today!',
  },

  ar: {
    title: 'تعاون مع ذا ديزي',
    subtitle: 'افتح إمكانات عملك أو مسيرتك الحرة من خلال الانضمام إلى ذا ديزي. اعرض خدماتك وتواصل مع مجتمع متنامٍ من العملاء الباحثين عن تجارب جمال وعافية متميزة. ابدأ في توسيع قاعدة عملائك اليوم!',
  },
};
