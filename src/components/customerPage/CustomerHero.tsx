import { QRCodeIcons } from '@/assets/icons/qrCodeIcon/QRCodeIcon';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import Separator from '../separator/Separator';
import leaf from '../../assets/images/LeafBg.png';
import stars from '../../assets/images/Stars.png';
import phone from '../../assets/images/PHONEcustomer.png';
import Image from 'next/image';

export const CustomerHero = ({
  title,
  subtitle,
  discover,
  services,
  gateway,
}: {
  title: string;
  subtitle: string;
  discover: string;
  services: string;
  gateway: string;
}) => {
  return (
    <div className=" bg-primary pt-16 px-4 min-h-screen">
      <div className="md:hidden">
        <h1 className="text-white text-5xl leading-[60px] capitalize">
          {discover}
        </h1>
        <p className="ltr:font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
          {gateway}
          <br className="md:hidden" /> {services}
        </p>
        <div className="flex flex-col border-b border-primaryBtn pb-16">
          <PlayMarketButton className="mb-6 mt-8" />
          <AppStoreButton />
        </div>
      </div>
      <div className="hidden md:flex justify-between mx-16 lg:mx-24 xl:mx-32">
        <div className="flex flex-col w-full max-w-[533px]">
          <h1 className="text-white text-5xl leading-[60px]">{title}</h1>
          <p className="ltr:font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
            {subtitle}
          </p>
          <Separator className="my-8" />
          <div className="flex ">
            <QRCodeIcons />
            <div className="flex flex-col justify-between border-primaryBtn ml-6 w-full max-w-[400px]">
              <PlayMarketButton className="mb-2 w-full" />
              <AppStoreButton />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mb-[100px] md:mb-[150px] lg:mb-[200px]">
          <div className="w-full max-w-[600px] h-[400px] md:h-[450px] lg:h-[500px] bg-primaryBtn rounded-[16px] relative ">
            <Image
              className="absolute bottom-0 left-0 w-1/2 max-w-[300px]"
              src={leaf}
              alt="leaf"
              width={300}
            />
            <Image
              className="absolute top-[40px] md:top-[60px] right-[30px] md:right-[50px] w-[80px] md:w-[100px]"
              src={stars}
              alt="stars"
              width={100}
            />
            <Image
              className="absolute bottom-0 right-[50%] translate-x-1/2 w-1/2 max-w-[300px]"
              src={phone}
              alt="stars"
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
