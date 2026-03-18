'use client';

import { useEffect, useMemo } from 'react';
import { BlogPost, UserType } from '@/lib/api/blog';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import { blogCTAData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

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
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);

  // Get CTA data from local constants
  const ctaData = t(blogCTAData, locale);

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
