import Alistigo from '@/components/sections/project/alistigo/Alistigo';
import ChatApplication from '@/components/sections/project/chatApplication/ChatApplication';
import Portfolio from '@/components/sections/project/portfolio/Portfolio';
import { ProjectType, validProjectNames } from '@/models/Project';
import { notFound, redirect } from 'next/navigation';
import { FC } from 'react';

type PageProps = {
  params: Promise<{ name: ProjectType }>;
};

const Page: FC<PageProps> = async ({ params }) => {
  const { name } = await params;

  if (!validProjectNames.includes(name)) {
    redirect('/');
  }

  switch (name) {
    case 'alistigo':
      return <Alistigo />;
    case 'portfolio':
      return <Portfolio />;
    case 'chatApplication':
      return <ChatApplication />;
    default:
      notFound();
  }
};

export default Page;
