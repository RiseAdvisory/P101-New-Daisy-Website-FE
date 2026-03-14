import { FC } from 'react';

interface StatisticHighlightProps {
  value: string;
  context: string;
  source?: string;
}

export const StatisticHighlight: FC<StatisticHighlightProps> = ({
  value,
  context,
  source,
}) => {
  return (
    <span className="inline">
      <data value={value} className="font-semibold text-primary">
        {value}
      </data>{' '}
      {context}
      {source && (
        <cite className="text-xs text-[#586968] not-italic"> ({source})</cite>
      )}
    </span>
  );
};

export default StatisticHighlight;
