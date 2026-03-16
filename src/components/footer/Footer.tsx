'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { FacebookIcons } from '@/assets/icons/socialLinksIcons/FacebookIcons';
import { TwitterIcons } from '@/assets/icons/socialLinksIcons/TwitterIcons';
import { LinkedInIcons } from '@/assets/icons/socialLinksIcons/LinkedInIcons';
import { InstagramIcons } from '@/assets/icons/socialLinksIcons/InstagramIcons';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useChangeLanguage } from '@/store/language';
import { footerData } from '@/lib/constants/shared/footerData';
import { t } from '@/lib/constants/i18n';

// Lazy load FreshChat widget - only load after user interaction
const FreshChatLoader = dynamic(
  () => import('@/components/freshChatWidget/FreshChatWidget'),
  { ssr: false },
);

export const Footer = () => {
  const [shouldLoadChat, setShouldLoadChat] = useState(false);
  const path = usePathname();
  const { lang } = useChangeLanguage();

  const data = t(footerData, lang);
  const socialLinks = data.socialLinks;
  const columns = data.footerColumns;

  const isVisibleAppBtn = path.includes('get-the-app');

  // Defer FreshChat loading until user scrolls/interacts OR after timeout
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let listenersAdded = false;

    const loadChat = () => {
      if (!shouldLoadChat) {
        setShouldLoadChat(true);
      }
      if (listenersAdded) {
        window.removeEventListener('scroll', loadChat);
        window.removeEventListener('click', loadChat);
        window.removeEventListener('touchstart', loadChat);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    const scheduleLoad = () => {
      const setupListeners = () => {
        listenersAdded = true;
        window.addEventListener('scroll', loadChat, {
          once: true,
          passive: true,
        });
        window.addEventListener('click', loadChat, { once: true });
        window.addEventListener('touchstart', loadChat, {
          once: true,
          passive: true,
        });
        timeoutId = setTimeout(loadChat, 2000);
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(setupListeners);
      } else {
        setTimeout(setupListeners, 100);
      }
    };

    scheduleLoad();

    return () => {
      if (listenersAdded) {
        window.removeEventListener('scroll', loadChat);
        window.removeEventListener('click', loadChat);
        window.removeEventListener('touchstart', loadChat);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [shouldLoadChat]);

  return (
    <footer className="w-full bg-primary px-4 py-16 md:py-14">
      {shouldLoadChat && <FreshChatLoader lang={lang} />}
      <div className="mx-auto max-w-6xl">
        {/* Logo + Columns */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo & App Buttons */}
          <div className="flex flex-col items-center md:items-start">
            <Link href={'/'} className="mb-6 opacity-60">
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
                        href={item.nav}
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

        {/* Social Links */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/40 ltr:font-montserrat">
            &copy; {new Date().getFullYear()} The Daisy. All rights reserved.
          </p>
          <ul className="flex items-center gap-x-6">
            <li>
              <Link href={socialLinks.facebook_url} target="_blank" rel="noopener noreferrer">
                <FacebookIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.twitter_url} target="_blank" rel="noopener noreferrer">
                <TwitterIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.linkedin_url} target="_blank" rel="noopener noreferrer">
                <LinkedInIcons />
              </Link>
            </li>
            <li>
              <Link href={socialLinks.instagram_url} target="_blank" rel="noopener noreferrer">
                <InstagramIcons />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
