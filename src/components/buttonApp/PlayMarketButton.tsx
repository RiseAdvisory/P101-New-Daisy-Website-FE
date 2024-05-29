import { GooglePlayIcons } from '@/assets/icons/appMarket/GooglePlayIcons';
import { Button } from '../ui/button';

export const PlayMarketButton = ({ className }: { className?: string }) => {
  return (
    <>
      <Button
        variant="navigation"
        className={`w-full mr-0 h-full flex items-center justify-center rounded-xl py-4 ${className}`}
      >
        {' '}
        <div className="flex items-center mr-3">
          <GooglePlayIcons w="36" h="36" className="mr-3 fill-white" />
          <div>
            <p className="text-start font-inter font-normal text-xs leading-3">
              Download on the
            </p>
            <p className="text-start font-inter leading-6 text-lg font-bold">
              Google Play
            </p>
          </div>
        </div>
      </Button>
    </>
  );
};
