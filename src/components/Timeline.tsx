'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import { AlistigoPart1, AlistigoPart2, AlistigoPart3 } from './sections/experiences/Alistigo';
import { IsagriPart1, IsagriPart2, IsagriPart3 } from './sections/experiences/Isagri';
import Section from './sections/Section';

const Timeline = () => {
  const timelineRef = useRef(null);
  const progressBarContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const dotRef = useRef(null);

  // Jonction
  const beginingRef = useRef(null);
  const endingRef = useRef(null);

  // Sections
  const isagriPart1Ref = useRef(null);
  const isagriPart2Ref = useRef(null);
  const isagriPart3Ref = useRef(null);

  const alistigoPart1Ref = useRef(null);
  const alistigoPart2Ref = useRef(null);
  const alistigoPart3Ref = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: dotRef.current,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: progressBarContainerRef.current,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: beginingRef.current,
          start: 'top 50%',
          end: 'middle top',
          scrub: 0.5,
        },
      })
      .from(dotRef.current, { y: '-50vh' }, '<')
      .from(progressBarRef.current, { height: 0 }, '<');
  });

  return (
    <Section ref={timelineRef} className="relative">
      {/* Begining Helper */}
      <div ref={beginingRef} className="absolute h-screen" />

      {/* Progress bar */}
      <div
        ref={progressBarContainerRef}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-[50vh] rounded-lg"
      >
        <div
          ref={progressBarRef}
          className="size-2 rounded-lg h-full bg-linear-to-b from-green-500 to-cyan-600"
        />
      </div>

      {/* Isagri */}
      <IsagriPart1 ref={isagriPart1Ref} />
      <IsagriPart2 ref={isagriPart2Ref} />
      <IsagriPart3 ref={isagriPart3Ref} />

      {/* Second animation */}
      <AlistigoPart1 ref={alistigoPart1Ref} />
      <AlistigoPart2 ref={alistigoPart2Ref} />
      <AlistigoPart3 ref={alistigoPart3Ref} />

      {/* Ending Helper */}
      <div ref={endingRef} className="h-screen" />

      {/* <div
        ref={dotRef}
        className="absolute top-[50vh] left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full size-8 bg-white"
      /> */}
    </Section>
  );
};

export default Timeline;
