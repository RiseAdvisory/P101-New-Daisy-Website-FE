import { DoteIcon } from '@/assets/icons/doteIcon/DoteIcon';
import { Button } from '../ui/button';

export const Vacansies = () => {
  return (
    <div className=" px-4 py-20 bg-[#F8F5F3] md:flex md:justify-between">
      <div className="bg-white p-8 border rounded-[12px] md:mr-6 md:h-fit">
        <p className="uppercase text-[#A67F6B] font-bold">get in touch</p>
        <p className="font-montserrat font text-[#2E3B3A] mt-2">
          If you feel this speaks to you, we would love to talk to you, so
          please share your resume with us on
        </p>
        <span className="text-[#A67F6B] font-montserrat">
          careers@trythedaisy.com
        </span>
        <Button
          type="submit"
          className="hover:bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 bg-primary font-montserrat font-semibold text-white hover:text-primary md:py-4 md:h-auto"
        >
          Got a question? Contact us
        </Button>
      </div>
      <ul className="space-y-6 mt-6 md:flex md:flex-col md:w-full md:mt-0">
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <li
              key={index}
              className="bg-white p-8 border rounded-[12px] w-full"
            >
              <p className="font-bold text-2xl">Software Engineer</p>
              <p className="flex justify-start items-center font-montserrat text-[#2E3B3A] my-2">
                <span>English C1 Remote </span>
                <DoteIcon /> <span>Remote</span>
              </p>
              <span className="text-[#14736F] bg-[#E7F1F1] px-[10px] py-[1px] font-montserrat rounded-[20px]">
                2 years experience
              </span>
              <Button
                type="submit"
                className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary font-montserrat font-semibold hover:text-white md:py-4 md:h-auto"
              >
                Apply
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
