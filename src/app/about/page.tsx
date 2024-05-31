import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';

const About = () => {
  return (
    <div className="w-full ">
      <HeroPage
        title="We’re some humans who think"
        description="  Our Business Thrives When People Come First - It's That Simple"
      />
      <OurMissing />
      <OurValue />
    </div>
  );
};
export default About;
