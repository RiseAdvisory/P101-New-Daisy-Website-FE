'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { t } from '@/lib/constants/i18n';
import { joinDaisyData } from '@/lib/constants/shared/joinDaisyData';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const JoinTheDaisy = () => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const router = useRouter();
  const data = t(joinDaisyData, locale);

  return (
    <div className="bg-white  px-4 md:px-16">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {data.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 ltr:font-montserrat md:text-base md:font-normal">
          {data.subtitle}
        </p>
      </div>
      <ul className="mt-[48px] space-y-8 pb-20 md:flex md:space-y-0 md:gap-6">
        {data.items.map((item, index) => (
          <li
            key={index}
            className="bg-white rounded-[12px]  border flex flex-col justify-center items-center overflow-hidden md:justify-start"
          >
            <Image
              alt="joindaisy"
              src={item.image}
              className="rounded-top-[12px] block -mt-[1px] h-auto"
              width={1000}
              height={1000}
            />

            <div className="px-6 flex flex-col justify-end items-center ">
              <h4 className="font-semibold text-2xl mt-6 md:mt-4">
                {item.title}
              </h4>
              <p className="mt-2 ltr:font-montserrat font-normal text-center text-[#455150]">
                {item.description}
              </p>
              <Button
                className="bg-white w-full text-primary border border-primary py-[14px] px-[50px] my-6 ltr:font-montserrat text-base font-semibold hover:bg-primary hover:text-white"
                onClick={() => router.push(item.linksto)}
              >
                {item.textButton}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
