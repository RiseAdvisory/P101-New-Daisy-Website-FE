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

function mergeEnglishMediaIntoLocale(en: BlogPost, localized: BlogPost): BlogPost {
  const enPicUrl = en.attributes.picture?.data?.attributes?.url;
  const enOgUrl = en.attributes.ogImage?.data?.attributes?.url;
  const enImg0Url = en.attributes.image?.data?.[0]?.attributes?.url;
  const enImg0LargeUrl = en.attributes.image?.data?.[0]?.attributes?.formats?.large?.url;

  const locPic = localized.attributes.picture;
  const locOg = localized.attributes.ogImage;
  const locImg0 = localized.attributes.image?.data?.[0];

  const mergedPicture =
    enPicUrl
      ? {
          ...(locPic ?? en.attributes.picture),
          data: {
            ...(locPic?.data ?? en.attributes.picture?.data),
            attributes: {
              ...(locPic?.data?.attributes ?? en.attributes.picture?.data?.attributes),
              url: enPicUrl,
            },
          },
        }
      : localized.attributes.picture;

  const mergedOgImage =
    enOgUrl
      ? {
          ...(locOg ?? en.attributes.ogImage),
          data: {
            ...(locOg?.data ?? en.attributes.ogImage?.data),
            attributes: {
              ...(locOg?.data?.attributes ?? en.attributes.ogImage?.data?.attributes),
              url: enOgUrl,
            },
          },
        }
      : localized.attributes.ogImage;

  const mergedImage =
    enImg0Url
      ? {
          data: [
            {
              ...(locImg0 ?? en.attributes.image?.data?.[0]),
              attributes: {
                ...(locImg0?.attributes ?? en.attributes.image?.data?.[0]?.attributes),
                url: enImg0Url,
                formats: enImg0LargeUrl
                  ? {
                      ...(locImg0?.attributes?.formats ?? en.attributes.image?.data?.[0]?.attributes?.formats),
                      large: {
                        ...(locImg0?.attributes?.formats?.large ?? en.attributes.image?.data?.[0]?.attributes?.formats?.large),
                        url: enImg0LargeUrl,
                      },
                    }
                  : (locImg0?.attributes?.formats ?? en.attributes.image?.data?.[0]?.attributes?.formats),
              },
            },
          ],
        }
      : localized.attributes.image;

  return {
    ...localized,
    attributes: {
      ...localized.attributes,
      picture: mergedPicture,
      ogImage: mergedOgImage,
      image: mergedImage,
    },
  };
}

/**
 * Get all blog posts for a specific user type
 */
export async function getAllBlogPosts(
  userType: UserType,
  locale: string = 'en'
): Promise<BlogPost[]> {
  const posts = (blogPostsByUserType[userType] || []).filter(
    (p): p is BlogPost => Boolean(p?.attributes?.slug),
  );

  // Use English as the canonical list of slugs for a persona.
  const english = posts.filter((p) => p.attributes.locale === 'en');
  const englishBySlug = new Map(english.map((p) => [p.attributes.slug, p]));

  if (locale === 'en') return english;

  const localized = posts.filter((p) => p.attributes.locale === locale);
  const localizedBySlug = new Map(localized.map((p) => [p.attributes.slug, p]));

  // Return all English slugs; if an Arabic translation exists, use it, but always
  // inherit the English media so images match across locales.
  const merged: BlogPost[] = [];
  for (const enPost of english) {
    const slug = enPost.attributes.slug;
    const locPost = localizedBySlug.get(slug);
    if (locPost) merged.push(mergeEnglishMediaIntoLocale(enPost, locPost));
    else merged.push(enPost);
  }

  // Include any localized posts that have no English canonical (should be rare).
  for (const locPost of localized) {
    if (!englishBySlug.has(locPost.attributes.slug)) merged.push(locPost);
  }

  return merged;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(
  userType: UserType,
  slug: string,
  locale: string = 'en'
): Promise<BlogPost | null> {
  const posts = (blogPostsByUserType[userType] || []).filter(
    (p): p is BlogPost => Boolean(p?.attributes?.slug),
  );

  const enPost = posts.find((p) => p.attributes.locale === 'en' && p.attributes.slug === slug);
  if (locale === 'en') return enPost ?? null;

  const locPost = posts.find((p) => p.attributes.locale === locale && p.attributes.slug === slug);
  if (enPost && locPost) return mergeEnglishMediaIntoLocale(enPost, locPost);
  return locPost ?? enPost ?? null;
}

/**
 * Get all blog slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<
  Array<{ userType: UserType; slug: string; locale: string; publishedAt?: string }>
> {
  const userTypes: UserType[] = ['customer', 'business', 'professional'];
  const slugs: Array<{ userType: UserType; slug: string; locale: string; publishedAt?: string }> = [];

  for (const userType of userTypes) {
    // Slugs are locale-agnostic at the routing level; generate from English canonicals.
    const posts = await getAllBlogPosts(userType, 'en');
    posts.forEach((post) => {
      if (post.attributes.slug) {
        slugs.push({
          userType,
          slug: post.attributes.slug,
          locale: 'en',
          publishedAt: post.attributes.publishedAt,
        });
      }
    });
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
