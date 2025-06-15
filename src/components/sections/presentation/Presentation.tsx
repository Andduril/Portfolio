import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Statistics from './Statistics';
import Social from './Social';
import DownloadIcon from '@/components/icons/DownloadIcon';

const Presentation = async () => {
  const t = await getTranslations('presentation');
  const locale = await getLocale();

  return (
    <section className="flex flex-col items-center gap-3">
      <Image
        src="/guts.jpg"
        alt="Guts from the anime 'Berserk'"
        width={150}
        height={150}
        className="rounded-full size-28"
      />
      <h1 className="text-4xl">{`${t('firstName')} ${t('lastName')}`}</h1>
      <h2 className="text-md">{t('title')}</h2>
      <Statistics />
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
      <p className="px-2 text-md text-justify">{t('description')}</p>
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
