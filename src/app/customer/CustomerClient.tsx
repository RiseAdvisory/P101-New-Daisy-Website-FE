'use client';
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { t } from '@/lib/constants/i18n';
import { customerPageData } from '@/lib/constants/pages/customerPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

// Lazy load below-fold components to reduce initial bundle size and blocking time
const QASection = dynamic(
  () => import('@/components/QASection/QASection').then((mod) => mod.QASection),
);
const DaysiMission = dynamic(
  () =>
    import('@/components/businessPage/DaysiMission').then(
      (mod) => mod.DaysiMission,
    ),
);
const GrowthSectionCustomer = dynamic(
  () =>
    import('@/components/customerPage/GrowthCustomer').then(
      (mod) => mod.GrowthSectionCustomer,
    ),
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
);

export const CustomerClient = () => {
  const { lang } = useChangeLanguage();

  const pageData = t(customerPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);

  return (
    <div className="w-full bg-primary md:-mt-[100px]">
      <LockerContainer listInfo={dataScroll} />
      <MobileScrollSection dataScroll={dataScroll} />
      {/* <OurPartnersSection /> */}
      <DaysiMission />
      <GrowthSectionCustomer
        title={pageData.growth.title}
        description={pageData.growth.description}
        subtitle={pageData.growth.subtitle}
        learnMore={pageData.growth.buttonLearn}
        buttonLink={pageData.growth.buttonLink}
        imageUrl={pageData.growth.imageUrl}
      />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection pageType="Customer" titleFraque={pageData.titleFraque} />
    </div>
  );
};
