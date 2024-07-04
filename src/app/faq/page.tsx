'use client';
import { QASection } from '@/components/QASection/QASection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const Faq = () => {
  const [dataFAQ, setDataFAQ] = useState<any>();
  const [pageTypes, setPageTypes] = useState<string>('Business');
  if (typeof window !== 'undefined') {
    const pageType = localStorage.getItem('activePage');

    // if (pageType === '/business') {
    //   return setPageTypes('Business');
    // }
  }
  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance(`/faqs?locale=${lang}`);
        setDataFAQ(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  return (
    <div className="bg-primary">
      <HeroPage
        title={dataFAQ?.title}
        description={dataFAQ?.subtitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        secondDescription={dataFAQ?.description}
      />
      <QASection
        pageType={pageTypes}
        styles="!bg-primary !pt-10"
        stylesAcoordion="!bg-primaryBtn text-white border-none"
        titleHidden={true}
        blockTop="!mt-0"
        stylesAccordionItem="data-[state=open]:bg-white data-[state=open]:text-primary"
        sectionFQ={true}
        titleFraque={dataFAQ?.subtitle}
      />
    </div>
  );
};

export default Faq;
