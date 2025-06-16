import { cn } from '@sglara/cn';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

export type CardProps = {
  noBorder?: boolean;
};

const Card: FC<ComponentPropsWithoutRef<'div'> & CardProps> = ({
  children,
  className,
  noBorder,
  ...props
}) => {
  return (
    <div
      className={cn(
        `backdrop-blur-md ${!noBorder && 'border-white/20 border border-spacing-0.5'} rounded-xl p-6`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
