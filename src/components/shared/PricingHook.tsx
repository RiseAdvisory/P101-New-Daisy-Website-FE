import Link from 'next/link';

interface PricingHookProps {
  headline: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  pricingLinkText: string;
  pricingLinkHref: string;
}

export const PricingHook = ({
  headline,
  body,
  ctaText,
  ctaLink,
  pricingLinkText,
  pricingLinkHref,
}: PricingHookProps) => {
  return (
    <section className="w-full bg-[#F8F5F3] py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-6">
          {headline}
        </h2>
        <p className="text-[#455150] text-lg leading-relaxed mb-8 text-left rtl:text-right">
          {body}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-primary text-white font-semibold px-[50px] py-[14px] rounded-[9px] text-base hover:bg-white hover:text-primary hover:border hover:border-primary transition-colors border border-transparent mb-4"
        >
          {ctaText}
        </Link>
        <div>
          <Link
            href={pricingLinkHref}
            className="text-[#8B6554] text-sm hover:underline"
          >
            {pricingLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
};
