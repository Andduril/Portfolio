'use client';

import { setLang } from '@/actions/setLang';
import { setTheme } from '@/actions/setTheme';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import Glass from '../ui/Glass';

type HeaderProps = {
  theme: string;
  lang: string;
};

const Header: FC<HeaderProps> = ({ theme, lang }) => {
  const t = useTranslations('header');

  const handleSettingsClick = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  const handleSetThemeClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky z-50 top-0 w-full">
      <Glass className="p-2 rounded-none flex flex-row items-center justify-between">
        <Link
          href={'/'}
          className="text-md cursor-pointer text-primary dark:text-slate-50 font-bold"
        >
          {t('title')}
        </Link>
        <div className="flex flex-row gap-1">
          <Glass opacity={20} className="cursor-pointer px-1" onClick={handleSetThemeClick}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </Glass>
          <Glass opacity={20} className="cursor-pointer px-1" onClick={handleSettingsClick}>
            {lang === 'en' ? '🇫🇷' : '🇬🇧'}
          </Glass>
        </div>
      </Glass>

      {/* <nav className="flex flex-row-reverse gap-2">
        <button className="cursor-pointer" onClick={handleSetThemeClick}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <button className="cursor-pointer" onClick={handleSettingsClick}>
          {lang === 'en' ? '🇫🇷' : '🇬🇧'}
        </button>
      </nav> */}
    </header>
  );
};

export default Header;
