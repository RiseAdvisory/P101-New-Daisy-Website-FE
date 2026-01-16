'use client';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';
import { Separator } from '@/components/ui/separator';
import { baseURLImage } from '@/helpers/axiosConfig';
import { ScrollSectionItem } from '@/types/strapi';

interface MobileScrollSectionProps {
  dataScroll: ScrollSectionItem[] | null;
}

/**
 * Shared mobile scroll section component used across Business, Customer, and Professional pages.
 * Renders a list of scrolling animation sections for mobile devices.
 */
export const MobileScrollSection = ({
  dataScroll,
}: MobileScrollSectionProps) => {
  if (!dataScroll) return null;

  return (
    <div className="md:hidden">
      <ul>
        {dataScroll.map((item, index) => {
          const { attributes } = item;
          return (
            <li key={item.id || index}>
              <NoScrollingAnimationBusiness
                styleBgMobileSecond={attributes.styleBgMobileSecond}
                sizeImage={attributes.styleImageMobile}
                styleFirstBgJSON={attributes.styleFirstBgJSON}
                styleSecondBgJSON={attributes.styleSecondBgJSON}
                imageBg={
                  attributes.firstBg?.data?.[0]?.attributes?.url
                    ? new URL(
                        attributes.firstBg.data[0].attributes.url,
                        baseURLImage,
                      ).href
                    : ''
                }
                imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
                image={
                  attributes.mainImage?.data?.[0]?.attributes?.formats?.large
                    ?.url
                    ? new URL(
                        attributes.mainImage.data[0].attributes.formats.large.url,
                        baseURLImage,
                      ).href
                    : ''
                }
                className="absolute w-full h-full bottom-0 left-10"
                imageBgTwo={
                  attributes.secondBg?.data?.[0]?.attributes?.url
                    ? new URL(
                        attributes.secondBg.data[0].attributes.url,
                        baseURLImage,
                      ).href
                    : ''
                }
                imageClassNameBgSecond="absolute -top-[70px] -right-[70px] w-[200px] h-[200px] rotate-180 scale-x-[-1]"
                description={attributes.infoScroll?.description || ''}
                title={attributes.infoScroll?.text || ''}
                subtitle={attributes.infoScroll?.title || ''}
                list={attributes.infoScroll?.listSub}
                imageWidth={
                  dataScroll[1]?.attributes?.mainImage?.data?.[0]?.attributes
                    ?.formats?.small?.width
                }
                imageHeight={
                  dataScroll[1]?.attributes?.mainImage?.data?.[0]?.attributes
                    ?.formats?.small?.height
                }
              />
              <div className="px-4 bg-primary">
                <Separator className="bg-[#586968]" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
