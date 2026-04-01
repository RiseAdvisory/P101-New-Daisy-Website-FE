'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { FeatureListItem } from '@/types/strapi';
import { useRef } from 'react';
import { t } from '@/lib/constants/i18n';
import {
  featuresBusinessData,
  BusinessCategoryKey,
} from '@/lib/constants/features/featuresBusinessData';

export type CategoryKey = BusinessCategoryKey;
export type CategoryData = Record<CategoryKey, FeatureListItem[] | null>;

export const FeaturesBusinessClient = ({ lang }: { lang: string }) => {
  const data = t(featuresBusinessData, lang);
  const featuresRef = useRef<HTMLDivElement>(null);

  const categoryData: CategoryData = data.categoryItems;

  return (
    <div className="bg-primary px-4 md:pb-40">
      <HeroPage
        blockRef={featuresRef}
        title=""
        titleScroll="Explore the features"
        description={data.title}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <SectionBusiness listOption={data.listBusinessOptions} />
      <div ref={featuresRef} />
      <MobileViewProfessional
        dataFeatures={data}
        categoryData={categoryData}
      />
      <DesctopViewProfessional dataBusiness={data} categoryData={categoryData} />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};
