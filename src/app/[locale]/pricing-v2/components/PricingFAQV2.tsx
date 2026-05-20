import { PRICING_FAQ } from '@/lib/constants/pricing/v2/pricingV2Shared';

/**
 * Native <details> accordion — server-renderable, no client JS, accessible by
 * default. Visitors can expand multiple questions at once if they want.
 */
export const PricingFAQV2 = () => {
  return (
    <section className="bg-primary px-4 py-16 md:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {PRICING_FAQ.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/10 bg-white/[0.04] open:bg-white/[0.07]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-xl text-[#CAB2A6] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-white/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
