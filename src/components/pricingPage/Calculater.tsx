import { Input } from '../ui/input';
import { ToggleButton } from './ToggleButton';

export const Calculater = ({
  calculate,
  setCalculate,
  homeService,
  setHomeService,
  onboarding,
  setOnboarding,
  conciergeService,
  setConciergeService,
}: any) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-6 w-full mr-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6 ">
            <div className="md:min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                How many working staff do you have in your team?
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                $10 per additional calendar
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  staff: e.target.value,
                }))
              }
              type="number"
              className="w-full md:w-20 ml-0 md:ml-8 mt-2 md:mt-0 focus:border-[#A67F6B] text-center py-[14px] md:py-2"
              defaultValue={calculate.staff}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[84px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                How many branches or locations do you have?
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                $25 per additional branch/location
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  branch: e.target.value,
                }))
              }
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={calculate.branch}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                How many countries do you operate in?
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                $50 per additional country
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={calculate.country}
              min="1"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                Do you provide home service visits?
              </h2>
              <p className="font-montserrat text-[#455150]">
                $25 per additional branch/location
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="provideHome"
              homeService={homeService}
              setHomeService={setHomeService}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[84px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7 ">
                Would you like assistance with onboarding and services setup?
              </h2>
              <p className="font-montserrat text-[#455150]">
                One-time Fee $100
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="assistantOnboard"
              homeService={onboarding}
              setHomeService={setOnboarding}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                Would you like to have the 24/7 concierge service?
              </h2>
              <p className="font-montserrat text-[#455150]">
                1$ per appointment
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="available"
              homeService={conciergeService}
              setHomeService={setConciergeService}
            />
          </div>
        </div>
      </div>
    </>
  );
};
