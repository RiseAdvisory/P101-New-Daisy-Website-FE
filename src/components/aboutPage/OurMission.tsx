import Separator from '../separator/Separator';
import image from '../../assets/images/AboutMissing.png';
import Image from 'next/image';

export const OurMissing = () => {
  return (
    <div className="bg-white px-6 mt-[80px] pb-[112px]">
      <div className="flex flex-col mx-auto text-center ">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Our Missing
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat text-base font-normal md:px-[440px]">
          Our mission is to curate a selection of renowned spas and skilled
          practitioners, offering exclusive cashback offers that reward you for
          your self-care endeavors.
        </p>
      </div>
      <Separator className="bg-[#E8E9E9] mt-12 md:hidden" />
      <div className=" px-4 md:flex ">
        <div className="md:flex md:justify-between md:bg-white md:mx-[64px] md:mb-[164px] rounded-[16px]">
          <div className="md:w-[50%] md:ml-16 md:mr-[50px] md:pt-[0px]">
            <h5 className="text-[#A67F6B] pt-20 text-base leading-6">
              TREASURES
            </h5>
            <h2 className="pt-2 text-[#172524] leading-10 text-4xl md:text-[40px] md:leading-[50px] font-bold">
              Personalized Path
              <br /> With The Daisy
            </h2>
            <p className="font-montserrat font-medium text-base pt-3 leading-8 text-primaryBtn md:text-[16px] md:leading-6 md:font-normal md:w-[70%]">
              With a touch of mystery and excitement, we invite you to unlock
              hidden treasures of relaxation, ensuring each moment spent with us
              is nothing short of pure bliss. Embark on a personalized path to
              serenity with The Daisy, where your well-being is our utmost
              priority.
            </p>
          </div>
          <div className="flex mt-10 justify-center items-center md:w-[50%] md:pr-28">
            <Image
              className=" md:w-[648px] md:h-[480px]"
              src={image}
              alt="eyes in the leaves"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
