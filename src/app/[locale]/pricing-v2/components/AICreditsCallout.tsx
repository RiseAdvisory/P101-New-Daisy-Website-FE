import { Sparkles } from 'lucide-react';
import { AI_CREDITS_CALLOUT } from '@/lib/constants/pricing/v2/pricingV2Shared';

export const AICreditsCallout = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-[#F8F5F3] to-white p-8 ring-1 ring-[#E8E9E9] md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#172524] text-[#CAB2A6]">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#8B6554]">
              {AI_CREDITS_CALLOUT.eyebrow}
            </div>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#172524] md:text-3xl">
              {AI_CREDITS_CALLOUT.headline}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-[#455150]">
              {AI_CREDITS_CALLOUT.body}
            </p>
            <ul className="flex flex-wrap gap-2">
              {AI_CREDITS_CALLOUT.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#172524] ring-1 ring-[#E8E9E9]"
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
