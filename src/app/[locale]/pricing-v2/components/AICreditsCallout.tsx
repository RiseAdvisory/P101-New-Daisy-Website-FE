import { Sparkles } from 'lucide-react';
import { AI_CREDITS_CALLOUT } from '@/lib/constants/pricing/v2/pricingV2Shared';

export const AICreditsCallout = () => {
  return (
    <section className="bg-primary px-4 py-16 md:px-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white/[0.04] p-8 ring-1 ring-white/10 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CAB2A6]/15 text-[#CAB2A6] ring-1 ring-[#CAB2A6]/20">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#CAB2A6]">
              {AI_CREDITS_CALLOUT.eyebrow}
            </div>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-white md:text-3xl">
              {AI_CREDITS_CALLOUT.headline}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-white/75">
              {AI_CREDITS_CALLOUT.body}
            </p>
            <ul className="flex flex-wrap gap-2">
              {AI_CREDITS_CALLOUT.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
