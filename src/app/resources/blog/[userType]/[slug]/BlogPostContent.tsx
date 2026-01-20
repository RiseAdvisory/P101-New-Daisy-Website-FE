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
  const { choosePathStrapi, chooseBreadcrumb } = useChoosePath();
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
    chooseBreadcrumb('Blog Posts');
  }, [post, userType, handlePost, setHandleId, choosePathStrapi, chooseBreadcrumb]);

  // Fetch CTA text from legal-downloads endpoint
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/legal-downloads?locale=${lang}`
        );
        const [data] = response.data.data;
        setCtaData(data?.attributes);
      } catch (error) {
        console.error('Error fetching CTA data:', error);
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
