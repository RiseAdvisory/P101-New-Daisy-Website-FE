'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotionDiv } from '../performance/LazyMotion';
import Separator from '../separator/Separator';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import leaf from '../../assets/images/leaf-background-decoration.png';
import stars from '../../assets/images/stars-background-decoration.png';
import { t } from '@/lib/constants/i18n';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import {
  experienceDaisyData,
  ExperienceDaisyPageType,
} from '@/lib/constants/shared/experienceDaisyData';

interface ExperienceDaisyProps {
  pageType?: ExperienceDaisyPageType;
  ctaLink?: string;
  ctaText?: string;
}

export const ExperienceDaisy = ({ pageType = 'customer', ctaLink, ctaText }: ExperienceDaisyProps) => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const data = t(experienceDaisyData[pageType], locale);

  return (
    <div className="md:bg-custom-gradient md:pt-[150px]">
      <div className="pt-[80px] px-4 md:flex relative bg-primary md:mx-[63px] md:rounded-[16px]">
        <div className="bg-primaryBtn w-full rounded-[9px] items-center flex justify-center overflow-hidden md:hidden relative">
          <Image
            className="absolute bottom-0 left-0"
            width={200}
            alt=""
            src={leaf}
          />
          <Image
            className="absolute top-0 right-0 -z-1"
            alt=""
            src={stars}
            width={100}
          />

          <LazyMotionDiv
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.5, stiffness: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="h-[326px] w-[212px] ">
              <Image
                src={data.phoneMobileImage}
                alt="phone"
                width={212}
                height={326}
                className="pt-[65px] relative "
              />
            </div>
          </LazyMotionDiv>
        </div>

        <Image
          src={data.phoneDesktopImage}
          alt="The Daisy app on two mobile devices"
          width={336}
          height={684}
          className="absolute -top-[70px] ltr:left-[60px] rtl:right-[60px] hidden md:block"
        />

        <div className="ltr:md:ml-[560px] ltr:md:mr-[114px] rtl:md:mr-[560px] rtl:md:ml-[114px]">
          <h1 className="pt-5 text-white leading-10 text-3xl">
            {data.title}
          </h1>
          <p className="ltr:font-montserrat font-normal text-base pt-3 leading-8 text-[#D5D9D9]">
            {data.subtitle}
          </p>
          <Separator className="my-[34px] md:hidden" />
          <p className="ltr:font-montserrat font-normal text-base pt-3 leading-8 text-[#FFFFFF] md:mt-[40px]">
            {data.description}
          </p>
          <div className="flex flex-col pb-16 md:w-[427px]">
            {ctaLink ? (
              <Link
                href={ctaLink}
                className="inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent mt-8 text-center"
              >
                {ctaText || 'Start Your Free Trial'}
              </Link>
            ) : (
              <>
                <PlayMarketButton className="mb-6 mt-8" />
                <AppStoreButton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
