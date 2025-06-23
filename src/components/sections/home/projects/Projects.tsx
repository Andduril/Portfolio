import { cn } from '@sglara/cn';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import ProjectMobileCard from './ProjectMobileCard';
import Glass from '@/components/ui/Glass';

const Projects: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.projects');

  return (
    <section className={cn('flex flex-col gap-2', className)} {...props}>
      <h2 className="text-2xl text-primary dark:text-slate-50 font-bold text-center">
        {t('title')}
      </h2>
      <Glass opacity={20} className="p-4">
        <p className="text-sm font-normal text-justify">{t('description')}</p>
        <ul className="flex flex-col gap-4 mt-4">
          <ProjectMobileCard project="alistigo" imagePath="/alistigo.png" />
          <ProjectMobileCard project="portfolio" imagePath="/portfolio.png" />
          <ProjectMobileCard project="chatApplication" imagePath="/chatApplication.png" />
        </ul>
      </Glass>
    </section>
  );
};

export default Projects;
