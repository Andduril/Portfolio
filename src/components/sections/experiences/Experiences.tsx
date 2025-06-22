import { getTranslations } from 'next-intl/server';
import ExperienceCard from './ExperienceCard';
import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@sglara/cn';

const Experiences: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.experiences');

  return (
    <section className={cn('flex flex-col items-center gap-3 relative', className)} {...props}>
      <h2 className="text-3xl">{t('title')}</h2>
      <ul className="flex flex-col gap-4 w-full">
        <ExperienceCard type="isagri" imagePath="/logo_isagri_ang-1.png" />
        <ExperienceCard type="amsilab" imagePath="/logo_amsilab.png" />
        <ExperienceCard type="cgi" imagePath="/logo_cgi_color.png" />
      </ul>
    </section>
  );
};

export default Experiences;
