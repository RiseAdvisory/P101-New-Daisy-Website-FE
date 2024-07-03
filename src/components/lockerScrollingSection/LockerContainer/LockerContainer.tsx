import React, { useRef, useEffect, useState } from 'react';
import LockerImageItem from '../LockerImageItem/LockerImageItem';
import styles from './LockerContainer.module.css';
import LockerContentItem from '../LockerContentItem/LockerContentItem';
import { objects } from '@/lib/testData';

const LockerContainer = ({ listInfo }: { listInfo: any }) => {
  const [activeImageId, setActiveImageId] = useState<any>();
  const textRef = useRef([]);

  useEffect(() => {
    function handleIntersection(entries: any) {
      let activeId = null;
      entries.map((entry: any) => {
        if (entry.isIntersecting) {
          activeId = +entry.target.dataset.objectid;
        }
      });
      setActiveImageId(activeId);
    }

    const options = {
      threshold: [0.5, 1],
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    textRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const sortList = listInfo.sort(
    (a: any, b: any) => a.attributes.sortId - b.attributes.sortId,
  );

  return (
    <div className={`${styles.locker} !hidden md:!grid `}>
      <div className={styles.locker__content}>
        {listInfo &&
          sortList.map((el: any, index: number) => {
            return (
              <LockerContentItem
                key={el?.attributes.infoScroll.objectId}
                objectId={el?.attributes.infoScroll.objectId}
                index={index}
                text={el?.attributes.infoScroll.text}
                ref={textRef}
                description={el?.attributes.infoScroll.description}
                storeBurron={el?.attributes.infoScroll.storeBurron}
                listSub={el?.attributes.infoScroll.listSub}
              />
            );
          })}
      </div>
      <div className={styles.locker__image}>
        <div className={styles.locker__container}>
          <div className="w-[600px] h-[600px] bg-primaryBtn rounded-[16px] relative ml-auto">
            {listInfo &&
              sortList.map((el: any) => {
                return (
                  <LockerImageItem
                    key={el?.attributes.infoScroll.objectId}
                    isActive={
                      el?.attributes.infoScroll.objectId === activeImageId
                    }
                    imageUrl={el.url}
                    item={el}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockerContainer;
const test = {
  infoScroll: {
    text: 'Easy, flexible and Powerful, Your customers will love it!',
    objectId: 0,
    description:
      'Disconer the power of expanding your reach and maximizing your profits with ease',
    storeBurron: true,
  },
  createdAt: '2024-07-03T11:46:50.237Z',
  updatedAt: '2024-07-03T11:53:48.390Z',
  publishedAt: '2024-07-03T11:49:02.334Z',
  locale: 'en',
  styleFirstBg: 'absolute bottom-0 left-0 ',
  styleSecondBg: 'absolute top-[60px] right-[50px]',
  styleMainPicture:
    'absolute bottom-0 right-[50%] translate-x-1/2 w-[350px] h-[420px] z-10',
  firstBg: {
    data: [
      {
        id: 55,
        attributes: {
          name: 'LeafBg.png',
          alternativeText: null,
          caption: null,
          width: 953,
          height: 922,
          formats: {
            small: {
              ext: '.png',
              url: '/uploads/small_Leaf_Bg_999da0675b.png',
              hash: 'small_Leaf_Bg_999da0675b',
              mime: 'image/png',
              name: 'small_LeafBg.png',
              path: null,
              size: 29.02,
              width: 500,
              height: 484,
              sizeInBytes: 29016,
            },
            medium: {
              ext: '.png',
              url: '/uploads/medium_Leaf_Bg_999da0675b.png',
              hash: 'medium_Leaf_Bg_999da0675b',
              mime: 'image/png',
              name: 'medium_LeafBg.png',
              path: null,
              size: 49.33,
              width: 750,
              height: 726,
              sizeInBytes: 49328,
            },
            thumbnail: {
              ext: '.png',
              url: '/uploads/thumbnail_Leaf_Bg_999da0675b.png',
              hash: 'thumbnail_Leaf_Bg_999da0675b',
              mime: 'image/png',
              name: 'thumbnail_LeafBg.png',
              path: null,
              size: 7.49,
              width: 161,
              height: 156,
              sizeInBytes: 7489,
            },
          },
          hash: 'Leaf_Bg_999da0675b',
          ext: '.png',
          mime: 'image/png',
          size: 9.51,
          url: '/uploads/Leaf_Bg_999da0675b.png',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2024-07-03T11:47:45.289Z',
          updatedAt: '2024-07-03T12:00:59.390Z',
        },
      },
    ],
  },
  secondBg: {
    data: [
      {
        id: 56,
        attributes: {
          name: 'Stars.png',
          alternativeText: null,
          caption: null,
          width: 404,
          height: 430,
          formats: {
            thumbnail: {
              ext: '.png',
              url: '/uploads/thumbnail_Stars_62cb83f573.png',
              hash: 'thumbnail_Stars_62cb83f573',
              mime: 'image/png',
              name: 'thumbnail_Stars.png',
              path: null,
              size: 4.26,
              width: 147,
              height: 156,
              sizeInBytes: 4260,
            },
          },
          hash: 'Stars_62cb83f573',
          ext: '.png',
          mime: 'image/png',
          size: 2.47,
          url: '/uploads/Stars_62cb83f573.png',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2024-07-03T11:48:10.344Z',
          updatedAt: '2024-07-03T11:48:10.344Z',
        },
      },
    ],
  },
  mainImage: {
    data: [
      {
        id: 57,
        attributes: {
          name: 'PHONE.png',
          alternativeText: null,
          caption: null,
          width: 842,
          height: 1037,
          formats: {
            large: {
              ext: '.png',
              url: '/uploads/large_PHONE_febf4f660f.png',
              hash: 'large_PHONE_febf4f660f',
              mime: 'image/png',
              name: 'large_PHONE.png',
              path: null,
              size: 181.93,
              width: 812,
              height: 1000,
              sizeInBytes: 181931,
            },
            small: {
              ext: '.png',
              url: '/uploads/small_PHONE_febf4f660f.png',
              hash: 'small_PHONE_febf4f660f',
              mime: 'image/png',
              name: 'small_PHONE.png',
              path: null,
              size: 65.39,
              width: 406,
              height: 500,
              sizeInBytes: 65390,
            },
            medium: {
              ext: '.png',
              url: '/uploads/medium_PHONE_febf4f660f.png',
              hash: 'medium_PHONE_febf4f660f',
              mime: 'image/png',
              name: 'medium_PHONE.png',
              path: null,
              size: 118.89,
              width: 609,
              height: 750,
              sizeInBytes: 118888,
            },
            thumbnail: {
              ext: '.png',
              url: '/uploads/thumbnail_PHONE_febf4f660f.png',
              hash: 'thumbnail_PHONE_febf4f660f',
              mime: 'image/png',
              name: 'thumbnail_PHONE.png',
              path: null,
              size: 12.69,
              width: 127,
              height: 156,
              sizeInBytes: 12688,
            },
          },
          hash: 'PHONE_febf4f660f',
          ext: '.png',
          mime: 'image/png',
          size: 32.98,
          url: '/uploads/PHONE_febf4f660f.png',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2024-07-03T11:48:30.316Z',
          updatedAt: '2024-07-03T11:48:30.316Z',
        },
      },
    ],
  },
  localizations: {
    data: [],
  },
};
