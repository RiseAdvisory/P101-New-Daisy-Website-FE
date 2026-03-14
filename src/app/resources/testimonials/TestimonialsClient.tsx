'use client';
import { TestimonialsCustomerList } from '@/components/blogPage/testimonialsPage/ListTestimonials';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import Separator from '@/components/separator/Separator';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';
import { useMyContext } from '@/app/MyContext';
import { testimonialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

export const TestimonialsClient = () => {
  const [dataTestimonials, setDataTestimonials] = useState<{
    bredCrumbTitle?: string;
    bredCrumbDesription?: string;
    title: string;
    description: string;
    secondDescription?: string;
    textMoreList?: string;
  } | null>(null);
  const { lang } = useChangeLanguage();
  const { userChange: currentPage } = useMyContext();

  useEffect(() => {
    let type = 'customer';
    if (currentPage === '/customer') type = 'customer';
    if (currentPage === '/business') type = 'business';
    if (currentPage === '/professional') type = 'professional';

    const heroData = testimonialsHeroData[type];
    if (heroData) {
      setDataTestimonials(t(heroData, lang));
    }
  }, [lang, currentPage]);

  return (
    <>
      <HeroPage
        bredCrumbTitle={dataTestimonials?.bredCrumbTitle}
        bredCrumbDesription={dataTestimonials?.bredCrumbDesription}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={dataTestimonials?.title ?? ''}
        description={dataTestimonials?.description ?? ''}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={dataTestimonials?.secondDescription}
      />
      <TestimonialsCustomerList
        textMore={dataTestimonials?.textMoreList ?? ''}
      />
      <div className="px-4 md:px-20 bg-[#F8F5F3]">
        <Separator className="bg-[#D5D9D9]" />
      </div>
      <OurPartnersSection stylePartners="!bg-[#F8F5F3] !mt-0" />
    </>
  );
};
