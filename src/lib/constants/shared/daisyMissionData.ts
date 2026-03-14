import { I18nContent } from '../i18n';

export interface DaisyMissionItem {
  title: string;
  description: string;
}

export interface DaisyMissionData {
  title: string;
  subtitle: string;
  listDaisyMission: DaisyMissionItem[];
}

export const daisyMissionData: I18nContent<DaisyMissionData> = {
  en: {
    title: 'The Daisy Mission & Strategy',
    subtitle:
      'Empowering Premium Service Providers And Giving Customers Unparalleled Beauty & Wellness Experiences',
    listDaisyMission: [
      {
        title: 'Mission',
        description:
          'Empowering exceptional service providers with greater visibility, enabling customers to make confident, informed choices.',
      },
      {
        title: 'Values',
        description:
          'We prioritize excellence, trust, empowerment, transparency, and integrity. These values guide everything we do.',
      },
      {
        title: 'Strategy',
        description:
          'Creating a seamless connection between customers and service providers, by simplifying the decision-making process.',
      },
    ],
  },

  ar: {
    title: 'مهمة واستراتيجية ذا ديزي',
    subtitle: 'تمكين مقدمي الخدمات المتميزة وتقديم تجارب جمال ورفاهية لا مثيل لها للعملاء',
    listDaisyMission: [
      {
        title: 'المهمة',
        description:
          'تمكين مقدمي الخدمات الاستثنائيين من تحقيق رؤية أكبر، مما يتيح للعملاء اتخاذ قرارات واثقة ومستنيرة.',
      },
      {
        title: 'القيم',
        description:
          'نحن نولي الأولوية للتميز، الثقة، التمكين، الشفافية، والنزاهة.',
      },
      {
        title: 'الاستراتيجية',
        description:
          'إنشاء اتصال سلس بين العملاء ومقدمي الخدمات من خلال تبسيط عملية اتخاذ القرار.',
      },
    ],
  },
};
