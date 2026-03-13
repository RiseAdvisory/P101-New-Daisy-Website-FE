import Image from 'next/image';
import { Separator } from '../ui/separator';
import { TabsFeaturesProfessional } from './TabsFeturesPagw';
import imageLeaf from '../../assets/images/features/business/LeafBusinessFeature.png';
import imageLeafRight from '../../assets/images/features/business/LeafBusinessRight.png';
import imageLeafLast from '../../assets/images/features/business/LeafBusinessBottom.png';

import {
  listManegamentFeatures,
  listMarketingFeatures,
  listPerfomanceFeatures,
} from '@/lib/constants/features/featuresProfessionalList';
import { ColumnTabsDesctop } from './ColumnTabsDesctop';
import { baseURLImage } from '@/helpers/axiosConfig';
import { CategoryData, CategoryKey } from '@/app/features/business/FeaturesBusinessClient';

interface SectionConfig {
  categoryKey: CategoryKey;
  titleField: string;
  optionIndex: number;
  layout: 'vertical' | 'horizontal';
  bgImage: typeof imageLeaf;
  styleLeaf: string;
  itemsList: any;
}

/** Section order: AI, Booking, Communication, Marketing, Payments, Growth, Control, Reports */
const SECTIONS: SectionConfig[] = [
  {
    categoryKey: 'ai',
    titleField: 'aiPowered',
    optionIndex: 0,
    layout: 'vertical',
    bgImage: imageLeafRight,
    styleLeaf: 'absolute bottom-0 right-0 w-[500px]',
    itemsList: listMarketingFeatures,
  },
  {
    categoryKey: 'booking',
    titleField: 'bookingManagement',
    optionIndex: 1,
    layout: 'vertical',
    bgImage: imageLeaf,
    styleLeaf: 'absolute bottom-0 left-0 w-[500px]',
    itemsList: listMarketingFeatures,
  },
  {
    categoryKey: 'communication',
    titleField: 'communication',
    optionIndex: 2,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
    itemsList: listPerfomanceFeatures,
  },
  {
    categoryKey: 'marketing',
    titleField: 'marketingTools',
    optionIndex: 3,
    layout: 'vertical',
    bgImage: imageLeafRight,
    styleLeaf: 'absolute bottom-0 right-0 w-[500px]',
    itemsList: listManegamentFeatures,
  },
  {
    categoryKey: 'payments',
    titleField: 'collectPayments',
    optionIndex: 4,
    layout: 'vertical',
    bgImage: imageLeaf,
    styleLeaf: 'absolute bottom-0 left-0 w-[500px]',
    itemsList: listMarketingFeatures,
  },
  {
    categoryKey: 'growth',
    titleField: 'growth',
    optionIndex: 5,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
    itemsList: listPerfomanceFeatures,
  },
  {
    categoryKey: 'control',
    titleField: 'control',
    optionIndex: 6,
    layout: 'vertical',
    bgImage: imageLeafRight,
    styleLeaf: 'absolute bottom-0 right-0 w-[500px]',
    itemsList: listManegamentFeatures,
  },
  {
    categoryKey: 'reports',
    titleField: 'performanceReports',
    optionIndex: 7,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
    itemsList: listPerfomanceFeatures,
  },
];

export const DesctopViewProfessional = ({
  dataBusiness,
  categoryData,
}: {
  dataBusiness: any;
  categoryData: CategoryData;
}) => {
  const firstImage = new URL(
    dataBusiness?.firstImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const secondImage = new URL(
    dataBusiness?.secondImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const thirdImage = new URL(
    dataBusiness?.thirdImage.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <div className="mx-auto hidden md:block mb-[192px]">
      <ul className="flex space-x-5 rtl:space-x-reverse mx-auto justify-center mt-[66px] ">
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={firstImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.firstImageStyle}
            alt="Daisy business features overview"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={secondImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.secondImageStyle}
            alt="Daisy business features overview"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={thirdImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.thirdImageStyle}
            alt="Daisy business features overview"
            width={1000}
            height={1000}
          />
        </li>
      </ul>
      {SECTIONS.map((section) => {
        const dataList = categoryData[section.categoryKey];
        if (!dataList || dataList.length === 0) return null;

        const sectionData = dataBusiness?.[section.titleField];
        const Component =
          section.layout === 'horizontal'
            ? ColumnTabsDesctop
            : TabsFeaturesProfessional;

        return (
          <div key={section.categoryKey}>
            <div className="px-20">
              <Separator className="my-[164px] bg-[#586968]" />
            </div>
            <Component
              idFeatures={
                dataBusiness?.listBusinessOptions[section.optionIndex]?.path
              }
              title={sectionData?.title}
              description={sectionData?.description}
              bgImage={section.bgImage}
              styleLeaf={section.styleLeaf}
              itemsList={section.itemsList}
              dataList={dataList as any}
            />
          </div>
        );
      })}
    </div>
  );
};
