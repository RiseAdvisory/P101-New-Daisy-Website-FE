import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { t } from '@/lib/constants/i18n';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

// Lazy load below-fold client components to reduce initial JS bundle
const QASection = dynamic(
  () => import('@/components/QASection/QASection').then((mod) => mod.QASection),
);
const BecomeFormPartner = dynamic(
  () =>
    import('@/components/businessPage/BecomeFormPartner').then(
      (mod) => mod.BecomeFormPartner,
    ),
);
const GrowthSection = dynamic(
  () =>
    import('@/components/businessPage/GrowthSection').then(
      (mod) => mod.GrowthSection,
    ),
);
const ExperienceDaisy = dynamic(
  () =>
    import('@/components/experienceDaisy/ExperienceDaisy').then(
      (mod) => mod.ExperienceDaisy,
    ),
);
const JoinTheDaisy = dynamic(
  () =>
    import('@/components/joinTheDaysi/JoinTheDaysi').then(
      (mod) => mod.JoinTheDaisy,
    ),
);
const PlatformStrengths = dynamic(
  () =>
    import('@/components/shared/PlatformStrengths').then(
      (mod) => mod.PlatformStrengths,
    ),
);

export const ProfessionalClient = ({ lang }: { lang: string }) => {

  const pageData = t(professionalPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);

  return (
    <div className="w-full bg-primary md:-mt-[100px]">
      <LockerContainer listInfo={dataScroll} />
      <MobileScrollSection dataScroll={dataScroll} />
      {/* <OurPartnersSection /> */}
      {pageData.platformStrengths && (
        <PlatformStrengths
          headline={pageData.platformStrengths.headline}
          subHeadline={pageData.platformStrengths.subHeadline}
          capabilities={pageData.platformStrengths.capabilities}
          stats={pageData.platformStrengths.stats}
        />
      )}
      <GrowthSection
        title={pageData.growth.title}
        description={pageData.growth.description}
        subtitle={pageData.growth.subtitle}
        learnMore={pageData.growth.buttonLearn}
        buttonLink={pageData.growth.buttonLink}
        imageUrl={pageData.growth.imageUrl}
      />
      <JoinTheDaisy />
      <ExperienceDaisy pageType="professional" />
      <QASection
        pageType="Professional"
        titleFraque={pageData.titleFraque}
        fallbackFaqs={pageData.fallbackFaqs}
      />
      <BecomeFormPartner defaultType="freelance" />
    </div>
  );
};
