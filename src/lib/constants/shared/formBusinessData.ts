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
  };
}

export const formBusinessData: I18nContent<FormBusinessContent> = {
  en: {
    formDescription: {
      name: 'Full Name',
      email: 'Email Address',
      serviceProvidor: 'Service Provider Type',
      serviceProvidorValue: ['Freelancer', 'Business'],
      businessName: 'Business Name',
      businessType: 'Business Type',
      phoneNumber: 'Phone Number',
      socialMediaAccount: 'Social Media Account',
      numberofLocations: 'Number of Locations',
      numberofStaff: 'Number of Staff',
      homeServiceVisits: 'Do you offer home service visits?',
      homeServiceVisitsList: ['No', 'Yes'],
      buttonText: 'Submit Application',
    },
    formPlaceholder: {
      name: 'Enter your full name',
      email: 'Enter your email address',
      businessName: 'Enter your business name',
      businessType: 'e.g. Salon, Spa, Clinic',
      socialMediaAccount: '@youraccount',
      numberofLocations: ['1', '2-3', '4-5', '6-10', '10+'],
      numberofStaff: ['1-5', '6-10', '11-20', '21-50', '50+'],
      errorEmail: 'Please enter a valid email address',
    },
  },

  ar: {
    formDescription: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      serviceProvidor: 'نوع مزود الخدمة',
      serviceProvidorValue: ['مستقل', 'شركة'],
      businessName: 'اسم النشاط التجاري',
      businessType: 'نوع النشاط التجاري',
      phoneNumber: 'رقم الهاتف',
      socialMediaAccount: 'حساب وسائل التواصل الاجتماعي',
      numberofLocations: 'عدد المواقع',
      numberofStaff: 'عدد الموظفين',
      homeServiceVisits: 'هل تقدم خدمات منزلية؟',
      homeServiceVisitsList: ['لا', 'نعم'],
      buttonText: 'إرسال الطلب',
    },
    formPlaceholder: {
      name: 'أدخل اسمك الكامل',
      email: 'أدخل بريدك الإلكتروني',
      businessName: 'أدخل اسم نشاطك التجاري',
      businessType: 'مثال: صالون، سبا، عيادة',
      socialMediaAccount: '@حسابك',
      numberofLocations: ['١', '٢-٣', '٤-٥', '٦-١٠', '+١٠'],
      numberofStaff: ['١-٥', '٦-١٠', '١١-٢٠', '٢١-٥٠', '+٥٠'],
      errorEmail: 'يرجى إدخال بريد إلكتروني صحيح',
    },
  },
};
