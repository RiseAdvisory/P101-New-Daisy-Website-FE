import Image from 'next/image';
import { Separator } from '../ui/separator';
import leaf from '../../assets/images/features/professional/professional-features-group.png';
import { ImageWrapper } from './ImageWrapper';

export const FeatureProfessionalList = ({
  title,
  desription,
  dataList,
}: {
  title: string;
  desription: string;
  dataList: any;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
        {title}
      </p>
      <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
        {desription}
      </h2>
      <ul className="mt-[48px] mx-auto">
        {dataList &&
          dataList.map((item: any, index: number) => {
            const mobileImageData =
              item.attributes.mobilePicture?.data?.[0]?.attributes;
            const desktopImageData =
              item.attributes.picture.data[0].attributes;
            const imageUrl =
              mobileImageData?.formats?.large?.url ??
              mobileImageData?.url ??
              desktopImageData?.formats?.large?.url ??
              desktopImageData?.url;

            const mobileStyle = item?.attributes?.mobileStylePicture;
            const desktopStyle = item?.attributes?.stylePicture;
            const appliedStyle = mobileImageData ? mobileStyle : desktopStyle;

            return (
              <li key={index} className="text-start mx-auto ">
                <div className="bg-[#586968] h-[320px] relative rounded-[9px] overflow-hidden">
                  <Image
                    src={leaf}
                    alt=""
                    className="absolute bottom-0 left-0 -z-1"
                    width={150}
                    height={240}
                  />
                  <ImageWrapper
                    src={imageUrl}
                    alt={item.attributes.title}
                    stylePicture={appliedStyle}
                    zIndex="z-10"
                  />
                </div>
                <h3 className="mt-6 ltr:font-montserrat font-semibold text-[20px] leading-[30px] text-white">
                  {item.attributes.title}
                </h3>
                <p className="mt-1 text-[#D5D9D9]">
                  {item.attributes.description}
                </p>
                <Separator className="my-20 bg-[#586968]" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
