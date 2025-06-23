import Contact from '@/components/sections/home/contact/Contact';
import Description from '@/components/sections/home/description/Description';
import Experiences from '@/components/sections/home/experiences/Experiences';
import Formations from '@/components/sections/home/formations/Formations';
import Presentation from '@/components/sections/home/presentation/Presentation';
import Projects from '@/components/sections/home/projects/Projects';
import Skills from '@/components/sections/home/skills/Skills';
import Glass from '@/components/ui/Glass';
import { getTranslations } from 'next-intl/server';

const HomePage = async () => {
  const t = await getTranslations('home.presentation');

  return (
    <div className="relative flex flex-col items-center gap-3 pt-8">
      <Presentation />
      <Glass className="m-3 p-3 max-w-md">
        <Description />
      </Glass>
      <Formations />
      <Skills className="px-3" />
      <Experiences className="px-3" />
      <Projects className="px-3" />
      <Contact className="px-3" />
    </div>
  );
};

export default HomePage;
