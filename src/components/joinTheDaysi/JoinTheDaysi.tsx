import JoinCustomer from '../../assets/images/JoinCustomers.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import { joinDaisyList } from '@/lib/constants/joinDaisyList';

export const JoinTheDaisy = () => {
  return (
    <div className="bg-white  px-4 md:px-16">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Join The Daisy
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ul className="mt-[48px] space-y-8 pb-20 md:flex md:space-y-0 md:gap-6">
        {joinDaisyList.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-white rounded-[12px]  border flex flex-col justify-center items-center overflow-hidden md:justify-start"
            >
              <Image
                alt="joindaisy"
                src={item.img}
                className="rounded-top-[12px] block -mt-[1px] h-auto"
              />

              <div className="px-6 flex flex-col justify-end items-center ">
                <h4 className="font-semibold text-2xl mt-6 md:mt-4">
                  {item.title}
                </h4>
                <p className="mt-2 font-montserrat font-normal text-center text-[#455150]">
                  {item.description}
                </p>
                <Button className="bg-white w-full text-primary border border-primary py-[14px] px-[108px] my-6 font-montserrat text-base font-semibold hover:bg-primary hover:text-white">
                  Learn more
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
