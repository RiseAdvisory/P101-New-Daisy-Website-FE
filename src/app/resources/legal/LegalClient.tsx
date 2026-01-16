'use client';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LegalPageAttributes } from '@/types/strapi';

interface LegalDownloadData extends LegalPageAttributes {
  textDownload?: string;
  textCreate?: string;
  titleSimilar?: string;
}

export const LegalClient = () => {
  const { post } = usePostStore();
  const { lang } = useChangeLanguage();
  const [dataLegal, setDataLegal] = useState<LegalDownloadData | null>(null);

  const isEmpty = (obj: Record<string, unknown>) => {
    return JSON.stringify(obj) === '{}';
  };

  if (isEmpty(post)) redirect('/resources/blog-post');

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/legal-downloads?locale=${lang}`,
        );
        const [data] = response.data.data;
        setDataLegal(data?.attributes);
      } catch (error) {
        console.error('Error fetching legal downloads:', error);
      }
    })();
  }, [lang]);

  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={dataLegal?.textDownload ?? ''}
        textCreate={dataLegal?.textCreate ?? ''}
      />
      <SimiliarTopick titleSimilar={dataLegal?.titleSimilar ?? ''} />
    </div>
  );
};
