'use client';
import { QASection } from '@/components/QASection/QASection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Faq = () => {
  const [dataFAQ, setDataFAQ] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance('/faqs');
        setDataFAQ(response?.data.data[0].attributes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
        pageType="Business"
        styles="!bg-primary !pt-10"
        stylesAcoordion="!bg-primaryBtn text-white border-none"
        titleHidden={true}
        blockTop="!mt-0"
        stylesAccordionItem=""
      />
    </div>
  );
};

export default Faq;
