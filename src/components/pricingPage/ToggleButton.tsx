import { Button } from '../ui/button';

export const ToggleButton = ({
  setHomeService,
  homeService,
}: {
  setHomeService: any;
  homeService: any;
}) => {
  return (
    <div className="flex">
      <Button
        className={`w-16 ml-8 rounded-r-none cursor-pointer border border-r-0 ${homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => setHomeService(!homeService)}
      >
        Yes
      </Button>
      <Button
        className={`w-16 border-l-0 border rounded-l-none cursor-pointer ${!homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => setHomeService(!homeService)}
      >
        No
      </Button>
    </div>
  );
};
