import { Skill, SkillKeys } from '@/models/Skills';
import { getMessages, getTranslations } from 'next-intl/server';
import { ComponentPropsWithoutRef, FC } from 'react';
import SkillList from './SkillList';

type SkillTabProps = {
  skill: Skill;
};

const SkillTab: FC<SkillTabProps> = async ({ skill }) => {
  const t = await getTranslations(`skills.content.${skill}`);

  return (
    <div className="w-full relative flex flex-col gap-2">
      <h5 className="text-md text-center">{t('title')}</h5>
      <SkillList className="flex flex-row flex-wrap" skill={skill} />
    </div>
  );
};

export default SkillTab;
