import { ArrowDownIcon } from '@/assets/icons/arrowDown/ArrowDownIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface PropsDropDownHeader {
  state: string;
  setState: any;
  list: string[];
  classNames?: string;
  classNameContent?: string;
}

export const DropDownMobileHeader = ({
  state,
  setState,
  list,
  classNames,
  classNameContent,
}: PropsDropDownHeader) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'min-w-[45px] mr-2 bg-customWhite border text-white px-4 py-2 border-primaryBtn inline-flex text-center items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          classNames,
        )}
      >
        <p className="mr-2"> {state}</p>
        <ArrowDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          'text-center flex flex-col items-center',
          classNameContent,
        )}
      >
        {list.map((item, index) => {
          return (
            <DropdownMenuItem
              className="w-full flex flex-col self-center text-center justify-center items-center font-montserrat font-normal text-base"
              onSelect={(e: any) => setState(e.target.innerText)}
              key={index}
            >
              {item}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
