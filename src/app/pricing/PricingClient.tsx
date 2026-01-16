'use client';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { Switch } from '@/components/ui/switch';
import axiosInstance from '@/helpers/axiosConfig';
import { cn } from '@/lib/utils';
import { useChangePage } from '@/store/currentPage';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useRef, useState } from 'react';

// Using inline interface since the API response structure is complex
// and varies between business/professional pricing types
interface PricingData {
  title?: string;
  switchAnnually?: {
    monthly?: string;
    annually?: string;
  };
  business?: {
    pricingCard?: unknown[];
  };
  professional?: {
    pricingCard?: unknown[];
  };
  enterprise?: unknown;
}

export const PricingClient = () => {
  const [activePricingPage, setActivePricingPage] = useState('');
  const [checkedMonth, setCheckedMonth] = useState(true);
  const [isRecommended, setIsRecommended] = useState(false);
  const [dataPricing, setDataPricing] = useState<PricingData | null>(null);
  const { lang } = useChangeLanguage();
  const { page } = useChangePage();

  useEffect(() => {
    if (page.includes('business')) {
      setActivePricingPage('business');
    }
    if (page.includes('customer')) {
      setActivePricingPage('business');
    }
    if (page.includes('professional')) {
      setActivePricingPage('professional');
    }
  }, [page]);

  const currentPricing =
    activePricingPage === 'professional'
      ? dataPricing?.professional?.pricingCard
      : dataPricing?.business?.pricingCard;
  const gridCardRef = useRef<HTMLDivElement>(null);

  const handleScrollToGrid = () => {
    if (gridCardRef.current) {
      gridCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(`/pricings?locale=${lang}`);
        setDataPricing(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    })();
  }, [lang]);

  const pay = dataPricing?.switchAnnually;

  return (
    <div className="bg-[#F8F5F3] pb-[180px]">
      <PricingHero
        setActivePricingPage={setActivePricingPage}
        description={dataPricing?.title ?? ''}
        heightScreen={false}
        styleSection="pb-[100px]"
        onScrollToGrid={handleScrollToGrid}
        setIsRecommended={setIsRecommended}
        activePricingPage={activePricingPage}
        dataPricing={dataPricing}
      />
      <div className="px-4 md:px-20 bg-primary">
        <Separator />
      </div>
      <div className="w-full bg-primary py-[44px]">
        <div className="flex mx-auto w-fit bg-primary ">
          <p
            className={cn(
              'font-normal text-[18px] leading-6 text-[#F8F5F3] text-right',
              {
                'text-[#F8F5F3]/60': checkedMonth,
              },
            )}
          >
            {pay?.monthly}
          </p>
          <Switch
            defaultChecked={checkedMonth}
            className="mx-4 data-[state=checked]:bg-[#A67F6B] my-auto bg-[#aab4b3]"
            onCheckedChange={() => setCheckedMonth(!checkedMonth)}
          />
          <p
            className={cn('font-normal text-[18px] leading-6 text-[#F8F5F3]', {
              'text-[#F8F5F3]/60': !checkedMonth,
            })}
          >
            {pay?.annually}
          </p>
        </div>
      </div>
      <div ref={gridCardRef} className="md:scroll-mt-[150px]">
        <GridPricingCard
          refGridCardRef={gridCardRef}
          isRescomennded={isRecommended}
          activePricingPage={activePricingPage}
          chechedAnnualy={checkedMonth}
          dataPricing={(currentPricing as never) ?? []}
          listChangePricing={dataPricing as never}
        />
      </div>
      {activePricingPage === 'business' && (
        <EnterPrise data={dataPricing?.enterprise} />
      )}
    </div>
  );
};
