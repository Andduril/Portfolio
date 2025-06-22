import { Clock, Lightbulb, MessageSquare, Puzzle, Repeat, Users } from 'lucide-react';
import { ReactElement } from 'react';

export const SkillKeys = ['programmingLanguages', 'frameworks', 'softSkills', 'rncp'] as const;
export type Skill = (typeof SkillKeys)[number];

export const rncpKeys = [
  'RNCP39490BC01',
  'RNCP39490BC02',
  'RNCP39490BC03',
  'RNCP39490BC04',
  'RNCP39490BC07',
  'RNCP39490BC08',
] as const;
export type Rncp = (typeof rncpKeys)[number];

export type SkillsMessages = {
  home: {
    skills: {
      title: string;
      content: {
        [K in Skill]: {
          title: string;
          content: Record<string, string>;
        };
      };
    };
  };
};

export const softSkillIcons: Record<string, ReactElement> = {
  communication: <MessageSquare className="w-5 h-5" />,
  teamwork: <Users className="w-5 h-5" />,
  problemSolving: <Puzzle className="w-5 h-5" />,
  adaptability: <Repeat className="w-5 h-5" />,
  timeManagement: <Clock className="w-5 h-5" />,
  criticalThinking: <Lightbulb className="w-5 h-5" />,
};
