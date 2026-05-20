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
        className="mx-auto h-5 w-5 text-[#CAB2A6]"
        strokeWidth={2.5}
        aria-label="Included"
      />
    );
  }
  if (value === undefined || value === false) {
    return (
      <Minus
        className="mx-auto h-5 w-5 text-white/30"
        aria-label="Not included"
      />
    );
  }
  return (
    <span className="text-sm font-semibold text-white">{value}</span>
  );
};

/**
 * Categorized comparison table. Uses native <details> elements so categories
 * collapse/expand without JS — server-renderable, accessible, crawler-friendly.
 * Each category is open by default so visitors see the full structure;
 * mobile-conscious users can collapse what they don't care about.
 */
export const ComparisonTableV2 = ({ categories, tiers }: Props) => {
  return (
    <section className="bg-primary px-4 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Compare every feature
          </h2>
          <p className="mt-3 text-base text-white/65">
            Click a category to expand or collapse it.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-primary py-4 pl-4 pr-6 text-left text-sm font-semibold uppercase tracking-wide text-white/55">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className="px-4 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white/55"
                    style={{ minWidth: '140px' }}
                  >
                    {tier.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <CategoryGroup
                  key={category.title}
                  category={category}
                  tiersCount={tiers.length}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CategoryGroup = ({
  category,
  tiersCount,
}: {
  category: FeatureCategory;
  tiersCount: number;
}) => {
  return (
    <>
      <tr>
        <td colSpan={tiersCount + 1} className="px-0 pt-8">
          <details open className="group">
            <summary className="flex cursor-pointer items-center justify-between border-b border-white/10 bg-white/[0.07] px-4 py-3 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
              <span>{category.title}</span>
              <span
                aria-hidden="true"
                className="text-[#CAB2A6] transition-transform group-open:rotate-90"
              >
                ›
              </span>
            </summary>
            <div className="border-l border-r border-b border-white/10">
              <table className="w-full border-separate border-spacing-0">
                <tbody>
                  {category.rows.map((row, i) => (
                    <tr
                      key={row.name}
                      className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.03]'}
                    >
                      <td className="py-3 pl-4 pr-6 text-sm text-white">
                        <div className="font-medium">{row.name}</div>
                        {row.note && (
                          <div className="mt-1 text-xs text-white/55">
                            {row.note}
                          </div>
                        )}
                      </td>
                      {row.values.map((value, j) => (
                        <td
                          key={j}
                          className="px-4 py-3 text-center"
                          style={{ minWidth: '140px' }}
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </td>
      </tr>
    </>
  );
};
