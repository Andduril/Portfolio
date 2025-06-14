import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const HomePage = async () => {
  const t = await getTranslations('presentation');

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Presentation */}
        <section className="flex flex-col items-center gap-2">
          <Image
            src="/guts.jpg"
            alt="Guts from the anime 'Berserk'"
            width={150}
            height={150}
            className="rounded-full size-32"
          />
          <h1 className="text-5xl">{`${t('firstName')} ${t('lastName')}`}</h1>
          <h2 className="text-lg">{t('title')}</h2>
          <ul className="flex flex-row justify-around gap-4">
            <li className="rounded-full overflow-hidden">
              <Image
                src="/github-mark-white.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </li>
            <li className="rounded-full overflow-hidden">
              <Image
                src="/linkedin-mark-white.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
