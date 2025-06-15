import { getTranslations } from 'next-intl/server';

const Experiences = async () => {
  const t = await getTranslations('experiences');

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-3xl">{t('title')}</h2>
    </section>
  );
};

export default Experiences;
