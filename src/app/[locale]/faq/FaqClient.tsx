'use client';
import { QASection } from '@/components/QASection/QASection';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { Constants } from '@/helpers/oldApi';
import { useChangePage } from '@/store/currentPage';
import { useEffect, useMemo, useState } from 'react';
import { t } from '@/lib/constants/i18n';
import { faqPageData } from '@/lib/constants/pages/faqPageData';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqClient = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);

  const { page } = useChangePage();
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);

  const data = t(faqPageData, locale);

  // Fetch FAQ items from Laravel backend API
  useEffect(() => {
    const currentPage = page.replace('/', '');
    const pageType = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

    (async () => {
      try {
        const endpoint =
          pageType === 'Business'
            ? `${Constants.BASE_URL}account/faq/vendor/list`
            : `${Constants.BASE_URL}account/faq/customer/list`;

        const res = await fetch(endpoint, {
          cache: 'no-store',
          headers: { 'Content-Language': locale },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.status && data.data) {
            setFaqItems(
              data.data.map((item: { question: string; answer: string }) => ({
                question: item.question,
                answer: item.answer,
              })),
            );
          }
        }
      } catch (error) {
        console.error('Error fetching FAQ items for schema:', error);
      }
    })();
  }, [page, locale]);

  const currentPage = page.replace('/', '');
  const capitalizeFirstLetter = (string: string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="bg-primary">
      <FaqSchema faqs={faqItems} />
      <HeroPage
        title={data.listFaq?.[currentPage]?.title ?? ''}
        description={data.listFaq?.[currentPage]?.subtitle ?? ''}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        secondDescription={data.listFaq?.[currentPage]?.description}
      />
      <QASection
        pageType={capitalizeFirstLetter(currentPage)}
        styles="!bg-primary !pt-10"
        stylesAccordion="!bg-primaryBtn text-white border-none"
        titleHidden={true}
        blockTop="!mt-0"
        stylesAccordionItem="data-[state=open]:bg-white data-[state=open]:text-primary"
        sectionFQ={true}
        titleFraque={data.listFaq?.[currentPage]?.subtitle}
      />
    </div>
  );
};
