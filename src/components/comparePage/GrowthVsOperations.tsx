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
    <section className="py-16 px-4 bg-[#F8F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          Operations Tool vs Growth Partner
        </h2>
        <p className="mb-12 text-center text-[#455150]">
          There is a fundamental difference in what each platform is designed to
          do
        </p>

        {/* Visual Scale */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm md:p-8">
            {/* Scale Labels */}
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-[#D5D9D9] uppercase tracking-wider">
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
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#E8E9E9] via-[#E8E9E9] to-primaryBtn" />

              {/* Scale Numbers */}
              <div className="mt-2 flex justify-between px-0.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <span key={n} className="text-[10px] text-[#D5D9D9]">
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
                  <div className="h-5 w-5 rounded-full border-2 border-[#D5D9D9] bg-white shadow-sm" />
                  <div className="mt-8 whitespace-nowrap rounded-lg bg-[#F8F5F3] px-3 py-1.5">
                    <span className="text-xs font-bold text-[#455150]">
                      {competitorName}
                    </span>
                    <span className="ml-1.5 text-xs text-[#D5D9D9]">
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
                  <div className="h-5 w-5 rounded-full border-2 border-primary bg-primary shadow-sm shadow-primaryBtn/20" />
                  <div className="mt-8 whitespace-nowrap rounded-lg bg-primary/10 px-3 py-1.5">
                    <span className="text-xs font-bold text-primary">
                      Daisy
                    </span>
                    <span className="ml-1.5 text-xs text-primaryBtn">
                      {DAISY_GROWTH_SCORE}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[#E8E9E9] bg-[#F8F5F3] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-[#586968]" />
                  <h3 className="text-sm font-bold text-[#455150]">
                    Operations Tool
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#455150]">
                  Helps you manage the business you already have. Scheduling,
                  payments, and basic reporting. You still need to find and
                  retain customers yourself.
                </p>
              </div>

              <div className="rounded-xl border border-primaryBtn/30 bg-primary/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primaryBtn" />
                  <h3 className="text-sm font-bold text-primary">
                    Growth Partner
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#455150]">
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
