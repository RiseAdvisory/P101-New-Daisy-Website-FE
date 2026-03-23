import React from 'react';
import styles from './LockerImageItem.module.css';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const LockerImageItem = ({ isActive, imageUrl, item, priority = false }: any) => {
  const mainImg =
    item?.attributes?.mainImage?.data?.[0]?.attributes?.formats?.large?.url;
  const firstBg = item?.attributes?.firstBg?.data?.[0]?.attributes?.url;
  const secondBg = item?.attributes?.secondBg?.data?.[0]?.attributes?.url;

  const styleMainImage = item?.attributes.styleMainPictureJSON;
  const styleFirstBg = item?.attributes.styleFirstBgJSON;
  const styleSecondBg = item?.attributes.styleSecondBgJSON;

  return (
    <>
      <Image
        className={cn(
          'z-0',
          {
            [styles.image]: true,
            [styles.active]: isActive,
          },
          item?.attributes.styleFirstBg,
        )}
        style={styleFirstBg}
        src={firstBg}
        alt=""
        width={300}
        height={500}
        priority={priority}
      />
      {secondBg && (
        <Image
          className={cn(
            'z-0',
            styles.image,
            isActive ? styles.active : '',
            item?.attributes.styleSecondBg,
          )}
          src={secondBg}
          style={styleSecondBg}
          alt=""
          width={100}
          height={100}
        />
      )}
      {mainImg && (
        <Image
          src={mainImg}
          style={styleMainImage}
          className={cn(
            'z-10',
            {
              [styles.image]: true,
              [styles.active]: isActive,
            },
          )}
          alt="Feature demonstration on mobile device"
          width={1000}
          height={1000}
          priority={priority}
        />
      )}
    </>
  );
};

export default LockerImageItem;
