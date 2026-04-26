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
  successMessage: string;
  errorMessage: string;
  loadingText: string;
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
    heroSubtitle: 'Book a Demo or Get Answers Fast',
    heroDescription:
      'Want pricing details, a product walkthrough, or help deciding whether Daisy fits your salon, spa, clinic, or solo business? Send us a message and our team will get back to you.',
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
        title: 'Self-serve help',
        subtitle: 'Browse FAQs and guides if you want answers before speaking with us.',
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
      successMessage: 'Message sent successfully!',
      errorMessage: 'Something went wrong. Please try again.',
      loadingText: 'Sending...',
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
    heroSubtitle: 'احجز عرضًا أو احصل على إجابات بسرعة',
    heroDescription:
      'هل تريد تفاصيل الأسعار، أو جولة في المنتج، أو مساعدة في تحديد ما إذا كانت ديزي مناسبة لصالونك أو السبا أو العيادة أو نشاطك المستقل؟ أرسل لنا رسالة وسيرد عليك فريقنا.',
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
          'اتصل بنا للتحدث مع أحد أعضاء فريقنا. يسعدنا دائمًا مساعدتك.',
        contact: '+1 (646) 647-8895',
      },
      {
        title: 'مساعدة ذاتية',
        subtitle: 'تصفح الأسئلة الشائعة والأدلة إذا أردت إجابات قبل التحدث معنا.',
      },
    ],
    textContactForm: {
      name: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      content: 'رسالتك',
      submit:
        'من خلال إرسال هذا النموذج، فإنك تؤكد أنك قرأت وتوافق على شروط خدمة ديزي وبيان الخصوصية الخاص بها.',
      textButton: 'إرسال الرسالة',
      successMessage: 'تم إرسال رسالتك بنجاح!',
      errorMessage: 'حدث خطأ ما. حاول مرة أخرى.',
      loadingText: 'جارٍ الإرسال...',
    },
    placeholderContactForm: {
      name: 'الاسم الأول هنا',
      lastName: 'اسم العائلة هنا',
      email: 'example@example.com',
      content: 'اكتب رسالتك هنا.',
    },
  },
};
