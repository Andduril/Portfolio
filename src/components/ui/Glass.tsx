import { FC, ComponentPropsWithRef } from 'react';
import { motion, MotionProps } from 'motion/react';
import { cn } from '@/utils/cn';
import { Breakpoint, prefixWithBreakpoint } from '@/utils/breakpoints';
import { ClassValue } from 'clsx';

type BlurStrength = 'sm' | 'md' | 'lg';
type BgOpacity = 30 | 20 | 10 | 5 | 0;

export type GlassProps = {
  /**
   * Strength of the blur effect.
   * @default 'md'
   */
  blur?: BlurStrength;

  /**
   * Background opacity.
   * @default 10
   */
  opacity?: BgOpacity;

  /**
   * Hide the glass effect below a certain breakpoint.
   */
  hiddenBelow?: Breakpoint;
};

export const blurClasses: Record<BlurStrength, string> = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
};

export const opacityClasses: Record<BgOpacity, string> = {
  30: 'bg-white/30 dark:bg-zinc-700/30',
  20: 'bg-white/20 dark:bg-zinc-700/20',
  10: 'bg-white/10 dark:bg-zinc-700/10',
  5: 'bg-white/5 dark:bg-zinc-700/5',
  0: 'bg-white/0 dark:bg-zinc-700/0',
};

const Glass: FC<GlassProps & ComponentPropsWithRef<'div'>> = ({
  blur = 'md',
  opacity = 10,
  hiddenBelow,
  children,
  className,
  ...props
}) => {
  let glassClasses: ClassValue = cn(
    'isolate rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10',
    blurClasses[blur],
    opacityClasses[opacity]
  );

  if (hiddenBelow) {
    glassClasses = prefixWithBreakpoint(hiddenBelow, glassClasses);
  }

  return (
    <div className={cn(glassClasses, className)} {...props}>
      {children}
    </div>
  );
};

export default Glass;
