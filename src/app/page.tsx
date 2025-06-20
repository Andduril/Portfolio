import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/contact/Contact';
import Description from '@/components/sections/description/Description';
import Experiences from '@/components/sections/experiences/Experiences';
import Formations from '@/components/sections/formations/Formations';
import Presentation from '@/components/sections/presentation/Presentation';
import Projects from '@/components/sections/projects/Projects';
import Card from '@/components/ui/Card';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const HomePage = async () => {
  const t = await getTranslations('presentation');

  return (
    <>
      <Header />
      <main className="py-32 px-3.5 flex flex-col items-center gap-6">
        <Card className="w-sm bg-radial-[at_50%_0%] from-[#4e1c60]/20 to-[#1b0823]/15">
          <Presentation />
        </Card>
        <Card className="w-sm bg-radial-[at_50%_0%] from-[#4e1c60]/20 to-[#1b0823]/15">
          <Description />
        </Card>
        <Formations />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
