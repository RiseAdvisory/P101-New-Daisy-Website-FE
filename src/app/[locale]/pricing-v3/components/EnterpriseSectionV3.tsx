import Link from 'next/link';
import { localePath } from '@/lib/utils/locale';
import type { SharedCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  locale: string;
  shared: SharedCopy;
}

/**
 * Business-only enterprise / "talk to sales" panel. Reinstates the
 * Enterprise section the live /pricing page has and which the first v3
 * cut had dropped. Dark primary card with a single Contact Us CTA.
 */
export const EnterpriseSectionV3 = ({ locale, shared }: Props) => {
  return (
    <section className="bg-white px-4 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex flex-col items-center gap-8 rounded-2xl bg-primary px-8 py-12 text-center md:flex-row md:items-center md:gap-12 md:px-16 md:py-14 md:text-left rtl:md:text-right">
        <div className="flex-1">
          <h2 className="text-[28px] font-bold leading-9 text-white md:text-[32px] md:leading-10">
            {shared.enterpriseTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#EAECEC] ltr:font-montserrat rtl:font-cairo md:mt-4">
            {shared.enterpriseBody}
          </p>
        </div>
        <Link
          href={localePath('/contact', locale)}
          className="flex-shrink-0 rounded-lg border border-white/40 bg-white/5 px-10 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 ltr:font-montserrat rtl:font-cairo"
        >
          {shared.enterpriseButton}
        </Link>
      </div>
    </section>
  );
};
