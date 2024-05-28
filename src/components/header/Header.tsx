'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import { Button } from '../ui/button';
import { BurgerMenu } from '@/assets/icons/burgerMenu/BurgerMenu';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import ToggleButton from '../toogleHeader/ToogleHeader';
import { GetAppButton } from '../buttonApp/GetAppButton';
import { headerNavigationList } from '@/lib/constants/headernavigationList';

export const Header = () => {
  const [active, setActive] = useState('/');
  return (
    <header className="w-full bg-primary p-4 flex justify-between md:justify-start border-b border-[#CAB2A6] md:px-16">
      <div>
        <LogoIconsS />
      </div>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:hidden">
          <Button variant="navigation">Vendor</Button>
          <Button variant="navigation">Eng</Button>

          <Button variant="navigation">
            <BurgerMenu />
          </Button>
        </div>
        <ul className="hidden md:flex space-x-8 px-[95px]">
          {headerNavigationList.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  active === item.nav ? 'border-b-2 border-[#CAB2A6]' : ''
                }
              >
                <Link
                  //   href={item.nav}
                  href="/"
                  onClick={() => setActive(item.nav)}
                  className={clsx(
                    'font-openSans font-normal text-[#D5D9D9] leading-6',
                    {
                      'text-white': active === item.nav,
                      'text-gray-400': active !== item.nav,
                    },
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:flex space-x-2">
          <ToggleButton />
          <Button variant="navigation" className="py-6 px-4">
            Eng
          </Button>
          <GetAppButton />
        </div>
      </nav>
    </header>
  );
};
