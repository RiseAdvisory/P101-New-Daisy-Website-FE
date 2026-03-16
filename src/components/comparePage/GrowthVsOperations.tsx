import { FC } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, Settings } from 'lucide-react';

interface GrowthVsOperationsProps {
  competitorName: string;
  competitorGrowthScore?: number;
  heading?: string;
}

const DAISY_GROWTH_SCORE = 9;

export const GrowthVsOperations: FC<GrowthVsOperationsProps> = ({
  competitorName,
  competitorGrowthScore = 3,
  heading,
}) => {
  return (
    <section className="py-16 px-4 bg-[#F8F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          {heading || `Is ${competitorName} an Operations Tool or a Growth Partner?`}
        </h2>
        <p className="mb-10 text-center text-[#586968]">
          There is a fundamental difference in what each platform is designed to
          do
        </p>

        {/* Visual Scale */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#E8E9E9] bg-white p-8 shadow-sm md:p-10">
            {/* Scale Labels */}
            <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-1.5 text-[#586968]">
                <Settings className="h-4 w-4" />
                <span>Operations</span>
              </div>
              <div className="flex items-center gap-1.5 text-primaryBtn">
                <span>Growth</span>
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>

            {/* Scale Bar */}
            <div className="relative mb-10">
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#D5D9D9] via-[#B8C4C3] to-primaryBtn" />

              {/* Scale Numbers */}
              <div className="mt-2.5 flex justify-between px-0.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <span key={n} className="text-[10px] font-medium text-[#586968]">
                    {n}
                  </span>
                ))}
              </div>

              {/* Competitor Marker */}
              <div
                className="absolute -top-1.5 transition-all"
                style={{
                  left: `${(competitorGrowthScore / 10) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full border-[3px] border-[#586968] bg-white shadow-md" />
                  <div className="mt-9 whitespace-nowrap rounded-lg border border-[#E8E9E9] bg-white px-3 py-1.5 shadow-sm">
                    <span className="text-xs font-bold text-[#172524]">
                      {competitorName}
                    </span>
                    <span className="ml-1.5 text-xs font-medium text-[#586968]">
                      {competitorGrowthScore}/10
                    </span>
                  </div>
                </div>
              </div>

              {/* Daisy Marker */}
              <div
                className="absolute -top-1.5 transition-all"
                style={{
                  left: `${(DAISY_GROWTH_SCORE / 10) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full border-[3px] border-primary bg-primary shadow-md shadow-primaryBtn/30" />
                  <div className="mt-9 whitespace-nowrap rounded-lg border border-primaryBtn/20 bg-primary/10 px-3 py-1.5 shadow-sm">
                    <span className="text-xs font-bold text-primary">
                      Daisy
                    </span>
                    <span className="ml-1.5 text-xs font-medium text-primaryBtn">
                      {DAISY_GROWTH_SCORE}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[#D5D9D9] bg-[#F8F5F3] p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#586968]/10">
                    <Settings className="h-4 w-4 text-[#586968]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#172524]">
                    Operations Tool
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#586968]">
                  Helps you manage the business you already have. Scheduling,
                  payments, and basic reporting. You still need to find and
                  retain customers yourself.
                </p>
              </div>

              <div className="rounded-xl border border-primaryBtn/30 bg-primary/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-4 w-4 text-primaryBtn" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">
                    Growth Partner
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#586968]">
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
