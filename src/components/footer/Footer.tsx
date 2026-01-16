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
import { useEffect, useState, startTransition } from 'react';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import {
  getCached,
  setCache,
  getCacheKey,
  CACHE_KEYS,
} from '@/helpers/apiCache';

// Lazy load FreshChat widget - only load after user interaction
const FreshChatLoader = dynamic(
  () => import('@/components/freshChatWidget/FreshChatWidget'),
  { ssr: false },
);

interface NavItem {
  nav: string;
  name: string;
}

interface SocialLinks {
  facebook_url: string;
  twitter_url: string;
  linkedin_url: string;
  instagram_url: string;
}

export const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);
  const [navList, setNavList] = useState<NavItem[] | null>(null);
  const [shouldLoadChat, setShouldLoadChat] = useState(false);
  const path = usePathname();
  const { lang } = useChangeLanguage();

  const isVisibleAppBtn = path.includes('get-the-app');

  // Defer FreshChat loading until user scrolls or interacts
  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoadChat(true);
      // Remove listeners after first interaction
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    const scheduleLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          window.addEventListener('scroll', handleInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener('click', handleInteraction, { once: true });
          window.addEventListener('touchstart', handleInteraction, {
            once: true,
            passive: true,
          });
        });
      } else {
        setTimeout(() => {
          window.addEventListener('scroll', handleInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener('click', handleInteraction, { once: true });
          window.addEventListener('touchstart', handleInteraction, {
            once: true,
            passive: true,
          });
        }, 2000);
      }
    };

    scheduleLoad();

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  useEffect(() => {
    const fetchFooterData = async () => {
      // Check cache first
      const socialCacheKey = getCacheKey(CACHE_KEYS.FOOTER_SOCIAL, lang);
      const navCacheKey = getCacheKey(CACHE_KEYS.FOOTER_NAV, lang);

      const cachedSocial = getCached<SocialLinks>(socialCacheKey);
      const cachedNav = getCached<NavItem[]>(navCacheKey);

      // If all data is cached, use it immediately
      if (cachedSocial && cachedNav) {
        startTransition(() => {
          setSocialLinks(cachedSocial);
          setNavList(cachedNav);
        });
        return;
      }

      // Fetch data in parallel
      const [responseSocial, responseNav] = await Promise.all([
        cachedSocial
          ? Promise.resolve(null)
          : axiosInstance.get(`/social-links?locale=${lang}`),
        cachedNav
          ? Promise.resolve(null)
          : axiosInstance.get(`/footers?locale=${lang}`),
      ]);

      // Process and cache social links
      if (responseSocial) {
        const socialData =
          responseSocial?.data?.data?.[0]?.attributes?.socialLinks;
        setCache(socialCacheKey, socialData);
        startTransition(() => setSocialLinks(socialData));
      }

      // Process and cache navigation list
      if (responseNav) {
        const navData =
          responseNav?.data?.data?.[0]?.attributes?.navigationfooterList;
        setCache(navCacheKey, navData);
        startTransition(() => setNavList(navData));
      }
    };

    fetchFooterData();
  }, [lang]);
  return (
    <footer className="w-full bg-primary px-4 py-[124px] md:py-14 flex flex-col justify-center items-center">
      {shouldLoadChat && <FreshChatLoader lang={lang} />}
      <Link href={'/'} className="mb-6 opacity-60">
        <LogoIconsS />
      </Link>
      <nav className=" justify-center items-center self-center ">
        <ul className="flex flex-col items-center justify-center ltr:font-montserrat text-[#FFFFFF]/80 md:flex-row md:gap-x-8">
          {navList &&
            navList.map((item, index) => (
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
      {socialLinks && (
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
      )}
    </footer>
  );
};
