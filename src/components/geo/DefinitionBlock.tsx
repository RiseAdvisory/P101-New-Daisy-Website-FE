import { FC, ReactNode } from 'react';

const uiStrings = {
  en: { whatIs: (term: string) => `What is ${term}?` },
  ar: { whatIs: (term: string) => `ما هو ${term}؟` },
};

interface DefinitionBlockProps {
  term: string;
  definition: string;
  children?: ReactNode;
  locale?: string;
}

export const DefinitionBlock: FC<DefinitionBlockProps> = ({
  term,
  definition,
  children,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-2xl font-bold text-[#172524] md:text-3xl">
        {t.whatIs(term)}
      </h2>
      <p className="mb-4 text-lg leading-relaxed text-[#455150]">
        <dfn className="not-italic font-semibold text-[#172524]">{term}</dfn>{' '}
        {definition}
      </p>
      {children}
    </div>
  );
};

export default DefinitionBlock;
