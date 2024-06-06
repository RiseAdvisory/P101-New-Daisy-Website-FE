import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import SelfCare from '../../../assets/images/SelfCare.png';
import { BreadcrumbWithCustomSeparator } from '@/components/blogPage/blogPosts/BreadCrumbs';
import Image from 'next/image';
import Jasika from '../../../assets/images/Jasica.png';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';

export const HeroBlogPage = () => {
  return (
    <div
      className="relative bg-cover bg-center pb-[100px] md:pb-[400px] -z-10 px-4 md:pl-[64px] md:pt-[25px]"
      style={{
        backgroundImage: `url(${SelfCare.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,9,9,0.6)] -z-20"></div>
      <div className="flex pt-6">
        <HomeIcon className="mr-2" />
        <BreadcrumbWithCustomSeparator />
      </div>
      <h1 className="text-3xl font-bold text-white mt-8">
        The Art of Self-Care: A Guide to Creating Your Wellness Ritual
      </h1>
      <div className="flex justify-start text-[#ECEEED] text-sm mt-4 flex-col md:flex-row">
        <div className="flex">
          <div className="flex border-r pr-[10px] ">
            <Image
              src={Jasika}
              alt="people"
              className="mr-[10px] rounded-full"
              width={18}
              height={18}
            />
            <span className="  text-sm">Jesica Koli</span>
          </div>
          <span className="flex items-center border-r px-[10px]">
            <CalendarIcon className="mr-[10px]" fill="#ECEEED" />
            02 december 2022
          </span>
        </div>
        <span className="flex items-center mt-2 md:mt-0 md:ml-2">
          <ClockIcon className="mr-2 " fill="#ECEEED" />3 min. to read
        </span>
      </div>
    </div>
  );
};
