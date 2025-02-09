'use client';

import { FC, ReactNode, useEffect, useState } from 'react';

type RevealProps = {
  children?: ReactNode;
  duration?: number;
  trigger?: boolean;
};

const Reveal: FC<RevealProps> = ({ children, duration, trigger }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsRevealed(true);
    }
  }, [trigger]);

  return (
    <div
      className="transition-all ease-in-out"
      style={{
        transitionDuration: `${duration || 1000}ms`,
        maskImage: 'linear-gradient(to right, black 0%, black 25%, transparent 50%)',
        maskSize: '300% 100%',
        maskPosition: `${isRevealed ? '0 0' : '100% 0'}`,
        filter: `${isRevealed ? 'blur(0)' : 'blur(0.5rem)'}`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
