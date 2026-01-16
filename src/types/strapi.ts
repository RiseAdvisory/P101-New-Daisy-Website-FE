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

// Image format from Strapi
export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
}

export interface StrapiImage {
  data: Array<{
    id: number;
    attributes: {
      url: string;
      formats?: {
        thumbnail?: StrapiImageFormat;
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
      };
    };
  }> | null;
}

// About Page
export interface AboutPageAttributes {
  heroTitle?: string;
  heroSubtitle?: string;
  titleScroll?: string;
  missionTitle?: string;
  missionDescription?: string;
  valueTitle?: string;
  valueDescription?: string;
}

// Growth Section
export interface GrowthAttributes {
  title?: string;
  description?: string;
  subtitle?: string;
  buttonLearn?: string;
  buttonLink?: string;
  imageHero?: StrapiImage;
}

// Info Scroll Section
export interface InfoScrollItem {
  description: string;
  text: string;
  title: string;
  listSub?: string[];
}

// Scroll Section Item
export interface ScrollSectionAttributes {
  sortId: number;
  styleBgMobileSecond?: Record<string, string | number>;
  styleImageMobile?: Record<string, string | number>;
  styleFirstBgJSON?: Record<string, string | number>;
  styleSecondBgJSON?: Record<string, string | number>;
  firstBg: StrapiImage;
  secondBg?: StrapiImage;
  mainImage: StrapiImage;
  infoScroll: InfoScrollItem;
}

export interface ScrollSectionItem {
  id: number;
  attributes: ScrollSectionAttributes;
}

// Home Page (Business/Customer/Professional)
export interface HomePageAttributes {
  titleFraque?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

// Careers Page
export interface CareersPageAttributes {
  titleHero?: string;
  subtitleHero?: string;
  descriptionHero?: string;
  titleScroll?: string;
}

// Contact Page
export interface ContactPageAttributes {
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  listContact?: ContactItem[];
}

export interface ContactItem {
  title?: string;
  description?: string;
  icon?: string;
}

// Features Page
export interface FeaturesPageAttributes {
  title?: string;
  titleScroll?: string;
  listBusinessOptions?: BusinessOption[];
}

export interface BusinessOption {
  title?: string;
  description?: string;
  icon?: string;
}

export interface FeatureListItem {
  id: number;
  sortId?: number;
  attributes?: {
    title?: string;
    description?: string;
    image?: StrapiImage;
  };
}

// Pricing Page
export interface PricingAttributes {
  title?: string;
  switchAnnually?: {
    monthly?: string;
    annually?: string;
  };
  business?: {
    pricingCard?: PricingCard[];
  };
  professional?: {
    pricingCard?: PricingCard[];
  };
  enterprise?: EnterpriseData;
}

export interface PricingCard {
  title?: string;
  price?: string;
  annualPrice?: string;
  features?: string[];
  recommended?: boolean;
}

export interface EnterpriseData {
  title?: string;
  description?: string;
  features?: string[];
}

// FAQ Page
export interface FaqPageAttributes {
  listFaq?: Record<
    string,
    {
      title?: string;
      subtitle?: string;
      description?: string;
    }
  >;
}

// Privacy/Terms Pages
export interface LegalPageAttributes {
  title?: string;
  content?: string;
  sections?: LegalSection[];
}

export interface LegalSection {
  title?: string;
  content?: string;
}

// Get The App Page
export interface GetTheAppAttributes {
  heroTitle?: string;
  heroDescription?: string;
  features?: string[];
}

// Resources Pages
export interface ResourcePageAttributes {
  title?: string;
  description?: string;
  items?: ResourceItem[];
}

export interface ResourceItem {
  id: number;
  title?: string;
  description?: string;
  date?: string;
  image?: StrapiImage;
}
