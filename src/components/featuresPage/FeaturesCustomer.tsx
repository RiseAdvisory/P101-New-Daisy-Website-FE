import Image from 'next/image';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';
import imageLeaf from '../../assets/images/features/feature-group-component.webp';

export const FeaturesCustomerItem = ({
  item,
  index,
}: {
  item: any;
  index?: number;
}) => {
  const imageUrl = item.picture?.data?.[0]?.attributes?.url;
  const desktopImage = imageUrl || imageLeaf.src;

  const mobileImageUrl = item.mobilePicture?.data?.[0]?.attributes?.url;
  const mobileImage = mobileImageUrl || null;

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

        <div
          className="w-full flex-1 min-h-[250px] md:min-h-[300px] overflow-hidden"
          style={{ padding: '24px', ...item?.stylePicture }}
        >
          {mobileImage ? (
            <>
              <Image
                className="hidden md:block w-full h-full"
                width={1000}
                height={1000}
                src={desktopImage}
                style={{ objectFit: 'contain' }}
                alt={item.title}
              />
              <Image
                className="md:hidden w-full h-full"
                width={1000}
                height={1000}
                src={mobileImage}
                style={{ objectFit: 'contain', ...(item?.mobileStylePicture ?? {}) }}
                alt={item.title}
              />
            </>
          ) : (
            <Image
              className="w-full h-full"
              width={1000}
              height={1000}
              src={desktopImage}
              style={{ objectFit: 'contain' }}
              alt={item.title}
            />
          )}
        </div>
      </li>
      <div className="mx-4 last:hidden md:hidden">
        <Separator className="bg-[#586968] w-full mt-20 " />
      </div>
    </>
  );
};
