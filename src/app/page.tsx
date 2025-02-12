import { headers } from 'next/headers';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Background from '@/components/ui/Background';
import BackgroundMobile from '@/components/ui/BackgroundMobile';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import Reveal from '@/components/ui/Reveal';

import Guts from '../../public/guts.jpg';

const HomePage = async () => {
  const t = await getTranslations('HomePage');
  const headersList = await headers();
  const isMobile = headersList.get('user-agent')?.includes('Mobile');

  if (isMobile) {
    return (
      <>
        <BackgroundMobile
          gradient={{
            display: true,
            colorStart: 'rgba(0, 125, 100, 0.65)',
            colorEnd: 'rgba(15, 15, 15, 1)',
            radius: 200,
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
        <main className="min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1>{t('title')}</h1>
            <h2>{t('job')}</h2>
          </div>
        </main>
      </>
    );
  }

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
            <LocaleSwitcher />
          </div>
        </Reveal>
      </main>
    </>
  );
};

export default HomePage;
