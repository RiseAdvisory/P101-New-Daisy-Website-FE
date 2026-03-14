'use client';

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
}

export const QuickComparisonTable: FC<QuickComparisonTableProps> = ({
  entries,
  competitorName,
}) => {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          Quick Comparison
        </h2>
        <p className="mb-10 text-center text-[#455150]">
          How Daisy and {competitorName} stack up at a glance
        </p>

        <div className="overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-[#E8E9E9] bg-[#F8F5F3]">
            <div className="px-6 py-4 text-sm font-semibold text-[#586968] uppercase tracking-wider">
              Feature
            </div>
            <div className="px-6 py-4 text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Daisy
              </span>
            </div>
            <div className="px-6 py-4 text-center">
              <span className="text-sm font-semibold text-[#586968] uppercase tracking-wider">
                {competitorName}
              </span>
            </div>
          </div>

          {/* Table Body */}
          {entries.map((entry, index) => {
            const daisyWins =
              entry.daisy.toLowerCase() !== entry.competitor.toLowerCase();

            return (
              <div
                key={entry.label}
                className={cn(
                  'grid grid-cols-3 border-b border-[#E8E9E9] last:border-b-0 transition-colors',
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F3]/50',
                )}
              >
                <div className="flex items-center px-6 py-4">
                  <span className="text-sm font-medium text-[#172524]">
                    {entry.label}
                  </span>
                </div>
                <div className="flex items-center justify-center px-6 py-4">
                  <div
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
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
                </div>
                <div className="flex items-center justify-center px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-[#455150]">
                    {entry.competitor === 'No' ||
                    entry.competitor === 'None' ||
                    entry.competitor === 'N/A' ? (
                      <Minus className="h-3.5 w-3.5 text-[#D5D9D9]" />
                    ) : null}
                    {entry.competitor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickComparisonTable;
