export const validProjectNames = ['alistigo', 'portfolio', 'chatApplication'] as const;
export type ProjectType = (typeof validProjectNames)[number];
