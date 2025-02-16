'use client';

import { useGSAP } from '@gsap/react';
import { FC, useRef } from 'react';

import gsap from '@/lib/gsapConfig';

type TimelineDotProps = {
  date: Date;
};

const TimelineDot: FC<TimelineDotProps> = ({ date }) => {
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: dotRef.current,
          start: 'center center',
          onEnter: () => console.log(date.toLocaleDateString()),
        },
      })
      .to(dotRef.current, { opacity: 1, duration: 0.5 });
  });

  return (
    <span className="opacity-0" ref={dotRef}>
      {date.toLocaleDateString()}
    </span>
  );
};

export default TimelineDot;
