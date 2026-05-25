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
    <span className="text-xs font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo md:text-sm">
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

        {/* Wrapper has NO overflow-x-auto. Per CSS spec, an `overflow-x`
            scroll context implicitly forces `overflow-y` to `auto` as
            well, which made our sticky `<thead>` target a wrapper that
            never scrolls vertically. The browser then degraded sticky to
            relative positioning and applied `top: 150px` as a static
            offset (the symptom: header row visually shifted below the
            first body row). Removing the overflow wrapper lets the
            sticky thead target the document scroll, where it actually
            works. The table is now fully responsive instead of
            horizontally scrollable. */}
        <div className="rounded-2xl border border-[#E8E9E9]">
          <table className="w-full border-collapse">
            <colgroup>
              <col style={{ width: '40%' }} />
              {tiers.map((tier) => (
                <col
                  key={tier.id}
                  style={{ width: `${60 / tiers.length}%` }}
                />
              ))}
            </colgroup>
            {/* Sticky thead pinned just below the global header. Works
                because the wrapper above no longer creates a scroll
                context; sticky targets the document. */}
            <thead className="sticky top-[113px] z-20 md:top-[110px]">
              <tr className="border-b border-[#E8E9E9] bg-white">
                <th className="bg-white px-3 py-4 text-left text-[10px] font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo md:px-5 md:py-5 md:text-xs">
                  {shared.compareFeatureHeader}
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="bg-white px-2 py-4 text-center text-[10px] font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo md:px-3 md:py-5 md:text-xs"
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
                      one category. For the default headline view there's
                      just one block so the header would be noise. */}
                  {categories.length > 1 && (
                    <tr className="border-y border-[#E8E9E9] bg-[#F8F5F3]">
                      <td
                        colSpan={tiers.length + 1}
                        className="px-3 py-3 text-xs font-semibold uppercase tracking-wider text-[#172524] ltr:font-montserrat rtl:font-cairo md:px-5 md:py-4 md:text-sm"
                      >
                        {category.title}
                      </td>
                    </tr>
                  )}
                  {category.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[#E8E9E9] bg-white last:border-b-0"
                    >
                      <td className="px-3 py-3 align-top text-xs md:px-5 md:py-4 md:text-sm">
                        <div className="font-medium text-[#172524] ltr:font-montserrat rtl:font-cairo">
                          {row.name}
                        </div>
                        {row.note && (
                          <div className="mt-1 text-[10px] text-[#455150] ltr:font-montserrat rtl:font-cairo md:mt-1.5 md:text-xs">
                            {row.note}
                          </div>
                        )}
                      </td>
                      {row.values.map((value, j) => (
                        <td
                          key={j}
                          className="px-2 py-3 text-center align-top md:px-3 md:py-4"
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
