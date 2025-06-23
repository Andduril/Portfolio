import { getTranslations } from 'next-intl/server';
import Glass from '../ui/Glass';
import { ComponentProps, FC } from 'react';
import { cn } from '@sglara/cn';

const Footer: FC<ComponentProps<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('footer');

  return (
    <footer className={cn('w-full relative', className)} {...props}>
      <Glass opacity={20} className="size-full py-8 flex justify-center items-center rounded-none">
        <p className="text-sm">{t('copyright')}</p>
      </Glass>
    </footer>
  );
};

export default Footer;
