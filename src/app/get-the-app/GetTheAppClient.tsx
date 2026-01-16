'use client';
import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { GetTheAppAttributes, StrapiImage } from '@/types/strapi';

interface GetTheAppData extends GetTheAppAttributes {
  title?: string;
  description?: string;
  subtitle?: string;
  titleBredCrumb?: {
    title?: string;
    description?: string;
  };
  qrCode?: StrapiImage;
}

export const GetTheAppClient = () => {
  const [dataGetApp, setGetApp] = useState<GetTheAppData | null>(null);

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/get-the-apps?populate=*&locale=${lang}`,
        );
        const [data] = response?.data?.data;
        setGetApp(data?.attributes);
      } catch (error) {
        console.error('Error fetching get the app data:', error);
      }
    })();
  }, [lang]);

  const qrCodeUrl = dataGetApp?.qrCode?.data?.[0]?.attributes?.url;
  const qrCode = qrCodeUrl ? new URL(qrCodeUrl, baseURLImage).href : '';

  return (
    <>
      <HeroPage
        bredCrumbTitle={dataGetApp?.titleBredCrumb?.title}
        bredCrumbDesription={dataGetApp?.titleBredCrumb?.description}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={dataGetApp?.title ?? ''}
        description={dataGetApp?.description ?? ''}
        heightScreen={false}
        styleSection="pb-0 pt-6 px-[16px]"
        secondDescription={dataGetApp?.subtitle}
      />
      <div className="px-4 bg-primary py-[46px] md:px-[400px]">
        <Separator className="bg-[#586968] " />
      </div>
      <GetTheAppScan qrCode={qrCode} />
    </>
  );
};
