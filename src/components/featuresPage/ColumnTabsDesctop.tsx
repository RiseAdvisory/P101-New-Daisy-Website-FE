import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '../separator/Separator';
import Image from 'next/image';
import { useChangeLanguage } from '@/store/language';
import { FeatureListItem } from '@/types/strapi';
import { ImageWrapper } from './ImageWrapper';

interface ColumnTabsDesctopProps {
  itemsList: any;
  styleLeaf: any;
  bgImage: any;
  title: any;
  description: any;
  dataList: FeatureListItem[];
  idFeatures: any;
}

export const ColumnTabsDesctop: React.FC<ColumnTabsDesctopProps> = ({
  itemsList,
  styleLeaf,
  bgImage,
  title,
  description,
  dataList,
  idFeatures,
}) => {
  const [activeTab, setActiveTab] = useState(dataList?.[0]?.attributes.title);
  const { lang } = useChangeLanguage();

  useEffect(() => {
    // Reset active tab when language changes
    setActiveTab(dataList?.[0]?.attributes.title);
  }, [lang, dataList]);

  return (
    <>
      {dataList && (
        <div className="px-[64px] scroll-mt-[120px]" id={idFeatures}>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
              {title}
            </p>
            <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
              {description}
            </h2>
          </div>
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col-reverse bg-primary"
          >
            <TabsList className="flex flex-col justify-center py-6 bg-primary px-2 h-auto w-full">
              <ul className="flex gap-4 bg-primary rounded-xl w-full">
                {dataList.map((item, index) => (
                  <li className="group flex-1 min-w-0" key={index}>
                    <TabsTrigger
                      className="!items-start border border-transparent rtl:!items-end !bg-transparent data-[state=active]:border-white data-[state=active]:!bg-white/10 group hover:!bg-white/10 flex flex-col w-full text-[16px] !p-6 text-[#172524] mt-[10px] justify-start rounded-lg cursor-pointer capitalize py-3 h-full"
                      value={item.attributes.title}
                    >
                      <span className="w-fit text-white ltr:font-montserrat ltr:text-left rtl:font-cairo rtl:text-right font-semibold text-[20px] leading-[30px]">
                        {item.attributes.title}
                      </span>
                      <p className="text-white ltr:text-left rtl:text-right rtl:font-cairo text-wrap">
                        {item.attributes.description}
                      </p>
                    </TabsTrigger>
                  </li>
                ))}
              </ul>
            </TabsList>
            {dataList.map((item, index) => {
              const imageUrl = item.attributes.picture.data[0].attributes.url;

              return (
                <TabsContent
                  key={index}
                  value={item.attributes.title}
                  className="px-2 py-4 w-full mx-auto"
                >
                  <div className="w-full h-[480px] bg-[#435655] rounded-[16px] border border-[#828E8E] relative overflow-hidden">
                    <ImageWrapper
                      src={imageUrl}
                      alt={item.attributes.title}
                      stylePicture={item?.attributes?.stylePicture}
                      sizes="(max-width: 768px) 100vw, 100vw"
                    />
                    <Image
                      src={bgImage}
                      alt=""
                      className={`${styleLeaf} z-10`}
                    />
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      )}
    </>
  );
};
