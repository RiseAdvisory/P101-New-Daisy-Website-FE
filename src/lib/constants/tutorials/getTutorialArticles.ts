import { tutorialCatalog, TutorialCategory } from './tutorialCatalog';
import { businessBlogPosts, professionalBlogPosts, LocalBlogPost } from '../blog/blogData';
import { guideEntries } from '../guides/guideData';

export interface TutorialArticle {
  title: string;
  slug: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  linkPath: string;
  source: 'blog' | 'guide';
}

const allBlogPosts = [...businessBlogPosts, ...professionalBlogPosts];

function blogPostToTutorialArticle(
  post: LocalBlogPost,
): TutorialArticle {
  const isInBusiness = businessBlogPosts.some(
    (p) => p.attributes.slug === post.attributes.slug,
  );
  const resolvedUserType = isInBusiness ? 'businesses' : 'professionals';

  return {
    title: post.attributes.title,
    slug: post.attributes.slug,
    description: post.attributes.description,
    image:
      post.attributes.image?.data?.[0]?.attributes?.url ??
      post.attributes.picture?.data?.attributes?.url ??
      '/images/blog/grow-salon.webp',
    author:
      post.attributes.user?.data?.attributes?.name ??
      'The Daisy Team',
    date:
      post.attributes.user?.data?.attributes?.date ?? '',
    readTime:
      post.attributes.user?.data?.attributes?.time ?? '5 min.',
    linkPath: `/resources/blog/${resolvedUserType}/${post.attributes.slug}`,
    source: 'blog',
  };
}

function guideToTutorialArticle(slug: string): TutorialArticle | null {
  const guide = guideEntries.find((g) => g.slug === slug);
  if (!guide) return null;

  return {
    title: guide.title,
    slug: guide.slug,
    description: guide.answer.slice(0, 200) + (guide.answer.length > 200 ? '...' : ''),
    image: '/images/blog/grow-salon.webp',
    author: 'The Daisy Team',
    date: '',
    readTime: '5 min.',
    linkPath: `/guides/${guide.slug}`,
    source: 'guide',
  };
}

export interface TutorialCategoryWithArticles {
  category: TutorialCategory;
  articles: TutorialArticle[];
}

export function getTutorialArticles(
  persona: 'business' | 'professional',
): TutorialCategoryWithArticles[] {
  const categories = tutorialCatalog[persona];

  return categories
    .map((category) => {
      const blogArticles = category.articleSlugs
        .map((slug) => {
          const post = allBlogPosts.find(
            (p) => p.attributes.slug === slug,
          );
          if (!post) return null;
          return blogPostToTutorialArticle(post);
        })
        .filter((a): a is TutorialArticle => a !== null);

      const guideArticles = category.guideSlugs
        .map((slug) => guideToTutorialArticle(slug))
        .filter((a): a is TutorialArticle => a !== null);

      const articles = [...blogArticles, ...guideArticles];
      return { category, articles };
    })
    .filter((c) => c.articles.length > 0);
}
