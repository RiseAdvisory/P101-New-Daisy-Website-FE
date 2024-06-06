import { parntersImages } from '@/lib/constants/partnersImage';
import Image from 'next/image';

export const OurPartnersSection = ({
  stylePartners,
}: {
  stylePartners?: string;
}) => {
  return (
    <div className={`bg-white px-4 mt-[80px] pb-[112px] ${stylePartners}`}>
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Our Partners
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <ul className="flex space-x-5 mt-8 overflow-x-scroll px-4 items-center justify-center">
        {parntersImages.map((item, index) => {
          return (
            <li key={index} className="">
              <Image
                src={item.img}
                alt="partners"
                className="max-w-none w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
