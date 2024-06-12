'use client';
import Image, { StaticImageData } from 'next/image';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { useRouter } from 'next/navigation';

interface IpropsBlog {
  image: StaticImageData;
  tags: {
    wellness: string;
    hair: string;
  };
  title: string;
  user: { name: string; date: string; time: string };
  description: string;
  iconOwner: StaticImageData;
}

export const CardPosts = ({
  listCards,
  redirect,
  style,
}: {
  listCards: IpropsBlog[];
  redirect: boolean;
  style?: string;
}) => {
  const router = useRouter();
  return (
    <div className="bg-[#F8F5F3]">
      <div className="h-[230px] md:h-[240px] bg-primary"></div>
      <ul className="bg-[#F8F5F3] px-4 space-y-8 pb-[28px] md:pb-[140px] translate-y-[-231px] md:translate-y-[-241px] bg-transparent -mb-[230px] md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {listCards.map((item, index) => {
          return (
            <li
              onClick={() => {
                if (redirect) {
                  router.push('/resources/legal');
                }
              }}
              key={index}
              className={`w-full mx-auto flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden ${style}`}
            >
              <div className="w-full h-[230px]">
                <Image
                  src={item.image}
                  alt="welness"
                  className="w-full object-cover h-[230px] md:h-[240px]"
                />
              </div>
              <div className="px-6 py-4 mt-6">
                <div className="flex justify-start space-x-2 text-sm">
                  <span className="px-3 py-1 text-[#2543AD] bg-[#E9ECF7] rounded-sm">
                    {item.tags.wellness}
                  </span>
                  <span className="px-3 py-1 text-[#14736F] bg-[#E7F1F1] rounded-sm">
                    {item.tags.hair}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-montserrat font-semibold">
                  {item.title}
                </h3>

                <div className="flex justify-start space-x-2 text-gray-500 text-sm mt-4">
                  <div className=" hidden md:flex border-r pr-[10px]">
                    <Image
                      src={item.iconOwner}
                      alt="people"
                      className="mr-[10px] rounded-full"
                      width={18}
                      height={18}
                    />
                    <span className=" text-gray-500 text-sm">
                      {item.user.name}
                    </span>
                  </div>
                  <span className="flex items-center border-r pr-[10px]">
                    <CalendarIcon className="mr-[10px]" />
                    {item.user.date}
                  </span>
                  <span className="flex items-center ">
                    <ClockIcon className="mr-2" />
                    {item.user.time} to read
                  </span>
                </div>
                <p className="mt-2 text-[#455150] text-sm font-montserrat">
                  In publishing and graphic design, Lorem ipsum is a text
                  placeholder commonly used.
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
