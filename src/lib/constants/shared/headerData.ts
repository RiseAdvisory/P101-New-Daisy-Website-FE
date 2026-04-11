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
  optionsToggle: ToggleOption[];
  optionsToggleFeatures: ToggleOption[];
  listLanguage: ToggleOption[];
  mobileNavList: NavItem[];
  bredCrumbTitle: string;
  bredCrumbDesription: string;
}

export const headerData: I18nContent<HeaderData> = {
  en: {
    getTheApp: 'Start Free Trial',
    headerNavList: [
      { title: 'Home', nav: '/' },
      { title: 'Features', nav: '/features' },
      { title: 'Pricing', nav: '/pricing' },
      { title: 'Resources', nav: '/resources' },
      { title: 'About Us', nav: '/about' },
      { title: 'Contact', nav: '/contact' },
    ],
    optionsToggle: [
      { label: 'Customer', path: '/customer' },
      { label: 'Business', path: '/business' },
      { label: 'Professional', path: '/professional' },
    ],
    optionsToggleFeatures: [
      { label: 'Customer', path: '/features/customer' },
      { label: 'Business', path: '/features/business' },
      { label: 'Professional', path: '/features/professional' },
    ],
    listLanguage: [
      { label: 'En', path: 'en' },
      { label: 'ع', path: 'ar' },
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
      { title: 'About Us', nav: '/about' },
      { title: 'Contact', nav: '/contact' },
    ],
    bredCrumbTitle: 'Resources',
    bredCrumbDesription: 'Home',
  },

  ar: {
    getTheApp: 'ابدأ تجربتك المجانية',
    headerNavList: [
      { title: 'الرئيسية', nav: '/' },
      { title: 'المميزات', nav: '/features' },
      { title: 'الأسعار', nav: '/pricing' },
      { title: 'الموارد', nav: '/resources' },
      { title: 'نبذه عنا', nav: '/about' },
      { title: 'تواصل', nav: '/contact' },
    ],
    optionsToggle: [
      { label: 'عميل', path: '/customer' },
      { label: 'شركة', path: '/business' },
      { label: 'محترف', path: '/professional' },
    ],
    optionsToggleFeatures: [
      { label: 'عميل', path: '/features/customer' },
      { label: 'شركة', path: '/features/business' },
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
            title: 'مشاركات المدونة',
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
            title: 'ابق على اطلاع',
            subtitle: 'أحدث الأخبار وتحديثات المنصة',
            nav: '/resources/updates',
          },
        ],
      },
      { title: 'نبذه عنا', nav: '/about' },
      { title: 'التواصل', nav: '/contact' },
    ],
    bredCrumbTitle: 'الموارد',
    bredCrumbDesription: 'الرئيسية',
  },
};
