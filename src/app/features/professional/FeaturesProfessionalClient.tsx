'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useChangeLanguage } from '@/store/language';
import { useState } from 'react';
import { t } from '@/lib/constants/i18n';
import { featuresProfessionalData } from '@/lib/constants/features/featuresProfessionalList';

export const FeaturesProfessionalClient = () => {
  const [scroll, setScroll] = useState(null);
  const { lang } = useChangeLanguage();
  const data = t(featuresProfessionalData, lang);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll={data.titleScroll}
        description={data.title}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList
        setScroll={setScroll}
        dataListBlog={data.featureList}
      />
      <SignUpBlog />
    </div>
  );
};
