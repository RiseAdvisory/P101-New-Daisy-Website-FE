import Link from 'next/link';
import { localePath } from '@/lib/utils/locale';
import type { SharedCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  locale: string;
  shared: SharedCopy;
}

export const BusinessSalesCTAV3 = ({ locale, shared }: Props) => {
  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#F8F5F3] p-10 ring-1 ring-[#E8E9E9] md:p-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex-1">
            <h2 className="mb-3 text-[24px] font-semibold leading-[30px] text-[#172524] md:text-[32px] md:leading-10">
              {shared.businessSalesCtaTitle}
            </h2>
            <p className="text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
              {shared.businessSalesCtaBody}
            </p>
          </div>
          <Link
            href={localePath('/contact', locale)}
            className="flex-shrink-0 rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90 ltr:font-montserrat rtl:font-cairo"
          >
            {shared.businessSalesCtaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};
