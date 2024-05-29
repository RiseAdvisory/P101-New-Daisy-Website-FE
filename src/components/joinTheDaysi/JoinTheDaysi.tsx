import JoinCustomer from '../../assets/images/JoinCustomers.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import { joinDaisyList } from '@/lib/constants/joinDaisyList';

export const JoinTheDaisy = () => {
  return (
    <div className="bg-white -mx-4 px-4">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10">Join The Daisy</h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ul className="mt-[48px] space-y-8 pb-20">
        {joinDaisyList.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-white rounded-[12px]  border flex flex-col justify-center items-center overflow-hidden"
            >
              <Image
                alt="joindaisy"
                src={item.img}
                className="rounded-top-[12px] block -mt-[1px]"
              />

              <div className="px-6 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-2xl mt-6">{item.title}</h4>
                <p className="mt-2 font-montserrat font-normal text-center text-[#455150]">
                  {item.description}
                </p>
                <Button className="bg-white w-full text-primary border border-primary py-[14px] px-[108px] my-6 font-montserrat text-base font-semibold">
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
