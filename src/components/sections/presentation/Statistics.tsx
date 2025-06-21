import { getTranslations } from 'next-intl/server';
import StatisticCard from './StatisticCard';

const Statistics = async () => {
  const t = await getTranslations('presentation.statistics');

  return (
    <ul className="flex flex-row flex-wrap justify-around gap-4">
      <StatisticCard title={t('yearsOfExperience')} value={2} />
      <StatisticCard title={t('yearsOfStudies')} value={5} />
      <StatisticCard title={t('degreesEarned')} value={3} />
    </ul>
  );
};

export default Statistics;
