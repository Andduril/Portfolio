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
    <header className="sticky z-50 top-0 w-full bg-[#0a0b13d3]">
      <div className="p-2 rounded-none flex flex-row items-center justify-between">
        <Link href={'/'} className="text-md cursor-pointer font-bold">
          {t('title')}
        </Link>
        <div className="flex flex-row gap-1">
          {/* <span className="cursor-pointer px-1" onClick={handleSetThemeClick}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </span> */}
          <span className="cursor-pointer px-1" onClick={handleSettingsClick}>
            {lang === 'en' ? '🇫🇷' : '🇬🇧'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
