'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { useEffect, useState, startTransition } from 'react';
import { GetAppButton } from '../buttonApp/GetAppButton';
import { headerNavigationList } from '@/lib/constants/headernavigationList';
import { DropDownMobileHeader } from '../dropdownMobileHeader/DropdownMobileHeader';
import { usePathname } from 'next/navigation';
import { DropdownResources } from '../blogPage/DropDownResources';
import { MobileMenu } from '../mobileMenu/mobileMenu';
import ToggleButton from '../toogleHeader/ToogleHeader';
import { DropDownMobileHeaderLang } from '../dropdownMobileHeader/DropDownMobileHeaderLang';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useChangePage } from '@/store/currentPage';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import { ChangeUserTypeMobile } from '../dropdownMobileHeader/ChangeUserMobile';
import { useOpenMenu } from '@/store/openMenu';
import { shouldHideMenuItem } from '@/lib/utils/menuVisibility';
import {
  getCached,
  setCache,
  getCacheKey,
  CACHE_KEYS,
} from '@/helpers/apiCache';

export const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState('Business');
  const [changeLang, setChangeLang] = useState('En');
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [listHeader, setListheader] = useState<any>();
  const [optionsToogle, setOptionsToggle] = useState<any>();
  const [optionsToogleFeature, setOptionsToggleFeatures] = useState<any>();
  const [getTheApp, setGetTheApp] = useState<any>();
  const [activePages, setActivePages] = useState<any>();
  const [listLanguage, setListLanguage] = useState<any>();
  const [currentActivePage, setCurrentActivePage] = useState<string | null>(
    null,
  );
  const { lang, changeLanguages } = useChangeLanguage();
  const { isOpenMenu } = useOpenMenu();
  useEffect(() => {
    const fetchHeaderData = async () => {
      // Check cache first for all data
      const headerCacheKey = getCacheKey(CACHE_KEYS.HEADER, lang);
      const toggleCacheKey = getCacheKey(CACHE_KEYS.HEADER_TOGGLE, lang);
      const langCacheKey = getCacheKey(CACHE_KEYS.HEADER_LANG, lang);

      const cachedHeader = getCached<{ getTheApp: unknown; headerNavList: unknown }>(headerCacheKey);
      const cachedToggle = getCached<{ optionsToogle: unknown; optionsTooglseFeatures: unknown }>(toggleCacheKey);
      const cachedLang = getCached<{ listLanguage: unknown }>(langCacheKey);

      // If all data is cached, use it immediately
      if (cachedHeader && cachedToggle && cachedLang) {
        startTransition(() => {
          setGetTheApp(cachedHeader.getTheApp);
          setListheader(cachedHeader.headerNavList);
          setOptionsToggle(cachedToggle.optionsToogle);
          setOptionsToggleFeatures(cachedToggle.optionsTooglseFeatures);
          setListLanguage(cachedLang.listLanguage);
        });
        return;
      }

      // Fetch all data in parallel
      const [response, responseToggle, responseLang] = await Promise.all([
        cachedHeader ? Promise.resolve(null) : axiosInstance.get(`/headers?locale=${lang}`),
        cachedToggle ? Promise.resolve(null) : axiosInstance.get(`/options-toogles?locale=${lang}`),
        cachedLang ? Promise.resolve(null) : axiosInstance.get(`/change-languages?locale=${lang}`),
      ]);

      // Process and cache header data
      if (response) {
        const [data] = response?.data?.data || [];
        const headerData = {
          getTheApp: data?.attributes?.getTheApp,
          headerNavList: data?.attributes?.headerNavList,
        };
        setCache(headerCacheKey, headerData);
        startTransition(() => {
          setGetTheApp(headerData.getTheApp);
          setListheader(headerData.headerNavList);
        });
      }

      // Process and cache toggle data
      if (responseToggle) {
        const [dataToggle] = responseToggle?.data?.data || [];
        const toggleData = {
          optionsToogle: dataToggle?.attributes?.optionsToogle,
          optionsTooglseFeatures: dataToggle?.attributes?.optionsTooglseFeatures,
        };
        setCache(toggleCacheKey, toggleData);
        startTransition(() => {
          setOptionsToggle(toggleData.optionsToogle);
          setOptionsToggleFeatures(toggleData.optionsTooglseFeatures);
        });
      }

      // Process and cache language data
      if (responseLang) {
        const [dataLang] = responseLang?.data?.data || [];
        const langData = { listLanguage: dataLang?.attributes?.listLanguage };
        setCache(langCacheKey, langData);
        startTransition(() => {
          setListLanguage(langData.listLanguage);
        });
      }
    };

    fetchHeaderData();

    // Set default page label based on language
    if (changeLang === 'En') {
      setChangePage('Business');
    } else {
      setChangePage('شركة');
    }
  }, [changeLang, lang]);
  useEffect(() => {
    if (path.includes('resources')) return setActive('/resources');
    if (path.includes('features')) return setActive('/features');
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
    if (lang === 'ar') setChangeLang('ع');
  }, [lang]);
  const { page } = useChangePage();

  return (
    <header className="w-full rtl:md:  bg-primary p-4 flex justify-between md:justify-start border-b border-primaryBtn md:px-16 fixed z-40">
      <Link href={'/'}>
        <LogoIconsS />
      </Link>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:!hidden !flex">
          {/* {!isOpenMenu && ( */}
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
        {listHeader ? (
          <>
            <ul className="hidden md:flex md:gap-[10px] lg:gap-[20px] md:ml-[10px] lg:ml-[55px] rtl:md:ml-0 rtl:md:mr-[55px] rtl:first:mr-4">
              {listHeader &&
                listHeader.map(
                  (item: { title: string; nav: string }, index: number) => {
                    let href = item.nav;

                    // Hide certain menu items based on current active page
                    if (shouldHideMenuItem(item.nav, currentActivePage)) {
                      return;
                    }

                    if (item.title === listHeader?.[0].title) {
                      if (typeof window !== 'undefined') {
                        const storedHref = localStorage.getItem('activePage');

                        if (storedHref) {
                          href = storedHref;
                        }
                      }
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
                            href={href}
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
          </>
        ) : (
          <div className=" hidden md:flex ml-[50px] rtl:mr-[50px] rtl:ml-0 w-full">
            <div className="flex ">
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
            </div>

            <div className="ml-auto rtl:ml-0 rtl:mr-auto flex">
              <Skeleton className="w-[300px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[200px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
