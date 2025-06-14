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
    <header className="fixed top-0 w-full">
      <nav className="flex flex-row-reverse gap-2 p-2">
        <button className="cursor-pointer" onClick={handleSettingsClick}>
          {locale === 'en' ? '🇫🇷' : '🇬🇧'}
        </button>
        <ul className="flex flex-row gap-2">
          <li className="cursor-pointer">{t('projects')}</li>
          <li className="cursor-pointer">{t('contact')}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
