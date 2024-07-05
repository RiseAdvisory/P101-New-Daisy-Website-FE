'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BurgerMenu } from '@/assets/icons/burgerMenu/BurgerMenu';
import { CloseIcon } from '@/assets/icons/closeIcon/CloseIcon';
import { GetAppButton } from '../buttonApp/GetAppButton';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { BreadcrumbMobile } from './breadCrumbMobile';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

export const MobileMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const [onResources, setResources] = useState(true);
  const [getTheApp, setGetTheApp] = useState<any>();
  const [listNav, setListNav] = useState<any>();

  const router = useRouter();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(`/headers?locale=${lang}`);
        const responseList = await axiosInstance.get(
          `/mobile-list-navigations?locale=${lang}`,
        );

        const [data] = response?.data?.data;
        const [list] = responseList?.data?.data;
        setListNav(list?.attributes);
        setGetTheApp(data?.attributes?.getTheApp);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);
  return (
    <DropdownMenu open={openMenu} modal={false}>
      <DropdownMenuTrigger>
        <span
          className="w-[55px] mr-0 bg-customWhite border text-white px-4 py-3 border-primaryBtn inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => {
            setOpenMenu(!openMenu), setResources(true);
          }}
        >
          {!openMenu ? <BurgerMenu /> : <CloseIcon />}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none bg-primary text-white mt-[30px] px-4 md:hidden w-[100vw]">
        {onResources ? (
          <ul>
            {listNav?.listNavigation &&
              listNav?.listNavigation.map((item: any, index: number) => {
                return (
                  <li key={index}>
                    <div className="flex justify-between items-center py-4">
                      <Button
                        className="ltr:font-montserrat font-semibold text-xl leading-8 w-full justify-start"
                        onClick={() => {
                          if (
                            item.title === 'Resources' ||
                            item.title === 'الموارد'
                          ) {
                            setResources(false);
                          } else {
                            setOpenMenu(!openMenu);
                            router.push(item.nav);
                          }
                        }}
                      >
                        {item.title}
                      </Button>
                      <ArrowRightIcon />
                    </div>
                    <Separator />
                  </li>
                );
              })}
          </ul>
        ) : (
          <div>
            <div className="flex pb-6 mr-auto">
              <BreadcrumbMobile
                backmenu={onResources}
                setBackMenu={setResources}
                bredCrumbTitle={listNav?.bredCrumbTitle}
                bredCrumbDesription={listNav?.bredCrumbDesription}
              />
            </div>
            <ul>
              {listNav?.listNavigation[3]?.submenu!.map(
                (submenuItem: any, subIndex: number) => (
                  <li key={subIndex} className="pb-5">
                    <Link
                      href={submenuItem.nav}
                      className="ltr:font-montserrat font-semibold text-base leading-6"
                      onClick={() => {
                        setOpenMenu(!openMenu), setResources(true);
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          {submenuItem.title}
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
                      <Separator className="mt-4" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
        <GetAppButton
          textGetApp={getTheApp}
          className="w-full mb-10 mt-6"
          setOpen={setOpenMenu}
          open={openMenu}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
