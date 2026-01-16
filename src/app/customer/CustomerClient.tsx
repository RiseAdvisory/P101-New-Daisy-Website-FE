'use client';
import { QASection } from '@/components/QASection/QASection';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { GrowthSectionCustomer } from '@/components/customerPage/GrowthCustomer';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { Skeleton } from '@/components/ui/skeleton';
import {
  GrowthAttributes,
  HomePageAttributes,
  ScrollSectionItem,
} from '@/types/strapi';

export const CustomerClient = () => {
  const [heroCustomer, setHeroCustomer] = useState<HomePageAttributes | null>(
    null,
  );
  const [growth, setGrowth] = useState<GrowthAttributes | null>(null);
  const [dataScroll, setDataScroll] = useState<ScrollSectionItem[] | null>(
    null,
  );

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async function getUser() {
      try {
        // Parallelize API calls for better performance
        const [responseGrowth, response, responseScrolling] = await Promise.all(
          [
            axiosInstance.get(`/growth-customers?populate=*&locale=${lang}`),
            axiosInstance.get(`/home-customers?locale=${lang}`),
            axiosInstance.get(
              `/home-customer-scrollings?populate=*&locale=${lang}`,
            ),
          ],
        );

        const sortedScrollData = responseScrolling?.data?.data?.sort(
          (a: ScrollSectionItem, b: ScrollSectionItem) =>
            a.attributes.sortId - b.attributes.sortId,
        );
        setDataScroll(sortedScrollData);
        setGrowth(responseGrowth?.data?.data?.[0]?.attributes);
        setHeroCustomer(response?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error('Error fetching customer page data:', error);
      }
    })();
  }, [lang]);

  return (
    <>
      {heroCustomer ? (
        <div className="w-full bg-primary md:-mt-[100px]">
          <LockerContainer listInfo={dataScroll} />
          <MobileScrollSection dataScroll={dataScroll} />
          {/* <OurPartnersSection /> */}
          <DaysiMission />
          <GrowthSectionCustomer
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
            pageType="Customer"
            titleFraque={heroCustomer?.titleFraque}
          />
        </div>
      ) : (
        <div className="w-full h-screen py-[40px] px-[20px] bg-customGreen">
          <Skeleton className="w-full mb-10 h-full" />
        </div>
      )}
    </>
  );
};
