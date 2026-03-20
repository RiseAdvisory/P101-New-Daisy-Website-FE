import { I18nContent } from '../i18n';

export interface FormBusinessContent {
  formDescription: {
    name: string;
    email: string;
    serviceProvidor: string;
    serviceProvidorValue: string[];
    businessName: string;
    businessType: string;
    phoneNumber: string;
    socialMediaAccount: string;
    numberofLocations: string;
    numberofStaff: string;
    homeServiceVisits: string;
    homeServiceVisitsList: string[];
    buttonText: string;
    errorRequired: string;
    countryCode: string;
    buttonLoading: string;
    optionalLabel: string;
  };
  formPlaceholder: {
    name: string;
    email: string;
    businessName: string;
    businessType: string;
    socialMediaAccount: string;
    numberofLocations: string[];
    numberofStaff: string[];
    errorEmail: string;
    errorSubmit: string;
    businessTypeOptions: string[];
  };
}

export const formBusinessData: I18nContent<FormBusinessContent> = {
  en: {
    formDescription: {
      name: 'Full Name',
      email: 'Work Email',
      serviceProvidor: 'Service Provider Type',
      serviceProvidorValue: ['Business', 'Professional'],
      businessName: 'Business Name',
      businessType: 'Business Type',
      phoneNumber: 'Phone Number',
      socialMediaAccount: 'Social Media Account',
      numberofLocations: 'Number of Locations',
      numberofStaff: 'Number of Staff',
      homeServiceVisits: 'Do you provide home service visits?',
      homeServiceVisitsList: ['Yes', 'No'],
      buttonText: 'Get Started',
      errorRequired: 'This field is required',
      countryCode: 'Code',
      buttonLoading: 'Sending...',
      optionalLabel: '(Optional)',
    },
    formPlaceholder: {
      name: 'Your name',
      email: 'name@yourbusiness.com',
      businessName: 'Business name here',
      businessType: 'Salon / Spa / Clinic',
      socialMediaAccount: '@SocialMediaHandle',
      numberofLocations: ['1-5', '6-10', '11-20', '20+'],
      numberofStaff: ['1-5', '6-20', '21-50', '50+'],
      errorEmail: 'This is not a valid email.',
      errorSubmit: 'Something went wrong. Please try again.',
      businessTypeOptions: ['Salon', 'Spa', 'Clinic', 'Other'],
    },
  },

  ar: {
    formDescription: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني العمل',
      serviceProvidor: 'نوع مزود الخدمة',
      serviceProvidorValue: ['شركة', 'محترف مستقل'],
      businessName: 'الاسم التجاري',
      businessType: 'نوع العمل',
      phoneNumber: 'رقم التليفون',
      socialMediaAccount: 'حسابات التواصل الإجتماعي',
      numberofLocations: 'عدد الأفرع',
      numberofStaff: 'عدد الموظفين',
      homeServiceVisits: 'هل توفرون زيارات خدمة منزلية؟',
      homeServiceVisitsList: ['نعم', 'لا'],
      buttonText: 'ابدأ الآن',
      errorRequired: 'هذا الحقل مطلوب',
      countryCode: 'الرمز',
      buttonLoading: 'جاري الإرسال...',
      optionalLabel: '(اختياري)',
    },
    formPlaceholder: {
      name: 'اسمك',
      email: 'name@yourbusiness.com',
      businessName: 'اسم العمل هنا',
      businessType: 'صالون / منتجع صحي / عيادة',
      socialMediaAccount: '@SocialMediaHandle',
      numberofLocations: ['1-5', '6-10', '11-20', '20+'],
      numberofStaff: ['1-5', '6-20', '21-50', '50+'],
      errorEmail: 'هذا ليس بريد إلكتروني صالح.',
      errorSubmit: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      businessTypeOptions: ['صالون', 'سبا', 'عيادة', 'أخرى'],
    },
  },
};
