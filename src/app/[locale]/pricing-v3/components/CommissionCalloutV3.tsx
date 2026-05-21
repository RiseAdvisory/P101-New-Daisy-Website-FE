import type { PersonaCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  personaCopy: PersonaCopy;
}

export const CommissionCalloutV3 = ({ personaCopy }: Props) => {
  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-primary p-10 text-white md:p-14">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center md:gap-12">
          <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
            {personaCopy.commissionTitle}
          </h2>
          <div>
            <p className="mb-4 text-base leading-relaxed text-white/85 ltr:font-montserrat rtl:font-cairo md:text-lg">
              {personaCopy.commissionBody1}
            </p>
            <p className="text-base leading-relaxed text-white/85 ltr:font-montserrat rtl:font-cairo md:text-lg">
              {personaCopy.commissionBody2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
