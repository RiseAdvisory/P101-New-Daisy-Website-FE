'use client';
import { Button } from '../ui/button';

export const SectionBusiness = ({ listOption }: any) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:block mt-[33px] px-4">
      <ul className="flex flex-wrap gap-3 justify-center">
        {listOption &&
          listOption.map((item: any, index: number) => (
            <li key={index}>
              <Button
                className="py-3 px-6 border border-[#586968] bg-white/10 text-white whitespace-nowrap"
                onClick={() => handleScroll(item.path)}
              >
                {item.title}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};
