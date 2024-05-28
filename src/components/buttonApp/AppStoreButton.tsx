import { Button } from '../ui/button';
import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';

export const AppStoreButton = () => {
  return (
    <>
      <Button
        variant="navigation"
        className="w-full mr-0 h-full felx items-center justify-center rounded-xl py-4"
      >
        {' '}
        <div className="flex items-center mr-3">
          <AppStoreIcons w="36" h="36" className="mr-3" />
          <div>
            <p className="text-start font-inter font-normal text-xs leading-3">
              Download on the
            </p>
            <p className="text-start font-inter leading-6 text-lg font-bold">
              AppStore
            </p>
          </div>
        </div>
      </Button>
    </>
  );
};
