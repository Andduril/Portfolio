import { getTranslations } from 'next-intl/server';

const ProjectPage = async () => {
  const t = await getTranslations('ProjectsPage');

  return <h1>{t('title')}</h1>;
};

export default ProjectPage;
