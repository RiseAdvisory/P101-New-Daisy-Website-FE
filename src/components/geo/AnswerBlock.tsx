import { FC, ReactNode } from 'react';

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
    <div>
      <Tag className="mb-3 text-2xl font-bold text-[#172524] md:text-3xl">
        {question}
      </Tag>
      <p
        className="mb-6 text-lg leading-relaxed text-[#455150]"
        data-geo-answer="true"
      >
        {answer}
      </p>
      {children}
    </div>
  );
};

export default AnswerBlock;
