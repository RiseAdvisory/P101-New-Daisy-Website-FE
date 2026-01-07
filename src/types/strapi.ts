/**
 * TypeScript interfaces for Strapi CMS API responses
 * Replaces 'any' types with proper type safety
 */

export interface StrapiResponse<T> {
  data: {
    id?: number;
    attributes: T;
  };
}

export interface StrapiListResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogPostAttributes {
  aboutPosts: string;
  title?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface QAItemAttributes {
  question: string;
  answer: string;
  order?: number;
}

export interface TutorialTabAttributes {
  titleListTab: string;
  fieldInfoTabs: string;
  order?: number;
}

export interface TutorialComponentAttributes {
  title: string;
  tutorialTextDown?: string;
  provisions?: string;
  secondTitle?: string;
  secondoryTheme?: string[];
  branded?: string;
  titleUserPrivacy?: string;
  userPrivacy?: string[];
  alphaListPrimary?: string[];
  alphaListMiddle?: string[];
  caseupload?: string;
  comunicationText?: string;
  unlessList?: string[];
  appUse?: string;
  willHandle?: string;
  titleUnless?: string;
  unlessPersonal?: string;
}
