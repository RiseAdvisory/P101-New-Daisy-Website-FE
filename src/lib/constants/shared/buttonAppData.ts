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
      link: 'https://play.google.com/store/apps/details?id=com.daisy.app',
      download: 'Download on',
      type: 'Google Play',
    },
    appStore: {
      link: 'https://apps.apple.com/app/daisy/id6478529949',
      download: 'Download on the',
      type: 'App Store',
    },
  },

  ar: {
    googlePlay: {
      link: 'https://play.google.com/store/apps/details?id=com.daisy.app',
      download: 'حمّل من',
      type: 'Google Play',
    },
    appStore: {
      link: 'https://apps.apple.com/app/daisy/id6478529949',
      download: 'حمّل من',
      type: 'App Store',
    },
  },
};
