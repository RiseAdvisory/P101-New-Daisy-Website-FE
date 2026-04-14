'use client';

import { QAAccordion } from '@/components/qaAccordion/QAAccordion';

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqCategorySectionProps {
  title: string;
  questions: FaqQuestion[];
}

export const FaqCategorySection = ({ title, questions }: FaqCategorySectionProps) => {
  if (questions.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-primary font-bold text-[24px] leading-[32px] md:text-[28px] md:leading-[36px] mb-4">
        {title}
      </h2>
      {questions.map((item, index) => (
        <QAAccordion
          key={index}
          value={`${title}-${index}`}
          item={item}
        />
      ))}
    </section>
  );
};
