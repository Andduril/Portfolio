import { FC } from 'react';

export type StatisticCardProps = {
  title: string;
  value: number;
};

const StatisticCard: FC<StatisticCardProps> = ({ title, value }) => {
  return (
    <li className="flex flex-col gap-0.5 items-center justify-start text-center w-20">
      <span className="text-2xl">{value}</span>
      <span className="text-xs">{title}</span>
    </li>
  );
};

export default StatisticCard;
