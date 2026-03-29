'use client';
import { Separator } from '@/components/ui/separator';
import { FeatureProfessionalList } from './FeatureProfessionalList';
import { CategoryData, CategoryKey } from '@/app/[locale]/features/business/FeaturesBusinessClient';

interface MobileSectionConfig {
  categoryKey: CategoryKey;
  titleField: string;
}

/** Section order: AI, Booking, Communication, Marketing, Payments, Growth, Control, Reports */
const SECTIONS: MobileSectionConfig[] = [
  { categoryKey: 'ai', titleField: 'aiPowered' },
  { categoryKey: 'booking', titleField: 'bookingManagement' },
  { categoryKey: 'communication', titleField: 'communication' },
  { categoryKey: 'marketing', titleField: 'marketingTools' },
  { categoryKey: 'payments', titleField: 'collectPayments' },
  { categoryKey: 'growth', titleField: 'growth' },
  { categoryKey: 'control', titleField: 'control' },
  { categoryKey: 'reports', titleField: 'performanceReports' },
];

export const MobileViewProfessional = ({
  dataFeatures,
  categoryData,
}: {
  dataFeatures: any;
  categoryData: CategoryData;
}) => {
  return (
    <div className="md:hidden">
      <Separator className="bg-[#586968] my-20" />
      {SECTIONS.map((section) => {
        const dataList = categoryData[section.categoryKey];
        if (!dataList || dataList.length === 0) return null;

        const sectionData = dataFeatures?.[section.titleField];
        return (
          <FeatureProfessionalList
            key={section.categoryKey}
            title={sectionData?.title}
            desription={sectionData?.description}
            dataList={dataList}
          />
        );
      })}
    </div>
  );
};
