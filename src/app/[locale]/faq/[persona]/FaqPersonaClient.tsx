'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { FaqCategorySection } from '@/components/faqPage/FaqCategorySection';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { faqPageData, FaqPersona } from '@/lib/constants/pages/faqPageData';
import { blogCTAData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname } from '@/lib/utils/locale';

interface FaqPersonaClientProps {
  persona: FaqPersona;
}

export const FaqPersonaClient = ({ persona }: FaqPersonaClientProps) => {
  const fullPathname = usePathname();
  const locale = useMemo(
    () => getLocaleFromPathname(fullPathname),
    [fullPathname],
  );
  const data = t(faqPageData, locale);
  const personaData = data[persona];
  const ctaData = t(blogCTAData, locale);

  return (
    <div className="w-full">
      <HeroPage
        title={personaData.heroTitle}
        description={personaData.heroSubtitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        secondDescription={personaData.heroDescription}
      />
      <div className="bg-[#F8F5F3] px-4 py-12 md:px-[288px] md:py-16">
        {personaData.categories.map((category, index) => (
          <FaqCategorySection
            key={index}
            title={category.title}
            questions={category.questions}
          />
        ))}
      </div>
      <CreatePerfect
        textCreate={ctaData.textCreate}
        textDownload={ctaData.textDownload}
      />
    </div>
  );
};
