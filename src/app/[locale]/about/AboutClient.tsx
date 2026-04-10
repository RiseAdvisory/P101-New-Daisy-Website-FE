'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { MetaTechBadge } from '@/components/shared/MetaTechBadge';
import Link from 'next/link';
import { useState } from 'react';
import { t } from '@/lib/constants/i18n';
import { aboutPageData } from '@/lib/constants/pages/aboutPageData';
import { localePath } from '@/lib/utils/locale';

export const AboutClient = ({ lang }: { lang: string }) => {
  const [scroll, setScroll] = useState(null);

  const data = t(aboutPageData, lang);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        title={data.heroTitle}
        description={data.heroSubtitle}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        titleScroll={data.titleScroll}
      />
      <OurMissing setScroll={setScroll} heroAbout={data} />
      <OurValue heroAbout={data} />

      {/* Partnerships Section */}
      <div className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center bg-primary rounded-[16px] px-6 py-12 md:px-12">
          <h2 className="text-white font-semibold text-[28px] md:text-[36px] leading-tight mb-4">
            {data.partnershipsTitle}
          </h2>
          <p className="text-[#D5D9D9] text-lg leading-relaxed ltr:font-montserrat mb-6">
            {data.partnershipsDescription}
          </p>
          <MetaTechBadge locale={lang} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-primary mx-4 md:mx-16 mb-16 rounded-[16px]">
        <h2 className="text-white font-semibold text-[28px] md:text-[36px] leading-tight text-center">
          {data.ctaTitle}
        </h2>
        <Link href={localePath('/start-free-trial/business', lang)}>
          <button className="mt-8 py-[14px] px-[40px] md:px-[60px] bg-white text-primary hover:bg-[#F8F5F3] font-semibold text-lg rounded-[8px] transition-colors">
            {data.ctaButton}
          </button>
        </Link>
      </div>
    </>
  );
};
