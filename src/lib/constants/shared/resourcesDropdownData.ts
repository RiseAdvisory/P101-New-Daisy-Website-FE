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
      title: 'عميل',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'اكتشف قصصًا وأفكارًا مميزة',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس التعليمية والأدلة',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'نص تجريبي لأغراض العرض فقط',
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
      title: 'شركة',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'اكتشف قصصًا وأفكارًا مميزة',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس التعليمية والأدلة',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'نص تجريبي لأغراض العرض فقط',
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
      title: 'محترف',
      itemResources: [
        {
          nav: '/resources/blog-post',
          title: 'مقالات المدونة',
          description: 'نصائح مهنية لمتخصصي التجميل',
        },
        {
          nav: '/resources/testimonials',
          title: 'آراء العملاء',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/tutorials',
          title: 'الدروس التعليمية والأدلة',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
        {
          nav: '/resources/updates',
          title: 'التحديثات',
          description: 'نص تجريبي لأغراض العرض فقط',
        },
      ],
    },
  },
};
