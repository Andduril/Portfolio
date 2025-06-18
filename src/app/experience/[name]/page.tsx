import { FC } from 'react';

type PageProps = {
  params: Promise<{ name: string }>;
};

const Page: FC<PageProps> = async ({ params }) => {
  const { name } = await params;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">{name}</h1>
    </div>
  );
};

export default Page;
