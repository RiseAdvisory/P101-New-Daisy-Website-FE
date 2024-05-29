import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';

import ToggleButton from '../toogleHeader/ToogleHeader';

export const BusinessHero = () => {
  return (
    <>
      <ToggleButton className=" hidden md:block" />
      <h1 className="text-white text-5xl leading-[60px]">
        Easy, Flexible And Powerful, Your Customers Will Love It!
      </h1>
      <p className="font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
        Your Gateway to Seamless
        <br className="md:hidden" /> Services & Unbeatable Deals!
      </p>
      <div className="flex flex-col border-b border-primaryBtn pb-16">
        <PlayMarketButton className="mb-6 mt-8" />
        <AppStoreButton />
      </div>
    </>
  );
};
