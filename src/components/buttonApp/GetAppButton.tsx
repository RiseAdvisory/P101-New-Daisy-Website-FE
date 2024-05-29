import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';
import { Button } from '../ui/button';
import { GooglePlayIcons } from '@/assets/icons/appMarket/GooglePlayIcons';
import { cn } from '@/lib/utils';

export const GetAppButton = ({ className }: { className?: string }) => {
  return (
    <Button asChild variant="navigation" className={cn(`py-6 px-4`, className)}>
      <div className="flex justify-center items-center">
        <button className=" border-r-2 border-[#586968] pr-[11px]">
          <AppStoreIcons colorFill="#D5D9D9" />
        </button>
        <button className="px-[11px]">
          <GooglePlayIcons colorFill="#D5D9D9" />
        </button>
        <p className="text-start leading-6 text-base font-semibold">
          Get The App
        </p>
      </div>
    </Button>
  );
};
