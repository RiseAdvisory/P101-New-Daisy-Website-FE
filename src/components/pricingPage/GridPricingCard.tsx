import { pricingBusinessCard } from '@/lib/constants/pricing/pricingBusiness';
import { ItemCardPricing } from './ItemPricing';

export const GridPricingCard = () => {
  return (
    <>
      <div className="w-full bg-primary h-[420px]"></div>
      <ul className="flex flex-col md:grid md:grid-cols-[repeat(3,1fr)] gap-[25px] -translate-y-[419px] items-start pt-10 pb-[114px] px-16 -mb-[419px]">
        {pricingBusinessCard.map((item, index) => {
          return (
            <ItemCardPricing
              key={index}
              description={item.description}
              price={item.price}
              subtitle={item.subTitle}
              title={item.title}
              options={item.options}
              optionPlus={item.optionPlus}
            />
          );
        })}
      </ul>
    </>
  );
};
