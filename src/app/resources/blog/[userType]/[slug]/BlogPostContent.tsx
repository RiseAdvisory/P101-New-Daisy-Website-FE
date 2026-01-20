'use client';

import { useEffect, useState } from 'react';
import { BlogPost, UserType } from '@/lib/api/blog';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

interface BlogPostContentProps {
  post: BlogPost;
  userType: UserType;
}

interface CTAData {
  textDownload?: string;
  textCreate?: string;
  titleSimilar?: string;
}

export default function BlogPostContent({
  post,
  userType,
}: BlogPostContentProps) {
  const { handlePost, setHandleId } = usePostStore();
  const { choosePathStrapi, chooseBreadcrumb, choosePatnName } = useChoosePath();
  const { lang } = useChangeLanguage();
  const [ctaData, setCtaData] = useState<CTAData | null>(null);

  // Map the API response to the store format expected by existing components
  useEffect(() => {
    // Set up post store with the data structure the components expect
    handlePost(post.attributes);
    setHandleId(post.id);

    // Set up path store for breadcrumbs
    const endpoint = `resources-blog-post-${
      userType === 'customer'
        ? 'customers'
        : userType === 'business'
        ? 'businesses'
        : 'independents'
    }`;

    choosePathStrapi(`/${endpoint}`);

    // Set path name for breadcrumb link - points to /resources/blog-post
    choosePatnName('blog-post');

    // Set breadcrumb structure: title = "Resources", description = "Blog Posts"
    chooseBreadcrumb({
      title: 'Resources',
      description: 'Blog Posts',
    });
  }, [post, userType, handlePost, setHandleId, choosePathStrapi, chooseBreadcrumb, choosePatnName]);

  // Fetch CTA text from legal-downloads endpoint
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/legal-downloads?locale=${lang}`
        );
        const [data] = response.data.data;
        const attributes = data?.attributes;

        // Validate and sanitize CTA data
        const validateText = (text: unknown, maxLength: number = 500): string | undefined => {
          if (typeof text === 'string' && text.length > 0 && text.length <= maxLength) {
            // Remove any HTML tags for security
            return text.replace(/<[^>]*>/g, '');
          }
          return undefined;
        };

        setCtaData({
          textCreate: validateText(attributes?.textCreate),
          textDownload: validateText(attributes?.textDownload, 100),
          titleSimilar: validateText(attributes?.titleSimilar, 200),
        });
      } catch (error) {
        // Set default values if fetch fails
        setCtaData({
          textCreate: 'Create Your Own Perfect Wellness Ritual With The Daisy Packages',
          textDownload: 'Download now!',
          titleSimilar: 'Other Topics That You May Interest You',
        });
      }
    })();
  }, [lang]);

  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={ctaData?.textDownload ?? 'Download now!'}
        textCreate={
          ctaData?.textCreate ??
          'Create Your Own Perfect Wellness Ritual With The Daisy Packages'
        }
      />
      <SimiliarTopick
        titleSimilar={ctaData?.titleSimilar ?? 'Other Topics That You May Interest You'}
      />
    </div>
  );
}
