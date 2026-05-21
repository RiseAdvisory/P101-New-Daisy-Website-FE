import { t } from '@/lib/constants/i18n';
import { COMMISSION_CALLOUT } from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  locale: string;
}

export const CommissionCallout = ({ locale }: Props) => {
  const content = t(COMMISSION_CALLOUT, locale);

  return (
    <section className="bg-[#F8F5F3] px-4 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-primary p-10 text-white md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-center md:gap-14">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#CAB2A6] ltr:font-montserrat rtl:font-cairo">
                {content.eyebrow}
              </div>
              <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
                {content.headline}
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/80 ltr:font-montserrat rtl:font-cairo md:text-lg">
                {content.body}
              </p>
              <p className="mt-5 text-xs text-white/55 ltr:font-montserrat rtl:font-cairo">
                {content.fineprint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
