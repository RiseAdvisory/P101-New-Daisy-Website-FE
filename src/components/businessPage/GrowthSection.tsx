import { GrowthIcon } from '@/assets/icons/growthIcon/GrowthIcon';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';

export const GrowthSection = () => {
  return (
    <>
      <div className="bg-white -mx-4 px-4">
        <h5 className="text-[#A67F6B] pt-20 text-base leading-6">
          MARKETPLACE
        </h5>
        <h2 className="pt-2 text-[#172524] leading-10 text-3xl">
          Boost Occupancy, Attract New Clients, And Own Your Success
        </h2>
        <p className="font-montserrat font-medium text-xl pt-3 leading-8 text-primaryBtn">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Button className="font-semibold w-full text-base mt-8 mb-10 px-[85px] py-[14px] rounded-[9px]">
          Learn More About Us
        </Button>
        <Separator className="bg-[#EAECEC] mb-10" />
        <div className="flex justify-center items-center">
          <GrowthIcon />
        </div>
        <Separator className="bg-[#EAECEC] mt-20" />
      </div>
    </>
  );
};
