import { ComponentPropsWithRef, FC } from 'react';

import { cn } from '@/lib/utils';

const Section: FC<ComponentPropsWithRef<'section'>> = ({ className, children, ...props }) => {
  return (
    <section className={cn(className, 'min-h-screen')} {...props}>
      {children}
    </section>
  );
};

export default Section;
