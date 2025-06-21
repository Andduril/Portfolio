import { getTranslations } from 'next-intl/server';
import FormationCard from './FormationCard';
import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '@sglara/cn';

const Formations: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('formations');

  return (
    <section className={cn('flex flex-col items-center gap-3 relative', className)} {...props}>
      <h2 className="text-3xl">{t('title')}</h2>
      <ul className="flex flex-col gap-4 w-full">
        <FormationCard type="master" />
        <FormationCard type="bachelor" />
        <FormationCard type="dut" />
      </ul>
    </section>
  );
};

export default Formations;
