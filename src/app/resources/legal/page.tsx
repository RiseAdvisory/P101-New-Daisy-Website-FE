'use client';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import axiosInstance from '@/helpers/axiosConfig';
import { usePostStore } from '@/store/post';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const Legal = () => {
  const { post } = usePostStore();
  const [dataLeagal, setDataLegal] = useState<any>();
  const isEmpty = (obj: any) => {
    return JSON.stringify(obj) === '{}';
  };
  if (isEmpty(post)) redirect('/resources/blog-post');
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/legal-downloads');
      const [data] = response.data.data;
      setDataLegal(data?.attributes);
    })();
  }, []);

  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={dataLeagal?.textDownload}
        textCreate={dataLeagal?.textCreate}
      />
      <SimiliarTopick />
    </div>
  );
};
export default Legal;
