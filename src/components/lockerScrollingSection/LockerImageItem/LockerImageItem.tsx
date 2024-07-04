import React from 'react';
import styles from './LockerImageItem.module.css';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { baseURLImage } from '@/helpers/axiosConfig';

const LockerImageItem = ({ isActive, imageUrl, item }: any) => {
  const mainImg = item?.attributes?.mainImage?.data?.[0]?.attributes?.url;
  const firstBg = item?.attributes?.firstBg?.data?.[0]?.attributes?.url;
  const secondBg = item?.attributes?.secondBg?.data?.[0]?.attributes?.url;

  const imegeCurrentURL = (image: any) => {
    return new URL(image, baseURLImage).href;
  };
  return (
    <>
      <Image
        className={cn(
          {
            [styles.image]: true,
            [styles.active]: isActive,
          },
          item?.attributes.styleFirstBg,
        )}
        src={imegeCurrentURL(firstBg)}
        alt="leaf"
        width={300}
        height={500}
      />
      {secondBg && (
        <Image
          className={cn(
            styles.image,
            isActive ? styles.active : '',
            item?.attributes.styleSecondBg,
          )}
          src={imegeCurrentURL(secondBg)}
          alt="start"
          width={100}
          height={100}
        />
      )}
      {mainImg && (
        <Image
          src={imegeCurrentURL(mainImg)}
          className={cn(
            'z-10',
            {
              [styles.image]: true,
              [styles.active]: isActive,
            },
            item?.attributes.styleMainPicture,
          )}
          alt="phone"
          width={1000}
          height={1000}
        />
      )}
    </>
  );
};

export default LockerImageItem;
