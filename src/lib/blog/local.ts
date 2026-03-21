/**
 * Local blog data access functions - replaces Strapi API calls.
 * Provides the same interface as the old blog API module
 * so consuming code needs minimal changes.
 */

import {
  LocalBlogPost,
  blogPostsByUserType,
} from '@/lib/constants/blog/blogData';

export type UserType = 'customer' | 'business' | 'professional';

// Re-export the blog post type under the same name used previously
export type BlogPost = LocalBlogPost;

/**
 * Get all blog posts for a specific user type
 */
export async function getAllBlogPosts(
  userType: UserType,
  locale: string = 'en'
): Promise<BlogPost[]> {
  const posts = blogPostsByUserType[userType] || [];
  // Filter by locale if needed (currently all posts are 'en')
  return posts.filter((p) => p.attributes.locale === locale || locale === 'en');
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(
  userType: UserType,
  slug: string,
  locale: string = 'en'
): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts(userType, locale);
  return posts.find((p) => p.attributes.slug === slug) ?? null;
}

/**
 * Get all blog slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<
  Array<{ userType: UserType; slug: string; locale: string; publishedAt?: string }>
> {
  const userTypes: UserType[] = ['customer', 'business', 'professional'];
  const locales = ['en'];
  const slugs: Array<{ userType: UserType; slug: string; locale: string; publishedAt?: string }> = [];

  for (const userType of userTypes) {
    for (const locale of locales) {
      const posts = await getAllBlogPosts(userType, locale);
      posts.forEach((post) => {
        if (post.attributes.slug) {
          slugs.push({
            userType,
            slug: post.attributes.slug,
            locale,
            publishedAt: post.attributes.publishedAt,
          });
        }
      });
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
  const posts = await getAllBlogPosts(userType, locale);
  return posts
    .filter(
      (p) =>
        p.id !== currentPostId &&
        p.attributes.category?.data?.id === categoryId
    )
    .slice(0, limit);
}
