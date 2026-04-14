'use client';

import Link from 'next/link';
import { StatCategory } from '@/lib/constants/insights/insightData';

const uiStrings = {
  en: {
    heroTitle: 'Salon Industry Statistics 2026',
    heroDescription:
      'Comprehensive data and trends shaping the beauty and wellness industry. Updated for 2026.',
    thStatistic: 'Statistic',
    thDescription: 'Description',
    thSource: 'Source',
    captionSuffix: '- Salon Industry Statistics 2026',
    aboutTitle: 'About This Data',
    aboutText:
      'Statistics compiled from publicly available industry research, market reports, platform data, and consumer surveys. Sources include Grand View Research, Allied Market Research, Statista, Euromonitor International, Google, Harvard Business Review, BrightLocal, McKinsey, and various industry benchmarks. All figures are estimates and may vary by region and business type. Last updated March 2026.',
    ctaTitle: 'Stay Ahead of Industry Trends',
    ctaDescription:
      'Daisy uses AI and data to help beauty businesses grow smarter. Start your 14-day free trial.',
    ctaButton: 'Start Free Trial',
  },
  ar: {
    heroTitle: 'إحصائيات قطاع الصالونات 2026',
    heroDescription:
      'بيانات واتجاهات شاملة تشكّل صناعة التجميل والعافية. محدّثة لعام 2026.',
    thStatistic: 'الإحصائية',
    thDescription: 'الوصف',
    thSource: 'المصدر',
    captionSuffix: '- إحصائيات قطاع الصالونات 2026',
    aboutTitle: 'حول هذه البيانات',
    aboutText:
      'إحصائيات مُجمّعة من أبحاث صناعية متاحة للعامة وتقارير سوقية وبيانات منصات واستطلاعات رأي المستهلكين. تشمل المصادر Grand View Research وAllied Market Research وStatista وEuromonitor International وGoogle وHarvard Business Review وBrightLocal وMcKinsey ومعايير صناعية متنوعة. جميع الأرقام تقديرية وقد تختلف حسب المنطقة ونوع النشاط التجاري. آخر تحديث مارس 2026.',
    ctaTitle: 'كن في طليعة اتجاهات القطاع',
    ctaDescription:
      'تستخدم ديزي الذكاء الاصطناعي والبيانات لمساعدة أعمال التجميل على النمو بذكاء. ابدأ تجربتك المجانية لمدة 14 يوماً.',
    ctaButton: 'ابدأ التجربة المجانية',
  },
} as const;

interface InsightsPageClientProps {
  stats: StatCategory[];
  locale: string;
}

export function InsightsPageClient({ stats, locale }: InsightsPageClientProps) {
  const isRtl = locale === 'ar';
  const strings = locale === 'ar' ? uiStrings.ar : uiStrings.en;
  const textAlign = isRtl ? 'text-right' : 'text-left';

  return (
    <main className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            {strings.heroTitle}
          </h1>
          <p
            className="text-lg text-[#455150]"
            data-geo-answer="true"
          >
            {strings.heroDescription}
          </p>
        </div>
      </section>

      {/* Stats Sections */}
      {stats.map((category, catIndex) => (
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
                  {category.category} {strings.captionSuffix}
                </caption>
                <thead>
                  <tr className="border-b border-[#E8E9E9] bg-[#F8F5F3]">
                    <th
                      scope="col"
                      className={`px-6 py-4 ${textAlign} text-sm font-semibold text-[#586968] uppercase tracking-wider`}
                      style={{ width: '15%' }}
                    >
                      {strings.thStatistic}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-4 ${textAlign} text-sm font-semibold text-[#586968] uppercase tracking-wider`}
                    >
                      {strings.thDescription}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-4 ${textAlign} text-sm font-semibold text-[#586968] uppercase tracking-wider`}
                      style={{ width: '20%' }}
                    >
                      {strings.thSource}
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
          {strings.aboutTitle}
        </h2>
        <p className="text-sm leading-relaxed text-[#586968]">
          {strings.aboutText}
        </p>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            {strings.ctaTitle}
          </h2>
          <p className="mb-6 text-white/80">
            {strings.ctaDescription}
          </p>
          <Link
            href={`/${locale}/get-the-app`}
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            {strings.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
