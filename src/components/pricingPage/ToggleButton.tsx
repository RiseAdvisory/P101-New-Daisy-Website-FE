import { Button } from '../ui/button';
import { useCalculate } from '@/store/calculateResult';

export const ToggleButton = ({
  setHomeService,
  homeService,
  name,
  textButton,
  minimumTierIndex = 0,
}: {
  setHomeService: any;
  homeService: any;
  name: string;
  textButton: any;
  minimumTierIndex?: number;
}) => {
  const { setCalculate, setToggle } = useCalculate();

  const handleToggle = (enabled: boolean) => {
    setHomeService(enabled);
    // Update legacy state for backward compatibility
    setCalculate({ [name]: enabled });
    // Update new dynamic toggle state with tier requirement
    setToggle(name, enabled, minimumTierIndex);
  };

  return (
    <div className="flex mt-4 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto">
      <Button
        className={`w-full md:w-16 ltr:md:ml-8 ltr:rounded-r-none capitalize rtl:rounded-l-none cursor-pointer border ltr:border-r-0 rtl:border-l-0 ${
          homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'
        } focus:border-[#A67F6B]`}
        onClick={() => handleToggle(true)}
      >
        {textButton?.yes}
      </Button>
      <Button
        className={`w-full md:w-16 ltr:border-l-0 border rtl:border-r-0 capitalize ltr:rounded-l-none rtl:rounded-r-none cursor-pointer ${
          !homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'
        } focus:border-[#A67F6B]`}
        onClick={() => handleToggle(false)}
      >
        {textButton?.no}
      </Button>
    </div>
  );
};
