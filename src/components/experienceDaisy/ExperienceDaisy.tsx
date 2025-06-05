'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import phone from '../../assets/images/PHONE.png';
import Separator from '../separator/Separator';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import leaf from '../../assets/images/LeafBg.png';
import stars from '../../assets/images/starsBg.png';
import doublePhoto from '../../assets/images/PHONEallheight.png';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

export const ExperienceDaisy = () => {
  const [experienceDaisy, setExperienceDaisy] = useState<any>();
  const { lang } = useChangeLanguage();
  const currentPage = localStorage.getItem('activePage');

  useEffect(() => {
    let endpointExperienceDaisyLink = 'experience-daisy-customers';

    if (currentPage === '/customer') {
      endpointExperienceDaisyLink = 'experience-daisy-customers';
    }
    if (currentPage === '/business') {
      endpointExperienceDaisyLink = 'experience-daisy-businesses';
    }
    if (currentPage === '/professional') {
      endpointExperienceDaisyLink = 'experience-daisy-independents';
    }
    (async function getBusiness() {
      try {
        const response = await axiosInstance.get(
          `/${endpointExperienceDaisyLink}?populate=*&locale=${lang}`,
        );
        setExperienceDaisy(response?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang, currentPage]);

  return (
    <div className="md:bg-custom-gradient md:pt-[150px]">
      <div className="pt-[80px] px-4 md:flex relative bg-primary md:mx-[63px] md:rounded-[16px]">
        <div className="bg-primaryBtn w-full rounded-[9px] items-center flex justify-center overflow-hidden md:hidden relative">
          <Image
            className="absolute bottom-0 left-0"
            width={200}
            alt="bgleaf"
            src={leaf}
          />
          <Image
            className="absolute top-0 right-0 -z-1"
            alt="bgstars"
            src={stars}
            width={100}
          />

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.5, stiffness: 200 }}
            viewport={{ once: true }}
            //   animate={{ y: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="h-[326px] w-[212px] ">
              <Image
                src={experienceDaisy?.phoneImage?.data?.attributes?.url}
                alt="phone"
                width={212}
                height={326}
                className="pt-[65px] relative "
              />
            </div>
          </motion.div>
        </div>

        <Image
          src={experienceDaisy?.phoneImage?.data?.attributes?.url}
          alt="doublephone"
          width={336}
          height={684}
          className="absolute -top-[70px] ltr:left-[60px] rtl:right-[60px] hidden md:block"
        />

        <div className="md:w-1/2 md:px-20 mx-auto text-center md:text-left">
          <h1 className="pt-5 text-white leading-10 text-3xl">
            {experienceDaisy?.title}
          </h1>
          <p className="ltr:font-montserrat font-normal text-base pt-3 leading-8 text-[#D5D9D9]">
            {experienceDaisy?.subtitle}
          </p>
          <Separator className="my-[34px] md:hidden" />
          <p className="ltr:font-montserrat font-normal text-base pt-3 leading-8 text-[#FFFFFF] md:mt-[40px]">
            {experienceDaisy?.description}
          </p>
          <div className="flex flex-col pb-16 md:w-[427px]">
            <PlayMarketButton className="mb-6 mt-8" />
            <AppStoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};
