'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChangeLanguage } from '@/store/language';
import { FeatureListItem } from '@/types/strapi';
import { t } from '@/lib/constants/i18n';
import {
  featuresBusinessData,
  BusinessCategoryKey,
} from '@/lib/constants/features/featuresBusinessData';

export type CategoryKey = BusinessCategoryKey;
export type CategoryData = Record<CategoryKey, FeatureListItem[] | null>;

export const FeaturesBusinessClient = () => {
  const { lang } = useChangeLanguage();
  const data = t(featuresBusinessData, lang);

  const categoryData: CategoryData = data.categoryItems;

  return (
    <div className="bg-primary px-4">
      <HeroPage
        title=""
        titleScroll="Explore the features"
        description={data.title}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        features={true}
        styleSection="md:h-auto"
      />
      <SectionBusiness listOption={data.listBusinessOptions} />
      <MobileViewProfessional
        dataFeatures={data}
        categoryData={categoryData}
      />
      <DesctopViewProfessional dataBusiness={data} categoryData={categoryData} />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};
