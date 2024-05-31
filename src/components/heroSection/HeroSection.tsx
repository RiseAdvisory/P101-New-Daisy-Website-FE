import Image from 'next/image';
import stars from '../../assets/images/starsBg.png';
import { ArrowSectionDown } from '@/assets/icons/arrowSectionDown/arrowSectionDown';

export const HeroPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full  bg-primary pt-[100px] flex flex-col justify-start items-center px-4">
      <Image src={stars} alt="stars" className="mx-auto w-[60px] h-[60px] " />
      <p className="mt-11 font-semibold text-base text-[#F2DAD4] uppercase">
        {title}
      </p>
      <h2 className="text-center mt-2 font-semibold text-[32px] leading-10 text-white">
        {description}
      </h2>
      <div className=" mb-12 flex flex-col justify-center md:mt[200px] mt-[100px]">
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
