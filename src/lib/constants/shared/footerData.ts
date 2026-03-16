import { I18nContent } from '../i18n';

export interface FooterNavItem {
  nav: string;
  name: string;
}

export interface FooterColumn {
  title: string;
  links: FooterNavItem[];
}

export interface SocialLinks {
  facebook_url: string;
  twitter_url: string;
  linkedin_url: string;
  instagram_url: string;
}

export interface FooterData {
  navigationfooterList: FooterNavItem[];
  footerColumns: FooterColumn[];
  socialLinks: SocialLinks;
}

export const footerData: I18nContent<FooterData> = {
  en: {
    navigationfooterList: [
      { name: 'About Us', nav: '/about' },
      { name: 'Careers', nav: '/careers' },
      { name: 'FAQs', nav: '/faq' },
      { name: 'Terms & Conditions', nav: '/terms-conditions' },
      { name: 'Privacy Policy', nav: '/privacy-policy' },
    ],
    footerColumns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', nav: '/features/business' },
          { name: 'Solutions', nav: '/solutions' },
          { name: 'Pricing', nav: '/pricing' },
          { name: 'Get the App', nav: '/get-the-app' },
        ],
      },
      {
        title: 'Learn',
        links: [
          { name: 'Blog', nav: '/resources/blog-post' },
          { name: 'Guides', nav: '/guides' },
          { name: 'Glossary', nav: '/glossary' },
          { name: 'Comparisons', nav: '/compare' },
          { name: 'Alternatives', nav: '/alternative' },
          { name: 'Insights', nav: '/insights' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', nav: '/about' },
          { name: 'Careers', nav: '/careers' },
          { name: 'FAQs', nav: '/faq' },
          { name: 'Contact', nav: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Terms', nav: '/terms-conditions' },
          { name: 'Privacy', nav: '/privacy-policy' },
        ],
      },
    ],
    socialLinks: {
      facebook_url: 'https://www.threads.net/@thedaisy.app',
      twitter_url: 'https://twitter.com/thedaisy_app',
      linkedin_url: 'https://www.linkedin.com/company/the-daisy/',
      instagram_url: 'https://www.instagram.com/thedaisy.app/',
    },
  },

  ar: {
    navigationfooterList: [
      { name: 'نبذه عنا', nav: '/about' },
      { name: 'فرص وظيفية', nav: '/careers' },
      { name: 'أسئلة شائعة', nav: '/faq' },
      { name: 'الشروط والأحكام', nav: '/terms-conditions' },
      { name: 'سياسة الخصوصية', nav: '/privacy-policy' },
    ],
    footerColumns: [
      {
        title: 'المنتج',
        links: [
          { name: 'المميزات', nav: '/features/business' },
          { name: 'الحلول', nav: '/solutions' },
          { name: 'الأسعار', nav: '/pricing' },
          { name: 'حمّل التطبيق', nav: '/get-the-app' },
        ],
      },
      {
        title: 'تعلّم',
        links: [
          { name: 'المدونة', nav: '/resources/blog-post' },
          { name: 'الأدلة', nav: '/guides' },
          { name: 'المصطلحات', nav: '/glossary' },
          { name: 'المقارنات', nav: '/compare' },
          { name: 'البدائل', nav: '/alternative' },
          { name: 'إحصاءات', nav: '/insights' },
        ],
      },
      {
        title: 'الشركة',
        links: [
          { name: 'نبذه عنا', nav: '/about' },
          { name: 'فرص وظيفية', nav: '/careers' },
          { name: 'أسئلة شائعة', nav: '/faq' },
          { name: 'تواصل معنا', nav: '/contact' },
        ],
      },
      {
        title: 'قانوني',
        links: [
          { name: 'الشروط والأحكام', nav: '/terms-conditions' },
          { name: 'سياسة الخصوصية', nav: '/privacy-policy' },
        ],
      },
    ],
    socialLinks: {
      facebook_url: 'https://www.threads.net/@thedaisy.app',
      twitter_url: 'https://twitter.com/thedaisy_app',
      linkedin_url: 'https://www.linkedin.com/company/the-daisy/',
      instagram_url: 'https://www.instagram.com/thedaisy.app/',
    },
  },
};
