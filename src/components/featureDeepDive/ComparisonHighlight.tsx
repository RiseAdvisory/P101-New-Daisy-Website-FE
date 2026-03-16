
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  area: string;
  daisy: string;
  typical: string;
}

interface ComparisonHighlightProps {
  comparisons: ComparisonRow[];
}

export function ComparisonHighlight({
  comparisons,
}: ComparisonHighlightProps) {
  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          Daisy vs. Typical Solutions
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-[#455150]">
          See how Daisy&apos;s approach compares to what most platforms offer.
        </p>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-2xl border border-[#E8E9E9] md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8F5F3]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#172524]">
                  Area
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" /> Daisy
                  </span>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#455150]">
                  <span className="flex items-center gap-2">
                    <X className="h-4 w-4 text-red-400" /> Typical Software
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#172524]">
                    {row.area}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#455150]">
                    {row.daisy}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#455150]">
                    {row.typical}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden">
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E8E9E9] bg-white p-4"
            >
              <h3 className="mb-3 text-sm font-semibold text-[#172524]">
                {row.area}
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-medium text-primary">Daisy</p>
                  <p className="mt-1 text-sm text-[#455150]">{row.daisy}</p>
                </div>
                <div className="rounded-lg bg-red-50 p-3">
                  <p className="text-xs font-medium text-red-500">
                    Typical Software
                  </p>
                  <p className="mt-1 text-sm text-[#455150]">{row.typical}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
