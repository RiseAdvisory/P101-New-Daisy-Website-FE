import { t } from '@/lib/constants/i18n';
import {
  PRICING_FAQ,
  UIStrings,
} from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  locale: string;
  ui: UIStrings;
}

export const PricingFAQV2 = ({ locale, ui }: Props) => {
  const faqs = t(PRICING_FAQ, locale);

  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#172524] md:text-4xl">
          {ui.faqHeading}
        </h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-[#E8E9E9] bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-[#172524] [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-xl text-[#8B6554] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
