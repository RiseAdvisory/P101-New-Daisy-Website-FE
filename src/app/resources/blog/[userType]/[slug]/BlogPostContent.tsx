'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BlogPost, UserType, getRelatedBlogPosts } from '@/lib/api/blog';
import { baseURLImage } from '@/helpers/axiosConfig';
import { useEffect, useState, useMemo } from 'react';
import DOMPurify from 'dompurify';

interface BlogPostContentProps {
  post: BlogPost;
  userType: UserType;
}

export default function BlogPostContent({
  post,
  userType,
}: BlogPostContentProps) {
  const router = useRouter();
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { attributes } = post;

  // Sanitize HTML content to prevent XSS attacks
  const sanitizedDescription = useMemo(
    () => DOMPurify.sanitize(attributes.description),
    [attributes.description]
  );

  // Fetch related posts with error handling
  useEffect(() => {
    if (attributes.category?.data?.id) {
      getRelatedBlogPosts(
        userType,
        attributes.category.data.id,
        post.id,
        attributes.locale
      )
        .then(setRelatedPosts)
        .catch((error) => {
          console.error('Failed to fetch related posts:', error);
          // Fail silently - related posts are optional
          setRelatedPosts([]);
        });
    }
  }, [post.id, userType, attributes.category, attributes.locale]);

  // Build image URLs
  const featuredImageUrl = attributes.picture?.data?.attributes?.url
    ? new URL(attributes.picture.data.attributes.url, baseURLImage).href
    : '';

  const authorImageUrl = attributes.user?.data?.attributes?.picture?.data
    ?.attributes?.url
    ? new URL(
        attributes.user.data.attributes.picture.data.attributes.url,
        baseURLImage
      ).href
    : '';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Category Badge */}
        {attributes.category?.data?.attributes?.name && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-[#A67F6B] bg-[#F5F1EE] rounded-full">
              {attributes.category.data.attributes.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#172524] mb-6 leading-tight">
          {attributes.title}
        </h1>

        {/* Author Info & Date */}
        <div className="flex items-center gap-4 mb-8">
          {authorImageUrl && (
            <Image
              src={authorImageUrl}
              alt={attributes.user?.data?.attributes?.name || 'Author'}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold text-[#172524]">
              {attributes.user?.data?.attributes?.name || 'The Daisy Team'}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#455150]">
              {attributes.user?.data?.attributes?.jobTitle && (
                <>
                  <span>{attributes.user.data.attributes.jobTitle}</span>
                  <span>•</span>
                </>
              )}
              <time dateTime={attributes.publishedAt}>
                {formatDate(attributes.publishedAt)}
              </time>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImageUrl && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={featuredImageUrl}
              alt={
                attributes.picture?.data?.attributes?.alternativeText ||
                attributes.title
              }
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-[#455150] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-[#E8E9E9]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172524] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedImageUrl = relatedPost.attributes.picture?.data
                  ?.attributes?.url
                  ? new URL(
                      relatedPost.attributes.picture.data.attributes.url,
                      baseURLImage
                    ).href
                  : '';

                return (
                  <div
                    key={relatedPost.id}
                    className="cursor-pointer group"
                    onClick={() =>
                      router.push(
                        `/resources/blog/${userType}/${relatedPost.attributes.slug}`
                      )
                    }
                  >
                    {relatedImageUrl && (
                      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={relatedImageUrl}
                          alt={relatedPost.attributes.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-[#172524] group-hover:text-[#A67F6B] transition-colors">
                      {relatedPost.attributes.title}
                    </h3>
                    <p className="text-sm text-[#455150] mt-2 line-clamp-2">
                      {relatedPost.attributes.metaDescription ||
                        relatedPost.attributes.description?.substring(0, 120)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push(`/resources/blog`)}
            className="inline-flex items-center gap-2 text-[#A67F6B] hover:text-[#8B6854] font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
}
