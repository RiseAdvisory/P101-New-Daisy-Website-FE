import { PricingOption } from '@/lib/constants/pricing/prisingProfessional';
import { ItemCardPricing } from './ItemPricing';

export const GridPricingCard = ({
  listChangePricing,
  chechedAnnualy,
}: {
  listChangePricing: PricingOption[];
  chechedAnnualy: boolean;
}) => {
  return (
    <>
      <div className="w-full bg-primary h-[420px] md:block hidden"></div>
      <ul className="flex flex-col md:grid md:grid-cols-[repeat(3,1fr)] gap-[25px] -translate-y-0 md:-translate-y-[401px] items-start  pb-[114px] px-4 md:px-16 md:-mb-[419px]">
        {listChangePricing.map((item, index: number) => {
          return (
            <ItemCardPricing
              chechedAnnualy={chechedAnnualy}
              key={index}
              description={item.description}
              price={item.price}
              subtitle={item.subTitle}
              title={item.title}
              options={item.options}
              optionPlus={item.optionPlus}
              priceYear={item.priceYear}
            />
          );
        })}
      </ul>
    </>
  );
};
