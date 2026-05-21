import { t } from '@/lib/constants/i18n';
import {
  ADD_ONS,
  UIStrings,
} from '@/lib/constants/pricing/v2/pricingV2Shared';

interface Props {
  locale: string;
  ui: UIStrings;
}

export const AddOnsTableV2 = ({ locale, ui }: Props) => {
  const addOns = t(ADD_ONS, locale);

  return (
    <section className="bg-white px-4 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#172524] ltr:font-montserrat rtl:font-cairo md:text-3xl">
            {ui.addOnsHeading}
          </h2>
          <p className="mt-4 text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
            {ui.addOnsSubheading}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#F8F5F3] ring-1 ring-[#E8E9E9]">
          {addOns.map((addon, i) => (
            <div
              key={addon.name}
              className={`grid gap-4 px-7 py-5 md:grid-cols-[1.2fr_2fr] md:items-center md:gap-10 ${
                i !== addOns.length - 1 ? 'border-b border-[#E8E9E9]' : ''
              }`}
            >
              <div className="font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
                {addon.name}
              </div>
              <div className="text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                {addon.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
