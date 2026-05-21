import { Wrench, Sparkles, Store } from 'lucide-react';
import type { PersonaCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  personaCopy: PersonaCopy;
}

export const HowItWorksV3 = ({ personaCopy }: Props) => {
  const cards = [
    { ...personaCopy.howItWorksCard1, Icon: Wrench },
    { ...personaCopy.howItWorksCard2, Icon: Sparkles },
    { ...personaCopy.howItWorksCard3, Icon: Store },
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {personaCopy.howItWorksTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E8E9E9] bg-[#F8F5F3] p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-[#CAB2A6]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
