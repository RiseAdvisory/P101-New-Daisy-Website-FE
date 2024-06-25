import { constactsList } from '@/lib/constants/constactsList';
import { FormContacts } from './FormContacts';

export const SupportSection = ({ contacts }: { contacts: any }) => {
  return (
    <div className="bg-[#F8F5F3] pb-20 ">
      <div className="w-full h-[300px] md:h-[236px] bg-primary "></div>
      <FormContacts style="md:-translate-y-[235px] -translate-y-[299px] " />
      <ul className="flex flex-col justify-center items-center mx-auto px-4 gap-8  md:grid md:grid-cols-3 md:items-start md:-mt-[120px] -mt-[220px]">
        {constactsList.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <item.icon />
              <h3 className="mt-5 font-montserrat font-medium text-xl">
                {item.title}
              </h3>
              <p className="mt-1 font-montserrat text-[#455150] md:px-14">
                {item.description}
              </p>
              {item.connection && (
                <p className="text-[#A67F6B] mt-1 font-semibold leading-6">
                  {item.connection}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
