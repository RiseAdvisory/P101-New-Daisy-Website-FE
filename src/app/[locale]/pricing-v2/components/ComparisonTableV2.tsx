import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';
import {
  FeatureCategory,
  FeatureCategoryRow,
} from '@/lib/constants/pricing/v2/pricingV2Shared';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

interface Props {
  categories: FeatureCategory[];
  tiers: PricingTierV2[];
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
  return <span className="text-sm font-semibold text-[#172524]">{value}</span>;
};

/**
 * Single <table> with <colgroup> so every section uses identical column
 * widths — categories used to be nested sub-tables which let each section
 * compute its own column widths, making the columns "dance" vertically as
 * you scrolled. One table, one set of <col>s, columns stay locked.
 *
 * Category headers are full-width <tr colspan> rows rather than <details>
 * wrappers (<details> can't legally contain <tr> rows in HTML, which is
 * what caused the nested-table workaround in the first place).
 *
 * The first column ("Feature") is sticky so feature names stay visible
 * while the tier columns scroll horizontally on narrow viewports.
 */
export const ComparisonTableV2 = ({ categories, tiers }: Props) => {
  return (
    <section className="bg-white px-4 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#172524] md:text-4xl">
            Compare every feature
          </h2>
          <p className="mt-3 text-base text-[#455150]">
            Every feature, every tier, side by side.
          </p>
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
                <th className="sticky left-0 z-10 bg-white py-4 pl-5 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-[#455150]">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#455150]"
                  >
                    {tier.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Fragment key={category.title}>
                  <tr className="border-y border-[#E8E9E9] bg-[#F8F5F3]">
                    <td
                      colSpan={tiers.length + 1}
                      className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#172524]"
                    >
                      {category.title}
                    </td>
                  </tr>
                  {category.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[#E8E9E9] bg-white last:border-b-0"
                    >
                      <td className="sticky left-0 z-10 bg-white py-3 pl-5 pr-4 text-sm align-top">
                        <div className="font-medium text-[#172524]">
                          {row.name}
                        </div>
                        {row.note && (
                          <div className="mt-1 text-xs text-[#455150]">
                            {row.note}
                          </div>
                        )}
                      </td>
                      {row.values.map((value, j) => (
                        <td
                          key={j}
                          className="px-3 py-3 text-center align-top"
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

        {/* Mobile hint: with a 6-tier-wide table the horizontal scroll isn't
            obvious. Only render on mobile-width viewports. */}
        <p className="mt-3 text-center text-xs text-[#586968] md:hidden">
          Swipe to compare tiers →
        </p>
      </div>
    </section>
  );
};
