import { I18nContent } from '../i18n';
import Customers from '../../../assets/images/JoinCustomers.png';
import Vendors from '../../../assets/images/JoinVendors.png';
import Colleagues from '../../../assets/images/JoinColleagues.png';
import { StaticImageData } from 'next/image';

export interface JoinDaisyItem {
  image: StaticImageData;
  title: string;
  description: string;
  linksto: string;
  textButton: string;
}

export interface JoinDaisyData {
  title: string;
  subtitle: string;
  items: JoinDaisyItem[];
}

export const joinDaisyData: I18nContent<JoinDaisyData> = {
  en: {
    title: 'Join The Daisy',
    subtitle:
      'Discover how Daisy can transform your beauty experience, whether you are a customer, business owner, or professional.',
    items: [
      {
        image: Customers,
        title: 'As Customers',
        description:
          'You deserve the peace of mind that your experience will be nothing less than perfect.',
        linksto: '/customer',
        textButton: 'Learn More',
      },
      {
        image: Vendors,
        title: 'As Vendors',
        description:
          'If perfection & customer satisfaction are your core values. We can\'t wait to work with you!',
        linksto: '/business',
        textButton: 'Learn More',
      },
      {
        image: Colleagues,
        title: 'As Colleagues',
        description:
          'If you love serving others and making people smile, we would love to talk to you. Apply now!',
        linksto: '/professional',
        textButton: 'Learn More',
      },
    ],
  },

  ar: {
    title: 'انضم إلى دايزي',
    subtitle:
      'اكتشف كيف يمكن لدايزي تحويل تجربة الجمال الخاصة بك، سواء كنت عميلاً أو صاحب عمل أو متخصصاً.',
    items: [
      {
        image: Customers,
        title: 'كعملاء',
        description:
          'أنت تستحق راحة البال بأن تجربتك لن تكون أقل من مثالية.',
        linksto: '/customer',
        textButton: 'اعرف المزيد',
      },
      {
        image: Vendors,
        title: 'كأصحاب أعمال',
        description:
          'إذا كانت الكمال ورضا العملاء من قيمك الأساسية، فنحن نتطلع للعمل معك!',
        linksto: '/business',
        textButton: 'اعرف المزيد',
      },
      {
        image: Colleagues,
        title: 'كزملاء',
        description:
          'إذا كنت تحب خدمة الآخرين وإسعاد الناس، نود التحدث إليك. قدّم الآن!',
        linksto: '/professional',
        textButton: 'اعرف المزيد',
      },
    ],
  },
};
