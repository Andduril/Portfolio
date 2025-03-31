import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const TopBar = async () => {
  const t = await getTranslations('Navigation');

  return (
    <header className="sticky bg-transparent top-0 left-0 w-full flex flex-row items-center px-10 z-20">
      <h1 className="grow text-2xl">{t('mainButton')}</h1>
      <nav className="p-4">
        <ul className="flex flex-row gap-8 justify-evenly">
          <Link href={'/'} className="text-gray-400 hover:text-white">
            {t('home')}
          </Link>
          <Link href={'/projects'} className="text-gray-400 hover:text-white">
            {t('projects')}
          </Link>
          <Link href={'/skills'} className="text-gray-400 hover:text-white">
            {t('skills')}
          </Link>
          <Link href={'/contact'} className="text-gray-400 hover:text-white">
            {t('contact')}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
