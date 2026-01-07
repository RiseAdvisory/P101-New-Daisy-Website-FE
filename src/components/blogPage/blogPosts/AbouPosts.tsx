'use client';

import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import type { StrapiResponse, BlogPostAttributes } from '@/types/strapi';

export const AboutPosts = () => {
  const [aboutPost, setAboutPost] = useState<string>('');
  const { handlId } = usePostStore();
  const { pathStrapi } = useChoosePath();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get<
          StrapiResponse<BlogPostAttributes>
        >(`${pathStrapi}/${handlId}?locale=${lang}`);
        setAboutPost(response?.data?.data.attributes.aboutPosts || '');
      } catch (error) {
        // Handle error silently
      }
    })();
  }, [lang, pathStrapi, handlId]);
  // Sanitize HTML to prevent XSS attacks
  const sanitizedHTML = aboutPost ? DOMPurify.sanitize(aboutPost) : '';

  return (
    <div className="px-4 md:px-[280px]">
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};
