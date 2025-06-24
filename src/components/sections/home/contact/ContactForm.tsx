'use client';

import { sendEmail, SendEmailIdle } from '@/actions/sendEmail';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';
import { cn } from '@sglara/cn';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ComponentProps, FC, useActionState } from 'react';

const initialState: SendEmailIdle = {
  status: 'idle',
};

const ContactForm: FC<ComponentProps<'form'>> = ({ className, ...props }) => {
  const [state, formAction, pending] = useActionState(sendEmail, initialState);
  const t = useTranslations('contact.form');

  return (
    <form
      action={formAction}
      className={cn('flex flex-col items-center gap-2 w-full', className)}
      {...props}
    >
      <>
        <label htmlFor="name" className="text-sm font-semibold">
          {t('name')}
        </label>
        <Glass opacity={30} className="py-1 px-4 mb-2 w-full relative">
          <input type="text" id="name" name="name" required className="w-full focus:outline-none" />
        </Glass>
        {state?.status === 'error' && state.errors?.name && (
          <p className="text-red-500 text-xs">{t('nameError')}</p>
        )}
      </>

      <>
        <label htmlFor="email" className="text-sm font-semibold">
          {t('email')}
        </label>
        <Glass opacity={30} className="py-1 px-4 mb-2 w-full relative">
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full focus:outline-none"
          />
        </Glass>
        {state?.status === 'error' && state.errors?.email && (
          <p className="text-red-500 text-xs">{t('emailError')}</p>
        )}
      </>

      <>
        <label htmlFor="message" className="text-sm font-semibold">
          {t('message')}
        </label>
        <Glass opacity={30} className="py-1 px-4 mb-2 w-full relative">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="focus:outline-none resize-none w-full"
          />
        </Glass>
        {state?.status === 'error' && state.errors?.message && (
          <p className="text-red-500 text-xs">{t('messageError')}</p>
        )}
      </>

      <p aria-live="polite" className="text-green-600">
        {state?.status === 'success' && t('successMessage')}
      </p>

      <Button disabled={pending} type="submit">
        {t('button')}
      </Button>
    </form>
  );
};

export default ContactForm;
