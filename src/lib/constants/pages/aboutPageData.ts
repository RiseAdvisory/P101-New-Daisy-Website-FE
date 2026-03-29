import { I18nContent } from '../i18n';

export interface PersonalizedPath {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutValue {
  title: string;
  subtitle: string;
}

export interface LastBottomBlock {
  title: string;
  subtitle: string;
}

export interface AboutPageContent {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  titleScroll: string;

  // Our Mission
  missingTitle: string;
  missingDescription: string;
  heroImage: string;
  personalizedPath: PersonalizedPath;

  // Our Values
  ourValues: string;
  aboutValues: AboutValue[];
  lastBottomBlock: LastBottomBlock;
}

export const aboutPageData: I18nContent<AboutPageContent> = {
  en: {
    heroTitle: 'WHERE EXCELLENCE MEETS OPPORTUNITY',
    heroSubtitle:
      'Empowering Premium Service Providers And Giving Customers Unparalleled Beauty & Wellness Experiences',
    titleScroll: 'Don\'t believe us? Keep reading...',

    missingTitle: 'Our Mission',
    missingDescription:
      'Empowering exceptional service providers with greater visibility, enabling customers to make confident, informed choices.',
    heroImage: '/images/pages/about/hero.webp',
    personalizedPath: {
      title: 'ABOUT US',
      subtitle: 'Empowering Providers, Elevating Experiences',
      description:
        'We are dedicated to elevating the profiles of premium service providers while offering discerning customers access to exceptional experiences...',
    },

    ourValues: 'Our Values',
    aboutValues: [
      {
        title: 'Excellence',
        subtitle:
          'We hold ourselves to the highest standards in everything we build, ensuring reliability, quality, and a delightful user experience.',
      },
      {
        title: 'Trust',
        subtitle:
          'Transparency and integrity are at the heart of everything we do. We earn trust by delivering on our promises and putting our partners first.',
      },
      {
        title: 'Empowerment',
        subtitle:
          'We give businesses the tools they need to take full control of their brand, their customer relationships, and their growth.',
      },
      {
        title: 'Transparency',
        subtitle:
          'We believe in open communication and clear processes that build confidence with our partners and customers.',
      },
    ],
    lastBottomBlock: {
      title: 'Integrity',
      subtitle:
        'We are committed to doing the right thing, always. Integrity guides every decision we make and every relationship we build.',
    },
  },

  ar: {
    heroTitle: 'حيث يلتقي التميز بالفرص',
    heroSubtitle:
      'تمكين مقدمي الخدمات المتميزة وتقديم تجارب جمال ورفاهية لا مثيل لها للعملاء',
    titleScroll: 'لا تصدقنا؟ واصل القراءة...',

    missingTitle: 'مهمتنا',
    missingDescription:
      'تمكين مقدمي الخدمات الاستثنائيين من تحقيق رؤية أكبر، مما يتيح للعملاء اتخاذ قرارات واثقة ومستنيرة.',
    heroImage: '/images/pages/about/hero.webp',
    personalizedPath: {
      title: 'نبذه عنا',
      subtitle: 'تمكين مقدمي الخدمات، الارتقاء بالتجارب',
      description:
        'نحن ملتزمون بتعزيز ملفات مقدمي الخدمات المتميزة مع تقديم تجارب استثنائية للعملاء المتميزين...',
    },

    ourValues: 'قيمنا',
    aboutValues: [
      {
        title: 'التميز',
        subtitle:
          'نلتزم بأعلى المعايير في كل ما نبنيه، لضمان الموثوقية والجودة وتجربة مستخدم ممتعة.',
      },
      {
        title: 'الثقة',
        subtitle:
          'الشفافية والنزاهة هما جوهر كل ما نقوم به. نكسب الثقة من خلال الوفاء بوعودنا ووضع شركائنا في المقام الأول.',
      },
      {
        title: 'التمكين',
        subtitle:
          'نمنح الشركات الأدوات التي تحتاجها للتحكم الكامل في علامتها التجارية وعلاقاتها مع العملاء ونموها.',
      },
      {
        title: 'الشفافية',
        subtitle:
          'نؤمن بالتواصل المفتوح والعمليات الواضحة التي تبني الثقة مع شركائنا وعملائنا.',
      },
    ],
    lastBottomBlock: {
      title: 'النزاهة',
      subtitle:
        'نحن ملتزمون بفعل الصواب دائماً. النزاهة توجه كل قرار نتخذه وكل علاقة نبنيها.',
    },
  },
};
