'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { FacebookIcons } from '@/assets/icons/socialLinksIcons/FacebookIcons';
import { TwitterIcons } from '@/assets/icons/socialLinksIcons/TwitterIcons';
import { LinkedInIcons } from '@/assets/icons/socialLinksIcons/LinkedInIcons';
import { InstagramIcons } from '@/assets/icons/socialLinksIcons/InstagramIcons';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { footerData } from '@/lib/constants/shared/footerData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname, localePath, stripLocaleFromPathname } from '@/lib/utils/locale';

export const Footer = () => {
  const fullPath = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPath), [fullPath]);
  const pathWithoutLocale = useMemo(() => stripLocaleFromPathname(fullPath), [fullPath]);
  const path = fullPath;
  const data = t(footerData, locale);
  const socialLinks = data.socialLinks;
  const columns = data.footerColumns;

  const isVisibleAppBtn = path.includes('get-the-app');

  return (
    <footer className="w-full bg-primary px-4 py-16 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Logo + Columns */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo & App Buttons */}
          <div className="flex flex-col items-center md:items-start">
            <Link href={localePath('/', locale)} className="mb-6 opacity-60" aria-label="The Daisy - Home">
              <LogoIconsS />
            </Link>
            {!isVisibleAppBtn && (
              <div className="flex flex-col gap-3 sm:flex-row">
                <PlayMarketButton className="" />
                <AppStoreButton />
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60 ltr:font-montserrat">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((item) => (
                    <li key={item.nav}>
                      <Link
                        href={localePath(item.nav, locale)}
                        className="text-sm text-white/80 transition-colors hover:text-white ltr:font-montserrat"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Language Switcher + Social Links */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/60 ltr:font-montserrat">
              &copy; {new Date().getFullYear()} The Daisy. All rights reserved.
            </p>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <nav aria-label="Language" className="flex items-center gap-2 text-xs">
              <Link
                href={localePath(pathWithoutLocale, 'en')}
                hrefLang="en"
                className={`transition-colors hover:text-white ${locale === 'en' ? 'font-semibold text-white' : 'text-white/60'}`}
              >
                English
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href={localePath(pathWithoutLocale, 'ar')}
                hrefLang="ar"
                className={`transition-colors hover:text-white ${locale === 'ar' ? 'font-semibold text-white' : 'text-white/60'}`}
              >
                العربية
              </Link>
            </nav>
          </div>
          <ul className="flex items-center gap-x-6">
            <li>
              <Link href={socialLinks.facebook_url} target="_blank" rel="noopener noreferrer" aria-label="The Daisy on Facebook">
                <FacebookIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.twitter_url} target="_blank" rel="noopener noreferrer" aria-label="The Daisy on Twitter">
                <TwitterIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="The Daisy on LinkedIn">
                <LinkedInIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.instagram_url} target="_blank" rel="noopener noreferrer" aria-label="The Daisy on Instagram">
                <InstagramIcons />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
