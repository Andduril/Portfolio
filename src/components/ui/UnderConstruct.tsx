import { getTranslations } from 'next-intl/server';
import Glass from './Glass';
import { ComponentProps, FC } from 'react';
import { cn } from '@sglara/cn';

const UnderConstruct: FC<ComponentProps<'div'>> = async ({ className, ...props }) => {
  const t = await getTranslations('underConstruction');

  return (
    <div className={cn(className)} {...props}>
      <Glass opacity={30} className="flex flex-col items-center justify-center my-8 p-2">
        <h1 className="text-2xl text-primary dark:text-slate-50">{t('title')}</h1>
        <span className="text-sm text-center">{t('description')}</span>
      </Glass>
    </div>
  );
};

export default UnderConstruct;
