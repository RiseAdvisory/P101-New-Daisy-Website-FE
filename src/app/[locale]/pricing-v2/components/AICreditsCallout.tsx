import { Sparkles } from 'lucide-react';
import { t } from '@/lib/constants/i18n';
import { AI_CREDITS_CALLOUT } from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  locale: string;
}

export const AICreditsCallout = ({ locale }: Props) => {
  const content = t(AI_CREDITS_CALLOUT, locale);

  return (
    <section className="bg-white px-4 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#F8F5F3] p-10 ring-1 ring-[#E8E9E9] md:p-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-[#CAB2A6]">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
              {content.eyebrow}
            </div>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-[#172524] ltr:font-montserrat rtl:font-cairo md:text-3xl">
              {content.headline}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
              {content.body}
            </p>
            <ul className="flex flex-wrap gap-2">
              {content.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#172524] ring-1 ring-[#E8E9E9] ltr:font-montserrat rtl:font-cairo"
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
