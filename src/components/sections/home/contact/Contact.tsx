import MailIcon from '@/components/icons/MailIcon';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';
import { cn } from '@sglara/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';

const Contact: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.contact');

  return (
    <section className={cn('flex flex-col items-center gap-4', className)} {...props}>
      <h2 className="text-2xl text-primary dark:text-slate-50 font-bold">{t('title')}</h2>
      <Glass className="p-4 flex flex-col items-center gap-4">
        <p className="font-normal text-justify">{t('description')}</p>
        <Button className="flex flex-row gap-1 items-center" href="/contact">
          <MailIcon />
          {t('title')}
        </Button>
      </Glass>
    </section>
  );
};

export default Contact;
