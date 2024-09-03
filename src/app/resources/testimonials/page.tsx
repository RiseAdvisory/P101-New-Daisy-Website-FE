'use client';
import { TestimonialsCustomerList } from '@/components/blogPage/testimonialsPage/ListTestimonials';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import Separator from '@/components/separator/Separator';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';

const CustomerTestimonials = () => {
  const [dataTestimonials, setDataTestimonials] = useState<any>();
  const { lang } = useChangeLanguage();
  const { userChange: currentPage, setUserChange } = useMyContext();

  useEffect(() => {
    let endpointTutorialInfos = 'resources-customer-testimonials';

    if (currentPage === '/customer') {
      endpointTutorialInfos = 'resources-testimonial-customers';
    }
    if (currentPage === '/business') {
      endpointTutorialInfos = 'resources-testimonial-businesses';
    }
    if (currentPage === '/professional') {
      endpointTutorialInfos = 'resources-testimonial-independents';
    }

    (async () => {
      const response = await axiosInstance(
        `/${endpointTutorialInfos}?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setDataTestimonials(data?.attributes);
    })();
  }, [lang, currentPage]);
  return (
    <>
      <HeroPage
        bredCrumbTitle={dataTestimonials?.bredCrumbTitle}
        bredCrumbDesription={dataTestimonials?.bredCrumbDesription}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={dataTestimonials?.title}
        description={dataTestimonials?.description}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={dataTestimonials?.secondDescription}
      />
      <TestimonialsCustomerList textMore={dataTestimonials?.textMoreList} />
      <div className="px-4 md:px-20 bg-[#F8F5F3]">
        <Separator className="bg-[#D5D9D9]" />
      </div>
      <OurPartnersSection stylePartners="!bg-[#F8F5F3] !mt-0" />
    </>
  );
};
export default CustomerTestimonials;
