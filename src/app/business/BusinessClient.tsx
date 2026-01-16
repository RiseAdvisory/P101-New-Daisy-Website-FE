'use client';
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import axiosInstance from '../../helpers/axiosConfig';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/store/loading';
import { getData, getRandomElements } from '@/helpers/getPartners';
import { Skeleton } from '@/components/ui/skeleton';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import {
  GrowthAttributes,
  HomePageAttributes,
  ScrollSectionItem,
} from '@/types/strapi';

// Lazy load below-fold components to reduce initial bundle size and blocking time
const QASection = dynamic(
  () => import('@/components/QASection/QASection').then((mod) => mod.QASection),
  { ssr: false },
);
const BecomeFormPartner = dynamic(
  () =>
    import('@/components/businessPage/BecomeFormPartner').then(
      (mod) => mod.BecomeFormPartner,
    ),
  { ssr: false },
);
const DaysiMission = dynamic(
  () =>
    import('@/components/businessPage/DaysiMission').then(
      (mod) => mod.DaysiMission,
    ),
  { ssr: false },
);
const GrowthSection = dynamic(
  () =>
    import('@/components/businessPage/GrowthSection').then(
      (mod) => mod.GrowthSection,
    ),
  { ssr: false },
);
const ExperienceDaisy = dynamic(
  () =>
    import('@/components/experienceDaisy/ExperienceDaisy').then(
      (mod) => mod.ExperienceDaisy,
    ),
  { ssr: false },
);
const JoinTheDaisy = dynamic(
  () =>
    import('@/components/joinTheDaysi/JoinTheDaysi').then(
      (mod) => mod.JoinTheDaisy,
    ),
  { ssr: false },
);

export const BusinessClient = () => {
  const [heroBusiness, setHeroBusiness] = useState<HomePageAttributes | null>(
    null,
  );
  const [growth, setGrowth] = useState<GrowthAttributes | null>(null);
  const [dataScroll, setDataScroll] = useState<ScrollSectionItem[] | null>(
    null,
  );
  const { handleArray, handleLoadingStatus } = useLoadingStore();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async function getBusiness() {
      try {
        // Parallelize API calls for better performance
        const [responseGrowth, response, responseScrolling] = await Promise.all(
          [
            axiosInstance.get(`/growth-businesses?populate=*&locale=${lang}`),
            axiosInstance.get(`/home-businesses?locale=${lang}`),
            axiosInstance.get(
              `/home-bussiness-scrollings?populate=*&locale=${lang}`,
            ),
          ],
        );

        const sortedScrollData = responseScrolling?.data?.data?.sort(
          (a: ScrollSectionItem, b: ScrollSectionItem) =>
            a.attributes.sortId - b.attributes.sortId,
        );
        setDataScroll(sortedScrollData);
        setHeroBusiness(response?.data?.data?.[0]?.attributes);
        setGrowth(responseGrowth?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error('Error fetching business page data:', error);
        handleLoadingStatus(false);
      } finally {
        handleLoadingStatus(false);
      }
    })();
  }, [handleLoadingStatus, lang]);

  useEffect(() => {
    (async () => {
      try {
        handleLoadingStatus(true);
        const listPartners = await getData();
        const randomPartners = getRandomElements(listPartners, 60);
        handleArray(randomPartners);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      }
    })();
  }, [handleArray, handleLoadingStatus]);

  return (
    <>
      {heroBusiness ? (
        <div className="w-full bg-primary md:-mt-[100px]">
          <LockerContainer listInfo={dataScroll} />
          <MobileScrollSection dataScroll={dataScroll} />
          {/* <OurPartnersSection /> */}
          <DaysiMission />
          <GrowthSection
            title={growth?.title ?? ''}
            description={growth?.description ?? ''}
            subtitle={growth?.subtitle ?? ''}
            learnMore={growth?.buttonLearn ?? ''}
            buttonLink={growth?.buttonLink ?? ''}
            imageUrl={growth?.imageHero?.data?.[0]?.attributes?.url ?? ''}
          />
          <JoinTheDaisy />
          <ExperienceDaisy />
          <QASection
            pageType="Business"
            titleFraque={heroBusiness?.titleFraque}
          />
          <BecomeFormPartner />
        </div>
      ) : (
        <div className="w-full h-screen py-[40px] px-[20px] bg-customGreen">
          <Skeleton className="w-full mb-10 h-full" />
        </div>
      )}
    </>
  );
};
