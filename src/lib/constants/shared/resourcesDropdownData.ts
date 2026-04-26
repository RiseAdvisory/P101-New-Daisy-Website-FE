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
      title: 'CUSTOMER',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog posts',
          description: 'Find cool stories and ideas',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Step-by-step guides to get the most from Daisy',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer testimonials',
          description: 'Real stories from happy customers',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'Latest features and improvements',
        },
      ],
    },
    ar: {
      title: 'العملاء',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'اكتشف قصصًا وأفكارًا مميزة',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'أدلة خطوة بخطوة للاستفادة القصوى من ديزي',
        },
        {
          nav: '/resources/testimonials',
          title: 'شهادات العملاء',
          description: 'قصص حقيقية من عملاء سعداء',
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
      title: 'BUSINESS',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog posts',
          description: 'Find cool stories and ideas',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Step-by-step guides to get the most from Daisy',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer testimonials',
          description: 'Real stories from happy customers',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'Latest features and improvements',
        },
      ],
    },
    ar: {
      title: 'الأعمال',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'اكتشف قصصًا وأفكارًا مميزة',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'أدلة خطوة بخطوة للاستفادة القصوى من ديزي',
        },
        {
          nav: '/resources/testimonials',
          title: 'شهادات العملاء',
          description: 'قصص حقيقية من عملاء سعداء',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'أحدث الميزات والتحسينات',
        },
      ],
    },
  },

  professional: {
    en: {
      title: 'PROFESSIONAL',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'Blog posts',
          description: 'Find cool stories and ideas',
        },
        {
          nav: '/resources/tutorials',
          title: 'Tutorials & Guides',
          description: 'Step-by-step guides to get the most from Daisy',
        },
        {
          nav: '/resources/testimonials',
          title: 'Customer testimonials',
          description: 'Real stories from happy customers',
        },
        {
          nav: '/resources/updates',
          title: 'Updates',
          description: 'Latest features and improvements',
        },
      ],
    },
    ar: {
      title: 'المحترفون',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'اكتشف قصصًا وأفكارًا مميزة',
        },
        {
          nav: '/resources/testimonials',
          title: 'شهادات العملاء',
          description: 'قصص حقيقية من عملاء سعداء',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس والأدلة',
          description: 'أدلة خطوة بخطوة للاستفادة القصوى من ديزي',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'أحدث الميزات والتحسينات',
        },
      ],
    },
  },
};
