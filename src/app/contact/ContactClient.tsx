'use client';
import { SupportSection } from '@/components/contactsPage/SupportSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { contactPageData } from '@/lib/constants/contactPageData';
import { t } from '@/lib/constants/i18n';

export const ContactClient = ({ lang }: { lang: string }) => {
  const data = t(contactPageData, lang);

  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={true}
        visibleDescriiton={false}
        title={data.heroTitle}
        description={data.heroSubtitle}
        heightScreen={false}
        styleSection="pb-[100px]"
        secondDescription={data.heroDescription}
      />
      <SupportSection contacts={data.listContact} />
    </div>
  );
};
