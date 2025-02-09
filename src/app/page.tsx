import { useTranslations } from 'next-intl';

import Background from '@/components/ui/Background';

const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <main className="relative min-h-screen">
      <Background
        className="absolute size-full"
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
      >
        <div className="flex items-center justify-center size-full">
          <h1 className="text-6xl">{t('title')}</h1>
        </div>
      </Background>
    </main>
  );
};

export default HomePage;
