'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { optionsToogle } from '@/lib/constants/headernavigationList';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const ToggleButton = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  return (
    <div
      className={cn(
        'flex border rounded-lg p-2 bg-customWhite border-primaryBtn max-w-content w-[400px] mb-8',
        className,
      )}
    >
      {optionsToogle.map((option) => (
        <Link
          href={`${option.path.toLowerCase()}`}
          key={option.path}
          onClick={() => setActive(option.path)}
          className={clsx(
            'px-6 py-1 rounded-lg font-semibold cursor-pointer ',
            {
              'bg-white text-black ': active === option.path,
              'text-[#ABB4B3] hover:text-white': active !== option.path,
            },
          )}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default ToggleButton;
