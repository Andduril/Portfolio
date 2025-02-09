import { useTranslations } from 'next-intl';

import Background from '@/components/ui/Background';

const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <Background
        className="size-full"
        gradient={{
          display: true,
          colorStart: 'rgba(0, 125, 100, 0.65)',
          colorEnd: 'rgba(15, 15, 15, 1)',
          radius: 600,
          opacity: 1,
        }}
        dots={{
          display: true,
          color: 'rgba(255, 255, 255, 0.95)',
          radius: 3,
        }}
        lines={{
          display: true,
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      />
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-500 p-4 rounded-lg">
          <h1>{t('title')}</h1>
        </div>
      </main>
    </>
  );
};

export default HomePage;
