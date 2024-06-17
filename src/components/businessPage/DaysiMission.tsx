import { MissionIcon } from '@/assets/icons/missioIcon/MissionIcon';
import { daisyMission } from '@/lib/constants/daisyMissionlist';

export const DaysiMission = () => {
  return (
    <div className="bg-[#F8F5F3] pt-[80px] pb-[112px] md:px-[64px]">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center mx-[20px] md:mx-0  text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Daisy Mission & Strategy
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ul className="px-4 mt-12 space-y-6 md:flex rtl:md:gap-6 md:gap-6 md:justify-center md:space-y-0">
        {daisyMission.map((item, index) => {
          return (
            <li key={index} className="bg-white rounded-[12px] p-6 border">
              <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
                {<item.icon />}
              </span>
              <h4 className="font-semibold text-2xl mt-6">{item.title}</h4>
              <p className="mt-2 font-montserrat font-normal">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
