import { listImageBusinessDesctop } from '@/lib/constants/features/listBusinessOptions';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { TabsFeaturesProfessional } from './TabsFeturesPagw';
import { listMarketingFeatures } from '@/lib/constants/features/featuresProfessionalList';

export const DesctopViewProfessional = () => {
  return (
    <div className="mx-auto">
      <ul className="flex space-x-5 mx-auto justify-center mt-[66px]">
        {listImageBusinessDesctop.map((item, index) => {
          return (
            <li
              key={index}
              className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]"
            >
              <Image src={item.src} className={item.style} alt="item" />
            </li>
          );
        })}
      </ul>
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional itemsList={listMarketingFeatures} />
    </div>
  );
};
