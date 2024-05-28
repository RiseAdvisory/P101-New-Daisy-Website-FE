import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { optionsToogle } from '@/lib/constants/headernavigationList';

const ToggleButton = () => {
  const [active, setActive] = useState(optionsToogle[0].path);

  return (
    <div className="flex border rounded-lg p-2 bg-customWhite border-primaryBtn">
      {optionsToogle.map((option) => (
        <Link
          // href={option.path}
          href="/"
          key={option.path}
          onClick={() => setActive(option.path)}
          className={clsx('px-6 py-1 rounded-lg font-semibold', {
            'bg-white text-black': active === option.path,
            'text-[#ABB4B3]': active !== option.path,
          })}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default ToggleButton;
