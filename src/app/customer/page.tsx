import { QASection } from '@/components/QASection/QASection';
import { BusinessHero } from '@/components/businessPage/BusinessHero';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';

const Customer = () => {
  return (
    <div className="w-full">
      <BusinessHero />
      <JoinTheDaisy />
      <ExperienceDaisy />
      <QASection />
    </div>
  );
};
export default Customer;
