'use client';

import { AlertCircle, TrendingUp } from 'lucide-react';

interface OverviewSectionProps {
  overview: string;
  painPoints: string[];
  growthOutcome: string;
}

export function OverviewSection({
  overview,
  painPoints,
  growthOutcome,
}: OverviewSectionProps) {
  return (
    <>
      {/* Overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-lg leading-relaxed text-[#455150]">{overview}</p>
      </section>

      {/* Pain Points */}
      <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
            The Challenges You Face Today
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm leading-relaxed text-[#455150]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Outcome */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border border-primaryBtn/30 bg-primary/5 p-6 md:p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#172524]">
            The Growth Outcome
          </h3>
          <p className="text-base leading-relaxed text-[#455150]">
            {growthOutcome}
          </p>
        </div>
      </section>
    </>
  );
}
