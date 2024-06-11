import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const CalculatePricing = () => {
  return (
    <div className="bg-[#828E8E] rounded-[16px] p-8 w-full">
      <div className="p-8 rounded-[16px] bg-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#172524] font-semibold text-[18px] leading-7 font-montserrat">
              Let`s Calculate the Perfect Tier for Your Career
            </h2>
            <p className="font-montserrat text-[#455150]">
              Please answer the questions below to help us choose the best tier
              for your business.
            </p>
          </div>
          <Button className="font-montserrat border border-[#2E4342] text-primary hover:text-white font-semibold px-[89px] py-[12px] bg-white hover:bg-primary">
            Calculate
          </Button>
        </div>
        <Separator className="mt-6 bg-[#E8E9E9]" />
        <div className="flex justify-between">
          <div className="mt-6 w-full mr-12">
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                  How many working staff do you have in your team?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  $10 per additional calendar
                </p>
              </div>
              <Input className="w-20 ml-8 focus:border-[#A67F6B]" />
            </div>
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                  How many branches or locations do you have?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  $25 per additional branch/location
                </p>
              </div>
              <Input className="w-20 ml-8 focus:border-[#A67F6B]" />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                  How many countries do you operate in?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  $50 per additional country
                </p>
              </div>
              <Input className="w-20 ml-8 focus:border-[#A67F6B]" />
            </div>
          </div>
          <div className="mt-6 w-full">
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                  Do you provide home service visits?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  $25 per additional branch/location
                </p>
              </div>
              <Button className="w-20 ml-8 focus:border-[#A67F6B]">cla</Button>
            </div>
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7 text-nowrap">
                  Would you like assistance with onboarding and services setup?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  One-time Fee $100
                </p>
              </div>
              <Button className="w-20 ml-8 focus:border-[#A67F6B]">cla</Button>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                  Would you like to have the 24/7 concierge service?
                </h2>
                <p className="font-montserrat text-[#455150]">
                  1$ per appointment
                </p>
              </div>
              <Button className="w-20 ml-8 focus:border-[#A67F6B]">cla</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
