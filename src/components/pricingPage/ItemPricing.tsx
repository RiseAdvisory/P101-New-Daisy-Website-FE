'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { OptionPricing } from '@/assets/icons/optionPricing/optionPricing';
import { OtherOptionPricing } from './OtherOptionPricing';
import { cn } from '@/lib/utils';
import { useCalculate } from '@/store/calculateResult';
import { useCurrentPlan } from '@/store/storeCurrentPlan';

// Per-unit pricing for additional resources (monthly)
const ADDITIONAL_STAFF_PRICE = 10;
const ADDITIONAL_WORKSPACE_PRICE = 25;
const ADDITIONAL_COUNTRY_PRICE = 50;

// Tier configurations
const BUSINESS_TIERS = [
  {
    name: 'Basic',
    basePrice: 50,
    basePriceYear: 42,
    staff: 5,
    workspaces: 1,
    countries: 1,
  },
  {
    name: 'Growth',
    basePrice: 150,
    basePriceYear: 128,
    staff: 10,
    workspaces: 2,
    countries: 1,
  },
  {
    name: 'Business',
    basePrice: 250,
    basePriceYear: 208,
    staff: 15,
    workspaces: 4,
    countries: 1,
  },
];

const PROFESSIONAL_TIERS = [
  {
    name: 'Starter',
    basePrice: 0,
    basePriceYear: 0,
    staff: 1,
    workspaces: 1,
    countries: 1,
  },
  {
    name: 'Professional',
    basePrice: 50,
    basePriceYear: 500,
    staff: 1,
    workspaces: 1,
    countries: 1,
  },
  {
    name: 'Elite',
    basePrice: 100,
    basePriceYear: 1000,
    staff: 1,
    workspaces: 2,
    countries: 2,
  },
];

// Calculate total cost for a tier given requirements
const calculateTierTotalCost = (
  tier: {
    basePrice: number;
    staff: number;
    workspaces: number;
    countries: number;
  },
  requiredStaff: number,
  requiredWorkspaces: number,
  requiredCountries: number,
) => {
  const additionalStaff = Math.max(0, requiredStaff - tier.staff);
  const additionalWorkspaces = Math.max(
    0,
    requiredWorkspaces - tier.workspaces,
  );
  const additionalCountries = Math.max(0, requiredCountries - tier.countries);

  return (
    tier.basePrice +
    additionalStaff * ADDITIONAL_STAFF_PRICE +
    additionalWorkspaces * ADDITIONAL_WORKSPACE_PRICE +
    additionalCountries * ADDITIONAL_COUNTRY_PRICE
  );
};

// Find the cheapest tier for given requirements
// minTierIndex: minimum tier index required by enabled features (0-based)
const findCheapestTier = (
  tiers: typeof BUSINESS_TIERS,
  requiredStaff: number,
  requiredWorkspaces: number,
  requiredCountries: number,
  minTierIndex: number = 0,
) => {
  let cheapestIndex = minTierIndex; // Start from minimum required tier
  let cheapestCost = Infinity;

  tiers.forEach((tier, index) => {
    // Skip tiers below the minimum required tier
    if (index < minTierIndex) return;

    const totalCost = calculateTierTotalCost(
      tier,
      requiredStaff,
      requiredWorkspaces,
      requiredCountries,
    );
    if (totalCost < cheapestCost) {
      cheapestCost = totalCost;
      cheapestIndex = index;
    }
  });

  return cheapestIndex;
};

