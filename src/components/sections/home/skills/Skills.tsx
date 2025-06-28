import Card from '@/components/ui/Card';
import { cn } from '@/utils/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import SkillTabs from './SkillTabs';
import SkillTab from './SkillTab';
import Glass from '@/components/ui/Glass';

const Skills: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.skills');

  return (
    <section className={cn('relative flex flex-col gap-4 w-full max-w-full', className)} {...props}>
      <h5 className="text-2xl text-center text-primary dark:text-slate-50 font-bold">
        {t('title')}
      </h5>
      <Glass opacity={20} className="w-full flex flex-row overflow-x-hidden p-1 py-2">
        <SkillTabs
          tabs={[
            { key: 'programmingLanguages', content: <SkillTab skill="programmingLanguages" /> },
            { key: 'frameworks', content: <SkillTab skill="frameworks" /> },
            { key: 'softSkills', content: <SkillTab skill="softSkills" /> },
            { key: 'rncp', content: <SkillTab skill="rncp" /> },
          ]}
        />
      </Glass>
    </section>
  );
};

export default Skills;
