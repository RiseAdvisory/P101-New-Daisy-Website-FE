import { COMMISSION_CALLOUT } from '@/lib/constants/pricing/v2/pricingV2Shared';

export const CommissionCallout = () => {
  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-primary p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center md:gap-12">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#CAB2A6]">
                {COMMISSION_CALLOUT.eyebrow}
              </div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                {COMMISSION_CALLOUT.headline}
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {COMMISSION_CALLOUT.body}
              </p>
              <p className="mt-4 text-xs text-white/55">
                {COMMISSION_CALLOUT.fineprint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
