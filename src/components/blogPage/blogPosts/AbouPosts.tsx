'use client';

import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { useEffect, useState } from 'react';

export const AboutPosts = () => {
  const [aboutPost, setAboutPost] = useState<any>();
  const { handlId } = usePostStore();
  const { pathStrapi } = useChoosePath();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        console.log(`${pathStrapi}/${handlId}?locale=${lang}`, 'rout')
        console.log(pathStrapi, 'pathStrapi')
        const response = await axiosInstance.get(
          `${pathStrapi}/${handlId}?locale=${lang}`,
        );
        console.log(response?.data?.data.attributes, 'attributes')
        setAboutPost(response?.data?.data.attributes.aboutPosts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang, pathStrapi, handlId])
  console.log(aboutPost,'abouts')
  return (
    <div className="px-4 md:px-[280px]">
      <div dangerouslySetInnerHTML={{ __html: aboutPost }} />
    </div>
  );
};
