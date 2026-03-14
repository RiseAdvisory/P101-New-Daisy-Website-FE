import { I18nContent } from './i18n';

export interface VacancyItem {
  position: string;
  levelEnglish: string;
  jobType: string;
  experience: string;
  aboutExperience: string[];
}

export interface CareersPageContent {
  // Hero
  titleHero: string;
  subtitleHero: string;
  descriptionHero: string;
  titleScroll: string;

  // Contact sidebar
  getInTouch: string;
  fillSpeak: string;
  email: string;
  question: string;

  // Buttons
  btnApply: string;
  btnView: string;
  btnHide: string;

  // Form fields
  formField: {
    titleUpload: string;
    titleSucess: string;
    descriptionSucces: string;
    firstName: string;
    lastName: string;
    email: string;
    textBtn: string;
  };
  formDescription: {
    firstName: string;
    lastName: string;
    email: string;
    errorEmail: string;
  };
  textDropzone: {
    textClick: string;
    nextTextClick: string;
    maxFile: string;
  };

  // Vacancies
  vacanciesList: VacancyItem[];
}

export const careersPageData: I18nContent<CareersPageContent> = {
  en: {
    titleHero: 'CAREERS',
    subtitleHero: 'Current Openings',
    descriptionHero:
      'We are always looking for motivated and motivated people to join our team...',
    titleScroll: 'Open Positions',

    getInTouch: 'keep in touch',
    fillSpeak: 'Feel free to reach out to us if you have any questions about the positions or the application process.',
    email: 'careers@trythedaisy.com',
    question: 'Contact Us',

    btnApply: 'Apply',
    btnView: 'View more info',
    btnHide: 'Hide info',

    formField: {
      titleUpload: 'Upload Your CV',
      titleSucess: 'Application Submitted!',
      descriptionSucces: 'Thank you for your application. We will review your CV and get back to you shortly.',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      textBtn: 'Submit Application',
    },
    formDescription: {
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
      email: 'Enter your email address',
      errorEmail: 'Please enter a valid email address',
    },
    textDropzone: {
      textClick: 'Click to upload',
      nextTextClick: 'or drag and drop your CV',
      maxFile: 'PDF, DOC, DOCX (max. 10MB)',
    },

    vacanciesList: [
      {
        position: 'Front-End Software Engineer',
        levelEnglish: 'English C2',
        jobType: 'Remote',
        experience: '3+ years',
        aboutExperience: [
          'Collaborate with the backend team to develop and maintain metadata management systems for a global broadcast/video streaming platform.',
          'Utilize Kotlin, Kubernetes, REST APIs, CI/CD, and Kafka to build scalable and reliable backend services.',
          'Implement RESTful APIs for metadata ingestion, storage, and retrieval, ensuring high performance and data consistency.',
          'Participate in the deployment and management of containerized applications using Kubernetes.',
          'Contribute to the development of continuous integration and continuous deployment (CI/CD) pipelines for automated testing and deployment.',
          'Integrate Kafka for real-time data processing and event-driven architecture to handle metadata updates efficiently.',
        ],
      },
      {
        position: 'Back-End Software Engineer',
        levelEnglish: 'English C2',
        jobType: 'Remote',
        experience: '5+ years',
        aboutExperience: [
          'Collaborate with the backend team to develop and maintain metadata management systems for a global broadcast/video streaming platform.',
          'Utilize Kotlin, Kubernetes, REST APIs, CI/CD, and Kafka to build scalable and reliable backend services.',
          'Implement RESTful APIs for metadata ingestion, storage, and retrieval, ensuring high performance and data consistency.',
          'Participate in the deployment and management of containerized applications using Kubernetes.',
          'Contribute to the development of continuous integration and continuous deployment (CI/CD) pipelines for automated testing and deployment.',
          'Integrate Kafka for real-time data processing and event-driven architecture to handle metadata updates efficiently.',
        ],
      },
    ],
  },

  ar: {
    titleHero: 'وظائف',
    subtitleHero: 'فرص وظيفية',
    descriptionHero:
      'نحن نبني مستقبل تكنولوجيا التجميل والعافية. انضم إلينا وساعد في تحويل كيفية تواصل الشركات والعملاء.',
    titleScroll: 'الوظائف المتاحة',

    getInTouch: 'تواصل معنا',
    fillSpeak: 'لا تتردد في التواصل معنا إذا كان لديك أي أسئلة حول الوظائف أو عملية التقديم.',
    email: 'careers@trythedaisy.com',
    question: 'اتصل بنا',

    btnApply: 'تقديم',
    btnView: 'المزيد',
    btnHide: 'إخفاء',

    formField: {
      titleUpload: 'حمّل سيرتك الذاتية',
      titleSucess: 'تم إرسال الطلب!',
      descriptionSucces: 'شكراً لتقديمك. سنراجع سيرتك الذاتية ونعاود الاتصال بك قريباً.',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      textBtn: 'إرسال الطلب',
    },
    formDescription: {
      firstName: 'أدخل اسمك الأول',
      lastName: 'أدخل اسم عائلتك',
      email: 'أدخل بريدك الإلكتروني',
      errorEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
    },
    textDropzone: {
      textClick: 'انقر للتحميل',
      nextTextClick: 'أو اسحب وأفلت سيرتك الذاتية',
      maxFile: 'PDF, DOC, DOCX (الحد الأقصى 10 ميجابايت)',
    },

    vacanciesList: [
      {
        position: 'مهندس برمجيات',
        levelEnglish: 'إنجليزي C1',
        jobType: 'عن بُعد',
        experience: 'سنتان',
        aboutExperience: [
          'التعاون مع فريق الواجهة الخلفية لتطوير وصيانة أنظمة إدارة البيانات الوصفية لمنصة بث فيديو عالمية.',
          'استخدام Kotlin و Kubernetes و REST APIs و CI/CD و Kafka لبناء خدمات خلفية قابلة للتوسع وموثوقة.',
          'تنفيذ واجهات برمجة تطبيقات RESTful لاستيعاب البيانات الوصفية وتخزينها واسترجاعها.',
          'المشاركة في نشر وإدارة التطبيقات المحتواة باستخدام Kubernetes.',
          'المساهمة في تطوير خطوط أنابيب التكامل والنشر المستمر للاختبار والنشر الآلي.',
          'دمج Kafka لمعالجة البيانات في الوقت الفعلي والبنية القائمة على الأحداث.',
        ],
      },
      {
        position: 'مهندس برمجيات',
        levelEnglish: 'إنجليزي C2',
        jobType: 'مكتب',
        experience: '5 سنوات',
        aboutExperience: [
          'التعاون مع فريق الواجهة الخلفية لتطوير وصيانة أنظمة إدارة البيانات الوصفية لمنصة بث فيديو عالمية.',
          'استخدام Kotlin و Kubernetes و REST APIs و CI/CD و Kafka لبناء خدمات خلفية قابلة للتوسع وموثوقة.',
          'تنفيذ واجهات برمجة تطبيقات RESTful لاستيعاب البيانات الوصفية وتخزينها واسترجاعها.',
          'المشاركة في نشر وإدارة التطبيقات المحتواة باستخدام Kubernetes.',
          'المساهمة في تطوير خطوط أنابيب التكامل والنشر المستمر للاختبار والنشر الآلي.',
          'دمج Kafka لمعالجة البيانات في الوقت الفعلي والبنية القائمة على الأحداث.',
        ],
      },
    ],
  },
};
