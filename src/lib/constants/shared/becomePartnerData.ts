import { I18nContent } from '../i18n';

export interface BecomePartnerData {
  title: string;
  subtitle: string;
}

export const becomePartnerData: I18nContent<BecomePartnerData> = {
  en: {
    title: 'Partner with The Daisy',
    subtitle:
      'Unlock the potential of your business by joining The Daisy. List your services and connect with customers seeking premium beauty and wellness experiences. Start expanding your client base today!',
  },

  ar: {
    title: 'تعاون مع ذا ديزي',
    subtitle: 'افتح إمكانات عملك من خلال الانضمام إلى ذا ديزي. اعرض خدماتك وتواصل مع العملاء الباحثين عن تجارب جمال وعافية متميزة. ابدأ في توسيع قاعدة عملائك اليوم!',
  },
};
