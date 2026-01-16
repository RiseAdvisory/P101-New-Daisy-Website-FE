'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { FeaturesPageAttributes, FeatureListItem } from '@/types/strapi';

export const FeaturesProfessionalClient = () => {
  const [scroll, setScroll] = useState(null);
  const [dataProfessional, setDataProfessional] =
    useState<FeaturesPageAttributes | null>(null);
  const [dataListProfessional, setDataListProfessional] = useState<
    FeatureListItem[] | null
  >(null);

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        // Parallelize API calls for better performance
        const [response, listProfessionalResponse] = await Promise.all([
          axiosInstance.get(`/features-professionals?locale=${lang}`),
          axiosInstance.get(
            `/features-professional-list-sorts?populate=*&locale=${lang}`,
          ),
        ]);

        setDataProfessional(response?.data?.data?.[0]?.attributes);
        const sortedObjects = listProfessionalResponse?.data?.data?.sort(
          (a: FeatureListItem, b: FeatureListItem) =>
            (a.sortId || 0) - (b.sortId || 0),
        );
        setDataListProfessional(sortedObjects);
      } catch (error) {
        console.error('Error fetching professional features:', error);
      }
    })();
  }, [lang]);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll={dataProfessional?.titleScroll}
        description={dataProfessional?.title ?? ''}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList
        setScroll={setScroll}
        dataListBlog={dataListProfessional}
      />
      <SignUpBlog />
    </div>
  );
};
