import Contact from '@/components/sections/home/contact/Contact';
import Description from '@/components/sections/home/description/Description';
import Experiences from '@/components/sections/home/experiences/Experiences';
import Formations from '@/components/sections/home/formations/Formations';
import MotionStatistics from '@/components/sections/home/presentation/MotionStatistics';
import Presentation from '@/components/sections/home/presentation/Presentation';
import Projects from '@/components/sections/home/projects/Projects';
import Skills from '@/components/sections/home/skills/Skills';
import Glass from '@/components/ui/Glass';
import MotionGlass from '@/components/ui/MotionGlass';
import getDevice from '@/utils/getDevice';
import { getTranslations } from 'next-intl/server';

const HomePage = async () => {
  const t = await getTranslations('home.presentation');
  const device = await getDevice();

  const isMobile = device === 'mobile';

  if (isMobile) {
    return (
      <div className="relative flex flex-col items-center pt-8">
        <div className="relative flex flex-col items-center gap-3 max-w-[360px]">
          <Glass className="p-5">
            <Presentation />
          </Glass>
          <Glass className="m-3 p-3">
            <Description />
          </Glass>
          <Formations />
          <Skills className="px-3" />
          <Experiences className="px-3" />
          <Projects className="px-3" />
          <Contact className="px-3" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative flex flex-col items-center p-8">
      <MotionGlass
        className="flex-1 relative flex flex-row justify-around items-center gap-8 p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionGlass opacity={30} className="p-4">
          <Presentation device="desktop" />
        </MotionGlass>
        <div className="relative flex flex-col gap-2 max-w-1/2">
          <Description className="w-full" />
          <MotionStatistics />
        </div>
      </MotionGlass>
    </div>
  );
};

export default HomePage;
