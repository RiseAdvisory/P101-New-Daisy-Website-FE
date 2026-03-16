'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { Button } from '../ui/button';
import { useChangeLanguage } from '@/store/language';
import { headerData } from '@/lib/constants/shared/headerData';
import { t } from '@/lib/constants/i18n';
import { useChangePage } from '@/store/currentPage';
import { useMyContext } from '@/app/MyContext';

const ToggleButton = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState('');
  const { lang } = useChangeLanguage();
  const { userChange, setUserChange } = useMyContext();

  const data = t(headerData, lang);
  // Filter out customer option
  const dataList = data.optionsToogle.filter(
    (option) => !option.path.includes('customer'),
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedPath = localStorage.getItem('activePage');

      // Redirect customer to business
      if (storedPath === '/customer' || storedPath === 'customer') {
        storedPath = '/business';
        localStorage.setItem('activePage', '/business');
      }

      if (pathname.includes('business') && !pathname.includes('features'))
        setActive('/business');
      // Skip customer path check since we're hiding it
      if (pathname.includes('professional') && !pathname.includes('features'))
        setActive('/professional');

      if (pathname.startsWith('/features') && storedPath) {
        const cleanPath = storedPath.replace('/', '');
        const newPath = `/features/${cleanPath === 'customer' ? 'business' : cleanPath}`;
        // Only redirect top-level /features/{userType} pages, not nested sub-pages
        const featureSegments = pathname.replace('/features/', '').split('/');
        if (featureSegments.length === 1 && pathname !== newPath) {
          router.replace(newPath);
        }
      }
    }
  }, [pathname, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentPath: string | undefined;
      if (pathname.startsWith('/business')) currentPath = '/business';
      if (pathname.startsWith('/customer')) currentPath = '/customer';
      if (pathname.startsWith('/professional')) currentPath = '/professional';

      if (currentPath) {
        localStorage.setItem('activePage', currentPath);
      }
    }
  }, [pathname]);

  useEffect(() => {
    setUserChange(active);
    if (typeof window !== 'undefined' && active) {
      localStorage.setItem('activePage', active);
    }
  }, [active]); //UserType

  const handleClick = (path: string) => {
    if (path.startsWith('/features/business')) setActive('business');
    if (path.startsWith('/features/customer')) setActive('customer');
    if (path.startsWith('/features/professional')) setActive('professional');
    setActive(path);
    if (typeof window !== 'undefined') {
      localStorage.setItem('activePage', path);
    }
    if (pathname.includes('/features')) {
      router.push(`/features${path}`);
    }
    if (pathname.startsWith('/business')) {
      router.push(`${path}`);
    }
    if (pathname.startsWith('/customer')) {
      router.push(`${path}`);
    }
    if (pathname.startsWith('/professional')) {
      router.push(`${path}`);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentPath = localStorage.getItem('activePage');

      // Redirect customer to business
      if (currentPath === '/customer' || currentPath === 'customer') {
        currentPath = '/business';
        localStorage.setItem('activePage', '/business');
      }

      if (currentPath) setActive(currentPath);
    }
  }, []);
  const { changePage } = useChangePage();

  return (
    <div
      className={cn(
        'hidden md:flex border rounded-lg p-1 bg-customWhite border-primaryBtn max-w-content ml-auto mr-2 rtl:mr-auto rtl:ml-0',
        className,
      )}
    >
      {dataList &&
        dataList.map((option: { path: string; label: string }) => {
          return (
            <Button
              key={option.path}
              onClick={() => {
                handleClick(option.path), changePage(option.path);
              }}
              className={clsx(
                'px-6 rounded-lg font-semibold cursor-pointer bg-transparent',
                {
                  'bg-white text-black': active === option.path,
                  'text-[#ABB4B3] hover:text-white': active !== option.path,
                },
              )}
            >
              {option.label}
            </Button>
          );
        })}
    </div>
  );
};

export default ToggleButton;
