import { useMemo } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { CheckIconPricing } from '@/assets/icons/checkIconPricing/CheckIconPricing';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useCalculate } from '@/store/calculateResult';
import { useCurrentPlan } from '@/store/storeCurrentPlan';

// Per-unit pricing for additional resources (monthly)
const ADDITIONAL_STAFF_PRICE = 10;
const ADDITIONAL_WORKSPACE_PRICE = 25;
const ADDITIONAL_COUNTRY_PRICE = 50;

// Tier limits by price (language-independent)
// Key format: "monthlyPrice-annualPrice"
const TIER_LIMITS_BY_PRICE: Record<
  string,
  { staff: number; workspaces: number; countries: number }
> = {
  // Business tiers
  '50-42': { staff: 5, workspaces: 1, countries: 1 }, // Basic
  '150-128': { staff: 10, workspaces: 2, countries: 1 }, // Growth
  '250-208': { staff: 15, workspaces: 4, countries: 1 }, // Business
  // Professional tiers
  '0-0': { staff: 1, workspaces: 1, countries: 1 }, // Starter (Free)
  '50-500': { staff: 1, workspaces: 1, countries: 1 }, // Professional
  '100-1000': { staff: 1, workspaces: 2, countries: 2 }, // Elite
};

// Helper to get tier limits from price
const getTierLimitsByPrice = (monthlyPrice: number, annualPrice: number) => {
  const key = `${monthlyPrice}-${annualPrice}`;
  return TIER_LIMITS_BY_PRICE[key] || { staff: 1, workspaces: 1, countries: 1 };
};

