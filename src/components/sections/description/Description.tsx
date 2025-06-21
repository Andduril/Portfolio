import { getTranslations } from 'next-intl/server';

const Description = async () => {
  const t = await getTranslations('description');

  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-2xl">{t('title')}</h2>
      <p className="text-justify text-xs font-normal">{t('content')}</p>
    </section>
  );
};

export default Description;
