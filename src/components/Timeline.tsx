'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import AlistigoAnimation from './sections/experiences/alistigo';
import IsagriAnimation from './sections/experiences/Isagri';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineMenuRef = useRef<HTMLDivElement>(null);
  const boxMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => console.log('Timeline is visible'),
          onLeave: () => console.log('Timeline is not visible'),
          pin: timelineMenuRef.current,
          scrub: true,
        },
      })
      .to(boxMenuRef.current, { backgroundColor: 'green' });
  });

  return (
    <div className="relative flex flex-row overflow-hidden">
      {/* PARTIE FIXE */}
      <div ref={timelineMenuRef} className="h-full w-1/4">
        {/* <h1>{title}</h1> */}
        <div ref={boxMenuRef} className="size-20 bg-red-600" />
      </div>
      {/* PARTIE SCROLLABLE */}
      <div ref={timelineRef} className="grow">
        {/* Animation qui se pin, possèdant une end: "+100%" */}
        <AlistigoAnimation />
        {/* Animation qui se pin, possèdant une end: "+500%" */}
        <IsagriAnimation />
      </div>
    </div>
  );
};

export default Timeline;
