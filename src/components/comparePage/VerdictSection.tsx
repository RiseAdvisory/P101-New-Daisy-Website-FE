'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

interface VerdictSectionProps {
  verdict: string;
  daisyReasons: string[];
  competitorReasons: string[];
  competitorName: string;
}

export const VerdictSection: FC<VerdictSectionProps> = ({
  verdict,
  daisyReasons,
  competitorReasons,
  competitorName,
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        {/* Verdict Box */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-teal-50 p-8 shadow-sm md:p-10">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
              Our Verdict
            </span>
          </div>
          <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
            {verdict}
          </p>
        </div>

        {/* Choose If Lists */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Choose Daisy */}
          <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <ArrowRight className="h-5 w-5 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Choose Daisy if...
              </h3>
            </div>
            <ul className="space-y-4">
              {daisyReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check
                      className="h-3 w-3 text-green-700"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-700">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Choose Competitor */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <ArrowRight className="h-5 w-5 text-gray-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Choose {competitorName} if...
              </h3>
            </div>
            <ul className="space-y-4">
              {competitorReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <Check
                      className="h-3 w-3 text-gray-500"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-600">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerdictSection;
