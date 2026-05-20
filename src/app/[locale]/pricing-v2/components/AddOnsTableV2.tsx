import { ADD_ONS } from '@/lib/constants/pricing/v2/pricingV2Shared';

export const AddOnsTableV2 = () => {
  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#172524] md:text-3xl">
            Add-ons
          </h2>
          <p className="mt-3 text-base text-[#455150]">
            Extra capacity and one-off services, billed alongside your subscription.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#E8E9E9]">
          {ADD_ONS.map((addon, i) => (
            <div
              key={addon.name}
              className={`grid gap-4 px-6 py-4 md:grid-cols-[1.2fr_2fr] md:items-center md:gap-8 ${
                i !== ADD_ONS.length - 1 ? 'border-b border-[#E8E9E9]' : ''
              }`}
            >
              <div className="font-semibold text-[#172524]">{addon.name}</div>
              <div className="text-sm text-[#455150]">{addon.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
