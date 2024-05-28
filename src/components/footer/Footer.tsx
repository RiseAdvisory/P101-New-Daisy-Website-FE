import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';

import Link from 'next/link';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { FacebookIcons } from '@/assets/icons/socialLinksIcons/FacebookIcons';
import { TwitterIcons } from '@/assets/icons/socialLinksIcons/TwitterIcons';
import { LinkedInIcons } from '@/assets/icons/socialLinksIcons/LinkedInIcons';
import { InstagramIcons } from '@/assets/icons/socialLinksIcons/InstagramIcons';
import { navigationList } from '@/lib/constants/footerNavigationList';


export const Footer = () => {
  return (
    <footer className="w-full bg-primary px-4 py-[124px] md:py-14 flex flex-col justify-center items-center border-t">
      <div className="mb-6">
        <LogoIconsS />
      </div>
      <nav className=" justify-center items-center self-center md:pt-6 md:pb-8">
        <ul className="flex flex-col items-center justify-center font-montserrat text-gray-400 md:flex-row md:space-x-5">
          {navigationList.map((item, index) => {
            return (
              <Link key={index} href="///" className="pb-6">
                {item}
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="w-full md:flex md:max-w-[650px]">
        {' '}
        <PlayMarketButton className="mb-4 md:mr-6" />
        <AppStoreButton />
      </div>
      <ul className="flex mx-auto items-center justify-center mt-8 space-x-6">
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
