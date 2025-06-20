import { Variant } from '@/components/sections/experiences/TechBadge';

export const getVariantFromTechnology = (tech: string): Variant => {
  const normalized = tech.toLowerCase();

  if (['javascript', 'js'].includes(normalized)) return 'yellow';
  if (['typescript', 'ts'].includes(normalized)) return 'blue';
  if (['php'].includes(normalized)) return 'indigo';
  if (['c#', 'csharp'].includes(normalized)) return 'purple';
  if (['java'].includes(normalized)) return 'red';
  if (['python'].includes(normalized)) return 'green';
  if (['abap'].includes(normalized)) return 'gray';
  if (['rust'].includes(normalized)) return 'orange';
  if (['go', 'golang'].includes(normalized)) return 'cyan';
  if (['kotlin', 'swift'].includes(normalized)) return 'pink';
  if (['html'].includes(normalized)) return 'red';
  if (['css'].includes(normalized)) return 'indigo';
  if (['graphql'].includes(normalized)) return 'purple';
  if (['sql', 'Sql', 'SQL'].includes(normalized)) return 'blue';

  // Frameworks
  if (['react', 'vue', 'svelte', 'angular'].includes(normalized)) return 'blue';
  if (['node.js', 'node'].includes(normalized)) return 'green';
  if (['symfony', 'laravel'].includes(normalized)) return 'purple';
  if (['spring'].includes(normalized)) return 'green';
  if (['next.js'].includes(normalized)) return 'gray';
  if (['astro'].includes(normalized)) return 'pink';

  // Databases
  if (['mysql', 'postgresql', 'postgres'].includes(normalized)) return 'blue';
  if (['mongodb'].includes(normalized)) return 'green';
  if (['sqlserver', 'hana'].includes(normalized)) return 'gray';
  if (['firebase'].includes(normalized)) return 'yellow';
  if (['redis'].includes(normalized)) return 'red';

  // Tools
  if (['git'].includes(normalized)) return 'orange';
  if (['docker'].includes(normalized)) return 'blue';
  if (['jenkins'].includes(normalized)) return 'red';
  if (['jira'].includes(normalized)) return 'yellow';
  if (['vite', 'webpack', 'pnpm', 'yarn'].includes(normalized)) return 'indigo';

  // Cloud
  if (['aws'].includes(normalized)) return 'yellow';
  if (['azure'].includes(normalized)) return 'blue';
  if (['gcp', 'google cloud'].includes(normalized)) return 'green';
  if (['sap cloud'].includes(normalized)) return 'purple';

  return 'gray';
};
