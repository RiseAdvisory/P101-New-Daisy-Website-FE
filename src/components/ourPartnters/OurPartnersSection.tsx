'use client';
import { useEffect, useState } from 'react';
import { CarouselCompany } from '../carouselCompany/CarouselCompany';
import axiosInstance from '@/helpers/axiosConfig';

export const OurPartnersSection = ({
  stylePartners,
}: {
  stylePartners?: string;
}) => {
  const [ourPartners, setOurPartners] = useState<any>();
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    (async function getUser() {
      try {
        const listPartners = await getData();
        if (listPartners) {
          const randomPartners = getRandomElements(listPartners, 60);
          setPartners(randomPartners);
        }

        const {
          data: { data },
        } = await axiosInstance.get('/partners');

        setOurPartners(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={` px-4 mt-[80px] pb-[112px] ${stylePartners} bg-white`}>
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {ourPartners?.[0].attributes.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          {ourPartners?.[0].attributes.subtitle}
        </p>
      </div>
      <CarouselCompany data={partners} />
    </div>
  );
};

const getData = async () => {
  try {
    const res = await fetch('https://devapp.trythedaisy.com/api/v1/vendors', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: any = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data.vendors;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    // You can return a default value or throw the error to handle it in the component
    return null;
  }
};

const getRandomElements = (array: any[], count: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
