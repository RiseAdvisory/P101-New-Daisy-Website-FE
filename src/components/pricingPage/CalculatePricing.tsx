import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Calculater } from './Calculater';
import { ResultCalculate } from './ResultCalculate';
import { cn } from '@/lib/utils';

export const CalculatePricing = () => {
  const [homeService, setHomeService] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [conciergeService, setConciergeService] = useState(false);
  const [onCalculates, setOnCalculates] = useState(true);
  const [calculate, setCalculate] = useState({
    staff: '1',
    branch: '1',
    country: '1',
    provideHome: false,
    assistantOnboard: false,
    available: false,
  });
  const onCalculate = () => {
    const staff = parseInt(calculate.staff, 10) * 10;
    const branch = parseInt(calculate.branch, 10) * 25;
    const country = parseInt(calculate.country, 10) * 50;

    let total = staff + branch + country;

    if (calculate.provideHome) {
      total += 25;
    }

    if (calculate.assistantOnboard) {
      total += 100;
    }

    if (calculate.available) {
      total += 1;
    }

    console.log(total);
    console.log(calculate);
  };

  return (
    <div className="bg-[#828E8E] rounded-[16px] p-0 md:p-8 w-full">
      <div className="p-4 md:p-8 rounded-[16px] bg-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#172524] font-semibold text-[18px] leading-7 font-montserrat">
              Let&apos;s Calculate the Perfect Tier for Your Business
            </h2>
            <p className="font-montserrat text-[#455150]">
              Please answer the questions below to help us choose the best tier
              for your business.
            </p>
          </div>
          <Button
            onClick={() => {
              onCalculate(), setOnCalculates(!onCalculates);
            }}
            className=" hidden md:inline-flex font-montserrat border border-[#2E4342] text-primary hover:text-white font-semibold px-[89px] py-[12px] bg-white hover:bg-primary text-center"
          >
            {onCalculates ? 'Calculate' : 'Reset Calculation'}
          </Button>
        </div>
        <Separator
          className="mt-6 bg-[#E8E9E9] -mx-4 w-full"
          style={{ width: 'calc(100% + 32px)' }}
        />
        {onCalculates ? (
          <Calculater
            calculate={calculate}
            setCalculate={setCalculate}
            homeService={homeService}
            setHomeService={setHomeService}
            onboarding={onboarding}
            setOnboarding={setOnboarding}
            conciergeService={conciergeService}
            setConciergeService={setConciergeService}
          />
        ) : (
          <ResultCalculate />
        )}

        <Separator
          className="my-6 bg-[#E8E9E9] -mx-4 w-full md:hidden"
          style={{ width: 'calc(100% + 32px)' }}
        />
        <Button
          onClick={() => console.log('free')}
          className={cn(
            'inline-flex md:hidden w-full p-6  font-montserrat border border-[#2E4342]  font-semibold px-[89px] py-[12px] mb-3',
            { hidden: onCalculates },
          )}
        >
          Start Free Trial
        </Button>
        <Button
          onClick={() => {
            onCalculate(), setOnCalculates(!onCalculates);
          }}
          className="inline-flex md:hidden w-full p-6  font-montserrat border border-[#2E4342] text-primary hover:text-white font-semibold px-[89px] py-[12px] bg-white hover:bg-primary"
        >
          {onCalculates ? 'Calculate' : 'Reset Calculation'}
        </Button>
      </div>
    </div>
  );
};
