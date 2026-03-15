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
      {listOption && (() => {
        const items = listOption as any[];
        const topCount = Math.ceil(items.length / 2);
        const topRow = items.slice(0, topCount);
        const bottomRow = items.slice(topCount);

        return (
          <div className="flex flex-col items-center gap-3">
            <ul className="flex gap-3 justify-center">
              {topRow.map((item: any, index: number) => (
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
            <ul className="flex gap-3 justify-center">
              {bottomRow.map((item: any, index: number) => (
                <li key={index + topCount}>
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
      })()}
    </div>
  );
};
