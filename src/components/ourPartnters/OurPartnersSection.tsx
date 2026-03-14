'use client';
import { useEffect } from 'react';
import { CarouselCompany } from '../carouselCompany/CarouselCompany';
import { useLoadingStore } from '@/store/loading';
import { Skeleton } from '../ui/skeleton';
import { useChangeLanguage } from '@/store/language';
import { getData, getRandomElements } from '@/helpers/getPartners';
import { partnersData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

export const OurPartnersSection = ({
  stylePartners,
}: {
  stylePartners?: string;
}) => {
  const { array } = useLoadingStore();
  const { lang } = useChangeLanguage();
  const { handleArray, handleLoadingStatus } = useLoadingStore();

  const partners = t(partnersData, lang);

  useEffect(() => {
    try {
      (async () => {
        handleLoadingStatus(true);
        const listPartners = await getData();
        const randomPartners = getRandomElements(listPartners, 60);
        handleArray(randomPartners);
      })();
    } catch {
      // Error loading partners
    }
  }, [handleArray, handleLoadingStatus]);

  return (
    <div className={` px-4 mt-[80px] pb-[112px] ${stylePartners} bg-white`}>
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {partners.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 ltr:font-montserrat md:text-base md:font-normal">
          {partners.subtitle}
        </p>
      </div>
      {array.length ? (
        <CarouselCompany data={array} />
      ) : (
        <div className="md:w-[800px] items-center mx-auto mt-8 md:mt-20 flex space-x-9 md:space-x-3 justify-center">
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
        </div>
      )}
    </div>
  );
};
