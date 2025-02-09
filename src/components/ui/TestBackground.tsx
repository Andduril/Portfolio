'use client';

import { useEffect, useState } from 'react';

const TestBackground = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log(cursorPosition);
  }, [cursorPosition]);

  return <div className="bg-red-500" />;
};

export default TestBackground;
