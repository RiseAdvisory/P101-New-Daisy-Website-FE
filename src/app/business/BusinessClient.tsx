'use client';
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import { useEffect } from 'react';
import { useLoadingStore } from '@/store/loading';
import { getData, getRandomElements } from '@/helpers/getPartners';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

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
  const { handleArray, handleLoadingStatus } = useLoadingStore();
  const { lang } = useChangeLanguage();

  const pageData = t(businessPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);

  useEffect(() => {
    (async () => {
      try {
        handleLoadingStatus(true);
        const listPartners = await getData();
        const randomPartners = getRandomElements(listPartners, 60);
        handleArray(randomPartners);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      } finally {
        handleLoadingStatus(false);
      }
    })();
  }, [handleArray, handleLoadingStatus]);

  return (
    <div className="w-full bg-primary md:-mt-[100px]">
      <LockerContainer listInfo={dataScroll} />
      <MobileScrollSection dataScroll={dataScroll} />
      {/* <OurPartnersSection /> */}
      <DaysiMission />
      <GrowthSection
        title={pageData.growth.title}
        description={pageData.growth.description}
        subtitle={pageData.growth.subtitle}
        learnMore={pageData.growth.buttonLearn}
        buttonLink={pageData.growth.buttonLink}
        imageUrl={pageData.growth.imageUrl}
      />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection pageType="Business" titleFraque={pageData.titleFraque} />
      <BecomeFormPartner />
    </div>
  );
};
