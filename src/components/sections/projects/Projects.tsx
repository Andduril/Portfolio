import { cn } from '@sglara/cn';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import ProjectMobileCard from './ProjectMobileCard';

const Projects: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('projects');

  return (
    <section className={cn('flex flex-col gap-2', className)} {...props}>
      <h2 className="text-3xl text-center">{t('title')}</h2>
      <p className="text-sm font-normal text-justify">{t('description')}</p>
      <ul className="flex flex-col gap-4">
        <ProjectMobileCard project="alistigo" imagePath="/alistigo.png" />
        <ProjectMobileCard project="portfolio" imagePath="/portfolio.png" />
        <ProjectMobileCard project="chatApplication" imagePath="/chatApplication.png" />
      </ul>
    </section>
  );
};

export default Projects;
