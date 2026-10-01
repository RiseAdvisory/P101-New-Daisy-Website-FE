import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface SwitchingCTAProps {
  competitorName: string;
  switchingReasons?: string[];
  locale?: string;
}

const uiStrings = {
  en: {
    heading: (name: string) => `Ready to switch from ${name}?`,
    sub: 'Daisy is built for salons that want growth tools, not just a calendar.',
    defaultReasons: [
      'Free migration support to get you started',
      'No lock-in contracts, cancel anytime',
      'AI receptionist live from day one',
      'Dedicated onboarding team for a smooth transition',
    ],
    start: 'Get Started Free',
    sales: 'Talk to Sales',
    fine: 'No credit card required. Free 14-day trial included.',
  },
  ar: {
    heading: (name: string) => `مستعد للانتقال من ${name}؟`,
    sub: 'ديزي مبنية للصالونات التي تريد أدوات نمو، لا مجرد تقويم.',
    defaultReasons: [
      'دعم مجاني لنقل بياناتك',
      'لا عقود ملزمة، ألغِ في أي وقت',
      'موظف الاستقبال الذكي يعمل من اليوم الأول',
      'فريق إعداد مخصص لانتقال سلس',
    ],
    start: 'ابدأ تجربتك المجانية',
    sales: 'تواصل معنا',
    fine: 'لا حاجة لبطاقة ائتمان. تشمل تجربة مجانية لمدة 14 يوماً.',
  },
};

export const SwitchingCTA: FC<SwitchingCTAProps> = ({
  competitorName,
  switchingReasons,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const reasons = switchingReasons ?? t.defaultReasons;

  return (
    <section className="relative overflow-hidden bg-primary py-20 px-4">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primaryBtn/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primaryBtn/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {t.heading(competitorName)}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#D5D9D9]">
          {t.sub}
        </p>

        {/* Switching Reasons */}
        <div className="mx-auto mt-10 grid max-w-lg gap-4 text-start sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                <Check
                  className="h-3 w-3 text-white"
                  strokeWidth={3}
                />
              </div>
              <span className="text-sm leading-relaxed text-white">
                {reason}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-the-app"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:bg-[#F8F5F3] hover:shadow-xl"
          >
            {t.start}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.sales}
          </Link>
        </div>

        <p className="mt-6 text-xs text-[#D5D9D9]">
          {t.fine}
        </p>
      </div>
    </section>
  );
};

export default SwitchingCTA;
