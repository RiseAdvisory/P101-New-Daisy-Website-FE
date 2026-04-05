'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { GetAppButton } from '../buttonApp/GetAppButton';
import { headerNavigationList } from '@/lib/constants/headernavigationList';
import { DropDownMobileHeader } from '../dropdownMobileHeader/DropdownMobileHeader';
import { usePathname } from 'next/navigation';
import { DropdownResources } from '../blogPage/DropDownResources';
import { MobileMenu } from '../mobileMenu/mobileMenu';
import ToggleButton from '../toogleHeader/ToogleHeader';
import { DropDownMobileHeaderLang } from '../dropdownMobileHeader/DropDownMobileHeaderLang';
import { useChangeLanguage } from '@/store/language';
import { useChangePage } from '@/store/currentPage';
import { cn } from '@/lib/utils';
import { ChangeUserTypeMobile } from '../dropdownMobileHeader/ChangeUserMobile';
import { useOpenMenu } from '@/store/openMenu';
import { shouldHideMenuItem } from '@/lib/utils/menuVisibility';
import { headerData } from '@/lib/constants/shared/headerData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname, stripLocaleFromPathname, localePath } from '@/lib/utils/locale';

export const Header = () => {
  const fullPath = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPath), [fullPath]);
  // path without locale prefix, for comparison with existing route constants
  const path = useMemo(() => stripLocaleFromPathname(fullPath), [fullPath]);
  const [active, setActive] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState(locale === 'ar' ? 'شركة' : 'Business');
  const [changeLang, setChangeLang] = useState(locale === 'ar' ? 'ع' : 'En');
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [activePages, setActivePages] = useState<any>();
  const [currentActivePage, setCurrentActivePage] = useState<string | null>(
    null,
  );
  const { changeLanguages } = useChangeLanguage();
  const { isOpenMenu } = useOpenMenu();

  const data = t(headerData, locale);
  const listHeader = data.headerNavList;
  const optionsToogle = data.optionsToogle;
  const optionsToogleFeature = data.optionsTooglseFeatures;
  const getTheApp = data.getTheApp;
  const listLanguage = data.listLanguage;

  useEffect(() => {
    if (locale === 'ar') {
      setChangeLang('ع');
      setChangePage('شركة');
    } else {
      setChangeLang('En');
      setChangePage('Business');
    }
  }, [locale]);

  useEffect(() => {
    if (path.includes('resources')) return setActive('/resources');
    if (path.includes('features')) return setActive('/features');
    if (path.includes('pricing')) return setActive('/pricing');
    const currentPath = headerNavigationList.find((item) => {
      if (
        path === '/customer' ||
        path === '/business' ||
        path === '/professional'
      ) {
        return item.nav === '/';
      }
      return item.nav === path;
    });
    setActive(currentPath?.nav || '');
  }, [path]);

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive('/resources');
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const navListFeatures = path.includes('features')
    ? optionsToogleFeature
    : optionsToogle;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = localStorage.getItem('activePage');

      if (currentPath) setActivePages(currentPath);
      setCurrentActivePage(currentPath);
    }
  }, [locale, path]);
  const { page } = useChangePage();

  return (
    <header className="w-full rtl:md:  bg-primary p-4 flex justify-between md:justify-start border-b border-primaryBtn md:px-16 fixed z-40">
      <Link href={localePath('/business', locale)} aria-label="The Daisy - Home">
        <LogoIconsS />
      </Link>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:!hidden !flex">
          <div className={cn('', { hidden: isOpenMenu })}>
            <ChangeUserTypeMobile
              state={changePage}
              setState={(val: any) => {
                setChangePage(val.label);
              }}
              list={navListFeatures}
              classNames="text-center"
              link={true}
            />
            <DropDownMobileHeaderLang
              state={changeLang}
              setState={(val: any) => {
                setChangeLang(val.label);
                changeLanguages(val.path.toLowerCase());
              }}
              list={listLanguage}
              classNames="px-2 hover:bg-white hover:text-primary rtl:ml-2"
            />
          </div>

          <MobileMenu />
        </div>
        <ul className="hidden md:flex md:gap-[10px] lg:gap-[20px] md:ml-[10px] lg:ml-[55px] rtl:md:ml-0 rtl:md:mr-[55px] rtl:first:mr-4">
          {listHeader &&
            listHeader.map(
              (item: { title: string; nav: string }, index: number) => {
                let href = item.nav;
                const activePersna = currentActivePage?.includes('professional') ? 'professional' : 'business';

                if (shouldHideMenuItem(item.nav, currentActivePage)) {
                  return;
                }

                // Persona-aware nav links: use the toggle state, not the current URL
                if (item.title === listHeader?.[0].title) {
                  href = `/${activePersna}`;
                }
                if (item.nav === '/pricing') {
                  href = `/pricing/${activePersna}`;
                }
                if (item.nav === '/features') {
                  href = `/features/${activePersna}`;
                }
                if (item.title === listHeader?.[3].title) {
                  return (
                    <li
                      key={index}
                      className={
                        active === item.nav
                          ? 'border-b-2 border-[#CAB2A6]'
                          : ''
                      }
                    >
                      <Link
                        href="#"
                        onClick={handleResourcesClick}
                        className={cn(
                          ' font-normal text-[#D5D9D9] leading-6 hover:text-white cursor-pointer',
                          {
                            'text-white': active === item.nav,
                            'text-gray-400': active !== item.nav,
                          },
                        )}
                      >
                        {item.title}
                      </Link>
                      <DropdownResources
                        openBlog={isResourcesDropdownOpen}
                        setOpenBlog={setIsResourcesDropdownOpen}
                        setActive={setActive}
                      />
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className={
                        active === item.nav
                          ? 'border-b-2 border-[#CAB2A6]'
                          : ''
                      }
                    >
                      <Link
                        href={localePath(href, locale)}
                        onClick={() => setActive(item.nav)}
                        className={cn(
                          ' font-normal text-[#D5D9D9] leading-6 hover:text-white',
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
                }
              },
            )}
        </ul>
        <ToggleButton />
        <div className="hidden md:flex ">
          <DropDownMobileHeader
            state={changeLang}
            setState={(val: any) => {
              setChangeLang(val.label);
              changeLanguages(val.path.toLowerCase());
            }}
            list={listLanguage}
            classNameContent="!w-[70px]"
          />
          <GetAppButton homePage={true} textGetApp={getTheApp} />
        </div>
      </nav>
    </header>
  );
};
