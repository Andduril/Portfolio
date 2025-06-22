'use client';

import { setLang } from '@/actions/setLang';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  const handleSettingsClick = () => {
    setLang(locale === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="sticky z-50 top-0 w-full backdrop-blur-md bg-gradient-to-b from-[#4e1c60]/20 to-[#1b0823]/15 flex flex-row justify-between items-center p-2 px-3">
      <Link href={'/'} className="text-md cursor-pointer">
        {t('title')}
      </Link>
      <nav className="flex flex-row-reverse gap-2">
        <button className="cursor-pointer" onClick={handleSettingsClick}>
          {locale === 'en' ? '🇫🇷' : '🇬🇧'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
