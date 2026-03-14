'use client';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { redirect } from 'next/navigation';
import { blogCTAData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';

export const LegalClient = () => {
  const { post } = usePostStore();
  const { lang } = useChangeLanguage();

  const isEmpty = (obj: Record<string, unknown>) => {
    return JSON.stringify(obj) === '{}';
  };

  if (isEmpty(post)) redirect('/resources/blog-post');

  const ctaData = t(blogCTAData, lang);

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
