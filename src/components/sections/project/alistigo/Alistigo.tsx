import { getTranslations } from 'next-intl/server';

const Alistigo = async () => {
  const t = await getTranslations('projects.alistigo');

  return <></>;
};

export default Alistigo;
