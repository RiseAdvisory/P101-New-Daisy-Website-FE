'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { Skeleton } from '@/components/ui/skeleton';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { FeaturesPageAttributes, FeatureListItem } from '@/types/strapi';

/** Strapi endpoints for each feature category */
const CATEGORY_ENDPOINTS = {
  ai: '/feature-business-ai-powereds',
  booking: '/feature-business-bookings',
  communication: '/feature-business-communications',
  marketing: '/features-business-marketings',
  payments: '/feature-business-payments',
  growth: '/feature-business-growths',
  control: '/feature-business-controls',
  reports: '/feature-business-reports',
} as const;

export type CategoryKey = keyof typeof CATEGORY_ENDPOINTS;
export type CategoryData = Record<CategoryKey, FeatureListItem[] | null>;

/** Endpoints that already exist in Strapi */
const EXISTING_ENDPOINTS: CategoryKey[] = [
  'marketing',
  'payments',
  'reports',
];

export const FeaturesBusinessClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFeatures, setDataFeatures] =
    useState<FeaturesPageAttributes | null>(null);
  const [categoryData, setCategoryData] = useState<CategoryData>({
    ai: null,
    booking: null,
    communication: null,
    marketing: null,
    payments: null,
    growth: null,
    control: null,
    reports: null,
  });

  const { lang } = useChangeLanguage();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        // Fetch page-level data and existing categories
        const [responsePage, ...existingResponses] = await Promise.all([
          axiosInstance.get(`/feature-businesses?populate=*&locale=${lang}`),
          ...EXISTING_ENDPOINTS.map((key) =>
            axiosInstance.get(
              `${CATEGORY_ENDPOINTS[key]}?populate=*&locale=${lang}`,
            ),
          ),
        ]);

        const [pageData] = responsePage.data.data;
        setDataFeatures(pageData?.attributes);

        const sortBySortId = (items: FeatureListItem[] | null) =>
          items?.sort(
            (a, b) => (a.attributes.sortId || 0) - (b.attributes.sortId || 0),
          ) ?? null;

        const existingData: Partial<CategoryData> = {};
        EXISTING_ENDPOINTS.forEach((key, i) => {
          existingData[key] = sortBySortId(existingResponses[i]?.data?.data ?? null);
        });

        // Fetch new categories — graceful fallback if content types don't exist yet
        const newKeys = Object.keys(CATEGORY_ENDPOINTS).filter(
          (key) => !EXISTING_ENDPOINTS.includes(key as CategoryKey),
        ) as CategoryKey[];

        const newResults = await Promise.allSettled(
          newKeys.map((key) =>
            axiosInstance.get(
              `${CATEGORY_ENDPOINTS[key]}?populate=*&locale=${lang}`,
            ),
          ),
        );

        const newData: Partial<CategoryData> = {};
        newKeys.forEach((key, i) => {
          const result = newResults[i];
          newData[key] =
            result.status === 'fulfilled'
              ? sortBySortId(result.value?.data?.data ?? null)
              : null;
        });

        setCategoryData((prev) => ({
          ...prev,
          ...existingData,
          ...newData,
        }));
      } catch (error) {
        console.error('Error fetching business features:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-primary px-4">
        <HeroPage
          title=""
          titleScroll="Explore the features"
          description=""
          hiddenArrow={true}
          visibleDescriiton={false}
          heightScreen={false}
          features={true}
          styleSection="md:h-auto"
        />
        <div className="w-full py-[40px] px-[20px]">
          <Skeleton className="w-full mb-10 h-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary px-4">
      <HeroPage
        title=""
        titleScroll="Explore the features"
        description={dataFeatures?.title ?? ''}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        features={true}
        styleSection="md:h-auto"
      />
      <SectionBusiness listOption={dataFeatures?.listBusinessOptions} />
      <MobileViewProfessional
        dataFeatures={dataFeatures}
        categoryData={categoryData}
      />
      <DesctopViewProfessional
        dataBusiness={dataFeatures}
        categoryData={categoryData}
      />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};
