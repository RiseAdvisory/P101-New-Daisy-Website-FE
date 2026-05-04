'use client';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { Button } from '../ui/button';
import { headerData } from '@/lib/constants/shared/headerData';
import { t } from '@/lib/constants/i18n';
import { useChangePage } from '@/store/currentPage';
import { useMyContext } from '@/app/MyContext';
import { getLocaleFromPathname, stripLocaleFromPathname, localePath } from '@/lib/utils/locale';

const ToggleButton = ({ className }: { className?: string }) => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const pathname = useMemo(() => stripLocaleFromPathname(fullPathname), [fullPathname]);
  const router = useRouter();
  const [active, setActive] = useState('');
  const { userChange, setUserChange } = useMyContext();

  const data = t(headerData, locale);
  // Filter out customer option
  const dataList = data.optionsToggle.filter(
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

      if (pathname.includes('business') && !pathname.includes('features') && !pathname.includes('pricing'))
        setActive('/business');
      // Skip customer path check since we're hiding it
      if (pathname.includes('professional') && !pathname.includes('features') && !pathname.includes('pricing'))
        setActive('/professional');

      // Set active based on pricing sub-page
      if (pathname.includes('/pricing/business')) setActive('/business');
      if (pathname.includes('/pricing/professional')) setActive('/professional');

      if (pathname.startsWith('/features') && storedPath) {
        const cleanPath = storedPath.replace('/', '');
        const newPath = `/features/${cleanPath === 'customer' ? 'business' : cleanPath}`;
        // Only redirect top-level /features/{userType} pages, not nested sub-pages
        const featureSegments = pathname.replace('/features/', '').split('/');
        if (featureSegments.length === 1 && pathname !== newPath) {
          router.replace(localePath(newPath, locale));
        }
      }
    }
  }, [pathname, router, locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detect persona from persona-aware pages and sync toggle
      let currentPath: string | undefined;
      const isFeaturePage = pathname.startsWith('/features');

      if (!isFeaturePage && pathname.includes('professional'))
        currentPath = '/professional';
      else if (!isFeaturePage && pathname.includes('business'))
        currentPath = '/business';
      else if (pathname.startsWith('/customer')) currentPath = '/business';

      // Only update localStorage on pages that are clearly persona-specific
      if (currentPath) {
        localStorage.setItem('activePage', currentPath);
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Don't overwrite the default with an empty string before the
    // localStorage-mount effect has had a chance to hydrate `active`.
    if (!active) return;
    setUserChange(active);
    if (typeof window !== 'undefined') {
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
    if (pathname.includes('/pricing')) {
      const persona = path === '/business' ? 'business' : 'professional';
      router.push(localePath(`/pricing/${persona}`, locale));
    } else if (pathname.includes('/start-free-trial')) {
      const persona = path === '/business' ? 'business' : 'professional';
      router.push(localePath(`/start-free-trial/${persona}`, locale));
    } else if (pathname.includes('/solutions/')) {
      const persona = path === '/business' ? 'business' : 'professional';
      const slug = pathname.split('/solutions/')[1]?.split('/')[0];
      if (slug) {
        router.push(localePath(`/solutions/${slug}/${persona}`, locale));
      }
    } else if (pathname.includes('/faq')) {
      const persona = path === '/business' ? 'business' : path === '/professional' ? 'professional' : 'customer';
      router.push(localePath(`/faq/${persona}`, locale));
    } else if (pathname.includes('/resources/blog-post')) {
      const persona = path === '/business' ? 'business' : path === '/professional' ? 'professional' : 'customer';
      router.push(localePath(`/resources/blog-post/${persona}`, locale));
    } else if (pathname.includes('/resources/tutorials')) {
      // Tutorials only support business + professional today.
      const persona = path === '/professional' ? 'professional' : 'business';
      router.push(localePath(`/resources/tutorials/${persona}`, locale));
    } else if (pathname.includes('/features')) {
      router.push(localePath(`/features${path}`, locale));
    } else if (pathname.startsWith('/business')) {
      router.push(localePath(path, locale));
    } else if (pathname.startsWith('/customer')) {
      router.push(localePath(path, locale));
    } else if (pathname.startsWith('/professional')) {
      router.push(localePath(path, locale));
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentPath = localStorage.getItem('activePage');

      // Default to business on first visit, and redirect deprecated customer
      // value. Without the empty-localStorage default the toggle stays
      // un-highlighted on first load when the URL isn't persona-specific.
      if (
        !currentPath ||
        currentPath === '/customer' ||
        currentPath === 'customer'
      ) {
        currentPath = '/business';
        localStorage.setItem('activePage', '/business');
      }

      setActive(currentPath);
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
