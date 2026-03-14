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
    title: 'Our Mission, Values & Strategy',
    subtitle:
      'Discover what drives us and how we plan to revolutionize the beauty industry.',
    listDaisyMission: [
      {
        title: 'Mission',
        description:
          'You deserve the peace of mind that your experience will be nothing less than perfect. Sign up now!',
      },
      {
        title: 'Values',
        description:
          'You deserve the peace of mind that your experience will be nothing less than perfect. Sign up now!',
      },
      {
        title: 'Strategy',
        description:
          'You deserve the peace of mind that your experience will be nothing less than perfect. Sign up now!',
      },
    ],
  },

  ar: {
    title: 'مهمتنا وقيمنا واستراتيجيتنا',
    subtitle: 'اكتشف ما يحركنا وكيف نخطط لإحداث ثورة في صناعة التجميل.',
    listDaisyMission: [
      {
        title: 'المهمة',
        description:
          'أنت تستحق راحة البال بأن تجربتك لن تكون أقل من مثالية. سجّل الآن!',
      },
      {
        title: 'القيم',
        description:
          'أنت تستحق راحة البال بأن تجربتك لن تكون أقل من مثالية. سجّل الآن!',
      },
      {
        title: 'الاستراتيجية',
        description:
          'أنت تستحق راحة البال بأن تجربتك لن تكون أقل من مثالية. سجّل الآن!',
      },
    ],
  },
};
