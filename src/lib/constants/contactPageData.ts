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
    heroTitle: 'Contact Us',
    heroSubtitle: 'We\'d Love to Hear From You',
    heroDescription:
      'Have questions about Daisy? Want to learn more about how we can help your business grow? Get in touch with our team.',
    listContact: [
      {
        title: 'Email us:',
        subtitle:
          'Email us for general queries, including marketing and partnership opportunities.',
        contact: 'hello@jointhedaisy.com',
      },
      {
        title: 'Call us:',
        subtitle:
          'Call us to speak to a member of our team. We are always happy to help.',
        contact: '+1 (646) 786-5060',
      },
      {
        title: 'Support',
        subtitle: 'Check out helpful resources, FAQs and developer tools.',
      },
    ],
    textContactForm: {
      name: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      content: 'Message',
      submit:
        'I agree to the processing of personal data in accordance with the Privacy Policy.',
      textButton: 'Send Message',
    },
    placeholderContactForm: {
      name: 'Enter your first name',
      lastName: 'Enter your last name',
      email: 'Enter your email address',
      content: 'Write your message here...',
    },
  },

  ar: {
    heroTitle: 'اتصل بنا',
    heroSubtitle: 'يسعدنا سماع رأيك',
    heroDescription:
      'هل لديك أسئلة حول ديزي؟ هل تريد معرفة المزيد عن كيف يمكننا مساعدة عملك على النمو؟ تواصل مع فريقنا.',
    listContact: [
      {
        title: 'راسلنا:',
        subtitle:
          'راسلنا عبر البريد الإلكتروني للاستفسارات العامة، بما في ذلك فرص التسويق والشراكة.',
        contact: 'hello@jointhedaisy.com',
      },
      {
        title: 'اتصل بنا:',
        subtitle:
          'اتصل بنا للتحدث مع أحد أعضاء فريقنا. يسعدنا دائماً مساعدتك.',
        contact: '+1 (646) 786-5060',
      },
      {
        title: 'الدعم',
        subtitle: 'تحقق من الموارد المفيدة والأسئلة الشائعة وأدوات المطورين.',
      },
    ],
    textContactForm: {
      name: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      content: 'الرسالة',
      submit:
        'أوافق على معالجة البيانات الشخصية وفقاً لسياسة الخصوصية.',
      textButton: 'إرسال الرسالة',
    },
    placeholderContactForm: {
      name: 'أدخل اسمك الأول',
      lastName: 'أدخل اسم عائلتك',
      email: 'أدخل بريدك الإلكتروني',
      content: 'اكتب رسالتك هنا...',
    },
  },
};
