import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Background from '@/components/ui/Background';
import Reveal from '@/components/ui/Reveal';

import Guts from '../../public/guts.jpg';

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
        <Reveal duration={1500} trigger>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image className="rounded-full" src={Guts} alt="Logo" width={150} height={150} />
            <h1 className="text-4xl font-bold text-center">{t('title')}</h1>
            <h2 className="text-2xl font-bold text-center">{t('job')}</h2>
          </div>
        </Reveal>
      </main>
    </>
  );
};

export default HomePage;
