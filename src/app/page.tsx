import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/contact/Contact';
import Description from '@/components/sections/description/Description';
import Experiences from '@/components/sections/experiences/Experiences';
import Formations from '@/components/sections/formations/Formations';
import Presentation from '@/components/sections/presentation/Presentation';
import Projects from '@/components/sections/projects/Projects';
import Skills from '@/components/sections/skills/Skills';
import Card from '@/components/ui/Card';
import { getTranslations } from 'next-intl/server';

const HomePage = async () => {
  const t = await getTranslations('presentation');

  return (
    <>
      <main className="py-24 overflow-hidden">
        <div className="flex flex-col items-center px-2 gap-6">
          <Card className="max-w-full w-full sm:w-auto bg-radial-[at_50%_0%] from-[#4e1c60]/20 to-[#1b0823]/15">
            <Presentation />
          </Card>
          <Card className="max-w-full w-full sm:w-auto bg-radial-[at_50%_0%] from-[#4e1c60]/20 to-[#1b0823]/15">
            <Description />
          </Card>
          <Formations className="max-w-full w-full sm:w-auto" />
          <Skills />
          <Experiences className="max-w-full w-full sm:w-auto" />
          <Card className="max-w-full w-full sm:w-auto">
            <Projects />
          </Card>
          <div className="max-w-full w-full sm:w-auto p-4">
            <Contact />
          </div>
        </div>
        {/* 
        
        
        <Experiences />
        <Projects />
        <Contact /> */}
      </main>
      <Header />
      <Footer />
    </>
  );
};

export default HomePage;
