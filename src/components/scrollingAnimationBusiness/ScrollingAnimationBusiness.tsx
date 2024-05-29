import { CheckIcon } from '@/assets/icons/checkIcon/CheckIcon';
import { Button } from '../ui/button';

export const ScrollingAnimationBusiness = ({ title }: { title: string }) => {
  return (
    <div className="pt-16">
      <div className="w-full bg-primaryBtn rounded-[9px] h-[300px]"></div>
      <h5 className="text-[#F2DAD4] pt-8 text-base leading-6">FEATURES</h5>
      <h2 className="pt-2 text-white leading-10 text-3xl">{title}</h2>
      <p className="font-montserrat font-medium text-xl pt-3 leading-8 text-[#D5D9D9]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <Button
        variant="navigation"
        className="w-full justify-start mt-8 font-semibold text-base text-[#D5D9D9]"
      >
        <CheckIcon className="mr-2" />
        Lorem ipsum dolor
      </Button>
      <Button
        variant="navigation"
        className="w-full justify-start mt-4 font-semibold text-base text-[#D5D9D9]"
      >
        <CheckIcon className="mr-2" />
        Lorem ipsum dolor
      </Button>
      <Button
        variant="navigation"
        className="w-full justify-start mt-4 font-semibold text-base text-[#D5D9D9]"
      >
        <CheckIcon className="mr-2" />
        Lorem ipsum dolor
      </Button>
    </div>
  );
};
