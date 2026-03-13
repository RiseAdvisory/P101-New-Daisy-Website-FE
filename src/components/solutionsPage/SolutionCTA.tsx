'use client';

import Link from 'next/link';

interface SolutionCTAProps {
  headline?: string;
  subtext?: string;
}

export function SolutionCTA({
  headline = 'Ready to Transform Your Business?',
  subtext = 'See how Daisy can help you grow. Start your free trial today.',
}: SolutionCTAProps) {
  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#D5D9D9] ltr:font-montserrat md:text-lg">
          {subtext}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-the-app"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primaryBtn px-8 text-base font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Get Started Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
