import axios from 'axios';
import { baseURL } from '@/helpers/axiosConfig';

export type UserType = 'customer' | 'business' | 'professional';

interface BlogPostAttributes {
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
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  ogImage?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Get the Strapi endpoint name for a user type
 */
function getEndpointForUserType(userType: UserType): string {
  const endpoints: Record<UserType, string> = {
    customer: 'resources-blog-post-customers',
    business: 'resources-blog-post-businesses',
    professional: 'resources-blog-post-independents',
  };
  return endpoints[userType];
}

/**
 * Fetch all blog posts for a specific user type
 */
export async function getAllBlogPosts(
  userType: UserType,
  locale: string = 'en'
): Promise<BlogPost[]> {
  try {
    const endpoint = getEndpointForUserType(userType);
    const response = await axios.get<StrapiResponse<BlogPost[]>>(
      `${baseURL}/${endpoint}`,
      {
        params: {
          locale,
          populate: '*',
          sort: 'publishedAt:desc',
        },
      }
    );

    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching blog posts for ${userType}:`, error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(
  userType: UserType,
  slug: string,
  locale: string = 'en'
): Promise<BlogPost | null> {
  try {
    const endpoint = getEndpointForUserType(userType);
    const url = `${baseURL}/${endpoint}`;

    console.log('[getBlogPostBySlug] Fetching:', {
      url,
      userType,
      slug,
      locale,
      baseURL,
    });

    const response = await axios.get<StrapiResponse<BlogPost[]>>(url, {
      params: {
        locale,
        'filters[slug][$eq]': slug,
        populate: '*',
      },
    });

    console.log('[getBlogPostBySlug] Response:', {
      status: response.status,
      dataLength: response.data.data?.length,
      hasData: !!response.data.data,
    });

    const posts = response.data.data;
    return posts && posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`[getBlogPostBySlug] Error fetching blog post:`, {
      userType,
      slug,
      locale,
      baseURL,
      error: error instanceof Error ? error.message : error,
    });
    return null;
  }
}

/**
 * Get all blog slugs for static generation
 * Returns slugs for all user types and locales
 */
export async function getAllBlogSlugs(): Promise<
  Array<{ userType: UserType; slug: string; locale: string }>
> {
  const userTypes: UserType[] = ['customer', 'business', 'professional'];
  const locales = ['en', 'ar'];
  const slugs: Array<{ userType: UserType; slug: string; locale: string }> = [];

  for (const userType of userTypes) {
    for (const locale of locales) {
      try {
        const posts = await getAllBlogPosts(userType, locale);
        posts.forEach((post) => {
          if (post.attributes.slug) {
            slugs.push({
              userType,
              slug: post.attributes.slug,
              locale,
            });
          }
        });
      } catch (error) {
        console.error(
          `Error fetching slugs for ${userType} (${locale}):`,
          error
        );
      }
    }
  }

  return slugs;
}

/**
 * Get related blog posts (same category, excluding current post)
 */
export async function getRelatedBlogPosts(
  userType: UserType,
  categoryId: number,
  currentPostId: number,
  locale: string = 'en',
  limit: number = 3
): Promise<BlogPost[]> {
  try {
    const endpoint = getEndpointForUserType(userType);
    const response = await axios.get<StrapiResponse<BlogPost[]>>(
      `${baseURL}/${endpoint}`,
      {
        params: {
          locale,
          'filters[category][id][$eq]': categoryId,
          'filters[id][$ne]': currentPostId,
          populate: '*',
          sort: 'publishedAt:desc',
          'pagination[limit]': limit,
        },
      }
    );

    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    return [];
  }
}
