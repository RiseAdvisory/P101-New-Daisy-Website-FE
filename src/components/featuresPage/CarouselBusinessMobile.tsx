import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { listImageBusiness } from '@/lib/constants/features/listBusinessOptions';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { baseURLImage } from '@/helpers/axiosConfig';

export const CarouselBusinessMobile = ({
  dataBusiness,
}: {
  dataBusiness: any;
}) => {
  const getImageUrl = (
    mobileField: string,
    desktopField: string,
  ): string => {
    const mobileUrl =
      dataBusiness?.[mobileField]?.data?.[0]?.attributes?.url;
    const desktopUrl =
      dataBusiness?.[desktopField]?.data?.[0]?.attributes?.url;
    return new URL(mobileUrl ?? desktopUrl, baseURLImage).href;
  };

  const firstImage = getImageUrl('firstMobileImage', 'firstImage');
  const secondImage = getImageUrl('secondMobileImage', 'secondImage');
  const thirdImage = getImageUrl('thirdMobileImage', 'thirdImage');

  const firstStyle = dataBusiness?.firstMobileImageStyle ?? dataBusiness?.firstImageStyle;
  const secondStyle = dataBusiness?.secondMobileImageStyle ?? dataBusiness?.secondImageStyle;
  const thirdStyle = dataBusiness?.thirdMobileImageStyle ?? dataBusiness?.thirdImageStyle;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          playOnInit: true,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full md:hidden px-4"
    >
      <CarouselContent>
        <CarouselItem className="mx-auto flex justify-center h-[400px] overflow-hidden">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={firstImage}
              className={'w-[220px] !h-[350px] '}
              style={firstStyle}
              alt="Daisy business features overview"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="mx-auto flex justify-center  h-[400px] overflow-hidden">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={secondImage}
              className={'w-[250px] h-[330px]'}
              style={secondStyle}
              alt="Daisy business features overview"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="mx-auto flex justify-center  h-[400px] overflow-hidden">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={thirdImage}
              className={'w-[220px] h-[350px]'}
              style={thirdStyle}
              alt="Daisy business features overview"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