export const ResultCalculate = ({
  setCheckedYear,
  onCheckedYear,
  calculationFormRef,
  onScrollToGrid,
  dataPricing,
}: {
  onCheckedYear: boolean;
  setCheckedYear: any;
  calculationFormRef: any;
  onScrollToGrid: any;
  dataPricing: any;
}) => {
  const { workspace, country, staff, provideHome } = useCalculate();

  const { plan, price, priceYear } = useCurrentPlan();

  // Parse prices - remove $ if present and convert to number
  const baseMonthlyPrice = price ? Number(price.replace('$', '')) : 0;
  const baseAnnualPrice = priceYear ? Number(priceYear.replace('$', '')) : 0;

  // Get tier limits based on price (language-independent)
  const tierLimits = useMemo(() => {
    return getTierLimitsByPrice(baseMonthlyPrice, baseAnnualPrice);
  }, [baseMonthlyPrice, baseAnnualPrice]);

  // Calculate effective workspace count (including home services)
  const effectiveWorkspaces = Number(workspace) + (provideHome ? 1 : 0);

  // Calculate additional resources over what's included in the plan
  const additionalStaff = Math.max(0, Number(staff) - tierLimits.staff);
  const additionalWorkspaces = Math.max(
    0,
    effectiveWorkspaces - tierLimits.workspaces,
  );
  const additionalCountries = Math.max(
    0,
    Number(country) - tierLimits.countries,
  );

  // Calculate additional costs
  const additionalStaffCost = additionalStaff * ADDITIONAL_STAFF_PRICE;
  const additionalWorkspacesCost =
    additionalWorkspaces * ADDITIONAL_WORKSPACE_PRICE;
  const additionalCountriesCost =
    additionalCountries * ADDITIONAL_COUNTRY_PRICE;
  const totalAdditionalCost =
    additionalStaffCost + additionalWorkspacesCost + additionalCountriesCost;

  // Total prices including additional resources
  const monthlyPrice = baseMonthlyPrice + totalAdditionalCost;

  // Detect if annual price is monthly equivalent or yearly total
  // Business tiers: priceYear is monthly equivalent (e.g., $42/mo billed annually)
  // Professional tiers: priceYear is yearly total (e.g., $500/year)
  // Heuristic: if annualPrice < monthlyPrice * 3, it's a monthly equivalent
  const isMonthlyEquivalent =
    baseAnnualPrice > 0 && baseAnnualPrice < baseMonthlyPrice * 3;
  const yearlyBasePrice = isMonthlyEquivalent
    ? baseAnnualPrice * 12
    : baseAnnualPrice;
  const annualPrice =
    yearlyBasePrice + Math.round(totalAdditionalCost * 12 * 0.83); // ~17% discount for annual extras

  const hasAdditionalResources =
    additionalStaff > 0 || additionalWorkspaces > 0 || additionalCountries > 0;
  return (
    <div ref={calculationFormRef} className=" scroll-mt-[300px]">
      <div className="mt-6 md:p-6 md:border md:rounded-[16px]">
        <div className="md:flex md:justify-between md:items-center ">
          <div className="flex justify-between md:justify-start">
            <h2 className="ltr:font-montserrat font-semibold text-[#242424] text-[16px] leading-6">
              {plan}
            </h2>
            <p className="bg-[#E9ECF7] px-[9px] py-[4px] ltr:font-inter text-[#2543AD] rounded-[20px] w-fit text-[12px] leading-[12px] font-medium self-center ltr:md:ml-3 rtl:md:mr-3">
              {dataPricing?.resetCalculation?.tryPeriod}
            </p>
          </div>
          <Button
            className="ltr:font-montserrat font-semibold bg-transparent border-none text-[#2543AD] pl-0 "
            onClick={() => onScrollToGrid()}
          >
            {dataPricing?.resetCalculation?.details}
          </Button>
        </div>
        <Separator className="my-6 md:mb-0 bg-[#E8E9E9] -mx-4 w-full spacing-custom-width md:spacing-custom-width-md max-w-full" />
        <div className="md:flex md:justify-between">
          <div className="md:w-[50%] md:py-[20px]">
            {/* Included in Plan Title */}
            <h4 className="text-[#2543AD] ltr:font-montserrat text-sm font-semibold mb-3">
              {dataPricing?.resetCalculation?.includedInPlan ||
                'Included in Plan'}
            </h4>
            <ul className="md:grid md:grid-cols-2 grid gap-3">
              {/* Dynamic tier limits display */}
              <li className="flex items-center">
                <CheckIconPricing style="w-[14px] h-[14px]" />
                <span className="text-[#455150] ltr:font-montserrat font-medium ml-2">
                  {tierLimits.staff}{' '}
                  {dataPricing?.resetCalculation?.staffLabel || 'Staff'}{' '}
                  {dataPricing?.resetCalculation?.freeLabel || 'Free'}
                </span>
              </li>
              <li className="flex items-center">
                <CheckIconPricing style="w-[14px] h-[14px]" />
                <span className="text-[#455150] ltr:font-montserrat font-medium ml-2">
                  {tierLimits.workspaces}{' '}
                  {tierLimits.workspaces === 1
                    ? dataPricing?.resetCalculation?.workspaceLabel ||
                      'Workspace'
                    : dataPricing?.resetCalculation?.workspacesLabel ||
                      'Workspaces'}{' '}
                  {dataPricing?.resetCalculation?.freeLabel || 'Free'}
                </span>
              </li>
              <li className="flex items-center">
                <CheckIconPricing style="w-[14px] h-[14px]" />
                <span className="text-[#455150] ltr:font-montserrat font-medium ml-2">
                  {tierLimits.countries}{' '}
                  {tierLimits.countries === 1
                    ? dataPricing?.resetCalculation?.countryLabel || 'Country'
                    : dataPricing?.resetCalculation?.countriesLabel ||
                      'Countries'}{' '}
                  {dataPricing?.resetCalculation?.freeLabel || 'Free'}
                </span>
              </li>
              {/* Show additional resources with costs if any */}
              {hasAdditionalResources && (
                <li className="flex items-center">
                  <CheckIconPricing style="w-[14px] h-[14px]" />
                  <span className="text-[#A67F6B] ltr:font-montserrat font-medium ml-2">
                    {dataPricing?.resetCalculation?.additionalLabel ||
                      'Additional'}{' '}
                    +${totalAdditionalCost}/
                    {dataPricing?.resetCalculation?.monthShort || 'mo'}
                  </span>
                </li>
              )}
            </ul>
          </div>
          <Separator className="my-6 bg-[#E8E9E9] -mx-4 w-full md:hidden max-w-full" />
          <div className=" md:w-[50%]  md:border-l md:py-[20px] md:px-6">
            {/* Additional Resources Section - Only show if there are extras */}
            {hasAdditionalResources && (
              <>
                <h4 className="text-[#A67F6B] ltr:font-montserrat text-sm font-semibold mb-2">
                  {dataPricing?.resetCalculation?.additionalResources ||
                    'Additional Resources'}
                </h4>
                {additionalStaff > 0 && (
                  <div className="flex justify-between mt-2">
                    <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                      +{additionalStaff}{' '}
                      {dataPricing?.resetCalculation?.staffLabel || 'Staff'}:
                    </h3>
                    <p className="text-[#A67F6B] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                      +${additionalStaffCost}/
                      {dataPricing?.resetCalculation?.monthShort || 'mo'}
                    </p>
                  </div>
                )}
                {additionalWorkspaces > 0 && (
                  <div className="flex justify-between mt-2">
                    <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                      +{additionalWorkspaces}{' '}
                      {dataPricing?.resetCalculation?.workspacesLabel ||
                        'Workspaces'}
                      :
                    </h3>
                    <p className="text-[#A67F6B] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                      +${additionalWorkspacesCost}/
                      {dataPricing?.resetCalculation?.monthShort || 'mo'}
                    </p>
                  </div>
                )}
                {additionalCountries > 0 && (
                  <div className="flex justify-between mt-2">
                    <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                      +{additionalCountries}{' '}
                      {dataPricing?.resetCalculation?.countriesLabel ||
                        'Countries'}
                      :
                    </h3>
                    <p className="text-[#A67F6B] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                      +${additionalCountriesCost}/
                      {dataPricing?.resetCalculation?.monthShort || 'mo'}
                    </p>
                  </div>
                )}
                <div className="flex justify-between mt-3 pt-2 border-t border-dashed border-[#E8E9E9]">
                  <h3 className="text-[#172524] ltr:font-montserrat text-base font-semibold">
                    {dataPricing?.resetCalculation?.additionalTotal ||
                      'Additional Total'}
                    :
                  </h3>
                  <p className="text-[#A67F6B] text-[14px] leading-5 ltr:font-montserrat font-semibold ">
                    +${totalAdditionalCost}/
                    {dataPricing?.resetCalculation?.monthShort || 'mo'}
                  </p>
                </div>
              </>
            )}

            {/* Your Requirements Summary */}
            {hasAdditionalResources && (
              <Separator className="my-4 bg-[#E8E9E9]" />
            )}
            <h4 className="text-[#172524] ltr:font-montserrat text-sm font-semibold mb-2">
              {dataPricing?.resetCalculation?.yourRequirements ||
                'Your Requirements'}
            </h4>
            <div className="flex justify-between">
              <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                {dataPricing?.resetCalculation?.staffLabel || 'Staff'}:
              </h3>
              <p className="text-[#172524] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                {staff}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                {dataPricing?.resetCalculation?.workspacesLabel || 'Workspaces'}
                :
              </h3>
              <p className="text-[#172524] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                {effectiveWorkspaces}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                {dataPricing?.resetCalculation?.countriesLabel || 'Countries'}:
              </h3>
              <p className="text-[#172524] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                {country}
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-6 md:mt-0 bg-[#E8E9E9] -mx-4 w-full max-w-full" />
        <div className="md:flex md:items-center md:self-center md:justify-between">
          <div>
            <h2 className="ltr:font-montserrat font-semibold text-base">
              {dataPricing?.resetCalculation?.totalPrice}:
            </h2>
            {hasAdditionalResources && (
              <p className="text-[#455150] text-[12px] ltr:font-montserrat mt-1">
                (${baseMonthlyPrice}{' '}
                {dataPricing?.resetCalculation?.basePlan || 'base'} + $
                {totalAdditionalCost}{' '}
                {dataPricing?.resetCalculation?.additionalLabel || 'additional'}
                )
              </p>
            )}
          </div>
          <div className="md:ml-auto">
            <div className="md:flex md:items-center">
              <div className="flex justify-between  md:mt-0 items-center">
                <div
                  className={cn('md:flex md:items-baseline', {
                    ' opacity-60': onCheckedYear,
                  })}
                >
                  <p className="ltr:font-montserrat font-semibold text-[20px] leading-[30px]">
                    ${monthlyPrice}
                    <span className="ltr:font-montserrat text-[#455150] font-normal  md:text-[16px] md:leading-[18px] ml-2">
                      <span className="hidden md:inline">
                        {dataPricing?.resetCalculation?.per}
                      </span>
                      <span className="md:hidden">/</span>{' '}
                      {dataPricing?.resetCalculation?.month}
                    </span>
                  </p>
                  <p className=" ltr:font-montserrat text-[10px] leading-[15px] md:flex  md:text-[16px] md:leading-[18px] font-normal text-[#455150]">
                    <span className="hidden md:inline mx-1">/</span>
                    {dataPricing?.resetCalculation?.billed}
                  </p>
                </div>

                <Switch
                  className="data-[state=checked]:bg-[#A67F6B] bg-[#aab4b3] md:mx-4"
                  onCheckedChange={() => setCheckedYear(!onCheckedYear)}
                />

                <div
                  className={cn('md:flex md:items-baseline', {
                    ' opacity-60': !onCheckedYear,
                  })}
                >
                  <p className="ltr:font-montserrat font-semibold text-[20px] leading-[30px]">
                    ${annualPrice}
                    <span className="ltr:font-montserrat text-[#455150] font-normal  md:text-[16px] md:leading-[18px] ml-2">
                      <span className="hidden md:inline">
                        {dataPricing?.resetCalculation?.per}
                      </span>
                      <span className="md:hidden">/</span>{' '}
                      {dataPricing?.resetCalculation?.year}
                    </span>
                  </p>
                  <p className=" ltr:font-montserrat text-[10px] leading-[15px] md:flex  md:text-[16px] md:leading-[18px] font-normal text-[#455150]">
                    <span className="hidden md:inline mx-1">/</span>
                    {dataPricing?.resetCalculation?.billed}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button className="ml-4 hover:bg-white hover:text-primary border hidden md:inline-flex rounded-[9px]">
            {dataPricing?.resetCalculation?.textStart}
          </Button>
        </div>
      </div>
    </div>
  );
};
