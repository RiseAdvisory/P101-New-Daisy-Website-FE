'use client';

import { BlogPost, UserType } from '@/lib/api/blog';
import { baseURLImage } from '@/helpers/axiosConfig';

interface BlogPostJsonLdProps {
  post: BlogPost;
  userType: UserType;
}

export default function BlogPostJsonLd({
  post,
  userType,
}: BlogPostJsonLdProps) {
  const { attributes } = post;

  // Build image URL
  const imageUrl = attributes.picture?.data?.attributes?.url
    ? new URL(attributes.picture.data.attributes.url, baseURLImage).href
    : '';

  // Build author image URL
  const authorImageUrl = attributes.user?.data?.attributes?.picture?.data
    ?.attributes?.url
    ? new URL(
        attributes.user.data.attributes.picture.data.attributes.url,
        baseURLImage
      ).href
    : '';

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: attributes.title,
    description:
      attributes.metaDescription ||
      attributes.description?.substring(0, 160) ||
      '',
    image: imageUrl || undefined,
    datePublished: attributes.publishedAt,
    dateModified: attributes.updatedAt,
    author: {
      '@type': 'Person',
      name: attributes.user?.data?.attributes?.name || 'The Daisy Team',
      jobTitle: attributes.user?.data?.attributes?.jobTitle || undefined,
      image: authorImageUrl || undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Daisy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jointhedaisy.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.jointhedaisy.com/resources/blog/${userType}/${attributes.slug}`,
    },
    articleSection: attributes.category?.data?.attributes?.name || undefined,
    inLanguage: attributes.locale === 'ar' ? 'ar' : 'en',
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.jointhedaisy.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://www.jointhedaisy.com/resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Blog',
        item: 'https://www.jointhedaisy.com/resources/blog',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: attributes.title,
        item: `https://www.jointhedaisy.com/resources/blog/${userType}/${attributes.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
