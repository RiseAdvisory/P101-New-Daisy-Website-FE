import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  UserType,
} from '@/lib/api/blog';
import { baseURLImage } from '@/helpers/axiosConfig';
import BlogPostContent from './BlogPostContent';
import BlogPostJsonLd from './BlogPostJsonLd';

interface PageProps {
  params: {
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
  const { userType, slug } = params;

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

  // Get OG image URL
  const ogImageUrl = attributes.ogImage?.data?.attributes?.url
    ? new URL(attributes.ogImage.data.attributes.url, baseURLImage).href
    : attributes.picture?.data?.attributes?.url
    ? new URL(attributes.picture.data.attributes.url, baseURLImage).href
    : undefined;

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
    alternates: {
      canonical: `/resources/blog/${userType}/${slug}`,
      languages: {
        en: `/resources/blog/${userType}/${slug}`,
        ar: `/ar/resources/blog/${userType}/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { userType, slug } = params;

  // Validate userType
  if (!['customer', 'business', 'professional'].includes(userType)) {
    notFound();
  }

  const post = await getBlogPostBySlug(userType as UserType, slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <BlogPostJsonLd post={post} userType={userType as UserType} />

      {/* Blog Post Content */}
      <BlogPostContent post={post} userType={userType as UserType} />
    </>
  );
}
