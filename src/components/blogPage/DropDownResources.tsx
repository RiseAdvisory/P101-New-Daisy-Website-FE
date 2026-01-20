'use client';
import Image from 'next/image';
import Separator from '../separator/Separator';
import { resourcesLinkList } from '@/lib/constants/resourcesLink';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { resourcesDropDownList } from '@/lib/constants/resources/resourcesList';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useChangePage } from '@/store/currentPage';

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
  const [listResources, setListResources] = useState<any>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: any) => {
    setCurrentImage(resourcesDropDownList[index]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(resourcesDropDownList[3]);
  };

  const path = usePathname();
  const { lang } = useChangeLanguage();
  const currentPage = localStorage.getItem('activePage');

  useEffect(() => {
    let endpointResourseLink = 'resource-list-business-types';

    if (currentPage === '/customer') {
      endpointResourseLink = 'resource-list-customer-types';
    }
    if (currentPage === '/business') {
      endpointResourseLink = 'resource-list-business-types';
    }
    if (currentPage === '/professional') {
      endpointResourseLink = 'resource-list-independent-types';
    }

    (async () => {
      const response = await axiosInstance.get(
        `/${endpointResourseLink}?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setListResources(data?.attributes);
    })();
  }, [lang, currentPage]);

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

  if (!openBlog) return null;

  return (
    <div
      ref={dropdownRef}
      className="w-screen max-w-screen-2xl fixed left-0 rtl:left-auto rtl:right-0 top-[100px] hidden md:block py-10 px-4 md:px-8 lg:px-16 border-t border-primaryBtn bg-white z-50 shadow-md"
    >
      <div className="flex rtl:flex-row-reverse">
        <div className="w-full max-w-[420px] h-[290px] border relative bg-[#E8E9E9] rounded-lg ltr:mr-6 rtl:ml-6 flex-shrink-0 overflow-hidden">
          <Image
            src={currentImage}
            alt="sdasd"
            className="h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-2xl text-primary rtl:text-end">
            {listResources?.title}
          </h2>
          <Separator className="my-6 bg-[#E8E9E9]" />
          <ul className="grid grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-[100px] gap-y-4 max-w-full">
            {listResources?.itemResources &&
              listResources?.itemResources.map((item: any, index: number) => (
                <li
                  key={index}
                  className="ltr:pl-4 rtl:pr-4 py-[18px] hover:bg-[#E8E9E9] rounded-xl hover:outline-gray-300 hover:outline"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.nav}
                    onClick={() => setOpenBlog(!openBlog)}
                  >
                    <h3 className="text-base ltr:font-montserrat font-semibold rtl:font-cairo rtl:text-end">
                      {item.title}
                    </h3>
                    <p className="text-base ltr:font-montserrat text-primaryBtn rtl:font-cairo rtl:text-end">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
