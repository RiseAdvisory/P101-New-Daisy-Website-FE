'use client';
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { Skeleton } from '@/components/ui/skeleton';
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

export const ProfessionalClient = () => {
  const [heroProfessional, setHeroProfessional] =
    useState<HomePageAttributes | null>(null);
  const [dataScroll, setDataScroll] = useState<ScrollSectionItem[] | null>(
    null,
  );
  const [growth, setGrowth] = useState<GrowthAttributes | null>(null);
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async function getProfessional() {
      try {
        // Parallelize API calls for better performance
        const [responseGrowth, response, responseScrolling] = await Promise.all(
          [
            axiosInstance.get(
              `/growth-professionals?populate=*&locale=${lang}`,
            ),
            axiosInstance.get(`/home-professionals?locale=${lang}`),
            axiosInstance.get(
              `/home-professional-scrollings?populate=*&locale=${lang}`,
            ),
          ],
        );

        const sortedScrollData = responseScrolling?.data?.data?.sort(
          (a: ScrollSectionItem, b: ScrollSectionItem) =>
            a.attributes.sortId - b.attributes.sortId,
        );
        setDataScroll(sortedScrollData);
        setGrowth(responseGrowth?.data?.data?.[0]?.attributes);
        setHeroProfessional(response?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error('Error fetching professional page data:', error);
      }
    })();
  }, [lang]);

  return (
    <>
      {heroProfessional ? (
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
            pageType="Professional"
            titleFraque={heroProfessional?.titleFraque}
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
