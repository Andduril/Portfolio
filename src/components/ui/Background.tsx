'use client';

import { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface GradientProps {
  display?: boolean;
  opacity?: number;
  radius?: number;
  x?: number;
  y?: number;
  colorStart?: string;
  colorEnd?: string;
  fixed?: boolean;
}

interface DotsProps {
  display?: boolean;
  color?: string;
  radius?: number;
}

interface LineProps {
  display?: boolean;
  color?: string;
  width?: number;
}

interface BackgroundProps {
  gradient?: GradientProps;
  dots?: DotsProps;
  lines?: LineProps;
}

const Background: FC<BackgroundProps & ComponentPropsWithoutRef<'div'>> = ({
  gradient = {},
  dots = {},
  lines = {},
  className,
  ...props
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: gradient.x || 0, y: gradient.y || 0 });

  useEffect(() => {
    if (gradient.fixed) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [gradient.fixed]);

  useEffect(() => {
    if (gradient.fixed) {
      return;
    }

    let animationId: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => {
        const dx = cursorPosition.x + scrollPosition.x - prev.x;
        const dy = cursorPosition.y + scrollPosition.y - prev.y;
        const easingFactor = 0.05;
        return {
          x: prev.x + dx * easingFactor,
          y: prev.y + dy * easingFactor,
        };
      });

      animationId = requestAnimationFrame(updateSmoothPosition);
    };

    animationId = requestAnimationFrame(updateSmoothPosition);

    return () => cancelAnimationFrame(animationId);
  }, [cursorPosition, scrollPosition, gradient.fixed]);

  const dotOffset = dots.radius ? (dots.radius % 2 === 0 ? 0 : 0.5) : 0;

  return (
    <div className={cn('overflow-hidden', className)} {...props}>
      {lines.display && (
        <div
          className="absolute z-[-1] size-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${lines.color || '#222'} 1px, transparent 1px),
              linear-gradient(to bottom, ${lines.color || '#222'} 1px, transparent 1px);
              `,
            backgroundSize: '40px 40px',
          }}
        />
      )}
      {dots.display && (
        <div
          className="absolute z-[-1] size-full"
          style={{
            background: `radial-gradient(circle ${dots.radius || 2}px, ${dots.color || '#f00'} 100%, transparent 0)`,
            backgroundSize: '80px 80px',
            backgroundPosition: `${dotOffset}px ${dotOffset}px`,
          }}
        />
      )}
      {gradient.display && (
        <div
          className="absolute z-[-1] size-full"
          // Place the gradient with the smooth position
          style={{
            background: `radial-gradient(circle ${gradient.radius || 200}px at ${smoothPosition.x + 'px'} ${smoothPosition.y + 'px'}, ${gradient.colorStart || 'rgba(255, 0, 0, 0.5)'}, ${gradient.colorEnd || 'rgba(0, 0, 0, 1)'})`,
            opacity: gradient.opacity || 0.5,
          }}
        />
      )}
    </div>
  );
};

export default Background;
