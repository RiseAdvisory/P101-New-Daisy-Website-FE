import { I18nContent } from '../i18n';

export interface ButtonAppData {
  googlePlay: {
    link: string;
    download: string;
    type: string;
  };
  appStore: {
    link: string;
    download: string;
    type: string;
  };
}

export const buttonAppData: I18nContent<ButtonAppData> = {
  en: {
    googlePlay: {
      link: 'https://play.google.com/store/apps/details?id=com.trythedaisy.app',
      download: 'Download on the',
      type: 'Google Play',
    },
    appStore: {
      link: 'https://apps.apple.com/kw/app/the-daisy/id1667105749?itsct=apps_box_link&itscg=30200',
      download: 'Download on the',
      type: 'App Store',
    },
  },

  ar: {
    googlePlay: {
      link: 'https://play.google.com/store/apps/details?id=com.trythedaisy.app',
      download: 'حمل التطبيق من',
      type: 'Google Play',
    },
    appStore: {
      link: 'https://apps.apple.com/kw/app/the-daisy/id1667105749?itsct=apps_box_link&itscg=30200',
      download: 'حمل التطبيق من',
      type: 'App Store',
    },
  },
};
