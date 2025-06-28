'use client';

import { MotionProps } from 'motion/react';
import { blurClasses, GlassProps, opacityClasses } from './Glass';
import { ComponentPropsWithRef, FC } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';
import type { ClassValue } from 'clsx';
import { prefixWithBreakpoint } from '@/utils/breakpoints';

type MotionGlassProps = GlassProps & MotionProps & ComponentPropsWithRef<'div'>;

const MotionGlass: FC<MotionGlassProps> = ({
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
    <motion.div className={cn(glassClasses, className)} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionGlass;
