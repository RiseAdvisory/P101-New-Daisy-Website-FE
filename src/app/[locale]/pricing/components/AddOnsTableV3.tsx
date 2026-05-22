import { t } from '@/lib/constants/i18n';
import {
  ADD_ONS,
  type Persona,
  type SharedCopy,
} from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  persona: Persona;
  locale: string;
  shared: SharedCopy;
}

export const AddOnsTableV3 = ({ persona, locale, shared }: Props) => {
  const categories = t(ADD_ONS[persona], locale);

  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-[24px] font-semibold leading-[30px] text-[#172524] md:text-[32px] md:leading-10">
            {shared.addOnsHeading}
          </h2>
          <p className="mt-4 text-base text-[#455150] ltr:font-montserrat rtl:font-cairo">
            {shared.addOnsSubheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#E8E9E9]"
            >
              <h3 className="border-b border-[#E8E9E9] bg-[#F8F5F3] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#8B6554] ltr:font-montserrat rtl:font-cairo">
                {category.title}
              </h3>
              <ul>
                {category.rows.map((row, i) => (
                  <li
                    key={row.name}
                    className={`grid gap-2 px-6 py-4 md:grid-cols-[1.2fr_2fr] md:items-center md:gap-6 ${
                      i !== category.rows.length - 1
                        ? 'border-b border-[#E8E9E9]'
                        : ''
                    }`}
                  >
                    <div className="font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
                      {row.name}
                    </div>
                    <div className="text-sm text-[#455150] ltr:font-montserrat rtl:font-cairo">
                      {row.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
