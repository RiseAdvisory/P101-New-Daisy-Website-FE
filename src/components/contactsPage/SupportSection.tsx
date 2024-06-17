import { constactsList } from '@/lib/constants/constactsList';
import { FormContacts } from './FormContacts';

export const SupportSection = () => {
  return (
    <div className="bg-[#F8F5F3] pb-20">
      <FormContacts />
      <ul className="flex flex-col justify-center items-center mx-auto px-4 space-y-8 -mt-[200px] md:space-y-0 md:space-x-8 md:flex md:flex-row md:justify-between md:items-start">
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
              <p className="mt-1 font-montserrat text-[#455150] px-10 md:w-[450px]">
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
