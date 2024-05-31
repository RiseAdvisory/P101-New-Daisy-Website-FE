import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dispatch, SetStateAction } from 'react';

import { BurgerMenu } from '@/assets/icons/burgerMenu/BurgerMenu';
import { CloseIcon } from '@/assets/icons/closeIcon/CloseIcon';
import { GetAppButton } from '../buttonApp/GetAppButton';
import { mobileListNavigation } from '@/lib/constants/mobileListNavigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';
import Separator from '../separator/Separator';

export const MobileMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(openMenu);
  return (
    <DropdownMenu open={openMenu} modal={false}>
      <DropdownMenuTrigger>
        <span
          className="w-[55px] mr-0 bg-customWhite border text-white px-4 py-3 border-primaryBtn inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? <BurgerMenu /> : <CloseIcon />}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none bg-primary text-white mt-[30px] px-4 md:hidden w-[100vw]">
        <ul>
          {mobileListNavigation.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex justify-between items-center py-4">
                  <Link
                    href={item.nav}
                    className="font-montserrat font-semibold text-xl leading-8 w-full"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    {item.title}
                  </Link>
                  {!item.submenu && <ArrowRightIcon />}
                </div>
                {!item.submenu && <Separator />}
                {item.submenu && (
                  <ul>
                    {item.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex} className="pb-5">
                        <div className="flex justify-between items-center">
                          <div>
                            <Link
                              href={submenuItem.nav}
                              className="font-montserrat font-semibold text-base leading-6"
                            >
                              {submenuItem.title}
                            </Link>
                            {submenuItem.subtitle && (
                              <p className="text-[#D5D9D9] font-normal text-sm py-1">
                                {submenuItem.subtitle}
                              </p>
                            )}
                          </div>
                          <div>
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </li>
                    ))}
                    <Separator className="mt-6" />
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <GetAppButton className="w-full mb-10 mt-6" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
