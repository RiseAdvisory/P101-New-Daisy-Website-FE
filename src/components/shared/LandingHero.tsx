import Link from 'next/link';
import { AnswerBlock } from '@/components/geo/AnswerBlock';

interface LandingHeroProps {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  answerBlock?: {
    question: string;
    answer: string;
  };
}

export const LandingHero = ({
  categoryLabel,
  headline,
  subHeadline,
  ctaText,
  ctaLink,
  answerBlock,
}: LandingHeroProps) => {
  return (
    <section className="w-full bg-primary pt-32 pb-16 md:pt-40 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-[#F2DAD4] uppercase mb-4">
          {categoryLabel}
        </p>
        <h1 className="text-white text-[32px] leading-10 md:text-[48px] md:leading-[60px] font-semibold mb-6">
          {headline}
        </h1>
        <p className="text-[#D5D9D9] ltr:font-montserrat text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent"
        >
          {ctaText}
        </Link>
        {answerBlock && (
          <div
            className="mt-12 text-left max-w-2xl mx-auto bg-white/10 rounded-xl p-6 [&_h3]:text-white [&_p]:text-[#B0C4C3]"
            data-testid="geo-answer"
          >
            <AnswerBlock
              question={answerBlock.question}
              answer={answerBlock.answer}
              as="h3"
            />
          </div>
        )}
      </div>
    </section>
  );
};
