import { parntersImages } from '@/lib/constants/partnersImage';
import Image from 'next/image';

export const OurPartnersSection = () => {
  return (
    <div className="bg-white -mx-4 mt-[80px] pb-[112px]">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10">Our Partners</h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <ul className="flex space-x-5 mt-8 overflow-x-scroll px-4 items-center justify-center">
        {parntersImages.map((item, index) => {
          return (
            <li key={index}>
              <Image
                src={item.img}
                alt="partners"
                width={90}
                height={90}
                className="max-w-none"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
