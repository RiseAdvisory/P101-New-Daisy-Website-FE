import { QAAccordion } from '../qaAccordion/QAAccordion';

export const QASection = () => {
  return (
    <div className="bg-[#F8F5F3] px-4 pb-28 md:pt-[200px]">
      <h1 className="text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px] md:text-[40px] md:leading-[50px] md:font-bold">
        Frequently Asked Question
      </h1>
      <div className="md:mt-12 md:px-[288px]">
        {Array.from({ length: 6 }).map((_, index) => {
          return <QAAccordion key={index} value={index} />;
        })}
      </div>
    </div>
  );
};
