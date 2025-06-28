import { cn } from '@/utils/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithRef, FC } from 'react';

const Description: FC<ComponentPropsWithRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.description');

  return (
    <section className={cn('flex flex-col items-center gap-2', className)} {...props}>
      <h2 className="text-2xl lg:text-2xl font-bold">{t('title')}</h2>
      <p className="text-justify text-xs font-normal">{t('content')}</p>
    </section>
  );
};

export default Description;
