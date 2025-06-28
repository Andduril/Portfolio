import { getTranslations } from 'next-intl/server';
import FormationCard from './FormationCard';
import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@/utils/cn';

const Formations: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.formations');

  return (
    <section className={cn('relative flex flex-col items-center gap-3', className)} {...props}>
      <h2 className="text-2xl text-primary dark:text-slate-50 font-bold">{t('title')}</h2>
      <ul className="flex flex-col gap-4 w-full p-3">
        <FormationCard type="master" />
        <FormationCard type="bachelor" />
        <FormationCard type="dut" />
      </ul>
    </section>
  );
};

export default Formations;
