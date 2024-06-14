import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '../separator/Separator';

export const TabsFeaturesProfessional = ({ itemsList }: { itemsList: any }) => {
  console.log(itemsList);
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
          marketing
        </p>
        <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
          Marketing tools to attract new & retain current customers
        </h2>
      </div>
      <Tabs defaultValue={itemsList[0].title} className="flex bg-primary ">
        <TabsList className="flex flex-col py-6  mr-6 ml-16 bg-primary px-6 h-fit">
          <ul className=" flex flex-col text-start bg-primary pb-6 rounded-xl ">
            {itemsList.map((item: any, index: number) => {
              return (
                <div className="group" key={index}>
                  <TabsTrigger
                    key={index}
                    className="!items-start !bg-transparent group hover:!bg-white/10 flex flex-col w-full text-[16px] text-[#172524] mt-[10px] justify-start rounded-lg cursor-pointer capitalize whitespace-nowrap py-3"
                    value={item.title}
                  >
                    <span className="w-fit !text-start text-white font-montserrat  font-semibold text-[20px] leading-[30px]">
                      {item.title}
                    </span>
                    <p className=" text-white">{item.desription}</p>
                  </TabsTrigger>
                  <Separator className="bg-[#828E8E] group-hover:!hidden " />
                </div>
              );
            })}
          </ul>
          {/* <Separator className="bg-[#E8E9E9] mt-4" /> */}
        </TabsList>
        {itemsList.map((item: any, index: number) => {
          return (
            <TabsContent key={index} value={item.title} className="mx-auto">
              <div className=" w-[350px] h-[330px] bg-slate-500"></div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};
