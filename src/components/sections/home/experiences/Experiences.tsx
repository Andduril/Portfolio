import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@sglara/cn';
import ExperienceGlass from './ExperienceGlass';

const Experiences: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.experiences');

  return (
    <section
      className={cn('w-full flex flex-col items-center gap-3 relative', className)}
      {...props}
    >
      <h2 className="text-2xl text-primary dark:text-slate-50 font-bold">{t('title')}</h2>
      <ul className="flex flex-col gap-4 w-full relative">
        <li className="w-full relative">
          <ExperienceGlass type="isagri" imagePath="/logo_isagri_ang-1.png" />
        </li>
        <li className="w-full relative">
          <ExperienceGlass type="amsilab" imagePath="/logo_amsilab.png" />
        </li>
        <li className="w-full relative">
          <ExperienceGlass type="cgi" imagePath="/logo_cgi_color.png" />
        </li>
      </ul>
    </section>
  );
};

export default Experiences;
