'use client';

import { useEffect, useMemo } from 'react';
import { BlogPost, UserType } from '@/lib/api/blog';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { AboutPosts } from '@/components/blogPage/blogPosts/AboutPosts';
import { AboutAuthor } from '@/components/blogPage/blogPosts/AboutAuthor';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { SimilarTopics } from '@/components/blogPage/blogPosts/SimilarTopics';
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

    // Set breadcrumb structure
    chooseBreadcrumb({
      title: locale === 'ar' ? 'الموارد' : 'Resources',
      description: locale === 'ar' ? 'المقالات' : 'Blog Posts',
    });
  }, [post, userType, handlePost, setHandleId, choosePathStrapi, chooseBreadcrumb, choosePatnName]);

  const breadcrumbTitle = locale === 'ar' ? 'الموارد' : 'Resources';
  const breadcrumbDescription = locale === 'ar' ? 'المقالات' : 'Blog Posts';

  return (
    <div className="w-full">
      <HeroBlogPage
        breadcrumbTitle={breadcrumbTitle}
        breadcrumbDescription={breadcrumbDescription}
        breadcrumbHref={`/${locale}/resources/blog/${userType}`}
      />
      <AboutPosts />
      <AboutAuthor />
      <CreatePerfect
        textDownload={ctaData.textDownload}
        textCreate={ctaData.textCreate}
      />
      <SimilarTopics
        titleSimilar={ctaData.titleSimilar}
      />
    </div>
  );
}
