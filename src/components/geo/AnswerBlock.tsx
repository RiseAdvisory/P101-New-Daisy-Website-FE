import { FC, ReactNode } from 'react';
import { renderSafeHtml } from '@/lib/utils/htmlContent';

interface AnswerBlockProps {
  question: string;
  answer: string;
  children?: ReactNode;
  as?: 'h2' | 'h3';
}

export const AnswerBlock: FC<AnswerBlockProps> = ({
  question,
  answer,
  children,
  as: Tag = 'h2',
}) => {
  return (
    <div className="text-center">
      <Tag className="mb-3 text-2xl font-bold text-[#172524] md:text-3xl">
        {question}
      </Tag>
      <p
        className="mb-6 text-lg leading-relaxed text-[#455150] text-center"
        data-geo-answer="true"
      >
        <span
          dangerouslySetInnerHTML={{
            __html: renderSafeHtml(answer),
          }}
        />
      </p>
      {children}
    </div>
  );
};

export default AnswerBlock;
