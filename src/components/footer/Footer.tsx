'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { FacebookIcons } from '@/assets/icons/socialLinksIcons/FacebookIcons';
import { TwitterIcons } from '@/assets/icons/socialLinksIcons/TwitterIcons';
import { LinkedInIcons } from '@/assets/icons/socialLinksIcons/LinkedInIcons';
import { InstagramIcons } from '@/assets/icons/socialLinksIcons/InstagramIcons';
import { navigationList } from '@/lib/constants/footerNavigationList';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const path = usePathname();
  const isVisibleAppBtn = path.includes('get-the-app');
  return (
    <footer className="w-full bg-primary px-4 py-[124px] md:py-14 flex flex-col justify-center items-center">
      <Link href={'/'} className="mb-6">
        <LogoIconsS />
      </Link>
      <nav className=" justify-center items-center self-center ">
        <ul className="flex flex-col items-center justify-center font-montserrat text-[#FFFFFF]/80 md:flex-row md:gap-x-8">
          {navigationList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.nav}
                className="pb-8 hover:text-white"
              >
                {item.name}
              </Link>
            );
          })}
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
          <FacebookIcons />
        </li>
        <li>
          <TwitterIcons />
        </li>
        <li>
          <LinkedInIcons />
        </li>
        <li>
          <InstagramIcons />
        </li>
      </ul>
    </footer>
  );
};
