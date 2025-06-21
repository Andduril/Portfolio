import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Statistics from './Statistics';
import Social from './Social';
import DownloadIcon from '@/components/icons/DownloadIcon';
import Card from '@/components/ui/Card';

const Presentation = async () => {
  const t = await getTranslations('presentation');
  const locale = await getLocale();

  return (
    <section className="flex flex-col items-center gap-3 pt-15 relative">
      <Image
        src="/guts.jpg"
        alt="Guts from the anime 'Berserk'"
        width={150}
        height={150}
        className="absolute left-1/2 top-0 -translate-1/2 rounded-full size-28"
      />
      <h1 className="text-center text-4xl">{`${t('firstName')} ${t('lastName')}`}</h1>
      <h2 className="text-center text-md">{t('title')}</h2>
      <Card noBorder className="px-4 py-3 bg-black/40 relative max-w-full">
        <Statistics />
      </Card>
      <ul className="flex flex-row justify-around gap-4">
        <Social
          src="/github-mark-white.svg"
          alt="GitHub"
          link="https://github.com/Andduril"
          size={32}
        />
        <Social
          src="/linkedin-mark-white.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/anddy-labrut/"
          size={32}
        />
      </ul>
      <a
        download
        href={`/Anddy_Labrut_resume_${locale}.pdf`}
        className="bg-blue-500 hover:bg-blue-700 text-md font-bold py-2 px-4 rounded flex flex-row items-center gap-1 mt-2"
      >
        <DownloadIcon />
        {t('curriculum')}
      </a>
    </section>
  );
};

export default Presentation;
