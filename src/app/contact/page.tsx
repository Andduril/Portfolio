import { getTranslations } from 'next-intl/server';

const ContactPage = async () => {
  const t = await getTranslations('ContactPage');

  return <h1>{t('title')}</h1>;
};

export default ContactPage;
