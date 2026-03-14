import { I18nContent } from '../i18n';

export interface NavItem {
  title: string;
  nav: string;
  submenu?: { title: string; subtitle: string; nav: string }[];
}

export interface ToggleOption {
  label: string;
  path: string;
}

export interface HeaderData {
  getTheApp: string;
  headerNavList: NavItem[];
  optionsToogle: ToggleOption[];
  optionsTooglseFeatures: ToggleOption[];
  listLanguage: ToggleOption[];
  mobileNavList: NavItem[];
  bredCrumbTitle: string;
  bredCrumbDesription: string;
}

export const headerData: I18nContent<HeaderData> = {
  en: {
    getTheApp: 'Get the App',
    headerNavList: [
      { title: 'Home', nav: '/' },
      { title: 'Features', nav: '/features' },
      { title: 'Pricing', nav: '/pricing' },
      { title: 'Resources', nav: '/resources' },
      { title: 'About', nav: '/about' },
      { title: 'Contact', nav: '/contact' },
    ],
    optionsToogle: [
      { label: 'Business', path: '/business' },
      { label: 'Customer', path: '/customer' },
      { label: 'Professional', path: '/professional' },
    ],
    optionsTooglseFeatures: [
      { label: 'Business', path: '/features/business' },
      { label: 'Customer', path: '/features/customer' },
      { label: 'Professional', path: '/features/professional' },
    ],
    listLanguage: [
      { label: 'En', path: 'en' },
      { label: 'Ar', path: 'ar' },
    ],
    mobileNavList: [
      { title: 'Home', nav: '/' },
      { title: 'Features', nav: '/features' },
      { title: 'Pricing', nav: '/pricing' },
      {
        title: 'Resources',
        nav: '/resources',
        submenu: [
          {
            title: 'Blog posts',
            subtitle: 'Find cool stories and ideas',
            nav: '/resources/blog-post',
          },
          {
            title: 'Customer testimonials',
            subtitle: 'Real stories from our community',
            nav: '/resources/testimonials',
          },
          {
            title: 'Tutorials & Guides',
            subtitle: 'Learn how to get the most from Daisy',
            nav: '/resources/tutorials',
          },
          {
            title: 'Stay Updated',
            subtitle: 'Latest news and platform updates',
            nav: '/resources/updates',
          },
        ],
      },
      { title: 'About', nav: '/about' },
      { title: 'Contact', nav: '/contact' },
    ],
    bredCrumbTitle: 'Menu',
    bredCrumbDesription: 'Navigate',
  },

  ar: {
    getTheApp: 'حمّل التطبيق',
    headerNavList: [
      { title: 'الرئيسية', nav: '/' },
      { title: 'المميزات', nav: '/features' },
      { title: 'الأسعار', nav: '/pricing' },
      { title: 'الموارد', nav: '/resources' },
      { title: 'عن ديزي', nav: '/about' },
      { title: 'اتصل بنا', nav: '/contact' },
    ],
    optionsToogle: [
      { label: 'أعمال', path: '/business' },
      { label: 'عميل', path: '/customer' },
      { label: 'محترف', path: '/professional' },
    ],
    optionsTooglseFeatures: [
      { label: 'أعمال', path: '/features/business' },
      { label: 'عميل', path: '/features/customer' },
      { label: 'محترف', path: '/features/professional' },
    ],
    listLanguage: [
      { label: 'En', path: 'en' },
      { label: 'ع', path: 'ar' },
    ],
    mobileNavList: [
      { title: 'الرئيسية', nav: '/' },
      { title: 'المميزات', nav: '/features' },
      { title: 'الأسعار', nav: '/pricing' },
      {
        title: 'الموارد',
        nav: '/resources',
        submenu: [
          {
            title: 'مقالات المدونة',
            subtitle: 'اكتشف قصص وأفكار رائعة',
            nav: '/resources/blog-post',
          },
          {
            title: 'شهادات العملاء',
            subtitle: 'قصص حقيقية من مجتمعنا',
            nav: '/resources/testimonials',
          },
          {
            title: 'دروس وأدلة',
            subtitle: 'تعلم كيف تحقق أقصى استفادة من ديزي',
            nav: '/resources/tutorials',
          },
          {
            title: 'آخر التحديثات',
            subtitle: 'أحدث الأخبار وتحديثات المنصة',
            nav: '/resources/updates',
          },
        ],
      },
      { title: 'عن ديزي', nav: '/about' },
      { title: 'اتصل بنا', nav: '/contact' },
    ],
    bredCrumbTitle: 'القائمة',
    bredCrumbDesription: 'تصفح',
  },
};
