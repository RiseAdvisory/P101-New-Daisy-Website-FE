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
        <p className="text-sm font-semibold tracking-widest text-[#A67F6B] uppercase mb-4">
          {categoryLabel}
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-[#B0C4C3] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-[#A67F6B] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#956F5E] transition-colors"
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
