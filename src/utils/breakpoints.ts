import clsx from 'clsx';
import { ClassValue } from 'clsx';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export function prefixWithBreakpoint(bp: Breakpoint, className: ClassValue): ClassValue {
  if (!bp) return className;

  const resolved = clsx(className);

  if (resolved === undefined || resolved === null) {
    return '';
  }

  return resolved
    .split(' ')
    .map((c) => `${bp}:${c}`)
    .join(' ');
}
