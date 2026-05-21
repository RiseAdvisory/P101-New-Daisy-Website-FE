import { Check, X } from 'lucide-react';
import type {
  PersonaCopy,
  SharedCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  shared: SharedCopy;
  personaCopy: PersonaCopy;
}

export const WhyDaisyV3 = ({ shared, personaCopy }: Props) => {
  const rows = [
    { generic: shared.whyDaisyRow1Generic, daisy: shared.whyDaisyRow1Daisy },
    { generic: shared.whyDaisyRow2Generic, daisy: shared.whyDaisyRow2Daisy },
    { generic: shared.whyDaisyRow3Generic, daisy: shared.whyDaisyRow3Daisy },
    { generic: shared.whyDaisyRow4Generic, daisy: shared.whyDaisyRow4Daisy },
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-5 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {personaCopy.whyDaisyTitle}
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {personaCopy.whyDaisyBody}
        </p>

        <div className="overflow-hidden rounded-2xl ring-1 ring-[#E8E9E9]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#586968] ltr:font-montserrat rtl:font-cairo">
                  {shared.whyDaisyComparisonGeneric}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
                  {shared.whyDaisyComparisonDaisy}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i !== rows.length - 1 ? 'border-b border-[#E8E9E9]' : ''
                  }
                >
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 text-sm text-[#586968] ltr:font-montserrat rtl:font-cairo">
                      <X
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ABB4B3]"
                        aria-hidden="true"
                      />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 text-sm font-medium text-[#172524] ltr:font-montserrat rtl:font-cairo">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8B6554]"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{row.daisy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
