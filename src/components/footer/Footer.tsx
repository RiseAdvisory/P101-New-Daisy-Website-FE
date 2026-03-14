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
  const navList = data.navigationfooterList;

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
    <footer className="w-full bg-primary px-4 py-[124px] md:py-14 flex flex-col justify-center items-center">
      {shouldLoadChat && <FreshChatLoader lang={lang} />}
      <Link href={'/'} className="mb-6 opacity-60">
        <LogoIconsS />
      </Link>
      <nav className=" justify-center items-center self-center ">
        <ul className="flex flex-col items-center justify-center ltr:font-montserrat text-[#FFFFFF]/80 md:flex-row md:gap-x-8">
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.nav}
              className="pb-8 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      {!isVisibleAppBtn && (
        <div className="w-full md:flex md:max-w-[650px]">
          <PlayMarketButton className="mb-4 md:mb-0 md:mr-6 rtl:mr-0 rtl:ml-6" />
          <AppStoreButton />
        </div>
      )}
      <ul className="flex mx-auto items-center justify-center mt-8 gap-x-6">
        <li>
          <Link href={socialLinks.facebook_url} target="blank">
            <FacebookIcons />
          </Link>
        </li>
        <li>
          <Link href={socialLinks.twitter_url} target="blank">
            <TwitterIcons />
          </Link>
        </li>
        <li>
          <Link href={socialLinks.linkedin_url} target="blank">
            <LinkedInIcons />
          </Link>
        </li>
        <li>
          <Link href={socialLinks.instagram_url} target="blank">
            <InstagramIcons />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
