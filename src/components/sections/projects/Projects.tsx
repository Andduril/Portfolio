'use client';

import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('projects');

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  );
};

export default Projects;
