'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { ContactSupport } from '@/assets/icons/contactSupport/ContactSupport';
import { SelectTutorials } from './SelectTutorial';
import { Button } from '@/components/ui/button';
import Separator from '@/components/separator/Separator';
import { ArrowUp } from 'lucide-react';
import { TabsTutorials } from '@/components/tabsTutorials/TabsTutorials';
import { TutorialComponents } from './TutorialComponents';
import { useChangeLanguage } from '@/store/language';
import axiosInstance from '@/helpers/axiosConfig';
import { useRouter } from 'next/navigation';
import { useMyContext } from '@/app/MyContext';
export const TutorialSection = ({
  setScroll,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const withBlock = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [listDataTabs, setListDataTabs] = useState<any>();
  const [tutorialInfo, setTutorialInfo] = useState<any>();
  const [dataTabs, setDataTabs] = useState<any>();
  const router = useRouter();
  const { lang } = useChangeLanguage();
  const { userChange: currentPage, setState } = useMyContext();

  useEffect(() => {
    // `/resources-tutorial-infos?locale=${lang}`
    let endpointTutorialInfos = 'resources-tutorial-infos';
    let endpointTutorialTabs = 'resorce-tutorial-tabs';
    if (currentPage === '/customer') {
      endpointTutorialInfos = 'resources-tutorial-info-customers';
      endpointTutorialTabs = 'resource-tutorial-tab-customers';
    }
    if (currentPage === '/business') {
      endpointTutorialInfos = 'resources-tutorial-info-businesses';
      endpointTutorialTabs = 'resource-tutorial-tab-businesses';
    }
    if (currentPage === '/professional') {
      endpointTutorialInfos = 'resources-tutorial-info-independents';
      endpointTutorialTabs = 'resource-tutorial-tab-independents';
    }

    (async () => {
      const tutorialInfo = await axiosInstance.get(
        `/${endpointTutorialInfos}?locale=${lang}`,
      );
      const response = await axiosInstance.get(
        `/${endpointTutorialTabs}?locale=${lang}`,
      );
      const [dataInfo] = tutorialInfo?.data?.data;
      const [data] = response?.data?.data;
      setListDataTabs(response?.data.data);
      setDataTabs(data?.attributes);
      setTutorialInfo(dataInfo?.attributes);
    })();
  }, [lang, currentPage]);

  useEffect(() => {
    setScroll(blockRef);
  }, [setScroll]);

  const scrollToTopOfBlock = () => {
    if (blockRef.current) {
      blockRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (withBlock.current) {
      const { top } = withBlock.current.getBoundingClientRect();
      if (top < 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  const sortingListDataTabs = listDataTabs?.sort(
    (a: any, b: any) => b.attributes.sortId - a.attributes.sortId,
  );

  return (
    <div
      className="bg-[#F8F5F3] px-4 pt-10 md:pt-20 md:pr-16 pb-28 md:flex"
      ref={blockRef}
    >
      <div className="hidden md:block" ref={withBlock}>
        <TabsTutorials
          dataTabs={dataTabs}
          listDataTabs={sortingListDataTabs}
          infoTutorials={tutorialInfo}
        />
      </div>
      <div className="flex items-center md:hidden" ref={withBlock}>
        <SelectTutorials tabsList={sortingListDataTabs} />
      </div>
      <Separator className="my-8 bg-[#E8E9E9] md:hidden" />
      <div className="block md:hidden">
        <TutorialComponents tabsList={sortingListDataTabs} />
      </div>
      {showScroll && (
        <div className="fixed bottom-4 right-4 flex flex-col">
          <Button
            className="px-[14px] py-[25px] text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A] mb-4 md:hidden"
            onClick={() => router.push('/contact')}
          >
            <ContactSupport style="#2E4342" />
          </Button>
          <button
            onClick={scrollToTopOfBlock}
            className="p-4 text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A]"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
