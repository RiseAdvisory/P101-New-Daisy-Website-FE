import { I18nContent } from '../i18n';

export interface GetTheAppPageContent {
  title: string;
  description: string;
  subtitle: string;
  titleBredCrumb: {
    title: string;
    description: string;
  };
  qrCode: string;
}

export const getTheAppPageData: I18nContent<GetTheAppPageContent> = {
  en: {
    title: 'GET THE APP',
    description:
      'Select One Of The Methods Below To Download The App',
    subtitle: 'Scan the QR code or visit the relevant store to join us...',
    titleBredCrumb: {
      title: 'Get the app',
      description: 'Home',
    },
    qrCode: '/images/pages/get-the-app/qr-code.svg',
  },

  ar: {
    title: 'حمل التطبيق',
    description:
      'قم بإختيار وسيلة تحميل التطبيق',
    subtitle: 'امسح رمز QR أو قم بزيارة المتجر المناسب للانضمام إلينا...',
    titleBredCrumb: {
      title: 'حمل التطبيق',
      description: 'الرئيسية',
    },
    qrCode: '/images/pages/get-the-app/qr-code.svg',
  },
};
