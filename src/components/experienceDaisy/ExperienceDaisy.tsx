'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import phone from '../../assets/images/PHONE.png';
import Separator from '../separator/Separator';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';

export const ExperienceDaisy = () => {
  return (
    <div className="pt-[80px]">
      <div className="bg-primaryBtn w-full rounded-[9px] items-center flex justify-center overflow-hidden">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.5, stiffness: 200 }}
          viewport={{ once: true }}
          //   animate={{ y: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <Image src={phone} alt="phone" width={212} className="pt-[65px]" />
        </motion.div>
      </div>
      <h1 className="pt-5 text-white leading-10 text-3xl">
        Discover, Experience, And Save With The Daisy
      </h1>
      <p className="font-montserrat font-normal text-base pt-3 leading-8 text-[#D5D9D9]">
        Your Gateway to Seamless Services!
      </p>
      <Separator className="my-[34px]" />
      <p className="font-montserrat font-normal text-base pt-3 leading-8 text-[#FFFFFF]">
        Download Now!
      </p>
      <div className="flex flex-col pb-16">
        <PlayMarketButton className="mb-6 mt-8" />
        <AppStoreButton />
      </div>
    </div>
  );
};
