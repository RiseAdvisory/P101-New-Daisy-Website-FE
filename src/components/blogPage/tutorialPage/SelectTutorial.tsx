'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const SelectTutorials = ({ tabsList }: any) => {
  const [selectTutorials, setSelectTutorials] = React.useState(tabsList?.[0]);
  return (
    <Select
      value={selectTutorials}
      onValueChange={(change) => setSelectTutorials(change)}
    >
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="" aria-label={selectTutorials} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectTutorials}</SelectLabel>
          {tabsList &&
            tabsList.map((item: string, index: number) => {
              return (
                <SelectItem key={index} className="capitalize" value={item}>
                  {item}
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
