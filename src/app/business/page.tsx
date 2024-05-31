import { QASection } from '@/components/QASection/QASection';
import { BecomeFormPartner } from '@/components/businessPage/BecomeFormPartner';
import { BusinessHero } from '@/components/businessPage/BusinessHero';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { GrowthSection } from '@/components/businessPage/GrowthSection';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import image1 from '../../assets/images/iPad.png';
import image2 from '../../assets/images/marketing.png';
import image3 from '../../assets/images/collectPayments.png';
import image4 from '../../assets/images/doublePhone.png';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';
import leaf from '../../assets/images/LeafBg.png';

const Business = () => {
  return (
    <div className="w-full ">
      <BusinessHero />
      <div className="md:hidden">
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
          image={image1}
          className="absolute w-full h-full bottom-0 left-10"
          title="Marketing Tools To Attract New & Retain Current Customers"
          imageClassName=" absolute w-[80%] h-[90%] top-[50%] -translate-y-1/2 right-0"
        />
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
          image={image2}
          className="absolute w-full h-full bottom-0 left-10 "
          title="Friendly Design, Works On Any Mobile Or Desktop device"
          imageClassName=" absolute w-[300px] h-[70%] top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
          imageBgTwo={leaf}
          imageClassNameBgTwo="absolute -top-[70px] -right-[70px] w-[200px] h-[200px] rotate-180 scale-x-[-1]"
        />
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -bottom-[100px] -right-[180px] w-[300px] h-[300px] rotate-[60deg]"
          image={image3}
          className="absolute w-full h-full bottom-0 left-10 "
          title="Collect Payments, Sync Calendars And Automate Daily Processes  "
          imageClassName=" absolute w-[70%] h-[90%] top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
          imageBgTwo={leaf}
          imageClassNameBgTwo="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
        />
        <NoScrollingAnimationBusiness
          imageBg={leaf}
          imageClassNameBg="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
          image={image4}
          className="absolute w-full h-full bottom-0 left-10 "
          title="Performance Reports And Business Analytics To Help You Grow!"
          imageClassName=" absolute w-[60%] h-[80%] bottom-0  -translate-x-1/2 left-[50%]"
        />
      </div>

      {/* <ScrollingAnimationBusiness
        imageClassName=" absolute w-[80%] h-[90%] top-[50%] -translate-y-1/2 right-0"
        whileMotion={{ x: 0, opacity: 1 }}
        initialMotion={{ x: 200, opacity: 0 }}
        classMotion="absolute w-[100%] h-[100%] right-0"
        className="absolute w-full h-full bottom-0 left-10 bg-no-repeat bg-left-bottom bg-cover bg-[url('/images/Leaf1.png')]"
        title="Friendly Design, Works On Any Mobile Or Desktop device"
        image={image1}
      />
      <ScrollingAnimationBusiness
        imageClassName=" absolute w-[80%] h-[90%] top-[50%] -translate-y-1/2 right-0"
        whileMotion={{ x: 0, opacity: 1 }}
        initialMotion={{ x: 200, opacity: 0 }}
        classMotion="absolute w-[90%] h-[100%] right-0"
        image={image2}
        title="Marketing Tools  To Attract New & Retain Current Customers  "
      />
      <ScrollingAnimationBusiness
        imageClassName=" absolute w-[80%] h-[90%] top-[50%] -translate-y-1/2 right-0"
        whileMotion={{ x: 0, opacity: 1 }}
        initialMotion={{ x: 200, opacity: 0 }}
        classMotion="absolute w-[80%] h-[100%] right-0"
        image={image3}
        title="Collect Payments, Sync Calendars And Automate Daily Processes  "
      />
      <ScrollingAnimationBusiness
        imageClassName=" absolute w-[80%] h-[90%] right-[50%] -translate-x-1/2 bottom-0"
        whileMotion={{ x: 0, opacity: 1 }}
        initialMotion={{ x: 200, opacity: 0 }}
        classMotion="absolute w-[60%] h-[80%] bottom-0"
        image={image4}
        title="Performance Reports And Business Analytics To Help You Grow!"
      /> */}
      <OurPartnersSection />
      <DaysiMission />
      <GrowthSection />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection />
      <BecomeFormPartner />
    </div>
  );
};
export default Business;
