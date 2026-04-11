'use client';
import { useMemo } from 'react';
import { MissionIcon } from '@/assets/icons/missionIcon/MissionIcon';
import { StarsIcons } from '../../assets/icons/starsIcon/StarIcons';
import { StrategyIcons } from '../../assets/icons/strategyIcon/StrategyIcon';
import { t } from '@/lib/constants/i18n';
import { daisyMissionData } from '@/lib/constants/shared/daisyMissionData';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const DaysiMission = () => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const data = t(daisyMissionData, locale);

  return (
    <div className="bg-[#F8F5F3] pt-[80px] pb-[112px] md:px-[64px]">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h2 className="text-center mx-[20px] md:mx-0  text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {data.title}
        </h2>
        <p className="text-center text-[#455150] mt-3 ltr:font-montserrat md:text-base md:font-normal">
          {data.subtitle}
        </p>
      </div>
      <ul className="px-4 mt-12 space-y-6 md:flex rtl:md:gap-6 md:gap-6 md:justify-center md:space-y-0">
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<MissionIcon />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {data.listDaisyMission[0].title}
          </h4>
          <p className="mt-2 ltr:font-montserrat font-normal">
            {data.listDaisyMission[0].description}
          </p>
        </li>
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<StarsIcons />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {data.listDaisyMission[1].title}
          </h4>
          <p className="mt-2 ltr:font-montserrat font-normal">
            {data.listDaisyMission[1].description}
          </p>
        </li>
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<StrategyIcons />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {data.listDaisyMission[2].title}
          </h4>
          <p className="mt-2 ltr:font-montserrat font-normal">
            {data.listDaisyMission[2].description}
          </p>
        </li>
      </ul>
    </div>
  );
};
