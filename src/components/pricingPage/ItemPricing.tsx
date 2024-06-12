import { CheckIconPricing } from '@/assets/icons/checkIconPricing/CheckIconPricing';
import { Button } from '../ui/button';
import { OptionPricing } from '@/assets/icons/optionPricing/optionPricing';
import { PlusIcon } from 'lucide-react';

export const ItemCardPricing = ({
  title,
  subtitle,
  description,
  price,
  options,
  optionPlus,
}: {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  options: string[];
  optionPlus: string;
}) => {
  return (
    <li className="flex bg-white flex-col justify-center items-center text-center pt-10  border rounded-[16px] overflow-hidden">
      <div className="flex flex-col justify-center items-center mb-6 px-4">
        <h2 className="font-semibold text-2xl text-[#242424] ">{title}</h2>
        <p className="font-inter w-fit text-[12px] mt-3 leading-3 text-[#2543AD] bg-[#E9ECF7] rounded-[20px] px-[9px] py-[4px] font-medium">
          {subtitle}
        </p>
        <p className="font-montserrat text-[#455150] mt-1 text-center leading-[24px] min-h-[72px]">
          {description}
        </p>
        <div className="bg-[#F8F5F3] rounded-[8px] p-4 w-full mt-4">
          <div className="p-4 rounded-[8px] border flex flex-col justify-center text-center bg-white">
            <h2 className="font-bold text-[#242424] text-[32px] leading-10">
              {price !== 'Free' ? `$ ${price}` : price}
            </h2>
            <p className="font-montserrat text-[#242424] text-[12px] leading-[18px]">
              per month / billed monthly
            </p>
            <Button className="font-montserrat font-semibold mt-4 bg-white text-primary hover:text-white hover:bg-primary border border-primary">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex flex-col bg-[#F8F5F3] py-10 space-y-4 w-full px-4 -mx-6">
        {optionPlus !== '' && (
          <>
            <div className="flex justify-center items-center py-3 border bg-white rounded-[8px]">
              <div className="flex justify-center items-center">
                <OptionPricing />
                <span className="ml-2 font-montserrat font-semibold">
                  Everything in the &quot;{optionPlus}&quot;
                </span>
              </div>
            </div>
            <span className="flex justify-center mx-auto p-[18px] rounded-full bg-white w-fit border">
              <PlusIcon />
            </span>
          </>
        )}
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-start items-center p-4 border bg-white rounded-[8px] "
            >
              <span className="w-[22px] mr-[10px]">
                <CheckIconPricing style="mr-[10px]" />
              </span>
              <span className="text-left">{item}</span>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
