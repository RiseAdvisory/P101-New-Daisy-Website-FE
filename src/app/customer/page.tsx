import { QASection } from '@/components/QASection/QASection';
import { CustomerHero } from '@/components/customerPage/CustomerHero';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';
import leaf from '../../assets/images/LeafBg.png';
import image1 from '../../assets/images/PHONEcustomerHero.png';
import image2 from '../../assets/images/doublePhone.png';
import image3 from '../../assets/images/PhoneCustomerdown.png';
import { GrowthSectionCustomer } from '@/components/customerPage/GrowthCustomer';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';

const Customer = () => {
  return (
    <div className="w-full">
      <CustomerHero />
      <div className="md:hidden">
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
          image={image1}
          className="absolute w-full h-full bottom-0 left-10"
          title="Enjoy Cashback Magic"
          imageClassName=" absolute w-[220px] h-[320px] right-[50%] translate-x-1/2 top-0"
        />
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -top-[70px] -left-[120px] w-[200px] h-[200px] rotate-180"
          image={image2}
          className="absolute w-full h-full bottom-0 left-10 "
          title="Manage Your Booking"
          imageClassName=" absolute w-[300px] h-[300px] bottom-0  -translate-x-1/2 left-[50%]"
        />
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -bottom-[50px] -right-[100px] w-[200px] h-[200px] rotate-[20deg]"
          image={image3}
          className="absolute w-full h-full bottom-0 left-10 "
          title="Rate & Earn Points"
          imageClassName=" absolute w-[230px] h-[320px] top-0 -translate-x-1/2 left-[50%]"
        />
      </div>
      <OurPartnersSection />
      <GrowthSectionCustomer
        title="Empowering Convenience, Safety, and Savings for All!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection />
    </div>
  );
};
export default Customer;
