import { FC } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickComparisonEntry {
  label: string;
  daisy: string;
  competitor: string;
}

interface QuickComparisonTableProps {
  entries: QuickComparisonEntry[];
  competitorName: string;
  heading?: string;
  locale?: string;
}

const uiStrings = {
  en: {
    howCompare: (name: string) => `How Does Daisy Compare to ${name}?`,
    stackUp: (name: string) =>
      `How Daisy and ${name} stack up at a glance`,
    caption: (name: string) =>
      `Daisy vs ${name} Quick Comparison ${new Date().getFullYear()}`,
    feature: 'Feature',
  },
  ar: {
    howCompare: (name: string) => `كيف تتفوق ديزي مقارنة بـ ${name}؟`,
    stackUp: (name: string) =>
      `كيف تقارن ديزي و${name} في لمحة سريعة`,
    caption: (name: string) =>
      `مقارنة سريعة بين ديزي و${name} ${new Date().getFullYear()}`,
    feature: 'الميزة',
  },
};

export const QuickComparisonTable: FC<QuickComparisonTableProps> = ({
  entries,
  competitorName,
  heading,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const isRtl = locale === 'ar';

  return (
    <section className="py-16 px-4" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          {heading || t.howCompare(competitorName)}
        </h2>
        <p
          className="mb-10 text-center text-[#455150]"
          data-geo-answer="true"
        >
          {t.stackUp(competitorName)}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
            <caption className="sr-only">
              {t.caption(competitorName)}
            </caption>
            <thead>
              <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                >
                  {t.feature}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-bold text-primary uppercase tracking-wider"
                >
                  Daisy
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-[#586968] uppercase tracking-wider"
                >
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => {
                const daisyWins =
                  entry.daisy.toLowerCase() !== entry.competitor.toLowerCase();

                return (
                  <tr
                    key={entry.label}
                    className={cn(
                      'border-b border-[#E8E9E9] last:border-b-0 transition-colors',
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F3]/50',
                    )}
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-[#172524]">
                        {entry.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
                          daisyWins
                            ? 'bg-primary/5 text-primary'
                            : 'bg-[#F8F5F3] text-[#455150]',
                        )}
                      >
                        {daisyWins && (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                        {entry.daisy}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1.5 text-sm text-[#455150]">
                        {entry.competitor === 'No' ||
                        entry.competitor === 'None' ||
                        entry.competitor === 'N/A' ? (
                          <Minus className="h-3.5 w-3.5 text-[#D5D9D9]" />
                        ) : null}
                        {entry.competitor}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default QuickComparisonTable;
