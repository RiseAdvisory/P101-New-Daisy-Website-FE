import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';
import {
  FeatureCategory,
  FeatureCategoryRow,
  UIStrings,
} from '@/lib/constants/pricing/v2/pricingV2Shared';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

interface Props {
  categories: FeatureCategory[];
  tiers: PricingTierV2[];
  ui: UIStrings;
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

/**
 * Single <table> with <colgroup> so every section uses identical column
 * widths. Category title cells inside the table use a sticky inner <span>
 * so the category label stays anchored to the visible edge of the scroll
 * container even as the table scrolls horizontally on narrow viewports.
 *
 * Mobile swipe hint: rendered above the table with `sticky top-[100px]`
 * (the fixed-header offset) so it pins to the viewport while the user
 * scrolls the page vertically through the table content.
 */
export const ComparisonTableV2 = ({ categories, tiers, ui }: Props) => {
  return (
    <section className="bg-white px-4 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#172524] ltr:font-montserrat rtl:font-cairo md:text-4xl">
            {ui.compareHeading}
          </h2>
          <p className="mt-4 text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
            {ui.compareSubheading}
          </p>
        </div>

        {/* Mobile-only sticky swipe hint above the table. Pins below the
            fixed header (top-[100px]) while scrolling vertically through
            the table content. Hidden on md+ where horizontal scroll isn't
            needed. */}
        <div className="sticky top-[100px] z-30 -mx-4 mb-4 border-y border-[#E8E9E9] bg-white/95 px-4 py-2.5 text-center text-xs font-medium text-[#586968] backdrop-blur ltr:font-montserrat rtl:font-cairo md:hidden">
          {ui.compareSwipeHint}
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
                <th className="sticky left-0 z-10 bg-white py-5 pl-5 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo rtl:left-auto rtl:right-0 rtl:text-right">
                  {ui.compareFeatureHeader}
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="px-3 py-5 text-center text-xs font-semibold uppercase tracking-wider text-[#455150] ltr:font-montserrat rtl:font-cairo"
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
                      className="py-4 text-sm font-semibold uppercase tracking-wider text-[#172524] ltr:font-montserrat rtl:font-cairo"
                    >
                      {/* Inner sticky span keeps the category title pinned
                          to the visible edge during horizontal scroll. */}
                      <span className="sticky left-5 inline-block rtl:left-auto rtl:right-5">
                        {category.title}
                      </span>
                    </td>
                  </tr>
                  {category.rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[#E8E9E9] bg-white last:border-b-0"
                    >
                      <td className="sticky left-0 z-10 bg-white py-4 pl-5 pr-4 align-top text-sm rtl:left-auto rtl:right-0 rtl:pl-4 rtl:pr-5 rtl:text-right">
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
      </div>
    </section>
  );
};
