'use client';

import { Rncp, Skill, SkillsMessages, softSkillIcons } from '@/models/Skills';
import { useMessages, useTranslations } from 'next-intl';
import { ComponentPropsWithoutRef, FC } from 'react';
import RncpCard from '../../home/skills/RncpCard';
import SkillIcon from '../../home/skills/SkillIcon';

type IsagriSkillListProps = {
  skill: Skill;
};

const IsagriSkillList: FC<IsagriSkillListProps & ComponentPropsWithoutRef<'ul'>> = ({
  skill,
  ...props
}) => {
  const messages = useMessages() as SkillsMessages;

  const content = messages.experience.isagri.skills[skill].content;
  const keys = Object.keys(content);

  return (
    <ul {...props}>
      {keys.map((key, index) => {
        const value = content[key];

        if (skill === 'rncp') {
          // Cast value to Rncp type
          const rncpValue = value as Rncp;

          return (
            <li key={index}>
              <RncpCard name={rncpValue} />
            </li>
          );
        }

        return (
          <li key={index} className="size-16 flex flex-col justify-around items-center gap-2 mb-2">
            {skill == 'softSkills' ? (
              <div className="size-6 shrink-0">{softSkillIcons[key]}</div>
            ) : (
              <SkillIcon alt={`${value} icon`} name={key} />
            )}
            <span className="text-xs text-center">{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IsagriSkillList;
