'use client';
import { Constants } from '@/helpers/oldApi';
import { QAAccordion } from '../qaAccordion/QAAccordion';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

enum PageType {
  Customer = 'Customer',
  Business = 'Business',
  Professional = 'Professional',
}

interface FAQ {
  id: number;
  type: string;
  question: string;
  answer: string;
}
interface GetFAQResponse {
  status: boolean;
  message: string;
  error: any[];
  data: FAQ[];
}

interface FallbackFaq {
  question: string;
  answer: string;
}

export const QASection = ({
  pageType = 'Customer',
  styles,
  stylesAcoordion,
  stylesAccordionItem,
  titleHidden,
  blockTop,
  sectionFQ,
  titleFraque,
  fallbackFaqs,
}: {
  pageType: any;
  styles?: string;
  stylesAcoordion?: string;
  stylesAccordionItem?: string;
  titleHidden?: boolean;
  blockTop?: string;
  sectionFQ?: boolean;
  titleFraque?: string;
  fallbackFaqs?: FallbackFaq[];
}) => {
  const [qaList, setQAlist] = useState<FAQ[] | null>(null);
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  useEffect(() => {
    (async () => {
      const data = await getData(locale, pageType);
      setQAlist(data);
    })();
  }, [pageType, locale]);

  // Use API data when available; fall back to static FAQs if API returns empty or fails
  const hasApiData = qaList && qaList.length > 0;
  const displayList: Array<{ question: string; answer: string }> = hasApiData
    ? qaList
    : (fallbackFaqs ?? []);

  return (
    <div className={`bg-[#F8F5F3] px-4 pb-28 md:pt-[200px] ${styles}`}>
      <FaqSchema faqs={displayList} />
      <h2
        className={cn(
          'text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px] md:text-[40px] md:leading-[50px] md:font-bold',
          { hidden: titleHidden },
        )}
      >
        {titleFraque}
      </h2>
      <div className={`md:mt-12 md:px-[288px] ${blockTop}`}>
        {displayList.map((item: any, index: number) => {
          return (
            <QAAccordion
              key={index}
              value={index}
              item={item}
              stylesAcoordion={stylesAcoordion}
              stylesAccordionItem={stylesAccordionItem}
              sectionFQ={sectionFQ}
            />
          );
        })}
      </div>
    </div>
  );
};

const getData = async (locale: string, pageType: PageType) => {
  try {
    const res =
      pageType == PageType.Business || pageType == PageType.Professional
        ? await fetch(`${Constants.BASE_URL}account/faq/vendor/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          })
        : await fetch(`${Constants.BASE_URL}account/faq/customer/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: GetFAQResponse = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data;
  } catch {
    // Error fetching FAQ data
    return null;
  }
};
