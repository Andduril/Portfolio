import { headers } from 'next/headers';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const TopBar = async () => {
  const headersList = await headers();
  const isMobile = headersList.get('user-agent')?.includes('Mobile');
  const t = await getTranslations('Navigation');

  if (isMobile) {
    return (
      <header className="sticky bg-transparent top-0 left-0 w-full z-20">
        <div className="flex flex-row items-center justify-center bg-yellow-500 p-2">
          <h5 className="text-2xl text-black">{t('underConstruction')}</h5>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky bg-transparent top-0 left-0 w-full z-20">
      <div className="flex flex-row items-center justify-center bg-yellow-500 p-2">
        <h5 className="text-2xl text-black">{t('underConstruction')}</h5>
      </div>
      <div className="flex flex-row items-center px-10">
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
      </div>
    </header>
  );
};

export default TopBar;
