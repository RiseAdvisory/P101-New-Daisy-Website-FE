import { I18nContent } from '@/lib/constants/i18n';
import {
  aiIntelligenceBusinessArticles,
  aiIntelligenceProfessionalArticles,
} from './articles/ai-intelligence';
import { bookingManagementBusinessArticles } from './articles/booking-management';
import {
  communicationToolsBusinessArticles,
  communicationToolsProfessionalArticles,
} from './articles/communication-tools';
import {
  marketingPromotionsBusinessArticles,
  marketingPromotionsProfessionalArticles,
} from './articles/marketing-promotions';
import {
  paymentProcessingBusinessArticles,
  paymentProcessingProfessionalArticles,
} from './articles/payment-processing';
import {
  businessGrowthBusinessArticles,
  businessGrowthProfessionalArticles,
} from './articles/business-growth';
import {
  teamManagementBusinessArticles,
  teamManagementProfessionalArticles,
} from './articles/team-management';
import {
  analyticsReportsBusinessArticles,
  analyticsReportsProfessionalArticles,
} from './articles/analytics-reports';
import { daisyAdvantageBusinessArticles } from './articles/daisy-advantage';
import { bottomOfFunnelBusinessArticles } from './articles/bottom-of-funnel';
import { thoughtLeadershipBusinessArticles } from './articles/thought-leadership';
import { salonManagementBusinessArticles } from './articles/salon-management';
import {
  salonMarketingBusinessArticles,
  salonMarketingProfessionalArticles,
} from './articles/salon-marketing';
import {
  beautyBusinessGrowthBusinessArticles,
  beautyBusinessGrowthProfessionalArticles,
} from './articles/beauty-business-growth';
import {
  salonPaymentsBusinessArticles,
  salonPaymentsProfessionalArticles,
} from './articles/salon-payments';
import {
  staffManagementBusinessArticles,
  staffManagementProfessionalArticles,
} from './articles/staff-management';
import {
  industryTrendsBusinessArticles,
  industryTrendsProfessionalArticles,
} from './articles/industry-trends';
import { salonAnalyticsBusinessArticles } from './articles/salon-analytics';
import { multiChannelBusinessArticles } from './articles/multi-channel';

/**
 * Blog post data structure matching the Strapi response shape
 * so components consuming this data don't need structural changes.
 */
export interface LocalBlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    aboutPosts?: string;
    metaTitle?: string;
    metaDescription?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    sortId?: number;
    tags?: {
      wellness?: string;
      hair?: string;
      digital?: string;
      [key: string]: string | undefined;
    };
    user?: {
      data?: {
        id: number;
        attributes?: {
          name: string;
          jobTitle?: string;
          date?: string;
          time?: string;
          picture?: {
            data?: {
              attributes?: {
                url: string;
              };
            };
          };
        };
      };
    };
    iconOwner?: {
      data?: {
        attributes?: {
          url: string;
        };
      }[];
    };
    category?: {
      data?: {
        id: number;
        attributes?: {
          name: string;
        };
      };
    };
    picture?: {
      data?: {
        attributes?: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    image?: {
      data?: {
        attributes?: {
          url: string;
          alternativeText?: string;
          formats?: {
            large?: { url: string };
          };
        };
      }[];
    };
    ogImage?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

/**
 * Customer blog posts
 */
export const customerBlogPosts: LocalBlogPost[] = [
  // Legacy placeholder articles (ids 1-3) removed — thin content (80-150 words)
  // that would hurt SEO. Will be replaced with full-length customer articles.
];

/**
 * Business blog posts
 */
export const businessBlogPosts: LocalBlogPost[] = [
  ...aiIntelligenceBusinessArticles,
  ...bookingManagementBusinessArticles,
  ...communicationToolsBusinessArticles,
  ...marketingPromotionsBusinessArticles,
  ...paymentProcessingBusinessArticles,
  ...businessGrowthBusinessArticles,
  ...teamManagementBusinessArticles,
  ...analyticsReportsBusinessArticles,
  ...daisyAdvantageBusinessArticles,
  ...bottomOfFunnelBusinessArticles,
  ...thoughtLeadershipBusinessArticles,
  ...salonManagementBusinessArticles,
  ...salonMarketingBusinessArticles,
  ...beautyBusinessGrowthBusinessArticles,
  ...salonPaymentsBusinessArticles,
  ...staffManagementBusinessArticles,
  ...industryTrendsBusinessArticles,
  ...salonAnalyticsBusinessArticles,
  ...multiChannelBusinessArticles,
];

/**
 * Professional blog posts
 */
export const professionalBlogPosts: LocalBlogPost[] = [
  ...aiIntelligenceProfessionalArticles,
  ...communicationToolsProfessionalArticles,
  ...marketingPromotionsProfessionalArticles,
  ...paymentProcessingProfessionalArticles,
  ...businessGrowthProfessionalArticles,
  ...teamManagementProfessionalArticles,
  ...analyticsReportsProfessionalArticles,
  ...salonMarketingProfessionalArticles,
  ...beautyBusinessGrowthProfessionalArticles,
  ...salonPaymentsProfessionalArticles,
  ...staffManagementProfessionalArticles,
  ...industryTrendsProfessionalArticles,
];

/**
 * All blog posts indexed by user type
 */
export const blogPostsByUserType: Record<string, LocalBlogPost[]> = {
  customer: customerBlogPosts,
  business: businessBlogPosts,
  professional: professionalBlogPosts,
};

/**
 * Blog hero data (formerly from hero-resources-blogposts endpoint)
 */
export const blogHeroData: I18nContent<{
  title: string;
  subtitle: string;
  description?: string;
  breadcrumbs?: string;
}> = {
  en: {
    title: 'Blog Posts',
    subtitle: 'Insights, tips, and stories from the world of beauty and wellness',
    description: 'Stay up to date with the latest trends, expert advice, and platform updates.',
    breadcrumbs: 'Resources > Blog Posts',
  },
  ar: {
    title: 'مقالات المدونة',
    subtitle: 'رؤى ونصائح وقصص من عالم الجمال والعافية',
    description: 'ابقَ على اطلاع بأحدث الاتجاهات ونصائح الخبراء وتحديثات المنصة.',
    breadcrumbs: 'الموارد > مقالات المدونة',
  },
};

/**
 * CTA data (formerly from legal-downloads endpoint)
 */
export const blogCTAData: I18nContent<{
  textCreate: string;
  textDownload: string;
  titleSimilar: string;
}> = {
  en: {
    textCreate: 'Create Your Own Perfect Wellness Ritual With The Daisy Packages',
    textDownload: 'Download now!',
    titleSimilar: 'Other Topics That May Interest You',
  },
  ar: {
    textCreate: 'أنشئ طقوس العافية المثالية مع باقات ديزي',
    textDownload: 'حمّل الآن!',
    titleSimilar: 'مواضيع أخرى قد تهمك',
  },
};
