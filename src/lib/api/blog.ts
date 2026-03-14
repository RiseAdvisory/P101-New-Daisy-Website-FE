/**
 * Blog API - now backed by local data instead of Strapi.
 * Re-exports from local blog module for backward compatibility.
 */

export {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedBlogPosts,
} from '@/lib/blog/local';

export type { UserType, BlogPost } from '@/lib/blog/local';
