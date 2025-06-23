import Glass from '@/components/ui/Glass';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SkillTabs from '../../home/skills/SkillTabs';
import IsagriSkillTab from './isagriSkillTab';

const IsagriExperience = async () => {
  const t = await getTranslations('experience.isagri');

  return (
    <div className="flex flex-col gap-8 items-center font-normal mt-5 mb-10">
      <h1 className="text-2xl font-bold text-primary dark:text-slate-50">{t('title')}</h1>
      <div className="relative w-1/2 aspect-[3/1] mt-1">
        <Image
          src={'/experience/spotifarm/spotifarm.webp'}
          alt="logo spotifarm"
          fill
          className="object-contain"
        />
      </div>
      {/* Blabla */}
      <div className="flex flex-col gap-8">
        {/* Paragraphe 1 */}
        <section className="flex flex-col items-center gap-2">
          <Glass className="p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary text-center dark:text-slate-50">
              Description
            </h3>
            <p className="text-xs text-justify">{t('paragraph1')}</p>
          </Glass>
        </section>
        {/* Paragraphe 2 */}
        <Glass className="p-4">
          <section className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-primary dark:text-slate-50">
              Description technique
            </h3>
            <div className="relative w-full h-36">
              <Image
                src={'/experience/spotifarm/fields.png'}
                alt="Analyzed fields by Spotifarm"
                fill
                className="object-contain"
              />
            </div>
            <div className="px-4">
              <p className="text-xs text-justify">{t('paragraph2')}</p>
            </div>
          </section>
        </Glass>
      </div>
      {/* Skills */}
      <Glass className="w-full flex flex-col gap-5 overflow-x-hidden p-2">
        <h3 className="text-lg font-semibold text-primary text-center dark:text-slate-50">
          Compétences acquise :
        </h3>
        <p className="text-xs text-justify">{t('acquiredSKillsParagraph')}</p>
        <Glass opacity={30} className="p-2 flex flex-row items-center">
          <SkillTabs
            tabs={[
              {
                key: 'programmingLanguages',
                content: <IsagriSkillTab skill="programmingLanguages" />,
              },
              { key: 'frameworks', content: <IsagriSkillTab skill="frameworks" /> },
              { key: 'softSkills', content: <IsagriSkillTab skill="softSkills" /> },
              { key: 'rncp', content: <IsagriSkillTab skill="rncp" /> },
            ]}
          />
        </Glass>
      </Glass>
      {/* Rncp */}
      <div></div>
    </div>
  );
};

export default IsagriExperience;
