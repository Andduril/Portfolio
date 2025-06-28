import { getTranslations } from 'next-intl/server';
import StatisticCard from './StatisticCard';
import { ComponentProps, FC } from 'react';
import { cn } from '@/utils/cn';

const Statistics: FC<ComponentProps<'ul'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.presentation.statistics');

  return (
    <ul
      className={cn(
        'flex flex-row flex-wrap justify-around gap-4 text-primary dark:text-slate-50 font-bold',
        className
      )}
      {...props}
    >
      <StatisticCard title={t('yearsOfExperience')} value={2} />
      <StatisticCard title={t('yearsOfStudies')} value={5} />
      <StatisticCard title={t('degreesEarned')} value={3} />
    </ul>
  );
};

export default Statistics;
