import Link from 'next/link';
import { GetStartedButton } from './GetStartedButton';

interface InlineCTAProps {
  headline: string;
  ctaText: string;
  ctaLink: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  /**
   * Show the web-app signup CTA next to the existing action. Opt-in rather
   * than automatic so the app-store path is never replaced by accident.
   */
  showGetStarted?: boolean;
  /** Locale for the shared trial line. Defaults to English. */
  locale?: string;
  /** Overrides the shared trial line entirely. */
  trialNote?: string;
}

/**
 * Shared line under the button pair. Kept here rather than in each page's
 * copy file because it describes the offer behind both buttons, not
 * anything page-specific, and it must stay identical wherever the pair
 * appears.
 */
const TRIAL_NOTE = {
  en: '14 days free. No card required.',
  ar: '14 يوماً مجاناً. بدون بطاقة.',
};

export const InlineCTA = ({
  headline,
  ctaText,
  ctaLink,
  secondaryLinkText,
  secondaryLinkHref,
  showGetStarted,
  locale,
  trialNote,
}: InlineCTAProps) => {
  return (
    <section className="w-full bg-primary py-12 md:py-16 px-4 text-center flex flex-col justify-start items-center">
      <p className="text-[#D5D9D9] text-lg md:text-xl mb-6">{headline}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        {showGetStarted && (
          <GetStartedButton className="inline-block rounded-[9px] bg-white px-[50px] py-[14px] text-base font-semibold text-primary transition-colors hover:border hover:border-white hover:bg-primary hover:text-white border border-transparent ltr:font-montserrat rtl:font-cairo" />
        )}
        <Link
          href={ctaLink}
          className={
            showGetStarted
              ? 'inline-block rounded-[9px] border border-white px-[50px] py-[14px] text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary'
              : 'inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent'
          }
        >
          {ctaText}
        </Link>
      </div>
      {/* The trial promise sits under the pair rather than inside one label.
          It is true of both paths, and putting it in a label made the two
          buttons read as the same action. */}
      {showGetStarted && (
        <p className="mt-4 text-sm text-[#D5D9D9]/80 ltr:font-montserrat rtl:font-cairo">
          {trialNote ?? (locale === 'ar' ? TRIAL_NOTE.ar : TRIAL_NOTE.en)}
        </p>
      )}
      {secondaryLinkText && secondaryLinkHref && (
        <div className="mt-4">
          <Link
            href={secondaryLinkHref}
            className="text-[#D5D9D9] text-sm hover:text-white hover:underline"
          >
            {secondaryLinkText}
          </Link>
        </div>
      )}
    </section>
  );
};
