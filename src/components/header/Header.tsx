'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { GetAppButton } from '../buttonApp/GetAppButton';
import {
  changeLanguage,
  headerNavigationList,
  optionsToogle,
} from '@/lib/constants/headernavigationList';
import { MobileMenu } from '../mobileMenu/MobileMenu';
import { DropDownMobileHeader } from '../dropdownMobileHeader/DropdownMobileHeader';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState('/');
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState('Business');
  const [changeLang, setChangeLang] = useState('EN');

  return (
    <header className="w-full bg-primary p-4 flex justify-between md:justify-start border-b border-primaryBtn md:px-16">
      <Link href={'/'}>
        <LogoIconsS />
      </Link>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:hidden">
          {!openMenu && (
            <>
              <DropDownMobileHeader
                state={changePage}
                setState={setChangePage}
                list={optionsToogle}
                classNames="text-center"
              />
              <DropDownMobileHeader
                state={changeLang}
                setState={setChangeLang}
                list={changeLanguage}
                classNames="px-2 hover:bg-white hover:text-primary"
              />
            </>
          )}
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
        <ul className="hidden md:flex space-x-9 mx-auto">
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
                    'font-openSans font-normal text-[#D5D9D9] leading-6 hover:text-white',
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
          <DropDownMobileHeader
            state={changeLang}
            setState={setChangeLang}
            list={changeLanguage}
            classNameContent="!w-[70px]"
          />

          <GetAppButton />
        </div>
      </nav>
    </header>
  );
};
