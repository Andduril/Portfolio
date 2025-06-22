export const validExperienceNames = ['isagri', 'amsilab', 'cgi'] as const;
export type ExperienceType = (typeof validExperienceNames)[number];