export const ItemCardPricing = ({
  title,
  subtitle,
  description,
  price,
  options,
  optionPlus,
  chechedAnnualy,
  priceYear,
  activePricingPage,
  isRescomennded,
  textRecomended,
  titlePricing,
  currentPrices,
  currentPricesYear,
  refGridCardRef,
}: {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  options: any;
  optionPlus: string;
  chechedAnnualy: boolean;
  priceYear: string;
  activePricingPage: string;
  isRescomennded: boolean;
  textRecomended: any;
  titlePricing: string[];
  currentPrices: string[];
  currentPricesYear: string[];
  refGridCardRef: any;
}) => {
  const [showAll, setShowAll] = useState(false);
  const [currentPlanBus, setCurrentPlanBus] = useState('');
  const [currentPlanProf, setCurrentPlanProf] = useState('');
  const { changePlan, setPricing, setTierLimits } = useCurrentPlan();
  const { staff, workspace, country, provideHome, toggles, getMinimumRequiredTierIndex } =
    useCalculate();
  const currentPrice = !chechedAnnualy ? price : priceYear;
  const isRecommended =
    activePricingPage === 'business'
      ? title === currentPlanBus
      : title === currentPlanProf;
  const defaulText = textRecomended?.textItemPricing;
  useEffect(() => {
    const staffNum = Number(staff) || 1;
    const workspaceNum = Number(workspace) || 1;
    const countryNum = Number(country) || 1;
    // Home services count as an additional workspace
    const effectiveWorkspaces = workspaceNum + (provideHome ? 1 : 0);
    // Get minimum tier required by enabled feature toggles
    const minTierIndex = getMinimumRequiredTierIndex();

    if (activePricingPage === 'business') {
      // Find the cheapest business tier based on total cost (respecting minimum tier)
      const cheapestIndex = findCheapestTier(
        BUSINESS_TIERS,
        staffNum,
        effectiveWorkspaces,
        countryNum,
        minTierIndex,
      );
      const selectedTier = BUSINESS_TIERS[cheapestIndex];

      setCurrentPlanBus(titlePricing[cheapestIndex]);
      changePlan(titlePricing[cheapestIndex]);
      setPricing(
        currentPrices[cheapestIndex],
        currentPricesYear[cheapestIndex],
      );
      setTierLimits({
        includedStaff: selectedTier.staff,
        includedWorkspaces: selectedTier.workspaces,
        includedCountries: selectedTier.countries,
      });
    } else {
      // Find the cheapest professional tier based on total cost (respecting minimum tier)
      const cheapestIndex = findCheapestTier(
        PROFESSIONAL_TIERS,
        staffNum,
        effectiveWorkspaces,
        countryNum,
        minTierIndex,
      );
      const selectedTier = PROFESSIONAL_TIERS[cheapestIndex];

      setCurrentPlanProf(titlePricing[cheapestIndex]);
      changePlan(titlePricing[cheapestIndex]);
      setPricing(
        currentPrices[cheapestIndex],
        currentPricesYear[cheapestIndex],
      );
      setTierLimits({
        includedStaff: selectedTier.staff,
        includedWorkspaces: selectedTier.workspaces,
        includedCountries: selectedTier.countries,
      });
    }
  }, [
    staff,
    workspace,
    country,
    provideHome,
    toggles,
    activePricingPage,
    titlePricing,
    currentPrices,
    currentPricesYear,
    changePlan,
    setPricing,
    setTierLimits,
    getMinimumRequiredTierIndex,
  ]);
  return (
    <>
      <li
        // ref={isRecommended && isRescomennded ? refGridCardRef : null}
        className={cn(
          'flex bg-white flex-col justify-center items-center text-center first:mt-0 mt-10 md:mt-0 pt-10 md:pt-10 border rounded-[16px] relative overflow-hidden',
          {
            'border-[2px] border-[#A67F6B] shadow-lg shadow-[#A67F6B]/20 scroll-mt-[1000px]':
              isRecommended && isRescomennded,
          },
        )}
      >
        {isRecommended && isRescomennded && (
          <p
            className="absolute top-0 left-0 right-0 text-center text-white bg-[#A67F6B] py-1 font-medium"
            ref={refGridCardRef}
          >
            {textRecomended?.textRecomended}
          </p>
        )}
        <div
          className="relative bg-primary -top-[81px]"
          style={{ width: 'calc(100% + 34px)' }}
        >
          <div className=" md:hidden w-full bg-primary h-[441px] -z-10 absolute top-0 "></div>
        </div>

        <div className="flex flex-col justify-center items-center mb-6 px-4">
          <h2 className="font-semibold text-2xl text-[#242424]">{title}</h2>
          <p className="ltr:font-inter w-fit text-[12px] mt-3 leading-3 text-[#2543AD] bg-[#E9ECF7] rounded-[20px] px-[9px] py-[4px] font-medium">
            {subtitle}
          </p>
          <p className="ltr:font-montserrat text-[#455150] mt-1 text-center leadin-6 min-h-[6rem] ">
            {description}
          </p>
          <div className="bg-[#F8F5F3] rounded-[8px] p-4 w-full mt-4">
            <div className="p-4 rounded-[8px] border flex flex-col justify-center text-center bg-white">
              <h2 className="font-bold text-[#242424] text-[32px] leading-10">
                {currentPrice && currentPrice !== 'Free'
                  ? ` ${currentPrice}`
                  : 'Free'}
              </h2>
              <p className="ltr:font-montserrat text-[#242424] text-[12px] leading-[18px]">
                {defaulText?.perPeriod}
                {chechedAnnualy ? defaulText?.annualy : defaulText?.monthly}
                <span
                  className={cn(
                    'bg-[#E9ECF7] text-[#2543AD] rounded-[16px] px-[7px] py-[3px] hidden text-[12px] leading-[12px] ltr:font-inter font-medium w-fit ml-1 text-nowrap',
                    {
                      inline: chechedAnnualy,
                    },
                  )}
                >
                  {defaulText?.discount}
                </span>
              </p>
              <Button className="ltr:font-montserrat font-semibold mt-4 bg-white text-primary hover:text-white hover:bg-primary border border-primary ">
                {defaulText?.textStarted}
              </Button>
            </div>
          </div>
        </div>
        <ul className="flex flex-col bg-[#F8F5F3] pt-10 md:py-10 space-y-4 w-full px-4 -mx-6 rounded-b-[16px]">
          {optionPlus !== '' && (
            <>
              <div className="flex justify-center items-center py-3 border bg-white rounded-[8px]">
                <div className="flex justify-center items-center">
                  <OptionPricing />
                  <span className="ltr:ml-2 rtl:mr-2 ltr:font-montserrat font-semibold">
                    {defaulText?.everything} &quot;{optionPlus}&quot;
                  </span>
                </div>
              </div>
              <span className="flex justify-center mx-auto p-[18px] rounded-full bg-white w-fit border">
                <PlusIcon />
              </span>
            </>
          )}
          <OtherOptionPricing showAll={showAll} options={options} />

          {!showAll && options.length > 5 && (
            <Button
              className="md:hidden ltr:font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(true)}
            >
              {defaulText?.mobileView}
            </Button>
          )}
          {showAll && (
            <Button
              className="md:hidden ltr:font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(false)}
            >
              {defaulText?.mobileHide}
            </Button>
          )}
        </ul>
      </li>
    </>
  );
};
