import Link from 'next/link';

interface InlineCTAProps {
  headline: string;
  ctaText: string;
  ctaLink: string;
}

export const InlineCTA = ({ headline, ctaText, ctaLink }: InlineCTAProps) => {
  return (
    <section className="w-full bg-primary py-12 md:py-16 px-4 text-center">
      <p className="text-[#D5D9D9] text-lg md:text-xl mb-6">{headline}</p>
      <Link
        href={ctaLink}
        className="inline-block bg-white text-primary font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-primary hover:text-white hover:border hover:border-white transition-colors border border-transparent"
      >
        {ctaText}
      </Link>
    </section>
  );
};
