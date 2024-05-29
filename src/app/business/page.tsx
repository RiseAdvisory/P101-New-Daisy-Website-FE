import { QASection } from '@/components/QASection/QASection';
import { BusinessHero } from '@/components/businessPage/BusinessHero';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { GrowthSection } from '@/components/businessPage/GrowthSection';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import { ScrollingAnimationBusiness } from '@/components/scrollingAnimationBusiness/ScrollingAnimationBusiness';

const Business = () => {
  return (
    <div className="w-full bg-primary px-4 py-16">
      <BusinessHero />
      <ScrollingAnimationBusiness title="Friendly Design, Works On Any Mobile Or Desktop device" />
      <ScrollingAnimationBusiness title="Marketing Tools  To Attract New & Retain Current Customers  " />
      <ScrollingAnimationBusiness title="Collect Payments, Sync Calendars And Automate Daily Processes  " />
      <ScrollingAnimationBusiness title="Performance Reports And Business Analytics To Help You Grow!" />
      <OurPartnersSection />
      <DaysiMission />
      <GrowthSection />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection />
    </div>
  );
};
export default Business;
