import { getTranslations } from 'next-intl/server';
import FormationCard from './FormationCard';

const Formations = async () => {
  const t = await getTranslations('formations');

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-3xl">{t('title')}</h2>
      <ul className="flex flex-col gap-4">
        <FormationCard type="master" />
        <FormationCard type="bachelor" />
        <FormationCard type="dut" />
      </ul>
    </section>
  );
};

export default Formations;
