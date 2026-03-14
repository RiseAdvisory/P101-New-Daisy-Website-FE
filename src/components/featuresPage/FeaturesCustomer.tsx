import Image from 'next/image';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';
import imageLeaf from '../../assets/images/features/Group.png';
import { baseURLImage } from '@/helpers/axiosConfig';

export const FeaturesCustomerItem = ({
  item,
  index,
}: {
  item: any;
  index?: number;
}) => {
  const image = new URL(item.picture.data?.[0].attributes.url, baseURLImage)
    .href;
  const desktopImage = image.includes('undefined') ? imageLeaf.src : image;

  const mobileImageUrl = item.mobilePicture?.data?.[0]?.attributes?.url;
  const hasMobileImage = mobileImageUrl && !mobileImageUrl.includes('undefined');
  const mobileImage = hasMobileImage
    ? new URL(mobileImageUrl, baseURLImage).href
    : null;

  return (
    <>
      <li
        className={cn(
          'md:rounded-[16px] md:border border-t border-b border-[#828E8E] bg-[#FFFFFF1A] px-4 pt-6  text-white mt-20 md:flex md:flex-col',
          {
            'mt-0 md:mt-20': index === 0,
          },
        )}
      >
        <h2
          className={
            'ltr:font-montserrat font-semibold text-[20px] leading-[30px] mb-1'
          }
        >
          {item.title}
        </h2>
        <p className="mb-6">{item.description}</p>
        <Separator
          className="bg-[#828E8E] w-full -mx-4"
          style={{ width: 'calc(100% + 32px)' }}
        />

        {mobileImage ? (
          <>
            <Image
              className={cn(`mx-auto ${item.style} hidden md:block`)}
              width={1000}
              height={1000}
              src={desktopImage}
              style={item?.sizePicture}
              alt={item.title}
            />
            <Image
              className={cn(`mx-auto ${item.style} md:hidden`)}
              width={1000}
              height={1000}
              src={mobileImage}
              style={item?.mobileStylePicture ?? item?.sizePicture}
              alt={item.title}
            />
          </>
        ) : (
          <Image
            className={cn(`mx-auto ${item.style}`)}
            width={1000}
            height={1000}
            src={desktopImage}
            style={item?.sizePicture}
            alt={item.title}
          />
        )}
      </li>
      <div className="mx-4 last:hidden md:hidden">
        <Separator className="bg-[#586968] w-full mt-20 " />
      </div>
    </>
  );
};
