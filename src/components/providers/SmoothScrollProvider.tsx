'use client';

import { ReactLenis } from 'lenis/react';
import { FC } from 'react';

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

const SmoothScrollProvider: FC<SmoothScrollProviderProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.1,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
