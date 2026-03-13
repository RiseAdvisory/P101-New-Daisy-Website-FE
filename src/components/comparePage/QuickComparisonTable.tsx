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
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Quick Comparison
        </h2>
        <p className="mb-10 text-center text-gray-600">
          How Daisy and {competitorName} stack up at a glance
        </p>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
            <div className="px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Feature
            </div>
            <div className="px-6 py-4 text-center">
              <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
                Daisy
              </span>
            </div>
            <div className="px-6 py-4 text-center">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
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
                  'grid grid-cols-3 border-b border-gray-100 last:border-b-0 transition-colors',
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50',
                )}
              >
                <div className="flex items-center px-6 py-4">
                  <span className="text-sm font-medium text-gray-900">
                    {entry.label}
                  </span>
                </div>
                <div className="flex items-center justify-center px-6 py-4">
                  <div
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
                      daisyWins
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-700',
                    )}
                  >
                    {daisyWins && (
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    )}
                    {entry.daisy}
                  </div>
                </div>
                <div className="flex items-center justify-center px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    {entry.competitor === 'No' ||
                    entry.competitor === 'None' ||
                    entry.competitor === 'N/A' ? (
                      <Minus className="h-3.5 w-3.5 text-gray-400" />
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
