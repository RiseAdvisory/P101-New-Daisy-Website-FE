import { CarouselCompany } from '../carouselCompany/CarouselCompany';

export const OurPartnersSection = ({
  stylePartners,
}: {
  stylePartners?: string;
}) => {
  return (
    <div className={` px-4 mt-[80px] pb-[112px] ${stylePartners} bg-white`}>
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Our Partners
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <CarouselCompany />
    </div>
  );
};
