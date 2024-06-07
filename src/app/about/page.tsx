'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useState } from 'react';

const About = () => {
  const [scroll, setScroll] = useState(null);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        title="We’re some humans who think"
        description="  Our Business Thrives When People Come First - It's That Simple"
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
      />
      <OurMissing setScroll={setScroll} />
      <OurValue />
    </>
  );
};
export default About;
