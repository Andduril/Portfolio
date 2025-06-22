import { ExperienceType, validExperienceNames } from '@/models/Experience';
import { GetStaticPaths } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound, redirect } from 'next/navigation';
import { FC } from 'react';

type PageProps = {
  params: Promise<{ name: ExperienceType }>;
};

const Page: FC<PageProps> = async ({ params }) => {
  const { name } = await params;

  if (!validExperienceNames.includes(name)) {
    redirect('/');
  }

  const t = await getTranslations(`experience.${name}`);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">{t('title')}</h1>
    </div>
  );
};

export default Page;
