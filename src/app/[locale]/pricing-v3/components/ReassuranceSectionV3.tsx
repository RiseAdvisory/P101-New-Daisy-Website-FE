import type { PersonaCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  personaCopy: PersonaCopy;
}

/**
 * Persona-specific reassurance block. Copy adapts to either:
 * - Business: "Built for Owners, Managers, and Reception Teams"
 * - Solo:     "Look Professional Even If You Work Independently"
 */
export const ReassuranceSectionV3 = ({ personaCopy }: Props) => {
  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-5 text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {personaCopy.reassuranceTitle}
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo md:text-lg">
          {personaCopy.reassuranceBody}
        </p>
      </div>
    </section>
  );
};
