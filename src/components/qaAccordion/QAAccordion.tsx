import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Separator from '../separator/Separator';

export const QAAccordion = ({ value }: { value: any }) => {
  return (
    <Accordion
      type="multiple"
      className="w-full bg-white rounded-[16px] space-x-4 mt-4 border "
    >
      <AccordionItem
        value={`item-${value}`}
        className="group focus:bg-primary focus:text-white data-[state=open]:bg-primary data-[state=open]:text-white data-[state=open]:rounded-[16px] px-4"
      >
        <AccordionTrigger className="font-montserrat text-base font-semibold text-start !no-underline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </AccordionTrigger>
        <Separator className="hidden group-data-[state=open]:block data-[state=open]:bg-white group-data-[state=open]:my-4 group-data-[state=open]:mb-10" />
        <AccordionContent className="md:text-base  text-[#EAECEC] font-montserrat md:font-normal pb-6">
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
