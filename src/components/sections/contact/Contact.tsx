import MailIcon from '@/components/icons/MailIcon';
import Button from '@/components/ui/Button';
import { cn } from '@sglara/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';

const Contact: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('contact');

  return (
    <section className={cn('flex flex-col items-center gap-4', className)} {...props}>
      <p className="font-normal text-justify">{t('description')}</p>
      <Button className="flex flex-row gap-1 items-center font-normal w-auto" href="/contact">
        <MailIcon />
        {t('title')}
      </Button>
    </section>
  );
};

export default Contact;
