import { ProfileForm } from '../formBusiness/FormBusiness';

export const BecomeFormPartner = () => {
  return (
    <div className="bg-primary px-4 border-b border-primaryBtn pb-14">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-white text-[32px] leading-10">
          Become Partner
        </h1>
        <p className="text-center text-[#D5D9D9]  mt-3 font-montserrat">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <ProfileForm />
    </div>
  );
};
