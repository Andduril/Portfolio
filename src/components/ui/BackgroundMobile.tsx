import { FC } from 'react';

import { cn } from '@/lib/utils';

interface GradientProps {
  display?: boolean;
  opacity?: number;
  radius?: number;
  colorStart?: string;
  colorEnd?: string;
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

const BackgroundMobile: FC<BackgroundProps> = ({ gradient = {}, dots = {}, lines = {} }) => {
  return (
    <div className={cn('overflow-hidden fixed inset-0')}>
      {lines.display && (
        <div
          className="absolute z-[-1] size-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${lines.color || '#222'} ${lines.width || 1}px, transparent 1px),
              linear-gradient(to bottom, ${lines.color || '#222'} ${lines.width || 1}px, transparent 1px)
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
          }}
        />
      )}
      {gradient.display && (
        <div
          className="absolute z-[-1] size-full"
          style={{
            background: `radial-gradient(circle ${gradient.radius || 200}px at center, ${gradient.colorStart || 'rgba(255, 0, 0, 0.5)'}, ${gradient.colorEnd || 'rgba(0, 0, 0, 1)'})`,
            opacity: gradient.opacity || 0.5,
          }}
        />
      )}
    </div>
  );
};

export default BackgroundMobile;
