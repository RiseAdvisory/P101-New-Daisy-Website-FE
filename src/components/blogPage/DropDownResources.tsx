'use client';
import Image from 'next/image';
import Separator from '../separator/Separator';
import { resourcesLinkList } from '@/lib/constants/resourcesLink';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useMemo, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { resourcesDropDownList } from '@/lib/constants/resources/resourcesList';
import { useChangePage } from '@/store/currentPage';
import { t } from '@/lib/constants/i18n';
import {
  resourcesDropdownData,
  ResourcesDropdownPageType,
} from '@/lib/constants/shared/resourcesDropdownData';
import { getLocaleFromPathname, localePath } from '@/lib/utils/locale';
import { cn } from '@/lib/utils';

interface IPropsResources {
  openBlog: boolean;
  setOpenBlog: Dispatch<SetStateAction<boolean>>;
  setActive?: Dispatch<SetStateAction<string>>;
}

export const DropdownResources = ({
  openBlog,
  setOpenBlog,
  setActive,
}: IPropsResources) => {
  const [currentImage, setCurrentImage] = useState(resourcesDropDownList[3]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: any) => {
    setCurrentImage(resourcesDropDownList[index]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(resourcesDropDownList[3]);
  };

  const path = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(path), [path]);
  const currentPage = typeof window !== 'undefined' ? localStorage.getItem('activePage') : null;

  let pageType: ResourcesDropdownPageType = 'business';
  if (currentPage === '/customer') {
    pageType = 'customer';
  } else if (currentPage === '/professional') {
    pageType = 'professional';
  }

  const listResources = t(resourcesDropdownData[pageType], locale);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenBlog(false);
        if (setActive) setActive(path);
      }
    };

    if (openBlog) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openBlog, setOpenBlog, setActive, path]);

  // The dropdown markup is intentionally rendered even when closed so that
  // crawlers see the resource sub-page links in the SSR HTML. Visibility is
  // controlled via opacity + pointer-events below; previously we returned
  // null when closed which made every link inside invisible to bots.

  const imageElement = (
    <div className="w-full max-w-[420px] h-[290px] border relative bg-[#E8E9E9] rounded-lg ltr:mr-6 rtl:ml-6 flex-shrink-0 overflow-hidden">
      <Image
        src={currentImage}
        alt="Resource article thumbnail"
        className="h-full object-cover"
      />
    </div>
  );

  const contentElement = (
    <div className="flex-1">
      <h2 className="font-semibold text-2xl text-primary rtl:text-right">
        {listResources.title}
      </h2>
      <Separator className="my-6 bg-[#E8E9E9]" />
      <ul className="grid grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-[100px] gap-y-4 max-w-full">
        {listResources.itemResources.map((item, index) => (
          <li
            key={index}
            className="py-[18px] hover:bg-[#E8E9E9] rounded-xl hover:outline-gray-300 hover:outline w-full"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={localePath(item.nav, locale)}
              onClick={() => setOpenBlog(!openBlog)}
              className="block ltr:pl-4 rtl:pr-4"
            >
              <h3 className="text-base ltr:font-montserrat font-semibold rtl:font-cairo rtl:text-right">
                {item.title}
              </h3>
              <p className="text-base ltr:font-montserrat text-primaryBtn rtl:font-cairo rtl:text-right">
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      ref={dropdownRef}
      aria-hidden={!openBlog}
      className={cn(
        'w-screen max-w-screen-2xl fixed left-0 rtl:left-auto rtl:right-0 top-[100px] hidden md:block py-10 px-4 md:px-8 lg:px-16 border-t border-primaryBtn bg-white z-50 shadow-md transition-opacity duration-150',
        openBlog
          ? 'md:opacity-100 md:pointer-events-auto'
          : 'md:opacity-0 md:pointer-events-none',
      )}
    >
      <div className="flex ltr:flex-row rtl:flex-row-reverse">
        {locale === 'ar' ? (
          <>
            {contentElement}
            {imageElement}
          </>
        ) : (
          <>
            {imageElement}
            {contentElement}
          </>
        )}
      </div>
    </div>
  );
};
