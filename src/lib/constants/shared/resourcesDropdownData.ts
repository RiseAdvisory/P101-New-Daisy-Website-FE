import { I18nContent } from '../i18n';

export interface ResourceItem {
  nav: string;
  title: string;
  description: string;
}

export interface ResourcesDropdownContent {
  title: string;
  itemResources: ResourceItem[];
}

export type ResourcesDropdownPageType =
  | 'customer'
  | 'business'
  | 'professional';

export type ResourcesDropdownData = Record<
  ResourcesDropdownPageType,
  I18nContent<ResourcesDropdownContent>
>;

export const resourcesDropdownData: ResourcesDropdownData = {
  customer: {
    en: {
      title: 'Resources for Customers',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog Posts',
          description: 'Tips and trends for your beauty journey',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer Testimonials',
          description: 'Real stories from happy customers',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Step-by-step guides to get the most from Daisy',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'Latest features and improvements',
        },
      ],
    },
    ar: {
      title: 'موارد للعملاء',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'المقالات',
          description: 'نصائح واتجاهات لرحلة جمالك',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'قصص حقيقية من عملاء سعداء',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'أدلة خطوة بخطوة للاستفادة القصوى من دايزي',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'أحدث الميزات والتحسينات',
        },
      ],
    },
  },

  business: {
    en: {
      title: 'Resources for Businesses',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog Posts',
          description: 'Insights to grow your beauty business',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer Testimonials',
          description: 'See how businesses thrive with Daisy',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Learn how to maximize your business tools',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'New features for business owners',
        },
      ],
    },
    ar: {
      title: 'موارد للأعمال',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'المقالات',
          description: 'رؤى لتنمية أعمال التجميل الخاصة بك',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'شاهد كيف تزدهر الأعمال مع دايزي',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'تعلّم كيفية تحقيق أقصى استفادة من أدوات عملك',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'ميزات جديدة لأصحاب الأعمال',
        },
      ],
    },
  },

  professional: {
    en: {
      title: 'Resources for Professionals',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog Posts',
          description: 'Career tips for beauty professionals',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer Testimonials',
          description: 'Hear from professionals on the platform',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Guides to build your professional profile',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'Latest tools for independent professionals',
        },
      ],
    },
    ar: {
      title: 'موارد للمتخصصين',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'المقالات',
          description: 'نصائح مهنية لمتخصصي التجميل',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'استمع إلى المتخصصين على المنصة',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'أدلة لبناء ملفك المهني',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'أحدث الأدوات للمتخصصين المستقلين',
        },
      ],
    },
  },
};
