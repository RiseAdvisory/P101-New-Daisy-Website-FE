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
    heroTitle: 'About Daisy',
    heroSubtitle:
      'We are on a mission to transform the beauty and wellness industry through technology, making it easier for businesses to grow and customers to discover amazing services.',
    titleScroll: 'Our Mission',

    missingTitle: 'Our Mission',
    missingDescription:
      'We believe that beauty and wellness businesses deserve powerful tools that help them thrive. Daisy brings together cutting-edge technology with deep industry expertise to create a platform that truly understands the needs of beauty professionals and their customers.',
    heroImage: '/images/pages/about/hero.png',
    personalizedPath: {
      title: 'Our Journey',
      subtitle: 'A Personalized Path to Beauty',
      description:
        'Daisy was born from a simple observation: beauty and wellness businesses needed better technology. We set out to build a platform that combines appointment booking, customer loyalty, business management, and marketing into one seamless experience. Today, we are proud to serve businesses across the region, helping them grow and delight their customers.',
    },

    ourValues: 'Our Values',
    aboutValues: [
      {
        title: 'Innovation',
        subtitle:
          'We leverage AI and cutting-edge technology to continuously improve the experience for businesses and customers alike.',
      },
      {
        title: 'Empowerment',
        subtitle:
          'We give businesses the tools they need to take full control of their brand, their customer relationships, and their growth.',
      },
      {
        title: 'Excellence',
        subtitle:
          'We hold ourselves to the highest standards in everything we build, ensuring reliability, quality, and a delightful user experience.',
      },
      {
        title: 'Community',
        subtitle:
          'We believe in the power of connection. Daisy brings together businesses, professionals, and customers in a thriving ecosystem.',
      },
    ],
    lastBottomBlock: {
      title: 'Trust',
      subtitle:
        'Transparency and integrity are at the heart of everything we do. We earn trust by delivering on our promises and putting our partners first.',
    },
  },

  ar: {
    heroTitle: 'عن ديزي',
    heroSubtitle:
      'نحن في مهمة لتحويل صناعة التجميل والعافية من خلال التكنولوجيا، مما يسهل على الشركات النمو وعلى العملاء اكتشاف خدمات مذهلة.',
    titleScroll: 'مهمتنا',

    missingTitle: 'مهمتنا',
    missingDescription:
      'نؤمن بأن شركات التجميل والعافية تستحق أدوات قوية تساعدها على الازدهار. تجمع ديزي بين التكنولوجيا المتطورة والخبرة العميقة في الصناعة لإنشاء منصة تفهم حقاً احتياجات محترفي التجميل وعملائهم.',
    heroImage: '/images/pages/about/hero.png',
    personalizedPath: {
      title: 'رحلتنا',
      subtitle: 'مسار شخصي نحو الجمال',
      description:
        'وُلدت ديزي من ملاحظة بسيطة: شركات التجميل والعافية بحاجة إلى تكنولوجيا أفضل. انطلقنا لبناء منصة تجمع بين حجز المواعيد وولاء العملاء وإدارة الأعمال والتسويق في تجربة واحدة سلسة. اليوم، نفخر بخدمة الشركات في جميع أنحاء المنطقة، ومساعدتها على النمو وإسعاد عملائها.',
    },

    ourValues: 'قيمنا',
    aboutValues: [
      {
        title: 'الابتكار',
        subtitle:
          'نستفيد من الذكاء الاصطناعي والتكنولوجيا المتطورة لتحسين التجربة باستمرار للشركات والعملاء على حد سواء.',
      },
      {
        title: 'التمكين',
        subtitle:
          'نمنح الشركات الأدوات التي تحتاجها للتحكم الكامل في علامتها التجارية وعلاقاتها مع العملاء ونموها.',
      },
      {
        title: 'التميز',
        subtitle:
          'نلتزم بأعلى المعايير في كل ما نبنيه، لضمان الموثوقية والجودة وتجربة مستخدم ممتعة.',
      },
      {
        title: 'المجتمع',
        subtitle:
          'نؤمن بقوة التواصل. تجمع ديزي بين الشركات والمحترفين والعملاء في منظومة مزدهرة.',
      },
    ],
    lastBottomBlock: {
      title: 'الثقة',
      subtitle:
        'الشفافية والنزاهة هما جوهر كل ما نقوم به. نكسب الثقة من خلال الوفاء بوعودنا ووضع شركائنا في المقام الأول.',
    },
  },
};
