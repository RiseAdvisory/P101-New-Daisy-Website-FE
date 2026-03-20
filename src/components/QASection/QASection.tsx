'use client';
import { QAAccordion } from '../qaAccordion/QAAccordion';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

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
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);

  const displayList: Array<{ question: string; answer: string }> = fallbackFaqs ?? [];

  return (
    <div className={`bg-[#F8F5F3] px-4 pb-28 md:pt-[60px] ${styles}`}>
      <FaqSchema faqs={displayList} />
      <h2
        className={cn(
          'text-primary font-bold text-center text-[32px] leading-[40px] pt-[32px] md:text-[40px] md:leading-[50px] md:font-bold',
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
