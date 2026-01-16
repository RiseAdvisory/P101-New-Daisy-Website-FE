'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { FeaturesPageAttributes, FeatureListItem } from '@/types/strapi';

export const FeaturesBusinessClient = () => {
  const [dataFeatures, setDataFeatures] =
    useState<FeaturesPageAttributes | null>(null);
  const [dataListManagm, setDataListManagm] = useState<FeatureListItem[] | null>(
    null,
  );
  const [dataListPayment, setDataListPayment] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListReports, setDataListReports] = useState<
    FeatureListItem[] | null
  >(null);

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        // Parallelize API calls for better performance
        const [
          responseDataFeatures,
          responseListManagm,
          responseListPayments,
          responseListReports,
        ] = await Promise.all([
          axiosInstance.get(`/feature-businesses?populate=*&locale=${lang}`),
          axiosInstance.get(
            `/features-business-marketings?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-payments?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-reports?populate=*&locale=${lang}`,
          ),
        ]);

        const [dataFeatures] = responseDataFeatures.data.data;
        setDataFeatures(dataFeatures?.attributes);
        setDataListManagm(responseListManagm?.data?.data);
        setDataListPayment(responseListPayments?.data?.data);
        setDataListReports(responseListReports?.data?.data);
      } catch (error) {
        console.error('Error fetching business features:', error);
      }
    })();
  }, [lang]);

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
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListReports={dataListReports}
      />
      <DesctopViewProfessional
        dataBusiness={dataFeatures}
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListReports={dataListReports}
      />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};
