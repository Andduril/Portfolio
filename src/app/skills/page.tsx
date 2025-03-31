import { getTranslations } from 'next-intl/server';

const SkillPage = async () => {
  const t = await getTranslations('SkillsPage');

  return <h1>{t('title')}</h1>;
};

export default SkillPage;
