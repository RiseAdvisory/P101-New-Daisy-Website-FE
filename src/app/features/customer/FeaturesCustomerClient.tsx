'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { FeaturesPageAttributes, FeatureListItem } from '@/types/strapi';

export const FeaturesCustomerClient = () => {
  const [scroll, setScroll] = useState(null);
  const [dataCustomer, setDataCustomer] =
    useState<FeaturesPageAttributes | null>(null);
  const [dataListBlog, setDataListBlog] = useState<FeatureListItem[] | null>(
    null,
  );

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        // Parallelize API calls for better performance
        const [response, lstCustomerResponse] = await Promise.all([
          axiosInstance.get(`/features-customers?locale=${lang}`),
          axiosInstance.get(
            `/feature-customer-list-sorts?populate=*&locale=${lang}`,
          ),
        ]);

        setDataCustomer(response?.data?.data?.[0]?.attributes);
        const sortedObjects = lstCustomerResponse?.data?.data?.sort(
          (a: FeatureListItem, b: FeatureListItem) =>
            (a.sortId || 0) - (b.sortId || 0),
        );
        setDataListBlog(sortedObjects);
      } catch (error) {
        console.error('Error fetching customer features:', error);
      }
    })();
  }, [lang]);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll={dataCustomer?.titleScroll}
        description={dataCustomer?.title ?? ''}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList setScroll={setScroll} dataListBlog={dataListBlog} />
      <SignUpBlog />
    </div>
  );
};
