import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  UserType,
} from '@/lib/api/blog';
import BlogPostContent from './BlogPostContent';
import BlogPostJsonLd from './BlogPostJsonLd';
import { SpeakableSchema } from '@/components/seo/SpeakableSchema';
import { ProfilePageSchema } from '@/components/seo/ProfilePageSchema';
import { authorBios } from '@/lib/constants/blog/authorData';

interface PageProps {
  params: {
    locale: string;
    userType: string;
    slug: string;
  };
}

// Allow dynamic params for blog posts not in generateStaticParams
export const dynamicParams = true;

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((item) => ({
    userType: item.userType,
    slug: item.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, userType, slug } = params;

  // Validate userType
  if (!['customer', 'business', 'professional'].includes(userType)) {
    return {
      title: 'Not Found',
    };
  }

  const post = await getBlogPostBySlug(userType as UserType, slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const { attributes } = post;
  const metaTitle = attributes.metaTitle || attributes.title;
  const metaDescription =
    attributes.metaDescription ||
    attributes.description?.substring(0, 160) ||
    '';

  // Get OG image URL - now uses local paths directly
  const ogImageUrl = attributes.ogImage?.data?.attributes?.url
    ?? attributes.picture?.data?.attributes?.url
    ?? undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: attributes.publishedAt,
      modifiedTime: attributes.updatedAt,
      authors: [attributes.user?.data?.attributes?.name || 'The Daisy Team'],
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    alternates: localeAlternates(`/resources/blog/${userType}/${slug}`, locale),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, userType, slug } = params;

  // Validate userType
  if (!['customer', 'business', 'professional'].includes(userType)) {
    notFound();
  }

  const post = await getBlogPostBySlug(userType as UserType, slug);

  if (!post) {
    notFound();
  }

  const metaTitle = post.attributes.metaTitle || post.attributes.title;
  const authorName = post.attributes.user?.data?.attributes?.name || '';
  const author = authorBios[authorName];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <BlogPostJsonLd post={post} userType={userType as UserType} />
      {author && author.name !== 'The Daisy Team' && (
        <ProfilePageSchema
          url={`https://www.jointhedaisy.com/${locale}/resources/blog/${userType}/${slug}`}
          type="Person"
          name={author.name}
          description={author.bio}
          image={author.image}
          jobTitle={author.jobTitle}
          worksFor="The Daisy"
        />
      )}
      <SpeakableSchema
        title={metaTitle}
        url={`https://www.jointhedaisy.com/${locale}/resources/blog/${userType}/${slug}`}
        cssSelectors={['[data-geo-answer]', 'article > p:first-of-type']}
      />

      {/* Blog Post Content */}
      <BlogPostContent post={post} userType={userType as UserType} />
    </>
  );
}
