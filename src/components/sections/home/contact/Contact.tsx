import MailIcon from '@/components/icons/MailIcon';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';
import { cn } from '@sglara/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import ContactForm from './ContactForm';

const Contact: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('contact');

  return (
    <section className={className} {...props}>
      <Glass className="flex flex-col items-center p-4 gap-4">
        <h2 className="text-2xl font-bold text-primary dark:text-slate-50">{t('title')}</h2>
        <p className="text-xs text-center">{t('description')}</p>
        <ContactForm className="px-4" />
      </Glass>
    </section>
  );
};

export default Contact;
