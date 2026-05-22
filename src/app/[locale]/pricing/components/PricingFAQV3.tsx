import { t } from '@/lib/constants/i18n';
import {
  SHARED_FAQ,
  BUSINESS_ONLY_FAQ,
  PROFESSIONAL_ONLY_FAQ,
  type Persona,
  type SharedCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  persona: Persona;
  locale: string;
  shared: SharedCopy;
}

export const PricingFAQV3 = ({ persona, locale, shared }: Props) => {
  const faqs = [...t(SHARED_FAQ, locale)];
  faqs.push(
    persona === 'business'
      ? t(BUSINESS_ONLY_FAQ, locale)
      : t(PROFESSIONAL_ONLY_FAQ, locale),
  );

  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {shared.faqHeading}
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-[#E8E9E9] bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-xl text-[#8B6554] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
