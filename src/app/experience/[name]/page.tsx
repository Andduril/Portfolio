import AmsilabExperience from '@/components/sections/experience/amsilab';
import CgiExperience from '@/components/sections/experience/cgi';
import IsagriExperience from '@/components/sections/experience/isagrI';
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

  switch (name) {
    case 'isagri':
      return <IsagriExperience />;
    case 'amsilab':
      return <AmsilabExperience />;
    case 'cgi':
      return <CgiExperience />;
    default:
      notFound();
  }
};

export default Page;
