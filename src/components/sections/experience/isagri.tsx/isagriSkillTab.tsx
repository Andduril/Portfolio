import { Skill, SkillKeys } from '@/models/Skills';
import { getMessages, getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import IsagriSkillList from './IsagriSkillList';

type IsagriSkillTabProps = {
  skill: Skill;
};

const IsagriSkillTab: FC<IsagriSkillTabProps> = async ({ skill }) => {
  const t = await getTranslations(`experience.isagri.skills.${skill}`);

  return (
    <div className="w-full relative flex flex-col gap-2 p-2 font-normal overflow-y-scroll max-h-80">
      <h5 className="text-md text-center">{t('title')}</h5>
      <IsagriSkillList
        className="mx-2 flex flex-row justify-center flex-wrap gap-4 text-xs"
        skill={skill}
      />
    </div>
  );
};

export default IsagriSkillTab;
