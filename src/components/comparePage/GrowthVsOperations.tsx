'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, Settings } from 'lucide-react';

interface GrowthVsOperationsProps {
  competitorName: string;
  competitorGrowthScore?: number;
}

const DAISY_GROWTH_SCORE = 9;

export const GrowthVsOperations: FC<GrowthVsOperationsProps> = ({
  competitorName,
  competitorGrowthScore = 3,
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Operations Tool vs Growth Partner
        </h2>
        <p className="mb-12 text-center text-gray-600">
          There is a fundamental difference in what each platform is designed to
          do
        </p>

        {/* Visual Scale */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            {/* Scale Labels */}
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-gray-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <Settings className="h-3.5 w-3.5" />
                <span>Operations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Growth</span>
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Scale Bar */}
            <div className="relative mb-8">
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-200 via-gray-200 to-green-200" />

              {/* Scale Numbers */}
              <div className="mt-2 flex justify-between px-0.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <span key={n} className="text-[10px] text-gray-300">
                    {n}
                  </span>
                ))}
              </div>

              {/* Competitor Marker */}
              <div
                className="absolute -top-1 transition-all"
                style={{
                  left: `${(competitorGrowthScore / 10) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-400 bg-white shadow-sm" />
                  <div className="mt-8 whitespace-nowrap rounded-lg bg-gray-100 px-3 py-1.5">
                    <span className="text-xs font-bold text-gray-600">
                      {competitorName}
                    </span>
                    <span className="ml-1.5 text-xs text-gray-400">
                      {competitorGrowthScore}/10
                    </span>
                  </div>
                </div>
              </div>

              {/* Daisy Marker */}
              <div
                className="absolute -top-1 transition-all"
                style={{
                  left: `${(DAISY_GROWTH_SCORE / 10) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-5 w-5 rounded-full border-2 border-green-500 bg-green-500 shadow-sm shadow-green-200" />
                  <div className="mt-8 whitespace-nowrap rounded-lg bg-green-100 px-3 py-1.5">
                    <span className="text-xs font-bold text-green-700">
                      Daisy
                    </span>
                    <span className="ml-1.5 text-xs text-green-500">
                      {DAISY_GROWTH_SCORE}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <h3 className="text-sm font-bold text-gray-700">
                    Operations Tool
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Helps you manage the business you already have. Scheduling,
                  payments, and basic reporting. You still need to find and
                  retain customers yourself.
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <h3 className="text-sm font-bold text-green-800">
                    Growth Partner
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Actively helps you grow. AI-powered customer acquisition,
                  cashback loyalty, smart marketing automation, and an always-on
                  receptionist that converts inquiries into bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthVsOperations;
