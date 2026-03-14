'use client';

import { industryStats } from '@/lib/constants/insights/insightData';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export function InsightsPageClient() {
  return (
    <main className="min-h-screen bg-white">
      <WebPageSchema
        title="Salon Industry Statistics 2026"
        description="Comprehensive salon and beauty industry statistics for 2026 including market size, booking trends, no-show rates, AI adoption, and GCC market data."
        url="https://www.jointhedaisy.com/insights"
      />

      {/* Hero */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            Salon Industry Statistics 2026
          </h1>
          <p
            className="text-lg text-[#455150]"
            data-geo-answer="true"
          >
            Comprehensive data and trends shaping the beauty and wellness
            industry. Updated for 2026.
          </p>
        </div>
      </section>

      {/* Stats Sections */}
      {industryStats.map((category, catIndex) => (
        <section
          key={category.category}
          className={catIndex % 2 === 0 ? 'bg-white px-4 py-12' : 'bg-[#F8F5F3] px-4 py-12'}
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-2xl font-bold text-[#172524]">
              {category.category}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl border border-[#E8E9E9] bg-white shadow-sm">
                <caption className="sr-only">
                  {category.category} - Salon Industry Statistics 2026
                </caption>
                <thead>
                  <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                      style={{ width: '15%' }}
                    >
                      Statistic
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-[#586968] uppercase tracking-wider"
                      style={{ width: '20%' }}
                    >
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.stats.map((stat, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F8F5F3]/50'
                      }
                    >
                      <td className="border-b border-[#E8E9E9] px-6 py-4">
                        <data
                          value={stat.value}
                          className="text-xl font-bold text-primary"
                        >
                          {stat.value}
                        </data>
                      </td>
                      <td className="border-b border-[#E8E9E9] px-6 py-4 text-sm text-[#455150]">
                        {stat.description}
                      </td>
                      <td className="border-b border-[#E8E9E9] px-6 py-4">
                        <cite className="text-xs text-[#586968] not-italic">
                          {stat.source}
                        </cite>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology Note */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-4 text-xl font-bold text-[#172524]">
          About This Data
        </h2>
        <p className="text-sm leading-relaxed text-[#586968]">
          Statistics compiled from publicly available industry research, market
          reports, platform data, and consumer surveys. Sources include Grand
          View Research, Allied Market Research, Statista, Euromonitor
          International, Google, Harvard Business Review, BrightLocal, McKinsey,
          and various industry benchmarks. All figures are estimates and may
          vary by region and business type. Last updated March 2026.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Stay Ahead of Industry Trends
          </h2>
          <p className="mb-6 text-white/80">
            Daisy uses AI and data to help beauty businesses grow smarter. Start
            your 14-day free trial.
          </p>
          <a
            href="/get-the-app"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
