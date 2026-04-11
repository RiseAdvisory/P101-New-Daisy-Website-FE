'use client';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { TabsFeaturesProfessional } from './TabsFeaturesPage';
import imageLeaf from '../../assets/images/features/business/LeafBusinessFeature.png';
import imageLeafRight from '../../assets/images/features/business/LeafBusinessRight.png';
import imageLeafLast from '../../assets/images/features/business/LeafBusinessBottom.png';

import { ColumnTabsDesktop } from './ColumnTabsDesktop';
import { CategoryData, CategoryKey } from '@/app/[locale]/features/business/FeaturesBusinessClient';

interface SectionConfig {
  categoryKey: CategoryKey;
  titleField: string;
  optionIndex: number;
  layout: 'vertical' | 'horizontal';
  bgImage: typeof imageLeaf;
  styleLeaf: string;
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
  },
  {
    categoryKey: 'booking',
    titleField: 'bookingManagement',
    optionIndex: 1,
    layout: 'vertical',
    bgImage: imageLeaf,
    styleLeaf: 'absolute bottom-0 left-0 w-[500px]',
  },
  {
    categoryKey: 'communication',
    titleField: 'communication',
    optionIndex: 2,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
  },
  {
    categoryKey: 'marketing',
    titleField: 'marketingTools',
    optionIndex: 3,
    layout: 'vertical',
    bgImage: imageLeafRight,
    styleLeaf: 'absolute bottom-0 right-0 w-[500px]',
  },
  {
    categoryKey: 'payments',
    titleField: 'collectPayments',
    optionIndex: 4,
    layout: 'vertical',
    bgImage: imageLeaf,
    styleLeaf: 'absolute bottom-0 left-0 w-[500px]',
  },
  {
    categoryKey: 'growth',
    titleField: 'growth',
    optionIndex: 5,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
  },
  {
    categoryKey: 'control',
    titleField: 'control',
    optionIndex: 6,
    layout: 'vertical',
    bgImage: imageLeafRight,
    styleLeaf: 'absolute bottom-0 right-0 w-[500px]',
  },
  {
    categoryKey: 'reports',
    titleField: 'performanceReports',
    optionIndex: 7,
    layout: 'horizontal',
    bgImage: imageLeafLast,
    styleLeaf: 'absolute top-0 left-0 h-[300px] w-[200px]',
  },
];

export const DesktopViewProfessional = ({
  dataBusiness,
  categoryData,
}: {
  dataBusiness: any;
  categoryData: CategoryData;
}) => {
  return (
    <div className="mx-auto hidden md:block mb-[192px]">
      {SECTIONS.map((section) => {
        const dataList = categoryData[section.categoryKey];
        if (!dataList || dataList.length === 0) return null;

        const sectionData = dataBusiness?.[section.titleField];
        const Component =
          section.layout === 'horizontal'
            ? ColumnTabsDesktop
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
              itemsList={null}
              dataList={dataList}
            />
          </div>
        );
      })}
    </div>
  );
};
