'use client';

import { useEffect } from 'react';
import { BlogPost, UserType } from '@/lib/api/blog';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import { useChangeLanguage } from '@/store/language';
import { blogCTAData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';

interface BlogPostContentProps {
  post: BlogPost;
  userType: UserType;
}

export default function BlogPostContent({
  post,
  userType,
}: BlogPostContentProps) {
  const { handlePost, setHandleId } = usePostStore();
  const { choosePathStrapi, chooseBreadcrumb, choosePatnName } = useChoosePath();
  const { lang } = useChangeLanguage();

  // Get CTA data from local constants
  const ctaData = t(blogCTAData, lang);

  // Map the API response to the store format expected by existing components
  useEffect(() => {
    // Set up post store with the data structure the components expect
    handlePost(post.attributes);
    setHandleId(post.id);

    // Set up path store for breadcrumbs
    choosePathStrapi(`/resources/blog/${userType}`);

    // Set path name for breadcrumb link - points to /resources/blog-post
    choosePatnName('blog-post');

    // Set breadcrumb structure: title = "Resources", description = "Blog Posts"
    chooseBreadcrumb({
      title: 'Resources',
      description: 'Blog Posts',
    });
  }, [post, userType, handlePost, setHandleId, choosePathStrapi, chooseBreadcrumb, choosePatnName]);

  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={ctaData.textDownload}
        textCreate={ctaData.textCreate}
      />
      <SimiliarTopick
        titleSimilar={ctaData.titleSimilar}
      />
    </div>
  );
}
