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
    title: 'Get the Daisy App',
    description:
      'Download Daisy and start booking beauty and wellness services with cashback rewards. Available on iOS and Android.',
    subtitle: 'Scan the QR code or download directly from the app stores below.',
    titleBredCrumb: {
      title: 'Home',
      description: 'Get the App',
    },
    qrCode: '/images/pages/get-the-app/qr-code.png',
  },

  ar: {
    title: 'حمّل تطبيق ديزي',
    description:
      'حمّل ديزي وابدأ بحجز خدمات التجميل والعافية مع مكافآت الاسترداد النقدي. متاح على iOS و Android.',
    subtitle: 'امسح رمز QR أو حمّل مباشرة من متاجر التطبيقات أدناه.',
    titleBredCrumb: {
      title: 'الرئيسية',
      description: 'حمّل التطبيق',
    },
    qrCode: '/images/pages/get-the-app/qr-code.png',
  },
};
