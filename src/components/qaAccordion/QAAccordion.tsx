import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const QAAccordion = () => {
  return (
    <Accordion
      type="multiple"
      className="w-full bg-white rounded-[16px] space-x-4 mt-4 border "
    >
      <AccordionItem
        value="item-1"
        className="focus:bg-primary focus:text-white  p-4"
      >
        <AccordionTrigger className="font-montserrat text-base font-semibold text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
