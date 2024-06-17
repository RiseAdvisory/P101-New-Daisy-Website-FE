import { Button } from '../ui/button';

export const ToggleButtonForm = ({
  setHomeService,
  homeService,
  firstValue,
  secondValue,
}: {
  setHomeService: any;
  homeService: any;
  firstValue: string;
  secondValue: string;
}) => {
  return (
    <div className="flex w-full">
      <Button
        type="button"
        className={`w-full rtl:rounded-l-none rtl:rounded-r-lg  rounded-r-none cursor-pointer border border-r-0 rtl:border-r rtl:border-l-0 ${homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService);
        }}
      >
        {firstValue}
      </Button>
      <Button
        type="button"
        className={`w-full rtl:rounded-r-none rtl:rounded-l-lg border-l-0 border rounded-l-none cursor-pointer rtl:border-l rtl:border-r-0 ${!homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService);
        }}
      >
        {secondValue}
      </Button>
    </div>
  );
};
