'use client';

import { ComponentType, FC, ReactElement, useState } from 'react';
import SkillTab from './SkillTab';
import { Skill } from '@/models/Skills';
import CodeIcon from '@/components/icons/CodeIcon';
import BriefcaseIcon from '@/components/icons/BriefcaseIcon';
import ChatBubbleIcon from '@/components/icons/ChatBubbleIcon';
import AcademicIcon from '@/components/icons/AcademicIcon';
import IsagriSkillTab from '../../experience/isagri.tsx/isagriSkillTab';

type SkillTabItem = {
  key: Skill;
  content: ReactElement<typeof SkillTab | typeof IsagriSkillTab>;
};

type SkillTabsProps = {
  tabs: SkillTabItem[];
};

const getSkillIcon = (skill: Skill, isActive?: boolean) => {
  const iconClass = isActive ? 'text-primary dark:text-slate-50' : 'text-gray-500';

  switch (skill) {
    case 'programmingLanguages':
      return <CodeIcon className={iconClass} />;
    case 'frameworks':
      return <BriefcaseIcon className={iconClass} />;
    case 'softSkills':
      return <ChatBubbleIcon className={iconClass} />;
    default:
      return <AcademicIcon className={iconClass} />;
  }
};

const SkillTabs: FC<SkillTabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <ul className="flex flex-col gap-4 justify-center">
        {tabs.map((tab, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            key={index}
            className="text-xs font-normal cursor-pointer flex flex-row items-center gap-2"
          >
            <div className="size-6">{getSkillIcon(tab.key, activeIndex === index)}</div>
            <span className="hidden">{tab.key}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-grow">{tabs[activeIndex]?.content}</div>
    </>
  );
};

export default SkillTabs;
