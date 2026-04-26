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

  // Partnerships
  partnershipsTitle: string;
  partnershipsDescription: string;

  // CTA
  ctaTitle: string;
  ctaButton: string;
}

export const aboutPageData: I18nContent<AboutPageContent> = {
  en: {
    heroTitle: 'Built by Beauty Industry Insiders to Help You Grow',
    heroSubtitle:
      'We know how hard it is to run a salon. The Daisy gives you the AI-powered tools to handle booking, payments, marketing, and customer service in one place.',
    titleScroll: 'Here\'s what drives us...',

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
    partnershipsTitle: 'Partnerships',
    partnershipsDescription:
      'The Daisy is an Official Meta Technology Provider, with native WhatsApp Business API and Instagram Messaging API integration built on Meta\'s verified infrastructure.',
    ctaTitle: 'Ready to see Daisy in action?',
    ctaButton: 'Start Your 14-Day Free Trial',
  },

  ar: {
    heroTitle: 'صُنع بأيدي خبراء صناعة التجميل لمساعدتك على النمو',
    heroSubtitle:
      'نعرف مدى صعوبة إدارة صالونك. تمنحك ديزي أدوات ذكية لإدارة الحجوزات والمدفوعات والتسويق وخدمة العملاء في مكان واحد.',
    titleScroll: 'إليك ما يحركنا...',

    missingTitle: 'مهمتنا',
    missingDescription:
      'تمكين مقدمي الخدمات المتميزين من الظهور بصورة أكبر، بما يتيح للعملاء اتخاذ قرارات واثقة ومستنيرة.',
    heroImage: '/images/pages/about/hero.webp',
    personalizedPath: {
      title: 'نبذة عنا',
      subtitle: 'تمكين مقدمي الخدمات، الارتقاء بالتجارب',
      description:
        'نحن ملتزمون بإبراز مقدمي الخدمات المتميزين وتقديم تجارب استثنائية للعملاء...',
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
        'نحن ملتزمون بفعل الصواب دائمًا. النزاهة توجه كل قرار نتخذه وكل علاقة نبنيها.',
    },
    partnershipsTitle: 'الشراكات',
    partnershipsDescription:
      'ديزي مزود تقني رسمي لدى Meta، مع تكامل أصيل مع واجهتي WhatsApp Business API وInstagram Messaging API المبنيتين على البنية التحتية المعتمدة من Meta.',
    ctaTitle: 'هل أنت مستعد لتجربة ديزي؟',
    ctaButton: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
  },
};
