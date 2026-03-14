import { I18nContent } from '../i18n';

export interface BecomePartnerData {
  title: string;
  subtitle: string;
}

export const becomePartnerData: I18nContent<BecomePartnerData> = {
  en: {
    title: 'Become a Daisy Partner',
    subtitle:
      'Join the Daisy network and grow your business with our powerful platform.',
  },

  ar: {
    title: 'كن شريكًا لدايزي',
    subtitle: 'انضم إلى شبكة دايزي ونمِّ أعمالك مع منصتنا القوية.',
  },
};
