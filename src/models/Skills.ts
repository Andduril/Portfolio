export const SkillKeys = ['programmingLanguages', 'frameworks', 'softSkills', 'rncp'] as const;
export type Skill = (typeof SkillKeys)[number];

export type SkillsMessages = {
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
