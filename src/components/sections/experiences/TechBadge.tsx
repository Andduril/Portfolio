import clsx from 'clsx';
import { type ClassValue } from 'clsx';
import { FC } from 'react';

export const techBadgeVariants = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
  'orange',
  'cyan',
] as const;

export type Variant = (typeof techBadgeVariants)[number];

type TechBadgeProps = {
  text: string;
  variant?: Variant;
  className?: ClassValue;
};

const variantClasses: Record<Variant, string> = {
  gray: 'text-gray-400 ring-gray-600/20',
  red: 'text-red-400 ring-red-500/30',
  yellow: 'text-yellow-400 ring-yellow-500/30',
  green: 'text-green-400 ring-green-500/30',
  blue: 'text-blue-400 ring-blue-500/30',
  indigo: 'text-indigo-400 ring-indigo-500/30',
  purple: 'text-purple-400 ring-purple-500/30',
  pink: 'text-pink-400 ring-pink-500/30',
  orange: 'text-orange-400 ring-orange-500/30',
  cyan: 'text-cyan-400 ring-cyan-500/30',
};

const TechBadge: FC<TechBadgeProps> = ({ text, variant = 'gray', className }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
        variantClasses[variant],
        className
      )}
    >
      {text}
    </span>
  );
};

export default TechBadge;
