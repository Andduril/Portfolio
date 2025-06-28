import MailIcon from '@/components/icons/MailIcon';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';
import { cn } from '@/utils/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import ContactForm from './ContactForm';

const Contact: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('contact');

  return (
    <section className={cn('flex flex-col items-center gap-3', className)} {...props}>
      <h2 className="text-2xl font-bold">Contact</h2>
      <Glass className="flex flex-col items-center p-4 gap-4">
        <h3 className="text-xl text-primary dark:text-slate-50">{t('title')}</h3>
        <p className="text-xs text-center">{t('description')}</p>
        <ContactForm className="px-4" />
      </Glass>
    </section>
  );
};

export default Contact;
