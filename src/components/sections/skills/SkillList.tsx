'use client';

import { Skill, SkillsMessages } from '@/models/Skills';
import { useMessages, useTranslations } from 'next-intl';
import { ComponentPropsWithoutRef, FC } from 'react';

type SkillListProps = {
  skill: Skill;
};

const SkillList: FC<SkillListProps & ComponentPropsWithoutRef<'ul'>> = ({ skill, ...props }) => {
  const messages = useMessages() as SkillsMessages;

  const content = messages.skills.content[skill].content;
  const keys = Object.keys(content);

  return (
    <ul {...props}>
      {keys.map((key, index) => {
        const value = content[key];

        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
};

export default SkillList;
