import { I18nContent } from '../i18n';

export interface FooterNavItem {
  nav: string;
  name: string;
}

export interface SocialLinks {
  facebook_url: string;
  twitter_url: string;
  linkedin_url: string;
  instagram_url: string;
}

export interface FooterData {
  navigationfooterList: FooterNavItem[];
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
    socialLinks: {
      facebook_url: 'https://www.facebook.com/jointhedaisy',
      twitter_url: 'https://twitter.com/jointhedaisy',
      linkedin_url: 'https://www.linkedin.com/company/jointhedaisy',
      instagram_url: 'https://www.instagram.com/jointhedaisy',
    },
  },

  ar: {
    navigationfooterList: [
      { name: 'عن ديزي', nav: '/about' },
      { name: 'وظائف', nav: '/careers' },
      { name: 'الأسئلة الشائعة', nav: '/faq' },
      { name: 'الشروط والأحكام', nav: '/terms-conditions' },
      { name: 'سياسة الخصوصية', nav: '/privacy-policy' },
    ],
    socialLinks: {
      facebook_url: 'https://www.facebook.com/jointhedaisy',
      twitter_url: 'https://twitter.com/jointhedaisy',
      linkedin_url: 'https://www.linkedin.com/company/jointhedaisy',
      instagram_url: 'https://www.instagram.com/jointhedaisy',
    },
  },
};
