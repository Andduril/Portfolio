'use client';

import { setLang } from '@/actions/setLang';
import { useLocale, useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header.navigation');
  const locale = useLocale();

  const handleSettingsClick = () => {
    setLang(locale === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-gradient-to-b from-[#4e1c60]/20 to-[#1b0823]/15">
      <nav className="flex flex-row-reverse gap-2 p-2 px-3">
        <button className="cursor-pointer" onClick={handleSettingsClick}>
          {locale === 'en' ? '🇫🇷' : '🇬🇧'}
        </button>
        <ul className="flex-grow font-normal text-sm flex flex-row gap-2">
          <li></li>
          <li className="cursor-pointer">
            <a href="#presentation">{t('projects')}</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact">{t('contact')}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
