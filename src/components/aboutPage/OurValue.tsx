import { MessageIcons } from '@/assets/icons/messageIcons/MessageIcons';

export const OurValue = () => {
  return (
    <div className=" px-6 py-[112px] bg-[#F8F5F3]">
      <div className="flex flex-col mx-auto text-center">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Our Values
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat text-base font-normal">
          Our mission is to curate a selection of renowned spas and skilled
          practitioners, offering exclusive cashback offers that reward you for
          your self-care endeavors.
        </p>
        <div className="md:flex md:px-16">
          <ul className="mt-8 md:w-[70%] md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="flex flex-col justify-start items-start text-start border rounded-[12px] px-6 py-8 bg-white"
              >
                <span>
                  <MessageIcons />
                </span>
                <h2 className="mt-6 text-[30px] leading-6">Title</h2>
                <p className="mt-2 text-[#455150] font-montserrat">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod inc.
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-6  justify-start items-start text-start border rounded-[12px] px-6 py-8 bg-white md:w-[30%] md:ml-6 md:mt-[32px]">
            <span>
              <MessageIcons />
            </span>
            <h2 className="mt-6 text-[30px] leading-6">Title</h2>
            <p className="mt-2 text-[#455150] font-montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
