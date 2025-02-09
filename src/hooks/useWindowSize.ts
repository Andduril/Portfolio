import { useEffect, useState } from 'react';

interface useWindowSizeProps {
  /**
   * Delay in milliseconds
   */
  delay?: number;
}

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = ({ delay = 200 }: useWindowSizeProps = {}): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let timeOutId: number;

    const handleResize = () => {
      clearTimeout(timeOutId);
      timeOutId = window.setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return windowSize;
};

export default useWindowSize;
