import { I18nContent } from './i18n';

export interface ContactItem {
  title: string;
  subtitle: string;
  contact?: string;
}

export interface ContactFormText {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  content: string;
  submit: string;
  textButton: string;
}

export interface ContactFormPlaceholder {
  name: string;
  lastName: string;
  email: string;
  content: string;
}

export interface ContactPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  listContact: ContactItem[];
  textContactForm: ContactFormText;
  placeholderContactForm: ContactFormPlaceholder;
}

export const contactPageData: I18nContent<ContactPageContent> = {
  en: {
    heroTitle: 'CONTACT US',
    heroSubtitle: 'Get In Touch',
    heroDescription:
      'Got a question or technical issue? Want to send feedback about a feature? Need details about our pricing & plans? Let us know',
    listContact: [
      {
        title: 'Email us:',
        subtitle:
          'Email us for general queries, including marketing and partnership opportunities.',
        contact: 'info@trythedaisy.com',
      },
      {
        title: 'Call us:',
        subtitle:
          'Call us to speak to a member of our team. We are always happy to help.',
        contact: '+1 (646) 647-8895',
      },
      {
        title: 'Support',
        subtitle: 'Check out helpful resources, FAQs and detailed Guides.',
      },
    ],
    textContactForm: {
      name: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      content: 'Your Message',
      submit:
        'By submitting this form, you confirm that you have read and agree to The Daisy\'s Terms of Service and Privacy Statement',
      textButton: 'Send Message',
    },
    placeholderContactForm: {
      name: 'Your First Name here',
      lastName: 'Your Last Name here',
      email: 'example@example.com',
      content: 'Your message here.',
    },
  },

  ar: {
    heroTitle: 'تواصل معنا',
    heroSubtitle: 'ابقى على تواصل',
    heroDescription:
      'هل لديك استفسار أو مشكلة فنية؟ هل تريد إرسال تعليقات حول إحدى المميزات؟ هل تحتاج إلى تفاصيل للاشتراكات والأسعار؟',
    listContact: [
      {
        title: 'راسلنا:',
        subtitle:
          'راسلنا عبر البريد الإلكتروني للاستفسارات العامة، بما في ذلك فرص التسويق والشراكة.',
        contact: 'info@trythedaisy.com',
      },
      {
        title: 'اتصل بنا:',
        subtitle:
          'اتصل بنا للتحدث مع أحد أعضاء فريقنا. يسعدنا دائماً مساعدتك.',
        contact: '+1 (646) 647-8895',
      },
      {
        title: 'الدعم',
        subtitle: 'تحقق من الموارد المفيدة والأسئلة الشائعة والأدلة التفصيلية.',
      },
    ],
    textContactForm: {
      name: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'بريد إلكتروني',
      phone: 'رقم التليفون',
      content: 'المحتوى الخاص بك',
      submit:
        'أوافق على معالجة البيانات الشخصية وفقاً لسياسة الخصوصية.',
      textButton: 'إرسال الرسالة',
    },
    placeholderContactForm: {
      name: 'الاسم الأول هنا',
      lastName: 'اسم العائلة هنا',
      email: 'example@example.com',
      content: 'اكتب المحتوى الخاص بك هنا.',
    },
  },
};
