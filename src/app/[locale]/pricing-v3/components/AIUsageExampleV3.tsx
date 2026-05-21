import type {
  PersonaCopy,
  SharedCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  shared: SharedCopy;
  personaCopy: PersonaCopy;
}

export const AIUsageExampleV3 = ({ shared, personaCopy }: Props) => {
  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-5 text-center text-[24px] font-semibold leading-[30px] text-[#172524] md:text-[32px] md:leading-10">
          {personaCopy.aiUsageSectionTitle}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {personaCopy.aiUsageBody}
        </p>

        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#E8E9E9]">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-[#E8E9E9]">
                <td className="py-4 pl-6 pr-4 text-sm font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo md:w-1/3">
                  {shared.aiExampleTrial}
                </td>
                <td className="py-4 pl-2 pr-6 text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                  {shared.aiExampleTrialValue}
                </td>
              </tr>
              <tr className="border-b border-[#E8E9E9]">
                <td className="py-4 pl-6 pr-4 text-sm font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
                  {shared.aiExampleAfter}
                </td>
                <td className="py-4 pl-2 pr-6 text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                  {shared.aiExampleAfterValue}
                </td>
              </tr>
              <tr>
                <td className="py-4 pl-6 pr-4 text-sm font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
                  {shared.aiExampleBestFor}
                </td>
                <td className="py-4 pl-2 pr-6 text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                  {shared.aiExampleBestForValue}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
