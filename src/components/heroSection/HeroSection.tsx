'use client';
import Image from 'next/image';
import stars from '../../assets/images/starsBg.png';
import { ArrowSectionDown } from '@/assets/icons/arrowSectionDown/arrowSectionDown';
import { cn } from '@/lib/utils';
import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import { BreadcrumbWithCustomSeparator } from '../blogPage/blogPosts/BreadCrumbs';
import { usePathname } from 'next/navigation';

export const HeroPage = ({
  title,
  description,
  hiddenArrow,
  visibleDescriiton,
  heightScreen,
  styleSection,
  secondDescription,
}: {
  title: string;
  description: string;
  hiddenArrow: boolean;
  visibleDescriiton: boolean;
  heightScreen: boolean;
  styleSection?: string;
  secondDescription?: string;
}) => {
  const path = usePathname();
  const isVisibleBreadCrumbs = path.includes('customer');
  return (
    <div
      className={cn(
        `  w-full  bg-primary pt-[100px] flex flex-col justify-start items-center px-4 ${styleSection}`,
        { 'h-[95vh]': heightScreen },
      )}
    >
      {isVisibleBreadCrumbs && (
        <div className="flex pb-28 mr-auto">
          <HomeIcon className="mr-2" />
          <BreadcrumbWithCustomSeparator
            bredCrumbTitle="Customers’ Testimonials"
            bredCrumbDesription="Resources"
          />
        </div>
      )}
      <Image src={stars} alt="stars" className="mx-auto w-[60px] h-[60px] " />
      <p className="mt-11 font-semibold text-base text-[#F2DAD4] uppercase">
        {title}
      </p>
      <h2 className="text-center mt-2 font-semibold text-[32px] leading-10 text-white md:px-[400px] md:text-[48px] md:leading-[60px]">
        {description}
      </h2>
      <p
        className={cn(
          'text-base font-montserrat font-normal text-[#D5D9D9] mt-2 text-center md:px-[400px]',
          {
            hidden: visibleDescriiton,
          },
        )}
      >
        {secondDescription}
      </p>
      <div
        className={cn('mt-[74px] md:mt-[150px] flex flex-col justify-center ', {
          hidden: hiddenArrow,
        })}
      >
        <p className="text-base text-white font-normal font-montserrat">
          Don’t believe us? Keep reading...
        </p>
        <span className="flex justify-center items-center rounded-full border border-primaryBtn w-[40px] h-[40px] cursor-pointer mx-auto mt-6">
          <ArrowSectionDown />
        </span>
      </div>
    </div>
  );
};
