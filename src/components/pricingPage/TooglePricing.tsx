'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { optionsTooglePricing } from '@/lib/constants/headernavigationList';
import { cn } from '@/lib/utils';

export const TogglePricing = ({
  className,
  setCurrentPricing,
}: {
  className?: string;
  setCurrentPricing: any;
}) => {
  const [active, setActive] = useState('professional');
  useEffect(() => {
    setCurrentPricing(active);
  }, [active]);
  return (
    <div
      className={cn(
        'flex border rounded-lg p-2 bg-customWhite border-primaryBtn max-w-content  mb-8',
        className,
      )}
    >
      {optionsTooglePricing.map((option) => (
        <button
          // href={`${option.path.toLowerCase()}`}
          onClickCapture={() => setActive(option.path)}
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
        </button>
      ))}
    </div>
  );
};
