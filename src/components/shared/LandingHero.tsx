import Link from 'next/link';
import { AnswerBlock } from '@/components/geo/AnswerBlock';
import { MetaTechBadge } from '@/components/shared/MetaTechBadge';
import { GetStartedButton } from '@/components/shared/GetStartedButton';

interface LandingHeroProps {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  trustLine?: string;
  showMetaBadge?: boolean;
  locale?: string;
  /**
   * Send the hero CTA to web signup with attribution attached, instead of
   * to ctaLink.
   *
   * The hero is a single button, so it does not need the destination
   * labelling the paired CTAs lower down the page use to tell each other
   * apart. It is also the most valuable slot on the page, and pointing it
   * at the app stores both drops the trial offer and routes past the
   * signup funnel, where store redirects destroy attribution.
   */
  ctaToSignup?: boolean;
  answerBlock?: {
    question: string;
    answer: string;
  };
}

const CTA_CLASS =
  'inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent';

export const LandingHero = ({
  categoryLabel,
  headline,
  subHeadline,
  ctaText,
  ctaLink,
  trustLine,
  showMetaBadge,
  locale,
  ctaToSignup,
  answerBlock,
}: LandingHeroProps) => {
  return (
    <section className="w-full bg-primary pt-24 pb-16 md:pt-24 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-sm font-semibold tracking-widest text-[#F2DAD4] uppercase mb-4">
          {categoryLabel}
        </p>
        <h1 className="text-white text-[32px] leading-10 md:text-[48px] md:leading-[60px] font-semibold mb-6 whitespace-pre-line">
          {headline}
        </h1>
        <p className="text-[#D5D9D9] ltr:font-montserrat text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>
        {ctaToSignup ? (
          <GetStartedButton className={CTA_CLASS} label={ctaText} />
        ) : (
          <Link href={ctaLink} className={CTA_CLASS}>
            {ctaText}
          </Link>
        )}
        {trustLine && (
          <p className="text-white/80 text-base mt-4">{trustLine}</p>
        )}
        {showMetaBadge && (
          <div className="mt-6">
            <MetaTechBadge locale={locale} />
          </div>
        )}
        {answerBlock && (
          <div
            className="mt-12 text-left rtl:text-right max-w-2xl mx-auto bg-white/10 rounded-xl p-6 [&_h3]:text-white [&_p]:text-[#B0C4C3]"
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
