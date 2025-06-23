import { getTranslations } from 'next-intl/server';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className="w-full font-normal bg-black/20 text-white py-8 flex justify-center items-center">
      <p className="text-sm">{t('copyright')}</p>
    </footer>
  );
};

export default Footer;
