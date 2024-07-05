import { Button } from '../ui/button';

export const ToggleButton = ({
  setHomeService,
  homeService,
  setCalculate,
  name,
  textButton,
}: {
  setHomeService: any;
  homeService: any;
  setCalculate: any;
  name: string;
  textButton: any;
}) => {
  return (
    <div className="flex mt-4 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto">
      <Button
        className={`w-full md:w-16  ltr:md:ml-8 ltr:rounded-r-none capitalize rtl:rounded-l-none cursor-pointer border ltr:border-r-0  lrtl:border-l-0  ${homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService),
            setCalculate((prev: any) => ({
              ...prev,
              [name]: true,
            }));
        }}
      >
        {textButton?.yes}
      </Button>
      <Button
        className={`w-full md:w-16 ltr:border-l-0 border rtl:border-r-0 capitalize  ltr:rounded-l-none rtl:rounded-r-none cursor-pointer ${!homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService),
            setCalculate((prev: any) => ({
              ...prev,
              [name]: false,
            }));
        }}
      >
        {textButton?.no}
      </Button>
    </div>
  );
};
const text = {
  per: 'per',
  plan: 'Basic',
  year: 'year',
  month: 'month',
  staff: 'Additional Staff',
  billed: 'billed monthly',
  details: 'View details',
  basicPlan: 'Basic Plan',
  textStart: ' Start Free Trial',
  tryPeriod: '14 days try period',
  totalPrice: 'Total Price',
  resultOption: [
    ' Staff Free',
    ' Branch Free',
    ' country Free',
    ' Additional $10/month',
  ],
};
