'use client';
import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { t } from '@/lib/constants/i18n';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';
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

export const ProfessionalClient = () => {
  const { lang } = useChangeLanguage();

  const pageData = t(professionalPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);

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
      <QASection
        pageType="Professional"
        titleFraque={pageData.titleFraque}
      />
      <BecomeFormPartner />
    </div>
  );
};
