import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Experiences from '@/components/sections/experiences/Experiences';
import Formations from '@/components/sections/formations/Formations';
import Presentation from '@/components/sections/presentation/Presentation';
import Card from '@/components/ui/Card';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const HomePage = async () => {
  const t = await getTranslations('presentation');

  return (
    <>
      <Header />
      <main className="pt-14 px-3.5 flex flex-col items-center gap-6">
        <Card>
          <Presentation />
        </Card>
        <Formations />
        <Experiences />
        {/* Projects */}
        {/* Contact */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
