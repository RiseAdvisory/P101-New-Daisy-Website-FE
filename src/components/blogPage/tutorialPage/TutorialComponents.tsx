'use client';
import { useChooseTabs } from '@/store/chooseTabs';
import DOMPurify from 'dompurify';

interface TutorialTabItem {
  attributes: {
    titleListTab: string;
    fieldInfoTabs: string;
  };
}

interface TutorialComponentsProps {
  tabsList: TutorialTabItem[];
}

export const TutorialComponents = ({ tabsList }: TutorialComponentsProps) => {
  const { tabsTitle } = useChooseTabs();
  const currentItem = tabsList?.filter(
    (item) => item.attributes.titleListTab === tabsTitle,
  );

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: currentItem?.[0]?.attributes?.fieldInfoTabs
          ? DOMPurify.sanitize(currentItem[0].attributes.fieldInfoTabs)
          : '',
      }}
    />
  );
};
