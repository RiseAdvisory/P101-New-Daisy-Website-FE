'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BlogPost, UserType, getRelatedBlogPosts } from '@/lib/api/blog';
import { baseURLImage } from '@/helpers/axiosConfig';
import { useEffect, useState, useMemo } from 'react';
import DOMPurify from 'dompurify';
import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';

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
  // Only sanitize on client-side to avoid SSR/build errors
  // Use aboutPosts for full content, fallback to description for short intro
  const sanitizedDescription = useMemo(() => {
    const content = attributes.aboutPosts || attributes.description;
    if (typeof window === 'undefined') {
      // Server-side: return raw HTML (will be sanitized after hydration)
      return content;
    }
    return DOMPurify.sanitize(content);
  }, [attributes.aboutPosts, attributes.description]);

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
  const featuredImageUrl = (
    attributes.image?.data?.[0]?.attributes?.url ||
    attributes.picture?.data?.attributes?.url
  )
    ? new URL(
        (attributes.image?.data?.[0]?.attributes?.url ||
          attributes.picture?.data?.attributes?.url)!,
        baseURLImage
      ).href
    : '';

  const authorImageUrl = attributes.iconOwner?.data?.[0]?.attributes?.url
    ? new URL(
        attributes.iconOwner.data[0].attributes.url,
        baseURLImage
      ).href
    : attributes.user?.data?.attributes?.picture?.data?.attributes?.url
    ? new URL(
        attributes.user.data.attributes.picture.data.attributes.url,
        baseURLImage
      ).href
    : '';

  // Get user type label
  const getUserTypeLabel = () => {
    switch (userType) {
      case 'customer':
        return 'Customer';
      case 'business':
        return 'Business';
      case 'professional':
        return 'Professional';
      default:
        return 'Blog Post';
    }
  };

  // Get tags array
  const tags = attributes.tags
    ? Object.values(attributes.tags).filter(Boolean)
    : [];

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center pb-[100px] md:pb-[400px] px-4 md:pl-[64px] md:pt-[25px]"
        style={{
          backgroundImage: featuredImageUrl
            ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${featuredImageUrl})`
            : 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
          backgroundPosition: 'center',
        }}
      >
        {/* Breadcrumb */}
        <div className="flex pt-6 items-center">
          <HomeIcon className="ltr:mr-2 rtl:ml-2" />
          <div className="flex items-center gap-2 text-white text-sm">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => router.push('/resources')}
            >
              Resources
            </span>
            <span>/</span>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => router.push('/resources/blog-post')}
            >
              Blog Posts
            </span>
            {attributes.category?.data?.attributes?.name && (
              <>
                <span>/</span>
                <span>{attributes.category.data.attributes.name}</span>
              </>
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mt-8 max-w-4xl">
          {attributes.title}
        </h1>

        {/* Author Info & Date */}
        <div className="flex justify-start text-[#ECEEED] text-sm mt-4 flex-col md:flex-row">
          <div className="flex">
            {attributes.user?.data?.attributes?.name && (
              <div className="flex ltr:border-r ltr:pr-[10px] rtl:pl-[10px] rtl:border-l">
                {authorImageUrl && (
                  <Image
                    src={authorImageUrl}
                    alt="Author"
                    className="ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                    width={18}
                    height={18}
                  />
                )}
                <span className="text-sm">
                  {attributes.user.data.attributes.name}
                </span>
              </div>
            )}
            {attributes.user?.data?.attributes?.date && (
              <span className="flex items-center border-r px-[10px]">
                <CalendarIcon
                  className="ltr:mr-[10px] rtl:ml-[10px]"
                  fill="#ECEEED"
                />
                {attributes.user.data.attributes.date}
              </span>
            )}
          </div>
          {attributes.user?.data?.attributes?.time && (
            <span className="flex items-center mt-2 md:mt-0 md:ml-2 rtl:border-r rtl:pr-2">
              <ClockIcon className="ltr:mr-2 rtl:ml-2" fill="#ECEEED" />
              {attributes.user.data.attributes.time}
            </span>
          )}
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 md:px-[280px] py-16">
        <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      </div>

      {/* CTA Section - Create Your Own Perfect Wellness Ritual */}
      <div className="bg-[#2E4342] py-[68px] px-4 mt-28 md:mx-16 md:rounded-[16px] md:px-28 md:py-16 md:flex">
        <h2 className="text-white font-semibold text-[32px] leading-10 ltr:md:mr-[150px] rtl:md:ml-[150px]">
          Create Your Own Perfect Wellness Ritual With The Daisy Packages
        </h2>
        <div className="border-t border-gray-400 my-4 md:hidden" />
        <div>
          <p className="ltr:font-montserrat text-[16px] leading-6 text-white mb-4">
            Download now!
          </p>
          <div className="md:flex md:w-[420px] gap-4">
            <button
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/details?id=com.daisy',
                  '_blank'
                )
              }
              className="mb-4 md:mb-0 flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-primary hover:text-white transition-colors w-full md:w-auto group"
            >
              <svg
                className="w-6 h-6 fill-primary group-hover:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://apps.apple.com/app/daisy',
                  '_blank'
                )
              }
              className="mb-4 md:mb-0 flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-primary hover:text-white transition-colors w-full md:w-auto group"
            >
              <svg
                className="w-6 h-6 fill-primary group-hover:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">AppStore</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#172524] text-bold text-[32px] leading-[40px] pt-28 pb-10">
            Other Topics That You May Interest You
          </h2>
          <ul className="bg-[#F8F5F3] px-4 space-y-8 pb-[28px] md:pb-[140px] bg-transparent md:grid md:grid-cols-3 md:gap-6 md:space-y-0 max-w-7xl">
            {relatedPosts.slice(0, 3).map((relatedPost) => {
              const relatedImageUrl = (
                relatedPost.attributes.image?.data?.[0]?.attributes?.url ||
                relatedPost.attributes.picture?.data?.attributes?.url
              )
                ? new URL(
                    (relatedPost.attributes.image?.data?.[0]?.attributes
                      ?.url ||
                      relatedPost.attributes.picture?.data?.attributes
                        ?.url)!,
                    baseURLImage
                  ).href
                : '';

              const relatedAuthorImageUrl = relatedPost.attributes.iconOwner
                ?.data?.[0]?.attributes?.url
                ? new URL(
                    relatedPost.attributes.iconOwner.data[0].attributes.url,
                    baseURLImage
                  ).href
                : '';

              const relatedTags = relatedPost.attributes.tags
                ? Object.values(relatedPost.attributes.tags).filter(Boolean)
                : [];

              return (
                <li
                  key={relatedPost.id}
                  onClick={() =>
                    router.push(
                      `/resources/blog/${userType}/${relatedPost.attributes.slug}`
                    )
                  }
                  className="w-full mx-auto flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden hover:shadow-2xl cursor-pointer"
                >
                  {relatedImageUrl && (
                    <div className="w-full h-[240px]">
                      <Image
                        src={relatedImageUrl}
                        alt={relatedPost.attributes.title}
                        className="w-full object-cover h-[230px] md:h-[240px]"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  )}
                  <div className="px-6 py-4 mt-6">
                    {/* Tags */}
                    {relatedTags.length > 0 && (
                      <div className="flex justify-start gap-2 text-sm mb-2">
                        {relatedTags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-sm ${
                              index === 0
                                ? 'text-[#2543AD] bg-[#E9ECF7]'
                                : 'text-[#14736F] bg-[#E7F1F1]'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="mt-2 text-lg ltr:font-montserrat font-semibold line-clamp-2">
                      {relatedPost.attributes.title}
                    </h3>

                    {/* Author, Date, Time */}
                    <div className="flex justify-start gap-2 text-gray-500 text-sm mt-4">
                      {relatedPost.attributes.user?.data?.attributes?.name && (
                        <div className="hidden md:flex ltr:border-r ltr:pr-[10px] rtl:pl-[10px]">
                          {relatedAuthorImageUrl && (
                            <Image
                              src={relatedAuthorImageUrl}
                              alt="Author"
                              className="ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                              width={18}
                              height={18}
                            />
                          )}
                          <span className="text-gray-500 text-sm">
                            {relatedPost.attributes.user.data.attributes.name}
                          </span>
                        </div>
                      )}
                      {relatedPost.attributes.user?.data?.attributes?.date && (
                        <span className="flex items-center border-r pr-[10px]">
                          <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                          {relatedPost.attributes.user.data.attributes.date}
                        </span>
                      )}
                      {relatedPost.attributes.user?.data?.attributes?.time && (
                        <span className="flex items-center rtl:pr-2 rtl:border-r">
                          <ClockIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                          {relatedPost.attributes.user.data.attributes.time}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-[#455150] text-sm ltr:font-montserrat line-clamp-3">
                      {relatedPost.attributes.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
