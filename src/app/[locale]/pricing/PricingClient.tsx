'use client';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useChangePage } from '@/store/currentPage';
import { pricingPageData } from '@/lib/constants/pricing/pricingPageData';
import { t } from '@/lib/constants/i18n';
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const PricingClient = () => {
  const [activePricingPage, setActivePricingPage] = useState('');
  const [checkedMonth, setCheckedMonth] = useState(true);
  const [isRecommended, setIsRecommended] = useState(false);
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const { page } = useChangePage();
  const dataPricing = t(pricingPageData, locale);

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
        checkedAnnual={checkedMonth}
        setCheckedAnnual={setCheckedMonth}
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
            checked={checkedMonth}
            aria-label={checkedMonth ? pay?.monthly || 'Switch to monthly billing' : pay?.annually || 'Switch to annual billing'}
            className="mx-4 data-[state=checked]:bg-[#8B6554] my-auto bg-[#aab4b3]"
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
