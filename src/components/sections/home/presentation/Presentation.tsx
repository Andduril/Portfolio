import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Statistics from './Statistics';
import Social from './Social';
import DownloadIcon from '@/components/icons/DownloadIcon';
import Card from '@/components/ui/Card';
import { ComponentProps, FC } from 'react';
import { cn } from '@sglara/cn';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';

const Presentation: FC<ComponentProps<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.presentation');
  const locale = await getLocale();

  return (
    <section
      className={cn('relative flex flex-col items-center gap-3 text-center', className)}
      {...props}
    >
      <Image
        src="/guts.jpg"
        alt="Guts from the anime 'Berserk'"
        width={150}
        height={150}
        className="rounded-full size-28"
      />
      <h1 className="text-4xl font-sans font-bold text-primary dark:text-slate-50">
        {t('firstName')} {t('lastName')}
      </h1>
      <h2>{t('title')}</h2>
      <div className="flex flex-row gap-2">
        <Social
          src="/github-mark-white.svg"
          alt="GitHub"
          link="https://www.linkedin.com/in/anddy-labrut/"
          size={32}
        />
        <Social
          src="/linkedin-mark-white.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/anddy-labrut/"
          size={32}
        />
      </div>
      <Glass opacity={30} className="relative max-w-2/3">
        <Statistics className="size-full p-2" />
      </Glass>
      <Button
        download
        href={`/Anddy_Labrut_resume_${locale}.pdf`}
        className="flex flex-row items-center gap-1"
      >
        <DownloadIcon />
        {t('curriculum')}
      </Button>
    </section>
  );
};

export default Presentation;
