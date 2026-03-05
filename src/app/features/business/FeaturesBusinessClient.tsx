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
  const [dataListManagm, setDataListManagm] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListPayment, setDataListPayment] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListReports, setDataListReports] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListBooking, setDataListBooking] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListCommunication, setDataListCommunication] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListGrowth, setDataListGrowth] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListControl, setDataListControl] = useState<
    FeatureListItem[] | null
  >(null);
  const [dataListAi, setDataListAi] = useState<FeatureListItem[] | null>(
    null,
  );

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        // Fetch existing category data
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

        // Fetch new category data — graceful fallback if content types don't exist yet
        const newCategoryResults = await Promise.allSettled([
          axiosInstance.get(
            `/feature-business-ai-powereds?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-bookings?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-communications?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-growths?populate=*&locale=${lang}`,
          ),
          axiosInstance.get(
            `/feature-business-controls?populate=*&locale=${lang}`,
          ),
        ]);

        const getDataOrNull = (result: PromiseSettledResult<any>) =>
          result.status === 'fulfilled' ? result.value?.data?.data : null;

        setDataListAi(getDataOrNull(newCategoryResults[0]));
        setDataListBooking(getDataOrNull(newCategoryResults[1]));
        setDataListCommunication(getDataOrNull(newCategoryResults[2]));
        setDataListGrowth(getDataOrNull(newCategoryResults[3]));
        setDataListControl(getDataOrNull(newCategoryResults[4]));
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
        dataListAi={dataListAi}
        dataListBooking={dataListBooking}
        dataListCommunication={dataListCommunication}
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListGrowth={dataListGrowth}
        dataListControl={dataListControl}
        dataListReports={dataListReports}
      />
      <DesctopViewProfessional
        dataBusiness={dataFeatures}
        dataListAi={dataListAi}
        dataListBooking={dataListBooking}
        dataListCommunication={dataListCommunication}
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListGrowth={dataListGrowth}
        dataListControl={dataListControl}
        dataListReports={dataListReports}
      />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};
