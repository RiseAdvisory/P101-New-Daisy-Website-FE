'use client';
import { Fragment, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import type {
  FeatureCategory,
  FeatureCategoryRow,
} from '@/lib/constants/pricing/v3/pricingV3Types';
import type {
  PricingTierV3,
} from '@/lib/constants/pricing/v3/pricingV3Business';
import type { SharedCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  defaultCategories: FeatureCategory[];
  fullCategories: FeatureCategory[];
  tiers: PricingTierV3[];
  shared: SharedCopy;
}

const renderValue = (value: FeatureCategoryRow['values'][number]) => {
  if (value === true) {
    return (
      <Check
        className="mx-auto h-5 w-5 text-[#8B6554]"
        strokeWidth={2.5}
        aria-label="Included"
      />
    );
  }
  if (value === undefined || value === false) {
    return (
      <Minus
        className="mx-auto h-5 w-5 text-[#ABB4B3]"
        aria-label="Not included"
      />
    );
  }
  return (
    <span className="text-sm font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
      {value}
    </span>
  );
};

export const ComparisonTableV3 = ({
  defaultCategories,
  fullCategories,
  tiers,
  shared,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const categories = expanded ? fullCategories : defaultCategories;

  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
            {shared.compareHeading}
          </h2>
          <p className="mt-4 text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
            {shared.compareSubheading}
          </p>
        </div>

        <div className="sticky top-[110px] z-30 -mx-4 mb-4 border-y border-[#E8E9E9] bg-white/95 px-4 py-2.5 text-center text-xs font-medium text-[#586968] backdrop-blur ltr:font-montserrat rtl:font-cairo md:hidden">
          {shared.compareSwipeHint}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E8E9E9]">
          <table className="w-full min-w-[600px] border-collapse">
            <colgroup>
              <col style={{ width: '34%' }} />
              {tiers.map((tier) => (
                <col
                  key={tier.id}
                  style={{ width: `${66 / tiers.length}%` }}
                />
              ))}
            </colgroup>
            <thead>
              <tr className="border-b border-[#E8E9E9] bg-white">
                <th className="sticky left-0 z-10 bg-white py-5 pl-5 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo">
                  {shared.compareFeatureHeader}
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="px-3 py-5 text-center text-xs font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo"
                  >
                    {tier.displayName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Fragment key={category.title}>
                  {/* Only show the section header band when there's more than
                      one category — for the default headline view there's
                      just one block so the header would be noise. */}
                  {categories.length > 1 && (
                    <tr className="border-y border-[#E8E9E9] bg-[#F8F5F3]">
                      <td
                        colSpan={tiers.length + 1}
                        className="py-4 text-sm font-semibold uppercase tracking-wider text-[#172524] ltr:font-montserrat rtl:font-cairo"
                      >
                        <span className="sticky left-5 inline-block">
                          {category.title}
                        </span>
                      </td>
                    </tr>
                  )}
                  {category.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[#E8E9E9] bg-white last:border-b-0"
                    >
                      <td className="sticky left-0 z-10 bg-white py-4 pl-5 pr-4 align-top text-sm">
                        <div className="font-medium text-[#172524] ltr:font-montserrat rtl:font-cairo">
                          {row.name}
                        </div>
                        {row.note && (
                          <div className="mt-1.5 text-xs text-[#455150] ltr:font-montserrat rtl:font-cairo">
                            {row.note}
                          </div>
                        )}
                      </td>
                      {row.values.map((value, j) => (
                        <td
                          key={j}
                          className="px-3 py-4 text-center align-top"
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-lg border border-[#172524] px-6 py-2.5 text-sm font-semibold text-[#172524] transition-colors hover:bg-[#F8F5F3] ltr:font-montserrat rtl:font-cairo"
          >
            {expanded ? shared.compareViewLessLabel : shared.compareViewAllLabel}
          </button>
        </div>
      </div>
    </section>
  );
};
