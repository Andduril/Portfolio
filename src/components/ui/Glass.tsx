import { cn } from '@sglara/cn';
import { ComponentPropsWithRef, FC } from 'react';

type BlurStrength = 'sm' | 'md' | 'lg';
type BgOpacity = 30 | 20 | 10 | 5 | 0;

type GlassProps = {
  blur?: BlurStrength;
  opacity?: BgOpacity;
};

const Glass: FC<GlassProps & ComponentPropsWithRef<'div'>> = ({
  blur = 'md',
  opacity = 10,
  children,
  className,
  ...props
}) => {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  }[blur];

  const bgClass = {
    30: 'bg-white/30 dark:bg-zinc-700/30',
    20: 'bg-white/20 dark:bg-zinc-700/20',
    10: 'bg-white/10 dark:bg-zinc-700/10',
    5: 'bg-white/5 dark:bg-zinc-700/5',
    0: 'bg-white/0 dark:bg-zinc-700/0',
  }[opacity];

  return (
    <div
      className={cn(
        'isolate rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10',
        blurClass,
        bgClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Glass;
