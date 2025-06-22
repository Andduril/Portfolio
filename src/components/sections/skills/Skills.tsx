import Card from '@/components/ui/Card';
import { cn } from '@sglara/cn';
import { getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import SkillTabs from './SkillTabs';
import SkillTab from './SkillTab';

const Skills: FC<ComponentPropsWithoutRef<'section'>> = async ({ className, ...props }) => {
  const t = await getTranslations('home.skills');

  return (
    <section className={cn('relative flex flex-col gap-4 w-full max-w-full', className)} {...props}>
      <h5 className="text-3xl text-center">{t('title')}</h5>
      <Card className="w-full flex flex-row overflow-x-hidden p-1 py-2">
        <SkillTabs
          tabs={[
            { key: 'programmingLanguages', content: <SkillTab skill="programmingLanguages" /> },
            { key: 'frameworks', content: <SkillTab skill="frameworks" /> },
            { key: 'softSkills', content: <SkillTab skill="softSkills" /> },
            { key: 'rncp', content: <SkillTab skill="rncp" /> },
          ]}
        />
      </Card>
    </section>
  );
};

export default Skills;
