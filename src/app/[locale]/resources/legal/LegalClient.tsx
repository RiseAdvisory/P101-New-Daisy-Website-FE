'use client';
import { useMemo } from 'react';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import { usePostStore } from '@/store/post';
import { redirect, usePathname } from 'next/navigation';
import { blogCTAData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const LegalClient = () => {
  const { post } = usePostStore();
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);

  const isEmpty = (obj: Record<string, unknown>) => {
    return JSON.stringify(obj) === '{}';
  };

  if (isEmpty(post)) redirect('/resources/blog-post');

  const ctaData = t(blogCTAData, locale);

  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={ctaData.textDownload}
        textCreate={ctaData.textCreate}
      />
      <SimiliarTopick titleSimilar={ctaData.titleSimilar} />
    </div>
  );
};
