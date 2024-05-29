import { QAAccordion } from '../qaAccordion/QAAccordion';

export const QASection = () => {
  return (
    <div className="bg-[#F8F5F3] -mx-4 px-4 pb-28">
      <h1 className="text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px]">
        Frequently Asked Question
      </h1>
      {Array.from({ length: 6 }).map((_,index) => {
        return <QAAccordion key={index}/>;
      })}
    </div>
  );
};
