import Link from 'next/link';

interface SolutionCTAProps {
  headline?: string;
  subtext?: string;
  locale?: string;
}

const uiStrings = {
  en: {
    headline: 'Ready to Transform Your Business?',
    subtext: 'See how Daisy can help you grow. Start your free trial today.',
    start: 'Get Started Free',
    pricing: 'View Pricing',
  },
  ar: {
    headline: 'مستعد لتطوير عملك؟',
    subtext: 'اكتشف كيف تساعدك ديزي على النمو. ابدأ تجربتك المجانية اليوم.',
    start: 'ابدأ تجربتك المجانية',
    pricing: 'عرض الأسعار',
  },
};

export function SolutionCTA({ headline, subtext, locale = 'en' }: SolutionCTAProps) {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
          {headline ?? t.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#D5D9D9] ltr:font-montserrat md:text-lg">
          {subtext ?? t.subtext}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-the-app"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primaryBtn px-8 text-base font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            {t.start}
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            {t.pricing}
          </Link>
        </div>
      </div>
    </section>
  );
}
