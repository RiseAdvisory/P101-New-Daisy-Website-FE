import Link from 'next/link';
import { Button } from '../ui/button';
import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';

export const AppStoreButton = ({
  className,
  hoverText,
  fillHover,
}: {
  className?: string;
  hoverText?: string;
  fillHover?: string;
}) => {
  return (
    <>
      <Button
        variant="navigation"
        className={`w-full mr-0 h-full felx items-center justify-center rounded-xl py-4 group hover:bg-white hover:text-primary ${className}`}
      >
        <Link href="" target="_blank">
          <div className="flex items-center mr-3">
            <AppStoreIcons
              w="36"
              h="36"
              className={`mr-3 fill-white group-hover:fill-primary ${fillHover}`}
            />
            <div className={`hover:text-primary ${hoverText}`}>
              <p className="text-start font-inter font-normal text-xs leading-3">
                Download on the
              </p>
              <p className="text-start font-inter leading-6 text-lg font-bold">
                AppStore
              </p>
            </div>
          </div>
        </Link>
      </Button>
    </>
  );
};
