'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const LocaleSwitcher = () => {
  const localeValue = useLocale();
  const [locale, setLocale] = useState(localeValue);
  const router = useRouter();

  const handleSwitchLocale = () => {
    setLocale(locale === 'en' ? 'fr ' : 'en');

    document.cookie = `locale=${locale === 'en' ? 'fr' : 'en'}; path=/`;
    router.refresh();
  };

  return <button onClick={handleSwitchLocale}>{locale === 'en' ? '🇬🇧' : '🇫🇷'}</button>;
};

export default LocaleSwitcher;
