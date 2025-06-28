'use client';

import { cn } from '@/utils/cn';
import { ComponentPropsWithRef, FC, useEffect, useState } from 'react';
import { motion, MotionProps, useMotionValue, useTransform } from 'motion/react';
import { animate } from 'motion';
import type { ClassValue } from 'clsx';

type CircleProgressProps = {
  initialValue?: number;
  value?: number;
  maxValue?: number;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  strokeColor: ClassValue;
} & MotionProps &
  ComponentPropsWithRef<'div'>;

const CircleProgress: FC<CircleProgressProps> = ({
  initialValue = 0,
  value = 100,
  maxValue = 100,
  strokeWidth = 10,
  duration = 2,
  delay = 0,
  strokeColor,
  className,
  ...props
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const safeValue = Math.max(0, Math.min(value, maxValue));
  const progressRatio = safeValue / maxValue;
  const offset = circumference * (1 - progressRatio);

  const [displayText, setDisplayText] = useState(Math.round(initialValue));
  const animatedValue = useMotionValue(initialValue);

  useEffect(() => {
    const controls = animate(animatedValue, safeValue, {
      duration,
      ease: 'easeOut',
      delay,
      onUpdate: (latest) => {
        setDisplayText(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [safeValue, animatedValue, duration]);

  // const displayText = useTransform(animatedValue, (v) => Math.round(v).toString());

  return (
    <motion.div className={cn('relative flex items-center justify-center', className)} {...props}>
      <svg viewBox="0 0 120 120" className="absolute size-full">
        {/* Définitions du glow */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fond du cercle */}
        <circle
          cx={60}
          cy={60}
          r={radius}
          fill="none"
          stroke="transparent"
          strokeWidth={strokeWidth}
        />

        {/* Progression */}
        <motion.circle
          cx={60}
          cy={60}
          r={radius}
          fill="none"
          className={cn(strokeColor)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          filter="url(#glow)"
          transform="rotate(-90 60 60)"
          initial={{
            strokeDashoffset: circumference * (1 - initialValue / maxValue),
            opacity: 0.25,
          }}
          animate={{ strokeDashoffset: offset, opacity: 1 }}
          transition={{ duration, ease: 'easeOut', delay }}
        />
      </svg>
      <motion.span
        initial={{ opacity: 0.1, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration, ease: 'easeOut', delay }}
        className="text-2xl"
      >
        {displayText}
      </motion.span>
    </motion.div>
  );
};

export default CircleProgress;
