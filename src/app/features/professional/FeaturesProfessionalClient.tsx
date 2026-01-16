'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

export const FeaturesProfessionalClient = () => {
  const [scroll, setScroll] = useState(null);
  const [dataProfessional, setDataProfessional] = useState<any>();
  const [dataListProfessional, setDataListProfessional] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/features-professionals?locale=${lang}`,
        );
        setDataProfessional(response?.data?.data?.[0].attributes);
        const listProfessionalResponse = await axiosInstance.get(
          `/features-professional-list-sorts?populate=*&locale=${lang}`,
        );
        const sortedObjects = listProfessionalResponse?.data?.data?.sort(
          (a: any, b: any) => a.sortId - b.sortId,
        );
        setDataListProfessional(sortedObjects);
      } catch {
        // Error fetching professional features
      }
    })();
  }, [lang]);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll={dataProfessional?.titleScroll}
        description={dataProfessional?.title}
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
